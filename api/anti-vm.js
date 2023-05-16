const express = require('express');
const fetch = require('node-fetch');
const settings = require('../settings.json');
const apiKey = settings.pterodactyl.key;
const apiUrl = `${settings.pterodactyl.domain}/api/application`;

module.exports.load = async function(app, db) {
app.get('/suspend-servers', async (req, res) => {
  try {
    const serverListResponse = await fetch(`${apiUrl}/servers`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!serverListResponse.ok) {
      throw new Error(`Failed to fetch server list: ${serverListResponse.status} ${serverListResponse.statusText}`);
    }

    const serverList = await serverListResponse.json();

    for (const server of serverList.data) {
      const serverId = server.identifier;
      const serverName = server.attributes.name;

      const utilizationResponse = await fetch(`${apiUrl}/servers/${serverId}/utilization`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!utilizationResponse.ok) {
        console.error(`Failed to fetch utilization data for server ${serverName}: ${utilizationResponse.status} ${utilizationResponse.statusText}`);
        continue;
      }

      const utilizationData = await utilizationResponse.json();
      const isPteroVM = utilizationData.environment === 'pterodactyl-vm';

      if (isPteroVM) {
        console.log(`Suspending server ${serverName} (${serverId})...`);

        const suspendResponse = await fetch(`${apiUrl}/servers/${serverId}/suspend`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!suspendResponse.ok) {
          console.error(`Failed to suspend server ${serverName} (${serverId}): ${suspendResponse.status} ${suspendResponse.statusText}`);
        } else {
          console.log(`Server ${serverName} (${serverId}) suspended successfully.`);
        }
      }
    }

    res.status(200).json({ message: 'Server scan and suspension completed.' });
  } catch (error) {
    console.error(`Error while suspending servers: ${error}`);
    res.status(500).json({ error: 'An error occurred while suspending servers.' });
  }
});
}