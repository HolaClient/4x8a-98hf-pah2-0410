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
 * Loading modules
 *--------------------------------------------------------------------------
*/
const page = modules.page
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const appearance = await db.get("settings", "appearance") || {};
    const permissions = await db.get("settings", "permissions") || {};

    app.get("/api/userinfo", core.auth, async (req, res) => {
        try {
            let a = await db.get("users", req.session.userinfo.id)
            a["resources"] = await db.get('resources', req.session.userinfo.id)
            a["economy"] = await db.get("economy", req.session.userinfo.id)
            return core.json(req, res, true, "SUCCESS", a)
        } catch (error) {
            console.log(error)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.use("/ws", core.ws(), async (req, res) => {
        try {
            if (req.ws) {
                const ws = await req.ws();
                ws.end()
                return
                let a = await fetch('http://localhost:2000/api/ws/auth')
                let b = await a.json()
                const req = b.req
                if (!req) ws.send(JSON.stringify({ type: "redirect", redirect: "/login" }))
                ws.on('message', async (message) => {
                    let e = JSON.parse(message);
                    if (!e.type) return;
                    switch (e.type) {
                        case "render":
                            ws.send(JSON.stringify({ type: "render", page: await render(req, e.page) }))
                            break;
                        default:
                            break;
                    }
                });
                setTimeout(() => {
                    //ws.send(JSON.stringify({type: "redirect", redirect: "/login"}))
                }, 1000);
            }
        } catch (error) {
            console.error(error)
            return;
        }
    });

    async function render(req, url) {
        const a = permissions.auth?.routes || require('../../../app/config/permissions.json').auth.routes;
        const b = permissions.landing?.routes || require('../../../app/config/permissions.json').landing.routes;
        const c = permissions.layouts?.routes || require('../../../app/config/permissions.json').layouts.routes;
        const d = permissions.admin?.routes || require('../../../app/config/permissions.json').admin.routes;
        const e = [
            { name: "auth", routes: a },
            { name: "landing", routes: b },
            { name: "layouts", routes: c },
            { name: "admin", routes: d }
        ];
        let result;
        try {
            const responses = await Promise.all(e.map(async ({ name, routes }) => {
                let i;
                for (let x in routes) {
                    if (routes[x].route == `${url}`) {
                        i = x;
                        break;
                    }
                }
                if (i !== undefined) {
                    const route = routes[i];
                    if (route) {
                        if (route.requireAuth && (!req)) return { code: 401, page: await page.string(req, `./resources/views/errors/401.ejs`) };
                        if (req.session && req.permissions && route.permission > req.permissions.level) return { code: 403, page: fallback.error403() };
                        return {
                            code: 200,
                            page: await page.string(req, `./resources/views/${name}/${appearance.themes && appearance.themes[name] || "default"}/${route.path}`)
                        };
                    }
                }
                return;
            }));
            result = responses.filter(response => response !== undefined)[0];
        } catch (error) {
            console.error(error);
            result = { code: 500, page: fallback.error500() };
        }
        return result;
    }

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