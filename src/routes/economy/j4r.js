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
 * j4r.js - Join 4 Rewards handler.
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
    app.get('/users/earn/j4r/servers', core.auth, async (req, res) => {
        let language = req.session.language;
        const alerts = modules.alerts(language);
        const jSRVs = await db.get("j4rs", req.session.userinfo.hcid);
        if (!jSRVs) {
            return res.json({ "success": false, "message": alerts.a("COULDNOTGETJSERVERS") });
        }
        
        const J4Rs = settings.earn.j4r.ads.map(j4rServer => {
            const hasJoined = jSRVs.some(srv => srv.id === j4rServer.id);
            
            return {
                id: j4rServer.id,
                coins: j4rServer.coins,
                name: j4rServer.name,
                invite: j4rServer.invite,
                hasJoined: hasJoined,
            };
        });

        res.json({ "success": true, "message": alerts.a("SUCCESS"), "servers": J4Rs });
    });
}
