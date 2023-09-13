module.exports.load = async function (app, db) {
    app.get('/api/package/:user', async (req, res) => {
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
        try {
          const user = req.params.user;
          const packagename = await db.get("package-" + user);
          const packageList = settings.packages.list;
          const defaultPackage = settings.packages.default;
          const packageName = packagename ? packageList[packagename].name : packageList[defaultPackage].name;
      
          res.json({ status: "success", package: packageName });
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched package name of ${user}`, req.method)
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Fetched package name of ${user}`, req.method)
        } catch (error) {
          console.error("Failed to fetch package information:", error);
          res.status(500).json({ error: "Failed to fetch package information" });
        }
      });
};