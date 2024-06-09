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
 * reboot.js - Application reboot handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Export function
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get('/api/app/reload', core.admin, async (req, res) => {
        try {
            reload();
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Severe", 28)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function reload() {
        for ([i] of Object.entries(app.routes)) { delete app.routes[i] };
        Promise.all([
            load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'admin')),
            load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'app')),
            load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'servers')),
            load(path.join(__dirname, '..', '..', '..', 'src', 'routes')),
        ]);
        return true
    };
    function load(a) {
        const b = fs.readdirSync(a).filter(i => i.endsWith('.js'));
        b.forEach(i => {
            const c = require(path.join(a, i));
            if (typeof c === 'function') { c() };
        });
        return true
    };
    async function handle(error, a, b) {
        const admins = await db.get("notifications", "admins") || [];
        const errors = await db.get("logs", "errors") || [];
        System.err.println(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "app-reboot",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/app/reboot.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/