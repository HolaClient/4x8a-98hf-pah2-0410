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
 * pterodactyl.js - So called wrapper module.
 *--------------------------------------------------------------------------
*/
const db = require('../handlers/database.js')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
async function refresh() {
    require('../libraries/pterodactyl.servers.js')
    require('../libraries/pterodactyl.nodes.js')
    require('../libraries/pterodactyl.eggs.js')
    require('../libraries/pterodactyl.servers.js').files
    require('../libraries/pterodactyl.servers.js').validate
}
refresh()
setInterval(refresh, 60000 * 5);
module.exports = {
    "servers": {
        "get": async function (a) {
            let c = cacheDB.get("pterodactyl-servers")
            if (!c) c = await require('../libraries/pterodactyl.servers.js')
            let b = c.find(i => i.attributes.id === parseInt(a))
            return b ?? ""
        },
        "getAll": async function () {
            let a = cacheDB.get("pterodactyl-servers")
            if (!a) a = await require('../libraries/pterodactyl.servers.js')
            return a || []
        },
        "suspend": async function (a, b) {
            return await require('../libraries/pterodactyl.servers.js').suspend(a, b) || {success: false, message: "", error: 0}
        },
        "assign": async function (a, b) {
            return await require('../libraries/pterodactyl.servers.js').assign(a, b) || {success: false, message: "", error: 0}
        },
        "files": {
            "get": async function (a) {
                let b = await cacheDB.get("pterodactyl-files")
                let c = b[a]
                return c ?? []
            },
            "getAll": async function () {
                let c = cacheDB.get("pterodactyl-files")
                if (!c) c = await require('../libraries/pterodactyl.servers.js').files()
                return c || {}
            },
        }
    },
    "nodes": {
        "get": async function (a) {
            let c = cacheDB.get("pterodactyl-nodes")
            if (!c) c = await require('../libraries/pterodactyl.nodes.js')
            let b = c.find(i => i.attributes.id === parseInt(a))
            return b ?? ""
        },
        "getAll": async function () {
            let a = cacheDB.get("pterodactyl-nodes")
            if (!a) a = await require('../libraries/pterodactyl.nodes.js')
            return a || []
        }
    },
    "eggs": {
        "get": async function (a) {
            let c = cacheDB.get("pterodactyl-eggs")
            if (!c) c = await require('../libraries/pterodactyl.eggs.js')
            let b = c.find(i => i.attributes.id === parseInt(a))
            return b ?? ""
        },
        "getAll": async function () {
            let a = cacheDB.get("pterodactyl-eggs")
            if (!a) a = await require('../libraries/pterodactyl.eggs.js')
            return a || []
        }
    },
    "verify": {
        "all": async function () {
            let a = true
            try {
                let pterodactyl = await db.get("pterodactyl", "settings")
                if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
                    let b = await fetch(`${pterodactyl.domain}/api/application/locations`, {
                        "method": "GET",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${pterodactyl.app}`,
                        }
                    });
                    let c = await b.json()
                    if (b.status !== 200) {
                        a = false;
                    }
                    let d = await fetch(`${pterodactyl.domain}/api/client/permissions`, {
                        "method": "GET",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${pterodactyl.acc}`,
                        }
                    });
                    let e = await d.json()
                    if (b.status !== 200) {
                        a = false;
                    }
                } else {
                    a = false;
                }
                return a
            } catch (e) {
                console.error(e)
                return false
            }
    }
    }
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/