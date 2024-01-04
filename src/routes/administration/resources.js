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
 * resources.js - Administrative handler to manage resources & coins.
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
    /**
    *--------------------------------------------------------------------------
    * Defining coins modification endpoint.
    *--------------------------------------------------------------------------
   */
    app.post("/api/admin/coins", core.auth, async (req, res) => {
        let theme = page.get(req);
        let user = req.body.user;
        if (!user) return res.json({ "success": false, "message": alerts.a("MISSINGUSER") });
        let userinfo = req.users[user]
        if (!userinfo) return res.json({ "success": false, "message": alerts.a("INVALIDUSER") });
        let coins = req.body.coins;
        if (!coins) return res.json({ "success": false, "message": alerts.a("MISSINGCOINS") });
        let f = req.body.function
        if (!f) return res.json({ "success": false, "message": alerts.a("MISSINGFUNCTION") });
        coins = parseFloat(coins);
        if (isNaN(coins))
            return res.json({ "success": false, "message": alerts.a("INVALIDINTEGER") });
        if (coins < 0 || coins > 999999999999999)
            return res.json({ "success": false, "message": alerts.a("COINSSIZE") });
       
        if (f == "+") {
            const ccoins = await db.get("coins", user)
            const ncoins = ccoins + coins
            await db.set("coins", user, ncoins);
        } else if (f == "-") {
            const ccoins = await db.get("coins", user)
            const ncoins = ccoins - coins
            await db.set("coins", user, ncoins);
        } else if (f == "=") {
            await db.set("coins", user, coins)
        } else {
            return res.json({ "success": false, "message": `Unknown operation "${f}"` })
        }

        wh(`modify coins`, `${req.session.userinfo.username} modified the coins of \`${userinfo.username}\` to \`${coins}\`. New balance: ${await db.get("coins", user)}`);
        dl.a(`${req.session.userinfo.username} modified the coins of ${userinfo.username} to ${coins}. New balance: ${await db.get("coins", user)}`);
        return res.json({ "success": true, "message": alerts.a("SUCCESS") });
    })
    /**
    *--------------------------------------------------------------------------
    * Defining resources modification endpoint.
    *--------------------------------------------------------------------------
   */
    app.post("/api/admin/resources", core.auth, async (req, res) => {
        let theme = page.get(req);
        let user = req.body.user;
        if (!user) return res.json({ "success": false, "message": alerts.a("MISSINGUSER") });
        let userinfo = req.users[user];
        if (!userinfo) return res.json({ "success": false, "message": alerts.a("INVALIDUSER") });
        let resources = req.body.resources;
        if (!resources) return res.json({ "success": false, "message": alerts.a("MISSINGRESOURCES") });
        let f = req.body.function;
        if (!f) return res.json({ "success": false, "message": alerts.a("MISSINGFUNCTION") });
        
        let tresources = resources.length;

        for (let i = 0; i < tresources; i++) {
            let resource = parseFloat(resources[i]);
            if (isNaN(resource))
                return res.json({ "success": false, "message": alerts.a("INVALIDINTEGER") });
            if (resource < 0 || resource > 999999999999999)
                return res.json({ "success": false, "message": alerts.a("RESOURCESIZE") });
        
            if (f == "+") {
                const cresources = await db.get("resources", user);
                cresources[resource] = (cresources[resource] || 0) + resource;
                await db.set("resources", user, cresources);
            } else if (f == "-") {
                const cresources = await db.get("resources", user);
                cresources[resource] = (cresources[resource] || 0) - resource;
                await db.set("resources", user, cresources);
            } else if (f == "=") {
                await db.set("resources", user, resources);
            } else {
                return res.json({ "success": false, "message": `Unknown operation "${f}"` })
            }
        }

        wh(`modify resources`, `${req.session.userinfo.username} modified the resources of \`${userinfo.username}\` to \`${resources}\`. New resources: ${await db.get("resources", user)}`);
        dl.a(`${req.session.userinfo.username} modified the resources of ${userinfo.username} to ${resources}. New resources: ${await db.get("resources", user)}`);
        return res.json({ "success": true, "message": alerts.a("SUCCESS") });
    })
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/