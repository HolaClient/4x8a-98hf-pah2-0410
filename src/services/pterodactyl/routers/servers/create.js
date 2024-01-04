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
 * create.js - Server creation handler.
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
  const pterodactyl = await db.get('pterodactyl', 'settings')
  const domain = pterodactyl.domain;
  const key = pterodactyl.app;
  app.post("/api/pterodactyl/servers/create", async (req, res) => {
    let request = req.body
    let resources = await db.get('resources', 1);
    let pterousers = await db.get('pterodactyl', 'users');
    let index = pterousers.findIndex(user => user.hcid == 1);
    let pteroid = pterousers[index].id
    let eggs = await db.get('core', 'eggs')
    let egg = eggs[request.software]
    if (pterodactyl.creation.nodes[request.node].premium == true && req.session.userinfo.premium == false) {
      return res.json({ success: false, message: "This is a premium node." })
    }
    if (pterodactyl.creation.nodes[request.node].permission > req.session.userinfo.permissions.level) {
      return res.json({ success: false, message: "Insufficient permission." })
    }
    if (resources.servers <= 0) {
      return res.json({ success: false, message: "Insufficient server slots!" })
    }
    let minres = { ram: 128, disk: 256, cpu: 25, backups: 0, allocations: 0, databases: 0 }
    let x = ["ram", "cpu", "disk", "backups", "allocations", "databases"]
    for (let i of x) {
      if (resources[i] < minres[i]) {
        return res.json({ success: false, message: "Resources too low!" })
      }
    }
    let node = await fetch(
      domain + `/api/application/nodes/${request.node}/allocations`,
      {
        method: "GET",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${key}`, "Accept": "application/json" }
      })
    let allocations = await node.json()
    for (let i of allocations.data) {
      if (i.attributes.assigned == false) {
        request.allocation = i.attributes.id;
        break
      }
    }
    console.log(request.allocation)
    let response = await fetch(
      domain + "/api/application/servers",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${key}`, "Accept": "application/json" },
        body: JSON.stringify(
          {
            name: request.name,
            user: pteroid,
            egg: egg.info.egg,
            docker_image: egg.info.docker_image,
            startup: egg.info.startup,
            environment: egg.info.environment,
            limits: {
              memory: request.resources.ram,
              cpu: request.resources.cpu,
              disk: request.resources.disk,
              swap: -1,
              io: 500
            },
            feature_limits: {
              databases: request.resources.databases,
              backups: request.resources.backups,
              allocations: request.resources.allocations
            },
            allocation: {
              default: request.allocation
            },
            deploy: {
              locations: [],
              dedicated_ip: false,
              port_range: []
            }
          }
        )
      }
    );

    const serverInfoText = await response.json();

    if (response.statusText !== "Created") {
      console.log(serverInfoText);
      return res.json({ "success": false, "message": serverInfoText.errors[0].detail });
    }
    resources.ram = resources.ram - request.resources.ram
    resources.disk = resources.disk - request.resources.disk
    resources.cpu = resources.cpu - request.resources.cpu
    resources.allocations = resources.allocations - request.resources.allocations
    resources.databases = resources.databases - request.resources.databases
    resources.backups = resources.backups - request.resources.backups
    resources.servers = resources.servers - 1
    await db.set('resources', req.session.userinfo.hcid, resources)
    let pinfo = await db.get('pterodactyl', req.session.userinfo.hcid)
    let acc = await fetch(pterodactyl.domain + "/api/application/users/" + pinfo.id + "?include=servers",
      {
        method: "GET",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${pterodactyl.app}` }
      }
    );
    let accinfo = await acc.json();
    let info = accinfo.attributes
    await db.set('pterodactyl', req.session.userinfo.hcid, info)
    req.session.pterodactyl = info
    wh(`Pterodactyl | New Server`, `${req.session.userinfo.username} created the server called \`${request.name}\` with the following specs:\n\`\`\`Memory: ${request.resources.ram} MB\nCPU: ${request.resources.cpu}%\nDisk: ${request.resources.disk}\nDatabases: ${request.resources.databases}\nBackups: ${request.resources.backups}\nAllocations: ${request.resources.allocations}\`\`\``)
    dl.c(`${req.session.userinfo.username} created the server ${request.name} with the following specs:\nMemory: ${request.resources.ram} MB\nCPU: ${request.resources.cpu}%\nDisk: ${request.resources.disk}\nDatabases: ${request.resources.databases}\nBackups: ${request.resources.backups}\nAllocations: ${request.resources.allocations}`)
    res.json({ success: true, message: 'Success', id: serverInfoText.attributes.identifier });
  });
}