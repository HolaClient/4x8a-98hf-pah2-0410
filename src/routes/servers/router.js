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
 * router.js - server backend handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const appearance = await db.get("settings", "appearance") || {};
    const template = appearance.themes && appearance.themes.layouts || "default";
    const routers = [
        { a: "", b: "console" },
        { a: "/", b: "console" },
        { a: "/files", b: "files" },
        { a: "/upload", b: "upload" },
        { a: "/plugins", b: "plugins" },
        { a: "/mods", b: "mods" },
        { a: "/subdomains", b: "subdomains" },
        { a: "/players", b: "players" },
        { a: "/databases", b: "databases" },
        { a: "/schedules", b: "schedules" },
        { a: "/network", b: "network" },
        { a: "/backups", b: "backups" },
        { a: "/startup", b: "startup" },
        { a: "/settings", b: "settings" },
        { a: "/delete", b: "delete" }
    ];
    routers.forEach(route => {
        app.get(`/servers/:id${route.a}`, core.auth, (req, res) => handle(req, res, route.b));
    });
    const handle = async (req, res, a) => {
        try {
            let e = req.params.id;
            let b = await db.get("servers", req.session.userinfo.id) || [];
            if (b.length === 0 || !b.find(i => i.identifier == e)) return res.end(fallback.error401());
            core.server(req, res, e)
            let c = await ptero.servers.getAll()
            let d = c.find(i => i.attributes.identifier == e);
            if (!d || d == undefined || d == null) {
                let f = await db.get("resources", req.session.userinfo.id)
                let g = ["memory", "disk", "cpu", "allocations", "backups", "databases"]
                let h = b.find(i => i.identifier == e)
                g.forEach(i => {f[i].used = f[i].used - h.limits[i] || h.feature_limits[i]});
                b = b.filter(i => i.identifier !== e);
                await db.set("servers", req.session.userinfo.id, b);
            }
            if (d.attributes.suspended == true) {
                return pages.render(req, res, `./resources/views/layouts/${template}/servers/suspended.ejs`, d);
            } else {
                return pages.render(req, res, `./resources/views/layouts/${template}/servers/${a}.ejs`, d);
            }
        } catch (error) {
            console.error(error);
            res.end(fallback.error500(error));
        }
    };
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/