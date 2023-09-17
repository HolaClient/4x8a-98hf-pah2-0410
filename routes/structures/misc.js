const fetch = require('node-fetch');
const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const log = require('../handlers/webhook');

module.exports.load = async function (app, db) {
  app.get("/updateinfo", async (req, res) => {
    try {
      if (!req.session.pterodactyl) {
        return res.redirect("/auth");
      }
      let cacheaccount = await fetch(
        settings.pterodactyl.domain + "/api/application/users/" + req.session.pterodactyl.id + "?include=servers",
        {
          method: "get",
          headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
        }
      );
      let cacheaccountinfo = await cacheaccount.json();

      req.session.pterodactyl = cacheaccountinfo.attributes;
      req.session.userinfo = await db.get("userinfo-" + req.session.userinfo.hcid);
      const uinfo = await db.get("onboarding-" + req.session.userinfo.hcid);
      if (uinfo) {
        req.session.user = uinfo;
      }
      if (req.query.redirect && typeof req.query.redirect === "string") {
        return res.redirect("/" + req.query.redirect);
      }
      res.redirect("/dashboard");
    } catch (error) {
      return res.redirect("/logout");
    }
  });

  app.get("/modify", async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login");

    let theme = indexjs.get(req);

    if (settings.allow.server.modify == true) {
      if (!req.query.id) return res.send("Missing server id.");
      
      const cacheaccount = await fetch(
        settings.pterodactyl.domain + "/api/application/users/" + req.session.pterodactyl.id + "?include=servers",
        {
          method: "get",
          headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
        }
      );
      let cacheaccountinfo = await cacheaccount.json();
      req.session.pterodactyl = cacheaccountinfo.attributes;

      let redirectlink = theme.settings.redirect.failedmodifyserver ? theme.settings.redirect.failedmodifyserver : "/"; // fail redirect link

      let checkexist = req.session.pterodactyl.relationships.servers.data.filter(name => name.attributes.id == req.query.id);
      if (checkexist.length !== 1) return res.send("Invalid server id.");
      let ram = req.query.ram ? (isNaN(parseFloat(req.query.ram)) ? undefined : parseFloat(req.query.ram)) : undefined;
      let disk = req.query.disk ? (isNaN(parseFloat(req.query.disk)) ? undefined : parseFloat(req.query.disk)) : undefined;
      let cpu = req.query.cpu ? (isNaN(parseFloat(req.query.cpu)) ? undefined : parseFloat(req.query.cpu)) : undefined;
      let allocations = req.query.allocations ? (isNaN(parseFloat(req.query.allocations)) ? undefined : parseFloat(req.query.allocations)) : undefined;
      let backups = req.query.backups ? (isNaN(parseFloat(req.query.backups)) ? undefined : parseFloat(req.query.backups)) : undefined;
      let databases = req.query.databases ? (isNaN(parseFloat(req.query.databases)) ? undefined : parseFloat(req.query.databases)) : undefined;

      if (ram || disk || cpu || allocations || backups || databases) {

        let packagename = await db.get("package-" + req.session.userinfo.hcid);
        let package = settings.packages.list[packagename ? packagename : settings.packages.default];

        let pterorelationshipsserverdata = req.session.pterodactyl.relationships.servers.data.filter(name => name.attributes.id.toString() !== req.query.id);

        let ram2 = 0;
        let disk2 = 0;
        let cpu2 = 0;
        let allocations2 = 0;
        let backups2 = 0;
        let databases2 = 0;
        for (let i = 0, len = pterorelationshipsserverdata.length; i < len; i++) {
          ram2 = ram2 + pterorelationshipsserverdata[i].attributes.limits.memory;
          disk2 = disk2 + pterorelationshipsserverdata[i].attributes.limits.disk;
          cpu2 = cpu2 + pterorelationshipsserverdata[i].attributes.limits.cpu;
          databases2 = pterorelationshipsserverdata[i].attributes.feature_limits.databases;
          allocations2 = pterorelationshipsserverdata[i].attributes.feature_limits.allocations;
          backups2 = pterorelationshipsserverdata[i].attributes.feature_limits.backups;
        }
        let attemptegg = null;

        for (let [name, value] of Object.entries(eggconfig)) {
          if (value.info.egg == checkexist[0].attributes.egg) {
            attemptegg = eggconfig[name];
          };
        };
        let egginfo = attemptegg ? attemptegg : null;

        if (!egginfo) return res.redirect(`${redirectlink}?id=${req.query.id}&err=MISSINGEGG`);

        let extra =
          await db.get("extra-" + req.session.userinfo.hcid) ?
            await db.get("extra-" + req.session.userinfo.hcid) :
            {
              ram: 0,
              disk: 0,
              cpu: 0,
              servers: 0,
              databases: 0,
              backups: 0,
              allocations: 0
            };

        if (ram2 + ram > package.ram + extra.ram) return res.redirect(`${redirectlink}?id=${req.query.id}&err=EXCEEDRAM&num=${package.ram + extra.ram - ram2}`);
        if (disk2 + disk > package.disk + extra.disk) return res.redirect(`${redirectlink}?id=${req.query.id}&err=EXCEEDDISK&num=${package.disk + extra.disk - disk2}`);
        if (cpu2 + cpu > package.cpu + extra.cpu) return res.redirect(`${redirectlink}?id=${req.query.id}&err=EXCEEDCPU&num=${package.cpu + extra.cpu - cpu2}`);
        if (backups2 + backups > package.backups + extra.backups) return res.redirect(`${redirectlink}?id=${req.query.id}&err=EXCEEDBACKUPS&num=${package.backups + extra.backups - backups2}`);
        if (allocations2 + allocations > package.allocations + extra.allocations) return res.redirect(`${redirectlink}?id=${req.query.id}&err=EXCEEDALLOCATIONS&num=${package.allocations + extra.allocations - allocations2}`);
        if (databases2 + databases > package.databases + extra.databases) return res.redirect(`${redirectlink}?id=${req.query.id}&err=EXCEEDDATABASES&num=${package.databases + extra.databases - databases2}`);
        if (egginfo.minimum.ram) if (ram < egginfo.minimum.ram) return res.redirect(`${redirectlink}?id=${req.query.id}&err=TOOLITTLERAM&num=${egginfo.minimum.ram}`);
        if (egginfo.minimum.disk) if (disk < egginfo.minimum.disk) return res.redirect(`${redirectlink}?id=${req.query.id}&err=TOOLITTLEDISK&num=${egginfo.minimum.disk}`);
        if (egginfo.minimum.cpu) if (cpu < egginfo.minimum.cpu) return res.redirect(`${redirectlink}?id=${req.query.id}&err=TOOLITTLECPU&num=${egginfo.minimum.cpu}`);
        if (egginfo.maximum) {
          if (egginfo.maximum.ram) if (ram > egginfo.maximum.ram) return res.redirect(`${redirectlink}?id=${req.query.id}&err=TOOMUCHRAM&num=${egginfo.maximum.ram}`);
          if (egginfo.maximum.disk) if (disk > egginfo.maximum.disk) return res.redirect(`${redirectlink}?id=${req.query.id}&err=TOOMUCHDISK&num=${egginfo.maximum.disk}`);
          if (egginfo.maximum.cpu) if (cpu > egginfo.maximum.cpu) return res.redirect(`${redirectlink}?id=${req.query.id}&err=TOOMUCHCPU&num=${egginfo.maximum.cpu}`);
        };

        let limits = {
          memory: ram ? ram : checkexist[0].attributes.limits.memory,
          disk: disk ? disk : checkexist[0].attributes.limits.disk,
          cpu: cpu ? cpu : checkexist[0].attributes.limits.cpu,
          swap: egginfo ? checkexist[0].attributes.limits.swap : 0,
          io: egginfo ? checkexist[0].attributes.limits.io : 500
        };
        let feature_limits = {
          backups: backups ? backups : checkexist[0].attributes.feature_limits.backups,
          databases: databases ? databases : checkexist[0].attributes.feature_limits.databases,
          allocations: allocations ? allocations : checkexist[0].attributes.feature_limits.allocations
        };

        let serverinfo = await fetch(settings.pterodactyl.domain + "/api/application/servers/" + req.query.id + "/build", {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${settings.pterodactyl.key}`,
          },
          body: JSON.stringify({
            allocation: checkexist[0].attributes.allocation,
            limits: limits,
            feature_limits: feature_limits,
          })
        })
        if (await serverinfo.statusText !== "OK") return res.redirect(`${redirectlink}?id=${req.query.id}&err=ERRORONMODIFY`);
        let text = JSON.parse(await serverinfo.text());
        log(`modify server`, `${req.session.userinfo.username} modified the server called \`${text.attributes.name}\` to have the following specs:\n\`\`\`Memory: ${ram} MB\nCPU: ${cpu}%\nDisk: ${disk}\nDatabases: ${databases}\nBackups: ${backups}\nAllocations: ${allocations}\`\`\``)
        debuglog.client(`${req.session.userinfo.username} modified the server called ${text.attributes.name} to have the following specs:\nMemory: ${ram} MB\nCPU: ${cpu}%\nDisk: ${disk}\nDatabases: ${databases}\nBackups: ${backups}\nAllocations: ${allocations}`)
        pterorelationshipsserverdata.push(text);
        req.session.pterodactyl.relationships.servers.data = pterorelationshipsserverdata;
        res.redirect("/dashboard?err=MODIFYSERVER");
      } else {
        res.redirect(`${redirectlink}?id=${req.query.id}&err=MISSINGVARIABLE`);
      }
    } else {
      res.redirect(theme.settings.redirect.modifyserverdisabled ? theme.settings.redirect.modifyserverdisabled : "/");
    }
  });
};