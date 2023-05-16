const express = require('express');
const fetch = require('node-fetch');
const app = express();
const settings = require("../settings.json");
const apiUrl = `${settings.pterodactyl.domain}/api/application`;

module.exports.load = async function (app, db) {
  app.post('/api/purge', (req, res) => {
    fetch(`${apiUrl}/servers`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${settings.pterodactyl.key}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.pterodactyl.v1+json',
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to get server list: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const servers = data.data;
        const purgeKeyword = settings.purge.keyword;
        const inactiveServers = servers.filter(server => !server.attributes.name.includes(purgeKeyword));

        inactiveServers.forEach(server => {
          fetch(`${apiUrl}/servers/${server.attributes.identifier}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${settings.pterodactyl.key}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.pterodactyl.v1+json',
            }
          })
            .then(() => {
              console.log(`Deleted server ${server.attributes.name}`);
            })
            .catch((error) => {
              console.error(`Failed to delete server ${server.attributes.name}: ${error}`);
            });
        });
        console.log('Purge complete!');
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(`Failed to get server list: ${error}`);
        res.sendStatus(500);
      });
  });
};
