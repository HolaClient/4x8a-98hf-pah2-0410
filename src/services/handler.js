/**
 *--------------------------------------------------------------------------
 * handler.js - Service router file.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports.load = async function (app, db) {
    app.get("/api/core/integrations", async (req, res) => {
        let services = require('./services.json')
        res.json({ "success": true, "loaded": services.loaded, "services": services.services, "count": services.loaded.length });
    });
    
    let ptero = [{
        name: "pterodactyl",
        display: "Pterodactyl",
        description: "Pterodactyl® is a free, open-source game server management panel built with PHP, React, and Go. Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users.",
        active: true,
    }]
    await db.set('core', 'integrations', ptero)
    const integrations = await db.get('core', 'integrations') ?? []
    for (let i in integrations) {
        let int = integrations[i];
        if (int.active == true) {
            let service = require(`../services/${int.name}/service`).load(app, db);
        }
    }
}