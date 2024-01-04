module.exports.load = async function(app, db) {
    app.get("/coupons/redeem/:code", async (req, res) => {
        try {
        if (!req.session.pterodactyl) return res.redirect("/auth");
        let code = req.params.code;
        if (!code) return res.json({ "success": false, "message": alerts.NOCOUPONCODE });
        let couponinfo = await db.get("coupon-" + code);
        if (!couponinfo) return res.json({ "success": false, "message": alerts.COULDNOTFINDCOUPON });
    
        let extra = await db.get("extra-" + req.session.userinfo.hcid) || {
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
    
        await db.set("extra-" + req.session.userinfo.hcid, extra);
    
        let coins = await db.get("coins-" + req.session.userinfo.hcid) || 0;
        coins = coins + couponinfo.coins;
        await db.set("coins-" + req.session.userinfo.hcid, coins);
        if (couponinfo.uses == "1") {
            await db.delete("coupon-" + code);
            let coupons = (await db.get("coupons")) || []
            coupons = coupons.filter((coupon) => coupon !== code);
            if (coupons.length === 0) {
                await db.delete("coupons");
            } else {
                await db.set("coupons", coupons);
            }
        } else {
            const newUses = parseInt(couponinfo.uses)-parseInt('1');
            couponDetail = {
                ram: couponinfo.ram,
                disk: couponinfo.disk,
                cpu: couponinfo.cpu,
                servers: couponinfo.servers,
                backups: couponinfo.backups,
                allocations: couponinfo.allocations,
                databases: couponinfo.databases,
                uses: newUses,
            }
            await db.set(`coupon-${code}`,couponDetail);
        }
        debuglog.client(`${req.session.userinfo.username} redeemed the coupon code ${code}.`);
        res.json({ "success": true, "message": alerts.REDEEMEDCOUPON });
    } catch {
        res.json({ "success": false, "message": "Internal Server Error" });
    }
    });
}