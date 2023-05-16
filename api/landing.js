const settings = require("../settings");
const fetch = require('node-fetch');

module.exports.load = async function(app, db) {

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
  
      res.json({ totalUsers });
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
  
      res.json({ totalNodes });
    } catch (error) {
      console.error(`Error while fetching nodes: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  

}