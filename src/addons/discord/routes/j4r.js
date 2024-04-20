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
 * j4r.js - Discord J4R handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Exporting j4r function
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const config = await db.get("discord", "settings");

    if (config.j4r.enabled == "true") {
        app.get("/api/earn/j4r", core.auth, async (req, res) => {
            try {
                let a = await db.get("discord", "users") || []
                let b = a.find(i => i.email == req.session.userinfo.email)
                if (!b) return core.json(req, res, false, "NOTAUTHENTICATEDVIADISCORD");
                let c = await db.get("discord", "guilds") || {}
                let h = await db.get("discord", "j4r") || {}
                let d = [];
                const e = config.j4r.guilds.split(",");
                if (e[0] !== "") {
                    for (let i of c[req.session.userinfo.email]) {
                        if (e.some(j => i.id.includes(j))) {
                            i["joined"] = true
                            d.push(i);
                            let k = (h[req.session.userinfo.email] || []).find(j => j.id == i.id)
                            if (k == undefined) {
                                h[req.session.userinfo.email] = h[req.session.userinfo.email] || []
                                let f = await db.get("economy", req.session.userinfo.id) || {}
                                f.coins = f.coins + config.j4r.rewards.coins
                                let g = await db.get("resources", req.session.userinfo.id) || {}
                                for ([l, j] of Object.entries(config.j4r.rewards.resources)) {
                                    g[l].total = g[l].total + j
                                };
                                await db.set("economy", req.session.userinfo.id, f);
                                await db.set("resources", req.session.userinfo.id, g);
                                (h[req.session.userinfo.email] || []).push(i)
                                await db.set("discord", "j4r", h)
                            }
                        };
                    }
                }
                return core.json(req, res, true, "SUCCESS", d)
            } catch (error) {
                console.error(error);
                return core.json(req, res, false, "ERROR", error)
            }
        });

        app.put("/api/earn/j4r", core.auth, async (req, res) => {
            try {
                let a = await db.get("discord", "users") || []
                let b = a.find(i => i.email == req.session.userinfo.email)
                if (!b) return core.json(req, res, false, "NOTAUTHENTICATEDVIADISCORD");
                let c = await db.get("discord", "codes") || {}
                let d = await fetch('https://discord.com/api/users/@me/guilds', { method: "GET", headers: { "Authorization": `Bearer ${crypt.decrypt(c[req.session.userinfo.email].access_token)}` } });
                let e = await d.json();
                let f = await db.get("discord", "guilds") || {};
                for ([i, j] of Object.entries(e)) { j.features = [] };
                f[req.session.userinfo.email] = e;
                await db.set("discord", "guilds", f);
                core.json(req, res, true, "SUCCESS", e)
            } catch (error) {
                console.error(error)
                return core.json(req, res, false, "ERROR", error)
            }
        });
    }
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/