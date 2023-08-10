"use strict";

const chalk = require("chalk");

console.clear();
console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Loading Packages... "));

const fs = require("fs");
const fetch = require('node-fetch');
const path = require('path');
const log = require('./routes/handlers/webhook')
global.debuglog = require('./lib/debug');

console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Packages Loaded ✔️ "));
console.log(" ");
console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Loading Settings... "));

const settings = require("./settings.json");

console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Settings Loaded ✔️ "));
console.log(" ");

const defaultthemesettings = {
    index: "index.ejs",
    notfound: "index.ejs",
    redirect: {},
    pages: {},
    mustbeloggedin: [],
    mustbeadmin: [],
    variables: {}
};

module.exports.renderdataeval =
    `(async () => {
   let newsettings = JSON.parse(require("fs").readFileSync("./settings.json"));
	const JavaScriptObfuscator = require('javascript-obfuscator');

 
    let renderdata = {
      req: req,
      settings: newsettings,
      userinfo: req.session.userinfo,
      packagename: req.session.userinfo ? await db.get("package-" + req.session.userinfo.email) ? await db.get("package-" + req.session.userinfo.email) : newsettings.api.client.packages.default : null,
      extraresources: !req.session.userinfo ? null : (await db.get("extra-" + req.session.userinfo.email) ? await db.get("extra-" + req.session.userinfo.email) : {
        ram: 0,
        disk: 0,
        cpu: 0,
        servers: 0,
        backups: 0,
        allocations: 0,
        databases: 0
      }),
		packages: req.session.userinfo ? newsettings.api.client.packages.list[await db.get("package-" + req.session.userinfo.email) ? await db.get("package-" + req.session.userinfo.email) : newsettings.api.client.packages.default] : null,
      coins: newsettings.api.client.coins.enabled == true ? (req.session.userinfo ? (await db.get("coins-" + req.session.userinfo.email) ? await db.get("coins-" + req.session.userinfo.email) : 0) : null) : null,
      pterodactyl: req.session.pterodactyl,
      theme: theme.name,
      extra: theme.settings.variables,
	  db: db
    };
    if (newsettings.api.arcio.enabled == true && req.session.arcsessiontoken) {
      renderdata.arcioafktext = JavaScriptObfuscator.obfuscate(\`
        let token = "\${req.session.arcsessiontoken}";
        let everywhat = \${newsettings.api.arcio["afk page"].every};
        let gaincoins = \${newsettings.api.arcio["afk page"].coins};
        let arciopath = "\${newsettings.api.arcio["afk page"].path.replace(/\\\\/g, "\\\\\\\\").replace(/"/g, "\\\\\\"")}";

        \${arciotext}
      \`);
    };

    return renderdata;
  })();`;

console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Loading Database... "));

const Keyv = require("keyv");
const crypto = require('crypto');
const db = new Keyv("sqlite://storage/databases/db.sqlite");

function hashData(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}
async function storeData(key, data) {
    const hashedData = hashData(data);
    await db.set(key, hashedData);
    console.log(`Data for key '${key}' stored in the database.`);
}
async function retrieveData(key, data) {
    const hashedData = await db.get(key);
    const hashedInput = hashData(data);
    const isMatch = (hashedData === hashedInput);
    console.log(`Data for key '${key}' matches: ${isMatch}`);
}
db.on('error', err => {
    console.log(chalk.red("[DATABASE] An error has occurred when attempting to access the database."))
});

module.exports.db = db;
module.exports.storeData = storeData;
module.exports.retrieveData = retrieveData;

console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Database Loaded ✔️ "));
console.log(" ");
console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Loading Web Files... "));

const express = require("express");
const app = express();
require('express-ws')(app);

console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" WebFiles Loaded ✔️ "));
console.log(" ");
console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Loading Addons... "));

const ejs = require("ejs");
const session = require("express-session");
const indexjs = require("./index.js");

console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Addons   Loaded ✔️ "));
console.log(" ");
console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Loading Website... "));

function generateRandomKey(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }
  return key;
}
const settingsPath = "./settings.json";
if (settings.website.secret === "RANDOM") {
  const randomKey = generateRandomKey(16);
  const existingSettings = JSON.parse(fs.readFileSync(settingsPath));
  existingSettings.website.secret = randomKey;
  fs.writeFileSync(settingsPath, JSON.stringify(existingSettings, null, 2));
}
module.exports.app = app;
app.use(session({
    secret: settings.website.secret,
    resave: false,
    saveUninitialized: false
}));
app.use(express.json({
    inflate: true,
    limit: '500kb',
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined
}));

console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Web View Loaded ✔️ "));
console.log(" ");
console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Loading APIs... "));

