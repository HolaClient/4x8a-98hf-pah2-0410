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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
async function get(url, req) {
    try {
        const a = await hcx.loadModule('./app/config/pages.json');
        const b = await db.get("settings", "permissions") || {};
        const c = [];
        for (let i of a.categories) {
            c.push({
                name: i,
                routes: b[i] || a[i]
            });
        }
        let d
        if (url == "/") { d = "/" } else if (url.endsWith("/")) { d = url.slice(0, -1) } else { d = url };

        if (d.startsWith('/servers/')) {
            const serverRoutes = getServersRoutes();
            const [, , serverId, ...pathParts] = d.split('/');
            const path = '/' + pathParts.join('/');
            
            const serverRoute = serverRoutes.find(route => route.path === path);
            if (serverRoute) {
                let f = await load(`layouts/default/servers/${serverRoute.file}`, { serverId, ...req });
                return { success: true, data: f, code: 200, path: d }
            }
        }

        let e
        if (req) {
            e = await check(c, d, req);
        } else {
            e = await check(c, d);
        }
        if (!e) return { success: false, error: "NOT_FOUND", code: 404}
        for (let i of e.data.toMinify) {
            e.data[i] = compress(getContent(e.data[i]))
        }
        return e
    } catch (err) {
        console.error(err);
        return { success: false, error: err.message, code: 500 }
    }
}

async function check(a, b, req) {
    for (i of a) {
        let c = i.routes.find(j => j === b);
        if (c == "/") { c = "index" }
        if (c) {
            if (c.startsWith("/admin")) c = c.replace("/admin", "/")
            let d = await load(`${i.name}/default/${c}`, req);
            return { success: true, data: d, code: 200, path: `${i.name}/default/${c}` };
        }
    }
    return;
}

function getServersRoutes() {
    let fs = require('fs')
    let a = fs.readFileSync('./app/config/serverRoutes.json');
    let b = JSON.parse(a);
    return b
}

async function getByPath(path) {
    try {
        let d = await load(path);
        if (!d) return { success: false, error: "NOT_FOUND", code: 404}
        for (let i of d.data.toMinify) {
            d.data[i] = compress(getContent(d.data[i]))
        }
        return d
    } catch (err) {
        console.error(err);
        return { success: false, error: err, code: 500 }
    }
}

function getContent(a) {
    if (process.env.APP_ENV == "production") {
        return hcx.linkHTMLCSSClassNames(a, './public/common/tailwind.map.json')
    } else {
        return a
    }
}

function compress(a) {
    a = a.replace(/\s{2,}/g, ' ').trim();
    a = a.replace(/>\s+</g, '><');
    return a
}

function load(a, c) {
    try {
        const b = path.resolve(`./resources/views/${a}`);
        delete require.cache[require.resolve(b)];
        if (c) return require(b)(c);
        return require(b);
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    compress, load, check, getContent, getByPath, get
}