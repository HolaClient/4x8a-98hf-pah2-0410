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
const page = modules.page;
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    app.get("/setup", async (req, res) => {
        return page.render(`./resources/views/setup/index.ejs`, req, res);
    });

    app.get("/setup/pterodactyl", async (req, res) => {
        return page.render(`./resources/views/setup/pterodactyl.ejs`, req, res);
    });

    app.get("/setup/import", async (req, res) => {
        return page.render(`./resources/views/setup/import.ejs`, req, res);
    });

    app.get("/setup/finish", async (req, res) => {
        return page.render(`./resources/views/setup/finish.ejs`, req, res);
    });

    app.get("/api/setup", async (req, res) => {
        let stages = await db.get("setup", "stages") ?? {}
        res.end(JSON.stringify({ success: true, basic: stages['/setup/basic'] || false, additional: stages['/setup/additional'] || false }))
    });

    app.put('/api/setup', async (req, res) => {
        let a = req.body
        if (!a || !a.token) return core.json(req, res, false, "MISSING")
        if (a.token === process.env.APP_CODE) return core.json(req, res, true, "SUCCESS")
        return core.json(req, res, false, "INVALID")
    });

    app.post("/api/setup", async (req, res) => {
        let a = req.body
        if (!a) return core.json(req, res, false, "MISSING")
        let b = a.token
        if (!b) return core.json(req, res, false, "MISSING")
        if (!process.env.APP_CODE == b) return core.json(req, res, false, "INVALID")
        let c = {
            domain: a.domain,
            app: a.app,
            acc: a.acc,
            deployments: {
                fees: a.fees ?? 0
            }
        }
        await db.set('pterodactyl', 'settings', c);
        fs.writeFile('storage/installed.txt', "installed=true", (err) => {
            if (err) {
                console.error('Error creating file:', err);
            }
        });
        await db.set('core', 'setup', true)
        return core.json(req, res, true, "SUCCESS")
    });
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
*/