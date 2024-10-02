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
 * intents.js - Intents seeder.
 *--------------------------------------------------------------------------
*/
let intents = {
    "user": [
        "hcx.roles.guest"
    ],
    "mod": [
        "hcx.roles.user"
    ],
    "admin": [
        "hcx.roles.mod"
    ]
}
let status = false
function seed() {
    return
}

function get(a) {
    if (status === false) build()
    return intents[a]
}

function build() {
    let user = {
        pages: ["home", "dashboard", "deploy.*", "economy.*", "account.*", "notifications.*", "requests.*", "market.*", "chat.*"]
    }
    let mod = {
        pages: ["home", "statistics.*", "servers.*", "users.*", "posts.*", "alerts.*", "locales.*"]
    }
    let admin = {
        pages: ["logs.*", "console.*", "wcli.*", "settings.*", "templates.*"]
    }
    for (let i of user.pages) {
        intents.user.push(`hcx.pages.${i}`)
    }
    for (let i of mod.pages) {
        intents.mod.push(`hcx.pages.admin.${i}`)
    }
    for (let i of admin.pages) {
        intents.admin.push(`hcx.pages.admin.${i}`)
    }
    status = true
}

module.exports = { seed, get }