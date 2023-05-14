const indexjs = require("../index.js");
const fs = require("fs");

module.exports.load = async function(app, db) {
  app.get("/coupon_redeem", async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login");

    let theme = indexjs.get(req);

    let code = req.query.code;

    if (!code) return res.redirect(theme.settings.redirect.missingorinvalidcouponcode + "?err=MISSINGCOUPONCODE");

    let couponinfo = await db.get("coupon-" + code);

    /*
    {
      ram: x,
      disk: x,
      cpu: x,
      servers: x,
      coins: x
    }
    */

    if (!couponinfo) return res.redirect(theme.settings.redirect.missingorinvalidcouponcode + "?err=INVALIDCOUPONCODE");

    await db.delete("coupon-" + code);

    //

    let extra = await db.get("extra-" + req.session.userinfo.id) || {
      ram: 0,
      disk: 0,
      cpu: 0,
      servers: 0
    };

    if (couponinfo.ram) extra.ram = extra.ram + couponinfo.ram;
    if (couponinfo.disk) extra.disk = extra.disk + couponinfo.disk;
    if (couponinfo.cpu) extra.cpu = extra.cpu + couponinfo.cpu;
    if (couponinfo.servers) extra.servers = extra.servers + couponinfo.servers;

    if (extra.ram > 999999999999999) extra.ram = 999999999999999;
    if (extra.disk > 999999999999999) extra.disk = 999999999999999;
    if (extra.cpu > 999999999999999) extra.cpu = 999999999999999;
    if (extra.servers > 999999999999999) extra.servers = 999999999999999;

    await db.set("extra-" + req.session.userinfo.id, extra);

    //

    let coins = await db.get("coins-" + req.session.userinfo.id) || 0;
    coins = coins + couponinfo.coins;
    await db.set("coins-" + req.session.userinfo.id, coins);

    res.redirect(theme.settings.redirect.successfullyredeemedcoupon + "?err=SUCCESSCOUPONCODE");

    let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());

  });
}

function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}
