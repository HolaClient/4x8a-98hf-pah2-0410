const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
  app.get("/api/version", async (req, res) => {
    try {
      const response = await fetch("https://api.github.com/repos/HolaClient/HolaClient/releases/latest");
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub data");
      }
      
      const json = await response.json();
      res.json({
        latest: json.name,
        current: `v${settings.version}`
      });
    } catch (error) {
      console.error("Error fetching GitHub data:", error.message);
      res.status(500).json({
        error: "Failed to fetch GitHub data",
      });
    }
  });
  
};