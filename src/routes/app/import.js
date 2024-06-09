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
 * import.js - Application imports handler.
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get('/api/app/import', core.admin, async (req, res) => {
        try {
            let a = await fs.readdirSync(path.join(__dirname, "../../addons"));
            let c = {}
            let d = {}
            let e = {}
            for (let i of a) { let b = require(`../../addons/${i}/manifest.json`); if (b) c[i] = b };
            let f = await db.get("addons", "active") || [];
            for (let i of f) { d[i.name] = i };
            for ([i, j] of Object.entries(c)) { if (!d[i]) e[i] = j };
            for ([i, j] of Object.entries(e)) {
                require(`../../addons/${i}/remote.js`).seed()
            }
            return core.json(req, res, true, "SUCCESS", { total: c, active: d, inactive: e });
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, true, "ERROR", error);
        }
    });
}