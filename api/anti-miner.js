const express = require('express');
const fetch = require('node-fetch');
const cron = require('node-cron');
const app = express();
const settings = require("../settings.json");
const apiUrl = `${settings.pterodactyl.domain}/api/application`;

module.exports.load = async function (app, db) {
  cron.schedule('*/10 * * * *', () => {
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

        servers.forEach(server => {
          const serverId = server.attributes.identifier;

          fetch(`${apiUrl}/servers/${serverId}/utilization`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${settings.pterodactyl.key}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.pterodactyl.v1+json',
            }
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Looks like ${server.attributes.name} is not running a miner.`);
              }
              return response.json();
            })
            .then((utilization) => {
              const processes = utilization.data.attributes.processes;
              const miningProcesses = processes.filter(process => process.cmdline && process.cmdline.includes('miner'));

              if (miningProcesses.length > 0) {
                miningProcesses.forEach(miningProcess => {
                  fetch(`${apiUrl}/servers/${serverId}/processes/${miningProcess.pid}`, {
                    method: 'DELETE',
                    headers: {
                      'Authorization': `Bearer ${settings.pterodactyl.key}`,
                      'Content-Type': 'application/json',
                      'Accept': 'application/vnd.pterodactyl.v1+json',
                    }
                  })
                    .then(() => {
                      console.log(`Terminated mining process on server ${server.attributes.name}: PID ${miningProcess.pid}`);
                    })
                    .catch((error) => {
                      console.error(`Failed to terminate mining process on server ${server.attributes.name}: PID ${miningProcess.pid}: ${error}`);
                    });
                });
              }
            })
            .catch((error) => {
              console.error(`Failed to get server utilization for ${server.attributes.name}: ${error}`);
            });
        });
      })
      .catch((error) => {
        console.error(`Failed to get server list: ${error}`);
      });
  });
};
