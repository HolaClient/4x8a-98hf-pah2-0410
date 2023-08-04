const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
    app.get('/api/package', async (req, res) => {
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
        try {
          const user = req.query.email;
          const packagename = await db.get("package-" + user);
          const packageList = settings.api.client.packages.list;
          const defaultPackage = settings.api.client.packages.default;
          const packageName = packagename ? packageList[packagename].name : packageList[defaultPackage].name;
      
          res.json({ status: "success", package: packageName });
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched package name of ${user}`, req.method)
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched package name of ${user}`, req.method)
        } catch (error) {
          console.error("Failed to fetch package information:", error);
          res.status(500).json({ error: "Failed to fetch package information" });
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