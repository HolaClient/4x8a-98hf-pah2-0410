const fs = require('fs')
module.exports.load = async function (app, db) {
    console.log(0)
    app.post("/api/setup/auth", async (req, res) => {
        let token = req.body.token
        if (!token) { return res.json({ success: false }) }
        let keys = require('../../../storage/installation/keys.json')
        if (keys.secret.setup == token) {
            return res.json({ success: true, message: "Invalid key!" })
        }
        return res.json({ success: false, message: "Success!" })
    })

    app.get("/api/setup", async (req, res) => {
        let stages = require('../../../storage/installation/stages.json')
        res.json({ success: true, basic: stages.finished['/setup/basic'], additional: stages.finished['/setup/additional'] })
    })

    app.post("/api/setup/finish", async (req, res) => {
        let body = req.body
        if (!body) {
            return res.json({ success: false })
        }
        let settings = await db.get('core', 'settings')
        let ptla = await db.get('pterodactyl', 'settings') ?? {}
        settings.name = body.name
        settings.logo.url = body.logo
        settings.banner = body.banner
        settings.authentication.discord.id = body.dccid
        settings.authentication.discord.secret = body.dccs
        ptla.domain = body.domain
        ptla.app = body.app
        ptla.acc = body.acc
        settings.links.discord = body.discord
        settings.links.website = body.website
        settings.links.status = body.status
        settings.packages.list.default.resources[0].value = body.ram
        settings.packages.list.default.resources[1].value = body.disk
        settings.packages.list.default.resources[2].value = body.cpu
        settings.packages.list.default.resources[3].value = body.servers
        settings.packages.list.default.resources[4].value = body.databases
        settings.packages.list.default.resources[5].value = body.backups
        settings.packages.list.default.resources[6].value = body.allocations
        await db.set('core', 'settings', settings)
        await db.set('pterodactyl', 'settings', ptla)
        fs.writeFile('storage/installation/installed.txt', "installed=true", (err) => {
            if (err) {
                console.error('Error creating file:', err);
            } else {
                console.log("Successfully setup'd HolaClient!");
            }
        });
        await db.set('core', 'setup', true)
        return res.json({ success: true })
    })
}