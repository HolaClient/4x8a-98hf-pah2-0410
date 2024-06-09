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
 * settings.js - Server settings handler.
 *--------------------------------------------------------------------------
*/
const jwt = require('jsonwebtoken');
const crypto = require("crypto")
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];

    app.patch("/api/servers/transfer/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {};
            let a = req.params.id;
            await core.server(req, res, a);
            let b = req.session.userinfo.id;
            let c = req.body;
            let d = await db.get("servers", b);
            let e = d.find(i => i.identifier === a);
            let f = await ptero.nodes.getAll();
            let g = f.find(i => i.attributes.id == c.id);
            let h = g.attributes.relationships.allocations.data.filter(i => i.attributes.assigned !== true);
            let j = await db.get("pterodactyl", "nodes") || [];
            let k = j.find(i => i.id == c.id);
            if (!k) return core.json(req, res, false, "404");
            let l = f.find(i => i.attributes.id === e.node);
            l = l.attributes;
            if ((await db.get("permissions", k.deployments.role)).permission > req.session.userinfo.permissions.level) {
                return core.json(req, res, false, "403");
            }
            let p = await fetch(`${pterodactyl.domain}/api/application/nodes/${l.id}/configuration`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                },
            });
            let q = await p.json();
            let r = await fetch(`${pterodactyl.domain}/api/application/nodes/${k.id}/configuration`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                },
            });
            let s = await r.json();
            const t = {
                iss: s.remote,
                aud: [`${k.scheme}://${k.fqdn}:${k.daemon_listen}`],
                unique_id: crypto.randomBytes(16).toString('hex'),
                jti: crypto.createHash('md5').update(e.uuid).digest('hex'),
                sub: e.uuid,
                server_uuid: e.uuid
            };
            let m = await fetch(`${l.scheme}://${l.fqdn}:${l.daemon_listen}/api/servers/${encodeURIComponent(e.uuid)}/transfer`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${q.token}`
                },
                body: JSON.stringify({
                    server_id: e.uuid,
                    url: `${t.aud[0]}/api/transfers`,
                    token: jwt.sign(t, s.token, {
                        algorithm: 'HS256',
                        expiresIn: 5 * 60
                    }),
                    server: {
                        uuid: e.uuid,
                        start_on_completion: false,
                    },
                })
            });
            if (m.status === 202 || m.status === 204 || m.status === 200) {
                core.log(`${req.session.userinfo.username} modified their server named: ${c.name}.`);
                return core.json(req, res, true, "SUCCESS");
            }
            return core.json(req, res, false, "INSUFFICIENT");
        } catch (error) {
            handle(error, "Minor", 39);
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