/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * locations.js - Auto-locations configurator.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
const fs = require("fs");
const chalk = require("chalk");

module.exports.load = async function (app, db) {
const pterodactyl = await db.get('pterodactyl', 'settings')
const domain = pterodactyl.domain;
const key = pterodactyl.app;

app.post("/api/locations", core.auth, async (req, res) => {
    try {
        const locations = await fetchLocations();
        return locations
    } catch (error) {
      console.error("Error updating settings:", error);
      res.status(500).json({ error: "Failed to update settings" });
    }
  });

  app.get("/api/locations/configure", async (req, res) => {
    try {
        const location = req.query.id
        configure(location, req.query.type, req.query.softwares)
    } catch (error) {
      console.error("Error updating settings:", error);
      res.status(500).json({ error: "Failed to update settings" });
    }
  });

  async function fetchLocations() {
    try {
      const response = await fetch(`${domain}/api/application/locations`, {
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.pterodactyl.v1+json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch locations: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      return data.data;
    } catch (error) {
      return null;
    }
  }

  async function configure(location, type, softwares) {
    if (location) {
      const locations = await db.get("core", 'locations')
      const response = await fetch(`${domain}/api/application/locations/${location}`, {
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json"
        },
      });
      let locationInfo = location.attributes.id = {
        name: location.attributes.long,
        short: location.attributes.short,
        banner: `https://flagsapi.com/${location.attributes.short}/flat/48.png`,
        package: null,
        type: type,
        softwares: softwares
      };
      locations.push(locationInfo)
      await db.set('core', "locations", locations)
    }
  }
};
