const settings = require("../databases/settings.json");
const fetch = require('node-fetch');
const cron = require('node-cron');
const express = require('express');
const app = express();
const pterodactylDomain = settings.pterodactyl.domain;
const pterodactylKey = settings.pterodactyl.key;

module.exports.load = async function(app, db) {
async function getAllServers() {
  try {
    const response = await fetch(`${pterodactylDomain}/api/application/servers`, {
      headers: {
        Authorization: `Bearer ${pterodactylKey}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch servers:', error.message);
    return [];
  }
}

async function checkServerDirectory(serverId) {
  try {
    const response = await fetch(`${pterodactylDomain}/api/application/servers/${serverId}/files/list`, {
      headers: {
        Authorization: `Bearer ${pterodactylKey}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const files = data.data;
    return files.some(file => file.name === 'lib32');
  } catch (error) {
    console.error(`Failed to check server directory for server ${serverId}:`, error.message);
    return false;
  }
}

async function suspendServer(serverId) {
  try {
    const response = await fetch(`${pterodactylDomain}/api/application/servers/${serverId}/suspend`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pterodactylKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log(`Server ${serverId} suspended.`);
    } else {
      console.error(`Failed to suspend server ${serverId}. Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Failed to suspend server ${serverId}:`, error.message);
  }
}

async function scanServers() {
  console.log('Scanning servers for PteroVM...');
  const servers = await getAllServers();

  for (const server of servers) {
    if (server.attributes.server_owner !== null && server.attributes.status === 'offline') {
      const hasLib32 = await checkServerDirectory(server.attributes.identifier);
      if (hasLib32) {
        await suspendServer(server.attributes.identifier);
      }
    }
  }

  console.log('Scan completed.');
}

cron.schedule('*/10 * * * *', async () => {
  await scanServers();
});

app.get('/scan-servers', async (req, res) => {
  await scanServers();
  res.send('Server scan triggered.');
});
}