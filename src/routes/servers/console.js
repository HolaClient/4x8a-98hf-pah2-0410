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
 * console.js - Server console handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const WebSocket = require('ws');
const users = require('../../cache/users')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get("/api/servers/details/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            await core.server(req, res, a);
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${a}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                },
            });
            let c = await b.json();
            let d = await db.get("renewals", c.attributes.identifier) || ""
            c.attributes.reneval = d.date || "Disabled"
            return res.end(JSON.stringify({ success: true, data: c.attributes }));
        } catch (error) {
            handle(error, "Minor", 36)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.use("/ws.servers.console", core.ws(), core.auth, async (req, res) => {
        try {
            const ws = await req.ws();
            let l = false;
            let a;
            ws.on('message', async (event) => {
                try {
                    let j = JSON.parse(event);
                    if (j.event === "auth") {
                        if (!j.user) return ws.end();
                        if (!j.server) return ws.end();
                        a = j.server
                        let m = await users.get(parseInt(j.user));
                        if (m.hcx.sessions.secret === j.session) {
                            l = true;
                            let n = await db.get("servers", parseInt(m.hcx.id)) || [];
                            if (n.length == 0 || !n.find(i => i.identifier === a)) {
                                ws.send(JSON.stringify({ "event": "redirect" }));
                                ws.end();
                                return;
                            }
                        } else {
                            ws.send(JSON.stringify({ "event": "redirect" }));
                            ws.end();
                            return;
                        }
                    }
                    if (l === true) {
                        let pterodactyl = await db.get("pterodactyl", "settings") || {};
                        let b = await fetch(`${pterodactyl.domain}/api/client/servers/${a}/websocket`, {
                            "method": "GET",
                            "headers": {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${pterodactyl.acc}`,
                            },
                        });
                        let c = await b.json();
                        let d = new WebSocket(c.data.socket, { origin: pterodactyl.domain });
                        d.on('open', () => {
                            d.send(JSON.stringify({ "event": "auth", "args": [c.data.token] }));
                            setTimeout(() => {
                                d.send(JSON.stringify({ "event": "send logs", "args": [null] }));
                            }, 100);
                            if (j.event !== "auth") {
                                d.send(JSON.stringify(j))
                            }
                        });
                        d.on('message', async (message) => {
                            let f = JSON.parse(message);
                            if (f.event == "token expired") {
                                let g = await fetch(`${pterodactyl.domain}/api/client/servers/${a}/websocket`, {
                                    "method": "GET",
                                    "headers": {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json",
                                        "Authorization": `Bearer ${pterodactyl.acc}`,
                                    },
                                });
                                let h = await g.json();
                                d.send(JSON.stringify({ "event": "auth", "args": [h.data.token] }));
                            }
                            if (ws.readyState == WebSocket.OPEN) {
                                ws.send(JSON.stringify(f));
                            }
                        });
                    }
                } catch (error) {
                    console.error(error);
                }
            });
        } catch (error) {
            handle(error, "Minor", 59)
            return
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
            place: "servers-console",
            line: b,
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/servers/console.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}