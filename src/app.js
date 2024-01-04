/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Message from the Creator
 *--------------------------------------------------------------------------
 * Please note that this is a pre-release and is not production-ready.
 * There might be bugs, exploits, vulnerabilities, etc. You may report bugs
 * at report@holaclient.tech. It would be a great help if you could report 
 * any issues.
 * 
 * Thanks for using HolaClient
 *--------------------------------------------------------------------------
*/


/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const chalk = require("chalk");
const fs = require("fs");
const cors = require("cors");
const env = require('dotenv').config()
const path = require('path');
const express = require("express");
const app = express();
const Keyv = require('keyv')
const session = require("express-session");
const core = require('../app/keys/keys.json')
const keys = require('../storage/installation/keys.json')
const services = require('../src/services/services.json')
const stages = require(`../storage/installation/stages.json`);
global.dl = require('../drivers/dl')
global.settings = require('../drivers/st').settings()
require('express-ws')(app);
/**
 *--------------------------------------------------------------------------
 * Exporting app and database
 *--------------------------------------------------------------------------
*/
const db = require('../drivers/db')
module.exports.app = app;
module.exports.db = db;
/**
 *--------------------------------------------------------------------------
 * Loading website
 *--------------------------------------------------------------------------
*/
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.enable('trust proxy');

app.use(cors());

app.use(session({secret: core.website, resave: false, saveUninitialized: false}));
/**
 *--------------------------------------------------------------------------
 * Checking installation status
 *--------------------------------------------------------------------------
*/
const status = require('./middleware/setup').run()
app.use((req, res, next) => {
    const whitelistedRoutes = [`/api/setup/auth`, ...stages.installation, ...stages.nests, ...stages.eggs];
    const filePath = path.join(__dirname, '..', 'storage', 'installation', 'installed.txt');

    if (whitelistedRoutes.includes(req.originalUrl)) {
        next();
    } else {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                res.redirect('/setup');
            } else {
                next();
            }
        });
    }
});
/**
 *--------------------------------------------------------------------------
 * Loading other router files
 *--------------------------------------------------------------------------
*/
loadRoute(path.join(__dirname, 'routes'), app, db);
require('./services/handler').load(app, db)
loadRoute(path.join(__dirname, 'routes', 'installation'), app, db);
loadRoute(path.join(__dirname, 'routes', 'core'), app, db);
loadRoute(path.join(__dirname, 'routes', 'administration'), app, db);
loadRoute(path.join(__dirname, 'routes', 'authentication'), app, db);
loadRoute(path.join(__dirname, 'routes', 'economy'), app, db);
loadRoute(path.join(__dirname, 'routes', 'billing'), app, db);

setInterval(() => {
    loadRoute(path.join(__dirname, 'services'), app, db);
}, 200);

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
/**
 *--------------------------------------------------------------------------
 * Generating session secret
 *--------------------------------------------------------------------------
*/
const rndCode = genRND(24);
keys.secret.setup = rndCode;
fs.writeFileSync('./storage/installation/keys.json', JSON.stringify(keys, null, 2));
function genRND(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        code += charset[randomIndex];
    }
    return code;
}
/**
 *--------------------------------------------------------------------------
 * Indicating startup
 *--------------------------------------------------------------------------
*/
const listener = app.listen(process.env.APP_PORT, async function () {
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
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Github ")}${chalk.white("]")}${chalk.white(" https://holaclient.tech/url/github ")}`);
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Website")}${chalk.white("]")}${chalk.white(" https://holaclient.tech ")}`);
    console.log(chalk.white("================================================="));
    console.log(" ");
    console.log(chalk.gray("{/} 🔗") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully loaded HolaClient at ") + chalk.cyan(process.env.APP_URL + "/"));
    console.log("");
    console.log(chalk.gray("{/} 🗝️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Authentication code for this session is ") + chalk.cyan(rndCode));
    console.log("");
    console.log(chalk.gray("{/} ⚙️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Connected to ") + chalk.cyan(process.env.DB_CONNECTION));
    const lg = require('../drivers/lg')
});
 /**
 *--------------------------------------------------------------------------
 * End of the file
 *--------------------------------------------------------------------------
*/