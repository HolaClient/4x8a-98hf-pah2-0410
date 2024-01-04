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
 * nodes.js - Nodes Status handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../../../utils/modules");
const core = modules.core
const fetch = modules.fetch;
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 2,
  message: "Too many requests, please try again later.",
});
module.exports.load = async function (app, db) {
  const pterodactyl = await db.get('pterodactyl', 'settings')
  const domain = pterodactyl.domain;
  const key = pterodactyl.app;
  const main = async () => {
    try {
      const response = await fetch(domain + "/api/application/nodes?include=servers", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      });

      const json = await response.json();

      const node = await Promise.all(
        json.data.map(async (data) => {
          const servers = data.attributes.relationships.servers.data;
          const serverData = servers.map(server => ({
            id: server.id,
            name: server.attributes.name,
            memory: server.attributes.limits.memory,
            disk: server.attributes.limits.disk,
          }));
      
          const usedMemory = serverData.reduce((totalMemory, server) => totalMemory + server.memory, 0);
          const usedDisk = serverData.reduce((totalDisk, server) => totalDisk + server.disk, 0);
      
          const healthResponses = await Promise.all(servers.map(async (server) => {
            try {
              const healthResponse = await fetch(
                "https://" + data.attributes.fqdn + ":" + data.attributes.daemon_listen + "/health",
                {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${key}`,
                  },
                }
              );
      
              return (healthResponse.status >= 500 && healthResponse.status <= 599) ? "offline" : "online";
            } catch (error) {
              return "offline";
            }
          }));
      
          const status = healthResponses.includes("online") ? "online" : "offline";
          const response = await fetch(domain + "/api/application/nodes/" + data.attributes.id + "?include=location", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${key}`,
            },
          });
          const dt = await response.json();
      
          return {
            id: data.attributes.id,
            name: data.attributes.name,
            url: "https://" + data.attributes.fqdn + ":" + data.attributes.daemon_listen,
            fqdn: data.attributes.fqdn,
            port: data.attributes.daemon_listen,
            location: {
              id: dt.attributes.relationships.location.attributes.id,
              short: dt.attributes.relationships.location.attributes.short,
              long: dt.attributes.relationships.location.attributes.long,
            },
            memory: parseFloat(data.attributes.memory).toFixed(0),
            disk: parseFloat(data.attributes.disk).toFixed(0),
            usedMemory: parseFloat(usedMemory).toFixed(0),
            usedDisk: parseFloat(usedDisk).toFixed(0),
            status: status,
          };
        })
      );      

      await db.set('nodes', "status", node);
    } catch (error) {
      console.error('Error fetching and processing node data:', error);
    }
  };

  const updateInterval = 10 * 60 * 1000;
  setInterval(main, updateInterval);


  app.get("/api/pterodactyl/status/nodes", async (req, res) => {
    try {
      const nodeStatuses = await db.get('nodes', "status");
      if (!nodeStatuses) {
        return res.status(404).json({ error: "Node statuses not found." });
      }

      res.json(nodeStatuses);
    } catch (error) {
      console.error('Failed to retrieve node statuses:', error);
      res.status(500).json({ error: "Failed to retrieve node statuses." });
    }
  });

  app.get("/api/pterodactyl/status/nodes/refresh", core.auth, limiter, (req, res) => {
    main();
    res.json({ success: true });
  });
};