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
 * create.js - Server creator handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get("/api/servers/create", core.auth, async (req, res) => {
        try {
            async function get() {
                let [a, b] = await Promise.all([db.get("pterodactyl", "nodes") || [],db.get("pterodactyl", "eggs") || []]);
                let g = [];
                for (let i of a) {
                    let e = await ptero.nodes()
                    let f = e.find(j => j.attributes.id == i.id)
                    if (f) {
                        f.attributes["deployments"] = i.deployments
                        g.push(f.attributes);
                    }
                };
                const [c, d] = await Promise.all([check(g), check(b)]);
                return { nodes: c, eggs: d };
            };
            async function check(a) {
                const b = await Promise.all(a.map(async (i) => {
                    const c = await db.get("permissions", i.deployments.role);
                    if (c.permission <= req.session.userinfo.permissions.level) return i;
                    return null;
                }));
                return b.filter(i => i !== null);
            };
            core.json(req, res, true, "SUCCESS", await get());
        } catch (error) {
            return core.json(req, res, false,"ERROR", error);
        }
    });

    app.post("/api/servers/create", core.auth, async (req, res) => {
        try {
            let a = req.body.resources;
            let b = req.body.environment;
            let k = req.body
            if (!a || !b) return core.json(req, res, false, "MISSING");
            let [c, d] = await Promise.all([db.get("pterodactyl", "nodes") || [],db.get("pterodactyl", "eggs") || []]);
            let f = c.find(i => i.id == b.node)
            let g = d.find(i => i.id == b.egg)
            if (!a || !b || !f || !g) return core.json(req, res, false, "MISSING");
            let h = await db.get("resources", req.session.userinfo.id)
            if (typeof (a) !== "object" || typeof (b) !== "object") return core.json(req, res, false, "INVALID");
            let l = await db.get("economy", req.session.userinfo.id);
            let m = await db.get("pterodactyl", "settings");
            if (!l.coins) return core.json(req, res, false, "INSUFFICIENT");
            if ((await db.get("permissions", m.deployments.role)).permission > req.session.userinfo.permissions.level) return core.json(req, res, false, "403");
            if (l.coins < (f.deployments.fees + g.deployments.fees + m.deployments.fees)) return core.json(req, res, false, "INSUFFICIENT");
            l.coins = l.coins - (f.deployments.fees + g.deployments.fees + m.deployments.fees)
            await db.set("economy", req.session.userinfo.id, l);
            let n = ["memory", "disk", "cpu"]
            for (let [i, j] of Object.entries(a)) {
                if (!h[i]) return core.json(req, res, false, "INVALID");
                j = parseInt(j);
                if (isNaN(j)) return core.json(req, res, false, "INVALIDINTEGER");
                for (let o of n) {if (i[o] <= 0) return core.json(req, res, false, "INTEGERBELOWZERO")};
                if (j < 0) return core.json(req, res, false, "INTEGERBELOWZERO")
                if (j > (h[i].total - h[i].used)) return core.json(req, res, false, "INSUFFICIENT");
                h[i].used = h[i].used + j
            };
            if (!req.body.name) req.body["name"] = `${req.session.userinfo.username}'s server`
            let o = await db.get("core", "lastserver") || 0
            k.environment["user"] = req.session.userinfo.id
            k["queue"] = true
            k["id"] = o + 1
            queue.add.server(k);
            await db.set("resources", req.session.userinfo.id, h);
            await db.get("core", "lastserver", o + 1)
            return core.json(req, res, true, "SERVERQUEUE");
        } catch (error) {
            return core.json(req, res, false, "ERROR", error);
        }
    });

    async function handle(error, a, b) {
        const admins = await db.get("notifications", "admins") || [];
        const errors = await db.get("logs", "errors") || [];
        console.error(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "servers-create",
            line: b,
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/servers/create.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}