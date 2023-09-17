const fetch = require('node-fetch');
const log = require('../handlers/webhook')

module.exports.load = async function (app, db) {
  app.get("/create", async (req, res) => {
    try {
      if (!req.session.pterodactyl) return res.json({ "success": false, "message": "unauthenticated", "redirect": "/login" });
      if (settings.allow.server.create == true) {
        const cacheaccount = await fetch(
          settings.pterodactyl.domain + "/api/application/users/" + req.session.pterodactyl.id + "?include=servers",
          {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
          }
        );

        if (cacheaccount.statusText === "Not Found") {
          return res.json({ "success": false, "message": alerts.INVALIDUSER });
        }

        const cacheaccountinfo = await cacheaccount.json();
        if (!cacheaccount) {
          return res.json({ "success": false, "message": alerts.PANELERROR });
        }
        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (req.query.name && req.query.description && req.query.ram && req.query.disk && req.query.cpu && req.query.backups && req.query.allocations && req.query.databases && req.query.egg && req.query.location) {
          try {
            decodeURIComponent(req.query.name)
          } catch (err) {
            return res.json({ "success": false, "message": alerts.INVALIDSERVERNAME });
          }
          let packagename = await db.get("package-" + req.session.userinfo.hcid);
          let package = settings.packages.list[packagename ? packagename : settings.packages.default];
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
            return res.json({ "success": false, "message": alerts.NOSLOTS });
          }
          let name = decodeURIComponent(req.query.name);
          if (name.length < 1) {
            return res.json({ "success": false, "message": alerts.LITTLESERVERNAME });
          }
          if (name.length > 191) {
            return res.json({ "success": false, "message": alerts.TOOMANYCHARACTERS });
          }
          let location = req.query.location;

          if (Object.entries(settings.api.client.locations).filter(vname => vname[0] == location).length !== 1) {
            return res.json({ "success": false, "message": alerts.INVALIDLOCATION });
          }

          let requiredpackage = Object.entries(settings.api.client.locations).filter(vname => vname[0] == location)[0][1].package;
          if (requiredpackage) if (!requiredpackage.includes(packagename ? packagename : settings.packages.default)) {
            return res.json({ "success": false, "message": alerts.PREMIUMLOCATION });
          }

          let egg = req.query.egg;

          let egginfo = eggconfig[egg];
          if (!eggconfig[egg]) {
            return res.json({ "success": false, "message": alerts.INVALIDEGG });
          }
          let ram = parseFloat(req.query.ram);
          let disk = parseFloat(req.query.disk);
          let cpu = parseFloat(req.query.cpu);
          let databases = parseFloat(req.query.databases);
          let allocations = parseFloat(req.query.allocations);
          let backups = parseFloat(req.query.backups);
          if (!isNaN(ram) && !isNaN(disk) && !isNaN(cpu) && !isNaN(databases) && !isNaN(backups) && !isNaN(allocations)) {
            if (ram2 + ram > package.ram + extra.ram) {
              return res.json({ "success": false, "message": `Exceeded ram!, ${package.ram + extra.ram - ram2}` });
            }
            if (disk2 + disk > package.disk + extra.disk) {
              return res.json({ "success": false, "message": `Exceeded disk!, ${package.disk + extra.disk - disk2}` });
            }
            if (cpu2 + cpu > package.cpu + extra.cpu) {
              return res.json({ "success": false, "message": `Exceeded cpu!, ${package.cpu + extra.cpu - cpu2}` });
            }
            if (databases2 + databases > package.databases + extra.databases) {
              return res.json({ "success": false, "message": `Exceeded databases!, ${package.databases + extra.databases - databases2}` });
            }
            if (backups2 + backups > package.backups + extra.backups) {
              return res.json({ "success": false, "message": `Exceeded backups!, ${package.backups + extra.backups - backups2}` });
            }
            if (allocations2 + allocations > package.allocations + extra.allocations) {
              return res.json({ "success": false, "message": `Exceeded allocations!, ${package.allocations + extra.allocations - allocations2}` });
            }
            if (egginfo.minimum.ram) if (ram < egginfo.minimum.ram) {
              return res.json({ "success": false, "message": `You should deploy the server with minimum of ${egginfo.minimum.ram}mb ram` });
            }
            if (egginfo.minimum.disk) if (disk < egginfo.minimum.disk) {
              return res.json({ "success": false, "message": `You should deploy the server with minimum of ${egginfo.minimum.disk}mb disk` });
            }
            if (egginfo.minimum.cpu) if (cpu < egginfo.minimum.cpu) {
              return res.json({ "success": false, "message": `You should deploy the server with minimum of ${egginfo.minimum.cpu}% cpu` });
            }
            if (egginfo.maximum) {
              if (egginfo.maximum.ram) if (ram > egginfo.maximum.ram) {
                return res.json({ "success": false, "message": `You can deploy the server with maximum of ${egginfo.maximum.ram}mb ram` });
              }
              if (egginfo.maximum.disk) if (disk > egginfo.maximum.disk) {
                return res.json({ "success": false, "message": `You can deploy the server with maximum of ${egginfo.maximum.disk}mb disk` });
              }
              if (egginfo.maximum.cpu) if (cpu > egginfo.maximum.cpu) {
                return res.json({ "success": false, "message": `You can deploy the server with maximum of ${egginfo.maximum.ram}% cpu` });
              }
            }
            const createdServer = await db.get(`createdserver-${req.session.userinfo.hcid}`)
            const createdStatus = createdServer ?? false
            const coins = await db.get("coins-" + req.session.userinfo.hcid) ?? 0;
            const cost = settings.allow.server.cost
            if (createdStatus && coins < cost) {
              return res.json({ "success": false, "message": alerts.TOOLITTLECOINS });
            }
            let serverinfo = await fetch(
              settings.pterodactyl.domain + "/api/application/servers",
              {
                method: "post",
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}`, "Accept": "application/json" },
                body: JSON.stringify(
                  {
                    name: name,
                    user: req.session.pterodactyl.id,
                    egg: egginfo.info.egg,
                    docker_image: egginfo.info.docker_image,
                    startup: egginfo.info.startup,
                    environment: egginfo.info.environment,
                    limits: {
                      memory: ram,
                      cpu: cpu,
                      disk: disk,
                      swap: -1,
                      io: 500
                    },
                    feature_limits: {
                      databases: databases,
                      backups: backups,
                      allocations: allocations
                    },
                    deploy: {
                      locations: [location],
                      dedicated_ip: false,
                      port_range: []
                    }
                  }
                )
              }
            );

            const serverInfoText = await serverinfo.json();

            if (serverinfo.statusText !== "Created") {
              console.log(serverInfoText);
              return res.json({ "success": false, "message": serverInfoText.errors[0].detail });
            }
            let newpterodactylinfo = req.session.pterodactyl;
            newpterodactylinfo.relationships.servers.data.push(serverInfoText);
            req.session.pterodactyl = newpterodactylinfo;
            await db.set(`lastrenewal-${serverInfoText.attributes.id}`, Date.now())
            await db.set(`createdserver-${req.session.userinfo.hcid}`, true)
            if (createdStatus) {
              await db.set("coins-" + req.session.userinfo.hcid, coins - cost)
            }
            log('created server', `${req.session.userinfo.username} deployed a new server named \`${name}\`\`\`\``)
            debuglog.client(`${req.session.userinfo.username} deployed a new server named ${name}.`)
            return res.json({ "success": true, "message": alerts.CREATEDSERVER });
          } else {
            return res.json({ "success": false, "message": alerts.NOTANUMBER });
          }
        } else {
          return res.json({ "success": false, "message": alerts.MISSINGVARIABLE });
        }
      } else {
        return res.json({ "success": false, "message": alerts.SERVERCREATIONDISABLED });
      }
    } catch (error) {
      console.log(error)
      return res.json({ "success": false, "message": "An error occured while creating the server.", "error": error });
    }
  });
}
