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
 * alerts.js - Alert system handler
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('./modules.js')
/**
 *--------------------------------------------------------------------------
 * Exporting alerts
 *--------------------------------------------------------------------------
*/
module.exports = function (key, req, res) {
    let b = "en"
    if (req.session.userinfo && req.session.userinfo.language) {b = req.session.userinfo.language}
    const a = require(`../../resources/locales/${b}/alerts.json`);
    return a[key] || `Alert key "${key}" not found in the ${b} language.`;
};
module.exports.notify = async function (a) {
    let b = "en"
    let e = await db.get("users", a.user)
    if (e && e.language) {b = e.language};
    const c = require(`../../resources/locales/${b}/notifications.json`);
    let d = await db.get("notifications", a.user) || []
    d.push(c[a.message] || `Notification "${a.message}" not found in the ${b} language.`);
    await db.set("notifications", e.id, d);
    return
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/