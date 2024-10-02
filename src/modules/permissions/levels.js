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
let roles = []

async function get(a) {
    let b = roles || await db.get("permissions", "roles")
    return b.find(i => parseInt(i.id) === parseInt(a))
}

async function getByName(a) {
    let b = roles || await db.get("permissions", "roles")
    return b.find(i => i.name.toLowerCase() == a.toLowerCase())
}

async function set(a) {
    let b = roles || await db.get("permissions", "roles")
    b.push(a)
}

async function cache() {
    roles = await db.get("permissions", "roles") || []
    return
}

module.exports = {
    get, getByName, set, cache
}