const PingMonitor = require('ping-monitor');
const express = require('express');
const fetch = require('node-fetch');
const sqlite3 = require('sqlite3').verbose();
const log = require('../handlers/log');

module.exports.load = async function (app) {
  const settings = require('../../settings.json');
  const websites = [
    {
      name: `Panel`,
      url: `${settings.api.client.oauth2.link}`,
      interval: 30000,
    },
    {
      name: `Client`,
      url: `${settings.pterodactyl.domain}`,
      interval: 30000,
    },
  ];

  const monitors = [];
  const db = new sqlite3.Database('database/uptime.db');

  db.run(`
    CREATE TABLE IF NOT EXISTS uptime_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT,
      timestamp DATETIME,
      status TEXT
    )
  `);

  function saveUptime(url, status) {
    const timestamp = new Date().toISOString();

    db.run(
      'INSERT INTO uptime_history (url, timestamp, status) VALUES (?, ?, ?)',
      [url, timestamp, status],
      (error) => {
        if (error) {
          console.error(`Error saving uptime status for ${url}:`, error);
        } else {
          console.log(`Saved uptime status for ${url}: ${status}`);
        }
      }
    );
  }

  websites.forEach((website) => {
    const monitor = new PingMonitor({
      name: website.name,
      website: website.url,
      interval: website.interval,
    });

    monitor.on('up', (res) => {
      saveUptime(website.url, 'online');
    });

    monitor.on('down', (res) => {
      saveUptime(website.url, 'offline');
      log('status', `${website.name} went offline!`);
    });

    monitors.push(monitor);
  });

  monitors.forEach((monitor) => {
    monitor.start();
  });

  app.get('/status', async (req, res) => {
    const query = `
      SELECT url, MAX(timestamp) AS timestamp, status
      FROM uptime_history
      GROUP BY url
    `;
    db.all(query, (error, rows) => {
      if (error) {
        console.error(`Error retrieving uptime status:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const status = rows.map((row) => ({
        name: websites.find((website) => website.url === row.url).name,
        website: row.url,
        isUp: row.status === 'online',
        lastChecked: row.timestamp,
      }));

      res.json(status);
    });
  });
};
