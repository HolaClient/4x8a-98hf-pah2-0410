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
    let scannedSRVs = await db.get("stats", "antidiskfill") || []

    if (host?.license !== undefined && host?.license && config.enabled === true) {
        check()
        setInterval(() => {
            check()
        }, 60000 * 5);
    }
    async function check() {
        try {
            let a = crypt.gen88(32)
            let b = await ptero.servers.getAll() || []
            let f = await ptero.servers.files.getAll() || []
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
                crypt.encrypt({ "attributes": e.attributes, "files": f[e.attributes.identifier] }, `${a}::${host.secret}`);
                let g = scannedSRVs.find(i => i === i.attributes.identifier)
                if (!g) scannedSRVs.push(i.attributes.identifier)
            });
            let req = await fetch(`${host.domain}/api/application/security/anti-diskfill`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ license: host?.license, secret: a, servers: c, config })
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
                await db.set("stats", "antidiskfill", scannedSRVs)
            } else {
                System.err.println(res.message)
                core.log(res.message)
            }
        } catch (error) {
            System.err.println(error)
        }
    };
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/