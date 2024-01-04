/**
 *--------------------------------------------------------------------------
 * HolaClient v1.5.9
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2023 HolaClient
 *
 *--------------------------------------------------------------------------
 * resources.js - Manage users' resources using API.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const settings = modules.settings;
const ejs = modules.ejs;
const appjs = modules.appjs;
const fetch = modules.fetch;
const wh = modules.wh;
const renderFile = modules.renderFile;
module.exports.load = async function (app, db) {
    /**
    *--------------------------------------------------------------------------
    * Defining get resources endpoint
    *--------------------------------------------------------------------------
   */
    app.get("/api/resources/:user", async (req, res) => {
        let isVerified = await verifyRequest(req, res);
        if (!isVerified) return;
        const resources = await db.get("resources-", req.params.user)
        if (!resources) return res.json({ success: false, message: "User not found!", error: "INVALID_USER" });
        return res.json({ "success": true, "message": resources });
    });
    /**
    *--------------------------------------------------------------------------
    * Defining modify resources endpoint
    *--------------------------------------------------------------------------
    */
    app.post("/api/resources", async (req, res) => {
        let isVerified = await verifyRequest(req, res);
        if (!isVerified) return;
    
        if (!req.body.user) {
            return res.json({ "success": false, "message": alerts.MISSINGUSER });
        }
    
        const user = req.body.user;
        const f = req.body.function;
        const resToUpdate = {};
    
        const resNames = ["ram", "disk", "cpu", "servers", "backups", "allocations", "databases"];
        for (const resName of resNames) {
            if (typeof req.body[resName] === "number") {
                const resValue = req.body[resName];
                if (resValue < 0 || resValue > 999999999999999) {
                    return res.json({ "success": false, "message": alerts.RESOURCESSIZE });
                }
    
                if (f === "add") {
                    resToUpdate[resName] = resValue;
                } else if (f === "set") {
                    resToUpdate[resName] = resValue;
                } else if (f === "remove") {
                    resToUpdate[resName] = resValue;
                } else {
                    return res.json({ "success": false, "message": "Invalid Function" });
                }
            }
        }
    
        if (Object.keys(resToUpdate).length > 0) {
            let currentResources = await db.get("resources-" + user);
    
            if (typeof currentResources !== "object") {
                currentResources = {
                    ram: 0,
                    disk: 0,
                    cpu: 0,
                    servers: 0,
                    backups: 0,
                    allocations: 0,
                    databases: 0
                };
            }
    
            Object.keys(resToUpdate).forEach((resName) => {
                currentResources[resName] = resToUpdate[resName];
            });
    
            const resourcesSum = Object.values(currentResources).reduce((acc, val) => acc + val, 0);
            if (resourcesSum === 0) {
                await db.delete("extra-" + user);
            } else {
                await db.set("extra-" + user, currentResources);
            }
    
            return res.json({ "success": true, "message": alerts.SUCCESS });
        } else {
            res.send({ status: "missing variables" });
        }
    });
    
}
/**
*--------------------------------------------------------------------------
* Defining other functions
*--------------------------------------------------------------------------
*/
async function verifyRequest(req, res) {
    if (settings.api.enabled == true) {
        let key = req.headers['authorization'];
        if (key) {
            if (key == "Bearer " + settings.api.key) {
                return true;
            }
        }
    }
    let theme = page.get(req);
    page.render(theme.settings.notfound, req, res);
    return false;
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/