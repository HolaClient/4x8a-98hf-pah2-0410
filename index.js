"use strict";

//load modules
const log = require('./routes/handlers/webhook')
const arciotext = require('./routes/handlers/arciotext')
const indexjs = require("./index.js");
global.debuglog = require('./lib/debug');
global.l = require('./lib/debug');

//indicate startup
l.s(`Startup initiated...`)
l.s(`Loading modules...`)


//load packages
l.s(`Loading packages...`)
const chalk = require("chalk");
const fs = require("fs");
const { renderFile } = require('ejs')
const ora = require('ora');
const geoip = require('geoip-lite');
const fetch = require('node-fetch');
const path = require('path');
const express = require("express");
const app = express();
const ejs = require("ejs");
const session = require("express-session");

//load settings
l.s(`Loading settings...`)
global.settings = require('./handlers/settings').settings();
global.eggconfig = require('./eggs.json')
global.alerts = require(`./lang/${settings.website.language}/alerts.json`).alerts
const newsettings = require('./handlers/settings').settings();
const defaultthemesettings = {
    index: "index.ejs",
    notfound: "index.ejs",
    redirect: {},
    pages: {},
    mustbeloggedin: [],
    mustbeadmin: [],
    variables: {}
};

//load express addons
l.s(`Loading addons...`)
require('express-ws')(app);
module.exports.app = app;

//load database
l.s(`Loading database...`)
const db = require('./handlers/database').db();
module.exports.db = db;

//load website
l.s(`Loading website...`)
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

//load country blacklist
const blacklistedCountry = settings.features.blacklist.country;
app.use((req, res, next) => {
    const userCountry = geoip.lookup(req.ip);
    if (blacklistedCountry.includes(userCountry?.country)) {
        res.status(403)
        renderFile(
            `./views/${settings.defaulttheme}/alerts/blacklisted.ejs`,
            { settings: settings, db, extra: { home: { name: 'error' } } },
            null,
            (err, str) => {
                if (err) return res.send('Access restriected from your country!');
                res.status(403);
                res.send(str);
            }
        );
    } else {
        next();
    }
});

//load routes
l.s(`Loading routes...`)
loadRoute(path.join(__dirname, 'routes'), app, db); l.r(`admins`)
loadRoute(path.join(__dirname, 'routes', 'admin'), app, db);
if (settings.api.enabled === true) { l.r(`APIs`); loadRoute(path.join(__dirname, 'routes', 'application'), app, db); }
loadRoute(path.join(__dirname, 'routes', 'authentication'), app, db); l.r(`authenticators`)
loadRoute(path.join(__dirname, 'routes', 'billing'), app, db); l.r(`billers`)
loadRoute(path.join(__dirname, 'routes', 'earn'), app, db); l.r(`earn`)
loadRoute(path.join(__dirname, 'routes', 'structures'), app, db); l.r(`structures`)
loadRoute(path.join(__dirname, 'routes', 'controller'), app, db); l.r(`controllers`)
loadRoute(path.join(__dirname, 'routes', 'users'), app, db); l.r(`clients`)
loadRoute(path.join(__dirname, 'routes', 'features'), app, db); l.r(`features`)
loadRoute(path.join(__dirname, 'routes', 'router'), app, db);

