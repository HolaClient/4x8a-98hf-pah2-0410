const fetch = require('node-fetch');
const fs = require('fs');
const settings = require('../settings.json');
const domain = settings.pterodactyl.domain;
const key = settings.pterodactyl.key;

module.exports.load = async function(app, db) {
  async function fetchEggDetails(nestId, eggId) {
    try {
      const response = await fetch(`${domain}/api/application/nests/${nestId}/eggs/${eggId}`, {
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.pterodactyl.v1+json',
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch details for egg 'Forge Minecraft': ${response.status} ${response.statusText}`);
      }

      const eggDetails = await response.json();
      return eggDetails;
    } catch (error) {
      console.error('Failed to fetch egg details:', error);
      return null;
    }
  }

  async function fetchEggs() {
    try {
      const response = await fetch(`${domain}/api/application/nests`, {
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.pterodactyl.v1+json',
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch nests: ${response.status} ${response.statusText}`);
      }

      const nests = await response.json();
      const eggs = {};

      for (const nest of nests.data) {
        if (nest.attributes.name.includes('[HCNO]')) {
          continue;
        }

        const nestResponse = await fetch(`${domain}/api/application/nests/${nest.attributes.id}/eggs`, {
          headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.pterodactyl.v1+json',
          }
        });

        if (!nestResponse.ok) {
          console.error(`Failed to fetch eggs for nest '${nest.attributes.name}': ${nestResponse.status} ${nestResponse.statusText}`);
          continue;
        }

        const nestData = await nestResponse.json();

        for (const egg of nestData.data) {
          if (egg.attributes.name.includes('[HCNO]')) {
            continue;
          }

          const eggDetails = await fetchEggDetails(nest.attributes.id, egg.attributes.id);

          if (!eggDetails) {
            console.error(`Failed to fetch details for egg '${egg.attributes.name}'`);
            continue;
          }

          const featureLimits = eggDetails.attributes.feature_limits || {};

          const eggEnvironment = {};

          if (eggDetails.attributes.name.toLowerCase().includes('bungeecord')) {
            eggEnvironment.BUNGEE_VERSION = 'latest';
          } else if (eggDetails.attributes.name.toLowerCase().includes('paper')) {
            eggEnvironment.BUILD_NUMBER = 'latest';
          }

          eggs[egg.attributes.id] = {
            display: egg.attributes.name,
            minimum: {
              ram: 256,
              disk: 256,
              cpu: 20,
            },
            maximum: {
              ram: null,
              disk: null,
              cpu: null,
            },
            info: {
            egg: eggDetails.attributes.id,
            docker_image: eggDetails.attributes.docker_image,
            startup: eggDetails.attributes.startup,
            environment: {
            SERVER_JARFILE: 'server.jar',
            ...eggEnvironment,
            },
            feature_limits: {
            databases: featureLimits.databases || 0,
            backups: featureLimits.backups || 0,
            },
            },
            };
            }
            }
            return eggs;
          } catch (error) {
            console.error('Failed to fetch eggs:', error);
            return null;
          }
        }

        async function updateSettingsWithEggs() {
        const eggs = await fetchEggs();
        if (eggs) {
        settings.api.client.eggs = eggs;
        fs.writeFile('./settings.json', JSON.stringify(settings, null, 2), (err) => {
          if (err) {
            console.error('Failed to update settings.json:', err);
          } else {
            console.log('Successfully configured available eggs!');
          }
        });
      }
    }

    updateSettingsWithEggs();
    };