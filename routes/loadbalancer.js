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
  const websiteValue = req.body.website;
  const settings = JSON.parse(fs.readFileSync('./databases/settings.json'));
  settings.name = nameValue;
  settings.logo = logoValue;
  settings.rotatelogo = rotateValue;
  settings.background = backgroundValue;
  settings.defaulttheme = themeValue;
  settings.website = websiteValue;
  fs.writeFileSync('./databases/settings.json', JSON.stringify(settings));
  res.redirect('?err=SUCCESS');
});

app.post('/update-purger', (req, res) => {
  const purgerenabled = req.body.purgerenabled;
  const keyword = req.body.keyword;
  const settings = JSON.parse(fs.readFileSync('./databases/settings.json'));
  settings.purger.enabled = purgerenabled;
  settings.purger.keyword = keyword;
  fs.writeFileSync('./databases/settings.json', JSON.stringify(settings));
  res.redirect('?err=SUCCESS');
});

app.post('/update-news', (req, res) => {
  const newsenabled = req.body.newsenabled;
  const news = req.body.news;
  const settings = JSON.parse(fs.readFileSync('./databases/settings.json'));
  settings.news.enabled = newsenabled;
  settings.news.content = news;
  fs.writeFileSync('./databases/settings.json', JSON.stringify(settings));
  res.redirect('?err=SUCCESS');
});

app.post('/update-oauth', (req, res) => {
  const id = req.body.id;
  const secret = req.body.secret;
  const link = req.body.link;
  const vpn = req.body.vpn;
  const settings = JSON.parse(fs.readFileSync('./databases/settings.json'));
  settings.api.client.oauth2.id = id;
  settings.api.client.oauth2.secret = secret;
  settings.api.client.oauth2.link = link;
  settings.api.client.oauth2.ip["trust x-forwarded-for"] = vpn;
  fs.writeFileSync('./databases/settings.json', JSON.stringify(settings));
  res.redirect('?err=SUCCESS');
});
}