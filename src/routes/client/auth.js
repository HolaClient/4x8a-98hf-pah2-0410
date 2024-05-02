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
 * router.js - Endpoints handler.
 *--------------------------------------------------------------------------
*/
const users = require('../../utils/users')
const usersCache = require('../../cache/users')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.post("/auth/email", async (req, res) => {
        try {
            if (req.session.userinfo) return core.json(req, res, true, "SUCCESS");
            let a = req.body;
            if (!a || !a.email || !a.password) return core.json(req, res, false, "MISSING");
            let b = await usersCache.getAll();
            let c = Object.values(b).find(i => i.email === a.email || i.username === a.email);
            if (!c) return core.json(req, res, false, "404");
            if (crypt.decrypt(c.password) !== a.password) return core.json(req, res, false, "WRONGSECRET");
            const d = await db.get("users", c.id)
            req.session.userinfo = d;
            req.session.permission = await db.get('permissions', c.id);
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.post("/auth/email/register", async (req, res) => {
        try {
            if (req.session.userinfo) return core.json(req, res, true, "SUCCESS");
            let a = req.body;
            if (!a || !a.email || !a.username || !a.password) return core.json(req, res, false, "MISSING");
            let b = await usersCache.getAll();
            let c = Object.values(b).find(i => i.email === a.email || i.username === a.username);
            if (c) return core.json(req, res, false, "USEREXISTS");
            let d = await users.create(req, res, a.email, a.username, "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png", a.username, a.username, 1, a.password);
            if (!d) return core.json(req, res, false, "ERROR");
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.get("/logout", core.auth, (req, res) => {
        if (!req.session.userinfo) {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }
        req.session.destroy(() => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    });
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
*/