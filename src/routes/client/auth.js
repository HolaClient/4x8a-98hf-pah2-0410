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
    app.get("/api/auth/gateways", async (req, res) => {
        try {
            let a = await db.get("core", "authenticators") || []
            return core.json(req, res, true, "SUCCESS", a)
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.get("/logout", core.auth, (req, res) => {
        try {
            if (!req.session.userinfo) {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }
            core.delCookie(res, "hc.sk")
            req.session.destroy(() => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        } catch (error) {
            console.error(error)
        }
    });

    app.get("/auth/password", core.auth, async (req, res) => {
        try {
            let a = await db.get("users", req.session.userinfo.id)
            let b = crypt.gen88(12)
            a["password"] = crypt.encrypt(b)
            await db.set("users", req.session.userinfo.id, a)
            return core.json(req, res, true, "SUCCESS", b)
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.post("/auth/email", async (req, res) => {
        try {
            if (req.session.userinfo) return core.json(req, res, true, "SUCCESS");
            let a = req.body;
            if (!a || !a.email || !a.password) return core.json(req, res, false, "MISSING");
            let b = await db.get("users", "users") || [];
            let c = b.find(i => i.email === a.email || i.username === a.email);
            if (!c) return core.json(req, res, false, "404");
            let d = await db.get("users", c.id)
            if (crypt.decrypt(d.password) !== a.password) return core.json(req, res, false, "WRONGSECRET");
            d.sessions["key"] = `hc.sk_${crypt.gen88(64)}`
            await db.set("users", c.id, d)
            req.session.userinfo = d;
            req.session.permission = await db.get('permissions', c.id);
            let e = crypt.encrypt(d?.sessions?.key || req.session.userinfo.sessions.key, d.sessions.secret);
            e["user"] = d.id
            core.setCookie(res, "hc.sk", JSON.stringify(e))
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.post("/auth/email/register", async (req, res) => {
        try {
            if (req.session.userinfo) return core.json(req, res, true, "SUCCESS");
            let f = await db.get("settings", "authentication")
            if (f.enabled !== true) return core.json(req, res, false, "INACTIVE");
            if (f.antialt.cookies === true) {
                let g = core.getCookie(req, "user")
                if (g) return core.json(req, res, false, "ALTACC");
            }
            if (f.antialt.ip === true) {
                let a = await db.get("ips", "ips") || []
                let b = a.find(i => i.ip == req.ip)
                if (b) return core.json(req, res, false, "ALTACC");
            }
            let a = req.body;
            if (!a || !a.email || !a.username || !a.password) return core.json(req, res, false, "MISSING");
            let b = await usersCache.getAll();
            let c = Object.values(b).find(i => i.email === a.email || i.username === a.username);
            if (c) return core.json(req, res, false, "USEREXISTS");
            let g = await db.get("app", "console")
            if (g.license && g.secret) {
                try {
                    let f = await fetch(`${g.domain}/api/application/validate/emails`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "x-auth-type": "holaclient/secret",
                            "x-app-version": "X1",
                            "Authorization": `Secret ${g.secret}`
                        },
                        body: JSON.stringify({
                            "email": crypt.encrypt(a.email, g.keys.server),
                        })
                    });
                    let h = await f.json()
                    if (h.success !== true && h.code === 200) return core.json(req, res, false, "INVALIDEMAIL");
                } catch (error) {
                    console.error(error)
                }
            }
            let d = await users.create(req, res, a.email, a.username, "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png", a.username, a.username, 1, a.password);
            if (d.success !== true) return core.json(req, res, false, d.message);
            d = d.data
            let e = crypt.encrypt(d?.sessions?.key || req.session.userinfo.sessions.key, d.session.secret || req.session.userinfo.sessions.secret);
            e["user"] = d.id
            core.setCookie(res, "hc.sk", JSON.stringify(e))
            core.setCookie(res, "user", d.id)
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
*/