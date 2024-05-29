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
            const WebSocket = require('ws');
            let a = false;
            let b;
            let c;
            ws.on('message', async (event) => {
                try {
                    let d = JSON.parse(event);
                    if (d.event === "auth") {
                        if (!d.server) return ws.close();
                        b = d.server;
                        let e = await db.get("servers", parseInt(req.session.userinfo.id)) || [];
                        if (e.length === 0 || !e.find(i => i.identifier === b)) {
                            ws.send(JSON.stringify({ event: "redirect" }));
                            ws.close();
                            return;
                        }
                        let pterodactyl = await db.get("pterodactyl", "settings") || {};
                        let f = await fetch(`${pterodactyl.domain}/api/client/servers/${b}/websocket`, {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${pterodactyl.acc}`,
                            },
                        });
                        let g = await f.json();
                        c = new WebSocket(g.data.socket, { origin: pterodactyl.domain });
                        c.on('open', () => {
                            c.send(JSON.stringify({ event: "auth", args: [g.data.token] }));
                            setTimeout(() => {
                                c.send(JSON.stringify({ event: "send logs", args: [null] }));
                            }, 100);
                        });
                        c.on('message', async (message) => {
                            let h = JSON.parse(message);
                            if (h.event === "token expired") {
                                let j = await fetch(`${pterodactyl.domain}/api/client/servers/${b}/websocket`, {
                                    method: "GET",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${pterodactyl.acc}`,
                                    },
                                });
                                let k = await j.json();
                                c.send(JSON.stringify({ event: "auth", args: [k.data.token] }));
                            }
                            if (ws.readyState === WebSocket.OPEN) {
                                ws.send(JSON.stringify(h));
                            }
                        });
                        a = true;
                    }
                    if (a && d.event !== "auth") {
                        if (c && c.readyState === WebSocket.OPEN) {
                            c.send(JSON.stringify(d));
                        }
                    }
                } catch (error) {
                    console.error(error);
                }
            });
            ws.on('close', () => {
                if (c && c.readyState === WebSocket.OPEN) {
                    c.close();
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
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