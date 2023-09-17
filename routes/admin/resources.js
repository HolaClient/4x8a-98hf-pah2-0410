const fetch = require("node-fetch");
const fs = require("fs");
const indexjs = require("../../index.js");
const adminjs = require("./admin.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function (app, db) {
  app.post("/admin/resources/set", async (req, res) => {
    let theme = indexjs.get(req);
    if (!req.session.pterodactyl) return four0four(req, res, theme);
    let cacheaccount = await fetch(
      settings.pterodactyl.domain +
      "/api/application/users/" +
      req.session.pterodactyl.id +
      "?include=servers",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${settings.pterodactyl.key}`,
        },
      }
    );
    if ((await cacheaccount.statusText) == "Not Found")
      return four0four(req, res, theme);
    let cacheaccountinfo = JSON.parse(await cacheaccount.text());
    req.session.pterodactyl = cacheaccountinfo.attributes;
    if (cacheaccountinfo.attributes.root_admin !== true)
      return four0four(req, res, theme);
    if (!req.body.user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
    if (req.body.ram || req.body.disk || req.body.cpu || req.body.servers || req.body.allocations || req.body.backups || req.body.databases) {
      let ramstring = req.body.ram;
      let diskstring = req.body.disk;
      let cpustring = req.body.cpu;
      let serversstring = req.body.servers
      let backupsstring = req.body.backups;
      let allocationsstring = req.body.allocations;
      let databasesstring = req.body.databases;
      let id = await db.get("userinfo-" + req.body.user);
      let currentextra = await db.get("extra-" + req.body.user);
      let extra;
      if (typeof currentextra == "object") {
        extra = currentextra;
      } else {
        extra = {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0,
          databases: 0,
          allocations: 0,
          backups: 0,
        };
      }
      if (ramstring) {
        let ram = parseFloat(ramstring);
        if (ram < 0 || ram > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.ram = ram;
      }
      if (diskstring) {
        let disk = parseFloat(diskstring);
        if (disk < 0 || disk > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.disk = disk;
      }
      if (cpustring) {
        let cpu = parseFloat(cpustring);
        if (cpu < 0 || cpu > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.cpu = cpu;
      }
      if (serversstring) {
        let servers = parseFloat(serversstring);
        if (servers < 0 || servers > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.servers = servers;
      }
      if (databasesstring) {
        let databases = parseFloat(databasesstring);
        if (databases < 0 || databases > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.databases = databases;
      }
      if (backupsstring) {
        let backups = parseFloat(backupsstring);
        if (backups < 0 || backups > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.backups = backups;
      }
      if (allocationsstring) {
        let allocations = parseFloat(allocationsstring);
        if (allocations < 0 || allocations > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.allocations = allocations;
      }
      if (
        extra.ram == 0 &&
        extra.disk == 0 &&
        extra.cpu == 0 &&
        extra.servers == 0 &&
        extra.allocations == 0 &&
        extra.backups == 0 &&
        extra.databases == 0
      ) {
        await db.delete("extra-" + req.body.user);
      } else {
        await db.set("extra-" + req.body.user, extra);
      }
      adminjs.suspend(req.body.user);
      log(
        `set resources`,
        `${req.session.userinfo.username} set the resources of the user \`${id.username}\` to:\`\`\`servers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}\`\`\``
      );
      debuglog.admin(`${req.session.userinfo.username} set the resources of the user ${id.username} to: \nservers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}`)
      return res.json({ "success": true, "message": "Success!" });
    } else {
      return res.json({ "success": false, "message": alerts.MISSINGRESOURCES });
    }
  });

  app.post("/admin/resources/add", async (req, res) => {
    let theme = indexjs.get(req);
    if (!req.session.pterodactyl) return four0four(req, res, theme);
    let cacheaccount = await fetch(
      settings.pterodactyl.domain +
      "/api/application/users/" +
      req.session.pterodactyl.id +
      "?include=servers",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${settings.pterodactyl.key}`,
        },
      }
    );
    if ((await cacheaccount.statusText) == "Not Found")
      return four0four(req, res, theme);
    let cacheaccountinfo = JSON.parse(await cacheaccount.text());
    req.session.pterodactyl = cacheaccountinfo.attributes;
    if (cacheaccountinfo.attributes.root_admin !== true)
      return four0four(req, res, theme);
    if (!req.body.user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
    if (req.body.ram || req.body.disk || req.body.cpu || req.body.servers || req.body.allocations || req.body.backups || req.body.databases) {
      let ramstring = req.body.ram;
      let diskstring = req.body.disk;
      let cpustring = req.body.cpu;
      let serversstring = req.body.servers ?? 0
      let backupsstring = req.body.backups;
      let allocationsstring = req.body.allocations;
      let databasesstring = req.body.databases;
      let id = await db.get("userinfo-" + req.body.user)
      let currentextra = await db.get("extra-" + req.body.user);
      let extra;
      if (typeof currentextra == "object") {
        extra = currentextra;
      } else {
        extra = {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0,
          databases: 0,
          allocations: 0,
          backups: 0,
        };
      }
      if (ramstring) {
        let ram = parseFloat(ramstring);
        if (ram < 0 || ram > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.ram = extra.ram + ram;
      }
      if (diskstring) {
        let disk = parseFloat(diskstring);
        if (disk < 0 || disk > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.disk = extra.disk + disk;
      }
      if (cpustring) {
        let cpu = parseFloat(cpustring);
        if (cpu < 0 || cpu > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.cpu = extra.cpu + cpu;
      }
      if (serversstring) {
        let servers = parseFloat(serversstring);
        if (servers < 0 || servers > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.servers = extra.servers + servers;
      }
      if (databasesstring) {
        let databases = parseFloat(databasesstring);
        if (databases < 0 || databases > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.databases = extra.databases + databases;
      }
      if (backupsstring) {
        let backups = parseFloat(backupsstring);
        if (backups < 0 || backups > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.backups = extra.backups + backups;
      }
      if (allocationsstring) {
        let allocations = parseFloat(allocationsstring);
        if (allocations < 0 || allocations > 999999999999999) {
          return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
        }
        extra.allocations = extra.allocations + allocations;
      }
      if (
        extra.ram == 0 &&
        extra.disk == 0 &&
        extra.cpu == 0 &&
        extra.servers == 0 &&
        extra.allocations == 0 &&
        extra.backups == 0 &&
        extra.databases == 0
      ) {
        await db.delete("extra-" + req.body.user);
      } else {
        await db.set("extra-" + req.body.user, extra);
      }
      await adminjs.suspend(req.body.user);
      log(
        `add resources`,
        `${req.session.userinfo.username} added the resources of the user \`${id.username}\` by:\`\`\`servers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}\`\`\``
      );
      debuglog.admin(
        `${req.session.userinfo.username} added the resources of the user ${id.username} by:\nservers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}`
      );
      return res.json({ "success": true, "message": "Success!" });
    } else {
      return res.json({ "success": false, "message": alerts.MISSINGRESOURCES });
    }
  });

  app.post("/admin/resources/remove", async (req, res) => {
    let theme = indexjs.get(req);
    if (!req.session.pterodactyl) return four0four(req, res, theme);
    let cacheaccount = await fetch(
      settings.pterodactyl.domain +
      "/api/application/users/" +
      req.session.pterodactyl.id +
      "?include=servers",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${settings.pterodactyl.key}`,
        },
      }
    );
    if ((await cacheaccount.statusText) == "Not Found")
      return four0four(req, res, theme);
    let cacheaccountinfo = JSON.parse(await cacheaccount.text());
    req.session.pterodactyl = cacheaccountinfo.attributes;
    if (cacheaccountinfo.attributes.root_admin !== true)
      return four0four(req, res, theme);
    if (!req.body.user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
    if (req.body.ram || req.body.disk || req.body.cpu || req.body.servers || req.body.allocations || req.body.backups || req.body.databases) {
      let ramstring = req.body.ram;
      let diskstring = req.body.disk;
      let cpustring = req.body.cpu;
      let serversstring = req.body.servers ?? 0
      let backupsstring = req.body.backups;
      let allocationsstring = req.body.allocations;
      let databasesstring = req.body.databases;
      let id = await db.get("userinfo-" + req.body.user)
      let currentextra = await db.get("extra-" + req.body.user);
      let extra;
      if (typeof currentextra == "object") {
        extra = currentextra;
      } else {
        extra = {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0,
          databases: 0,
          allocations: 0,
          backups: 0,
        };
      }
      if (ramstring) {
        let ram = parseFloat(ramstring);
        if (ram < 0 || ram > extra.ram) {
          return res.json({ "success": false, "message": alerts.NOTENOUGHRES });
        }
        extra.ram = extra.ram - ram;
      }
      if (diskstring) {
        let disk = parseFloat(diskstring);
        if (disk < 0 || disk > extra.disk) {
          return res.json({ "success": false, "message": alerts.NOTENOUGHRES });
        }
        extra.disk = extra.disk - disk;
      }
      if (cpustring) {
        let cpu = parseFloat(cpustring);
        if (cpu < 0 || cpu > extra.cpu) {
          return res.json({ "success": false, "message": alerts.NOTENOUGHRES });
        }
        extra.cpu = extra.cpu - cpu;
      }
      if (serversstring) {
        let servers = parseFloat(serversstring);
        if (servers < 0 || servers > extra.servers) {
          return res.json({ "success": false, "message": alerts.NOTENOUGHRES });
        }
        extra.servers = extra.servers - servers;
      }
      if (databasesstring) {
        let databases = parseFloat(databasesstring);
        if (databases < 0 || databases > extra.databases) {
          return res.json({ "success": false, "message": alerts.NOTENOUGHRES });
        }
        extra.databases = extra.databases - databases;
      }
      if (backupsstring) {
        let backups = parseFloat(backupsstring);
        if (backups < 0 || backups > extra.backups) {
          return res.json({ "success": false, "message": alerts.NOTENOUGHRES });
        }
        extra.backups = extra.backups - backups;
      }
      if (allocationsstring) {
        let allocations = parseFloat(allocationsstring);
        if (allocations < 0 || allocations > extra.allocations) {
          return res.json({ "success": false, "message": alerts.NOTENOUGHRES });
        }
        extra.allocations = extra.allocations - allocations;
      }
      if (
        extra.ram == 0 &&
        extra.disk == 0 &&
        extra.cpu == 0 &&
        extra.servers == 0 &&
        extra.allocations == 0 &&
        extra.backups == 0 &&
        extra.databases == 0
      ) {
        await db.delete("extra-" + req.body.user);
      } else {
        await db.set("extra-" + req.body.user, extra);
      }
      await adminjs.suspend(req.body.user);
      log(
        `remove resources`,
        `${req.session.userinfo.username} removed the resources of the user with the Email \`${id.username}\` by:\`\`\`servers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}\`\`\``
      );
      debuglog.admin(
        `${req.session.userinfo.username} removed the resources of the user with the Email ${id.username} by:\nservers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}`
      );
      return res.json({ "success": true, "message": "Success!" });
    } else {
      return res.json({ "success": false, "message": alerts.MISSINGRESOURCES });
    }
  });

  async function four0four(req, res, theme) {
    ejs.renderFile(
      `./views/${theme.name}/${theme.settings.notfound}`,
      await eval(indexjs.renderdataeval),
      null,
      function (err, str) {
        delete req.session.newaccount;
        if (err) {
          console.log(
            `[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`
          );
          console.log(err);
          return res.send(
            "An error has occured while attempting to load this page. Please contact an administrator to fix this."
          );
        }
        res.status(403);
        res.send(str);
      }
    );
  }
}