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
 * addons.js - Application addons handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get('/api/admin/addons', core.admin, async (req, res) => {
        try {
            let a = await fs.readdirSync(path.join(__dirname, "../../addons"));
            let c = {}
            let d = {}
            let e = {}
            for (let i of a) { let b = require(`../../addons/${i}/manifest.json`); if (b) c[i] = b };
            let f = await db.get("addons", "active") || [];
            for (let i of f) { d[i.name] = i };
            for ([i, j] of Object.entries(c)) { if (!d[i]) e[i] = j };
            for ([i, j] of Object.entries(e)) {
                require(`../../addons/${i}/remote.js`).seed()
            }
            return core.json(req, res, true, "SUCCESS", { total: c, active: d, inactive: e });
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, true, "ERROR", error);
        }
    });

    app.post('/api/admin/addons', core.admin, async (req, res) => {
        try {
            let a = await fs.readdirSync(path.join(__dirname, "../../addons"));
            let b = a.find(i => i == req.body.addon);
            if (!b) return core.json(req, res, false, "404");
            let c = await db.get("addons", "active") || [];
            if (!c.find(i => i.name == req.body.addon)) {
                c.push(require(`../../addons/${b}/manifest.json`) || {})
                await db.set("addons", "active", c);
            }
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.delete('/api/admin/addons', core.admin, async (req, res) => {
        try {
            let a = await fs.readdirSync(path.join(__dirname, "../../addons"));
            let b = a.find(i => i == req.body.addon);
            if (!b) return core.json(req, res, false, "404");
            let c = await db.get("addons", "active") || [];
            c = c.filter(i => i.name !== b)
            await db.set("addons", "active", c);
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.get('/api/admin/addons/:id', core.admin, async (req, res) => {
        try {
            let a = require(`../../addons/${req.params.id}/manifest.json`) || {}
            let b = require(`../../addons/${req.params.id}/settings.json`) || {}
            let c = await db.get("addons", "active") || [];
            let d = c.find(i => i.name == req.params.id)
            let f
            if (a.runtime.holaclient.database == "full") {
                f = await db.get(a.name, "settings") || [];
            } else if (a.runtime.holaclient.database == "max") {
                f = await db.get("settings", a.name) || [];
            } else { f = await db.get("addons", a.name) || []; }
            let e = {}
            if (d) { e["active"] = true } else { e["active"] = false };
            e["manifest"] = a
            e["settings"] = b
            e["current"] = f
            return core.json(req, res, true, "SUCCESS", e);
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, true, "ERROR", error);
        }
    });

    app.post('/api/admin/addons/:id', core.admin, async (req, res) => {
        try {
            let a = require(`../../addons/${req.params.id}/manifest.json`) || {}
            if (a.runtime.holaclient.database == "full") {
                await db.set(a.name, "settings", req.body)
            } else if (a.runtime.holaclient.database == "max") {
                await db.set("settings", a.name, req.body)
            } else { await db.set("addons", a.name, req.body)}
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.get("/admin/addons/:id", core.admin, async (req, res) => {
        try {
            let a = require(`../../addons/${req.params.id}/manifest.json`) || {}
            let b = require(`../../addons/${req.params.id}/settings.json`) || {}
            let c = await db.get("addons", "active") || [];
            let d = c.find(i => i.name == req.params.id)
            let f
            if (a.runtime.holaclient.database == "full") {
                f = await db.get(a.name, "settings") || [];
            } else if (a.runtime.holaclient.database == "max") {
                f = await db.get("settings", a.name) || [];
            } else { f = await db.get("addons", a.name) || []; }
            let e = {}
            if (d) { e["active"] = true } else { e["active"] = false }
            e["manifest"] = a
            e["settings"] = b
            e["current"] = f
            if (!a.runtime || !b) return res.end(fallback.error404());
            const appearance = await db.get("settings", "appearance") || {};
            const template = appearance.themes && appearance.themes.admin || "default";
            return pages.render(req, res, `./resources/views/admin/${template}/addons/[id].ejs`, e)
        } catch (error) {
            handle(error, "Minor", 42)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    (await db.get("addons", "active") || []).forEach(i => {if (i.routes == true){load(path.join(__dirname, '..', '..', 'addons', i.name, 'routes'))}});
    function load(a) {
        const b = fs.readdirSync(a).filter(i => i.endsWith('.js'));
        b.forEach(i => {
            const c = require(path.join(a, i));
            if (typeof c === 'function') { c() };
        });
    }

    async function handle(error, a, b) {
        const admins = await db.get("notifications", "admins") || [];
        const errors = await db.get("logs", "errors") || [];
        System.err.println(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "app-addons",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/app/addons.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/