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
module.exports = async function (req, res, a, b) {
    try {
        if (req?.session?.userinfo) {
            if (req.session.permissions.roles.includes("guest")) {
                let c = await db.get("permissions", "users") || []
                let e = req?.session?.userinfo?.id
                let d = c.find(i => i.id === e)
                if (d) {
                    req.session.permissions = d
                } else if (!d && e) {
                    delete req.session.userinfo
                }
            }
        };
        let d = await db.get("users", "users") || []
        let e = d.find(i => i.email === a || i.username === a)
        if (!e) return err(req, "ACCOUNT_NOT_FOUND") 
        let f = await db.get("settings", "authentication")
        if (f && f?.login?.enabled !== true) return err(req, "LOGIN_CLOSED")

        let i = await db.get("users", e.id)
        if (!i) return err(req, "ACCOUNT_NOT_FOUND")
        let k = hcx.crypt.decrypt(i.password)
        if (k !== b) return err(req, "ACCOUNT_NOT_FOUND")
        let g = await db.get("permissions", "users") || []
        let h = g.find(j => j.id === i.id)
        let j = hcx.crypt.encrypt(k, i.sessions.secret)
        j["id"] = i.id
        let l = await db.get("resources", i.id)

        hcx.cookies.set(res, "hcx.user", JSON.stringify(j))
        req.session.permissions = h
        req.session.userinfo = i
        req.session.resources = l

        return { success: true, code: 200 };
    } catch (error) {
        System.err.println(error);
        return hcx.res.internal.error(error)
    }
    function err(req, a, b) {
        return { success: false, code: b ?? 0, message: hcx.locales(req).alerts[a] }
    }
}