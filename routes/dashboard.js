const settings = require("../databases/settings.json");
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
  
  
  app.get('/api/admin/servers', async (req, res) => {
    const perPage = req.query.per_page || 50;
    const response = await fetch(`${settings.pterodactyl.domain}/api/application/servers?per_page=${perPage}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${settings.pterodactyl.key}`,
      },
    });
    const json = await response.json();
    const servers = json.data.map((server) => ({
      id: server.attributes.id,
      name: server.attributes.name,
      node: server.attributes.node,
      egg: server.attributes.egg,
      ram: server.attributes.limits.memory,
      cpu: server.attributes.limits.cpu,
      disk: server.attributes.limits.disk      
    }));
    res.json(servers);
  });

  app.get('/api/admin/servers/details', async (req,res) => {
    if(!req.query.id) return res.send("Invalid Id")
    let server = {}
    await fetch(settings.pterodactyl.domain + `/api/application/servers/${req.query.id}`, {
      "method": "GET",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${settings.pterodactyl.key}`
      }
      }).then(response => response.json()) 
      .then(json => {
        server.id = json.attributes.id
        server.uuid = json.attributes.uuid
        server.name = json.attributes.name
        server.suspend = json.attributes.suspended
        server.memory = json.attributes.limits.memory
        server.disk = json.attributes.limits.disk
        server.cpu = json.attributes.limits.cpu
        server.node = json.attributes.node
        server.egg = json.attributes.egg
      })

    res.send(server)
  })

}
