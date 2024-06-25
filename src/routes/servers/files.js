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
 * files.js - Files handler.
 *--------------------------------------------------------------------------
*/
const ejs = require('ejs')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get("/api/servers/files/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            let e = req.query.dir ? `?directory=${encodeURIComponent(req.query.dir)}` : '';
            await core.server(req, res, a);
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${a}/files/list${e}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                },
            });
            let c = await b.json();
            return core.json(req, res, true, "SUCCESS", c)
        } catch (error) {
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.get("/api/servers/files/edit/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            const appearance = await db.get("settings", "appearance") || {};
            const template = appearance.themes && appearance.themes.layouts || "default";
            let a = req.params.id;
            let e = req.query.file ? `?file=${encodeURIComponent(req.query.file)}` : '';
            await core.server(req, res, a);
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${a}/files/contents${e}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                },
            });
            let c = await b.text();
            let d;
            try {
                const response = JSON.parse(c);
                if (response.errors && response.errors.length > 0) {
                    d = response.errors[0].detail;
                } else {
                    d = c;
                }
            } catch (e) {
                d = c
            }
            let cc = await ptero.servers.getAll()
            let dd = cc.find(i => i.attributes.identifier == a);
            const dat = await pages.data(req);
            return ejs.renderFile(`./resources/views/layouts/${template}/servers/editor.ejs`, { ...dat, data: dd, text: d },
                function (error, str) {
                    if (error) {
                        System.err.println(error);
                        return res.end(fallback.error500(error));
                    };
                    return res.end(str);
                }
            );
        } catch (error) {
            return core.json(req, res, false, "ERROR", error);
        }
    });

    app.get("/api/servers/files/delete/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            let e = req.query.file;
            let pathSegments = e.split('/');
            let file = pathSegments.pop();
            let root = '/';
            if (pathSegments.length > 0) {
                root = '/' + pathSegments.join('/');
            }
            await core.server(req, res, a);
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${a}/files/delete`, {
                "method": "POST",
                "body": JSON.stringify({
                    "root": root,
                    "files": [file]
                }),
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                },
            });
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });    

    app.post("/api/servers/files/edit/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            let e = req.query.file ? `?file=${encodeURIComponent(req.query.file)}` : '';
            await core.server(req, res, a);
            let b = await fetch(`${pterodactyl.domain}/api/client/servers/${a}/files/write${e}`, {
                "method": "POST",
                "body": req.body.content,
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                },
            });
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/servers/files/upload/:id", core.auth, async (req, res) => {
        try {
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let a = req.params.id;
            await core.server(req, res, a);
            let b = req.body.url
            if (!b) return res.end(JSON.stringify({ success: false, message: alert("MISSING", req, res) }));
            let c = await fetch(b)
            let d = await c.text();
            let g = path.basename(new URL(b).pathname);
            g = g.replace(/[ !@#$%^&*()/]/g, ' ');
            await fetch(`${pterodactyl.domain}/api/client/servers/${a}/files/write?file=%2F${g}`, {
                "method": "POST",
                "body": d,
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c.data }));
        } catch (error) {
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
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
            place: "servers-files",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/servers/files.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}