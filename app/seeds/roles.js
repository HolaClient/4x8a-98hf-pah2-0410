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
 * roles.js - Roles seeder.
 *--------------------------------------------------------------------------
*/
module.exports.seed = async function (db, hcx) {
    let roles = [
        {
            "id": hcx.crypt.gen(10, 8),
            "name": "Guest",
            "intents": [
                "hcx.pages.landing.*",
                "hcx.pages.auth.*"
            ],
            "level": 0
        },
        {
            "id": hcx.crypt.gen(10, 8),
            "name": "User",
            "intents": require("./intents").get("user"),
            "level": 1
        },
        {
            "id": hcx.crypt.gen(10, 8),
            "name": "Mod",
            "intents": require("./intents").get("mod"),
            "level": 100
        },
        {
            "id": hcx.crypt.gen(10, 8),
            "name": "Admin",
            "intents": require("./intents").get("admin"),
            "level": 200
        },
        {
            "id": hcx.crypt.gen(10, 8),
            "name": "Owner",
            "intents": ["hcx.*"],
            "level": 1000
        }
    ]
    await db.set("permissions", "roles", roles)
    return
}