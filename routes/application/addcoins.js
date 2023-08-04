const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
    app.post("/api/addcoins", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.client.api.code) {
          return res.status(401).json({ status: "error", message: "Invalid API key" });
        }
      
        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
        let user = req.body.email;
        let coins = req.body.coins;
        if (!user) return res.status(400).json({ status: "error", message: "Missing email" });
        if (typeof coins !== "number") return res.status(400).json({ status: "error", message: "Coins must be a number" });
        if (coins < 0 || coins > 999999999999999) return res.status(400).json({ status: "error", message: "Coins value out of range" });
        
        try {
          if (coins === 0) {
            await db.delete("coins-" + user);
          } else {
            const oldcoins = await db.get("coins-" + user);
            const newcoins = oldcoins + coins
            await db.set("coins-" + user, newcoins);
          }
          res.json({ status: "success" });
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Added ${coins} coins to ${user}`, req.method);
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Added ${coins} coins to ${user}`, req.method);
        } catch (error) {
          console.error("[WEBSITE] An error occurred while setting coins:", error);
          return res.status(500).json({ status: "error", message: "An error occurred while setting coins" });
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