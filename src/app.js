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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
process.loadEnvFile('.env')
global.modules = require('./utils/modules');
/**
 *--------------------------------------------------------------------------
 * Loading sessions
 *--------------------------------------------------------------------------
 * Middleware to register sessions handler, this is required to handle
 * user sessions (req.session).
 *--------------------------------------------------------------------------
*/
app.use(require('./modules/sessions'));
app.use(hcx.wares.bodyParser);
/**
 *--------------------------------------------------------------------------
 * Loading CORS
 *--------------------------------------------------------------------------
 * CORS (Cross Origin Resource Sharing) allows us to request resources that
 * are hosted on other domains.
 *--------------------------------------------------------------------------
*/
//app.use(require('./middlewares/cors'));
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
    await hcx.panel.init();
    hcx.temp.set("ptlNodes", await hcx.panel.getMain().nodes.getAll());
    hcx.temp.set("ptlEggs", await hcx.panel.getMain().eggs.getAll());
    await load('');
    require('./modules/router')();
})();

if (global.gc) {
    setInterval(() => { global.gc() }, 60000 * 7);
}
/**
 *--------------------------------------------------------------------------
 * Indicating startup
 *--------------------------------------------------------------------------
*/
app.listen(parseInt(process.env.APP_PORT), (status) => {
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
});
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/