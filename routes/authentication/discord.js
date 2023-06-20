"use strict";

const settings = require("../../settings.json");

if (settings.api.client.oauth2.link.slice(-1) == "/")
  settings.api.client.oauth2.link = settings.api.client.oauth2.link.slice(0, -1);

if (settings.api.client.oauth2.callbackpath.slice(0, 1) !== "/")
  settings.api.client.oauth2.callbackpath = "/" + settings.api.client.oauth2.callbackpath;

if (settings.pterodactyl.domain.slice(-1) == "/")
  settings.pterodactyl.domain = settings.pterodactyl.domain.slice(0, -1);

const fetch = require('node-fetch');

const indexjs = require("../../index.js");
const log = require('../handlers/log')

const fs = require("fs");
const { renderFile } = require('ejs')
const vpnCheck = require("../handlers/vpnCheck");

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
    <head>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/nanobar/0.4.2/nanobar.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>HolaClient</title>
    </head>
    <body>
<svg class="bike" viewBox="0 0 48 30" width="48px" height="30px">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
		<g transform="translate(9.5,19)">
			<circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
			<g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
				<circle class="bike__spokes" r="5" />
				<circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
			</g>
		</g>
		<g transform="translate(24,19)">
			<g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
				<circle class="bike__pedals" r="4" />
				<circle class="bike__pedals" r="4" transform="rotate(180,0,0)" />
			</g>
		</g>
		<g transform="translate(38.5,19)">
			<circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
			<g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
				<circle class="bike__spokes" r="5" />
				<circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
			</g>
		</g>
		<polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
		<polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
		<path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10" />
		<polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
	</g>
</svg>
<style>
    * {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
:root {
	--hue: 223;
	--bg: rgb(41, 41, 41);
	--fg: rgb(41, 41, 41);
	--primary: rgb(41, 41, 41);
	--trans-dur: 0.3s;
	font-size: calc(16px + (32 - 16) * (100vw - 320px) / (2560 - 320));
}
body {
	color: var(--fg);
	display: flex;
	font: 1em/1.5 sans-serif;
	height: 100vh;
  margin: auto;
  font-family: poppins;
  overflow: auto;
  background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgb(63, 70, 69) 68%, rgba(255,25,25,1) 98%);
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
	transition:
		background-color var(--trans-dur),
		color var(--trans-dur);
}
@keyframes gradient {
  0% {
      background-position: 0% 0%;
  }
  50% {
      background-position: 100% 100%;
  }
  100% {
      background-position: 0% 0%;
  }
}
.bike {
	display: block;
	margin: auto;
	width: 16em;
	height: auto;
}
.bike__body,
.bike__front,
.bike__handlebars,
.bike__pedals,
.bike__pedals-spin,
.bike__seat,
.bike__spokes,
.bike__spokes-spin,
.bike__tire {
	animation: bikeBody 3s ease-in-out infinite;
	stroke: var(--primary);
	transition: stroke var(--trans-dur);
}
.bike__front {
	animation-name: bikeFront;
}
.bike__handlebars {
	animation-name: bikeHandlebars;
}
.bike__pedals {
	animation-name: bikePedals;
}
.bike__pedals-spin {
	animation-name: bikePedalsSpin;
}
.bike__seat {
	animation-name: bikeSeat;
}
.bike__spokes,
.bike__tire {
	stroke: currentColor;
}
.bike__spokes {
	animation-name: bikeSpokes;
}
.bike__spokes-spin {
	animation-name: bikeSpokesSpin;
}
.bike__tire {
	animation-name: bikeTire;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
	:root {
		--bg: hsl(var(--hue),90%,10%);
		--fg: hsl(var(--hue),90%,90%);
	}
}

