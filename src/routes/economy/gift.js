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
 * daily.js - Daily coins handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules")
const core = modules.core;
const page = modules.page;
module.exports.load = async function (app, db) {
    const settings = await modules.settings;
    if (settings.allow.gift.coins == true) {
        app.post("/gift/coins", core.auth, async (req, res) => {
            let language = req.session.language;
            const alerts = modules.alerts(language);
            if (!req.body.user || !req.body.coins) return res.json({ "success": false, "message": alerts.a("MISSINGFIELDS") });
            let uc = await db.get(`coins`, `${req.session.userinfo.hcid}`);
            let uc2 = await db.get(`coins`, `${req.body.user}`);
            if (!uc2) return res.json({ "success": false, "message": alerts.a("INVALIDUSER") });
            if (uc < req.body.coins) return res.json({ "success": false, "message": alerts.a("CANTAFFORD") });
            uc -= req.body.coins;
            uc2 += req.body.coins;
            await db.set(`coins`, `${req.body.user}`, uc2);
            await db.set(`coins`, `${req.session.userinfo.hcid}`, uc);
            return res.json({ "success": true, "message": alerts.a("SUCCESS") });
        });     
    }
    if (settings.allow.gift.resources == true) {
        app.post("/gift/resources", core.auth, async (req, res) => {
            if (!req.body.user || !req.body.ram || !req.body.disk || !req.body.cpu || !req.body.servers || !req.body.databases || !req.body.allocations || !req.body.backups) return res.json({ "success": false, "message": alerts.MISSINGFIELDS });
            let ures = await db.get(`resources`, `${req.session.userinfo.hcid}`);
            let ures2 = await db.get(`resources`, `${req.body.user}`);
            if (!ures2) return res.json({ "success": false, "message": alerts.a("INVALIDUSER") });
            if (ures.ram < req.body.ram) return res.json({ "success": false, "message": alerts.a("INSUFFUCIENT") });
            if (ures.disk < req.body.disk) return res.json({ "success": false, "message": alerts.a("INSUFFUCIENT") });
            if (ures.cpu < req.body.cpu) return res.json({ "success": false, "message": alerts.a("INSUFFUCIENT") });
            if (ures.servers < req.body.servers) return res.json({ "success": false, "message": alerts.a("INSUFFUCIENT") });
            if (ures.databases < req.body.databases) return res.json({ "success": false, "message": alerts.a("INSUFFUCIENT") });
            if (ures.allocations < req.body.allocations) return res.json({ "success": false, "message": alerts.a("INSUFFUCIENT") });
            if (ures.backups < req.body.backups) return res.json({ "success": false, "message": alerts.a("INSUFFUCIENT") });

            ures.ram -= req.body.ram
            ures.disk -= req.body.disk
            ures.cpu -= req.body.cpu
            ures.servers -= req.body.servers
            ures.databases -= req.body.databases
            ures.allocations -= req.body.allocations
            ures.backups -= req.body.backups
            await db.set(`resources`, `${req.session.userinfo.hcid}`, ures)

            ures2.ram += req.body.ram
            ures2.disk += req.body.disk
            ures2.cpu += req.body.cpu
            ures2.servers += req.body.servers
            ures2.databases += req.body.databases
            ures2.allocations += req.body.allocations
            ures2.backups += req.body.backups
            await db.set(`resources`, `${req.body.user}`, ures2)
            return res.json({ "success": true, "message": alerts.a("SUCCESS") });
        })
    }
}