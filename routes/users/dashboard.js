const settings = require("../../settings");
const fetch = require("node-fetch");

module.exports.load = async function(app, db) {
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
  
      res.json({ totalLocations });
    } catch (error) {
      console.error(`Error while fetching locations: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}
