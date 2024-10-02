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

async function removeIntent(userId, intentToRemove) {
    let users = await db.get("permissions", "users");
    let user = users.find(u => u.id === parseInt(userId));
    if (user) {
        user.intents = user.intents.filter(intent => intent !== intentToRemove);
        await db.set("permissions", "users", users);
    }
    return user;
}

async function addIntent(userId, intentToAdd) {
    let users = await db.get("permissions", "users");
    let user = users.find(u => u.id === parseInt(userId));
    if (user) {
        if (Array.isArray(user.intents) !== true) user.intents = []
        user.intents.push(intentToAdd);
        await db.set("permissions", "users", users);
    }
    return user;
}

async function cache() {
    return
}

module.exports = {
    removeIntent, cache, addIntent
}