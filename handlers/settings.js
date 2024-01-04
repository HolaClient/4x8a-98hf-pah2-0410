const fs = require("fs");
const config = require("../config.json");
const yaml = require('js-yaml');

module.exports = {
    settings: () => {
        if (config.settings.format == "YML") {
            const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'));
            return settings;
        } else if (config.settings.format == "JSON" || config.settings.format == "") {
            const settingsPath = "./settings.json";
            const existingSettings = JSON.parse(fs.readFileSync(settingsPath));

            if (existingSettings.website.secret === "GENERATE") {
                const randomKey = printRand(16);
                existingSettings.website.secret = randomKey;
            }

            if (existingSettings.api.key === "GENERATE") {
                const randomKey = printRand(32);
                existingSettings.api.key = "hcla_" + randomKey;
            }

            fs.writeFileSync(settingsPath, JSON.stringify(existingSettings, null, 2));

            return existingSettings;
        }
    }
}

function printRand(length) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }
    return key;
}
