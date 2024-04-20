/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclientx.tech
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright 2022-2024 HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * wizard.js - Setup handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules.js")
const core = require("../../middleware/core.js")
const crypt = require("../../utils/crypt.js")
const page = modules.page;
const fs = modules.fs;
const fallback = require("../../../resources/views/fallback/errors.js")
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    app.get("/setup", async (req, res) => {
        return page.render(`./resources/views/setup/index.ejs`, req, res);
    })

    app.get("/setup/basic", async (req, res) => {
        return page.render(`./resources/views/setup/basic.ejs`, req, res);
    })

    app.get("/setup/finish", async (req, res) => {
        return page.render(`./resources/views/setup/finish.ejs`, req, res);
    })

    app.get("/api/setup", async (req, res) => {
        let stages = await db.get("setup", "stages") ?? {}
        res.end(JSON.stringify({ success: true, basic: stages['/setup/basic'] || false, additional: stages['/setup/additional'] || false }))
    })

    app.put("/api/setup", async (req, res) => {
        let token = req.body.token
        if (!token) { return res.end(JSON.stringify({ success: false })) }
        if (!process.env.APP_CODE == token) {
            return res.end(JSON.stringify({ success: false, message: "Invalid key!" }))
        }
        return res.end(JSON.stringify({ success: true, message: "Success!" }))
    })

    app.post("/api/setup", async (req, res) => {
        let body = req.body
        if (!body) {
            return res.end(JSON.stringify({ success: false }))
        }
        let token = req.body.token
        if (!token) { return res.end(JSON.stringify({ success: false })) }
        if (!process.env.APP_CODE == token) {
            return res.end(JSON.stringify({ success: false, message: "Invalid key!" }))
        }
        let settings = await db.get('settings', 'appearance') || {}
        let authentication = await db.get('settings', 'authentication') || {}
        let packages = await db.get('settings', 'packages') || {}
        let ptla = await db.get('pterodactyl', 'settings') || {}
        let links = await db.get('settings', 'links') || {}
        settings.name = body.name
        settings.logo.url = body.logo
        settings.banner = body.banner
        authentication.discord.id = body.dccid
        authentication.discord.secret = body.dccs
        ptla.domain = body.domain
        ptla.app = body.app
        ptla.acc = body.acc
        links.discord = body.discord
        links.website = body.website
        links.status = body.status
        packages.list.default.resources.memory.value = body.ram
        packages.list.default.resources.disk.value = body.disk
        packages.list.default.resources.cpu.value = body.cpu
        packages.list.default.resources.servers.value = body.servers
        packages.list.default.resources.databases.value = body.databases
        packages.list.default.resources.backups.value = body.backups
        packages.list.default.resources.allocations.value = body.allocations
        await db.set('settings', 'appearance', settings)
        await db.set('settings', 'authentication', authentication)
        await db.set('settings', 'packages', packages)
        await db.set('pterodactyl', 'settings', ptla)
        fs.writeFile('storage/installed.txt', "installed=true", (err) => {
            if (err) {
                console.error('Error creating file:', err);
            } else {
                console.log("Successfully setup'd HolaClient!");
            }
        });
        await db.set('core', 'setup', true)
        return res.end(JSON.stringify({ success: true }))
    })
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
*/