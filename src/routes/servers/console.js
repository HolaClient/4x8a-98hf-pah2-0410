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

    app.ws("/ws.servers.console", async (req, res, ws) => {
        try {
            let a = null;
            let c = JSON.parse(hcx.core.cookies.get(req, "hc.sk"))
            let e = await db.get("users", c.user)
            let userinfo;
            if (e) {
                let f = crypt.decrypt(c, e.sessions.secret)
                if (f && f === e.sessions.key) userinfo = e
            };
            if (!userinfo) ws.close();
            ws.on('message', async (event) => {
                try {
                    const b = JSON.parse(event);
                    if (b.event === "auth") {
                        if (!b.server) return ws.close();
                        const d = await db.get("servers", userinfo.id) || [];
                        if (d.length === 0 || !d.find(i => i.identifier === b.server)) {
                            ws.send(JSON.stringify({ event: "redirect" }));
                            ws.close();
                            return;
                        }
                        a = new hcx.pterodactyl.servers.console(b.server);
                        const f = await a.init();
                        if (f && f.event === 'error') {
                            ws.send(JSON.stringify(f));
                            ws.close();
                            return;
                        }
                        a.stream((data) => {
                            if (ws.readyState === WebSocket.OPEN) {
                                ws.send(JSON.stringify(data));
                            }
                        });
                        setTimeout(() => {
                            a.sendLogs();
                        }, 100);
                    } else if (a && b.event !== "auth") {
                        switch (b.event) {
                            case "send command":
                                a.sendCommand(b.args[0]);
                                break;
                            case "send stats":
                                a.sendStats();
                                break;
                            case "set state":
                                a.setState(b.args[0]);
                                break;
                            default:
                                if (a.ws && a.ws.readyState === WebSocket.OPEN) {
                                    a.ws.send(JSON.stringify(b));
                                }
                        }
                    }
                } catch (error) {
                    System.err.println(error);
                }
            });
            ws.on('close', () => {
                if (a) {
                    a.close();
                }
            });
        } catch (error) {
            System.err.println(error);
            return
        }
    });


    async function handle(error, a, b) {
        const admins = await db.get("notifications", "admins") || [];
        const errors = await db.get("logs", "errors") || [];
        System.err.println(error)
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