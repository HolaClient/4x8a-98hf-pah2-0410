const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
    app.get("/api/userinfo", async (req, res) => {
        const apiKey = req.headers.authorization;
    
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
          return res.status(401).json({ status: 'error', message: 'Invalid API key' });
        }
        if (!req.query.user) {
          return res.status(400).json({ status: "error", message: "Missing email" });
        }
        if (!await db.get("users-" + req.query.user)) {
          return res.status(400).json({ status: "error", message: "Invalid email" });
        }
      
        let settings = JSON.parse(fs.readFileSync("./settings.json").toString());
        let packagename = await db.get("package-" + req.query.user);
        let package = settings.api.client.packages.list[packagename ? packagename : settings.api.client.packages.default];
        if (!package) {
          package = {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            backups: 0,
            allocations: 0,
            databases: 0,
            name: packagename,
          };
        }
        let pterodactylid = await db.get("users-" + req.query.user);
        try {
          let userinforeq = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + pterodactylid + "?include=servers",
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
          );
          const userinfo = await userinforeq.json();  
          res.json({
            status: "success",
            package: package,
            extra: await db.get("extra-" + req.query.user) ? await db.get("extra-" + req.query.user) : {
              ram: 0,
              disk: 0,
              cpu: 0,
              servers: 0,
              databases: 0,
              backups: 0,
              allocations: 0
            },
            userinfo: userinfo,
            coins: settings.coins.enabled == true ? (await db.get("coins-" + req.query.user) ? await db.get("coins-" + req.query.user) : 0) : null
          });
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched userinfo of ${userinfo.attributes.username}`, req.method)
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched userinfo of ${userinfo.attributes.username}`, req.method)
        } catch (error) {
          console.error("[WEBSITE] An error occurred during the fetch request:", error);
          return res.status(500).json({ status: "error", message: "An error occurred during the fetch request" });
        }
      });
};