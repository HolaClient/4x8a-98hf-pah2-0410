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
process.loadEnvFile('.env')
require('../app/database/index')(app, db);
require('./clusters/core')()
import('./handlers/logs.mjs')
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
if (!process.env.APP_KEY || process.env.APP_KEY == "random") { c('APP_KEY', crypt.base64(64)) };
if (!process.env.APP_HMAC || process.env.APP_HMAC == "random") { c('APP_HMAC', crypt.base64(64)) };
if (!process.env.APP_SECRET || process.env.APP_SECRET == "random") { c('APP_SECRET', crypt.base64(64)) };
if (process.env.APP_ENV == "production") { c('APP_CODE', crypt.gen88(12)) };
/**
 *--------------------------------------------------------------------------
 * Loading sessions
 *--------------------------------------------------------------------------
 * Middleware to register express-session.
 *--------------------------------------------------------------------------
*/
app.use(require('express-session')({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000
    },
    name: "exp.ss"
}));
/**
 *--------------------------------------------------------------------------
 * Loading other router files
 *--------------------------------------------------------------------------
 * Loading all router files to serve requests and frontend templates along
 * with static assets.
 *--------------------------------------------------------------------------
*/
(async () => {
    async function load(route) {
        try {
            return new Promise((resolve, reject) => {
                const a = path.join(path.join(__dirname, 'routes'), route);
                fs.readdir(a, async (err, files) => {
                    if (err) {
                        System.err.println(err);
                        return reject(err);
                    }
                    for (const i of files) {
                        const b = path.join(a, i);
                        if (fs.statSync(b).isDirectory()) {
                            await load(path.join(route, i));
                        } else if (i.endsWith('.js')) {
                            const c = require(b);
                            if (typeof c === 'function') {
                                c();
                            }
                        }
                    }
                    resolve();
                });
            });
        } catch (error) {
            System.err.println(error);
            return;
        }
    }
    await load('');
})();
/**
 *--------------------------------------------------------------------------
 * Indicating startup
 *--------------------------------------------------------------------------
*/
app.listen(process.env.APP_PORT, async function (err) {
    if (err) {
        System.err.println(`An error occured: ${err}`)
    }
    System.out.println(chalk.gray("  "));
    System.out.println(" _    _       _        _____ _ _            _  __   __");
    System.out.println("| |  | |     | |      / ____| (_)          | | \\ \\ / /");
    System.out.println("| |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \\ V / ");
    System.out.println("|  __  |/ _ \\| |/ _` | |    | | |/ _ \\ '_ \\| __| > <  ");
    System.out.println("| |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \\ ");
    System.out.println("|_|  |_|\\___/|_|\\__,_|\\_____|_|_|\\___|_| |_|\\__/_/ \\_\\");
    System.out.println(chalk.white(" "))
    System.out.println(chalk.white("========================SOCIAL========================="));
    System.out.println(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Author ")}${chalk.white("]")}${chalk.white(" https://crazymath072.tech             ")}${chalk.gray("[+]")}`);
    System.out.println(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Console")}${chalk.white("]")}${chalk.white(" https://console.holaclientx.tech      ")}${chalk.gray("[+]")}`);
    System.out.println(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Discord")}${chalk.white("]")}${chalk.white(" https://discord.gg/CvqRH9TrYK         ")}${chalk.gray("[+]")}`);
    System.out.println(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Github ")}${chalk.white("]")}${chalk.white(" https://github.com/HolaClient/X       ")}${chalk.gray("[+]")}`);
    System.out.println(`${chalk.gray("[+]")} ${chalk.white("[")}${chalk.cyan("Website")}${chalk.white("]")}${chalk.white(" https://holaclientx.tech              ")}${chalk.gray("[+]")}`);
    System.out.println(chalk.white("======================================================="));
    System.out.println(" ");
    System.out.println(chalk.gray("{/} 🔗") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully loaded HolaClient at ") + chalk.cyan(process.env.APP_URL + "/"));
    System.out.println("");
    System.out.println(chalk.gray("{/} 🗝️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Authentication code for this session is ") + chalk.cyan(process.env.APP_CODE));
    System.out.println("");
    System.out.println(chalk.gray("{/} ⚙️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Connected to ") + chalk.cyan(process.env.DB_CONNECTION));
    require('./utils/users')
    let a = await db.get("pterodactyl", "settings")
    if (a && a.domain && a.app && a.acc) {
        hcx.configure(a.domain, a.app, a.acc)
    }
});
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/