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
 * modify.js - Server modification handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];

    app.post("/api/servers/modify/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            await core.server(req, res, a);
            let b = req.session.userinfo.id;
            let c = req.body;
            if (!c || c.resources) return core.json(req, res, false, "MISSING");
            let d = await db.get("servers", b);
            let e = d.find(i => i.identifier === a);
            let f = await db.get("resources", b);
            let g = ["memory", "disk", "cpu", "allocations", "databases", "backups"]
            let h = {}
            let p = false
            g.forEach(async (i) => {
                if (typeof c.resources[i] !== "number") return core.json(req, res, false, "INVALIDINTEGER")
                if (isNaN(c.resources[i])) return core.json(req, res, false, "INVALIDINTEGER");
                if (parseInt(c.resources[i]) <= 0) return core.json(req, res, false, "INTEGERBELOWZERO")
                h[i] = parseInt(c.resources[i]) || parseInt(e.limits[i]) || parseInt(e.feature_limits[i]);
                let j = parseInt((f[i].used - f[i].total) + e.limits[i] || e.feature_limits[i])
                let k = f[i].used - ((parseInt(e.limits[i]) || parseInt(e.feature_limits[i])) - (parseInt(c.resources[i]) || parseInt(e.limits[i]) || parseInt(e.feature_limits[i])))
                let l = await check(h[i], j, k, f[i].used)
                f[i].used = l ?? f[i].used
            });
            function check(i, j, k, l) {
                if (i < j) {
                    return k
                } else if (i > j) {
                    p = true
                    return l
                } else {
                    return l
                }
            };
            if (p == false) {
                let m = await fetch(`${pterodactyl.domain}/api/application/servers/${e.id}/build`, {
                    method: "PATCH",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${pterodactyl.app}`,
                    },
                    body: JSON.stringify({
                        allocation: e.allocation,
                        limits: {
                            memory: h.memory,
                            disk: h.disk,
                            cpu: h.cpu,
                            io: 500,
                            swap: -1,
                            threads: null,
                            oom_disabled: true
                        },
                        feature_limits: {
                            allocations: h.allocations,
                            databases: h.databases,
                            backups: h.backups
                        },
                    })
                });
                let n = await m.json()
                if (n.attributes) {
                    let o = d.findIndex(i => i.identifier === a);
                    d[o] = n.attributes
                    await db.set("resources", b, f)
                    await db.set("servers", b, d)
                    core.log(`${req.session.userinfo.username} modified their server named: ${c.name}.`);
                    return core.json(req, res, true, "SUCCESS")
                }
                return
            }
            return core.json(req, res, false, "INSUFFICIENT")
        } catch (error) {
            handle(error, "Minor", 39)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.put("/api/servers/modify/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            await core.server(req, res, a);
            let b = req.body;
            let c = await ptero.eggs.get(b.id)
            if (!c) return core.json(req, res, false, "404")
            c = c.attributes
            let d = {}
            for (let i of c.relationships.variables.data) {
                d[i.attributes.env_variable] = i.attributes.default_value
            }
            let e = await ptero.servers.get(a)
            let m = await fetch(`${pterodactyl.domain}/api/application/servers/${e.attributes.id}/startup`, {
                method: "PATCH",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.app}`,
                },
                body: JSON.stringify({
                    "startup": c.startup,
                    "environment": d,
                    "egg": b.id,
                    "image": c.docker_image,
                    "skip_scripts": false
                })
            });
            let n = await m.json()
            return core.json(req, res, true, "SUCCESS")
        } catch (error) {
            handle(error, "Minor", 39)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function handle(error, a, b) {
        System.err.println(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "servers-settings",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/servers/settings.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}