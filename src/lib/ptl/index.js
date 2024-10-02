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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
const servers = require('./app/servers')
const nodes = require('./app/nodes')
const eggs = require('./app/eggs')
const locations = require('./app/locations')
const users = require('./app/users')
let settings

module.exports = {
    "servers": {
        "get": async function (a) {
            let c = await db.get("pterodactyl-servers")
            if (!c) c = await servers.servers()
            let b;
            if (typeof a == "number") {
                b = c.find(i => i.attributes.id === parseInt(a))
            } else {
                b = c.find(i => i.attributes.identifier === a)
            }
            return b ?? ""
        },
        "getAll": async function () {
            let a = await db.get("pterodactyl-servers")
            if (!a) a = await servers.servers()
            return a || []
        },
        "suspend": async function (a, b) {
            return await servers.suspend(a, b) || { success: false, error: 0 }
        },
        "assign": async function (a, b) {
            return await servers.assign(a, b) || { success: false, error: 0 }
        },
        "files": {
            "get": async function (a) {
                let b = await db.get("pterodactyl-files")
                if (!b) b = await servers.files()
                let c = b[a]
                return c ?? []
            },
            "getAll": async function () {
                let c = db.get("pterodactyl-files")
                if (!c) c = await servers.files()
                return c || {}
            },
        },
        "console": servers.consoleWS,
        "changeState": async function (a, b) {
            return await servers.changeState(a, b) || { success: false, error: 0 }
        },
        "sendCommand": async function (a, b) {
            return await servers.sendCommand(a, b) || { success: false, error: 0 }
        },
        "create": async function (a, b) {
            return await servers.createServer(a, b) || { success: false, error: 0 }
        },
        "delete": async function (a, b) {
            return await servers.deleteServer(a, b) || { success: false, error: 0 }
        },
        "update": async function (a, b) {
            return await servers.updateServer(a, b) || { success: false, error: 0 }
        }
    },
    "nodes": {
        "get": async function (a) {
            let c = await db.get("pterodactyl-nodes")
            if (!c) c = await nodes.nodes()
            let b = c.find(i => i.attributes.id === parseInt(a))
            return b ?? ""
        },
        "getAll": async function () {
            let a = await db.get("pterodactyl-nodes")
            if (!a) a = await nodes.nodes()
            return a || []
        },
        "getConfig": async function (a) {
            let c = await db.get("pterodactyl-nodes")
            if (!c) c = await nodes.nodes()
            let b = c.find(i => i.attributes.id === parseInt(a))
            return b.attributes.configuration ?? ""
        },
        "getSystemInfo": async function (a) {
            let c = await db.get("pterodactyl-nodes")
            if (!c) c = await nodes.nodes()
            let b = c.find(i => i.attributes.id === parseInt(a))
            return b.attributes.system ?? ""
        },
        "changeLocation": async function (a, b) {
            let c = await nodes.changeLocation(a, b)
            return c
        },
    },
    "nests": {
        "get": async function (a) {
            let c = await db.get("pterodactyl-eggs")
            if (!c) c = await eggs.eggs()
            let b = c.find(i => i.attributes.id === parseInt(a))
            return b ?? ""
        },
        "getAll": async function () {
            let a = await db.get("pterodactyl-eggs")
            if (!a) a = await eggs.eggs()
            return a || []
        }
    },
    "eggs": {
        "get": async function (a) {
            let b = await db.get("pterodactyl-eggs")
            if (!b) b = await eggs.eggs()
            let d;
            b.forEach(i => {
                let c = i.attributes.relationships.eggs.data.find(j => j.attributes.id === parseInt(a))
                if (c) {
                    d = c
                    return c
                }
            });
            return d
        },
        "getAll": async function () {
            let a = await db.get("pterodactyl-eggs")
            if (!a) a = await eggs.eggs()
            let b = []
            for (let i of a) {
                for (let j of i.attributes.relationships.eggs.data) {
                    b.push(j)
                }
            }
            return b || []
        }
    },
    "nests": {
        "get": async function (a) {
            let b = await db.get("pterodactyl-eggs")
            if (!b) b = await eggs.eggs()
            let c = await b.find(i => i.attributes.id == a)
            return c
        },
        "getAll": async function () {
            let a = await db.get("pterodactyl-eggs")
            if (!a) a = await eggs.eggs()
            return a
        }
    },
    "locations": {
        "get": async function (a) {
            let b = await db.get("pterodactyl-locations")
            if (!b) b = await locations.locations()
            let c = b.find(i => i.attributes.id === parseInt(a))
            return c || ""
        },
        "getAll": async function (b) {
            let a = await db.get("pterodactyl-locations")
            if (!a) a = await locations.locations()
            let c = a.find(i => i.attributes.id === parseInt(b))
            return c.attributes.relationships.eggs.data || []
        },
        "modify": locations.modifySettings,
        "create": locations.createLocation,
        "delete": locations.deleteLocation
    },
    "users": {
        "get": async function (a) {
            let c = await db.get("pterodactyl-users")
            if (!c) c = await users.users()
            let b;
            if (typeof a == "number") {
                b = c.find(i => i.attributes.id === parseInt(a))
            } else {
                b = c.find(i => i.attributes.uuid === a)
            }
            return b ?? ""
        },
        "getAll": async function () {
            let a = await db.get("pterodactyl-users")
            if (!a) a = await users.users()
            return a || []
        },
        "create": async function (a) {
            return await users.create(a) || { success: false, error: 0 }
        },
        "modify": async function (a, b) {
            return await users.modify(a, b) || { success: false, error: 0 }
        },
        "delete": async function (a) {
            return await users.delete(a) || { success: false, error: 0 }
        },
        "servers": async function (a) {
            let c = await db.get("pterodactyl-users")
            if (!c) c = await users.users()
            let b;
            if (typeof a == "number") {
                b = c.find(i => i.attributes.id === parseInt(a))
            } else {
                b = c.find(i => i.attributes.uuid === a)
            }
            return b.attributes.relationships.servers.data ?? ""
        },
    },
    "refresh": {
        "all": function () {
            servers.servers(),
            locations.locations(),
            users.users(),
            nodes.nodes(),
            eggs.eggs()
        },
        "servers": servers.servers(),
        "locations": locations.locations(),
        "users": users.users(),
        "nodes": nodes.nodes(),
        "eggs": eggs.eggs(),
    },
    "config": {
        "get": settings || {},
        "set": function (a) {
            settings = a
            return { success: true, code: 200  }
        }
    },
    "manifest": require('./manifest.json')
}