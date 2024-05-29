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
 * servers.js - Wrapper modules to get servers from Pterodactyl panel.
 *--------------------------------------------------------------------------
*/
const db = require('../handlers/database.js')
/**
 *--------------------------------------------------------------------------
 * Exporting all servers
 *--------------------------------------------------------------------------
*/
module.exports = async () => {
    try {
        let pterodactyl = await db.get("pterodactyl", "settings")
        if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
            try {
                let a = 1;
                let b = 1;
                let c = [];
                while (a <= b) {
                    let d = await fetch(`${pterodactyl.domain}/api/application/servers?per_page=100&page=${a}`, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${pterodactyl.app}`,
                        },
                    });
                    let e = await d.json();
                    c.push(...e.data);
                    b = e.meta.pagination.total_pages;
                    a++;
                }
                await cacheDB.set("pterodactyl-servers", c);
                return c
            } catch (error) {
                console.error(error)
                return
            }
        } else {
            return
        }
    } catch (error) {
        console.error(error)
        return
    }
};

module.exports.suspend = async (a, b) => {
    try {
        let pterodactyl = await db.get("pterodactyl", "settings")
        if (b) {
            await fetch(`${pterodactyl.domain}/api/application/servers/${a.attributes.id}/details`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "name": a.attributes.name,
                    "user": a.attributes.user,
                    "description": b
                })
            });
        }
        await fetch(`${pterodactyl.domain}/api/application/servers/${a.attributes.id}/suspend`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${pterodactyl.app}`,
            }
        });
        core.log(`${a.attributes.name} ${b}`);
    } catch (error) {
        console.error(error)
        return
    }
};

module.exports.assign = async (a, b) => {
    try {
        let pterodactyl = await db.get("pterodactyl", "settings")
        if (b) {
            await fetch(`${pterodactyl.domain}/api/application/servers/${a.id}/details`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "name": a.name,
                    "user": parseInt(b),
                })
            });
        }
    } catch (error) {
        console.error(error)
        return
    }
};

module.exports.delete = async (a) => {
    try {
        let pterodactyl = await db.get("pterodactyl", "settings")
        await fetch(`${pterodactyl.domain}/api/application/servers/${a}/force`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pterodactyl.app}`,
                Accept: "application/json"
            }
        });
        return
    } catch (error) {
        console.error(error)
        return
    }
};


module.exports.validate = async (a) => {
    for (let i of a) {
        let c = await db.get("pterodactyl", "users") || []
        let d = c.find(j => j.id == i.attributes.user)
        if (!d) {
            const admins = await db.get("notifications", "admins") || [];
            admins.push({
                title: `Alert!`,
                message: `Server ${i.attributes.identifier} doesn't belong to any user registered in HolaClient-X.`,
                type: "alert",
                place: "cache-servers",
                date: Date.now()
            });
            await db.set("notifications", "admins", admins)
            return
        }
        let e = await db.get("servers", d.hc) || []
        e = e.filter(j => j.identifier !== i.attributes.identifier)
        i.attributes["queue"] = false
        e.push(i.attributes)
        await db.set("servers", d.hc, e)
    }
    return
}

module.exports.files = async () => {
    try {
        let pterodactyl = await db.get("pterodactyl", "settings")
        if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
            const d = await servers()
            await Promise.all(d.map(async (c) => {
                let a = await directory(c, "");
                let b = await cacheDB.get("pterodactyl-files") || {};
                b[c.attributes.identifier] = a;
                await cacheDB.set("pterodactyl-files", b);
            }));
        }
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