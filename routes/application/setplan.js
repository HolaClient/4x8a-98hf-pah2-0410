const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
    app.post("/api/setplan", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.client.api.code) {
          return res.status(401).json({ status: "error", message: "Invalid API key" });
        }
      
        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
    
        if (typeof req.body.email !== "string") return res.send({ status: "missing email" });
    
        if (!(await db.get("users-" + req.body.email))) return res.send({ status: "invalid email" });
    
        if (typeof req.body.package !== "string") {
          await db.delete("package-" + req.body.email);
          adminjs.suspend(req.body.email);
          return res.send({ status: "success" });
        } else {
          let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
          if (!newsettings.api.client.packages.list[req.body.package]) return res.send({ status: "invalid package" });
          await db.set("package-" + req.body.email, req.body.package);
          adminjs.suspend(req.body.email);
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Changed the plan of user ${req.body.email} to ${req.body.package}`, req.method);
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Changed the plan of user ${req.body.email} to ${req.body.package}`, req.method);
          return res.send({ status: "success" });
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