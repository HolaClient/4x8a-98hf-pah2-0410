const express = require('express');
const app = express();
const fs = require('fs');

module.exports.load = async function(app, db) {
  app.use(express.json());

  app.post('/update-appearance', (req, res) => {
    try {
      const nameValue = req.body.name;
      const logoValue = req.body.logo;
      const rotateValue = req.body.rotate;
      const backgroundValue = req.body.background;
  
      const settingsFilePath = 'settings.json';
      const settings = JSON.parse(fs.readFileSync(settingsFilePath));
  
      settings.name = nameValue;
      settings.logo = logoValue;
      settings.rotatelogo = rotateValue;
      settings.background = backgroundValue;
      settings.defaulttheme = themeValue;
  
      fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
  
      res.send('Setting updated successfully');
    } catch (error) {
      console.error('Error updating settings:', error);
      res.status(500).send('Failed to update settings');
    }
  });
  app.post('/update-pterodactyl', (req, res) => {
    try {
      const domain = req.body.domain;
      const key = req.body.key;
  
      const settingsFilePath = 'settings.json';
      const settings = JSON.parse(fs.readFileSync(settingsFilePath));
  
      settings.pterodactyl.domain = domain
      settings.pterodactyl.key = key
  
      fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
  
      res.send('Setting updated successfully');
    } catch (error) {
      console.error('Error updating settings:', error);
      res.status(500).send('Failed to update settings');
    }
  });
}
