const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
    app.get("/api/userinfo", async (req, res) => {
        const apiKey = req.headers.authorization;
    
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.client.api.code) {
          return res.status(401).json({ status: "error", message: "Invalid API key" });
        }
        if (!req.query.email) {
          return res.status(400).json({ status: "error", message: "Missing email" });
        }
        if (!await db.get("users-" + req.query.email)) {
          return res.status(400).json({ status: "error", message: "Invalid email" });
        }
      
        let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
        let packagename = await db.get("package-" + req.query.email);
        let package = newsettings.api.client.packages.list[packagename ? packagename : newsettings.api.client.packages.default];
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
        let pterodactylid = await db.get("users-" + req.query.email);
        try {
          let userinforeq = await fetch(
            newsettings.pterodactyl.domain + "/api/application/users/" + pterodactylid + "?include=servers",
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${newsettings.pterodactyl.key}` }
            }
          );
          const userinfo = await userinforeq.json();  
          res.json({
            status: "success",
            package: package,
            extra: await db.get("extra-" + req.query.email) ? await db.get("extra-" + req.query.email) : {
              ram: 0,
              disk: 0,
              cpu: 0,
              servers: 0,
              databases: 0,
              backups: 0,
              allocations: 0
            },
            userinfo: userinfo,
            coins: newsettings.api.client.coins.enabled == true ? (await db.get("coins-" + req.query.email) ? await db.get("coins-" + req.query.email) : 0) : null
          });
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched userinfo of ${userinfo.attributes.username}`, req.method)
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched userinfo of ${userinfo.attributes.username}`, req.method)
        } catch (error) {
          console.error("[WEBSITE] An error occurred during the fetch request:", error);
          return res.status(500).json({ status: "error", message: "An error occurred during the fetch request" });
        }
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