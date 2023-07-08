const express = require('express');
const fetch = require('node-fetch');
const app = express();
const settings = require("../../settings.json");

module.exports.load = async function (app, db) {
app.post('/server/power', async (req, res) => {
  try {
    const { serverId, signal } = req.body;

    const apikey = settings.pterodactyl.key;
    const domain = settings.pterodactyl.domain;

    const response = await fetch(`${domain}/api/client/servers/${serverId}/power`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apikey}`
      },
      body: JSON.stringify({ signal })
    });

    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      throw new Error(`Failed to change server power state: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to change server power state' });
  }
});
}