l.s(`Loading theme settings...`)
module.exports.get = function (req) {
    let defaulttheme = settings.defaulttheme;
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
module.exports.renderdataeval =
    `(async () => {
	const JavaScriptObfuscator = require('javascript-obfuscator');
    const newsettings = settings
 
    let renderdata = {
      req: req,
      settings: newsettings,
      eggs: eggconfig,
      user: req.session.user,
      userinfo: req.session.userinfo,
      packagename: req.session.userinfo ? (await db.get("package-" + req.session.userinfo.hcid)) || newsettings.packages.default : null,
      extraresources: !req.session.userinfo ? null : (await db.get("extra-" + req.session.userinfo.hcid) ? await db.get("extra-" + req.session.userinfo.hcid) : {
        ram: 0,
        disk: 0,
        cpu: 0,
        servers: 0,
        backups: 0,
        allocations: 0,
        databases: 0
      }),
		packages: req.session.userinfo ? newsettings.packages.list[await db.get("package-" + req.session.userinfo.hcid) ? await db.get("package-" + req.session.userinfo.hcid) : newsettings.packages.default] : null,
      coins: newsettings.coins.enabled == true ? (req.session.userinfo ? (await db.get("coins-" + req.session.userinfo.hcid) ? await db.get("coins-" + req.session.userinfo.hcid) : 0) : null) : null,
      pterodactyl: req.session.pterodactyl,
      theme: theme.name,
      extra: theme.settings.variables,
	  db: db
    };
    if (newsettings.earn.arcio.enabled == true && req.session.arcsessiontoken) {
      renderdata.arcioafktext = JavaScriptObfuscator.obfuscate(\`
        let token = "\${req.session.arcsessiontoken}";
        let everywhat = \${newsettings.earn.arcio["afk page"].every};
        let gaincoins = \${newsettings.earn.arcio["afk page"].coins};
        let arciopath = "\${newsettings.earn.arcio["afk page"].path.replace(/\\\\/g, "\\\\\\\\").replace(/"/g, "\\\\\\"")}";

        \${arciotext}
      \`);
    };

    return renderdata;
  })();`;
l.s(`Sending startup indication...`)
log('status', `Successfully loaded HolaClient at ${settings.website.hostname}/`)

//show startup logs
const listener = app.listen(settings.website.port, function () {
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
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Discord")}${chalk.white("]")}${chalk.white(" https://discord.gg/CvqRH9TrYK ")}`);
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Github")}${chalk.white("]")}${chalk.white(" https://github.com/CR072/HolaClient ")}`);
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Website")}${chalk.white("]")}${chalk.white(" https://holaclient.tech ")}`);
    console.log(chalk.white("================================================="));
    console.log(" ");
    console.log(chalk.gray("[🔗]") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully loaded HolaClient at ") + chalk.cyan(settings.website.hostname + "/"));
    if (settings.features.security.enabled === true) {
        if (settings.features.security.anti_ddos.enabled === true) {
            const challenge = require('./security/challenge')
        }
        if (settings.features.security.rate_limiter.enabled === true) {
            const ratelimiter = require('./security/ratelimiter')
        }
        if (settings.features.security.anti_crawler.enabled === true) {
            const crawlers = require('./security/crawlers')
        }
    }
    setTimeout(() => {
        loadRoute(path.join(__dirname, 'lib'), app, db);
    }, 3000);

    function st() {
        console.log("")
        const spinner = ora({
            text: chalk.yellow('Generating endpoints...'),
            spinner: 'dots',
        }).start();

        setTimeout(() => {
            spinner.succeed(chalk.gray("[✅]") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Endpoints generated successfully. "));
        }, 3000);
    }

    setTimeout(() => {
        st();
        setTimeout(() => {
        }, 3000);
    }, 4000);

});

module.exports.islimited = async function () {
    return cache == true ? false : true;
}

module.exports.ratelimits = async function (length) {
    if (cache == true) return setTimeout(
        indexjs.ratelimits, 1
    );
    cache = true;
    setTimeout(
        async function () {
            cache = false;
        }, length * 1000
    )
}
global.Buffer = global.Buffer || require('buffer').Buffer;
if (typeof btoa === 'undefined') {
    global.btoa = function (str) {
        return new Buffer(str, 'binary').toString('base64');
    };
}
if (typeof atob === 'undefined') {
    global.atob = function (b64Encoded) {
        return new Buffer(b64Encoded, 'base64').toString('binary');
    };
}
function loadRoute(directory, app, db) {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.js'));
    files.forEach(file => {
        const routeModule = require(path.join(directory, file));
        if (typeof routeModule.load === 'function') {
            routeModule.load(app, db);
        } else {
            console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] [")}${chalk.gray("ROUTER")}${chalk.white("] ")}${chalk.red(`Error while loading ${chalk.cyan(`${file}`)}`)}`)
        }
    });
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
