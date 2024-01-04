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
 * delete.js - Server deleter.
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
module.exports.load = async function (app, db) {
  app.get("/api/pterodactyl/servers/delete/:id", core.auth, async (req, res) => {
    const pterodactyl = await db.get('pterodactyl', 'settings')
    const domain = pterodactyl.domain;
    const key = pterodactyl.app;
    if (!req.params.id) return res.send("Missing ID");
    if (req.session.pterodactyl.relationships.servers.data.filter(server => server.attributes.id == req.params.id).length == 0) return res.send("Could not find server with that ID.");
    const index = req.session.pterodactyl.relationships.servers.data.findIndex(server => server.attributes.id == req.params.id);
    let deletionresults = await fetch(
      domain + "/api/application/servers/" + req.params.id + "/force",
      {
        method: "delete",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${key}`
        }
      }
    );
    let ok = await deletionresults.ok;
    if (ok !== true) return res.send("The panel is having some error regarding the delete function, please contact an administrator or try contacting HolaClient's support team for further help.");
    let ures = await db.get('resources', req.session.userinfo.hcid)
    let srv = req.session.pterodactyl.relationships.servers.data[index].attributes;
    let resources = {
      ram: ures.ram + srv.limits.memory,
      disk: ures.disk + srv.limits.disk,
      cpu: ures.cpu + srv.limits.cpu,
      servers: ures.servers + 1,
      allocations: ures.allocations + srv.feature_limits.allocations,
      backups: ures.backups + srv.feature_limits.backups,
      databases: ures.databases + srv.feature_limits.databases
    };

    await db.set('resources', req.session.userinfo.hcid, resources)
    let pterodactylinfo = req.session.pterodactyl;
    pterodactylinfo.relationships.servers.data = pterodactylinfo.relationships.servers.data.filter(server => server.attributes.id.toString() !== req.params.id);
    req.session.pterodactyl = pterodactylinfo;
    await db.set('pterodactyl', req.session.userinfo.hcid, pterodactylinfo)
    return res.redirect('/integrations');
  });
}