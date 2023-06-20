const fetch = require('node-fetch');
const settings = require('../../settings.json');
const panelUrl = settings.pterodactyl.domain;
const panelApiKey = settings.pterodactyl.key;
const scanInterval = settings.anti_pteroVM.interval * 1000; // Convert to milliseconds

module.exports.load = async function (app, db) {
async function suspendServer(serverId) {
  try {
    await fetch(`${panelUrl}/api/application/servers/${serverId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${panelApiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.pterodactyl.v1+json',
      },
      body: JSON.stringify({
        description: 'Server suspended by HolaClient due to PteroVM.',
      }),
    });

    await fetch(`${panelUrl}/api/application/servers/${serverId}/suspend`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${panelApiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.pterodactyl.v1+json',
      },
    });

    console.log(`Server with ID ${serverId} suspended successfully.`);
  } catch (error) {
    console.error(`Failed to suspend server with ID ${serverId}:`, error);
  }
}

async function scanServerFiles(serverId) {
  try {
    const serverFilesResponse = await fetch(`${panelUrl}/api/client/servers/${serverId}/files/list`, {
      headers: {
        Authorization: `Bearer ${panelApiKey}`,
        Accept: 'application/vnd.pterodactyl.v1+json',
      },
    });

    if (!serverFilesResponse.ok) {
      throw new Error(`Failed to retrieve files for server with ID ${serverId}: ${serverFilesResponse.status} ${serverFilesResponse.statusText}`);
    }

    const serverFilesData = await serverFilesResponse.json();
    const files = serverFilesData.data;

    const foundFiles = files.filter(file =>
      file.attributes.name === 'st.sh' ||
      file.attributes.name === 'lib32' ||
      file.attributes.name === 'lib64' ||
      file.attributes.name === 'proot' ||
      file.attributes.name === 'sbin' ||
      file.attributes.name === 'libx32'
    );

    if (foundFiles.length > 0) {
      await suspendServer(serverId);
    }
  } catch (error) {
    console.error(`Failed to scan files for server with ID ${serverId}:`, error);
  }
}

async function scanServers() {
  if (!settings.anti_pteroVM.enabled) {
    return; // If anti_pteroVM is not enabled, don't scan for PteroVM servers
  }

  try {
    const serversResponse = await fetch(`${panelUrl}/api/application/servers`, {
      headers: {
        Authorization: `Bearer ${panelApiKey}`,
        Accept: 'application/vnd.pterodactyl.v1+json',
      },
    });

    if (!serversResponse.ok) {
      throw new Error(`Failed to retrieve server list: ${serversResponse.status} ${serversResponse.statusText}`);
    }

    const serversData = await serversResponse.json();
    const servers = serversData.data;

    for (const server of servers) {
      await scanServerFiles(server.attributes.identifier);
    }
  } catch (error) {
    console.error('Failed to retrieve server list:', error);
  }
}

setInterval(scanServers, scanInterval);

scanServers();

app.get('/scan-vms', async (req, res) => {
  await scanServers();
  res.send('Server scanning initiated.');
});
}