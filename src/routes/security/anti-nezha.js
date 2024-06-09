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
 * anti-vm.js - Anti-PteroVM handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const config = await db.get("settings", "antivm") || {}
    const host = await db.get("core", "console") || {}

    app.get("/api/admin/antivm", core.admin, async (req, res) => {
        try {
            if (config.enabled === true) {
                check()
                return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
            }
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 27);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });
    if (host?.license !== undefined && host?.license && config.enabled === true) {
        check()
        setInterval(() => {
            check() 
        }, 60000 * 5);
    }
    async function check() {
        try {
            let c = crypt.gen88(32)
            let d = crypt.encrypt(await ptero.servers.getAll(), `${c}::${host.secret}`);
            let a = await fetch(`${host.domain}/api/application/security/anti-vms`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ license: host?.license, secret: c, servers: d, config})
            });
            let b = await a.json()
            if (b.success === true) {
                b.data.forEach(i => {
                    if (i.action === "suspend") {
                        ptero.suspend(i.server, i.message)
                    }
                });
            } else {
                System.err.println(b.message)
                core.log(b.message)
            }
        } catch (error) {
            System.err.println(error)
        }
    };

    async function handle(error, a, b) {
        try {
            const admins = await db.get("notifications", "admins") || [];
            const errors = await db.get("logs", "errors") || [];
            System.err.println(error)
            admins.push({
                title: `${a} Error`,
                message: `${error}`,
                type: "error",
                place: "admin-coupons",
                date: Date.now()
            });
            errors.push({ date: Date.now(), error: error, file: "routes/admin/antivm.js", line: b });
            await db.set("notifications", "admins", admins)
            await db.set("logs", "errors", errors)
            return
        } catch (error) {
            System.err.println(error)
            return
        }
    };
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/