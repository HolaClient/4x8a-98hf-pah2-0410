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
 * console.js - Server console & power manager
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
const chalk = modules.chalk;
const { consolesocket } = require('../../../../utils/consolesocket')
const readline = require('readline')
module.exports.load = async function (app, db) {
    const pterodactyl = await db.get('pterodactyl', 'settings')
    const ptlaUrl = pterodactyl.domain;
    const ptlaApi = pterodactyl.app;
    const ptlaAcc = pterodactyl.acc;
    //   app.ws('/api/servers/controller/console', core.auth, async (ws, req) => {
    //
    //  });

    app.get('/api/servers/:id', core.auth, async (req, res) => {
        let si = req.session.pterodactyl.relationships.servers.data.filter(name => name.attributes.identifier == req.params.id);
    if (!si) {
      res.json({success: false, message: "Server doesn't exist!"})
    }
        let response = await fetch(`${ptlaUrl}/api/client/servers/${req.params.id}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ptlaAcc}`
            }
        })
        let data = await response.json()
        res.json({ success: true, data })
    });

    app.post('/api/servers/controller/power', core.auth, async (req, res) => {
        let si = req.session.pterodactyl.relationships.servers.data.filter(name => name.attributes.identifier == req.query.id);
    if (!si) {
      res.json({success: false, message: "Server doesn't exist!"})
    }
        let response = await fetch(`${ptlaUrl}/api/client/servers/${req.body.id}/power`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ptlaAcc}`
            },
            "body": JSON.stringify({ signal: req.body.power })
        })
        if (response.status = 204) {
            return res.json({ success: true, message: "Started!" })
        }
    });

    app.get('/api/servers/controller/resources/:id', core.auth, async (req, res) => {
        let si = req.session.pterodactyl.relationships.servers.data.filter(name => name.attributes.identifier == req.query.id);
    if (!si) {
      res.json({success: false, message: "Server doesn't exist!"})
    }
        let response = await fetch(`${ptlaUrl}/api/client/servers/${req.params.id}/resources`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ptlaAcc}`
            },
        })
        const data = await response.json()
        res.json({ success: true, data })
    });
}