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
 * index.js - Endpoint permission handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../utils/modules")
const rateLimit = require("express-rate-limit");
const page = modules.page;
const path = modules.path;
const app = modules.app;
const geoip = modules.geoip;
const fs = modules.fs;
const ejs = modules.ejs;
const db = modules.db;
const keys = modules.keys;
const services = modules.services;
const chalk = modules.chalk;
const theme = modules.theme;
const fetch = modules.fetch;
const express = modules.express;
const arciotext = modules.arciotext;
const renderFile = modules.renderFile;
const eggs = modules.eggs;
const proxyAddr = require('proxy-addr');
const crypt = modules.crypt

module.exports.load = async function (app, db) {
    const settings = await require('../../drivers/st.js').settings();
    /**
     *--------------------------------------------------------------------------
     * Handleing all other routes
     *--------------------------------------------------------------------------
    */
    app.all("*", async (req, res) => {
        const routes = require(`../../resources/views/templates/${settings.theme}/pages.json`)
        if (!req.session.permissions) {
            req.session.permissions = {
                level: 1
            }
        }
        if (req.session.userinfo);
        const curl = req._parsedUrl.pathname
        if (settings.earn.arcio.enabled == true) req.session.arcsessiontoken = Math.random().toString(36).substring(2, 15);
        if (routes.mustbeloggedin.includes(curl) && !req.session.userinfo) return res.redirect(routes.routes.login);
        if (routes.mustbeadmin.includes(curl) && !req.session.userinfo) return res.redirect(routes.routes.login);
        if (routes.permissions[curl] && !req.session.userinfo) return res.redirect(routes.routes.login)
        if (routes.permissions[curl] > req.session.permissions.level) return page.error("403", req, res)
        const data = await eval(theme.renderdataeval(req))
        ejs.renderFile(
            `${routes.pages[curl.slice(1)] ? routes.pages[curl.slice(1)] : routes.errors[404]}`,
            data,
            null,
            function (err, str) {
                if (err) {
                    console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                    console.log(err);
                    //page.error("500", req, res)
                    return renderFile(routes.errors[500],
                        {
                            err: err,
                            extra: { home: { name: 'Error 500' } }
                        },
                        null,
                        (err, str) => {
                            if (err) return res.send('<center>Error</center>')
                            res.status(500);
                            res.send(str);
                        }
                    )
                };
                res.status(200);
                res.send(str);
            });
    });
    /**
     *--------------------------------------------------------------------------
     * Settings trust proxy level
     *--------------------------------------------------------------------------
    */
    app.set('trust proxy', 1);
    /**
     *--------------------------------------------------------------------------
     * Defining and loading global ratelimiter
     *--------------------------------------------------------------------------
    */
    const globalLimiter = rateLimit({
        windowMs: settings.ratelimits.global.time * 60 * 1000,
        max: settings.ratelimits.global.max,
        message: "Too many requests from this IP, please try again later.",
    });
    app.use(globalLimiter);
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/