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
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules")
const fallback = modules.fallback
const page = modules.page;
const path = modules.path
const fs = modules.fs;
module.exports = async function() {
    app.get('/api/admin/reload/routes', core.admin, async (req, res) => {
        try {
            reload();
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Severe", 33)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get('/api/admin/reload/addons', core.admin, (req, res) => {
        try {
            let a = path.join(__dirname, '..', '..', '..', 'src', 'addons')
            let b = fs.readdirSync(a);
            for (let i of b) {
                unload(path.join(__dirname, '..', '..', '..', 'src', 'addons', i), app, db);
                load(path.join(__dirname, '..', '..', '..', 'src', 'addons', i), app, db);
            };
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 44)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get('/api/admin/reload/addons/:addon', core.admin, (req, res) => {
        try {
            let a = req.params.addon
            unload(path.join(__dirname, '..', '..', '..', 'src', 'addons', a), app, db);
            setInterval(() => {
                load(path.join(__dirname, '..', '..', '..', 'src', 'addons', a), app, db);
            }, 200);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 62)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    function reload() {
        app._router.stack = app._router.stack.filter(layer => {
            return !layer.route;
        });
        unload(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'admin'), app, db);
        unload(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'authentication'), app, db);
        unload(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'app'), app, db);
        unload(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'servers'), app, db);
        unload(path.join(__dirname, '..', '..', '..', 'src', 'routes'), app, db);

        load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'admin'), app, db);
        load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'authentication'), app, db);
        load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'app'), app, db);
        load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'servers'), app, db);
        setTimeout(() => {
            load(path.join(__dirname, '..', '..', '..', 'src', 'routes'), app, db);
        }, 200);
    }
    async function load(a, b, c) {
        const d = fs.readdirSync(a).filter(e => ['.js', '.mjs', '.ts'].some(f => e.endsWith(f)));
        for (const g of d) {
            let h;
            const i = path.join(a, g);
            if (g.endsWith('.mjs')) {
                h = await import(i);
            } else {
                h = require(i);
            }
            if (typeof h.load === 'function') {
                h.load(b, c);
            } else {
                console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] [")}${chalk.gray("ROUTER")}${chalk.white("] ")}${chalk.red(`Error while loading ${chalk.cyan(`${g}`)}`)}`);
            }
        }
        return true
    }
    function unload(a) {
        const b = fs.readdirSync(a).filter(c => ['.js', '.mjs', '.ts'].some(d => c.endsWith(d)));
        if (b.length !== 0) {
            b.forEach(e => {
                const f = require.resolve(path.join(a, e));
                delete require.cache[f];
            });
        }
        return true
    }
    async function handle(error, a, b) {
        const admins = await db.get("notifications", "admins") || [];
        const errors = await db.get("logs", "errors") || [];
        console.error(error)
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