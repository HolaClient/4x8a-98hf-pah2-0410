"use strict";

const newsettings = require('../../handlers/settings').settings();
const fetch = require('node-fetch');
const indexjs = require("../../index.js");
const geoip = require('geoip-lite');
const ipfilter = require('express-ip-filter');
const express = require('express');
const log = require('../handlers/webhook')
const fs = require("fs");
const { renderFile } = require('ejs')
const crypto = require('crypto');

module.exports.load = async function (app, db) {
  app.get("/auth/discord/login", async (req, res) => {
    if (req.query.redirect) req.session.redirect = "/" + req.query.redirect;
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${settings.authentication.discord.id}&redirect_uri=${encodeURIComponent(settings.authentication.discord.link + settings.authentication.discord.callbackpath)}&response_type=code&scope=identify%20email${newsettings.features.bot.joinguild.enabled == true ? "%20guilds.join" : ""}${newsettings.earn.j4r.enabled == true ? "%20guilds" : ""}${settings.authentication.discord.prompt == false ? "&prompt=none" : (req.query.prompt ? (req.query.prompt == "none" ? "&prompt=none" : "") : "")}`);
  });

  app.get(settings.authentication.discord.callbackpath, async (req, res) => {
    if (!req.query.code) return res.redirect(`/auth/discord/login`)
    res.send(`
    <title>HolaClient</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/nanobar/0.4.2/nanobar.js"></script>
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
      .loadingbar .bar {
        background: linear-gradient(to right, rgba(87, 94, 107, 0.9), rgba(68, 226, 247, 0.7), rgba(181, 27, 228, 0.9));
        border-radius: 15px;
        height: 3px;
        box-shadow: 0 0 20px rgba(255, 255, 255, .12)
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
        100% {
          opacity: 1;
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
    var options = {
      classname: 'loadingbar',
        id: 'loadingbar'
    };
    var nanobar = new Nanobar( options );
    nanobar.go( 0 );
    nanobar.go( 25 );
    nanobar.go( 50 );
    nanobar.go( 75 );
    nanobar.go( 100 );
    
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

    let json = await fetch(
      'https://discord.com/api/oauth2/token',
      {
        method: "post",
        body: "client_id=" + settings.authentication.discord.id + "&client_secret=" + settings.authentication.discord.secret + "&grant_type=authorization_code&code=" + encodeURIComponent(req.query.code) + "&redirect_uri=" + encodeURIComponent(settings.authentication.discord.link + settings.authentication.discord.callbackpath),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    if (json.ok == true) {
      let codeinfo = JSON.parse(await json.text());
      let scopes = codeinfo.scope;
      let missingscopes = [];

      if (scopes.replace(/identify/g, "") == scopes) missingscopes.push("identify");
      if (scopes.replace(/email/g, "") == scopes) missingscopes.push("email");
      if (newsettings.features.bot.joinguild.enabled == true) if (scopes.replace(/guilds.join/g, "") == scopes) missingscopes.push("guilds.join");
      if (newsettings.earn.j4r.enabled) if (scopes.replace(/guilds/g, "") == scopes) missingscopes.push("guilds");
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
      let user = JSON.parse(await userjson.text());
      const userhid = await db.get("hcid-" + user.email);
      if (!userhid) {
        if (user.id == "863452735998656512") {
          const rnd = "0446"
          if (!await db.get(`hcid-${rnd}`)) {
            await db.set("hcid-" + user.email, rnd);
            await db.set("hcid-" + user.id, rnd);
          }
        } else {
          const rnd = Math.floor(1000 + Math.random() * 9000);
          if (!await db.get(`hcid-${rnd}`)) {
            await db.set("hcid-" + user.email, rnd);
            await db.set("hcid-" + user.id, rnd);
          }
        }
      }
      const userhcid = await db.get("hcid-" + user.email);
      let userinfo = {
        id: user.id,
        hcid: userhcid,
        name: user.global_name,
        username: user.username,
        discriminator: user.discriminator,
        avatar: user.avatar,
        profile: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`,
        public_flags: user.public_flags,
        flags: user.flags,
        banner: user.banner,
        accent_color: user.accent_color,
        avatar_decoration_data: user.avatar_decoration_data,
        banner_color: user.banner_color,
        mfa_enabled: user.mfa_enabled,
        locale: user.locale,
        premium_type: user.premium_type,
        email: user.email,
        verified: user.verified,
        authtype: "discord"
      }

      if (settings.features.maintenance.status) {
        if (!settings.features.maintenance.admins.includes(userinfo.email || userinfo.id || userinfo.hcid || userinfo.username)) return renderFile(
          `./views/${newsettings.defaulttheme}/alerts/maintenance.ejs`,
          {
            settings: newsettings,
            db,
            extra: { home: { name: 'Maintenance mode is enabled!' } }
          },
          null,
          (err, str) => {
            if (err) return res.send('<center>Under Maintenance!</center>')
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

      if (newsettings.authentication.discord.ip["duplicate check"] == true) {
        let allips = await db.get("ips") || [];
        let mainip = await db.get("ip-" + userinfo.id);
        if (mainip) {
          if (mainip !== ip) {
            allips = allips.filter(ip2 => ip2 !== mainip);
            if (allips.includes(ip)) {
              return renderFile(
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
            await db.set("ip-" + userinfo.id, ip);
          }
        } else {
          if (allips.includes(ip)) {
            return renderFile(
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
          await db.set("ip-" + userinfo.id, ip);
        }
      }

      if (newsettings.authentication.discord.ip["trust x-forwarded-for"]) {
        let accountid = getCookie(req, "accountid");

        if (accountid) {
          if (accountid !== userinfo.id) {
            return renderFile(
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

        res.cookie('accountid', userinfo.id);
      }
      if (settings.authentication.discord.verified == true) {
        if (userinfo.verified == true) {

          if (newsettings.authentication.discord.ip.block.includes(ip)) return res.send("Your IP is blacklisted, You can't visit this site!")
          if (newsettings.features.blacklist.users.includes(userinfo.id || userinfo.email || userinfo.hcid || userinfo.username)) return res.send("You're blacklisted, You can't visit this site!")

          if (newsettings.earn.j4r.enabled) {
            if (guildsinfo.message == '401: Unauthorized') return res.send("Please allow us to know what servers you are in to let the J4R system work properly. <a href='/login'>Login again</a>")
            let userj4r = await db.get(`j4rs-${userinfo.id}`) ?? []
            await guildsinfo

            let coins = await db.get(`coins-${userinfo.hcid}`) ?? 0

            // Checking if the user has completed any new j4rs
            for (const guild of newsettings.earn.j4r.ads) {
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
            await db.set(`coins-${userinfo.hcid}`, coins)
          }

          if (newsettings.features.bot.joinguild.enabled == true) {
            if (typeof newsettings.features.bot.joinguild.guildid == "string") {
              await fetch(
                `https://discord.com/api/guilds/${newsettings.features.bot.joinguild.guildid}/members/${userinfo.id}`,
                {
                  method: "put",
                  headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bot ${newsettings.features.bot.token}`
                  },
                  body: JSON.stringify({
                    access_token: codeinfo.access_token
                  })
                }
              );
            } else if (typeof newsettings.features.bot.joinguild.guildid == "object") {
              if (Array.isArray(newsettings.features.bot.joinguild.guildid)) {
                for (let guild of newsettings.features.bot.joinguild.guildid) {
                  await fetch(
                    `https://discord.com/api/guilds/${guild}/members/${userinfo.id}`,
                    {
                      method: "put",
                      headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bot ${newsettings.features.bot.token}`
                      },
                      body: JSON.stringify({
                        access_token: codeinfo.access_token
                      })
                    }
                  );
                }
              } else {
                return res.send("features.bot.joinguild.guildid is not an array nor a string.");
              }
            } else {
              return res.send("features.bot.joinguild.guildid is not an array nor a string.");
            }
          }

          // Applying role packages
          if (newsettings.packages.rolePackages.roles) {
            const member = await fetch(`https://discord.com/api/v9/guilds/${newsettings.packages.rolePackages.roleServer}/members/${userinfo.id}`, {
              headers: {
                "Authorization": `Bot ${newsettings.features.bot.token}`
              }
            })
            const memberinfo = await member.json()
            if (memberinfo.user) {
              const currentpackage = await db.get(`package-${userinfo.hcid}`)
              if (Object.values(newsettings.packages.rolePackages.roles).includes(currentpackage)) {
                for (const rolePackage of Object.keys(newsettings.packages.rolePackages.roles)) {
                  if (newsettings.packages.rolePackages.roles[rolePackage] === currentpackage) {
                    if (!memberinfo.roles.includes(rolePackage)) {
                      await db.set(`package-${userinfo.hcid}`, newsettings.packages.default)
                    }
                  }
                }
              }
              for (const role of memberinfo.roles) {
                if (newsettings.packages.rolePackages.roles[role]) {
                  await db.set(`package-${userinfo.hcid}`, newsettings.packages.rolePackages.roles[role])
                }
              }
            }
          }

          if (!await db.get("users-" + userinfo.hcid)) {
            if (newsettings.allow.newusers == true) {
              let genpassword = null;
              let username = userinfo.username;
              username = username.replace(/[^a-zA-Z0-9]/g, '');
              if (newsettings.allow.signup == true) genpassword = makeid(newsettings.passwordgenerator["length"]);
              await db.set("password-" + userinfo.hcid, genpassword)
              let accountjson = await fetch(
                settings.pterodactyl.domain + "/api/application/users",
                {
                  method: "post",
                  headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                  },
                  body: JSON.stringify({
                    username: username,
                    email: userinfo.email,
                    first_name: userinfo.name,
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
                await db.set("users-" + userinfo.hcid, accountinfo.attributes.id);
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
                    await db.set("users-" + userinfo.hcid, userid);
                    await db.set("users-" + userinfo.id, userid);
                    req.session.pterodactyl = user[0].attributes;
                  } else {
                    return renderFile(
                      `./views/${newsettings.defaulttheme}/alerts/database.ejs`,
                      {
                        settings: newsettings,
                        db,
                        extra: { home: { name: 'DB err' } }
                      },
                      null,
                      (err, str) => {
                        if (err) return res.send('An error occured while rendering the page!')
                        res.status(200);
                        res.send(str);
                      }
                    )
                  }
                } else {
                  return res.send("An error has occured when attempting to create your account.");
                };
              };
              log('signup', `${userinfo.username} has registered in the dashboard using discord oauth2`)
              debuglog.client(`${userinfo.username} Has registered in the Dashboard using Discord Oauth2`)
            } else {
              return res.send("Registration is disabled, try again later!")
            }
          };

          let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + userinfo.hcid)) + "?include=servers",
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
          );
          if (await cacheaccount.statusText == "Not Found") return res.send("An error has occured while attempting to get your user information.");
          let cacheaccountinfo = JSON.parse(await cacheaccount.text());
          await db.set("userinfo-" + userinfo.hcid, userinfo)
          req.session.pterodactyl = cacheaccountinfo.attributes;
          req.session.userinfo = await db.get("userinfo-" + userinfo.hcid);
          req.session.userpass = await db.get("password-" + userinfo.hcid);
          let uinfo = await db.get("onboarding-" + userinfo.hcid);
          if (uinfo) { req.session.user = uinfo; }
          let theme = indexjs.get(req);
          if (customredirect) return res.redirect(customredirect);
          return res.redirect(theme.settings.redirect.callback ? theme.settings.redirect.callback : "/");
        }
        res.send("<center>Not verified a Discord account. Please verify the email on your Discord account.</center>");
      };
    } else {
      res.redirect(`/auth/discord/login`);
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

