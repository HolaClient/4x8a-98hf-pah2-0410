const cors = require('cors');
const fetch = require('node-fetch');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
  app.use(cors());
  
  app.get("/api", async (req, res) => {
    if (settings.api.enabled === true) {
      return res.json({
        status: "enabled",
      });
    } else {
      return res.status(404).json({
        status: "disabled",
      });
    }
  });  
  
  app.get("/api/users", async (req, res) => {
    try {
      const response = await fetch(settings.pterodactyl.domain + "/api/application/users", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${settings.pterodactyl.key}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
      }
  
      const json = await response.json();
      const totalUsers = json.meta.pagination.total;
  
      res.json({ users: totalUsers });
    } catch (error) {
      console.error(`Error while fetching users: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/nodes", async (req, res) => {
    try {
      const response = await fetch(settings.pterodactyl.domain + "/api/application/nodes", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${settings.pterodactyl.key}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch nodes: ${response.status} ${response.statusText}`);
      }
  
      const json = await response.json();
      const totalNodes = json.meta.pagination.total;
  
      res.json({ nodes: totalNodes });
    } catch (error) {
      console.error(`Error while fetching nodes: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/servers", async (req, res) => {
    try {
      const response = await fetch(settings.pterodactyl.domain + "/api/application/nodes?include=servers", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${settings.pterodactyl.key}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch nodes and servers: ${response.status} ${response.statusText}`);
      }
  
      const json = await response.json();
  
      let totalServers = 0;
      if (json.data && Array.isArray(json.data)) {
        json.data.forEach((node) => {
          if (node.attributes.relationships.servers && Array.isArray(node.attributes.relationships.servers.data)) {
            totalServers += node.attributes.relationships.servers.data.length;
          }
        });
      }
  
      res.json({ servers: totalServers });
    } catch (error) {
      console.error(`Error while fetching and counting servers: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/locations", async (req, res) => {
    try {
      const response = await fetch(settings.pterodactyl.domain + "/api/application/locations", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${settings.pterodactyl.key}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.status} ${response.statusText}`);
      }
  
      const json = await response.json();
  
      if (!json.meta || !json.meta.pagination) {
        throw new Error("Invalid response format: missing pagination data");
      }
  
      const totalLocations = json.meta.pagination.total;
  
      res.json({ locations: totalLocations });
    } catch (error) {
      console.error(`Error while fetching locations: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};