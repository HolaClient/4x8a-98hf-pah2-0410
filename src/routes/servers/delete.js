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
 * delete.js - Server deletion handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];

    app.get("/api/servers/delete/:id", core.auth, async (req, res) => {
        try {
            let a = req.params.id;
            await core.server(req, res, a);
            let h = req.session.userinfo.id
            let b = await db.get("servers", h)
            let c = b.find(c => c.identifier == a);
            let pterodactyl = await db.get("pterodactyl", "settings") || {}
            let d = await fetch(`${pterodactyl.domain}/api/application/servers/${c.id}/force`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.app}`,
                },
            });
            let e = await d.ok;
            if (!e == true) return res.end({ success: false, message: alert("ERROR", req, res) + "The panel couldn't delete your server. Please contact the administrators." });
            let f = await db.get('resources', h);
            let g = ['memory', 'cpu', 'disk', 'allocations', 'databases', 'backups'];
            function resources(a) {
                f[a].used = parseInt(f[a].used) - parseInt(c.resources[a]);
            }
            await Promise.all(g.map(resources));
            f.servers.used = (parseInt(f.servers.used) - 1)
            j = b.filter(k => k.identifier !== a);
            await db.set("servers", h, j);
            await db.set('resources', h, f);
            core.log(`${req.session.userinfo.username} deleted their server named: ${c.name}.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 39)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function handle(error, a, b) {
        console.error(error)
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