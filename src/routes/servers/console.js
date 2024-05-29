<<<<<<< HEAD
<<<<<<< HEAD
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
 * console.js - Server console handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const WebSocket = require('ws');
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
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/servers/console/auth/:id", async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            if (!req.session.userinfo) return core.redirect(res, "/login")
            var servers = await db.get("servers", parseInt(req.session.userinfo.id)) ?? [];
            if (servers.length == 0 || !servers.find(i => i.identifier === req.params.id)) return core.json(req, res, true, "INVALID")
            return core.json(req, res, true, "SUCCESS")
        } catch (error) {
            return core.json(req, res, false, "ERROR", error)
        }
    });

    exp.ws("/api/servers/console/:id", async (ws, req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            let e = await fetch(`${process.env.APP_URL}/api/servers/console/auth/${a}`)
            let f = await e.json()
            if (f.success !== true) {
                ws.send(JSON.stringify({ "event": "redirect"}));
                ws.end()
                return
            }
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
            });
            ws.on('message', async (message) => {
                if (d.readyState == WebSocket.OPEN) { d.send(message) };
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
        } catch (error) {
            return;
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
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.use("/ws.servers.console", core.ws(), async (req, res) => {
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
            console.error(error);
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
>>>>>>> 7f9cef0 (02-05)
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
>>>>>>> 6db1d9f (21-05)
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
>>>>>>> 4473be3 (29-05)
}