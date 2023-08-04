const settings = require("../../settings.json");
const fetch = require("node-fetch");
const fs = require("fs");
const indexjs = require("../../index.js");
const adminjs = require("./admin.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function(app, db) {
    app.get("/setresources", async (req, res) => {
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
        let failredirect = theme.settings.redirect.failedsetresources
          ? theme.settings.redirect.failedsetresources
          : "/";
        if (!req.query.email) return res.redirect(`${failredirect}?err=MISSINGID`);
        if (!(await db.get("users-" + req.query.email)))
          return res.redirect(`${failredirect}?err=INVALIDID`);
        let successredirect = theme.settings.redirect.setresources || "/";
        if (req.query.ram || req.query.disk || req.query.cpu || req.query.servers || req.query.allocations || req.query.backups || req.query.databases) {
            let ramstring = req.query.ram;
            let diskstring = req.query.disk;
            let cpustring = req.query.cpu;
            let serversstring = req.query.servers;
            let backupsstring = req.query.backups;
            let allocationsstring = req.query.allocations;
            let databasesstring = req.query.databases;
            let id = req.query.email;
            let currentextra = await db.get("extra-" + req.query.email);
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
                    return res.redirect(`${failredirect}?err=RAMSIZE`);
                }
                extra.ram = ram;
            }
            if (diskstring) {
                let disk = parseFloat(diskstring);
                if (disk < 0 || disk > 999999999999999) {
                    return res.redirect(`${failredirect}?err=DISKSIZE`);
                }
                extra.disk = disk;
            }
            if (cpustring) {
                let cpu = parseFloat(cpustring);
                if (cpu < 0 || cpu > 999999999999999) {
                    return res.redirect(`${failredirect}?err=CPUSIZE`);
                }
                extra.cpu = cpu;
            }
            if (serversstring) {
                let servers = parseFloat(serversstring);
                if (servers < 0 || servers > 999999999999999) {
                    return res.redirect(`${failredirect}?err=SERVERSIZE`);
                }
                extra.servers = servers;
            }
            if (databasesstring) {
                let databases = parseFloat(databasesstring);
                if (databases < 0 || databases > 999999999999999) {
                    return res.redirect(`${failredirect}?err=DBSIZE`);
                }
                extra.databases = databases;
            }
            if (backupsstring) {
                let backups = parseFloat(backupsstring);
                if (backups < 0 || backups > 999999999999999) {
                    return res.redirect(`${failredirect}?err=BACKUPSIZE`);
                }
                extra.backups = backups;
            }
            if (allocationsstring) {
                let allocations = parseFloat(allocationsstring);
                if (allocations < 0 || allocations > 999999999999999) {
                    return res.redirect(`${failredirect}?err=ALLOCATIONSIZE`);
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
                await db.delete("extra-" + req.query.email);
            } else {
                await db.set("extra-" + req.query.email, extra);
            }
            adminjs.suspend(req.query.email);
            log(
                `set resources`,
                `${req.session.userinfo.username} set the resources of the user with the Email \`${id}\` to:\`\`\`servers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}\`\`\``
            );
            debuglog.admin(`${req.session.userinfo.username} set the resources of the user with the Email ${id} to: \nservers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}`)
            return res.redirect(successredirect + "?err=none");
        } else {
            res.redirect(`${failredirect}?err=MISSINGVARIABLES`);
        }
    });

    app.get("/addresources", async (req, res) => {
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
        let failredirect = theme.settings.redirect.failedsetresources
          ? theme.settings.redirect.failedsetresources
          : "/";
        if (!req.query.email) return res.redirect(`${failredirect}?err=MISSINGID`);
        if (!(await db.get("users-" + req.query.email)))
          return res.redirect(`${failredirect}?err=INVALIDID`);
        let successredirect = theme.settings.redirect.setresources
          ? theme.settings.redirect.setresources
          : "/";
        if (
          req.query.ram ||
          req.query.disk ||
          req.query.cpu ||
          req.query.servers ||
          req.query.backups ||
          req.query.allocations ||
          req.query.databases
        ) {
          let ramstring = req.query.ram;
          let diskstring = req.query.disk;
          let cpustring = req.query.cpu;
          let serversstring = req.query.servers;
          let backupsstring = req.query.backups;
          let allocationsstring = req.query.allocations;
          let databasesstring = req.query.databases;
          let currentextra = await db.get("extra-" + req.query.email);
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
              return res.redirect(`${failredirect}?err=RAMSIZE`);
            }
            extra.ram = extra.ram + ram;
          }
          if (diskstring) {
            let disk = parseFloat(diskstring);
            if (disk < 0 || disk > 999999999999999) {
              return res.redirect(`${failredirect}?err=DISKSIZE`);
            }
            extra.disk = extra.disk + disk;
          }
          if (cpustring) {
            let cpu = parseFloat(cpustring);
            if (cpu < 0 || cpu > 999999999999999) {
              return res.redirect(`${failredirect}?err=CPUSIZE`);
            }
            extra.cpu = extra.cpu + cpu;
          }
          if (serversstring) {
            let servers = parseFloat(serversstring);
            if (servers < 0 || servers > 999999999999999) {
              return res.redirect(`${failredirect}?err=SERVERSIZE`);
            }
            extra.servers = extra.servers + servers;
          }
          if (databasesstring) {
            let databases = parseFloat(databasesstring);
            if (databases < 0 || databases > 999999999999999) {
              return res.redirect(`${failredirect}?err=DBSIZE`);
            }
            extra.databases = extra.databases + databases;
          }
          if (backupsstring) {
            let backups = parseFloat(backupsstring);
            if (backups < 0 || backups > 999999999999999) {
              return res.redirect(`${failredirect}?err=BACKUPSIZE`);
            }
            extra.backups = extra.backups + backups;
          }
          if (allocationsstring) {
            let allocations = parseFloat(allocationsstring);
            if (allocations < 0 || allocations > 999999999999999) {
              return res.redirect(`${failredirect}?err=ALLOCATIONSIZE`);
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
            await db.delete("extra-" + req.query.email);
          } else {
            await db.set("extra-" + req.query.email, extra);
          }
          await adminjs.suspend(req.query.email);
          log(
            `add resources`,
            `${req.session.userinfo.username} added the resources of the user with the Email \`${req.query.email}\` by:\`\`\`servers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}\`\`\``
          );
          debuglog.admin(
            `${req.session.userinfo.username} added the resources of the user with the Email ${req.query.email} by:\nservers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}`
          );
          return res.redirect(successredirect + "?err=none");
        } else {
          res.redirect(`${failredirect}?err=MISSINGVARIABLES`);
        }
    });
      
    app.get("/removeresources", async (req, res) => {
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
        let failredirect = theme.settings.redirect.failedremoveresources
          ? theme.settings.redirect.failedremoveresources
          : "/";
        if (!req.query.email) return res.redirect(`${failredirect}?err=MISSINGID`);
        if (!(await db.get("users-" + req.query.email)))
          return res.redirect(`${failredirect}?err=INVALIDID`);
        let successredirect = theme.settings.redirect.removeresources
          ? theme.settings.redirect.removeresources
          : "/";
        if (
          req.query.ram ||
          req.query.disk ||
          req.query.cpu ||
          req.query.servers ||
          req.query.backups ||
          req.query.allocations ||
          req.query.databases
        ) {
          let ramstring = req.query.ram;
          let diskstring = req.query.disk;
          let cpustring = req.query.cpu;
          let serversstring = req.query.servers;
          let backupsstring = req.query.backups;
          let allocationsstring = req.query.allocations;
          let databasesstring = req.query.databases;
          let currentextra = await db.get("extra-" + req.query.email);
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
              return res.redirect(`${failredirect}?err=INVALIDRAM`);
            }
            extra.ram = extra.ram - ram;
          }
          if (diskstring) {
            let disk = parseFloat(diskstring);
            if (disk < 0 || disk > extra.disk) {
              return res.redirect(`${failredirect}?err=INVALIDDISK`);
            }
            extra.disk = extra.disk - disk;
          }
          if (cpustring) {
            let cpu = parseFloat(cpustring);
            if (cpu < 0 || cpu > extra.cpu) {
              return res.redirect(`${failredirect}?err=INVALIDCPU`);
            }
            extra.cpu = extra.cpu - cpu;
          }
          if (serversstring) {
            let servers = parseFloat(serversstring);
            if (servers < 0 || servers > extra.servers) {
              return res.redirect(`${failredirect}?err=INVALIDSERVERS`);
            }
            extra.servers = extra.servers - servers;
          }
          if (databasesstring) {
            let databases = parseFloat(databasesstring);
            if (databases < 0 || databases > extra.databases) {
              return res.redirect(`${failredirect}?err=INVALIDDATABASES`);
            }
            extra.databases = extra.databases - databases;
          }
          if (backupsstring) {
            let backups = parseFloat(backupsstring);
            if (backups < 0 || backups > extra.backups) {
              return res.redirect(`${failredirect}?err=INVALIDBACKUPS`);
            }
            extra.backups = extra.backups - backups;
          }
          if (allocationsstring) {
            let allocations = parseFloat(allocationsstring);
            if (allocations < 0 || allocations > extra.allocations) {
              return res.redirect(`${failredirect}?err=INVALIDALLOCATIONS`);
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
            await db.delete("extra-" + req.query.email);
          } else {
            await db.set("extra-" + req.query.email, extra);
          }
          await adminjs.suspend(req.query.email);
          log(
            `remove resources`,
            `${req.session.userinfo.username} removed the resources of the user with the Email \`${req.query.email}\` by:\`\`\`servers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}\`\`\``
          );
          debuglog.admin(
            `${req.session.userinfo.username} removed the resources of the user with the Email ${req.query.email} by:\nservers: ${serversstring}\nCPU: ${cpustring}%\nMemory: ${ramstring} MB\nDisk: ${diskstring} MB\nBackups: ${backupsstring}\nDatabases: ${databasesstring}\nAllocations: ${allocationsstring}`
          );
          return res.redirect(failredirect + "?err=none");
        } else {
          res.redirect(`${failredirect}?err=MISSINGVARIABLES`);
        }
    });
      
    async function four0four(req, res, theme) {
        ejs.renderFile(
            `./views/${theme.name}/${theme.settings.notfound}`,
            await eval(indexjs.renderdataeval),
            null,
            function(err, str) {
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