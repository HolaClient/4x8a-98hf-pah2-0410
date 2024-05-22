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
 * users.js - Users cacher.
 *--------------------------------------------------------------------------
*/
let users = {}
let total = []
let num
async function cache() {
    let a = await db.get("users", "users") || []
    num = a.length
    let h = await db.get("pterodactyl", "settings")
    if (a.length !== 0) {
        try {
            for (let i of a) {
                let l = {}
                let b = await db.get("users", i.id);
                if (b.avatar) {
                    let c = await fetch(b.avatar);
                    let d = await c.buffer();
                    b["avatar"] = `data:${c.headers.get('content-type')};base64,${d.toString('base64')}`
                } else {
                    let c = await fetch("https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png");
                    let d = await c.buffer();
                    b["avatar"] = `data:${c.headers.get('content-type')};base64,${d.toString('base64')}`
                }
                l["hcx"] = b
                total.push(b);
                let e = await db.get("pterodactyl", "users") || []
                let f = e.find(j => j.hc == i.id);
                if (f || f !== undefined) {
                    try {
                        let g = await fetch(`${h.domain}/api/application/users/${f.id}?include=servers`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${h.app}`,
                                "Content-Type": "application/json"
                            }
                        });
                        let k = await g.json()
                        await db.set("pterodactyl", f.id, k.attributes);
                        l["ptl"] = k.attributes
                    } catch (e) {
                        console.error(e)
                    }
                }
                users[i.id] = l
            }
            await cacheDB.set("users", total)
        } catch (error) {
            console.error(error)
            return
        }
    }
};
cache();
module.exports.get = async function (a) {
    if (users[a] && users[a] !== null) { return users[a] } else {
        return await db.get("users", a);
    }
}
module.exports.getAll = async function () {
    if (num !== total.length) {
        return await cacheDB.get("users")
    } else {
        return total
    }
}