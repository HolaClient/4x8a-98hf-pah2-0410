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
 * onboarding.js - Onboarding manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../../../utils/modules')
const core = modules.core;
module.exports.load = async function (app, db) {
  app.get("/api/pterodactyl/admin/settings", core.auth, async (req, res) => {
    const ptla = await db.get('pterodactyl', 'settings')
    ptla.domain = req.query.domain
    ptla.app = req.query.app
    ptla.acc = req.query.acc
    if (!req.query.payload) {
      res.json({success: true})
      return
    }
    if (req.query.payload == 1) {
      await db.set('pterodactyl', 'settings', ptla)
      res.json({success: true})
      return
    }
  })

  app.get("/api/pterodactyl/admin/nodes", core.auth, async (req, res) => {
    const ptla = await db.get('pterodactyl', 'settings')
    res.json(ptla.creation.nodes)
  })

  app.get("/api/pterodactyl/admin/nodes/new", core.auth, async (req, res) => {
    const ptla = await db.get('pterodactyl', 'settings')
    const id = req.query.id
    const premium = req.query.premium
    const enabled = req.query.enabled
    const permission = req.query.permission
    const response = await fetch(ptla.domain + "/api/application/nodes/" + id + "?include=location", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${ptla.app}`,
      },
    });

    const data = await response.json();
    let b = {
      enabled: boolean(enabled),
      premium: boolean(premium),
      permission: parseInt(permission),
      attributes: data.attributes
    }
    ptla.creation.nodes[id] = b
    await db.set('pterodactyl', 'settings', ptla)
    res.json({ success: true })
  })
}