<<<<<<< HEAD
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
    app.get('/api/app/sysinfo', core.admin, async (req, res) => {
        try {
            const a = process.memoryUsage();
            const b = os.cpus();

            let data = {
                memory: {
                    app: (a.heapUsed / 1024 / 1024),
                    total: (os.totalmem() / 1024 / 1024),
                    free: (os.freemem() / 1024 / 1024),
                },
                cpu: {
                    model: b[0].model,
                    threads: b.length,
                    speed: (b[0].speed / 1000)
                },
                machine: {
                    uptime: os.uptime(), //in secs
                    platform: os.platform(),
                    arch: os.arch(),
                    release: os.release()
                }
            }
            return core.json(req, res, true, "SUCCESS", data)
        } catch (error) {
            System.err.println(error)
            return
        }
    });

    app.get("/admin/app/about", core.admin, async (req, res) => {
        try {
            let a = await db.get("core", "about")
            let b = {}
            b["about"] = a
            const appearance = await db.get("settings", "appearance") || {};
            const template = appearance.themes && appearance.themes.admin || "default";
            return core.html(req, res, `./resources/views/admin/${template}/app/about.ejs`, b)
        } catch (error) {
            handle(error, "Minor", 42)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
=======
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
    app.get('/api/app/sysinfo', core.admin, async (req, res) => {
        try {
            const a = process.memoryUsage();
            const b = os.cpus();

            let data = {
                memory: {
                    app: (a.heapUsed / 1024 / 1024),
                    total: (os.totalmem() / 1024 / 1024),
                    free: (os.freemem() / 1024 / 1024),
                },
                cpu: {
                    model: b[0].model,
                    threads: b.length,
                    speed: (b[0].speed / 1000)
                },
                machine: {
                    uptime: os.uptime(), //in secs
                    platform: os.platform(),
                    arch: os.arch(),
                    release: os.release()
                }
            }
            return core.json(req, res, true, "SUCCESS", data)
        } catch (error) {
            System.err.println(error)
            return
        }
    });

    app.get("/admin/app/about", core.admin, async (req, res) => {
        try {
            let a = await db.get("core", "about")
            let b = {}
            b["about"] = a
            const appearance = await db.get("settings", "appearance") || {};
            const template = appearance.themes && appearance.themes.admin || "default";
            return pages.render(req, res, `./resources/views/admin/${template}/app/about.ejs`, b)
        } catch (error) {
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    setInterval(() => {
        if (global.gc) global.gc();
    }, 60000 * 7);
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
>>>>>>> 22ba84e (25-06.src)
*/