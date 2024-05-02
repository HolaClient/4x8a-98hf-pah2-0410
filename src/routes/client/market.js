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
 * chat.js - Server side char handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get("/market/resources", core.auth, async (req, res) => {
        try {
            let a = await db.get("settings", "market")
            const appearance = await db.get("settings", "appearance") || {};
            const template = appearance.themes && appearance.themes.layouts || "default";
            return core.html(req, res, `./resources/views/layouts/${template}/market/resources.ejs`, a.resources)
        } catch (error) {
            console.error(error)
            return fallback.error500(error)
        }
    });

    app.get("/market/packages", core.auth, async (req, res) => {
        try {
            let a = await db.get("products", "list")
            const appearance = await db.get("settings", "appearance") || {};
            const template = appearance.themes && appearance.themes.layouts || "default";
            return core.html(req, res, `./resources/views/layouts/${template}/market/packages.ejs`, a)
        } catch (error) {
            console.error(error)
            return fallback.error500(error)
        }
    });

    app.get("/api/market/buy/:resource/:quantity", core.auth, async (req, res) => {
        try {
            let a = await db.get("settings", "market");
            let b = req.params.resource;
            let c = parseInt(req.params.quantity);
            if (!b || !c) return core.json(req, res, false, "MISSING");
            if (!a.resources.list.includes(b)) return core.json(req, res, false, "INVALID");
            if (isNaN(c)) return core.json(req, res, false, "INVALIDINTEGER");
            if (c <= 0) return core.json(req, res, false, "INTEGERBELOWZERO");
            let d = await db.get('economy', req.session.userinfo.id);
            let e = a.resources.buy[b].per;
            if (e !== 1) e = a.resources.buy[b].price / a.resources.buy[b].per;
            let f = e * c;
            if (d.coins < f) return core.json(req, res, false, "INSUFFICIENT");
            d["coins"] = d.coins - f;
            await db.set("economy", req.session.userinfo.id, d);
            let g = await db.get("resources", req.session.userinfo.id);
            g[b].total = g[b].total + c
            await db.set("resources", req.session.userinfo.id, g);
            return core.json(req, res, true, "SUCCESS", d.coins)
        } catch (error) {
            console.error(error);
            return core.json(req, res, false, "ERROR", error);
        }
    });
}