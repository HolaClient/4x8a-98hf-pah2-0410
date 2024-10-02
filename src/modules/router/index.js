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
 * router.js - Endpoints handler.
 *--------------------------------------------------------------------------
*/
let WebSockets = []
module.exports = async function () {
    const hcx = require('../../utils/hcx')
    const sessions = require('../sessions')
    /**
    *--------------------------------------------------------------------------
    * Handling the root route
    *--------------------------------------------------------------------------
    */
    hcx.static('/assets', path.join('./public'));
    hcx.static('/', path.join('./public/root'));
    hcx.static('/cdn', path.join('./storage/static'));
    app.use(async (req, res, next) => {
        try {
            if (req.method === "GET") {
                let routes = app.routes["GET"]
                for (let i of routes) {
                    if (i.path.includes(':')) {
                        let a = new RegExp('^' + i.path.replace(/:([^/]+)/g, '([^/]+)') + '$');
                        let b = req.url.match(a);
                        if (b) {
                            req.params = {};
                            i.keys.forEach((key, index) => {
                                req.params[key] = b[index + 1];
                            });
                            return next();
                        }
                    } else if (i.path === req.url) {
                        return next();
                    }
                }
                if (process.env.APP_MAINTENANCE === "true") return res.status(503).end("Service is currently under maintenance.");
                let a = hcx.cookies.getByHeader(req.headers.cookie, "hcx.user")
                if (!req?.session?.userinfo && a) {
                    a = JSON.parse(a)
                    if (a && a.id) {
                        let b = await db.get("users", a.id)
                        let c = hcx.crypt.decrypt(a, b.sessions.secret)
                        let d = hcx.crypt.decrypt(b.password)
                        if (c === d) {
                            let e = await db.get("resources", a.id)
                            req.session.userinfo = b
                            req.session.resources = e
                        }
                    }
                }
                let c = await db.get("permissions", "users") || []
                req.session.permissions = c.find(i => parseInt(i.id) === parseInt(req?.session?.userinfo?.id)) || req.session.permissions
                let d = await hcx.router.get(req.url, req);
                if (d && d.code === 200) {
                    let b = await hcx.permissions.check.request(req, d?.data?.settings?.permissions?.intent)
                    if (b && (b.code == 403 || b.code == 401) && d.data.settings.permissions.noPermitRedirect) return res.redirect(d?.data?.settings?.permissions?.noPermitRedirect)
                    if (b && b.code !== 200) return hcx.router.error(res, b.code);
                    if (d.code === 200) {
                        if (req.status) return;
                        res.setHeader("Content-Type", "text/html");
                        return res.end(d.data.page);
                    }
                    return hcx.router.error(res, d.code);
                } else {
                    return hcx.router.error(res, d.code || 500, d.error || d.data);
                }
            } else {
                next()
            }
        } catch (err) {
            console.error(err);
            if (req.status !== true) {
                return hcx.router.error(res, 500, err);
            }
        }
    });
    app.ws("/ws/core", {
        upgrade: (res, req, data) => hcx.upgradeWebSocketConnection(res, req, data),
        open: (ws) => WebSockets.push(ws),
        message: async (ws, message, isBinary) => {
            let data;
            try {
                if (isBinary) {
                    data = new TextDecoder('utf-8').decode(message);
                } else {
                    const decoder = new TextDecoder('utf-8');
                    data = decoder.decode(message);
                }
                data = JSON.parse(data);
            } catch (error) {
                return;
            }
            if (data.action === "render") {
                try {
                    await renderPage(data, ws)
                } catch (error) {
                    console.error(error);
                }
            } else if (data.action === "apply") {
                try {
                    if (data.type === "admin.settings") {
                        let a = await hcx.permissions.check.request(ws, "hcx.admin.settings.modify")
                        if (a && a.code !== 200) return;
                        if (typeof data.data === "object") {
                            for ([i, j] of Object.entries(data.data)) {
                                hcx.config.set(i, j)
                            }
                        }
                    }
                } catch (error) {
                    console.error(error);
                }
            } else if (data.action === "details") {
                try {
                    if (data.type === "admin.pterodactyl") {
                        let a = await hcx.permissions.check.request(ws, "hcx.admin.pterodactyl.nodes")
                        if (a && a.code !== 200) return;
                        if (data.data == 'nodes') {
                            let all = (await hcx?.panel?.getMain().nodes?.getAll()) || []
                            let configured = (await hcx?.panel?.nodes?.getConfigured()) || []
                            let toSend = []
                            if (configured.length !== 0 && all.length !== 0) {
                                for (let i of all) {
                                    let node = configured.find((node) => node.id === i.id)
                                    if (node) {
                                        i["deployment"] = node.deployment
                                        toSend.push(i)
                                    } else {
                                        toSend.push(i)
                                    }
                                }
                            } else {
                                toSend = all
                            }
                            ws.send(JSON.stringify({ action: "details", type: "admin.pterodactyl", item: "nodes", data: toSend }));
                        }
                    }
                } catch (error) {
                    console.error(error);
                }
            } else if (data.action === "deployServer") {
                try {
                    console.log(data.data);
                } catch (error) {
                    console.error(error);
                }
            } else if (data.action === "getData") {
                if (data.type === "db.read") {
                    let a = data.data.split('.')
                    let b = await db.get(a[0], a[1])
                    console.log(b)
                    return ws.send(JSON.stringify({ action: "data", type: "db.read", item: a[0], data: b }));
                }
            } else if (data.action === "modifyPermissions") {
                if (data.type === "intents.remove") {
                    hcx.permissions.users.removeIntent(data.data.user, data.data.intent)
                } else if (data.type === "intents.add") {
                    console.log(data.data.user, data.data.intent)
                    hcx.permissions.users.addIntent(data.data.user, data.data.intent)
                }
            }
        },
        close: (ws, code, message) => {
            WebSockets = WebSockets.filter(i => i !== ws)
        }
    });
    async function renderPage(data, ws) {
        const page = await hcx.router.get(data.data, ws);
        let b = await hcx.permissions.check.session(sessions.getByCookies(ws?.headers?.cookie), page?.data?.settings?.permissions?.intent)
        if (page.code === 200 && b.code === 200) {
            if (data.type === "page") {
                ws.send(JSON.stringify({ action: "clear", targetType: "element", target: "body" }));
                if (page.data.toReplace && page.data.toReplace.length >= 1) {
                    page.data.toReplace.forEach(i => {
                        if (process.env.APP_ENV == "production") {
                            i.data = hcx.linkHTMLCSSClassNames(i.data, './public/common/tailwind.map.json')
                        }
                        return ws.send(JSON.stringify({ action: "render", type: "replace", id: i.id, targetType: i.targetType, target: i.target, data: i.data }));
                    });
                }
                if (page.data.toPush && page.data.toPush.length >= 1) {
                    page.data.toPush.forEach(i => {
                        if (process.env.APP_ENV == "production") {
                            i.data = hcx.linkHTMLCSSClassNames(i.data, './public/common/tailwind.map.json')
                        }
                        return ws.send(JSON.stringify({ action: "render", type: "push", id: i.id, targetType: i.targetType, target: i.target, data: i.data }));
                    });
                }
            } else if (data.type === "content") {
                ws.send(JSON.stringify({ action: "render", type: "replace", id: i.id, targetType: "id", target: "content", data: page.data.content }));
                if (page.data.toPush && page.data.toPush.length >= 1) {
                    page.data.toPush.forEach(i => {
                        if (i?.contentCompatible === true) {
                            if (process.env.APP_ENV == "production") {
                                i.data = hcx.linkHTMLCSSClassNames(i.data, './public/common/tailwind.map.json')
                            }
                            return ws.send(JSON.stringify({ action: "render", type: "push", id: i.id, targetType: i.targetType, target: i.target, data: i.data }));
                        }
                    });
                }
            }
            page.data.assets.forEach(i => {
                return ws.send(JSON.stringify({ action: "loadAssets", type: i.type, data: i.data, name: i.name }));
            });
            if (page?.data?.components?.preFetch == true) {
                for (let i of page?.data?.components?.data) {
                    ws.send(JSON.stringify({ action: "preFetch", type: "component", data: i }));
                }
            }
            if (page?.data?.components?.initial) {
                let a = page?.data?.components
                let c = a.data.find(i => i.name === a.initial)
                ws.send(JSON.stringify({ action: "render", type: "replace", id: c.id, targetType: c.targetType, target: c.target, data: c.data, highlights: c.highlights || [], functions: c.functions || [] }));
            }
            ws.send(JSON.stringify({ action: "setTitle", data: `${page.data.settings.meta.title} | ${hcx.config.appearance.name}` }));
        } else if (page.code === 500) {
            ws.send(JSON.stringify({ action: "render", type: "replace", id: "content", targetType: "id", target: "content", data: await hcx.router.getErrorPage(500, page.error) }));
        } else {
            let c = page.code !== 200 ? page.code : (b.code !== 200 ? b.code : 404);
            ws.send(JSON.stringify({ action: "render", type: "replace", id: "content", targetType: "id", target: "content", data: await hcx.router.getErrorPage(c) }));
        }
    }
    if (process.env.APP_ENV !== "production") {
        hcx.watch('./resources/views', (a) => {
            try {
                // If you are using X1 in development mode, you have the option to switch between
                // re-fetching the entire page or re-rendering specific content. This setting is only
                // applied when a frontend view file is modified. Please read the comment below.

                let DEV_RENDER_STRATEGY = "refetch"; // Options available: "rerender" or "refetch"

                if (WebSockets.length !== 0) {
                    for (let i of WebSockets) {
                        try {
                            i.send(JSON.stringify({ action: DEV_RENDER_STRATEGY }));
                        } catch (error) {

                        }
                    }
                }
            } catch (error) {
                console.error(error)
            }
        });
    }
}
module.exports.connections = WebSockets
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/