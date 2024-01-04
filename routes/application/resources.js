module.exports.load = async function (app, db) {
    app.post("/api/resources/set", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
          return res.status(401).json({ status: 'error', message: 'Invalid API key' });
        }
      
        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
    
        if (!req.body.user) return res.send({ status: "missing user" });
    
        if (!(await db.get("users-" + req.body.user))) res.send({ status: "invalid user" });
    
        if (typeof req.body.ram == "number" || typeof req.body.disk == "number" || typeof req.body.cpu == "number" || typeof req.body.servers == "number" || typeof req.body.backups == "number" || typeof req.body.allocations == "number" || typeof req.body.databases == "number") {
          let ram = req.body.ram;
          let disk = req.body.disk;
          let cpu = req.body.cpu;
          let servers = req.body.servers;
          let backups = req.body.backups;
          let allocations = req.body.allocations;
          let databases = req.body.databases;
    
          let currentextra = await db.get("extra-" + req.body.user);
          let extra;
    
          if (typeof currentextra == "object") {
            extra = currentextra;
          } else {
            extra = {
              ram: 0,
              disk: 0,
              cpu: 0,
              servers: 0,
              backups: 0,
              allocations: 0,
              databases: 0
            }
          }
    
          if (typeof ram == "number") {
            if (ram < 0 || ram > 999999999999999) {
              return res.send({ status: "ram size" });
            }
            extra.ram = ram;
          }
    
          if (typeof disk == "number") {
            if (disk < 0 || disk > 999999999999999) {
              return res.send({ status: "disk size" });
            }
            extra.disk = disk;
          }
    
          if (typeof cpu == "number") {
            if (cpu < 0 || cpu > 999999999999999) {
              return res.send({ status: "cpu size" });
            }
            extra.cpu = cpu;
          }
    
          if (typeof servers == "number") {
            if (servers < 0 || servers > 999999999999999) {
              return res.send({ status: "server size" });
            }
            extra.servers = servers;
          }
    
          if (typeof backups == "number") {
            if (backups < 0 || backups > 999999999999999) {
              return res.send({ status: "backup size" });
            }
            extra.backups = backups;
          }
    
          if (typeof allocations == "number") {
            if (allocations < 0 || allocations > 999999999999999) {
              return res.send({ status: "allocations size" });
            }
            extra.allocations = allocations;
          }
    
          if (typeof databases == "number") {
            if (databases < 0 || databases > 999999999999999) {
              return res.send({ status: "databases size" });
            }
            extra.databases = databases;
          }
    
          if (extra.ram == 0 && extra.disk == 0 && extra.cpu == 0 && extra.servers == 0 && extra.backups == 0 && extra.allocations == 0 && extra.databases == 0) {
            await db.delete("extra-" + req.body.user);
          } else {
            await db.set("extra-" + req.body.user, extra);
          }
    
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Changed the resources of ${req.body.user}`, req.method);
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Changed the resources of ${req.body.user}`, req.method);
          return res.send({ status: "success" });
        } else {
          res.send({ status: "missing variables" });
        }
      });
};