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
 * marketplace.js - Marketplace manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../utils/modules')
const wh = modules.wh;
const core = modules.core;
module.exports.load = async function (app, db) {
    function createRoute(routeName, resourceKey, resourceDisplayName, costKey, perKey, limitKey, isSell) {
        app.post(routeName, core.auth, async (req, res) => {
            let language = req.session.language;
            const alerts = modules.alerts(language);
            try {
                if (!settings) {
                    return res.json({ "success": false, "message": alerts.a("SETTINGSERROR") });
                }

                const { amount } = req.body;
                const language = req.session.language;
                const alerts = modules.alerts(language);

                if (!amount) {
                    return res.json({ "success": false, "message": alerts.a("MISSINGAMOUNT") });
                }

                const usercoinsKey = isSell ? "coins" : "coins-" + req.session.userinfo.hcid;
                const resourceCapKey = isSell ? "resources" : `${resourceKey}-${req.session.userinfo.hcid}`;

                let usercoins = await db.get(usercoinsKey) || 0;
                let resourceCap = await db.get(resourceCapKey) || 0;

                if (isSell && resourceCap < amount) {
                    return res.json({ "success": false, "message": alerts.a("INSUFFICIENT") });
                }

                const storeConfig = settings.coins[isSell ? "blackmart" : "store"][costKey];
                const per = storeConfig[perKey] * amount;
                const cost = storeConfig.cost * amount;

                const newusercoins = isSell ? usercoins + cost : usercoins - cost;
                const newResourceCap = isSell ? resourceCap - amount : resourceCap + amount;

                if (newusercoins === 0) {
                    await db.delete(usercoinsKey, req.session.userinfo.hcid);
                    await db.set(resourceCapKey, req.session.userinfo.hcid, newResourceCap);
                } else {
                    await db.set(usercoinsKey, req.session.userinfo.hcid, newusercoins);
                    await db.set(resourceCapKey, req.session.userinfo.hcid, newResourceCap);
                }

                if (isSell) {
                    const resources = await db.get(resourceCapKey, req.session.userinfo.hcid);
                    resources[resourceKey] = resources[resourceKey] - per;

                    if (Object.values(resources).every(val => val === 0)) {
                        await db.delete(resourceCapKey, req.session.userinfo.hcid);
                    } else {
                        await db.set(resourceCapKey + req.session.userinfo.hcid, resources);
                    }
                } else {
                    const extra = await db.get("extra-" + req.session.userinfo.hcid) || {
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
                }

                const actionType = isSell ? "sold" : "bought";
                const message = `${req.session.userinfo.username} ${actionType} ${per} ${resourceDisplayName} to/from the store for ${cost} Credits.`;

                wh(actionType + resourceKey, message);
                dl.c(message);

                res.json({ "success": true, "message": alerts.a("SUCCESS") });
            } catch (error) {
                console.error(error);
                res.status(500).json({ "success": false, "message": "An error occurred while processing the request." });
            }
        });
    }

    const resources = await db.get("resources", "resources");

    for (const resource of resources) {
        createRoute(`/api/sell${resource.name}`, resource.name, `${resource.unit} ${resource.name}`, resource.name, "per", null, true);
        createRoute(`/api/buy${resource.name}`, resource.name, `${resource.unit} ${resource.name}`, resource.name, "per", null, false);
    }
};