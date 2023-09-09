const fetch = require('node-fetch');
const log = require('../handlers/webhook')

module.exports.load = async function (app, db) {
    const queue = new Queue()
    app.post("/create", async (req, res) => {
        if (!req.session.pterodactyl) return res.redirect("/auth");
        let newsettings = settings;
        if (newsettings.allow.server.create == true) {
          queue.addJob(async (cb) => {
            const cacheaccount = await getPteroUser(req.session.userinfo.id, db)
              .catch(() => {
                cb()
                return res.send("An error has occured while attempting to update your account information and server list.");
              })
            if (!cacheaccount) {
              cb()
              return res.send('HolaClient failed to find an account on the configured panel, try relogging')
            }
            req.session.pterodactyl = cacheaccount.attributes;
            if (req.body.name && req.body.description && req.body.ram && req.body.disk && req.body.cpu && req.body.backups && req.body.allocations && req.body.databases && req.body.egg && req.body.location) {
              try {
                decodeURIComponent(req.body.name)
              } catch (err) {
                cb()
                return res.json({ "success": false, "message": alerts.INVALIDSERVERNAME });
              }
              let packagename = await db.get("package-" + req.session.userinfo.hcid);
              let package = newsettings.packages.list[packagename ? packagename : newsettings.packages.default];
    
              let extra =
                await db.get("extra-" + req.session.userinfo.hcid) ||
                {
                  ram: 0,
                  disk: 0,
                  cpu: 0,
                  servers: 0,
                  databases: 0,
                  allocations: 0,
                  backups: 0
                };
    
              let ram2 = 0;
              let disk2 = 0;
              let cpu2 = 0;
              let databases2 = 0;
              let allocations2 = 0;
              let backups2 = 0;
              let servers2 = req.session.pterodactyl.relationships.servers.data.length;
              for (let i = 0, len = req.session.pterodactyl.relationships.servers.data.length; i < len; i++) {
                ram2 = ram2 + req.session.pterodactyl.relationships.servers.data[i].attributes.limits.memory;
                disk2 = disk2 + req.session.pterodactyl.relationships.servers.data[i].attributes.limits.disk;
                cpu2 = cpu2 + req.session.pterodactyl.relationships.servers.data[i].attributes.limits.cpu;
                backups2 = backups2 + req.session.pterodactyl.relationships.servers.data[i].attributes.feature_limits.cpu;
                databases2 = databases2 + req.session.pterodactyl.relationships.servers.data[i].attributes.feature_limits.cpu;
                allocations2 = allocations2 + req.session.pterodactyl.relationships.servers.data[i].attributes.feature_limits.cpu;
              };
    
              if (servers2 >= package.servers + extra.servers) {
                cb()
                return res.json({ "success": false, "message": alerts.NOSLOTS });
              }
              let name = decodeURIComponent(req.body.name);
              if (name.length < 1) { 
                cb()
                return res.json({ "success": false, "message": alerts.LITTLESERVERNAME });
              }
              if (name.length > 191) {
                cb()
                return res.json({ "success": false, "message": alerts.TOOMANYCHARACTERS });
              }
              let location = req.body.location;
    
              if (Object.entries(newsettings.api.client.locations).filter(vname => vname[0] == location).length !== 1) {
                cb()
                return res.json({ "success": false, "message": alerts.INVALIDLOCATION });
              }
    
              let requiredpackage = Object.entries(newsettings.api.client.locations).filter(vname => vname[0] == location)[0][1].package;
              if (requiredpackage) if (!requiredpackage.includes(packagename ? packagename : newsettings.packages.default)) {
                cb()
                return res.json({ "success": false, "message": alerts.PREMIUMLOCATION });
              }
    
              let egg = req.body.egg;
    
              let egginfo = eggconfig[egg];
              if (!eggconfig[egg]) {
                cb()
                return res.json({ "success": false, "message": alerts.INVALIDEGG });
              }
              let ram = parseFloat(req.body.ram);
              let disk = parseFloat(req.body.disk);
              let cpu = parseFloat(req.body.cpu);
              let databases = parseFloat(req.body.databases);
              let allocations = parseFloat(req.body.allocations);
              let backups = parseFloat(req.body.backups);
              if (!isNaN(ram) && !isNaN(disk) && !isNaN(cpu) && !isNaN(databases) && !isNaN(backups) && !isNaN(allocations)) {
                if (ram2 + ram > package.ram + extra.ram) {
                  cb()
                  return res.json({ "success": false, "message": `Exceeded ram!, ${package.ram + extra.ram - ram2}` });
                }
                if (disk2 + disk > package.disk + extra.disk) {
                  cb()
                  return res.json({ "success": false, "message": `Exceeded disk!, ${package.disk + extra.disk - disk2}` });
                }
                if (cpu2 + cpu > package.cpu + extra.cpu) {
                  cb()
                  return res.json({ "success": false, "message": `Exceeded cpu!, ${package.cpu + extra.cpu - cpu2}` });
                }
                if (databases2 + databases > package.databases + extra.databases) {
                    cb()
                    return res.json({ "success": false, "message": `Exceeded databases!, ${package.databases + extra.databases - databases2}` });
                  }
                  if (backups2 + backups > package.backups + extra.backups) {
                    cb()
                    return res.json({ "success": false, "message": `Exceeded backups!, ${package.backups + extra.backups - backups2}` });
                  }
                  if (allocations2 + allocations > package.allocations + extra.allocations) {
                    cb()
                    return res.json({ "success": false, "message": `Exceeded allocations!, ${package.allocations + extra.allocations - allocations2}` });
                  }
                if (egginfo.minimum.ram) if (ram < egginfo.minimum.ram) {
                  cb()
                  return res.json({ "success": false, "message": `You should deploy the server with minimum of ${egginfo.minimum.ram}mb ram` });
                }
                if (egginfo.minimum.disk) if (disk < egginfo.minimum.disk) {
                  cb()
                  return res.json({ "success": false, "message": `You should deploy the server with minimum of ${egginfo.minimum.disk}mb disk` });
                }
                if (egginfo.minimum.cpu) if (cpu < egginfo.minimum.cpu) {
                  cb()
                  return res.json({ "success": false, "message": `You should deploy the server with minimum of ${egginfo.minimum.cpu}% cpu` });
                }
                if (egginfo.maximum) {
                  if (egginfo.maximum.ram) if (ram > egginfo.maximum.ram) {
                    cb()
                    return res.json({ "success": false, "message": `You can deploy the server with maximum of ${egginfo.maximum.ram}mb ram` });
                  }
                  if (egginfo.maximum.disk) if (disk > egginfo.maximum.disk) {
                    cb()
                    return res.json({ "success": false, "message": `You can deploy the server with maximum of ${egginfo.maximum.disk}mb disk` });
                  }
                  if (egginfo.maximum.cpu) if (cpu > egginfo.maximum.cpu) {
                    cb()
                    return res.json({ "success": false, "message": `You can deploy the server with maximum of ${egginfo.maximum.ram}% cpu` });
                  }
                }
    
                let specs = egginfo.info;
                specs["user"] = (await db.get("users-" + req.session.userinfo.id));
                if (!specs["limits"]) specs["limits"] = {
                  swap: -1,
                  io: 500,
                  backups: 0
                };
                if (!specs["feature_limits"]) specs["feature_limits"] = {
                    allocations: 0,
                    databases: 0,
                    backups: 0
                  };
                specs.name = name;
                specs.limits.swap = -1;
                specs.limits.memory = ram;
                specs.limits.disk = disk;
                specs.limits.cpu = cpu;
                specs.feature_limits.allocations = allocations;
                specs.feature_limits.backups = backups;
                specs.feature_limits.databases = databases;
                if (!specs["deploy"]) specs.deploy = {
                  locations: [],
                  dedicated_ip: false,
                  port_range: []
                }
                specs.deploy.locations = [location];
                
                // Make sure user has enough coins
                const createdServer = await db.get(`createdserver-${req.session.userinfo.hcid}`)
                const createdStatus = createdServer ?? false
                const coins = await db.get("coins-" + req.session.userinfo.hcid) ?? 0;
                const cost = settings.allow.server.cost
                if (createdStatus && coins < cost) {
                  cb()
                  return res.json({ "success": false, "message": alerts.TOOLITTLECOINS });
                }
    
                let serverinfo = await fetch(
                    settings.pterodactyl.domain + "/api/application/servers",
                    {
                      method: "post",
                      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}`, "Accept": "application/json" },
                      body: JSON.stringify(await specs)
                    }
                  );
                  
                  const serverInfoText = await serverinfo.json(); // Store the response text
                  
                  if (serverinfo.statusText !== "Created") {
                    console.log(serverInfoText);
                    cb();
                    return res.json({ "success": false, "message": serverInfoText.errors[0].detail });
                  }
                  
                  let newpterodactylinfo = req.session.pterodactyl;
                  newpterodactylinfo.relationships.servers.data.push(serverInfoText);
                  req.session.pterodactyl = newpterodactylinfo;
                                 
                
                // Bill user if they have created a server before
                if (createdStatus) {
                  await db.set("coins-" + req.session.userinfo.hcid, coins - cost)
                }
    
                await db.set(`lastrenewal-${serverinfotext.attributes.id}`, Date.now())
                await db.set(`createdserver-${req.session.userinfo.hcid}`, true)
    
                cb()
                log('created server', `${req.session.userinfo.username} deployed a new server named \`${name}\` with the following specs:\n\`\`\`Memory: ${ram} MB\nCPU: ${cpu}%\nDisk: ${disk}\`\`\``)
                debuglog.client(`${req.session.userinfo.username} deployed a new server named ${name}.`)
                return res.json({ "success": true, "message": alerts.CREATEDSERVER });
              } else {
                cb()
                return res.json({ "success": false, "message": alerts.NOTANUMBER });
              }
            } else {
              cb()
              return res.json({ "success": false, "message": alerts.MISSINGVARIABLE });
            }
          })
        } else {
            return res.json({ "success": false, "message": alerts.SERVERCREATIONDISABLED });
        }
      });
}
class Queue {
    constructor() {
        this.queue = []
        this.processing = false;
    }
  
    addJob(job) {
        this.queue.push(job)
        this.bumpQueue()
    }
  
    bumpQueue() {
        if (this.processing) return
        const job = this.queue.shift()
        if (!job) return
        const cb = () => {
            this.processing = false
            this.bumpQueue()
        }
        this.processing = true
        job(cb)
    }
  }
  async function getPteroUser(userid, db) {
    return new Promise(async (resolve, reject) => {
        try {
            let cacheaccount = await fetch(
                settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + userid)) + "?include=servers",
                {
                    method: "get",
                    headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
                }
            );
  
            if (cacheaccount.statusText === "Not Found") {
                reject('Pterodactyl account not found');
            } else {
                let cacheaccountinfo = await cacheaccount.json();
                resolve(cacheaccountinfo);
            }
        } catch (error) {
            reject(error);
        }
    });
  }