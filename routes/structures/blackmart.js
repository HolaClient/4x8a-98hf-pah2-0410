const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const settings = require("../../settings.json");
const fs = require("fs");
const ejs = require("ejs");
const log = require('../handlers/webhook.js')

module.exports.load = async function(app, db) {
    app.get("/sellram", async (req, res) => {
        let newsettings = await enabledCheck(req, res);
        if (newsettings) {
          let amount = req.query.amount;
      
          if (!amount) return res.send("missing amount");
      
          amount = parseFloat(amount);
      
          if (isNaN(amount)) return res.send("amount is not a number");
      
          if (amount < 0) return res.send("amount cannot be negative");
      
          if (amount === 0) return res.send("amount must be greater than zero");
      
          let theme = indexjs.get(req);
          let failedcallback = "/blackmart";
      
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
      
          let ramcap = await db.get("ram-" + req.session.userinfo.email);
          ramcap = ramcap ? ramcap : 0;
      
          let extra = await db.get("extra-" + req.session.userinfo.email);
          extra = extra ? extra : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            databases: 0,
            backups: 0,
            allocations: 0
          };
      
          let totalAvailableRam = ramcap + extra.ram;
          if (totalAvailableRam < amount) return res.redirect(failedcallback + "?err=INSUFFICIENT");
      
          let per = newsettings.api.client.coins.store.ram.per * amount;
          let cost = newsettings.api.client.coins.store.ram.cost * amount;
      
          let newusercoins = usercoins + cost;
          let newram = ramcap - amount;
          if (newusercoins == 0) {
            await db.delete("coins-" + req.session.userinfo.email);
            await db.set("ram-" + req.session.userinfo.email, newram);
          } else {
            await db.set("coins-" + req.session.userinfo.email, newusercoins);
            await db.set("ram-" + req.session.userinfo.email, newram);
          }
      
          extra.ram = extra.ram - per;
      
          if (extra.ram == 0 && extra.disk == 0 && extra.cpu == 0 && extra.servers == 0 && extra.databases == 0 && extra.backups == 0 && extra.allocations == 0) {
            await db.delete("extra-" + req.session.userinfo.email);
          } else {
            await db.set("extra-" + req.session.userinfo.email, extra);
          }
      
          adminjs.suspend(req.session.userinfo.email);
      
          log(`sold ram`, `${req.session.userinfo.username} sold ${per} MB ram to the store for ${cost} Credits.`);
          console.log(`${req.session.userinfo.username} sold ${per} MB ram to the store for ${cost} Credits.`);
      
          res.redirect("/blackmart?err=none");
        }
      });
      

      app.get("/selldisk", async (req, res) => {
        let newsettings = await enabledCheck(req, res);
        if (newsettings) {
          let amount = req.query.amount;
      
          if (!amount) return res.send("missing amount");
      
          amount = parseFloat(amount);
      
          if (isNaN(amount)) return res.send("amount is not a number");
      
          if (amount < 0) return res.send("amount cannot be negative");
      
          if (amount === 0) return res.send("amount must be greater than zero");
      
          let theme = indexjs.get(req);
          let failedcallback = "/blackmart";
      
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
      
          let diskcap = await db.get("disk-" + req.session.userinfo.email);
          diskcap = diskcap ? diskcap : 0;
      
          if (diskcap < amount) return res.redirect(failedcallback + "?err=INSUFFICIENT");
      
          let per = newsettings.api.client.coins.store.disk.per * amount;
          let cost = newsettings.api.client.coins.store.disk.cost * amount;
      
          let refundRate = newsettings.api.client.coins.blackmart.refund_rate;
          let earnings = cost * (refundRate / 100);
      
          let newusercoins = usercoins + earnings;
          let newdisk = diskcap - amount;
      
          if (newusercoins == 0) {
            await db.delete("coins-" + req.session.userinfo.email);
            await db.set("disk-" + req.session.userinfo.email, newdisk);
          } else {
            await db.set("coins-" + req.session.userinfo.email, newusercoins);
            await db.set("disk-" + req.session.userinfo.email, newdisk);
          }
      
          let extra = await db.get("extra-" + req.session.userinfo.email);
          extra = extra ? extra : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            databases: 0,
            backups: 0,
            allocations: 0
          };
      
          extra.disk = extra.disk - per;
      
          if (extra.ram == 0 && extra.disk == 0 && extra.cpu == 0 && extra.servers == 0 && extra.databases == 0 && extra.backups == 0 && extra.allocations == 0) {
            await db.delete("extra-" + req.session.userinfo.email);
          } else {
            await db.set("extra-" + req.session.userinfo.email, extra);
          }
      
          adminjs.suspend(req.session.userinfo.email);
      
          log(`sold disk`, `${req.session.userinfo.username} sold ${per} MB disk to the store for ${earnings} Credits.`);
          console.log(`${req.session.userinfo.username} sold ${per} MB disk to the store for ${earnings} Credits.`);
      
          res.redirect("/blackmart?err=none");
        }
      });
      

      app.get("/sellcpu", async (req, res) => {
        let newsettings = await enabledCheck(req, res);
        if (newsettings) {
          let amount = req.query.amount;
      
          if (!amount) return res.send("missing amount");
      
          amount = parseFloat(amount);
      
          if (isNaN(amount)) return res.send("amount is not a number");
      
          if (amount < 0) return res.send("amount cannot be negative");
      
          if (amount === 0) return res.send("amount must be greater than zero");
      
          let theme = indexjs.get(req);
          let failedcallback = "/blackmart";
      
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
      
          let cpucap = await db.get("cpu-" + req.session.userinfo.email);
          cpucap = cpucap ? cpucap : 0;
      
          if (cpucap < amount) return res.redirect(failedcallback + "?err=INSUFFICIENT");
      
          let per = newsettings.api.client.coins.store.cpu.per * amount;
          let cost = newsettings.api.client.coins.store.cpu.cost * amount;
      
          let refundRate = newsettings.api.client.coins.blackmart.refund_rate;
          let earnings = cost * (refundRate / 100);
      
          let newusercoins = usercoins + earnings;
          let newcpu = cpucap - amount;
      
          if (newusercoins == 0) {
            await db.delete("coins-" + req.session.userinfo.email);
            await db.set("cpu-" + req.session.userinfo.email, newcpu);
          } else {
            await db.set("coins-" + req.session.userinfo.email, newusercoins);
            await db.set("cpu-" + req.session.userinfo.email, newcpu);
          }
      
          let extra = await db.get("extra-" + req.session.userinfo.email);
          extra = extra ? extra : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            databases: 0,
            backups: 0,
            allocations: 0
          };
      
          extra.cpu = extra.cpu - per;
      
          if (extra.ram == 0 && extra.disk == 0 && extra.cpu == 0 && extra.servers == 0 && extra.databases == 0 && extra.backups == 0 && extra.allocations == 0) {
            await db.delete("extra-" + req.session.userinfo.email);
          } else {
            await db.set("extra-" + req.session.userinfo.email, extra);
          }
      
          adminjs.suspend(req.session.userinfo.email);
      
          log(`sold cpu`, `${req.session.userinfo.username} sold ${per}% cpu to the store for ${earnings} Credits.`);
          console.log(`${req.session.userinfo.username} sold ${per}% cpu to the store for ${earnings} Credits.`);
      
          res.redirect("/blackmart?err=none");
        }
      });
      

      app.get("/sellservers", async (req, res) => {
        let newsettings = await enabledCheck(req, res);
        if (newsettings) {
          let amount = req.query.amount;
      
          if (!amount) return res.send("missing amount");
      
          amount = parseFloat(amount);
      
          if (isNaN(amount)) return res.send("amount is not a number");
      
          if (amount < 0) return res.send("amount cannot be negative");
      
          if (amount === 0) return res.send("amount must be greater than zero");
      
          let theme = indexjs.get(req);
          let failedcallback = "/blackmart";
      
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
      
          let serverscap = await db.get("servers-" + req.session.userinfo.email);
          serverscap = serverscap ? serverscap : 0;
      
          if (serverscap < amount) return res.redirect(failedcallback + "?err=INSUFFICIENT");
      
          let per = newsettings.api.client.coins.store.servers.per * amount;
          let cost = newsettings.api.client.coins.store.servers.cost * amount;
      
          let refundRate = newsettings.api.client.coins.blackmart.refund_rate;
          let earnings = cost * (refundRate / 100);
      
          let newusercoins = usercoins + earnings;
          let newservers = serverscap - amount;
      
          if (newservers < 0) return res.redirect(failedcallback + "?err=INVALIDAMOUNT");
      
          if (newusercoins === 0) {
            await db.delete("coins-" + req.session.userinfo.email);
            await db.set("servers-" + req.session.userinfo.email, newservers);
          } else {
            await db.set("coins-" + req.session.userinfo.email, newusercoins);
            await db.set("servers-" + req.session.userinfo.email, newservers);
          }
      
          let extra = await db.get("extra-" + req.session.userinfo.email);
          extra = extra ? extra : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            databases: 0,
            backups: 0,
            allocations: 0
          };
      
          extra.servers = extra.servers - per;
      
          if (extra.ram === 0 && extra.disk === 0 && extra.cpu === 0 && extra.servers === 0 && extra.databases === 0 && extra.backups === 0 && extra.allocations === 0) {
            await db.delete("extra-" + req.session.userinfo.email);
          } else {
            await db.set("extra-" + req.session.userinfo.email, extra);
          }
      
          adminjs.suspend(req.session.userinfo.email);
      
          log(`sold servers`, `${req.session.userinfo.username} sold ${per} Slots to the store for ${earnings} Credits.`);
          console.log(`${req.session.userinfo.username} sold ${per} Slots to the store for ${earnings} Credits.`);
      
          res.redirect("/blackmart?err=none");
        }
      });
      

      app.get("/selldatabases", async (req, res) => {
        let newsettings = await enabledCheck(req, res);
        if (newsettings) {
          let amount = req.query.amount;
      
          if (!amount) return res.send("missing amount");
      
          amount = parseFloat(amount);
      
          if (isNaN(amount)) return res.send("amount is not a number");
      
          if (amount < 0) return res.send("amount cannot be negative");
      
          if (amount === 0) return res.send("amount must be greater than zero");
      
          let theme = indexjs.get(req);
          let failedcallback = "/blackmart";
      
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
      
          let databasescap = await db.get("databases-" + req.session.userinfo.email);
          databasescap = databasescap ? databasescap : 0;
      
          if (databasescap < amount) return res.redirect(failedcallback + "?err=INSUFFICIENT");
      
          let per = newsettings.api.client.coins.store.databases.per * amount;
          let cost = newsettings.api.client.coins.store.databases.cost * amount;
      
          let refundRate = newsettings.api.client.coins.blackmart.refund_rate;
          let earnings = cost * (refundRate / 100);
      
          let newusercoins = usercoins + earnings;
          let newdatabases = databasescap - amount;
      
          if (newdatabases < 0) return res.redirect(failedcallback + "?err=INVALIDAMOUNT");
      
          if (newusercoins === 0) {
            await db.delete("coins-" + req.session.userinfo.email);
            await db.set("databases-" + req.session.userinfo.email, newdatabases);
          } else {
            await db.set("coins-" + req.session.userinfo.email, newusercoins);
            await db.set("databases-" + req.session.userinfo.email, newdatabases);
          }
      
          let extra = await db.get("extra-" + req.session.userinfo.email);
          extra = extra ? extra : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            databases: 0,
            backups: 0,
            allocations: 0
          };
      
          extra.databases = extra.databases - per;
      
          if (extra.ram === 0 && extra.disk === 0 && extra.cpu === 0 && extra.servers === 0 && extra.databases === 0 && extra.backups === 0 && extra.allocations === 0) {
            await db.delete("extra-" + req.session.userinfo.email);
          } else {
            await db.set("extra-" + req.session.userinfo.email, extra);
          }
      
          adminjs.suspend(req.session.userinfo.email);
      
          log(`sold databases`, `${req.session.userinfo.username} sold ${per} databases to the store for ${earnings} Credits.`);
          console.log(`${req.session.userinfo.username} sold ${per} databases to the store for ${earnings} Credits.`);
      
          res.redirect("/blackmart?err=none");
        }
      });
      
      app.get("/sellbackups", async (req, res) => {
        let newsettings = await enabledCheck(req, res);
        if (newsettings) {
          let amount = req.query.amount;
      
          if (!amount) return res.send("missing amount");
      
          amount = parseFloat(amount);
      
          if (isNaN(amount)) return res.send("amount is not a number");
      
          if (amount < 0) return res.send("amount cannot be negative");
      
          if (amount === 0) return res.send("amount must be greater than zero");
      
          let theme = indexjs.get(req);
          let failedcallback = "/blackmart";
      
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
      
          let backupscap = await db.get("backups-" + req.session.userinfo.email);
          backupscap = backupscap ? backupscap : 0;
      
          if (backupscap < amount) return res.redirect(failedcallback + "?err=INSUFFICIENT");
      
          let per = newsettings.api.client.coins.store.backups.per * amount;
          let cost = newsettings.api.client.coins.store.backups.cost * amount;
      
          let refundRate = newsettings.api.client.coins.blackmart.refund_rate;
          let earnings = cost * (refundRate / 100);
      
          let newusercoins = usercoins + earnings;
          let newbackups = backupscap - amount;
      
          if (newbackups < 0) return res.redirect(failedcallback + "?err=INVALIDAMOUNT");
      
          if (newusercoins === 0) {
            await db.delete("coins-" + req.session.userinfo.email);
            await db.set("backups-" + req.session.userinfo.email, newbackups);
          } else {
            await db.set("coins-" + req.session.userinfo.email, newusercoins);
            await db.set("backups-" + req.session.userinfo.email, newbackups);
          }
      
          let extra = await db.get("extra-" + req.session.userinfo.email);
          extra = extra ? extra : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            databases: 0,
            backups: 0,
            allocations: 0
          };
      
          extra.backups = extra.backups - per;
      
          if (extra.ram === 0 && extra.disk === 0 && extra.cpu === 0 && extra.servers === 0 && extra.databases === 0 && extra.backups === 0 && extra.allocations === 0) {
            await db.delete("extra-" + req.session.userinfo.email);
          } else {
            await db.set("extra-" + req.session.userinfo.email, extra);
          }
      
          adminjs.suspend(req.session.userinfo.email);
      
          log(`sold backups`, `${req.session.userinfo.username} sold ${per} backups to the store for ${earnings} Credits.`);
          console.log(`${req.session.userinfo.username} sold ${per} backups to the store for ${earnings} Credits.`);
      
          res.redirect("/blackmart?err=none");
        }
      });
      

      app.get("/sellallocations", async (req, res) => {
        let newsettings = await enabledCheck(req, res);
        if (newsettings) {
          let amount = req.query.amount;
      
          if (!amount) return res.send("missing amount");
      
          amount = parseFloat(amount);
      
          if (isNaN(amount)) return res.send("amount is not a number");
      
          if (amount < 0) return res.send("amount cannot be negative");
      
          if (amount === 0) return res.send("amount must be greater than zero");
      
          let theme = indexjs.get(req);
          let failedcallback = "/blackmart";
      
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
      
          let allocationscap = await db.get("allocations-" + req.session.userinfo.email);
          allocationscap = allocationscap ? allocationscap : 0;
      
          if (allocationscap < amount) return res.redirect(failedcallback + "?err=INSUFFICIENT");
      
          let per = newsettings.api.client.coins.store.allocations.per * amount;
          let cost = newsettings.api.client.coins.store.allocations.cost * amount;
      
          let refundRate = newsettings.api.client.coins.blackmart.refund_rate;
          let earnings = cost * (refundRate / 100);
      
          let newusercoins = usercoins + earnings;
          let newallocations = allocationscap - amount;
      
          if (newallocations < 0) return res.redirect(failedcallback + "?err=INVALIDAMOUNT");
      
          if (newusercoins === 0) {
            await db.delete("coins-" + req.session.userinfo.email);
            await db.set("allocations-" + req.session.userinfo.email, newallocations);
          } else {
            await db.set("coins-" + req.session.userinfo.email, newusercoins);
            await db.set("allocations-" + req.session.userinfo.email, newallocations);
          }
      
          let extra = await db.get("extra-" + req.session.userinfo.email);
          extra = extra ? extra : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            databases: 0,
            backups: 0,
            allocations: 0
          };
      
          extra.allocations = extra.allocations - per;
      
          if (extra.ram === 0 && extra.disk === 0 && extra.cpu === 0 && extra.servers === 0 && extra.databases === 0 && extra.backups === 0 && extra.allocations === 0) {
            await db.delete("extra-" + req.session.userinfo.email);
          } else {
            await db.set("extra-" + req.session.userinfo.email, extra);
          }
      
          adminjs.suspend(req.session.userinfo.email);
      
          log(`sold allocations`, `${req.session.userinfo.username} sold ${per} allocations to the store for ${earnings} Credits.`);
          console.log(`${req.session.userinfo.username} sold ${per} allocations to the store for ${earnings} Credits.`);
      
          res.redirect("/blackmart?err=none");
        }
      });
      

  async function enabledCheck(req, res) {
    let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
    if (newsettings.api.client.coins.store.enabled == true) return newsettings;
    let theme = indexjs.get(req);
    ejs.renderFile(
      `./views/${theme.name}/${theme.settings.notfound}`, 
      await eval(indexjs.renderdataeval),
      null,
    function (err, str) {
      delete req.session.newaccount;
      if (err) {
        console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
        console.log(err);
        return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
      };
      res.status(200);
      res.send(str);
    });
    return null;
  }
}
