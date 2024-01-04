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
const ejs = require('ejs')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const db = require('../../drivers/db.js')
const { renderFile } = require('ejs')
const theme = require('./theme.js')
const arciotext = require('../utils/webserver');
const keys = require('../../app/keys/keys.json')

//Dear programmer,
//When I wrote this code, only God & 
//I knew how it worked.
//Now only God knows it.
//
//Therefore if you're trying to
//optimize this code, most probably it 
//will fail. Please increase this counter
//as the warning for the next person.
//
//Total time spent here = 3 Days.


/**
 *--------------------------------------------------------------------------
 * Exporting page.renderdataeval()
 *--------------------------------------------------------------------------
*/
module.exports.renderdataeval = async (req) => {
    const st = await db.get('core', 'settings') ?? []
    const inst = await db.get('core', 'setup') ?? false
    const langs = await db.get('core', 'languages') ?? []
    const newsettings = await db.get('core', 'settings') ?? []
    const ec = await db.get('core', 'eggs') ?? []
    const usr = await db.get('users', 'users') ?? []
    async function getUser(id) { return await db.get('users', id) ?? [] }
    const servicess = await db.get('core', 'integrations') ?? []
    const JavaScriptObfuscator = require('javascript-obfuscator');
    const ress = (req.session.userinfo) ? await db.get('resources', req.session.userinfo.hcid) ?? [] : null;
    const c = (req.session.userinfo) ? await db.get("coins", req.session.userinfo.hcid) ?? 0 : null;
    const cmus = await db.get('cryptomus', 'settings')
    const pteroinfo = (req.session.userinfo) ? await db.get('pterodactyl', req.session.userinfo.hcid)?? {} : null;
    const catt = await db.get('billing', 'categories')
    const ptlaset = await db.get('pterodactyl', 'settings')
    const productsl = await db.get('billing', 'products') ?? []
    const lgr = require('../../drivers/gl.js');
    const skt = require('../utils/consolesocket.js')
    const lgf = await lgr.glf();
    if (lgf) {
        var logss = await lgr.rlf(lgf);
    }
    let renderdata = {
        req: req,
        settings: st,
        languages: langs,
        eggs: ec,
        keys: keys,
        logs: logss,
        installed: inst,
        cryptomus: cmus,
        pterodactyl: pteroinfo,
        products: productsl,
        ptla: ptlaset,
        users: usr,
        resources: ress,
        user: async (id) => await getUser(id),
        categories: catt,
        integrations: servicess,
        permission: req.session.permission,
        userinfo: req.session.userinfo,
        packagename: req.session.userinfo ? (await db.get("package", req.session.userinfo.hcid)) || newsettings.packages.default : null,
        coins: c,
        theme: theme.name,
        db: db
    };

    if (newsettings.earn.arcio.enabled == true && req.session.arcsessiontoken) {
        renderdata.arcioafktext = JavaScriptObfuscator.obfuscate(`
            let token = "${req.session.arcsessiontoken}";
            let everywhat = ${newsettings.earn.arcio["afk page"].every};
            let gaincoins = ${newsettings.earn.arcio["afk page"].coins};
            let arciopath = "${newsettings.earn.arcio["afk page"].path.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}";

            ${arciotext}
        `);
    }

    return renderdata;
};
/**
 *--------------------------------------------------------------------------
 * Exporting page.get()
 *--------------------------------------------------------------------------
*/
module.exports.get = async function () {
    const newsettings = await require('../../drivers/st.js').settings();
    const routes = require(`../../resources/views/templates/${newsettings.theme}/pages.json`)
    let name = newsettings.theme;
    const pages = path.join(__dirname, "..", "..", "resources", "views", "templates", name, "pages.json");
    return {
        settings: JSON.parse(fs.readFileSync(pages).toString()),
        name: name
    };
};
/**
 *--------------------------------------------------------------------------
 * Exporting renderer function
 *--------------------------------------------------------------------------
*/
module.exports.render = async function (page, req, res) {
    const newsettings = await require('../../drivers/st.js').settings();
    const routes = require(`../../resources/views/templates/${newsettings.theme}/pages.json`)
    try {
        ejs.renderFile(routes.pages[page],
            await eval(theme.renderdataeval(req)),
            null,
            function (err, str) {
                if (err) {
                    console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                    console.log(err);
                    return renderFile(routes.errors[500],
                        {
                            err: err,
                            extra: { home: { name: 'Error 500' } }
                        },
                        null,
                        (err, str) => {
                            if (err) return res.send('<center>Error 500</center>')
                            res.status(500);
                            res.send(str);
                        }
                    )
                };
                res.status(200);
                res.send(str);
            }
        );
    } catch (err) {
        console.log(`[WEBSITE] An error has occurred while rendering the page!\n${err}`);
    }
};
module.exports.error = async function (page, req, res) {
    const newsettings = await db.get('core', 'settings')
    const routes = require(`../../resources/views/templates/${newsettings.theme}/pages.json`)
    ejs.renderFile(routes.errors[page],
        await eval(theme.renderdataeval(req)),
        null,
        function (err, str) {
            if (err) {
                console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                console.log(err);
                return renderFile(routes.errors[500],
                    {
                        err: err,
                        extra: { home: { name: 'Error 500' } }
                    },
                    null,
                    (err, str) => {
                        if (err) return res.send('<center>Error 500</center>')
                        res.status(500);
                        res.send(str);
                    }
                )
            };
            res.status(200);
            res.send(str);
        }
    );
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/