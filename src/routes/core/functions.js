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
 * functions.js - Core functions of HolaClient.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
module.exports.load = async function (app, db) {
    let redirects = await db.get('core', 'redirects') ?? []
    for (const item of redirects) {
        app.get(`/${item.endpoint}`, async (req, res) => {
            return res.redirect(item.redirect);
        });
    }

    app.get("/api/core/redirects", async (req, res) => {
        let redirects = await db.get('core', 'redirects') ?? []
        res.json(redirects)
    });

    app.get("/api/core/redirects/add", core.auth, async (req, res) => {
        let redirects = await db.get('core', 'redirects') ?? []
        redirects.push({
            endpoint: req.query.e,
            redirect: req.query.r
        })
        await db.set('core', 'redirects', redirects)
        res.json({success: true})
    });

    app.get("/api/core/redirects/remove", core.auth, async (req, res) => {
        let redirects = await db.get('core', 'redirects') ?? [];
        redirects = redirects.filter(i => i.endpoint !== req.query.e);
        await db.set('core', 'redirects', redirects);
        res.json({ success: true });
    });
    

    app.get("/auth", async (req, res) => {
        res.redirect('/login');
    });
}