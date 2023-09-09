const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
    app.get('/api/package', async (req, res) => {
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
        try {
          const user = req.query.user;
          const packagename = await db.get("package-" + user);
          const packageList = settings.packages.list;
          const defaultPackage = settings.packages.default;
          const packageName = packagename ? packageList[packagename].name : packageList[defaultPackage].name;
      
          res.json({ status: "success", package: packageName });
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched package name of ${user}`, req.method)
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched package name of ${user}`, req.method)
        } catch (error) {
          console.error("Failed to fetch package information:", error);
          res.status(500).json({ error: "Failed to fetch package information" });
        }
      });
};