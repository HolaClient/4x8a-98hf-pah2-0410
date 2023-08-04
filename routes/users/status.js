const settings = require("../../settings");
const fetch = require('node-fetch');

module.exports.load = async function(app, db) {
  app.get("/api/nodes/status", async (req, res) => {
    const node = [];

    const nodeStats = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(settings.pterodactyl.domain + "/api/application/nodes", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${settings.pterodactyl.key}`,
          },
        });
        const json = await response.json();

        const promises = json.data.map(async (data) => {
          const body = {
            id: data.attributes.id,
            name: data.attributes.name,
            memory: data.attributes.memory,
            disk: data.attributes.disk,
          };

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
              body.status = "offline";
            } else {
              body.status = "online";
            }
          } catch (error) {
            body.status = "offline";
          }

          return body;
        });

        const nodes = await Promise.all(promises);
        node.push(...nodes.filter((node) => !node.name.includes("[HCNO]")));

        resolve();
      } catch (error) {
        reject(error);
      }
    });

    nodeStats
      .then(() => {
        res.send(node);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch node statuses" });
      });
  });
};
