const express = require('express');
const app = express();
const fs = require('fs');
const exec = require('child_process').exec;

module.exports.load = async function(app, db) {
app.use(express.json());

app.post('/setup', (req, res) => {
  const nameValue = req.body.name;
  const logoValue = req.body.logo;
  const discordValue = req.body.discord;
  const websiteValue = req.body.website;
  const domainValue = req.body.domain;
  const keyValue = req.body.key;
  const idValue = req.body.id;
  const secretValue = req.body.secret;
  const linkValue = req.body.link;
  const ramValue = req.body.ram;
  const diskValue = req.body.disk;
  const cpuValue = req.body.cpu;
  const slotValue = req.body.slot;
  
  const settings = JSON.parse(fs.readFileSync('./databases/settings.json'));
  settings.name = nameValue;
  settings.logo = logoValue;
  settings.discord = discordValue;
  settings.website = websiteValue;
  settings.pterodactyl.domain = domainValue;
  settings.pterodactyl.key = keyValue;
  settings.api.client.oauth2.id = idValue;
  settings.api.client.oauth2.secret = secretValue;
  settings.api.client.oauth2.link = linkValue;
  settings.api.client.packages.list.default.ram = ramValue;
  settings.api.client.packages.list.default.disk = diskValue;
  settings.api.client.packages.list.default.cpu = cpuValue;
  settings.api.client.packages.list.default.servers = slotValue;
  fs.writeFileSync('./databases/settings.json', JSON.stringify(settings));
  const path = 'databases/install.txt';
  const installed = 'installed = true';
  fs.writeFileSync(path, installed);
  exec('npm restart');
  process.exit()
});
}