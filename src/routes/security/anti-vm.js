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
 * vm.js - Anti-PteroVM handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const pterodactyl = await db.get("pterodactyl", "settings") || {}
    const config = await db.get("settings", "antipterovm") || {}
    let sus = []
    try {
        let x = await fetch('https://cdn.holaclientx.tech/production/security/suspeciousFiles.json')
        sus = await x.json()
    } catch (error) {
        console.error(error)
        return
    }
    let susServers = []
    
    app.get("/api/admin/antivm", core.auth, async (req, res) => {
        try {
            cache()
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res)}));
        } catch (error) {
            handle(error, "Minor", 27);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    cache()
    async function cache() {
        try {
            const servers = await ptero.servers()
            await Promise.all(servers.map(async (c) => {
                let a = await directory(c, "");
                let b = await cacheDB.get("pterodactyl-files") || {};
                b[c.attributes.identifier] = a;
                await cacheDB.set("pterodactyl-files", b);
            }));
            suspend()
        } catch (error) {
            console.error(error);
        }
    }

    async function directory(f, g) {
        try {
            let e = [];
            let a = await fetch(`${pterodactyl.domain}/api/client/servers/${f.attributes.identifier}/files/list?directory=${g}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${pterodactyl.acc}`,
                },
            });
            let b = await a.json();
            if (!Array.isArray(b.data)) return e;
            await Promise.all(b.data.map(async (c) => {
                e.push(c);
                check(c, f.attributes.identifier)
                if (c.attributes.mimetype === "inode/directory") {
                    let d = await directory(f, `${g}/${c.attributes.name}`);
                    e.push(d);
                }
            }));
            return e;
        } catch (error) {
            console.error(error);
            return {};
        }
    }

    async function check(a, id) {
        let b = sus[config.mode || "MEDIUM"];
        return new Promise((resolve, reject) => {
            try {
                for (let i of b) {
                    if (i.endsWith("/") && a.attributes.mimetype == "inode/directory" && a.attributes.name == i.slice(0, -1)) {
                        let c = susServers.find(x => x.file == a.attributes.name)
                        if (!c) susServers.push({ server: id, file: a.attributes.name });
                    } else if (i == a.attributes.name) {
                        susServers.push({ server: id, file: a.attributes.name });
                    }
                }
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    async function suspend() {
        let a = await ptero.servers();
        for (let i of a) {
            let b = susServers.filter(c => c.server === i.attributes.identifier);
            let c = config.mode || "MEDIUM"
            if (c == "LOW" && b.length >= 4) {
                terminate(i, b.length)
            } else if (c == "MEDIUM" && b.length >= 3) {
                terminate(i, b.length)
            } else if (c == "HIGH" && b.length >= 2) {
                terminate(i, b.length)
            } else if (c == "STRICT" && b.length >= 1) {
                terminate(i, b.length)
            }
        }
        return
    }

    async function terminate(a, b) {
        try {
            let e = await fetch(`${pterodactyl.domain}/api/application/servers/${a.attributes.id}/details`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                    Accept: "application/vnd.pterodactyl.v1+json"
                },
                body: JSON.stringify({
                    "name": a.attributes.name,
                    "user": a.attributes.user,
                    "description": `Server suspended by HolaClientX due to high chances of malicious activities. ${b} suspicious files have been found.`
                })
            });
            let c = await fetch(`${pterodactyl.domain}/api/application/servers/${a.attributes.id}/suspend`, {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.app}`,
                }
            });
            core.log(`${a.attributes.name} has been suspended for suspecious activities (${b} suspecious files found).`);
        } catch (error) {
            console.error(error)
            return
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