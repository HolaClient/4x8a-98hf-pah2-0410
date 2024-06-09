<<<<<<< HEAD
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
 * statistics.js - Admin home statistics updater.
 *--------------------------------------------------------------------------
*/
const users = require('../../cache/users')
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    let totalCoins
    let resources = { memory: {}, disk: {}, cpu: {} };
    app.get("/api/admin/statistics", core.admin, async (req, res) => {
        try {
            let a = await users.getAll() || []
            let b = await ptero.servers.getAll() || []
            let c = queue.get.server() || []
            let d = await ptero.nodes.getAll() || []
            let data = {
                users: a.length ?? 0,
                servers: b.length ?? 0,
                queue: c.length ?? 0,
                nodes: d.length ?? 0,
                coins: totalCoins ?? 0,
                resources: resources
            };
            core.json(req, res, true, "SUCCESS", data);
        } catch (error) {
            console.error(error)
            core.json(req, res, false, "ERROR", error)
        }
    });

    async function cache() {
        try {
            let a = await users.getAll() || {};
            let b = [];
            for (let i in a) {
                let c = await db.get("economy", i);
                if (c && c.coins) {
                    b.push(parseInt(c.coins));
                }
            }
            totalCoins = b.reduce((a, b) => a + b, 0);
            let d = await ptero.nodes() || [];
            for (let i of d) {
                resources.memory["total"] = (parseInt(resources.memory["total"] ?? 0) + parseInt(i.attributes.memory));
                resources.memory["used"] = (parseInt(resources.memory["used"] ?? 0) + parseInt(i.attributes.allocated_resources.memory));
                resources.disk["total"] = (parseInt(resources.disk["total"] ?? 0) + parseInt(i.attributes.disk));
                resources.disk["used"] = (parseInt(resources.disk["used"] ?? 0) + parseInt(i.attributes.allocated_resources.disk));
                resources.cpu["total"] = (parseInt(resources.cpu["total"] ?? 0) + parseInt(i.attributes.cpu.cpu_count * 100));
                let e = 0;
                i.attributes.relationships.servers.data.forEach(j => { e = parseInt(e) + parseInt(j.attributes.limits.cpu); });
                resources.cpu["used"] = (parseInt(resources.cpu["used"] ?? 0) + parseInt(e));
            }
        } catch (error) {
            console.error(error)
            return
        }
    }
    setInterval(() => { cache() }, 60000 * 5);
    cache()
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
 * statistics.js - Admin home statistics updater.
 *--------------------------------------------------------------------------
*/
const users = require('../../utils/users')
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    let totalCoins
    let resources = { memory: {}, disk: {}, cpu: {} };
    app.get("/api/admin/statistics", core.admin, async (req, res) => {
        try {
            let a = await users.getAll() || []
            let b = await ptero.servers.getAll() || []
            let c = queue.get.server() || []
            let d = await ptero.nodes.getAll() || []
            let data = {
                users: a.length ?? 0,
                servers: b.length ?? 0,
                queue: c.length ?? 0,
                nodes: d.length ?? 0,
                coins: totalCoins ?? 0,
                resources: resources
            };
            core.json(req, res, true, "SUCCESS", data);
        } catch (error) {
            console.error(error)
            core.json(req, res, false, "ERROR", error)
        }
    });

    async function cache() {
        try {
            let a = await users.getAll() || {};
            let b = [];
            for (let i in a) {
                let c = await db.get("economy", i);
                if (c && c.coins) {
                    b.push(parseInt(c.coins));
                }
            }
            totalCoins = b.reduce((a, b) => a + b, 0);
            let d = await ptero.nodes.getAll() || [];
            for (let i of d) {
                resources.memory["total"] = (parseInt(resources.memory["total"] ?? 0) + parseInt(i.attributes.memory));
                resources.memory["used"] = (parseInt(resources.memory["used"] ?? 0) + parseInt(i.attributes.allocated_resources.memory));
                resources.disk["total"] = (parseInt(resources.disk["total"] ?? 0) + parseInt(i.attributes.disk));
                resources.disk["used"] = (parseInt(resources.disk["used"] ?? 0) + parseInt(i.attributes.allocated_resources.disk));
                resources.cpu["total"] = (parseInt(resources.cpu["total"] ?? 0) + parseInt(i.attributes.cpu.system.cpu_threads * 100));
                let e = 0;
                i.attributes.relationships.servers.data.forEach(j => { e = parseInt(e) + parseInt(j.attributes.limits.cpu); });
                resources.cpu["used"] = (parseInt(resources.cpu["used"] ?? 0) + parseInt(e));
            }
        } catch (error) {
            console.error(error)
            return
        }
    }
    setInterval(() => { cache() }, 60000 * 5);
    cache()
>>>>>>> 08cb23d (04-06)
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
 * statistics.js - Admin home statistics updater.
 *--------------------------------------------------------------------------
*/
const users = require('../../utils/users')
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    let totalCoins
    let resources = { memory: {}, disk: {}, cpu: {} };
    app.get("/api/admin/statistics", core.admin, async (req, res) => {
        try {
            let a = await users.getAll() || []
            let b = await ptero.servers.getAll() || []
            let c = queue.get.server() || []
            let d = await ptero.nodes.getAll() || []
            let data = {
                users: a.length ?? 0,
                servers: b.length ?? 0,
                queue: c.length ?? 0,
                nodes: d.length ?? 0,
                coins: totalCoins ?? 0,
                resources: resources
            };
            core.json(req, res, true, "SUCCESS", data);
        } catch (error) {
            System.err.println(error)
            core.json(req, res, false, "ERROR", error)
        }
    });

    async function cache() {
        try {
            let a = await users.getAll() || {};
            let b = [];
            for (let i in a) {
                let c = await db.get("economy", i);
                if (c && c.coins) {
                    b.push(parseInt(c.coins));
                }
            }
            totalCoins = b.reduce((a, b) => a + b, 0);
            let d = await ptero.nodes.getAll() || [];
            for (let i of d) {
                resources.memory["total"] = (parseInt(resources.memory["total"] ?? 0) + parseInt(i.attributes.memory));
                resources.memory["used"] = (parseInt(resources.memory["used"] ?? 0) + parseInt(i.attributes.allocated_resources.memory));
                resources.disk["total"] = (parseInt(resources.disk["total"] ?? 0) + parseInt(i.attributes.disk));
                resources.disk["used"] = (parseInt(resources.disk["used"] ?? 0) + parseInt(i.attributes.allocated_resources.disk));
                resources.cpu["total"] = (parseInt(resources.cpu["total"] ?? 0) + parseInt(i.attributes.cpu.system.cpu_threads * 100));
                let e = 0;
                i.attributes.relationships.servers.data.forEach(j => { e = parseInt(e) + parseInt(j.attributes.limits.cpu); });
                resources.cpu["used"] = (parseInt(resources.cpu["used"] ?? 0) + parseInt(e));
            }
        } catch (error) {
            System.err.println(error)
            return
        }
    }
    setInterval(() => { cache() }, 60000 * 5);
    cache()
>>>>>>> fcca946 (09-06)
}