function loadRoute(directory, app, db) {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.js'));
    files.forEach(file => {
        const routeModule = require(path.join(directory, file));
        if (typeof routeModule.load === 'function') {
            routeModule.load(app, db);
        } else {
            console.log(chalk.red("WARNING! ") + chalk.white(`${file} is not being correctly configured hence not loaded!`))
        }
    });
}
loadRoute(path.join(__dirname, 'routes'), app, db);
loadRoute(path.join(__dirname, 'routes', 'admin'), app, db);
if (settings.api.client.api.enabled === true) {loadRoute(path.join(__dirname, 'routes', 'application'), app, db);}
loadRoute(path.join(__dirname, 'routes', 'authentication'), app, db);
loadRoute(path.join(__dirname, 'routes', 'billing'), app, db);
loadRoute(path.join(__dirname, 'routes', 'earn'), app, db);
loadRoute(path.join(__dirname, 'routes', 'structures'), app, db);
loadRoute(path.join(__dirname, 'routes', 'controller'), app, db);
loadRoute(path.join(__dirname, 'routes', 'users'), app, db);
loadRoute(path.join(__dirname, 'routes', 'features'), app, db);

console.log(" ");
console.log(chalk.gray("+ ") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" ------+ Finalizing... "));

if (settings.api.client.api.code === 'RANDOM') {
  const length = 24;
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomCode = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, characters.length);
    randomCode += characters.charAt(randomIndex);
  }
  settings.api.client.api.code = "hcla_" + randomCode;
}
const listener = app.listen(settings.website.port, function() {
    console.clear()
    console.log(chalk.gray("  "));
    console.log("  _    _       _        _____ _ _            _   ");
    console.log(" | |  | |     | |      / ____| (_)          | |  ");
    console.log(" | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ ");
    console.log(" |  __  |/ _ \\| |/ _` | |    | | |/ _ \\ '_ \\| __|");
    console.log(" | |  | | (_) | | (_| | |____| | |  __/ | | | |_ ");
    console.log(" |_|  |_|\\___/|_|\\__,_|\\_____|_|_|\\___|_| |_|\\__|");
    console.log(chalk.white(" "))
    console.log(chalk.white("=====================SOCIAL======================"));
    console.log(chalk.gray("[+] ") + chalk.white("[") + chalk.cyan("Discord") + chalk.white("]") + chalk.white(" https://discord.gg/CvqRH9TrYK "));
    console.log(chalk.gray("[+] ") + chalk.white("[") + chalk.cyan("Github ") + chalk.white("]") + chalk.white(" https://github.com/CR072/HolaClient "));
    console.log(chalk.gray("[+] ") + chalk.white("[") + chalk.cyan("Holasmp") + chalk.white("]") + chalk.white(" https://discord.gg/Dms5dsmVAs "));
    console.log(chalk.white("================================================="));
    console.log(" ");
    console.log(chalk.gray("[🔗]") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully loaded HolaClient at ") + chalk.cyan(settings.api.client.oauth2.link + "/"));
    console.log(" ");
    console.log(chalk.gray("[⌚]") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully saved uptime status "));
    console.log(" ");

    setTimeout(() => {
        loadRoute(path.join(__dirname, 'lib'), app, db);
    }, 3000);
});
const newCode = `
<footer style="background-color: rgba(0,0,0,.2);" class="card card-body">
   <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; align-items: center;">
         <small style="color: white; font-weight: 100; font-size: 14px;">
            &copy; <script>document.write(new Date().getFullYear());</script> <a style="color: aquamarine; font-weight: 100; font-size: 14px;" href="<%= settings.discord %>"><%= settings.name %></a>
         </small>
      </div>
           <div class="text-center">
            <a style="color: aquamarine; font-weight: 100; font-size: 14px;" href="https://github.com/HolaClient/HolaClient">HolaClient v<%= settings.version %></a>
           </div>
      <div>
         <a href="../tos">
         <button style="color: aquamarine; background-color: transparent; border: none; cursor: pointer; font-size: 14px;">TOS</button>
         </a>
         <a href="../pp">
         <button style="color: aquamarine; background-color: transparent; border: none; cursor: pointer; font-size: 14px;">Policy</button>
         </a>
      </div>
   </div>
</footer>
`;
const filePath = "./views/default/components/footer.ejs";
fs.writeFile(filePath, newCode, (err) => {
    if (err) {
        console.error('An error occured while checking HolaClient files!');
    } else {
        console.log(chalk.gray("[📂]") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully scanned all HolaClient's files "));
    }
});
var cache = false;
app.use(function(req, res, next) {
    let manager = (JSON.parse(fs.readFileSync("./settings.json").toString())).api.client.ratelimits;
    if (manager[req._parsedUrl.pathname]) {
        if (cache == true) {
            setTimeout(async () => {
                let allqueries = Object.entries(req.query);
                let querystring = "";
                for (let query of allqueries) {
                    querystring = querystring + "&" + query[0] + "=" + query[1];
                }
                querystring = "?" + querystring.slice(1);
                res.redirect((req._parsedUrl.pathname.slice(0, 1) == "/" ? req._parsedUrl.pathname : "/" + req._parsedUrl.pathname) + querystring);
            }, 1000);
            return;
        } else {
            cache = true;
            setTimeout(async () => {
                cache = false;
            }, 1000 * manager[req._parsedUrl.pathname]);
        }
    };
    next();
});
app.all("*", async (req, res) => {
    if (req.session.pterodactyl)
        if (req.session.pterodactyl.id !== await db.get("users-" + req.session.userinfo.id)) return res.redirect("/login?prompt=none");
    let theme = indexjs.get(req);
    let newsettings = JSON.parse(require("fs").readFileSync("./settings.json"));
    if (newsettings.api.arcio.enabled == true) req.session.arcsessiontoken = Math.random().toString(36).substring(2, 15);
    if (theme.settings.mustbeloggedin.includes(req._parsedUrl.pathname))
        if (!req.session.userinfo || !req.session.pterodactyl) return res.redirect("/auth");
    if (theme.settings.mustbeadmin.includes(req._parsedUrl.pathname)) {
        ejs.renderFile(
            `./views/${theme.name}/${theme.settings.unauthorized}`,
            await eval(indexjs.renderdataeval),
            null,
            async function(err, str) {
                delete req.session.newaccount;
                delete req.session.password;
                if (!req.session.userinfo || !req.session.pterodactyl) {
                    if (err) {
                        console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                        console.log(err);
                        return  renderFile(
                          `./views/${newsettings.defaulttheme}/errors/500.ejs`,
                          {
                            settings: newsettings,
                            db,
                            extra: { home: { name: 'error' } }
                          },
                          null,
                          (err, str) => {
                            if (err) return res.send('Error 200')
                            res.status(200);
                            res.send(str);
                          }
                        )
                    };
                    res.status(200);
                    return res.send(str);
                };

                let cacheaccount = await fetch(
                    settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers", {
                        method: "get",
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${settings.pterodactyl.key}`
                        }
                    }
                );
                if (await cacheaccount.statusText == "Not Found") {
                    if (err) {
                        console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                        console.log(err);
                        return res.send(``)
                    };
                    return res.send(str);
                };
                let cacheaccountinfo = JSON.parse(await cacheaccount.text());

                req.session.pterodactyl = cacheaccountinfo.attributes;
                if (cacheaccountinfo.attributes.root_admin !== true) {
                    if (err) {
                        console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                        console.log(err);
                        return  renderFile(
                          `./views/${newsettings.defaulttheme}/errors/500.ejs`,
                          {
                            settings: newsettings,
                            db,
                            extra: { home: { name: 'error' } }
                          },
                          null,
                          (err, str) => {
                            if (err) return res.send('Error 200')
                            res.status(200);
                            res.send(str);
                          }
                        )
                    };
                    return res.send(str);
                };

                ejs.renderFile(
                    `./views/${theme.name}/${theme.settings.pages[req._parsedUrl.pathname.slice(1)] ? theme.settings.pages[req._parsedUrl.pathname.slice(1)] : theme.settings.notfound}`,
                    await eval(indexjs.renderdataeval),
                    null,
                    function(err, str) {
                        delete req.session.newaccount;
                        delete req.session.password;
                        if (err) {
                            console.log(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`);
                            console.log(err);
                            return res.send("<center>Well, This is awkward. Hola Client has crashed</center>");
                        };
                        res.status(200);
                        res.send(str);
                    });
            });
        return;
    };
    const data = await eval(indexjs.renderdataeval)
    ejs.renderFile(
        `./views/${theme.name}/${theme.settings.pages[req._parsedUrl.pathname.slice(1)] ? theme.settings.pages[req._parsedUrl.pathname.slice(1)] : theme.settings.notfound}`,
        data,
        null,
        function(err, str) {
            delete req.session.newaccount;
            delete req.session.password;
            if (err) {
                console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                console.log(err);
                return  renderFile(
                  `./views/${newsettings.defaulttheme}/errors/500.ejs`,
                  {
                    settings: newsettings,
                    db,
                    extra: { home: { name: 'error' } }
                  },
                  null,
                  (err, str) => {
                    if (err) return res.send('Error 200')
                    res.status(200);
                    res.send(str);
                  }
                )
            };
            res.status(200);
            res.send(str);
        });
});
module.exports.get = function(req) {
    let defaulttheme = JSON.parse(fs.readFileSync("./settings.json")).defaulttheme;
    let tname = encodeURIComponent(getCookie(req, "theme"));
    let name = (
        tname ?
        fs.existsSync(`./views/${tname}`) ?
        tname :
        defaulttheme :
        defaulttheme
    )
    return {
        settings: (
            fs.existsSync(`./views/${name}/pages.json`) ?
            JSON.parse(fs.readFileSync(`./views/${name}/pages.json`).toString()) :
            defaultthemesettings
        ),
        name: name
    };
};
log('status', `Successfully loaded HolaClient at ${settings.api.client.oauth2.link}/`)
module.exports.islimited = async function() {
    return cache == true ? false : true;
}

module.exports.ratelimits = async function(length) {
    if (cache == true) return setTimeout(
        indexjs.ratelimits, 1
    );
    cache = true;
    setTimeout(
        async function() {
            cache = false;
        }, length * 1000
    )
}
global.Buffer = global.Buffer || require('buffer').Buffer;
if (typeof btoa === 'undefined') {
    global.btoa = function(str) {
        return new Buffer(str, 'binary').toString('base64');
    };
}
if (typeof atob === 'undefined') {
    global.atob = function(b64Encoded) {
        return new Buffer(b64Encoded, 'base64').toString('binary');
    };
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
