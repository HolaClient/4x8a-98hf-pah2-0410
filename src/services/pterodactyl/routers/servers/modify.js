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
 * modify.js - Server resources modifier.
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
const themer = modules.theme;
const wh = modules.wh;
module.exports.load = async function (app, db) {
  app.get("/api/pterodactyl/servers/modify", core.auth, async (req, res) => {
    const pterodactyl = await db.get('pterodactyl', 'settings')
    const domain = pterodactyl.domain;
    const key = pterodactyl.key;
    const eggs = await db.get('core', 'eggs') ?? []

    if (!req.query.id) return res.send("Missing server id.");

    let si = req.session.pterodactyl.relationships.servers.data.filter(name => name.attributes.id == req.query.id);
    if (!si) {
      res.json({success: false, message: "Server doesn't exist!"})
    }
    let server = si[0].attributes

    let attemptegg;

    for (let [name, value] of Object.entries(eggs)) {
      if (value.info.egg == server.egg) {
        attemptegg = eggs[name];
      };
    };
    let egginfo = attemptegg ? attemptegg : null;
    if (!egginfo) return res.redirect(`${redirectlink}?id=${req.query.id}&err=MISSINGEGG`);
    let resources = await db.get('resources', req.session.userinfo.hcid)
    let ram = parseInt(req.query.ram);
    let disk = parseInt(req.query.disk);
    let cpu = parseInt(req.query.cpu);
    let allocations = parseInt(req.query.allocations);
    let databases = parseInt(req.query.databases);
    let backups = parseInt(req.query.backups);
    
    if (isNaN(ram) || ram < 128) {
        return res.json({ success: false, message: "too little RAM" });
    }
    if (isNaN(disk) || disk < 256) {
        return res.json({ success: false, message: "too little disk" });
    }
    if (isNaN(cpu) || cpu < 25) {
        return res.json({ success: false, message: "too little CPU" });
    }    

    if (ram > server.limits.memory + resources.ram) { return res.json({ success: false, message: "Insufficient memory." }) }
    if (disk > server.limits.disk + resources.disk) { return res.json({ success: false, message: "Insufficient disk." }) }
    if (cpu > server.limits.cpu + resources.cpu) { return res.json({ success: false, message: "Insufficient cpu." }) }
    if (allocations > server.feature_limits.allocations + resources.allocations) { return res.json({ success: false, message: "Insufficient allocations." }) }
    if (backups > server.feature_limits.backups + resources.backups) { return res.json({ success: false, message: "Insufficient backups." }) }
    if (databases > server.feature_limits.databases + resources.databases) { return res.json({ success: false, message: "Insufficient databases." }) }

    if (ram < server.limits.memory) {
      resources.ram = server.limits.memory - ram + resources.ram;
    }
    if (disk < server.limits.disk) {
      resources.disk = server.limits.disk - disk + resources.disk;
    }
    if (cpu < server.limits.cpu) {
      resources.cpu = server.limits.cpu - cpu + resources.cpu;
    }
    if (allocations < server.feature_limits.allocations) {
      resources.allocations = server.feature_limits.allocations - allocations + resources.allocations;
    }
    if (backups < server.feature_limits.backups) {
      resources.backups = server.feature_limits.backups - backups + resources.backups;
    }
    if (databases < server.feature_limits.databases) {
      resources.databases = server.feature_limits.databases - databases + resources.databases;
    }

    if (ram > server.limits.memory) {
      resources.ram = resources.ram - ram;
    }
    if (disk > server.limits.disk) {
      resources.disk = resources.disk - disk;
    }
    if (cpu > server.limits.cpu) {
      resources.cpu = resources.cpu - cpu;
    }
    if (allocations > server.feature_limits.allocations) {
      resources.allocations = resources.allocations - allocations;
    }
    if (backups > server.feature_limits.backups) {
      resources.backups = resources.backups -backups;
    }
    if (databases > server.feature_limits.databases) {
      resources.databases = resources.databases - databases;
    }
    await db.set('resources', req.session.userinfo.hcid, resources)

    let limits = {
      memory: ram,
      disk: disk,
      cpu: cpu,
      swap: -1,
      io: 500,
    };
    let feature_limits = {
      backups: backups,
      databases: databases,
      allocations: allocations
    };

    let serverinfo = await fetch(pterodactyl.domain + "/api/application/servers/" + req.query.id + "/build", {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${pterodactyl.app}`,
      },
      body: JSON.stringify({
        allocation: server.allocation,
        limits: limits,
        feature_limits: feature_limits,
      })
    })
    if (await serverinfo.statusText !== "OK") return res.redirect(`../integrations`);
    let text = JSON.parse(await serverinfo.text());
    wh(`modify server`, `${req.session.userinfo.username} modified the server called \`${text.attributes.name}\` to have the following specs:\n\`\`\`Memory: ${ram} MB\nCPU: ${cpu}%\nDisk: ${disk}\nDatabases: ${databases}\nBackups: ${backups}\nAllocations: ${allocations}\`\`\``)
    dl.c(`${req.session.userinfo.username} modified the server called ${text.attributes.name} to have the following specs:\nMemory: ${ram} MB\nCPU: ${cpu}%\nDisk: ${disk}\nDatabases: ${databases}\nBackups: ${backups}\nAllocations: ${allocations}`)
    let i = req.session.pterodactyl.relationships.servers.data.findIndex(name => name.attributes.id == req.query.id)
    server.limits = limits
    server.feature_limits = feature_limits
    req.session.pterodactyl.relationships.servers.data[i].attributes = server
    await db.set('pterodactyl', req.session.userinfo.hcid, req.session.pterodactyl)
    res.redirect("/dashboard?err=MODIFYSERVER");
  });
}