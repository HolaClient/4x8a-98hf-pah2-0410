<<<<<<< HEAD
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
 * users.js - User management for admins router.
 *--------------------------------------------------------------------------
*/
const page = modules.page
const users = require('../../cache/users')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get("/api/admin/economy", core.admin, async (req, res) => {
        try {
            const getUserData = async (a) => {
                const b = await db.get('users', a);
                if (!b) return
                const c = await db.get("economy", b.id);
                return {
                    username: b.username,
                    id: b.id,
                    coins: c.coins,
                    credits: c.credits,
                    email: b.email,
                };
            };
            const getUsers = async () => {
                const d = await db.get('users', 'users') ?? [];
                const e = d.map(f => getUserData(f));
                return Promise.all(e);
            };
            core.log(`${req.session.userinfo.username} viewed the economy of all users.`)
            return await getUsers().then(g => res.end(JSON.stringify({ success: true, data: g })));
        } catch (error) {
            handle(error, "Minor", 38)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/economy/:user", core.admin, async (req, res) => {
        try {
            const a = req.params.user;
            const b = await db.get('users', a);
            const c = await db.get("economy", a) || { coins: 0, credits: 0 }
            const d = {
                coins: req.query.coins || c.coins,
                credits: req.query.credits || c.credits,
            }
            if (!b) return res.end(JSON.stringify({ success: false, message: alert("INVALIDUSER", req, res) }));
            if (!req.query.payload) res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
            await db.set('economy', a, d);
            core.log(`${req.session.userinfo.username} changed the economy of ${b.username}.`);
            res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 65)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/resources/:user", core.admin, async (req, res) => {
        try {
            const a = await db.get('users', req.params.user) ?? [];
            const b = await db.get('resources', req.params.user) ?? [];
            const c = req.params.user;
            if (!req.query.payload)
                res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: b }));
            const d = {
                memory: {
                    total: req.query.memory || b.memory.total,
                    used: b.memory.used,
                },
                disk: {
                    total: req.query.disk || b.disk.total,
                    used: b.disk.used,
                },
                cpu: {
                    total: req.query.cpu || b.cpu.total,
                    used: b.cpu.used,
                },
                servers: {
                    total: req.query.servers || b.servers.total,
                    used: b.servers.used,
                },
                allocations: {
                    total: req.query.cpuTotal || b.allocations.total,
                    used: b.allocations.used,
                },
                databases: {
                    total: req.query.cpuTotal || b.databases.total,
                    used: b.databases.used,
                },
                backups: {
                    total: req.query.cpuTotal || b.backups.total,
                    used: b.backups.used,
                },
            };
            await db.set('resources', c, d);
            core.log(`${req.session.userinfo.username} changed the resources of ${a.username}.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 85)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/users", core.admin, async (req, res) => {
        try {
            core.log(`${req.session.userinfo.username} viewed user list.`);
            return core.json(req, res, true, "SUCCESS", await users.getAll());
        } catch (error) {
            handle(error, "Minor", 133)
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.get("/admin/users/view/:id", core.admin, async (req, res) => {
        try {
            let a = req.params.id
            let b = await db.get("settings", "appearance") || {};
            let c = b.themes && b.themes.layouts || "default";
            let d = await users.get(a);
            if (!d) return res.end(fallback.error404());
            let e = await db.get("resources", a);
            let f = await db.get("economy", a);
            let g = await db.get("billing", "invoices") || []
            let h = g.filter(i => i.user.id === parseInt(a));
            let j = {};
            if (d.hcx) {
                j = d
            } else {
                j["hcx"] = await db.get("users", a)
            }
            j["resources"] = e
            j["economy"] = f
            j["invoices"] = h
            return core.html(req, res, `./resources/views/admin/${c}/users/[id].ejs`, j);
        } catch (error) {
            handle(error, "Minor", 42)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/admin/users", core.admin, async (req, res) => {
        try {
            const a = await db.get('users', 'users') ?? [];
            const b = [];
            for (const c of a) {
                const d = await db.get('users', c);
                const e = await db.get('resources', c);
                const f = await db.get('economy', c);
                b.push({
                    userinfo: d,
                    resources: e,
                    economy: f
                });
            };
            core.log(`${req.session.userinfo.username} viewed user list.`);
            return res.end(JSON.stringify({ success: false, message: alert("SUCCESS", req, res), data: b }));
        } catch (error) {
            handle(error, "Minor", 143)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/package/:user", core.admin, async (req, res) => {
        try {
            const a = req.params.user
            if (!a) return res.end(JSON.stringify({ "success": false, "message": alerts("MISSINGUSER", req, res) }));
            const packages = await db.get("settings", "packages") || {}
            if (!packages.list[req.query.package])
                return res.end({ "success": false, "message": alerts.a("COULDNOTFINDTHATPACKAGE", req, res) });
            await db.set("package", a, req.query.package);
            const b = await db.get("users", a);
            core.log(`${req.session.userinfo.username} changed the package of ${b.username} to ${req.query.package}.`);
            return res.end(JSON.stringify({ "success": true, "message": alerts.a("CHANGEDPLAN", req, res) }));
        } catch (error) {
            handle(error, "Minor", 165);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });//unfinished

    app.get("/api/admin/users/remove", core.admin, async (req, res) => {
        try {
            const a = req.query.user;
            if (!a) return res.end({ success: false, message: alerts("MISSINGUSER", req, res) });

            const userinfo = await db.get("users", a);
            if (!userinfo) return res.end({ success: false, message: alerts("INVALIDUSER", req, res) });

            const allips = (await db.get("ips", "ips")) || [];
            const filteredIps = allips.filter((ip) => ip !== userinfo.ip);

            if (filteredIps.length === 0) {
                await db.delete("ips", "ips");
            } else {
                await db.set("ips", "ips", filteredIps);
            }
            await db.delete("ips", a);

            let userids = (await db.get("users", "users")) || [];
            userids = userids.filter((u) => u !== a);

            if (userids.length === 0) {
                await db.delete("users", "users");
            } else {
                await db.set("users", "users", userids);
            }
            let code = await db.get('referrals', a).code
            await Promise.all([
                db.delete("users", a),
                db.delete("economy", a),
                db.delete("daily", a),
                db.delete("j4rs", a),
                db.delete("referrals", a),
                db.delete("referrals", a),
                db.delete("resources", a),
                db.delete("package", a)
            ]);
            core.log(`${req.session.userinfo.username} deleted the user ${userinfo.username}.`);
            return res.end({ success: true, message: alert("SUCCESS", req, res) });
        } catch (error) {
            handle(error, "Minor", 181)
            return res.end({ success: false, message: alert("ERROR", req, res) + error });
        }
    });//unfinished

    async function handle(error, a, b) {
        try {
            const admins = await db.get("notifications", "admins") || [];
            const errors = await db.get("logs", "errors") || [];
            console.error(error)
            admins.push({
                title: `${a} Error`,
                message: `${error}`,
                type: "error",
                place: "admin-users",
                date: Date.now()
            });
            errors.push({ date: Date.now(), error: error, file: "routes/admin/users.js", line: b });
            await db.set("notifications", "admins", admins)
            await db.set("logs", "errors", errors)
            return
        } catch (error) {
            console.error(error)
            return
        }
    }
}
/**
 *--------------------------------------------------------------------------
 * End of the file.
 *--------------------------------------------------------------------------
=======
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
 * users.js - User management for admins router.
 *--------------------------------------------------------------------------
*/
const users = require('../../utils/users')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get("/api/admin/economy", core.admin, async (req, res) => {
        try {
            const getUserData = async (a) => {
                const b = await db.get('users', a);
                if (!b) return
                const c = await db.get("economy", b.id);
                return {
                    username: b.username,
                    id: b.id,
                    coins: c.coins,
                    credits: c.credits,
                    email: b.email,
                };
            };
            const getUsers = async () => {
                const d = await db.get('users', 'users') ?? [];
                const e = d.map(f => getUserData(f));
                return Promise.all(e);
            };
            core.log(`${req.session.userinfo.username} viewed the economy of all users.`)
            return await getUsers().then(g => res.end(JSON.stringify({ success: true, data: g })));
        } catch (error) {
            handle(error, "Minor", 38)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/economy/:user", core.admin, async (req, res) => {
        try {
            const a = req.params.user;
            const b = await db.get('users', a);
            const c = await db.get("economy", a) || { coins: 0, credits: 0 }
            const d = {
                coins: req.query.coins || c.coins,
                credits: req.query.credits || c.credits,
            }
            if (!b) return res.end(JSON.stringify({ success: false, message: alert("INVALIDUSER", req, res) }));
            if (!req.query.payload) res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
            await db.set('economy', a, d);
            core.log(`${req.session.userinfo.username} changed the economy of ${b.username}.`);
            res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 65)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/resources/:user", core.admin, async (req, res) => {
        try {
            const a = await db.get('users', req.params.user) ?? [];
            const b = await db.get('resources', req.params.user) ?? [];
            const c = req.params.user;
            if (!req.query.payload)
                res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: b }));
            const d = {
                memory: {
                    total: req.query.memory || b.memory.total,
                    used: b.memory.used,
                },
                disk: {
                    total: req.query.disk || b.disk.total,
                    used: b.disk.used,
                },
                cpu: {
                    total: req.query.cpu || b.cpu.total,
                    used: b.cpu.used,
                },
                servers: {
                    total: req.query.servers || b.servers.total,
                    used: b.servers.used,
                },
                allocations: {
                    total: req.query.cpuTotal || b.allocations.total,
                    used: b.allocations.used,
                },
                databases: {
                    total: req.query.cpuTotal || b.databases.total,
                    used: b.databases.used,
                },
                backups: {
                    total: req.query.cpuTotal || b.backups.total,
                    used: b.backups.used,
                },
            };
            await db.set('resources', c, d);
            core.log(`${req.session.userinfo.username} changed the resources of ${a.username}.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 85)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/users", core.admin, async (req, res) => {
        try {
            core.log(`${req.session.userinfo.username} viewed user list.`);
            return core.json(req, res, true, "SUCCESS", await users.getAll());
        } catch (error) {
            handle(error, "Minor", 133)
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.get("/admin/users/view/:id", core.admin, async (req, res) => {
        try {
            let a = req.params.id
            let b = await db.get("settings", "appearance") || {};
            let c = b.themes && b.themes.layouts || "default";
            let d = await users.get(a);
            if (!d) return res.end(fallback.error404());
            let e = await db.get("resources", a);
            let f = await db.get("economy", a);
            let g = await db.get("billing", "invoices") || []
            let h = g.filter(i => i.user.id === parseInt(a));
            let j = {};
            if (d.hcx) {
                j = d
            } else {
                j["hcx"] = await db.get("users", a)
            }
            j["resources"] = e
            j["economy"] = f
            j["invoices"] = h
            return core.html(req, res, `./resources/views/admin/${c}/users/[id].ejs`, j);
        } catch (error) {
            handle(error, "Minor", 42)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/admin/users", core.admin, async (req, res) => {
        try {
            const a = await db.get('users', 'users') ?? [];
            const b = [];
            for (const c of a) {
                const d = await db.get('users', c);
                const e = await db.get('resources', c);
                const f = await db.get('economy', c);
                b.push({
                    userinfo: d,
                    resources: e,
                    economy: f
                });
            };
            core.log(`${req.session.userinfo.username} viewed user list.`);
            return res.end(JSON.stringify({ success: false, message: alert("SUCCESS", req, res), data: b }));
        } catch (error) {
            handle(error, "Minor", 143)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/package/:user", core.admin, async (req, res) => {
        try {
            const a = req.params.user
            if (!a) return res.end(JSON.stringify({ "success": false, "message": alerts("MISSINGUSER", req, res) }));
            const packages = await db.get("settings", "packages") || {}
            if (!packages.list[req.query.package])
                return res.end({ "success": false, "message": alerts.a("COULDNOTFINDTHATPACKAGE", req, res) });
            await db.set("package", a, req.query.package);
            const b = await db.get("users", a);
            core.log(`${req.session.userinfo.username} changed the package of ${b.username} to ${req.query.package}.`);
            return res.end(JSON.stringify({ "success": true, "message": alerts.a("CHANGEDPLAN", req, res) }));
        } catch (error) {
            handle(error, "Minor", 165);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });//unfinished

    app.get("/api/admin/users/remove", core.admin, async (req, res) => {
        try {
            const a = req.query.user;
            if (!a) return res.end({ success: false, message: alerts("MISSINGUSER", req, res) });

            const userinfo = await db.get("users", a);
            if (!userinfo) return res.end({ success: false, message: alerts("INVALIDUSER", req, res) });

            const allips = (await db.get("ips", "ips")) || [];
            const filteredIps = allips.filter((ip) => ip !== userinfo.ip);

            if (filteredIps.length === 0) {
                await db.delete("ips", "ips");
            } else {
                await db.set("ips", "ips", filteredIps);
            }
            await db.delete("ips", a);

            let userids = (await db.get("users", "users")) || [];
            userids = userids.filter((u) => u !== a);

            if (userids.length === 0) {
                await db.delete("users", "users");
            } else {
                await db.set("users", "users", userids);
            }
            let code = await db.get('referrals', a).code
            await Promise.all([
                db.delete("users", a),
                db.delete("economy", a),
                db.delete("daily", a),
                db.delete("j4rs", a),
                db.delete("referrals", a),
                db.delete("referrals", a),
                db.delete("resources", a),
                db.delete("package", a)
            ]);
            core.log(`${req.session.userinfo.username} deleted the user ${userinfo.username}.`);
            return res.end({ success: true, message: alert("SUCCESS", req, res) });
        } catch (error) {
            handle(error, "Minor", 181)
            return res.end({ success: false, message: alert("ERROR", req, res) + error });
        }
    });//unfinished

    async function handle(error, a, b) {
        try {
            const admins = await db.get("notifications", "admins") || [];
            const errors = await db.get("logs", "errors") || [];
            console.error(error)
            admins.push({
                title: `${a} Error`,
                message: `${error}`,
                type: "error",
                place: "admin-users",
                date: Date.now()
            });
            errors.push({ date: Date.now(), error: error, file: "routes/admin/users.js", line: b });
            await db.set("notifications", "admins", admins)
            await db.set("logs", "errors", errors)
            return
        } catch (error) {
            console.error(error)
            return
        }
    }
}
/**
 *--------------------------------------------------------------------------
 * End of the file.
 *--------------------------------------------------------------------------
>>>>>>> 08cb23d (04-06)
*/