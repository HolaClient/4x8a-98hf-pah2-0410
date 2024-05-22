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
 * anti-diskfill.js - Anti-DiskFillers handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const pterodactyl = await db.get("pterodactyl", "settings") || {}
    const config = await db.get("settings", "antidiskfill") || {}
    const host = await db.get("app", "console") || {}

    app.get("/api/admin/antidiskfill", core.admin, async (req, res) => {
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
            let a = crypt.gen88(32)
            let b = await ptero.servers() || []
            let f = await ptero.files() || []
            let c = []
            if (b.length === 0) return
            b.forEach(async (i) => {
                let d = await fetch(`${pterodactyl.domain}/api/client/servers/${i.attributes.identifier}`, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${pterodactyl.acc}`,
                    },
                });
                let e = await d.json();
                crypt.encrypt({"attributes": e.attributes, "files": f[e.attributes.identifier]}, `${a}::${host.secret}`);
            });
            let req = await fetch(`${host.domain}/api/application/security/anti-diskfill`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ license: host?.license, secret: a, servers: c, config})
            });
            let res = await req.json()
            if (res.success === true) {
                res.data.forEach(i => {
                    if (i.action === "suspend") {
                        ptero.suspend(i.server, i.message)
                    } else if (i.action === "kill") {
                        ptero.killServer(i.server, i.message)
                    } else if (i.action === "delete") {
                        ptero.deleteServer(i.server, i.message)
                    }
                });
            } else {
                console.error(res.message)
                core.log(res.message)
            }
        } catch (error) {
            console.error(error)
        }
    };

    async function handle(error, a, b) {
        try {
            const admins = await db.get("notifications", "admins") || [];
            const errors = await db.get("logs", "errors") || [];
            console.error(error)
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
            console.error(error)
            return
        }
    };
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/