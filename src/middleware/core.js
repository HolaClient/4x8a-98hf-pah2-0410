/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
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
const modules = require('../utils/modules.js')
const page = require('../middleware/theme.js')
const fs = require('fs')
const core = require('./core.js')
const db = require('../../drivers/db')
/**
 *--------------------------------------------------------------------------
 * Exporting core.auth()
 *--------------------------------------------------------------------------
*/
module.exports.auth = async function (req, res, next) {
    const settings = await require('../../drivers/st.js').settings();
    const routes = require(`../../resources/views/templates/${settings.theme}/pages.json`)
    const permissions = require('../../app/config/permissions.json')
    if (!req.session.userinfo) {
        return res.redirect(routes.routes.login);
    }
    const curl = req._parsedUrl.pathname;
    if (permissions.routes[curl] && permissions.routes[curl] > req.session.permissions.level) {
        try {
            return page.error("401", req, res)
        } catch (err) {
            console.log(`[WEBSITE] An error has occurred on path ${curl}: ${err}`);
            return res.send(`An error has occurred while rendering this page. <a href="/">Please click here if you weren't redirected!</a><br>${err}`);
        }
    }
    if (routes.permissions[curl] && routes.permissions[curl] < req.session.permissions.level) {
        try {
            return page.error("401", req, res)
        } catch (err) {
            console.log(`[WEBSITE] An error has occurred on path ${curl}: ${err}`);
            return res.send(`An error has occurred while rendering this page. <a href="/">Please click here if you weren't redirected!</a><br>${err}`);
        }
    }
    next();
};
module.exports.lang = async function (req, res) {
    let language;
    if (req.session) {
        language = req.session.language;
    }
    
    const locale = `../../resources/locales/${language}/info.json`;
    const dlocale = `../../resources/locales/en/info.json`;

    if (fs.existsSync(locale)) {
        return require(locale);
    } else {
        return require(dlocale);
    }
};

module.exports.n = async function (req, res, key, item, db) {
    idk(key, item)
    async function idk (key, item) {
        console.log(0);
        console.log(key, item)
        const lang = await core.lang(req, res);
        console.log(lang.code);
        const langData = require(`../../resources/locales/${lang.code}/notifications.json`);
        console.log(langData);
        const alerts = await db.get("notifications", req.session.userinfo.hcid) ?? [];
        console.log(alerts);
        const alert = {
            "time": new Date().getTime(),
            "body": langData[key].body + item,
            "title": langData[key].title,
        };
        alerts.push(alert);
        await db.set('notifications', req.session.userinfo.hcid, alerts);

        next();
    };
};


/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/