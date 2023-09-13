const fetch = require('node-fetch');

module.exports.load = async function (app, db) {

app.get('/api/total/ram', async (req, res) => {
  const apiKey = req.headers.authorization;

  if (!apiKey) {
    return res.status(401).json({ status: 'error', message: 'Missing API key' });
  }
  if (apiKey !== settings.api.key) {
    return res.status(401).json({ status: 'error', message: 'Invalid API key' });
  }
  try {
    const nodes = await fetch(`${settings.pterodactyl.domain}/api/application/nodes`, {
      headers: {
        Authorization: `Bearer ${settings.pterodactyl.key}`,
        Accept: 'application/json',
      },
    });

    if (!nodes.ok) {
      throw new Error('Failed to fetch nodes from Pterodactyl API');
    }

    const nodesData = await nodes.json();

    let ram = 0;
    nodesData.data.forEach((node) => {
      ram += node.attributes.memory;
    });

    res.json({ ram });
  } catch (error) {
    console.error('Error fetching used RAM:', error.message);
    res.status(500).json({
      error: 'Failed to fetch used RAM',
    });
  }
});

app.get('/api/total/disk', async (req, res) => {
  const apiKey = req.headers.authorization;

  if (!apiKey) {
    return res.status(401).json({ status: 'error', message: 'Missing API key' });
  }
  if (apiKey !== settings.api.key) {
    return res.status(401).json({ status: 'error', message: 'Invalid API key' });
  }

  try {
    const nodes = await fetch(`${settings.pterodactyl.domain}/api/application/nodes`, {
      headers: {
        Authorization: `Bearer ${settings.pterodactyl.key}`,
        Accept: 'application/json',
      },
    });

    if (!nodes.ok) {
      throw new Error('Failed to fetch nodes from Pterodactyl API');
    }

    const nodesData = await nodes.json();

    let disk = 0;
    nodesData.data.forEach((node) => {
      disk += node.attributes.disk;
    });

    res.json({ disk });
  } catch (error) {
    console.error('Error fetching used disk space:', error.message);
    res.status(500).json({
      error: 'Failed to fetch used disk space',
    });
  }
});

app.get('/api/used/ram', async (req, res) => {
    const apiKey = req.headers.authorization;
  
    if (!apiKey) {
      return res.status(401).json({ status: 'error', message: 'Missing API key' });
    }
    if (apiKey !== settings.api.key) {
      return res.status(401).json({ status: 'error', message: 'Invalid API key' });
    }
  
    try {
      const servers = await fetch(`${settings.pterodactyl.domain}/api/application/servers`, {
        headers: {
          Authorization: `Bearer ${settings.pterodactyl.key}`,
          Accept: 'application/json',
        },
      });
  
      if (!servers.ok) {
        throw new Error('Failed to fetch servers from Pterodactyl API');
      }
  
      const serversData = await servers.json();
  
      let ram = 0;
      serversData.data.forEach((server) => {
        ram += server.attributes.limits.memory;
      });
  
      res.json({ ram });
    } catch (error) {
      console.error('Error fetching used ram space:', error.message);
      res.status(500).json({
        error: 'Failed to fetch used ram space',
      });
    }
});

app.get('/api/used/disk', async (req, res) => {
    const apiKey = req.headers.authorization;
  
    if (!apiKey) {
      return res.status(401).json({ status: 'error', message: 'Missing API key' });
    }
    if (apiKey !== settings.api.key) {
      return res.status(401).json({ status: 'error', message: 'Invalid API key' });
    }
  
    try {
      const servers = await fetch(`${settings.pterodactyl.domain}/api/application/servers`, {
        headers: {
          Authorization: `Bearer ${settings.pterodactyl.key}`,
          Accept: 'application/json',
        },
      });
  
      if (!servers.ok) {
        throw new Error('Failed to fetch servers from Pterodactyl API');
      }
  
      const serversData = await servers.json();
  
      let disk = 0;
      serversData.data.forEach((server) => {
        disk += server.attributes.limits.disk;
      });
  
      res.json({ disk });
    } catch (error) {
      console.error('Error fetching used disk space:', error.message);
      res.status(500).json({
        error: 'Failed to fetch used disk space',
      });
    }
});
}