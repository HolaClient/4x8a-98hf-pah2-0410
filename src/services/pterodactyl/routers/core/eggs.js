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
 * eggs.js - Pterodactyl eggs configurator.
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
const fs = modules.fs;
module.exports.load = async function (app, db) {
  const pterodactyl = await db.get('pterodactyl', 'settings')
    app.get("/api/nests", core.auth, async (req, res) => {
      try {
        const nestsResponse = await fetch(
          `${pterodactyl.domain}/api/application/nests`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${pterodactyl.app}`,
              Accept: "application/json",
            },
          }
        );
  
        const nestsData = await nestsResponse.json();
  
        res.json({ nests: nestsData.data });
      } catch (error) {
        console.error("Error fetching nests:", error);
        res.status(500).json({ error: "Failed to fetch nests" });
      }
    });
  
    app.get("/api/nests/:nestId/eggs", core.auth, async (req, res) => {
      try {
        if (req.session.permissions) {
          return res.redirect("/404?message=Dennis-is-a-retard")
      }
      if (req.session.permissions.level > 100) {return res.redirect("/404?message=Dennis-is-a-retard-for-real")}
        const { nestId } = req.params;
  
        const eggsResponse = await fetch(
          `${pterodactyl.domain}/api/application/nests/${nestId}/eggs`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${pterodactyl.app}`,
              Accept: "application/json",
            },
          }
        );
  
        const eggsData = await eggsResponse.json();
  
        res.json({ eggs: eggsData.data });
      } catch (error) {
        console.error("Error fetching eggs:", error);
        res.status(500).json({ error: "Failed to fetch eggs" });
      }
    });
  
    app.get("/api/nests/:nestId/eggs/:eggId", core.auth, async (req, res) => {
      try {
        if (req.session.permissions) {
          return res.redirect("/404?message=Dennis-is-a-retard")
      }
      if (req.session.permissions.level > 100) {return res.redirect("/404?message=Dennis-is-a-retard-for-real")}
        const { nestId, eggId } = req.params;
  
        const eggsResponse = await fetch(
          `${pterodactyl.domain}/api/application/nests/${nestId}/eggs/${eggId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${pterodactyl.app}`,
              Accept: "application/json",
            },
          }
        );
  
        if (eggsResponse.ok) {
          const eggsData = await eggsResponse.json();
          res.json({ eggs: eggsData.attributes });
        } else {
          console.error("Failed to fetch eggs:", eggsResponse.status);
          res.status(500).json({ error: "Failed to fetch eggs" });
        }
      } catch (error) {
        console.error("Error fetching eggs:", error);
        res.status(500).json({ error: "Failed to fetch eggs" });
      }
    });
  
    app.post("/api/settings", core.auth, async (req, res) => {
      try {
        const { nestId, eggId, banner } = req.body;
  
        console.log("Adding Egg With ID:", eggId);
  
        const eggResponse = await fetch(
          `${pterodactyl.domain}/api/application/nests/${nestId}/eggs/${eggId}?include=variables`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${pterodactyl.app}`,
              Accept: "application/json",
            },
          }
        );
  
        if (eggResponse.ok) {
          const eggData = await eggResponse.json();
          const eggDetails = eggData.attributes;
          const settingsData = await db.get('core', 'eggs') ?? {}
          const eggId = eggDetails.id;
        
          if (!settingsData[eggId]) {
            settingsData[eggId] = {
              display: eggDetails.name,
              banner: banner,
              minimum: {
                ram: 128,
                disk: 256,
                cpu: 20,
              },
              maximum: {
                ram: null,
                disk: null,
                cpu: null,
              },
              info: {
                egg: eggId,
                docker_image: eggDetails.docker_image,
                startup: eggDetails.startup,
                environment: {},
                feature_limits: {
                  databases: 0,
                  backups: 0,
                },
              },
            };
          }
        
          eggDetails.relationships.variables.data.forEach((variable) => {
            const envVariable = variable.attributes.env_variable;
            const defaultValue = variable.attributes.default_value;
            settingsData[eggId].info.environment[envVariable] = defaultValue;
          });
        
          console.log(
            `${req.session.userinfo.username} added an egg named ${eggDetails.name}`
          );
          await db.set('core', 'eggs', settingsData)
          res.json({ success: true });
        } else {
          console.error("Failed to fetch egg details:", eggResponse.status);
          res.status(500).json({ error: "Failed to fetch egg details" });
        }
      } catch (error) {
        console.error("Error updating settings:", error);
        res.status(500).json({ error: "Failed to update settings" });
      }
    });
  
    app.get("/admin/eggs/remove/:eggId", core.auth, async (req, res) => {
      try {
        if (req.session.permissions) {
          return res.redirect("/404?message=Dennis-is-a-retard")
      }
      if (req.session.permissions.level > 100) {return res.redirect("/404?message=Dennis-is-a-retard-for-real")}
          const { eggId } = req.params;
  
          console.log("Removing Egg With ID:", eggId);
  
          const settingsData = JSON.parse(fs.readFileSync("./eggs.json").toString());
  
          if (settingsData[eggId]) {
              delete settingsData[eggId];
              fs.writeFileSync("./eggs.json", JSON.stringify(settingsData, null, 2));
  
              console.log(`${req.session.userinfo.username} removed an egg with ID: ${eggId}`);
              res.json({ success: true, message: "Success" });
          } else {
              console.error("Egg not found in eggs.json");
              res.status(404).json({ error: "Egg not found" });
          }
      } catch (error) {
          console.error("Error removing egg:", error);
          res.status(500).json({ error: "Failed to remove egg" });
      }
  });  
  };
  