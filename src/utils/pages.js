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
 * pages.js - Global theming function exporter.
 *--------------------------------------------------------------------------
*/
const ejs = require("ejs")
async function data(req) {
    let user = req.session.userinfo
    let servers = []
    let installed = false
    let lang = "en"
    if (user) { lang = user.language }
    if (user) { let s = await db.get("servers", user.id) || []; for (let i of s) { servers.push(i) } }
    if (user) { let q = await db.get("queue", "servers") || []; q.find(i => i.environment.user == user.id); for (let i of q) { servers.push(i) } }
    if (await db.get("core", "setup") == true) { installed = true }
    let data = {
        req: req,
        installed: installed,
        lang: require(`../../resources/locales/${lang}/language.json`),
        roles: await db.get("permissions", "roles") || [],
        appearance: await db.get('settings', 'appearance') || {},
        links: await db.get('settings', 'links') || {},
        tickets: await db.get('tickets', user && user.id || "") || [],
        resources: await db.get('resources', user && user.id || "") || [],
        economy: await db.get('economy', user && user.id || "") || [],
        userinfo: user,
        servers: servers || [],
        pterodactyl: await db.get("pterodactyl", "settings") || {}
    };
    return data;
};

async function render(req, res, a, b) {
    try {
        const c = await data(req);
        return ejs.renderFile(a, {...c, data: b || {}}, function (error, str) {
            if (error) {
                System.err.println(error);
                return res.html(fallback.error500(error));
            }
            return res.html(str);
        });
    } catch (error) {
        System.err.println(error);
        return res.end(fallback.error500(error));
    }
};
async function error(req, res, page) {
    try {
        ejs.renderFile(`./resources/views/errors/${page}.ejs`, null,
            function (error, str) {
                if (error) {
                    System.err.println(error);
                    return res.html(fallback.error500(error));
                };
                return res.html(str);
            }
        );
    } catch (error) {
        return res.end(fallback.error500(error));
    }
};

module.exports = { data, render, error }
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/