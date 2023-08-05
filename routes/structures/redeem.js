const indexjs = require("../../index.js");
const fs = require("fs");

module.exports.load = async function(app, db) {
  app.get("/coupon_redeem", async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/auth");

    let theme = indexjs.get(req);

    let code = req.query.code;

    if (!code) return res.redirect(theme.settings.redirect.missingorinvalidcouponcode + "?err=MISSINGCOUPONCODE");

    let couponinfo = await db.get("coupon-" + code);

    if (!couponinfo) return res.redirect(theme.settings.redirect.missingorinvalidcouponcode + "?err=INVALIDCOUPONCODE");

    await db.delete("coupon-" + code);

    let extra = await db.get("extra-" + req.session.userinfo.email) || {
      ram: 0,
      disk: 0,
      cpu: 0,
      servers: 0,
      databases: 0,
      backups: 0,
      allocations: 0
    };

    if (couponinfo.ram) extra.ram = extra.ram + couponinfo.ram;
    if (couponinfo.disk) extra.disk = extra.disk + couponinfo.disk;
    if (couponinfo.cpu) extra.cpu = extra.cpu + couponinfo.cpu;
    if (couponinfo.servers) extra.servers = extra.servers + couponinfo.servers;
    if (couponinfo.backups) extra.backups = extra.backups + couponinfo.backups;
    if (couponinfo.databases) extra.databases = extra.databases + couponinfo.databases;
    if (couponinfo.allocations) extra.allocations = extra.allocations + couponinfo.allocations;

    if (extra.ram > 999999999999999) extra.ram = 999999999999999;
    if (extra.disk > 999999999999999) extra.disk = 999999999999999;
    if (extra.cpu > 999999999999999) extra.cpu = 999999999999999;
    if (extra.servers > 999999999999999) extra.servers = 999999999999999;
    if (extra.backups > 999999999999999) extra.backups = 999999999999999;
    if (extra.databases > 999999999999999) extra.databases = 999999999999999;
    if (extra.allocations > 999999999999999) extra.allocations = 999999999999999;

    await db.set("extra-" + req.session.userinfo.email, extra);

    let coins = await db.get("coins-" + req.session.userinfo.email) || 0;
    coins = coins + couponinfo.coins;
    await db.set("coins-" + req.session.userinfo.email, coins);

    res.redirect(theme.settings.redirect.successfullyredeemedcoupon + "?err=SUCCESSCOUPONCODE");

    let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());

  });
}

function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}
