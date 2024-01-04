/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * users.js - Administrative handler to manage users.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
const crypt = modules.crypt
module.exports.load = async function (app, db) {
    const settings = await modules.settings;
    app.get("/api/admin/users/coins", core.auth, async (req, res) => {
        try {
            const userIds = await db.get('users', 'users') ?? [];
            const list = [];

            for (const userId of userIds) {
                const userinfo = await db.get('users', userId);

                if (!userinfo) {
                    console.error(`User data not found for user ID: ${userId}`);
                    continue;
                }
                const coins = await db.get("coins", userinfo.hcid);

                if (!(userinfo.role == "system")) {
                    list.push({
                        username: userinfo.username,
                        hcid: userinfo.hcid,
                        coins: coins,
                        email: userinfo.email,
                    });
                }
            }

            res.json(list);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        }
    });

    app.get("/api/admin/coins/:user", core.auth, async (req, res) => {
        if (req.session.permissions) {
            return res.redirect("/404?message=Dennis-is-a-retard")
        }
        if (req.session.permissions.level > 100) {return res.redirect("/404?message=Dennis-is-a-retard-for-real")}
        const alerts = require('../../middleware/alerts')(req.session.language)
        const a = req.params.user
        if (!req.query.payload) {
            const b = await db.get('coins', a) ?? [];
            res.json(b);
            return
        }
        const c = req.query.coins
        await db.set('coins', a, c)
        res.json({success: true, message: alerts.a("SUCCESS")})
    });

    app.get("/api/admin/users/resources", core.auth, async (req, res) => {
        const alerts = require('../../middleware/alerts')(req.session.language)
        if (!req.query.payload) {
            const a = await db.get('resources', req.query.user) ?? [];
            res.json(a);
            return
        }

        const h = {
            ram: req.query.ram,
            disk: req.query.disk,
            cpu: req.query.cpu,
            servers: req.query.servers,
            backups: req.query.backups,
            allocations: req.query.allocations,
            databases: req.query.databases
        };

        const j = req.query.user;

        if (!h.ram || !h.disk || !h.servers || !h.cpu || !h.backups || !h.allocations || !h.databases) {
            return res.json({ "success": false, "message": alerts.a("MISSINGFIELDS") });
        }

        const k = await db.get('resources', j);

        Object.keys(h).forEach(l => {
            m(k, { name: l, total: h[l] });
        });

        function m(o, p) {
            const n = o.findIndex(resource => resource.name === p.name);
            o[n].total = p.total
        }
        await db.set('resources', j, k)
        return res.json({ "success": true, "message": alerts.a("SUCCESS") });
    });

    app.get("/api/admin/users", core.auth, async (req, res) => {
        try {
            const userIds = await db.get('users', 'users') ?? [];
            const users = [];

            for (const userId of userIds) {
                const userinfo = await db.get('users', userId);
                users.push(userinfo)
            }
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        }
    });

    app.get("/api/admin/users/remove", core.auth, async (req, res) => {
        try {
            const user = req.query.user;
            if (!user) return res.json({ success: false, message: alerts.a("MISSINGUSER") });

            const userinfo = await db.get("users", user);
            if (!userinfo) return res.json({ success: false, message: alerts.a("INVALIDUSER") });

            const rm = async (v) => {
                const allips = (await db.get("ips", "ips")) || [];
                const filteredIps = allips.filter((ip) => ip !== userinfo.ip[v]);

                if (filteredIps.length === 0) {
                    await db.delete("ips", "ips");
                } else {
                    await db.set("ips", "ips", filteredIps);
                }
                await db.delete("ips", user);
            };

            await rm("v6");
            await rm("v4");

            let userids = (await db.get("users", "users")) || [];
            userids = userids.filter((u) => u !== user);

            if (userids.length === 0) {
                await db.delete("users", "users");
            } else {
                await db.set("users", "users", userids);
            }
            let code = await db.get('referrals', user).code
            await Promise.all([
                db.delete("users", user),
                db.delete("coins", user),
                db.delete("daily", user),
                db.delete("daily", `claims-${user}`),
                db.delete("j4rs", user),
                db.delete("referrals", user),
                db.delete("referrals", code),
                db.delete("resources", user),
                db.delete("package", user)
            ]);

            wh(`remove account`, `${req.session.userinfo.username} deleted the user \`${user}\`.`);
            dl.a(`${req.session.userinfo.username} removed the user ${user}.`);

            return res.json({ success: true, message: alerts.a("SUCCESS") });
        } catch (error) {
            return res.json({ success: false, message: "An error occurred", error });
        }
    });

    app.get("/api/admin/users/package", async (req, res) => {
        if (!req.query.user) return res.json({ "success": false, "message": alerts.a("MISSINGUSER") });
        if (!settings.packages.list[req.query.package])
            return res.json({ "success": false, "message": alerts.a("COULDNOTFINDTHATPACKAGE") });
        await db.set("package", req.query.user, req.query.package);
        const userinfo = await db.get("users", req.query.user)
        hi("PACKAGECHANGED", req.query.package)
        wh(
            `set plan`,
            `${req.session.userinfo.username} changed the package of the user \`${userinfo.username}\` to \`${req.query.package}\`.`
        );
        dl.a(`${req.session.userinfo.username} changed the package of the user ${userinfo.username} to ${req.query.package}.`)
        return res.json({ "success": true, "message": alerts.a("CHANGEDPLAN") });
        async function hi(key, item) {
            const lang = await core.lang(req, res);
            const langData = require(`../../../resources/locales/${lang.code}/notifications.json`);
            const alerts = await db.get("notifications", req.session.userinfo.hcid) ?? [];
            const alert = {
                "time": new Date().getTime(),
                "head": langData[key].head,
                "body": langData[key].body + item
            };
            alerts.push(alert);
            await db.set('notifications', req.session.userinfo.hcid, alerts);
        }
    });
}
