const fs = require("fs");

module.exports.load = async function (app, db) {
  app.post("/update-brand", (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/auth");
    try {
      const nameValue = req.body.name;
      const logoValue = req.body.logo;
      const settingsFilePath = "settings.json";
      const settings = JSON.parse(fs.readFileSync(settingsFilePath));

      settings.name = nameValue;
      settings.logo.url = logoValue;

      fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));

      res.send("Setting updated successfully");
    } catch (error) {
      console.error("Error updating settings:", error);
      res.status(500).send("Failed to update settings");
    }
  });
  app.post("/update-pterodactyl", (req, res) => {
    try {
      const domain = req.body.domain;
      const key = req.body.key;

      const settingsFilePath = "settings.json";
      const settings = JSON.parse(fs.readFileSync(settingsFilePath));

      settings.pterodactyl.domain = domain;
      settings.pterodactyl.key = key;

      fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));

      res.send("Setting updated successfully");
    } catch (error) {
      console.error("Error updating settings:", error);
      res.status(500).send("Failed to update settings");
    }
  });
};
