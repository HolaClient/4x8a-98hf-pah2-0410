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
const { boolean } = require("yargs");
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
module.exports.load = async function (app, db) {
  app.post("/api/admin/settings/update", core.auth, async (req, res) => {
    const settings = await db.get('core', 'settings')
    settings.name = req.body.appname
    settings.logo.url = req.body.applogo
    settings.logo.rotate = boolean(req.body.logorotate)
    settings.seo.title = req.body.seotitle
    settings.seo.image = req.body.seoimg
    settings.seo.description = req.body.seodes
    settings.seo.keywords = req.body.seokey
    settings.authentication.discord.id = req.body.dccid
    settings.authentication.discord.secret = req.body.dccs
    settings.authentication.discord.alt.ip = req.body.ipalt 
    settings.authentication.discord.alt.cookies = req.body.cookiealt
    await db.set('core', 'settings', settings)
    res.json({success: true})
  });
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/