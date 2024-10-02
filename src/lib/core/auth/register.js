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
const antialt = require("./utils/antialt")

module.exports = async function (req, res, email, username, password, nickname = username, firstName = username, lastName = "", avatar, id) {
    try {
        if (req?.session?.userinfo) return hcx.res.success()
        let d = await db.get("users", "users") || []
        let e = d.find(i => i.email === email || i.username === username)
        if (e) return err(req, "ACCOUNT_ALREADY_EXISTS")
        let f = await db.get("settings", "authentication")
        if (f && f?.register?.enabled !== true) return err(req, "REGISTRATIONS_CLOSED")

        id = parseInt(id)
        if (!id || typeof id !== number) {
            let j = await db.get("app", "lastuser") ?? 0
            id = j + 1
        }

        let g = await antialt(req, id)
        if (g.success === false && g.code !== 200) return err("500", 500)
        if (g.success === false && g.code === 200) return err(req, "ALT_ACCOUNTS_PROHIBITED")

        let h = await db.get("settings", "resources")
        let i = await db.get("settings", "packages")
        let m = await db.get("permissions", "users") || []
        let n = await db.get("users", "ips") || []

        let secret = `hcx.ss_${hcx.crypt.gen(88, 48)}`
        let balance = {
            coins: 0,
            credits: 0
        }
        let resources = {
            memory: {
                used: 0,
                total: h?.default?.memory ?? 3072
            },
            disk: {
                used: 0,
                total: h?.default?.disk ?? 5120
            },
            cpu: {
                used: 0,
                total: h?.default?.cpu ?? 100
            },
            cbackups: {
                used: 0,
                total: h?.default?.cbackups ?? 1
            },
            allocations: {
                used: 0,
                total: h?.default?.allocations ?? 1
            },
            databases: {
                used: 0,
                total: h?.default?.databases ?? 1
            },
            backups: {
                used: 0,
                total: h?.default?.backups ?? 1
            },
            subdomains: {
                used: 0,
                total: h?.default?.subdomains ?? 1
            }
        }
        let userinfo = {
            id,
            nickname,
            name: {
                first: firstName,
                last: lastName
            },
            username,
            email,
            avatar: avatar || "https://cdn.holaclient.dev/assets/icons/user.svg",
            password: hcx.crypt.encrypt(password),
            language: "en",
            package: i?.default || i?.packages[0]?.name || "default",
            date: {
                created: Date.now(),
                modified: Date.now()
            },
            sessions: {
                status: false,
                secret: secret,
                key: `hcx.sk_${hcx.crypt.gen(88, 64)}`
            },
            services: []
        }

        let k = await hcx?.panel?.users?.create(username, email, firstName, lastName, password)
        if (!k || k.success !== true) {
            let l = hcx.locales(req).notifications.UNABLE_TO_CREATE_PANEL_ACCOUNT
            hcx.notify(id, l.title, l.body)
        } else if (k.success === true && k.code === 200) {
            let l = hcx.panel.manifest.meta
            l["attributes"] = k.data
            userinfo.services.push(l)
        }

        d.push({
            id,
            email,
            username
        });
        m.push({
            id,
            roles: ["user"],
            intents: []
        });
        n.push({
            ip: req.ip,
            id,
            old: []
        });

        await db.set("app", "lastuser", id)
        await db.set("users", id, userinfo);
        await db.set("users", "users", d);
        await db.set("resources", id, resources);
        await db.set("economy", id, balance);
        await db.set("permissions", "users", m);
        await db.set("users", "ips", n);
        let o = hcx.crypt.encrypt(password, secret)
        o["id"] = id

        hcx.cookies.set(res, "hcx.user", JSON.stringify(o))
        req.session.userinfo = userinfo
        req.session.permissions = {
            id,
            roles: ["user"],
            intents: []
        }

        return { success: true, code: 200, data: userinfo };
    } catch (error) {
        System.err.println(error);
        return hcx.res.internal.error(error)
    }
}
function err(req, a, b) {
    return { success: false, code: b ?? 0, message: hcx.locales(req).alerts[a] }
}