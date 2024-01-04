/**
 *--------------------------------------------------------------------------
 * coins.js - Manage users' coins using API.
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
    * Defining get coins function
    *--------------------------------------------------------------------------
   */
    app.get("/api/coins/:user", async (req, res) => {
        let isVerified = await verifyRequest(req, res);
        if (!isVerified) return;
        const coins = await db.get("coins-", req.params.user)
        if (!coins) return res.json({ success: false, message: "User not found!", error: "INVALID_USER" });
        return res.json({ "success": true, "message": coins });
    });
    /**
    *--------------------------------------------------------------------------
    * Defining modify coins function
    *--------------------------------------------------------------------------
   */
    app.post("/api/coins", async (req, res) => {
        let isVerified = await verifyRequest(req, res);
        if (!isVerified) return;
        let user = req.body.user;
        if (!user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
        let userinfo = await db.get("userinfo-" + user)
        if (!userinfo) return res.json({ "success": false, "message": alerts.INVALIDUSER });
        let coins = req.body.coins;
        if (!coins) return res.json({ "success": false, "message": alerts.MISSINGCOINS });
        let f = req.body.function;
        if (!f) return res.json({ "success": false, "message": "Missing function!" });
        coins = parseFloat(coins);
        if (isNaN(coins))
            return res.json({ "success": false, "message": alerts.INVALIDINTEGER });
        if (coins < 0 || coins > 999999999999999)
            return res.json({ "success": false, "message": alerts.COINSSIZE });
            const ccoins = await db.get("coins-" + user)
        if (f = "add") {
            const ncoins = ccoins + coins
            await db.set("coins-" + user, ncoins);
        } else if (f = "set") {
            await db.set("coins-" + user, coins);
        } else if (f = "remove") {
            const ncoins = ccoins - coins
            await db.set("coins-" + user, ncoins);
        } else {
            return res.json({"success":false,"message":"Invalid Function"})
        }
        wh(`coins`, `Successfully changed the coins of \`${userinfo.username}\` to ${await db.get("coins-" + user)}`);
        dl.a(`Successfully changed the coins of ${userinfo.username} to  ${await db.get("coins-" + user)}`);
        return res.json({ "success": true, "message": "Success" });
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