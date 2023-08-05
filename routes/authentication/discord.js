"use strict";

const settings = require("../../settings.json");
const fetch = require('node-fetch');
const indexjs = require("../../index.js");
const log = require('../handlers/webhook')
const fs = require("fs");
const { renderFile } = require('ejs')
const crypto = require('crypto');

module.exports.load = async function (app, db) {
  app.get("/login", async (req, res) => {
    if (req.query.redirect) req.session.redirect = "/" + req.query.redirect;
    let newsettings = JSON.parse(fs.readFileSync("./settings.json"));
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${settings.api.client.oauth2.id}&redirect_uri=${encodeURIComponent(settings.api.client.oauth2.link + settings.api.client.oauth2.callbackpath)}&response_type=code&scope=identify%20email${newsettings.api.client.bot.joinguild.enabled == true ? "%20guilds.join" : ""}${newsettings.api.client.j4r.enabled == true ? "%20guilds" : ""}${settings.api.client.oauth2.prompt == false ? "&prompt=none" : (req.query.prompt ? (req.query.prompt == "none" ? "&prompt=none" : "") : "")}`);
  });

  app.get("/logout", (req, res) => {
    let theme = indexjs.get(req);
    req.session.destroy(() => {
      return res.redirect(theme.settings.redirect.logout ? theme.settings.redirect.logout : "/");
    });
  });

  app.get(settings.api.client.oauth2.callbackpath, async (req, res) => {
    if (!req.query.code) return res.redirect(`/login`)
    res.send(`
    <title>HolaClient</title>
    <style>
      .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(10, 10, 10);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
      }
    
      .preloader.hidden {
        opacity: 0;
        pointer-events: none;
      }
    
      .loader img {
        width: 150px;
        height: 150px;
        animation: fade 1s infinite;
      }
    
      @keyframes fade {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    
      .connection-error {
        color: red;
        font-size: 18px;
        text-align: center;
        margin-top: 20px;
      }
    </style>
    <script>
      function checkConnection() {
        var connectionErrorElement = document.getElementById('connectionError');
        var online = navigator.onLine;
  
        if (!online) {
          connectionErrorElement.textContent = 'Connection error. Please check your network connection.';
          connectionErrorElement.style.display = 'block';
          return false;
        } else {
          connectionErrorElement.style.display = 'none';
          return true;
        }
      }
  
      $(window).on('load', function() {
        if (checkConnection()) {
          $('.preloader').fadeOut('slow', function() {
            $(this).addClass('hidden');
          });
        }
      });
    </script>
    <div class="preloader">
    <div class="loader">
      <img src="https://media.discordapp.net/attachments/1082632266506850344/1108449684709703770/image.png">
    </div>
    <div id="connectionError" class="connection-error"></div>
  </div>
<script type="text/javascript" defer>
      window.location.replace('/submitlogin?code=${encodeURIComponent(req.query.code.replace(/'/g, ''))}')
    </script>
    `)
  })

  app.get(`/submitlogin`, async (req, res) => {
    let customredirect = req.session.redirect;
    delete req.session.redirect;
    if (!req.query.code) return res.send("Missing code.")

    const newsettings = require('../../settings.json');

    let json = await fetch(
      'https://discord.com/api/oauth2/token',
      {
        method: "post",
        body: "client_id=" + settings.api.client.oauth2.id + "&client_secret=" + settings.api.client.oauth2.secret + "&grant_type=authorization_code&code=" + encodeURIComponent(req.query.code) + "&redirect_uri=" + encodeURIComponent(settings.api.client.oauth2.link + settings.api.client.oauth2.callbackpath),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    if (json.ok == true) {
      let codeinfo = JSON.parse(await json.text());
      let scopes = codeinfo.scope;
      let missingscopes = [];

      if (scopes.replace(/identify/g, "") == scopes) missingscopes.push("identify");
      if (scopes.replace(/email/g, "") == scopes) missingscopes.push("email");
      if (newsettings.api.client.bot.joinguild.enabled == true) if (scopes.replace(/guilds.join/g, "") == scopes) missingscopes.push("guilds.join");
      if (newsettings.api.client.j4r.enabled) if (scopes.replace(/guilds/g, "") == scopes) missingscopes.push("guilds");
      if (missingscopes.length !== 0) return res.send("Missing scopes: " + missingscopes.join(", "));
      let userjson = await fetch(
        'https://discord.com/api/users/@me',
        {
          method: "get",
          headers: {
            "Authorization": `Bearer ${codeinfo.access_token}`
          }
        }
      );
      let userinfo = JSON.parse(await userjson.text());

      if (settings.maintenance.status) {
        if (!settings.maintenance.admins.includes(userinfo.email)) return  renderFile(
          `./views/${newsettings.defaulttheme}/alerts/maintenance.ejs`,
          {
            settings: newsettings,
            db,
            extra: { home: { name: 'VPN Detected' } }
          },
          null,
          (err, str) => {
            if (err) return res.send('<center>ALT ACCOUNT DETECTED!</center>')
            res.status(200);
            res.send(str);
          }
        )
      }

      let guildsjson = await fetch(
        'https://discord.com/api/users/@me/guilds',
        {
          method: "get",
          headers: {
            "Authorization": `Bearer ${codeinfo.access_token}`
          }
        }
      );
      let guildsinfo = await guildsjson.json();
      let ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.headers['x-client-ip'] || req.headers['x-forwarded'] || req.socket.remoteAddress;
        
      
      if (newsettings.api.client.oauth2.ip["duplicate check"] == true) {
        let allips = await db.get("ips") || [];
        let mainip = await db.get("ip-" + userinfo.email);
        if (mainip) {
          if (mainip !== ip) {
            allips = allips.filter(ip2 => ip2 !== mainip);
            if (allips.includes(ip)) {
              return  renderFile(
                `./views/${newsettings.defaulttheme}/alerts/dupe.ejs`,
                {
                  settings: newsettings,
                  db,
                  extra: { home: { name: 'ALT Detected' } }
                },
                null,
                (err, str) => {
                  if (err) return res.send('<center>ALT ACCOUNT DETECTED!</center>')
                  res.status(200);
                  res.send(str);
                }
              )
            }
            allips.push(ip);
            await db.set("ips", allips);
            await db.set("ip-" + userinfo.email, ip);
          }
        } else {
          if (allips.includes(ip)) {
            return  renderFile(
              `./views/${newsettings.defaulttheme}/alerts/dupe.ejs`,
              {
                settings: newsettings,
                db,
                extra: { home: { name: 'ALT Detected' } }
              },
              null,
              (err, str) => {
                if (err) return  renderFile(
                  `./views/${newsettings.defaulttheme}/alerts/dupe.ejs`,
                  {
                    settings: newsettings,
                    db,
                    extra: { home: { name: 'ALT Detected' } }
                  },
                  null,
                  (err, str) => {
                    if (err) return res.send('<center>ALT ACCOUNT DETECTED!</center>')
                    res.status(200);
                    res.send(str);
                  }
                )
                res.status(200);
                res.send(str);
              }
            )
          }
          allips.push(ip);
          await db.set("ips", allips);
          await db.set("ip-" + userinfo.email, ip);
        }
      }
  
      if (newsettings.api.client.oauth2.ip["trust x-forwarded-for"]) {
        let accountid = getCookie(req, "accountid");
  
        if (accountid) {
          if (accountid !== userinfo.email) {
            return  renderFile(
              `./views/${newsettings.defaulttheme}/alerts/dupe.ejs`,
              {
                settings: newsettings,
                db,
                extra: { home: { name: 'ALT Detected' } }
              },
              null,
              (err, str) => {
                if (err) return res.send('<center>ALT ACCOUNT DETECTED!</center>')
                res.status(200);
                res.send(str);
              }
            )
          }
        }
  
        res.cookie('accountid', userinfo.email);
      }
      if (userinfo.verified == true) {

        if (newsettings.api.client.oauth2.ip.block.includes(ip)) return res.send("Your IP is blacklisted, You can't visit this site!")

        if (newsettings.api.client.j4r.enabled) {
          if (guildsinfo.message == '401: Unauthorized') return res.send("Please allow us to know what servers you are in to let the J4R system work properly. <a href='/login'>Login again</a>")
          let userj4r = await db.get(`j4rs-${userinfo.id}`) ?? []
          await guildsinfo

          let coins = await db.get(`coins-${userinfo.email}`) ?? 0

          // Checking if the user has completed any new j4rs
          for (const guild of newsettings.api.client.j4r.ads) {
            if ((guildsinfo.find(g => g.id === guild.id)) && (!userj4r.find(g => g.id === guild.id))) {
              userj4r.push({
                id: guild.id,
                coins: guild.coins
              })
              coins += guild.coins
            }
          }

          // Checking if the user has left any j4r servers
          for (const j4r of userj4r) {
            if (!guildsinfo.find(g => g.id === j4r.id)) {
              userj4r = userj4r.filter(g => g.id !== j4r.id)
              coins -= j4r.coins
            }
          }

          await db.set(`j4rs-${userinfo.id}`, userj4r)
          await db.set(`coins-${userinfo.email}`, coins)
        }

        if (newsettings.api.client.bot.joinguild.enabled == true) {
          if (typeof newsettings.api.client.bot.joinguild.guildid == "string") {
            await fetch(
              `https://discord.com/api/guilds/${newsettings.api.client.bot.joinguild.guildid}/members/${userinfo.id}`,
              {
                method: "put",
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bot ${newsettings.api.client.bot.token}`
                },
                body: JSON.stringify({
                  access_token: codeinfo.access_token
                })
              }
            );
          } else if (typeof newsettings.api.client.bot.joinguild.guildid == "object") {
            if (Array.isArray(newsettings.api.client.bot.joinguild.guildid)) {
              for (let guild of newsettings.api.client.bot.joinguild.guildid) {
                await fetch(
                  `https://discord.com/api/guilds/${guild}/members/${userinfo.id}`,
                  {
                    method: "put",
                    headers: {
                      'Content-Type': 'application/json',
                      "Authorization": `Bot ${newsettings.api.client.bot.token}`
                    },
                    body: JSON.stringify({
                      access_token: codeinfo.access_token
                    })
                  }
                );
              }
            } else {
              return res.send("api.client.bot.joinguild.guildid is not an array nor a string.");
            }
          } else {
            return res.send("api.client.bot.joinguild.guildid is not an array nor a string.");
          }
        }

        // Applying role packages
        if (newsettings.api.client.packages.rolePackages.roles) {
          const member = await fetch(`https://discord.com/api/v9/guilds/${newsettings.api.client.packages.rolePackages.roleServer}/members/${userinfo.id}`, {
            headers: {
              "Authorization": `Bot ${newsettings.api.client.bot.token}`
            }
          })
          const memberinfo = await member.json()
          if (memberinfo.user) {
            const currentpackage = await db.get(`package-${userinfo.email}`)
            if (Object.values(newsettings.api.client.packages.rolePackages.roles).includes(currentpackage)) {
              for (const rolePackage of Object.keys(newsettings.api.client.packages.rolePackages.roles)) {
                if (newsettings.api.client.packages.rolePackages.roles[rolePackage] === currentpackage) {
                  if (!memberinfo.roles.includes(rolePackage)) {
                    await db.set(`package-${userinfo.email}`, newsettings.api.client.packages.default)
                  }
                }
              }
            }
            for (const role of memberinfo.roles) {
              if (newsettings.api.client.packages.rolePackages.roles[role]) {
                await db.set(`package-${userinfo.email}`, newsettings.api.client.packages.rolePackages.roles[role])
              }
            }
          }
        }

        if (!await db.get("users-" + userinfo.id)) {
          if (newsettings.api.client.allow.newusers == true) {
            let genpassword = null;
            if (newsettings.api.client.passwordgenerator.signup == true) genpassword = makeid(newsettings.api.client.passwordgenerator["length"]);
            let accountjson = await fetch(
              settings.pterodactyl.domain + "/api/application/users",
              {
                method: "post",
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${settings.pterodactyl.key}`
                },
                body: JSON.stringify({
                  username: userinfo.username,
                  email: userinfo.email,
                  first_name: userinfo.id,
                  last_name: "discord-auth",
                  password: genpassword
                })
              }
            );
            if (await accountjson.status == 201) {
              let accountinfo = JSON.parse(await accountjson.text());
              let userids = await db.get("users") ? await db.get("users") : [];
              userids.push(accountinfo.attributes.id);
              await db.set("users", userids);
              await db.set("users-" + userinfo.id, accountinfo.attributes.id);
              req.session.newaccount = true;
              req.session.password = genpassword;
            } else {
              let accountlistjson = await fetch(
                settings.pterodactyl.domain + "/api/application/users?include=servers&filter[email]=" + encodeURIComponent(userinfo.email),
                {
                  method: "get",
                  headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                  }
                }
              );
              let accountlist = await accountlistjson.json();
              let user = accountlist.data.filter(acc => acc.attributes.email == userinfo.email);
              if (user.length == 1) {
                let userid = user[0].attributes.id;
                let userids = await db.get("users") ? await db.get("users") : [];
                if (userids.filter(id => id == userid).length == 0) {
                  userids.push(userid);
                  await db.set("users", userids);
                  await db.set("users-" + userinfo.id, userid);
                  req.session.pterodactyl = user[0].attributes;
                } else {
                  return res.send("We have detected your accont registered on our database but your account is missing from the panel, hence we can't log you in.");
                }
              } else {
                return res.send("An error has occured when attempting to create your account.");
              };
            };
            log('signup', `${userinfo.username} has registered in the dashboard using discord oauth2`)
            debuglog.client(`${userinfo.username} Has registered in the Dashboard using Discord Oauth2`)
          } else {
            return res.send("New users cannot signup currently.")
          }
        };

        let cacheaccount = await fetch(
          settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + userinfo.id)) + "?include=servers",
          {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
          }
        );
        if (await cacheaccount.statusText == "Not Found") return res.send("An error has occured while attempting to get your user information.");
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        req.session.pterodactyl = cacheaccountinfo.attributes;

        req.session.userinfo = userinfo;
        let theme = indexjs.get(req);
        if (customredirect) return res.redirect(customredirect);
        return res.redirect(theme.settings.redirect.callback ? theme.settings.redirect.callback : "/");
      };
      res.send("<center>Not verified a Discord account. Please verify the email on your Discord account.</center>");
    } else {
      res.redirect(`/login`);
    };
  });
};

function makeid(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
  const charactersLength = characters.length;
  const randomBytes = crypto.randomBytes(length);
  let result = '';

  for (let i = 0; i < length; i++) {
    const index = randomBytes[i] % charactersLength;
    result += characters.charAt(index);
  }

  return result;
}
function getCookie(req, cname) {
  let cookies = req.headers.cookie;
  if (!cookies) return null;
  let name = cname + "=";
  let ca = cookies.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return "";
}

