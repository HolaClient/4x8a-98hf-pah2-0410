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
 * mods.js - Minecraft server mods installer handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const base = `https://api.modrinth.com/v2`

    app.get("/api/servers/mods", core.auth, async (req, res) => {
        try {
            if (req.query.search) {
                let a = await fetch(`${base}/search?query=${req.query.search}&facets=[["project_type:mod"]]`)
                let b = await a.json()
                return res.end(JSON.stringify({ success: true, data: b.hits }));
            }
            let a = await cacheDB.get("mods")
            return res.end(JSON.stringify({ success: true, data: a }));
        } catch (error) {
            handle(error, "Minor", 40)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/servers/mods", core.auth, async (req, res) => {
        try {
            let a = req.body.mod
            let b = req.body.id
            await core.server(req, res, b)
            let c = await fetch(`${base}/project/${a}/version`)
            let d = await c.json();
            let g = `${d[0].name}.jar`
            g = g.replace(/[ !@#$%^&*()/]/g, '-');
            let h = await fetch(d[0].files[0].url);
            let i = await h.buffer();
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            await fetch(`${pterodactyl.domain}/api/client/servers/${b}/files/write?file=%2Fmods%2F${g}`, {
                "method": "POST",
                "body": i,
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                }
            }
            );
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 55)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    cache()
    setInterval(() => {
        cache()
    }, 60000 * 5);

    async function cache() {
        try {
            const a = await fetch(`${base}/search?limit=20&facets=[["project_type:mod"]]`);
            const b = await a.json();
            const f = b.hits.map(async (project) => {
                if (project.icon_url) {
                    const c = await fetch(project.icon_url);
                    const d = await c.buffer();
                    project.icon_url = `data:${c.headers.get('content-type')};base64,${d.toString('base64')}`;
                    project.body = ""
                    return project;
                } else {
                    const c = await fetch("https://www.vhv.rs/dpng/d/445-4454243_craft-bukkit-logo-spigot-logo-hd-png-download.png");
                    const d = await c.buffer();
                    project.icon_url = `data:${c.headers.get('content-type')};base64,${d.toString('base64')}`;
                    project.body = ""
                    return project;
                }
            });
            const e = await Promise.all(f);
            const h = e.filter(item => item !== null);
            await cacheDB.set("mods", h);
        } catch (error) {
            return;
        }
    }

    async function handle(error, a, b) {
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
    }
}