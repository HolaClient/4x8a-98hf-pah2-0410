const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const app = express();
const settings = require("../databases/settings.json");
const apiUrl = `${settings.pterodactyl.domain}/api/application`;

module.exports.load = async function(app, db) {
  app.post('/api/purge', (req, res) => {
    fetch(`${apiUrl}/servers`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${settings.pterodactyl.key}`,
        'Content-Type': 'application/json'
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
      const inactiveServers = servers.filter(server => !server.attributes.name.includes(settings.purge.keyword));
      inactiveServers.forEach(server => {
        fetch(`${apiUrl}/servers/${server.attributes.identifier}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${settings.pterodactyl.key}`,
            'Content-Type': 'application/json'
          }
        })
        .then(() => {
          console.log(`Deleted server ${server.attributes.name}`);
        })
        .catch((error) => {
          console.error(`Failed to delete server ${server.attributes.name}: ${error}`);
        });
      });
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(`Failed to get server list: ${error}`);
      res.sendStatus(500);
    });  
  });
};
