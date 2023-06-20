const express = require('express');
const fetch = require('node-fetch');
const app = express();
const settings = require("../../settings.json");

app.use(express.json());

app.post('/api/controller/server/power', async (req, res) => {
  try {
    const { id, state } = req.body;

    if (!id || !state) {
      return res.status(400).json({ error: 'Invalid ID or power state' });
    }

    const apikey = settings.pterodactyl.key;
    const domain = settings.pterodactyl.domain;
    const accKey = settings.pterodactyl.account_key;

    const serverResponse = await fetch(`${domain}/api/application/servers/${id}`, {
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

    const response = await fetch(`${domain}/api/client/servers/${serverIdentifier}/power`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accKey}`
      },
      body: JSON.stringify({
        signal: state
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to change power state: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();

    res.json({ success: true, data: responseData, serverIdentifier });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to change power state' });
  }
});