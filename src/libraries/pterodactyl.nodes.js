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
 * nodes.js - Wrapper modules to get nodes from Pterodactyl panel.
 *--------------------------------------------------------------------------
*/
const db = require('../handlers/database.js')
/**
 *--------------------------------------------------------------------------
 * Exporting all nodes
 *--------------------------------------------------------------------------
*/
module.exports = async () => {
    let pterodactyl = await db.get("pterodactyl", "settings")
    if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
        try {
            let a = 1;
            let b = 1;
            let c = [];
            while (a <= b) {
                let d = await fetch(`${pterodactyl.domain}/api/application/nodes?include=allocations,location,servers&per_page=100&page=${a}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${pterodactyl.app}`,
                    },
                });
                let e = await d.json();
                let k = {}
                for (let i of e.data) {
                    k = i
                    let f = await fetch(`${pterodactyl.domain}/api/application/nodes/${i.attributes.id}/configuration`, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${pterodactyl.app}`,
                        },
                    });
                    let g = await f.json()
                    let h = await fetch(`${i.attributes.scheme}://${i.attributes.fqdn}:${i.attributes.daemon_listen}/api/system`, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${g.token}`,
                        },
                    });
                    let j = await h.json()
                    k.attributes["cpu"] = j
                    c.push(k);
                }
                b = e.meta.pagination.total_pages;
                a++;
            }
            await cacheDB.set("pterodactyl-nodes", c);
            return c
        } catch (error) {
            console.error(error)
            return
        }
    } else {
        return
    }
}