/* Animations */
@keyframes bikeBody {
	from { stroke-dashoffset: 79; }
	33%,
	67% { stroke-dashoffset: 0; }
	to { stroke-dashoffset: -79; }
}
@keyframes bikeFront {
	from { stroke-dashoffset: 19; }
	33%,
	67% { stroke-dashoffset: 0; }
	to { stroke-dashoffset: -19; }
}
@keyframes bikeHandlebars {
	from { stroke-dashoffset: 10; }
	33%,
	67% { stroke-dashoffset: 0; }
	to { stroke-dashoffset: -10; }
}
@keyframes bikePedals {
	from {
		animation-timing-function: ease-in;
		stroke-dashoffset: -25.133;
	}
	33%,
	67% {
		animation-timing-function: ease-out;
		stroke-dashoffset: -21.991;
	}
	to {
		stroke-dashoffset: -25.133;
	}
}
@keyframes bikePedalsSpin {
	from { transform: rotate(0.1875turn); }
	to { transform: rotate(3.1875turn); }
}
@keyframes bikeSeat {
	from { stroke-dashoffset: 5; }
	33%,
	67% { stroke-dashoffset: 0; }
	to { stroke-dashoffset: -5; }
}
@keyframes bikeSpokes {
	from {
		animation-timing-function: ease-in;
		stroke-dashoffset: -31.416;
	}
	33%,
	67% {
		animation-timing-function: ease-out;
		stroke-dashoffset: -23.562;
	}
	to {
		stroke-dashoffset: -31.416;
	}
}
@keyframes bikeSpokesSpin {
	from { transform: rotate(0); }
	to { transform: rotate(3turn); }
}
@keyframes bikeTire {
	from {
		animation-timing-function: ease-in;
		stroke-dashoffset: 56.549;
		transform: rotate(0);
	}
	33% {
		stroke-dashoffset: 0;
		transform: rotate(0.33turn);
	}
	67% {
		animation-timing-function: ease-out;
		stroke-dashoffset: 0;
		transform: rotate(0.67turn);
	}
	to {
		stroke-dashoffset: -56.549;
		transform: rotate(1turn);
	}
}
</style>
<script type="text/javascript" defer>
      window.location.replace('/submitlogin?code=${encodeURIComponent(req.query.code.replace(/'/g, ''))}')
    </script>
    </body>
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
        if (!settings.maintenance.admins.includes(userinfo.id)) return  renderFile(
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
        let mainip = await db.get("ip-" + userinfo.id);
        if (mainip) {
          if (mainip !== ip) {
            allips = allips.filter(ip2 => ip2 !== mainip);
            if (allips.includes(ip)) {
              return res.send('You Cannot Create Alts!')
            }
            allips.push(ip);
            await db.set("ips", allips);
            await db.set("ip-" + userinfo.id, ip);
          }
        } else {
          if (allips.includes(ip)) {
            return res.send('You Cannot Create Alts!')
          }
          allips.push(ip);
          await db.set("ips", allips);
          await db.set("ip-" + userinfo.id, ip);
        }
      }
  
      if (newsettings.api.client.oauth2.ip["trust x-forwarded-for"]) {
        let accountid = getCookie(req, "accountid");
  
        if (accountid) {
          if (accountid !== userinfo.id) {
            return res.send('You Cannot Create Alts!');
          }
        }
  
        res.cookie('accountid', userinfo.id);
      }
      if (userinfo.verified == true) {

        if (newsettings.api.client.oauth2.ip.block.includes(ip)) return res.send("Your IP is blacklisted, You can't visit this site!")

        if ((newsettings.api.client.oauth2.ip["duplicate check"] == true) && ip !== '127.0.0.1') {
          const ipuser = await db.get(`ipuser-${ip}`)
          if (ipuser && ipuser !== userinfo.id) {
            renderFile(
              `./views/${newsettings.defaulttheme}/alerts/alt.ejs`,
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
            return
          } else if (!ipuser) {
            await db.set(`ipuser-${ip}`, userinfo.id)
          }
        }

        if (newsettings.api.client.j4r.enabled) {
          if (guildsinfo.message == '401: Unauthorized') return res.send("Please allow us to know what servers you are in to let the J4R system work properly. <a href='/login'>Login again</a>")
          let userj4r = await db.get(`j4rs-${userinfo.id}`) ?? []
          await guildsinfo

          let coins = await db.get(`coins-${userinfo.id}`) ?? 0

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
          await db.set(`coins-${userinfo.id}`, coins)
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
            const currentpackage = await db.get(`package-${userinfo.id}`)
            if (Object.values(newsettings.api.client.packages.rolePackages.roles).includes(currentpackage)) {
              for (const rolePackage of Object.keys(newsettings.api.client.packages.rolePackages.roles)) {
                if (newsettings.api.client.packages.rolePackages.roles[rolePackage] === currentpackage) {
                  if (!memberinfo.roles.includes(rolePackage)) {
                    await db.set(`package-${userinfo.id}`, newsettings.api.client.packages.default)
                  }
                }
              }
            }
            for (const role of memberinfo.roles) {
              if (newsettings.api.client.packages.rolePackages.roles[role]) {
                await db.set(`package-${userinfo.id}`, newsettings.api.client.packages.rolePackages.roles[role])
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
                  username: userinfo.id,
                  email: userinfo.email,
                  first_name: userinfo.username,
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
            console.log(`${userinfo.username} Has registered in the Dashboard using Discord Oauth2`)
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
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
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

