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
 * coupons.js - Administrative handler to manage coupons & promo codes.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
module.exports.load = async function (app, db) {
    app.post("/api/coupons/create", core.auth, async (req, res) => {
        try {
            let theme = indexjs.get(req);
            let code = req.body.code ? req.body.code.slice(0, 200) : Math.random().toString(36).substring(2, 15);
            if (!code.match(/^[a-z0-9]+$/i)) return res.json({ "success": false, "message": alerts.a("INVALIDCODENAME") });
            let coins = req.body.coins || 0;
            coins = parseFloat(coins);
            let uses = parseFloat(req.body.uses);
            let resources = req.body.resources;
            
            if (resources && coins >= 0) {
                let tresources = resources.length;
    
                for (let i = 0; i < tresources; i++) {
                    let resource = parseFloat(resources[i]);
                    
                    if (isNaN(resource))
                        return res.json({ "success": false, "message": alerts.a("INVALIDINTEGER") });
                    
                    if (resource < 0 || resource > 999999999999999)
                        return res.json({ "success": false, "message": alerts.a("RESOURCESIZE") });
    
                    await db.set("coupons", code, {
                        coins: coins,
                        resources: resources,
                        uses: uses,
                        creator: {
                            username: req.session.userinfo.username,
                            hcid: req.session.userinfo.hcid
                        }
                    });
    
                    let coupons = (await db.get("coupons", 'coupons')) || [];
                    coupons.push(code);
                    await db.set("coupons", 'coupons', coupons);
                }
    
                wh(
                    `create coupon`,
                    `${req.session.userinfo.username} created the coupon code \`${code}\` which gives:\`\`\`coins: ${coins}\nMemory: ${ram} MB\nDisk: ${disk} MB\nCPU: ${cpu}%\nServers: ${servers}\nBackups: ${backups}\nAllocations: ${allocations}\nDatabases: ${databases}\nwith a maximum of ${uses} uses\`\`\``
                );
                dl.a(`${req.session.userinfo.username} created the coupon code "${code}" which gives:\ncoins: ${coins}\nMemory: ${ram} MB\nDisk: ${disk} MB\nCPU: ${cpu}%\nServers: ${servers}\nBackups: ${backups}\nAllocations: ${allocations}\nDatabases: ${databases}\nwith a maximum of ${uses} uses`);
                return res.json({ "success": true, "message": alerts.a("CREATECOUPONSUCCESS") });
            } else {
                return res.json({ "success": false, "message": alerts.a("COUPONLESSTHANONE") });
            }
        } catch (err) {
            dl.b(err);
            return res.json({ "success": false, "message": err });
        }
    });

    app.post("/api/coupons/revoke", core.auth, async (req, res) => {
        try {
            let code = req.body.code;
            const coupon = await db.get("coupons", code);
            if (!coupon) return res.json({ "success": false, "message": alerts.a("COULDNOTFINDCOUPON") });
            await db.delete('coupons', code);
            let coupons = await db.get("coupons", 'coupons') ?? []
            coupons = coupons.filter((coupon) => coupon !== code);
            if (coupons.length === 0) {
                await db.delete("coupons");
            } else {
                await db.set("coupons", 'coupons', coupons);
            }
            
            log(
                `Revoke coupon`,
                `${req.session.userinfo.username} revoked the coupon code \`${code}\`.`
            );
            dl.a(`${req.session.userinfo.username} revoked the coupon code ${code}.`);
            res.json({ "success": true, "message": alerts.a("REVOKEDCOUPON") });
        } catch (error) {
            console.error("Error revoking coupon:", error);
            res.status(500).json({ "success": false, "message": alerts.a("500") });
        }
    });

    app.get("/api/coupons/list", core.auth, async (req, res) => {
        let coupons = await db.get("coupons", 'coupons') ?? [];
        return res.json({ "coupons": coupons });
    });
}