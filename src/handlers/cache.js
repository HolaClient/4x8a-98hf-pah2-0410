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
 * cache.js - Application cache handler file.
 *--------------------------------------------------------------------------
*/
require('../utils/modules')
module.exports = async function () {
    await hcx.config.cache()
    let files = ['./src/modules/permissions/index']
    for (let i of files) {
        let a = hcx.loadModule(i)
        a.cache()
    }
    let a = await db.get("users", "users") || []
    let b = await db.get("servers", "list") || []
    let c = await db.get("nodes", "list") || []
    hcx.temp.set("totalUsers", a.length)
    hcx.temp.set("totalServers", b.length ?? 0)
    hcx.temp.set("totalNodes", c.length)
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/