/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * onboarding.js - Onboarding manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../utils/modules')
const core = modules.core
module.exports.load = async function(app, db) {
    app.get("/api/coupons/redeem/:code", core.auth, async (req, res) => {
        try {
        let code = req.params.code;
        if (!code) return res.json({ "success": false, "message": alerts.a("NOCOUPONCODE") });
        let couponinfo = await db.get("coupons", code);
        if (!couponinfo) return res.json({ "success": false, "message": alerts.a("COULDNOTFINDCOUPON") });
    
        let resources = await db.get("resources", req.session.userinfo.hcid)
        for (const resource of resources) {
         if (couponinfo[resource]) resources[resource] = resources[resource] + couponinfo[resource];
         if (resources[resource] > 999999999999999) resources[resource] = 999999999999999;
        }
        await db.set("resources", req.session.userinfo.hcid, resources);
    
        let coins = await db.get("coins", req.session.userinfo.hcid) || 0;
        coins = coins + couponinfo.coins;
        await db.set("coins", req.session.userinfo.hcid, coins);
        if (couponinfo.uses == "1") {
            await db.delete("coupons", code);
            let coupons = (await db.get("coupons", "coupons")) || []
            coupons = coupons.filter((coupon) => coupon !== code);
            if (coupons.length === 0) {
                await db.delete("coupons", "coupons");
            } else {
                await db.set("coupons", "coupons", coupons);
            }
        } else {
            const newUses = parseInt(couponinfo.uses)-parseInt('1');
            couponinfo.uses = newUses
            await db.set(`coupons`, code, couponinfo);
        }
        dl.c(`${req.session.userinfo.username} redeemed the coupon code ${code}.`);
        res.json({ "success": true, "message": alerts.a("REDEEMEDCOUPON") });
    } catch {
        res.json({ "success": false, "message": "Internal Server Error" });
    }
    });
}