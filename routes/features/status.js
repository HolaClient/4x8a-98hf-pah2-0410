const fetch = require('node-fetch');
const Keyv = require('keyv');
const stdb = new Keyv('sqlite://storage/databases/nodes.sqlite');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 2,
  message: "Too many requests, please try again later.",
});

module.exports.load = async function (app, db) {
  const fetchAndSaveNodeStatuses = async () => {
    const node = [];

    const nodeStats = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(settings.pterodactyl.domain + "/api/application/nodes?include=servers", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${settings.pterodactyl.key}`,
          },
        });
        const json = await response.json();

        const promises = json.data.map(async (data) => {
          const servers = data.attributes.relationships.servers.data;

          const serverData = servers.map(server => {
            return {
              id: server.id,
              name: server.attributes.name,
              memory: server.attributes.limits.memory,
              disk: server.attributes.limits.disk,
            };
          });

          const usedMemory = serverData.reduce((totalMemory, server) => totalMemory + server.memory, 0);
          const usedDisk = serverData.reduce((totalDisk, server) => totalDisk + server.disk, 0);

          const healthResponses = await Promise.all(servers.map(async (server) => {
            try {
              const healthResponse = await fetch(
                "https://" + data.attributes.fqdn + ":" + data.attributes.daemon_listen + "/health",
                {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${settings.pterodactyl.key}`,
                  },
                }
              );

              if (healthResponse.status >= 500 && healthResponse.status <= 599) {
                return "offline";
              } else {
                return "online";
              }
            } catch (error) {
              return "offline";
            }
          }));

          const status = healthResponses.includes("online") ? "online" : "offline";

          const body = {
            id: data.attributes.id,
            name: data.attributes.name,
            memory: parseFloat(data.attributes.memory).toFixed(0),
            disk: parseFloat(data.attributes.disk).toFixed(0),
            usedMemory: parseFloat(usedMemory).toFixed(0),
            usedDisk: parseFloat(usedDisk).toFixed(0),
            status: status,
          };
          

          return body;
        });

        const nodes = await Promise.all(promises);
        node.push(...nodes.filter((node) => !node.name.includes("HCNO")));

        resolve();
      } catch (error) {
        reject(error);
      }
    });

    nodeStats
      .then(() => {
        stdb.set('nodeStatuses', node)
          .catch((error) => {
            console.error('Failed to save node statuses to the database:', error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  fetchAndSaveNodeStatuses();

  const updateInterval = 10 * 60 * 1000;
  setInterval(fetchAndSaveNodeStatuses, updateInterval);

  app.get("/status/nodes", async (req, res) => {
    try {
      const nodeStatuses = await stdb.get('nodeStatuses');
      if (!nodeStatuses) {
        return res.status(404).json({ error: "Node statuses not found." });
      }

      res.json(nodeStatuses);
    } catch (error) {
      console.error('Failed to retrieve node statuses:', error);
      res.status(500).json({ error: "Failed to retrieve node statuses." });
    }
  });

  app.get("/status/nodes/refresh", limiter, (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login")
    if (req.session.pterodactyl.root_admin !== true) return res.json({ "success": false, "message": alerts.NOTANADMIN });
    fetchAndSaveNodeStatuses();
    res.status(200).json({ message: "Node statuses refresh triggered." });
  });
};
