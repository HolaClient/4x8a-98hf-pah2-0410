/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclientx.tech
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright 2022-2024 HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Message from the Creator
 *--------------------------------------------------------------------------
 * Hello there! This version of HolaClient introduces a lot of features and
 * changes a lot of stuff followed for years. This might be revolutionary,
 * I guess. Feel free to modify anything here abiding by the License. Any
 * user with the Admin permission can make the dashboard unusable. The admin
 * side handlers do not check for any types or values given. Please use it 
 * carefully, Nothing much big won't happen until someone sends wrong values
 * to the endpoints directly.
 * 
 * Thanks for using HolaClient-X1
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
global.modules = require('./utils/modules');
const bodyParser = require('body-parser');
require('dotenv').config();
require('../app/database/index')(app, db)
/**
 *--------------------------------------------------------------------------
 * Generating secrets
 *--------------------------------------------------------------------------
*/
const a = path.resolve(__dirname, "../.env");
const b = () => fs.readFileSync(a, "utf-8").split(os.EOL);
const c = (key, value) => {
    const d = b();
    const e = d.find((e) => e.split("=")[0] == key);
    if (e !== undefined) {
        const f = d.indexOf(e);
        d.splice(f, 1, `${key}=${value}`);
    } else {
        d.push(`${key}=${value}`);
    }
    fs.writeFileSync(a, d.join(os.EOL));
};
if (!process.env.APP_KEY || process.env.APP_KEY == "random") {c('APP_KEY', crypt.base64(64))};
if (!process.env.APP_SECRET || process.env.APP_SECRET == "random") {c('APP_SECRET', crypt.base64(64))};
if (process.env.APP_ENV == "production") {c('APP_CODE', crypt.gen88(12))};
/**
 *--------------------------------------------------------------------------
 * Loading website
 *--------------------------------------------------------------------------
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('express-session')({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        sameSite: false,
        secure: false
    },
    name: "session"
}));
/**
 *--------------------------------------------------------------------------
 * Checking installation status
 *--------------------------------------------------------------------------
*/
app.use((req, res, next) => {
    const a = ['/assets/client/default/app.css', '/assets/common/tailwind.css', '/assets/client/default/bundle.js', '/setup', '/setup/basic', '/setup/finish', '/api/setup'];
    const b = path.join(__dirname, '..', 'storage', 'installed.txt');
    if (a.includes(req.originalUrl)) {
        next();
    } else {
        fs.access(b, fs.constants.F_OK, (err) => {
            if (err) {
                res.statusCode = 302;
                res.setHeader('Location', '/setup');
                return res.end();
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
 * I am using the load function to load the routes directory by directory
 * instead of iterating over the routes directory as it might first load the
 * router file. If the router file gets loaded first, it will throw 404 page
 * for all endpoints even if a route exists.
 *--------------------------------------------------------------------------
*/
(() => {
    const routes = [
        '/servers',
        '/app',
        '/admin',
        '/client'
    ];
    for (let i in routes) { load(path.join(__dirname, 'routes' + routes[i])) };
    setTimeout( async () => { load(path.join(__dirname, 'routes', '')) }, 0);
})();
function load(a) {
    const b = fs.readdirSync(a).filter(i => i.endsWith('.js'));
    b.forEach(i => {
        const c = require(path.join(a, i));
        if (typeof c === 'function') { c() };
    });
}
/**
 *--------------------------------------------------------------------------
 * Indicating startup
 *--------------------------------------------------------------------------
*/
app.listen(process.env.APP_PORT, function (err) {
    WSserver.listen(parseInt(process.env.APP_PORT) + 1);
    console.log(chalk.gray("  "));
    console.log(" _    _       _        _____ _ _            _  __   __");
    console.log("| |  | |     | |      / ____| (_)          | | \\ \\ / /");
    console.log("| |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \\ V / ");
    console.log("|  __  |/ _ \\| |/ _` | |    | | |/ _ \\ '_ \\| __| > <  ");
    console.log("| |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \\ ");
    console.log("|_|  |_|\\___/|_|\\__,_|\\_____|_|_|\\___|_| |_|\\__/_/ \\_\\");
    console.log(chalk.white(" "))
    console.log(chalk.white("========================SOCIAL========================="));
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Author ")}${chalk.white("]")}${chalk.white(" https://crazymath072.tech             ")}${chalk.gray("[+]")}`);
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Console")}${chalk.white("]")}${chalk.white(" https://console.holaclientx.tech      ")}${chalk.gray("[+]")}`);
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Discord")}${chalk.white("]")}${chalk.white(" https://discord.gg/CvqRH9TrYK         ")}${chalk.gray("[+]")}`);
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Github ")}${chalk.white("]")}${chalk.white(" https://github.com/HolaClient/X       ")}${chalk.gray("[+]")}`);
    console.log(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Website")}${chalk.white("]")}${chalk.white(" https://holaclientx.tech              ")}${chalk.gray("[+]")}`);
    console.log(chalk.white("======================================================="));
    console.log(" ");
    console.log(chalk.gray("{/} 🔗") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully loaded HolaClient at ") + chalk.cyan(process.env.APP_URL + "/"));
    console.log(" ");
    console.log(chalk.gray("{/} 🛜") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully loaded Webserver Handler at: ") + chalk.cyan(parseInt(process.env.APP_PORT) + 1));
    console.log("");
    console.log(chalk.gray("{/} 🗝️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Authentication code for this session is ") + chalk.cyan(process.env.APP_CODE));
    console.log("");
    console.log(chalk.gray("{/} ⚙️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Connected to ") + chalk.cyan(process.env.DB_CONNECTION));
    import('./handlers/logs.mjs')
});
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/