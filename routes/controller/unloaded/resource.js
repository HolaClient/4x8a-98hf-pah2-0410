const express = require('express');
const fetch = require('node-fetch');
const app = express();
const settings = require("../../settings.json");

app.get('/resource-usage', async (req, res) => {
  try {
    const { id } = req.query;
    const serverIdentifier = id;

    const apikey = settings.pterodactyl.key;
    const domain = settings.pterodactyl.domain;

    const response = await fetch(`https://${domain}/api/client/servers/${serverIdentifier}/resources`, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apikey}`
  }
});

if (response.ok) {
  const data = await response.text();
  console.log('Resource Usage Data:', data); // Log the response as text
  res.send(data);
} else {
  throw new Error(`Failed to fetch server stats: ${response.status} ${response.statusText}`);
}

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch server resource usage' });
  }
});