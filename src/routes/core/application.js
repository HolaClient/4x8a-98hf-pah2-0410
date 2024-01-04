/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * application.js - Onboarding manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const cors = require('cors')
module.exports.load = async function (app, db) {
    app.use(cors());

    app.get("/api", async (req, res) => {
        if (settings.api.enabled === true) {
            return res.json({
                status: "enabled",
            });
        } else {
            return res.status(404).json({
                status: "disabled",
            });
        }
    });

    app.get("/api/version", async (req, res) => {
        try {
          const response = await fetch("https://api.github.com/repos/HolaClient/HolaClient/releases/latest");
          if (!response.ok) {
            throw new Error("Failed to fetch GitHub data");
          }
          
          const json = await response.json();
          res.json({
            latest: json.name,
            current: `v${settings.version}`
          });
        } catch (error) {
          console.error("Error fetching GitHub data:", error.message);
          res.status(500).json({
            error: "Failed to fetch GitHub data",
          });
        }
      });

    app.get("/api/core/coins", async (req, res) => {
        const users = await db.get('users', 'users');
        let coins = [];
        for (let user of Object.values(users)) {
            const userCoins = await db.get('coins', user);
            coins = coins.concat(userCoins);
        }
        res.json(coins);
    });
};