module.exports.load = async function (app, db) {
    app.post("/api/coupons/create", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
          return res.status(401).json({ status: 'error', message: 'Invalid API key' });
        }
      
        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
    
        let code = typeof req.body.code == "string" ? req.body.code.slice(0, 200) : Math.random().toString(36).substring(2, 15);
    
        if (!code.match(/^[a-z0-9]+$/i)) return res.json({ status: "illegal characters" });
    
        let coins = typeof req.body.coins == "number" ? req.body.coins : 0;
        let ram = typeof req.body.ram == "number" ? req.body.ram : 0;
        let disk = typeof req.body.disk == "number" ? req.body.disk : 0;
        let cpu = typeof req.body.cpu == "number" ? req.body.cpu : 0;
        let servers = typeof req.body.servers == "number" ? req.body.servers : 0;
        let backups = typeof req.body.backups == "number" ? req.body.backups : 0;
        let allocations = typeof req.body.allocations == "number" ? req.body.allocations : 0;
        let databases = typeof req.body.databases == "number" ? req.body.databases : 0;
        let uses = typeof req.body.uses == "number" ? req.body.uses : 0;
        if (!uses) return res.json({ status: "uses field is required, body.uses" });
    
        if (coins < 0) return res.json({ status: "coins is less than 0" });
        if (ram < 0) return res.json({ status: "ram is less than 0" });
        if (disk < 0) return res.json({ status: "disk is less than 0" });
        if (cpu < 0) return res.json({ status: "cpu is less than 0" });
        if (servers < 0) return res.json({ status: "servers is less than 0" });
        if (backups < 0) return res.json({ status: "backups is less than 0" });
        if (allocations < 0) return res.json({ status: "allocations is less than 0" });
        if (databases < 0) return res.json({ status: "databases is less than 0" });
    
        if (!coins && !ram && !disk && !cpu && !servers && !backups && !allocations && !databases) return res.json({ status: "cannot create empty coupon" });
    
        await db.set("coupon-" + code, {
          coins: coins,
          ram: ram,
          disk: disk,
          cpu: cpu,
          servers: servers,
          backups: backups,
          allocations: allocations,
          databases: databases,
          uses: uses
        });
    
        api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Created a coupon with code ${code}`, req.method);
        api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Created a coupon with code ${code}`, req.method);
        return res.json({ status: "success", code: code });
    });

    app.get("/api/coupons/revoke/:code", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
          return res.status(401).json({ status: 'error', message: 'Invalid API key' });
        }
          
        let code = req.params.code;
    
        if (!code) return res.json({ status: "Missing code" });
    
        if (!code.match(/^[a-z0-9]+$/i)) return res.json({ status: "invalid code" });
    
        if (!(await db.get("coupon-" + code))) return res.json({ status: "invalid code" });
    
        await db.delete("coupon-" + code);
    
        api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Revoked a coupon with code ${code}`, req.method);
        api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Revoked a coupon with code ${code}`, req.method);
        res.json({ status: "success" })
    });

    app.get("/api/coupons", async (req, res) => {
      const apiKey = req.headers.authorization;
    
      if (!apiKey) {
        return res.status(401).json({ status: "error", message: "Missing API key" });
      }
      if (apiKey !== settings.api.key) {
        return res.status(401).json({ status: 'error', message: 'Invalid API key' });
      }
    
      let coupons = await db.get("coupons") ? await db.get("coupons") : [];
  
      api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Revoked a coupon with code ${code}`, req.method);
      api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Revoked a coupon with code ${code}`, req.method);
      res.json({ status: "success", "coupons": coupons })
    });
};