const adminjs = require("../admin/admin.js");
const log = require('../handlers/webhook.js')

module.exports.load = async function(app, db) {
  function createRoute(routeName, resourceKey, resourceDisplayName, costKey, perKey) {
    app.post(routeName, async (req, res) => {
      if (!settings) {return;}
      const { amount } = req.body;
      if (!amount) return res.json({ "success": false, "message": alerts.MISSINGAMOUNT });  
      const usercoins = await db.get("coins-" + req.session.userinfo.hcid) || 0;
      const resourceCap = await db.get(resourceKey + "-" + req.session.userinfo.hcid) || 0;
      if (resourceCap < amount) return res.json({ "success": false, "message": alerts.INSUFFICIENT });
      const storeConfig = settings.coins.blackmart[costKey];
      const per = storeConfig[perKey] * amount;
      const cost = storeConfig.cost * amount;
      const newusercoins = usercoins + cost;
      const newResourceCap = resourceCap - amount;
  
      if (newusercoins === 0) {
        await db.delete("coins-" + req.session.userinfo.hcid);
        await db.set(resourceKey + "-" + req.session.userinfo.hcid, newResourceCap);
      } else {
        await db.set("coins-" + req.session.userinfo.hcid, newusercoins);
        await db.set(resourceKey + "-" + req.session.userinfo.hcid, newResourceCap);
      }
  
      const extra = (await db.get("extra-" + req.session.userinfo.hcid)) || {
        ram: 0,
        disk: 0,
        cpu: 0,
        servers: 0,
        databases: 0,
        backups: 0,
        allocations: 0
      };
  
      extra[resourceKey] = extra[resourceKey] - per;
  
      if (Object.values(extra).every(val => val === 0)) {
        await db.delete("extra-" + req.session.userinfo.hcid);
      } else {
        await db.set("extra-" + req.session.userinfo.hcid, extra);
      }
  
      adminjs.suspend(req.session.userinfo.hcid);
  
      log(`sold ${resourceKey}`, `${req.session.userinfo.username} sold ${per} ${resourceDisplayName} to the store for ${cost} Credits.`);
      debuglog.c(`${req.session.userinfo.username} sold ${per} ${resourceDisplayName} to the store for ${cost} Credits.`);
  
      res.json({ "success": true, "message": alerts.SUCCESS });
    });
  }
  
  createRoute("/sellram", "ram", "Mb ram", "ram", "per");
  createRoute("/selldisk", "disk", "Mb disk", "disk", "per");
  createRoute("/sellcpu", "cpu", "% cpu", "cpu", "per");
  createRoute("/sellservers", "servers", "servers", "servers", "per");
  createRoute("/sellbackups", "backups", "backups", "backups", "per");
  createRoute("/sellallocations", "allocations", "allocations", "allocations", "per");
  createRoute("/selldatabases", "databases", "databases", "databases", "per");
}
