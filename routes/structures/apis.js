const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const log = require('../handlers/webhook.js');
global.api = require('../../lib/api.js')

module.exports.load = async function (app, db) {
  app.get("/api", async (req, res) => {
    if (settings.api.client.api.enabled === true) {
      return res.json({
        status: "online",
      });
    } else {
      return res.status(404).json({
        status: "offline",
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
  
      res.json({ totalServers });
    } catch (error) {
      console.error(`Error while fetching and counting servers: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get('/api/admin/servers', async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/auth")
    
    let cacheaccount = await fetch(
        settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
        {
        method: "get",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
        }
    );
    if (await cacheaccount.statusText == "Not Found") return res.redirect("/404")
    let cacheaccountinfo = JSON.parse(await cacheaccount.text());

    req.session.pterodactyl = cacheaccountinfo.attributes;
    if (cacheaccountinfo.attributes.root_admin !== true) return res.redirect("/404")
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
      identifier: server.attributes.identifier,
      name: server.attributes.name,
      node: server.attributes.node,
      egg: server.attributes.egg,
      ram: server.attributes.limits.memory,
      cpu: server.attributes.limits.cpu,
      disk: server.attributes.limits.disk,
      backups: server.attributes.feature_limits.backups,
      allocations: server.attributes.feature_limits.databases,
      databases: server.attributes.feature_limits.allocations
    }));
    res.json(servers);
  });

  app.get('/api/admin/servers/details', async (req,res) => {
    if (!req.session.pterodactyl) return res.redirect("/auth")
        
    let cacheaccount = await fetch(
        settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
        {
        method: "get",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
        }
    );
    if (await cacheaccount.statusText == "Not Found") return res.redirect("/auth")
    let cacheaccountinfo = JSON.parse(await cacheaccount.text());

    req.session.pterodactyl = cacheaccountinfo.attributes;
    if (cacheaccountinfo.attributes.root_admin !== true) return res.redirect("/auth")
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
        server.identifier = json.attributes.identifier
        server.description = json.attributes.description
        server.location = json.attributes.container.environment.P_SERVER_LOCATION
        server.createdat = json.attributes.created_at
        server.updatedat = json.attributes.updated_at
        server.suspended = json.attributes.suspended
        server.uuid = json.attributes.uuid
        server.name = json.attributes.name
        server.suspend = json.attributes.suspended
        server.memory = json.attributes.limits.memory
        server.disk = json.attributes.limits.disk
        server.cpu = json.attributes.limits.cpu
        server.node = json.attributes.node
        server.egg = json.attributes.egg
        server.backups = json.attributes.feature_limits.backups
        server.databases = json.attributes.feature_limits.databases
        server.allocations = json.attributes.feature_limits.allocations

      })

    res.send(server)
  })
  
  app.get('/api/admin/server/details', async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/auth")
        
    let cacheaccount = await fetch(
        settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
        {
        method: "get",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
        }
    );
    if (await cacheaccount.statusText == "Not Found") return res.redirect("/404")
    let cacheaccountinfo = JSON.parse(await cacheaccount.text());

    req.session.pterodactyl = cacheaccountinfo.attributes;
    if (cacheaccountinfo.attributes.root_admin !== true) return res.redirect("/404")
    try {
      if (!req.query.id) {
        return res.status(400).json({ error: 'Invalid Id' });
      }
      const serverId = req.query.id;
      const apikey = settings.pterodactyl.key;
      const domain = settings.pterodactyl.domain;
      const accKey = settings.pterodactyl.account_key
    
      const serverResponse = await fetch(`${domain}/api/application/servers/${serverId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apikey}`
        }
      });
      if (!serverResponse.ok) {
        throw new Error(`Failed to fetch server details: ${serverResponse.status} ${serverResponse.statusText}`);
      }
    
      const serverData = await serverResponse.json();
      const serverIdentifier = serverData.attributes.identifier;
      const clientResponse = await fetch(`${domain}/api/client/servers/${serverIdentifier}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accKey}`
        }
      });
      if (!clientResponse.ok) {
        throw new Error(`Failed to fetch client details: ${clientResponse.status} ${clientResponse.statusText}`);
      }
      const clientData = await clientResponse.json();
      const clientAllocation = clientData.attributes.relationships.allocations.data[0].attributes.ip;
      const clientAlias = clientData.attributes.relationships.allocations.data[0].attributes.ip_alias;
      const clientPort = clientData.attributes.relationships.allocations.data[0].attributes.port;
      res.json({ serverIdentifier, clientAllocation, clientPort, clientAlias });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch server details and client allocation' });
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