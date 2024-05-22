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
 * theme.js - Global theming function exporter.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * loading modules
 *--------------------------------------------------------------------------
*/
const theme = require('./theme.js')

/**
 *--------------------------------------------------------------------------
 * Exporting page.data()
 *--------------------------------------------------------------------------
*/
module.exports.data = async (req) => {
    let user = req.session.userinfo
    let servers = []
    let installed = false
    let lang = "en"
    if (user) { lang = user.language }
    if (user) { let s = await db.get("servers", user.id) || []; for (let i of s) {servers.push(i)}}
    if (user) { let q = await db.get("queue", "servers") || []; q.find(i => i.environment.user == user.id); for (let i of q) {servers.push(i)} }
    if (await db.get("core", "setup") == true) { installed = true }
    let data = {
        req: req,
        installed: installed,
        lang: require(`../../resources/locales/${lang}/language.json`),
        roles: await db.get("permissions", "roles") || [],
        appearance: await db.get('settings', 'appearance') || {},
        authentication: await db.get('settings', 'authentication') || {},
        cryptomus: await db.get('cryptomus', 'settings') || {},
        links: await db.get('settings', 'links') || {},
        database: await db,
        tickets: await db.get('tickets', user && user.id || "") || [],
        resources: await db.get('resources', user && user.id || "") || [],
        economy: await db.get('economy', user && user.id || "") || [],
        userinfo: user,
        servers: servers || [],
        pterodactyl: await db.get("pterodactyl", "settings") || {}
    };
    return data;
};
/**
 *--------------------------------------------------------------------------
 * Exporting renderer function
 *--------------------------------------------------------------------------
*/
module.exports.render = async function (page, req, res) {
    try {
        const data = await theme.data(req);
        return ejs.renderFile(page, data, function (error, str) {
            res.setHeader('Content-Type', 'text/html');
            if (error) {
                console.error(error);
                return res.end(fallback.error500(error));
            }
            return res.end(str);
        });
    } catch (error) {
        console.error(error);
        return res.end(fallback.error500(error));
    }
};
module.exports.error = async function (page, req, res) {
    try {
        ejs.renderFile(`./resources/views/errors/${page}.ejs`, null,
            function (error, str) {
                res.setHeader('Content-Type', 'text/html');
                res.setHeader('X-Powered-By', 'HolaClient-X1');
                if (error) {
                    console.error(error);
                    return res.end(fallback.error500(error));
                };
                return res.end(str);
            }
        );
    } catch (error) {
        return res.end(fallback.error500(error));
    }
};
module.exports.string = async function (req, page) {
    try {
        let user = req
        let servers
        let installed = false
        if (user) { servers = await db.get("servers", user.id) || [] }
        if (await db.get("core", "setup") == true) { installed = true }
        let data = {
            req: req,
            installed: installed,
            roles: await db.get("permissions", "roles") || [],
            appearance: await db.get('settings', 'appearance') || {},
            authentication: await db.get('settings', 'authentication') || {},
            cryptomus: await db.get('cryptomus', 'settings') || {},
            links: await db.get('settings', 'links') || {},
            database: await db,
            tickets: await db.get('tickets', user && user.id || "") || [],
            resources: await db.get('resources', user && user.id || "") || [],
            economy: await db.get('economy', user && user.id || "") || [],
            userinfo: user,
            servers: servers || [],
            pterodactyl: await db.get("pterodactyl", "settings") || {}
        };
        let result;
        ejs.renderFile(page, data, function (error, str) {
            if (error) {
                console.error(error);
                return fallback.error500(error);
            }
            result = str
            return
        });
        return result
    } catch (error) {
        console.log(error);
        return fallback.error500(error);
    }
};
async function handle(error, a, b) {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];
    console.error(error)
    admins.push({
        title: `${a} Error`,
        message: `${error}`,
        type: "error",
        place: "utils-theme",
        date: Date.now()
    });
    errors.push({ date: Date.now(), error: error, file: "utils/theme.js", line: b });
    await db.set("notifications", "admins", admins)
    await db.set("logs", "errors", errors)
    return
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/