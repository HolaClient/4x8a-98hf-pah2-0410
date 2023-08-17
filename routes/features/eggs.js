const settings = require("../../settings.json");
const fetch = require("node-fetch");
const fs = require("fs");

module.exports.load = async function (app, db) {
  app.get("/api/nests", async (req, res) => {
    try {
      const nestsResponse = await fetch(
        `${settings.pterodactyl.domain}/api/application/nests`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${settings.pterodactyl.key}`,
            Accept: "application/json",
          },
        }
      );

      const nestsData = await nestsResponse.json();

      res.json({ nests: nestsData.data });
    } catch (error) {
      console.error("Error fetching nests:", error);
      res.status(500).json({ error: "Failed to fetch nests" });
    }
  });

  app.get("/api/nests/:nestId/eggs", async (req, res) => {
    try {
      const { nestId } = req.params;

      const eggsResponse = await fetch(
        `${settings.pterodactyl.domain}/api/application/nests/${nestId}/eggs`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${settings.pterodactyl.key}`,
            Accept: "application/json",
          },
        }
      );

      const eggsData = await eggsResponse.json();

      res.json({ eggs: eggsData.data });
    } catch (error) {
      console.error("Error fetching eggs:", error);
      res.status(500).json({ error: "Failed to fetch eggs" });
    }
  });

  app.get("/api/nests/:nestId/eggs/:eggId", async (req, res) => {
    try {
      const { nestId, eggId } = req.params;

      const eggsResponse = await fetch(
        `${settings.pterodactyl.domain}/api/application/nests/${nestId}/eggs/${eggId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${settings.pterodactyl.key}`,
            Accept: "application/json",
          },
        }
      );

      if (eggsResponse.ok) {
        const eggsData = await eggsResponse.json();
        res.json({ eggs: eggsData.attributes });
      } else {
        console.error("Failed to fetch eggs:", eggsResponse.status);
        res.status(500).json({ error: "Failed to fetch eggs" });
      }
    } catch (error) {
      console.error("Error fetching eggs:", error);
      res.status(500).json({ error: "Failed to fetch eggs" });
    }
  });

  app.post("/api/settings", async (req, res) => {
    try {
      const { nestId, eggId } = req.body;

      console.log("Adding Egg With ID:", eggId);

      const eggResponse = await fetch(
        `${settings.pterodactyl.domain}/api/application/nests/${nestId}/eggs/${eggId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${settings.pterodactyl.key}`,
            Accept: "application/json",
          },
        }
      );

      if (eggResponse.ok) {
        const eggData = await eggResponse.json();
        const eggDetails = eggData.attributes;
        const settingsData = JSON.parse(
          fs.readFileSync("./settings.json").toString()
        );

        if (!settingsData.api.client.eggs[eggId]) {
          const newEgg = {
            display: eggDetails.name,
            banner:
              "https://media.discordapp.net/attachments/1108054221456146534/1119198262885351564/bc270c23058d513de5124ffea6bf9199af7a2370.png",
            minimum: {
              ram: 256,
              disk: 256,
              cpu: 20,
            },
            maximum: {
              ram: null,
              disk: null,
              cpu: null,
            },
            info: {
              egg: eggDetails.id,
              docker_image: eggDetails.docker_image,
              startup: eggDetails.startup,
              environment: {},
              feature_limits: {
                databases: 0,
                backups: 0,
              },
            },
          };

          // Add environment variables specific to each egg
          if (eggDetails.name === "Paper") {
            newEgg.info.environment = {
              SERVER_JARFILE: "server.jar",
              MINECRAFT_VERSION: "latest",
              BUILD_NUMBER: "latest",
            };
          } else if (eggDetails.name === "Vanilla Minecraft") {
            newEgg.info.environment = {
              SERVER_JARFILE: "server.jar",
              VANILLA_VERSION: "latest",
            };
          } else if (eggDetails.name === "Forge Minecraft") {
            newEgg.info.environment = {
              SERVER_JARFILE: "server.jar",
              MC_VERSION: "latest",
              BUILD_TYPE: "recommended",
            };
          } else if (eggDetails.name === "PocketmineMP") {
            newEgg.info.environment = {
              SERVER_JARFILE: "PocketMine-MP.phar",
              VERSION: "PM5",
            };
          } else if (eggDetails.name === "Bungeecord") {
            newEgg.info.environment = {
              SERVER_JARFILE: "bungeecord.jar",
              BUNGEE_VERSION: "latest",
            };
          } else if (eggDetails.name === "Garrys Mod") {
            newEgg.info.environment = {
              SRCDS_MAP: "gm_flatgrass",
              GAMEMODE: "4020",
              SRCDS_APPID: "sandbox",
              MAX_PLAYERS: "32",
              TICKRATE: "32",
              LUA_REFRESH: "0",
            };
          } else if (eggDetails.name === "Ark: Survival Evolved") {
            newEgg.info.environment = {
              ARK_ADMIN_PASSWORD: "Password",
              SERVER_MAP: "TheIsland",
              SESSION_NAME: "A Pterodactyl Hosted ARK Server",
              RCON_PORT: "27020",
              QUERY_PORT: "27015",
              AUTO_UPDATE: "0",
              BATTLE_EYE: "1",
              SRCDS_APPID: "376030",
            };
          } else if (eggDetails.name === "Counter-Strike: Global Offensive") {
            newEgg.info.environment = {
              SRCDS_MAP: "de_dust2",
              STEAM_ACC: "EDIT",
              SRCDS_APPID: "740",
            };
          } else if (eggDetails.name === "Insurgency") {
            newEgg.info.environment = {
              SRCDS_MAP: "sinjar",
              SRCDS_APPID: "237410",
            };
          } else if (eggDetails.name === "Team Fortress 2") {
            newEgg.info.environment = {
              SRCDS_MAP: "cp_dustbowl",
              SRCDS_APPID: "232250",
              STEAM_ACC: "EDIT",
            };
          }

          settingsData.api.client.eggs[eggId] = newEgg;
        }

        console.log(
          `${req.session.userinfo.username} added an egg named ${eggDetails.name}`
        );
        fs.writeFileSync(
          "./settings.json",
          JSON.stringify(settingsData, null, 2)
        );
        res.json({ success: true });
      } else {
        console.error("Failed to fetch egg details:", eggResponse.status);
        res.status(500).json({ error: "Failed to fetch egg details" });
      }
    } catch (error) {
      console.error("Error updating settings:", error);
      res.status(500).json({ error: "Failed to update settings" });
    }
  });
};
