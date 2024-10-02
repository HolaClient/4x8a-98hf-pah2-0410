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
let status = false;
let main = null;
let conf = null;

async function init() {
    try {
        let a = hcx.config.panel;
        if (a) {
            let b = path.resolve(__dirname, `./${a?.manifest?.name?.toLowerCase() || "ptl"}`);
            if (fs.existsSync(b)) {
                let c = require(b);
                c.config.set({
                    domain: a.url,
                    app: a.app,
                    acc: a.acc
                });
                conf = {
                    domain: a.url,
                    app: a.app,
                    acc: a.acc
                };
                status = true;
                main = c;
            } else {
                console.log("");
                console.log(chalk.gray("{/} ⚠️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.yellow(` Service ${a?.manifest?.name || "ptl"} not found! Unable to default to PTL! `));
            }
        } else {
            console.log("");
            console.log(chalk.gray("{/} ⚠️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.yellow(" No service has been selected, This version of HCX doesn't support HCE integration. "));
        }
    } catch (error) {
        console.error(error);
        return;
    }
}

function getMain() {
    if (!main) {
        console.error("Main module is not initialized. Call init() first.");
        return;
    }
    return main;
}

function getConfig() {
    if (!conf) {
        return;
    }
    return conf;
}

module.exports = {
    init,
    getMain,
    get config() {
        return getConfig();
    },
    get status() {
        return status;
    }
};