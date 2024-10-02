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
//todo: improve this
module.exports = async function (req, id) {
    try {
        let a = await db.get("settings", "authentication")
        if (a?.antialt?.cookies === true) {
            let g = hcx.cookies.get(req, "user")
            if (g) return { success: false, code: 200 }
        }
        if (a?.antialt?.ip === true) {
            let a = await db.get("users", "ips") || []
            let b = a.find(i => i.ip == req.ip)
            if (b && b.id !== id) return { success: false, code: 200 }
        }
        return { success: true, code: 200 }
    } catch (error) {
        System.err.printLn(error)
        return { success: false, code: 500, error: error }
    }
}