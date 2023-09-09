const adminjs = require("../admin/admin.js");
const log = require('../handlers/webhook.js')

module.exports.load = async function(app, db) {
  function createRoute(routeName, resourceKey, resourceDisplayName, costKey, perKey, limitKey) {
    app.post(routeName, async (req, res) => {
      if (settings) {
        let amount = req.body.amount;
        if (!amount) return res.json({ "success": false, "message": alerts.MISSINGAMOUNT });
        amount = parseFloat(amount);
        if (isNaN(amount)) return res.json({ "success": false, "message": alerts.INVALIDINTEGER });
        if (amount < 0) return res.json({ "success": false, "message": alerts.NEGATIVENUMBER });
        if (amount === 0) return res.json({ "success": false, "message": alerts.ZERONUMBER });
        if (amount < 1 || amount > 10);
        let usercoins = await db.get("coins-" + req.session.userinfo.hcid);
        usercoins = usercoins ? usercoins : 0;
        let resourceCap = await db.get(`${resourceKey}-${req.session.userinfo.hcid}`);
        resourceCap = resourceCap ? resourceCap : 0;
        let per = settings.coins.store[resourceKey][perKey] * amount;
        let cost = settings.coins.store[resourceKey].cost * amount;
        if (usercoins < cost) return res.json({ "success": false, "message": alerts.CANTAFFORD });
        let newusercoins = usercoins - cost;
        let newResource = resourceCap + amount;
        if (newusercoins === 0) {
          await db.delete("coins-" + req.session.userinfo.hcid);
        } else {
          await db.set("coins-" + req.session.userinfo.hcid, newusercoins);
          await db.set(`${resourceKey}-${req.session.userinfo.hcid}`, newResource);
        }
        let extra = await db.get("extra-" + req.session.userinfo.hcid);
        extra = extra ? extra : {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0,
          databases: 0,
          backups: 0,
          allocations: 0
        };
        extra[resourceKey] = extra[resourceKey] + per;
  
        if (Object.values(extra).every(val => val === 0)) {
          await db.delete("extra-" + req.session.userinfo.hcid);
        } else {
          await db.set("extra-" + req.session.userinfo.hcid, extra);
        }
        adminjs.suspend(req.session.userinfo.hcid);

        log(`bought ${resourceKey}`, `${req.session.userinfo.username} bought ${per} ${resourceDisplayName} from the store for \`${cost}\` Credits.`)
        debuglog.c(`${req.session.userinfo.username} bought ${per} ${resourceDisplayName} from the store for ${cost} Credits.`)
  
        return res.json({ "success": true, "message": alerts.SUCCESS });
      } else {
        return res.json({ "success": false, "message": alerts.SETTINGSERROR });
      }
    });
  }
  
  createRoute("/buyram", "ram", "MB ram", "ram", "per", "cost");
  createRoute("/buydisk", "disk", "MB disk", "disk", "per", "cost");
  createRoute("/buycpu", "cpu", "% cpu", "cpu", "per", "cpu");
  createRoute("/buyservers", "servers", "Slots", "servers", "per", "cost");
  createRoute("/buydatabases", "databases", "databases", "databases", "per", "cost");
  createRoute("/buybackups", "backups", "backups", "backups", "per", "backups");
  createRoute("/buyallocations", "allocations", "allocations", "allocations", "per", "cost");
}
