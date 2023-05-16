const express = require('express');
const app = express();
const fs = require('fs');

module.exports.load = async function(app, db) {
app.use(express.json());

app.post('/update-appearance', (req, res) => {
  const nameValue = req.body.name;
  const logoValue = req.body.logo;
  const rotateValue = req.body.rotate;
  const backgroundValue = req.body.background;
  const themeValue = req.body.theme;
  const settings = JSON.parse(fs.readFileSync('settings.json'));
  settings.name = nameValue;
  settings.logo = logoValue;
  settings.rotatelogo = rotateValue;
  settings.background = backgroundValue;
  settings.defaulttheme = themeValue;
  fs.writeFileSync('settings.json', JSON.stringify(settings));
  res.send('Setting updated successfully');
});
}