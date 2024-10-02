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
module.exports = async function (req, res, next) {
    try {
        if (!req.session.userinfo && hcx.core.cookies.get(req, "hc.sk")) {
            let a = JSON.parse(hcx.core.cookies.get(req, "hc.sk"))
            let b = await db.get("users", a.user)
            if (b) {
                let c = crypt.decrypt(a, b.sessions.secret)
                if (c && c === b.sessions.key) {
                    req.session.userinfo = b
                }
            }
        }
        if (!req.session.userinfo) return res.redirect('/login');
        next()
    } catch (error) {
        System.err.println(error)
    }
};