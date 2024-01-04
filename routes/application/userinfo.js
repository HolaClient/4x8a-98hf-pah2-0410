const fetch = require('node-fetch');

module.exports.load = async function (app, db) {
    app.get("/api/userinfo/:user", async (req, res) => {
        const apiKey = req.headers.authorization;
    
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
          return res.status(401).json({ status: 'error', message: 'Invalid API key' });
        }
        if (!req.params.user) {
          return res.status(400).json({ status: "error", message: "Missing user" });
        }
        if (!await db.get("users-" + req.params.user)) {
          return res.status(400).json({ status: "error", message: "Invalid user" });
        }
      
        let packagename = await db.get("package-" + req.params.user);
        let package = settings.packages.list[packagename ? packagename : settings.packages.default];
        if (!package) {
          package = {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0,
            backups: 0,
            allocations: 0,
            databases: 0,
            name: packagename,
          };
        }
        let pterodactylid = await db.get("users-" + req.params.user);
        try {
          let userinforeq = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + pterodactylid + "?include=servers",
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
          );
          const userinfo = await userinforeq.json();  
          const uinfo = await db.get("userinfo-" + req.params.user);
          res.json({
            status: "success",
            package: package,
            extra: await db.get("extra-" + req.params.user) ? await db.get("extra-" + req.params.user) : {
              ram: 0,
              disk: 0,
              cpu: 0,
              servers: 0,
              databases: 0,
              backups: 0,
              allocations: 0
            },
            pterodactyl: userinfo,
            userinfo: uinfo,
            coins: settings.coins.enabled == true ? (await db.get("coins-" + req.params.user) ? await db.get("coins-" + req.params.user) : 0) : null
          });
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched userinfo of ${userinfo.attributes.username}`, req.method)
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched userinfo of ${userinfo.attributes.username}`, req.method)
        } catch (error) {
          console.error("[WEBSITE] An error occurred during the fetch request:", error);
          return res.status(500).json({ status: "error", message: "An error occurred during the fetch request", error: error });
        }
      });
};