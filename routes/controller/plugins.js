const fetch = require('node-fetch');

module.exports.load = async function(app, db) {
  app.post('/api/install-plugin', (req, res) => {
    const pluginId = req.body.pluginId;
    const serverId = req.body.serverId;
    const pterodactylApiUrl = settings.pterodactyl.domain;
    const pterodactylApiToken = settings.pterodactyl.account_key;

    // Fetch the plugin details from Spiget API
    fetch(`https://api.spiget.org/v2/resources/${pluginId}`)
      .then(response => response.json())
      .then(plugin => {
        const pluginName = plugin.name;
        const downloadRelativeUrl = plugin.file.url;
        const spigetBaseUrl = 'https://api.spiget.org/v2';

        const pluginDownloadUrl = `${spigetBaseUrl}/${downloadRelativeUrl}`;
        console.log(pluginDownloadUrl);

        // Construct the request body for plugin installation
        const requestBody = {
          name: pluginName,
          source: 'URL',
          url: pluginDownloadUrl,
          shouldUnzip: true
        };

        // Make a request to the Pterodactyl API to install the plugin on the server
        fetch(`${pterodactylApiUrl}/api/client/servers/${serverId}/files/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${pterodactylApiToken}`
          },
          body: fileData  // Replace `fileData` with the actual file data you want to upload
        })
          .then(response => response.json())
          .then(data => {
            res.json(data);
            console.log(data);
          })
          .catch(error => {
            console.error('Error uploading file:', error);
            res.status(500).json({ error: 'Failed to upload file' });
          });
        
      })
      .catch(error => {
        console.error('Error fetching plugin details:', error);
        res.status(500).json({ error: 'Failed to fetch plugin details' });
      });
  });
};
