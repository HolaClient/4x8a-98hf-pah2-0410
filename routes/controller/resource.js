const express = require('express');
const fetch = require('node-fetch');
const app = express();
const settings = require("../../settings.json");

module.exports.load = async function (app, db) {
app.get('/controller/server/resources', async (req, res) => {
    try {
      if (!req.query.id) {
        return res.status(400).json({ error: 'Invalid Id' });
      }
      const serverId = req.query.id;
      const apikey = settings.pterodactyl.key;
      const domain = settings.pterodactyl.domain;
      const accKey = settings.pterodactyl.account_key;
  
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
  
      const usageResponse = await fetch(`${domain}/api/client/servers/${serverIdentifier}/resources`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accKey}`
        }
      });
      if (!usageResponse.ok) {
        throw new Error(`Failed to fetch live resource usage: ${usageResponse.status} ${usageResponse.statusText}`);
      }
      const usageData = await usageResponse.json();
      const cpuUsage = usageData.attributes.resources.cpu_absolute;
      const memoryUsage = usageData.attributes.resources.memory_bytes;
      const diskUsage = usageData.attributes.resources.disk_bytes;
      res.setHeader('Cache-Control', 'no-cache');
      res.json({
        serverIdentifier,
        clientAllocation,
        clientPort,
        clientAlias,
        cpuUsage,
        memoryUsage,
        diskUsage
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch server details and client allocation' });
    }
  });
}