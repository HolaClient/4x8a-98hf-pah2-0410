const express = require('express');
const fetch = require('node-fetch');
const WebSocket = require('ws');
const app = express();

async function getServerIdentifier(serverId, apiKey, domain) {
  const response = await fetch(`${domain}/api/application/servers/${serverId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch server details: ${response.status} ${response.statusText}`);
  }
  const serverData = await response.json();
  return serverData.attributes.identifier;
}
async function getServerAddress(serverIdentifier, accKey, domain) {
  const response = await fetch(`${domain}/api/client/servers/${serverIdentifier}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accKey}`,
      cookie: `pterodactyl_session=${encodeURIComponent(accKey)}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch server details: ${response.status} ${response.statusText}`);
  }
  const serverData = await response.json();
  return serverData.attributes.relationships.allocation.attributes.ip;
}
app.get('/controller/console', async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(400).json({ error: 'Invalid Id' });
    }
    const serverId = req.query.id;
    const apiKey = settings.pterodactyl.key;
    const domain = settings.pterodactyl.domain;
    const accKey = settings.pterodactyl.account_key;

    const serverIdentifier = await getServerIdentifier(serverId, apiKey, domain);
    const serverAddress = await getServerAddress(serverIdentifier, accKey, domain);

    const wsURL = `wss://${serverAddress}/api/client/servers/${serverIdentifier}/websocket`;

    res.json({ ws: wsURL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
const wss = new WebSocket.Server({ noServer: true });
app.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit('connection', socket, request);
  });
});
wss.on('connection', (socket, request) => {
  socket.on('message', (message) => {
    console.log('Received message:', message);
  });
});
function broadcastLog(log) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ event: 'console output', args: [log] }));
    }
  });
}
function simulateServerLogs() {
  setInterval(() => {
    const log = '[14:07:12] [Query Listener #1/INFO]: Query running on 0.0.0.0:25565';
    broadcastLog(log);
  }, 2000);
}
simulateServerLogs();
