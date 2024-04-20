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
 * queue.js - Queue system.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
const db = require('../handlers/database.js')
let cf = require('./queue.js')
let status = false;

module.exports.server = async function () {
    let a = await db.get("queue", "servers") || []
    let b = await db.get('pterodactyl', "settings") || {}
    if (a.length !== 0) {
        let c = await ptero.nodes()
        let l = await ptero.eggs()
        for (let i of a) {
            try {
                let d = []
                let e = c.find(j => j.attributes.id == i.environment.node);
                if (!e) {
                    notify({ user: i.environment.user, message: "SERVER_CREATION_INVALID" });
                    removeServer(i);
                    let f = await db.get("resources", i.environment.user)
                    for (let [k, j] of Object.entries(i.resources)) { f[k].used = f[k].used - j };
                    await db.set("resources", i.environment.user, f);
                    return
                };
                for (let j of e.attributes.relationships.allocations.data) {
                    if (j.attributes.assigned == false) d.push(j.attributes)
                }
                let h = ((l.flatMap(j => j.attributes.relationships.eggs.data)).find(k => k.attributes.id === i.environment.egg)).attributes;
                let m = {}
                for (let i of h.relationships.variables.data) {
                    m[i.attributes.env_variable] = i.attributes.default_value
                }
                let g = await fetch(`${b.domain}/api/application/servers`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${b.app}`
                    },
                    body: JSON.stringify(
                        {
                            name: i.name,
                            user: 1,
                            egg: i.environment.egg,
                            docker_image: h.docker_image,
                            startup: h.startup,
                            environment: m,
                            limits: {
                                memory: parseInt(i.resources.memory),
                                cpu: parseInt(i.resources.cpu),
                                disk: parseInt(i.resources.disk),
                                swap: -1,
                                io: 500
                            },
                            feature_limits: {
                                databases: parseInt(i.resources.databases),
                                backups: parseInt(i.resources.backups),
                                allocations: parseInt(i.resources.allocations)
                            },
                            allocation: {
                                default: d[0].id
                            }
                        }
                    )
                });
                let n = await g.json()
                if (n.attributes) {
                    let o = await db.get("servers", i.environment.user)
                    n.attributes["queue"] = false
                    o.push(n.attributes)
                    await db.set("servers", i.environment.user, o);
                    removeServer(i);
                    notify({ user: i.environment.user, message: "SERVER_CREATION_SUCCESS" });
                } else {
                    notify({ user: i.environment.user, message: "SERVER_CREATION_ERROR" });
                    let f = await db.get("resources", i.environment.user);
                    for (let [k, j] of Object.entries(i.resources)) { f[k].used = f[k].used - j };
                    await db.set("resources", i.environment.user, f);
                    return
                }
            } catch (error) {
                console.log(error)
                notify({ user: i.environment.user, message: "SERVER_CREATION_ERROR" });
                console.error(error)
                let f = await db.get("resources", i.environment.user);
                for (let [k, j] of Object.entries(i.resources)) { f[k].used = f[k].used - j };
                await db.set("resources", i.environment.user, f);
                removeServer(i);
                return
            }
        }
    }
    status = false;
}

async function removeServer(a) {
    let b = await db.get("queue", "servers") || [];
    b = b.filter(i => i.id !== a.id);
    await db.set("queue", "servers", b);
    return
}

module.exports.start = async function () {
    if (status !== true) {
        status = true;
        await cf.server();
    }
}

module.exports = {
    "add": {
        "server": async function (a) {
            let b = await db.get("queue", "servers") || [];
            b.push(a)
            await db.set("queue", "servers", b);
            cf.start()
            return
        }
    },
    "remove": {
        "server": async function (a) {
            let b = await db.get("queue", "servers") || [];
            b = b.filter(i => i.id !== a.id);
            await db.set("queue", "servers", b);
            cf.start()
            return
        }
    }
}
cf.start()