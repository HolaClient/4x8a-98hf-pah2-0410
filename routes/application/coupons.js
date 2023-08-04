const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
    app.post("/api/createcoupon", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.client.api.code) {
          return res.status(401).json({ status: "error", message: "Invalid API key" });
        }
      
        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
    
        let code = typeof req.body.code == "string" ? req.body.code.slice(0, 200) : Math.random().toString(36).substring(2, 15);
    
        if (!code.match(/^[a-z0-9]+$/i)) return res.json({ status: "illegal characters" });
    
        let coins = typeof req.body.coins == "number" ? req.body.coins : 0;
        let ram = typeof req.body.ram == "number" ? req.body.ram : 0;
        let disk = typeof req.body.disk == "number" ? req.body.disk : 0;
        let cpu = typeof req.body.cpu == "number" ? req.body.cpu : 0;
        let servers = typeof req.body.servers == "number" ? req.body.servers : 0;
        let backups = typeof req.body.backups == "number" ? req.body.backups : 0;
        let allocations = typeof req.body.allocations == "number" ? req.body.allocations : 0;
        let databases = typeof req.body.databases == "number" ? req.body.databases : 0;
    
        if (coins < 0) return res.json({ status: "coins is less than 0" });
        if (ram < 0) return res.json({ status: "ram is less than 0" });
        if (disk < 0) return res.json({ status: "disk is less than 0" });
        if (cpu < 0) return res.json({ status: "cpu is less than 0" });
        if (servers < 0) return res.json({ status: "servers is less than 0" });
        if (backups < 0) return res.json({ status: "backups is less than 0" });
        if (allocations < 0) return res.json({ status: "allocations is less than 0" });
        if (databases < 0) return res.json({ status: "databases is less than 0" });
    
        if (!coins && !ram && !disk && !cpu && !servers && !backups && !allocations && !databases) return res.json({ status: "cannot create empty coupon" });
    
        await db.set("coupon-" + code, {
          coins: coins,
          ram: ram,
          disk: disk,
          cpu: cpu,
          servers: servers,
          backups: backups,
          allocations: allocations,
          databases: databases
        });
    
        api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Created a coupon with code ${code}`, req.method);
        api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Created a coupon with code ${code}`, req.method);
        return res.json({ status: "success", code: code });
      });
      app.post("/api/revokecoupon", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.client.api.code) {
          return res.status(401).json({ status: "error", message: "Invalid API key" });
        }
      
        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
    
        let code = req.body.code;
    
        if (!code) return res.json({ status: "missing code" });
    
        if (!code.match(/^[a-z0-9]+$/i)) return res.json({ status: "invalid code" });
    
        if (!(await db.get("coupon-" + code))) return res.json({ status: "invalid code" });
    
        await db.delete("coupon-" + code);
    
        api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Revoked a coupon with code ${code}`, req.method);
        api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Revoked a coupon with code ${code}`, req.method);
        res.json({ status: "success" })
      });
        
  async function check(req, res) {
    let settings = JSON.parse(fs.readFileSync("./settings.json").toString());
    if (settings.api.client.api.enabled == true) {
      let auth = req.headers['authorization'];
      if (auth) {
        if (auth == "Bearer " + settings.api.client.api.code) {
          return settings;
        };
      };
    }
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
};