/**
 *--------------------------------------------------------------------------
 *  __   ______ _ __  __   __
 * | |  | | | |  / ____| (_)  | | \ \ / /
 * | |__| | ___ | | __ _| || |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | || | |/ _ \ '_ \| __| > <  
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
 * notifications.js - Server side notifications handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get("/api/notifications", core.auth, async (req, res) => {
        try {
            let a = await db.get("requests", req.session.userinfo.id) || {};
            return core.json(req, res, true, "SUCCESS", {
                all: a.all || {},
                sent: a.sent || {},
                unread: a.unread || {},
                read: a.read || {}
            });
        } catch (error) {
            System.err.println(error);
            return core.json(req, res, false, "ERROR", error);
        }
    });

    /*
    app.delete("/api/notifications/:id", core.auth, async (req, res) => {
        try {
            let a = req.params.id;
            let b = await db.get("requests", req.session.userinfo.id) || {};
            if (b.sent[a]) {
                let c = await db.get("requests", b.sent[a].user) || {};
                if (c.incoming[a]) {
                    delete c.incoming[a];
                    await db.set("requests", b.sent[a].user, c);
                }
                delete b.sent[a];
                await db.set("requests", req.session.userinfo.id, b);
            }
            if (b.incoming[a]) {
                let c = await db.get("requests", b.incoming[a].from) || {};
                if (c.sent[a]) {
                    delete c.sent[a];
                    c.rejected = c.rejected || {};
                    c.rejected[a] = b.incoming[a];
                    await db.set("requests", b.incoming[a].from, c);
                }
                delete b.incoming[a];
                await db.set("requests", req.session.userinfo.id, b);
                return core.json(req, res, true, "SUCCESS");
            }
            return core.json(req, res, false, "404");
        } catch (error) {
            System.err.println(error);
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.patch("/api/notifications/:id", core.auth, async (req, res) => {
        try {
            let a = req.params.id;
            let b = await db.get("requests", req.session.userinfo.id) || {};
            if (b.incoming[a]) {
                let c = await db.get("requests", b.incoming[a].from) || {};
                let d = c.sent[a];
                if (d && parseInt(d.user) === req.session.userinfo.id) {
                    if (d.type === "coins") {
                        let e = await db.get("economy", d.from) || { coins: 0 };
                        let f = await db.get("economy", req.session.userinfo.id) || { coins: 0 };
                        if (parseInt(f.coins) < parseInt(d.coins)) return core.json(req, res, false, "INSUFFICIENT");
                        f.coins = parseInt(f.coins) - parseInt(d.coins);
                        e.coins = parseInt(e.coins) + parseInt(d.coins);
                        await db.set("economy", req.session.userinfo.id, f);
                        await db.set("economy", d.from, e);
                    } else if (d.type === "server") {
                        let e = await db.get("resources", d.from) || {};
                        let f = await db.get("resources", req.session.userinfo.id) || {};
                        let g = await ptero.servers.get(d.server);
                        let h = {
                            memory: g.attributes.limits.memory,
                            disk: g.attributes.limits.disk,
                            cpu: g.attributes.limits.cpu,
                            allocations: g.attributes.feature_limits.allocations,
                            backups: g.attributes.feature_limits.backups,
                            databases: g.attributes.feature_limits.databases
                        };
                        for (let [i, j] of Object.entries(h)) {
                            j = parseInt(j);
                            e[i].used -= j;
                            e[i].total -= j;
                            f[i].used += j;
                            f[i].total += j;
                        }
                        let k = await db.get("servers", d.from) || [];
                        let l = k.findIndex(i => i.identifier === d.server);
                        if (l !== -1) k.splice(l, 1);
                        let m = await db.get("servers", req.session.userinfo.id) || [];
                        m.push(g.attributes);
                        await db.set("resources", d.from, e);
                        await db.set("resources", req.session.userinfo.id, f);
                        await db.set("servers", d.from, k);
                        await db.set("servers", req.session.userinfo.id, m);
                        let n = await db.get("pterodactyl", "users") || [];
                        let o = n.find(i => i.hc === req.session.userinfo.id);
                        await ptero.servers.assign(g.attributes, o.id);
                    } else if (d.type === "resources") {
                        let e = await db.get("resources", d.from) || {};
                        let f = await db.get("resources", req.session.userinfo.id) || {};
                        for (let [i, j] of Object.entries(d.resources)) {
                            j = parseInt(j);
                            if (j > (e[i].total - e[i].used)) return core.json(req, res, false, "INSUFFICIENT");
                            e[i].used += j;
                            f[i].total += j;
                        }
                        await db.set("resources", d.from, e);
                        await db.set("resources", req.session.userinfo.id, f);
                    }
                    delete c.sent[a];
                    delete b.incoming[a];
                    c.rejected = c.rejected || {};
                    c.rejected[a] = d;
                    b.rejected = b.rejected || {};
                    b.rejected[a] = d;
                    await db.set("requests", b.incoming[a].from, c);
                    await db.set("requests", req.session.userinfo.id, b);
                    return core.json(req, res, true, "SUCCESS");
                }
                return core.json(req, res, false, "404");
            }
            return core.json(req, res, false, "404");
        } catch (error) {
            System.err.println(error);
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.post("/api/notifications", core.auth, async (req, res) => {
        try {
            let a = req.body
            if (!a || !a.user || !a.server && !a.coins && !a.resources || !a.type) return core.json(req, res, false, "MISSING")
            let b = await db.get("requests", req.session.userinfo.id) || {}
            let c = await db.get("requests", a.user) || {}
            let request = {
                user: a.user,
                from: req.session.userinfo.id,
                type: a.type
            }
            if (a.type === "coins") {
                let d = await db.get("economy", a.user) || { coins: 0 }
                if (d.coins < a.coins) return core.json(req, res, false, "INSUFFICIENT")
                request["coins"] = d.coins
            } else if (a.type === "resources") {
                if (!a.resources) return core.json(req, res, false, "MISSING")
                let d = await db.get("resources", a.user)
                for ([i, j] of Object.entries(a.resources)) {
                    if (!a?.resources[i]) a.resources[i] = 0
                    j = parseInt(j);
                    if (isNaN(j)) j = 0
                    if (a.resources[i] < 0) return core.json(req, res, false, "INTEGERBELOWZERO")
                    if (j > (d[i].total - d[i].used)) return core.json(req, res, false, "INSUFFICIENT");
                }
                request["resources"] = a.resources
            }
            let e = `req_${Date.now()}-${crypt.gen10(12)}`
            b["sent"] = b.sent || {}
            b.sent[e] = request
            c["incoming"] = c.incoming || {}
            c.incoming[e] = request
            await db.set("requests", a.user, c)
            await db.set("requests", request.from, b)
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            System.err.println(error);
            return fallback.error500(error);
        }
    });
    */
}