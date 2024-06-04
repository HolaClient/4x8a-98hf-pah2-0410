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
 * players.js - Minecraft server mods installer handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];

    app.get("/api/servers/players/bans/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            await core.server(req, res, req.params.id)
            let a;
            if (req.query.type && req.query.type == "ip") {
                a = "banned-ips.json"
            } else {
                a = "banned-players.json"
            }
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/contents?file=%2F${a}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let c = await b.json()
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
        } catch (error) {
            handle(error, "Minor", 40)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/servers/players/ops/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            await core.server(req, res, req.params.id)
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/contents?file=%2Fops.json`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let c = await b.json()
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
        } catch (error) {
            handle(error, "Minor", 64);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });
    
    app.post("/api/servers/players/bans/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            await core.server(req, res, req.params.id)
            let a;
            let d;
            if (req.query.type && req.query.type == "ip") {
                a = "banned-ips.json"
                d = {
                    name: req.body.ip,
                    reason: "None"
                }
            } else {
                a = "banned-players.json"
                d = {
                    name: req.body.user,
                    reason: "None"
                }
            }
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/contents?file=%2F${a}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let c = await b.json();
            let g = c.push(d);
            let e = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/write?file=%${a}`, {
                "method": "POST",
                "body": g,
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let f = await e.json();
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 40)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function handle(error, a, b) {
        console.error(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "admin-users",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/admin/users.js", line: b });
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
 * players.js - Minecraft server mods installer handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];

    app.get("/api/servers/players", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            async function getPlayers(a) {
                let pterodactyl = await db.get("config");
                if (pterodactyl && pterodactyl.domain && pterodactyl.acc) {
                    try {
                        let b = new consoleWS(a);
                        await b.init();
                        let c;
                        let h = {
                            total: 0,
                            online: 0,
                            players: []
                        };
                        const e = new Promise((resolve) => {
                            const f = setTimeout(() => {
                                return { success: false, message: "Timeout of 10000ms exceeded!" };
                            }, 10000);
                            b.stream((g) => {
                                if (g.event === 'console output' && g.args[0] !== "list") {
                                    c = g.args[0];
                                    const d = c.match(/There are (\d+) of a max of (\d+) players online: (.*)/);
                                    if (d) {
                                        h.total = parseInt(d[2]);
                                        h.online = parseInt(d[1]);
                                        h.players = d[3].split(", ").map(i => i.trim());
                                    }
                                    clearTimeout(f);
                                    resolve();
                                }
                            });
                            setTimeout(() => {
                                b.sendCommand('list');
                            }, 100);
                        });
                        await e;
                        b.close();
                        return { success: true, data: h };
                    } catch (error) {
                        return { success: false, message: error };
                    }
                }
            }
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
        } catch (error) {
            handle(error, "Minor", 40)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/servers/players/bans/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            await core.server(req, res, req.params.id)
            let a;
            if (req.query.type && req.query.type == "ip") {
                a = "banned-ips.json"
            } else {
                a = "banned-players.json"
            }
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/contents?file=%2F${a}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let c = await b.json()
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
        } catch (error) {
            handle(error, "Minor", 40)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/servers/players/ops/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            await core.server(req, res, req.params.id)
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/contents?file=%2Fops.json`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let c = await b.json()
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
        } catch (error) {
            handle(error, "Minor", 64);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });
    
    app.post("/api/servers/players/bans/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            await core.server(req, res, req.params.id)
            let a;
            let d;
            if (req.query.type && req.query.type == "ip") {
                a = "banned-ips.json"
                d = {
                    name: req.body.ip,
                    reason: "None"
                }
            } else {
                a = "banned-players.json"
                d = {
                    name: req.body.user,
                    reason: "None"
                }
            }
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/contents?file=%2F${a}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let c = await b.json();
            let g = c.push(d);
            let e = await fetch(`${pterodactyl.domain}/api/client/servers/${req.params.id}/files/write?file=%${a}`, {
                "method": "POST",
                "body": g,
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            let f = await e.json();
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 40)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function handle(error, a, b) {
        console.error(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "admin-users",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/admin/users.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
>>>>>>> 08cb23d (04-06)
}