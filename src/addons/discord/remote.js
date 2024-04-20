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
 * remote.js - Discord remote functions handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const db = require('../../handlers/database.js');
/**
 *--------------------------------------------------------------------------
 * Exporting remote functions
 *--------------------------------------------------------------------------
*/
async function seed() {
    let a = {
        client: {
            id: 0,
            secret: ""
        },
        guild: {
            bot: {token: ""},
            id: ""
        },
        pull: {
            enabled: false,
            guilds: ""
        },
        j4r: {
            enabled: false,
            guilds: "",
            rewards: {
                coins: 0,
                resources: {}
            }
        },
        webhook: {
            client: "",
            admin: ""
        }
    }
    let b = await db.get("core", "authenticators") || [];
    if (b.find(i => i == "discord") == undefined) b.push("discord");
    await db.set("core", "authenticators", b);
    await db.set("discord", "settings", a);
};
module.exports = {
    seed
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/