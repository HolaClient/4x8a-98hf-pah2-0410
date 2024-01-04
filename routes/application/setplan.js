module.exports.load = async function (app, db) {
    app.post("/api/package/set", async (req, res) => {
        const apiKey = req.headers.authorization;
      
        if (!apiKey) {
          return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
          return res.status(401).json({ status: 'error', message: 'Invalid API key' });
        }
      
        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
    
        if (typeof req.body.user !== "string") return res.send({ status: "missing email" });
    
        if (!(await db.get("users-" + req.body.user))) return res.send({ status: "invalid email" });
    
        if (typeof req.body.package !== "string") {
          await db.delete("package-" + req.body.user);
          return res.send({ status: "success" });
        } else {
          if (!settings.packages.list[req.body.package]) return res.send({ status: "invalid package" });
          await db.set("package-" + req.body.user, req.body.package);
          api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Changed the plan of user ${req.body.user} to ${req.body.package}`, req.method);
          api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Changed the plan of user ${req.body.user} to ${req.body.package}`, req.method);
          return res.send({ status: "success" });
        }
      });
};