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
 * router.js - Endpoints handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../utils/modules")
const page = modules.page;
const path = modules.path;
const app = modules.app;
const geoip = modules.geoip;
const fs = modules.fs;
const ejs = modules.ejs;
const keys = modules.keys;
const services = modules.services
const chalk = modules.chalk;
const appjs = modules.appjs;
const fetch = modules.fetch;
const express = modules.express;
const arciotext = modules.arciotext;
const renderFile = modules.renderFile;
/**
 *--------------------------------------------------------------------------
 * Loading blacklist countries middleware
 *--------------------------------------------------------------------------
*/
module.exports.load = async function (app, db) {
    const settings = await require('../../drivers/st.js').settings();
    /**
     *--------------------------------------------------------------------------
     * Handleing the root route
     *--------------------------------------------------------------------------
    */
    app.all("/", async (req, res) => {
        const theme = page.get();
        const curl = req._parsedUrl.pathname;
        const routes = require(`../../resources/views/templates/${settings.theme}/pages.json`)
        if (routes.mustbeloggedin.includes(curl) && !req.session.userinfo) return res.redirect(routes.routes.login);
        if (routes.mustbeadmin.includes(curl) && !req.session.userinfo) return res.redirect(routes.routes.login);
        if (routes.permissions[curl] > req.session.permission) {
            try {
                page.render(routes.errors[403], req, res);
            } catch (err) {
                console.log(`[WEBSITE] An error has occurred on path ${curl}: ${err}`);
                return res.send(`An error has occurred while rendering this page. <a href="/">Please click here if you weren't redirected!</a><br>${err}`);
            }
        }

        page.render("/", req, res);
    });
    /**
     *--------------------------------------------------------------------------
     * Loading static endpoints
     *--------------------------------------------------------------------------
    */
    app.use('/assets', express.static(`./public`));
    app.use('/admin', express.static(`./public/admin`));
    app.use('/cdn', express.static(`./cdn`));
    const blacklistedCountry = settings.features.blacklist.country;
    app.use((req, res, next) => {
        const userCountry = geoip.lookup(req.ip);
        if (blacklistedCountry.includes(userCountry?.country)) {
            res.status(403)
            page.error("blacklisted", req, res)
        } else {
            next();
        }
    });
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/