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
 * index.js - HolaClient cloud config handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get('/api/app/license', core.admin, async (req, res) => {
        try {
            let a = await db.get("app", "console")
            let b = await fetch(`${a.domain}/api/application/license/${a.license}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Secret ${a.secret}`
                }
            });
            let c = await b.json()
            let d = {
                "license": a.license,
                "status": c.data.status,
                "expires": c.data.expires,
                "type": c.data.type,
                "price": c.data.price,
                "hosts": c.data.hosts,
                "servers": c.data.servers
            }
            return core.json(req, res, true, "SUCCESS", d)
        } catch (error) {
            System.err.println(error)
            return
        }
    });

    app.post('/api/app/license', core.admin, async (req, res) => {
        try {
            let a = await db.get("app", "console")
            return core.json(req, res, true, "SUCCESS", a.license)
        } catch (error) {
            System.err.println(error)
            return
        }
    });

    app.put('/api/app/license', core.admin, async (req, res) => {
        try {
            let a = await db.get("app", "console")
            a["license"] = req.body.key
            await db.set("app", "console", a)
            return core.json(req, res, true, "SUCCESS", a.license)
        } catch (error) {
            System.err.println(error)
            return
        }
    });
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
*/