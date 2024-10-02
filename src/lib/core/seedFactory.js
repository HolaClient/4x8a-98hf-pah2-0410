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
let fs = require('fs');
let path = require('path');
let db = require('../../handlers/database')

module.exports = async function () {
    let dir = path.join('./app/schema/config')
    let files = fs.readdirSync(dir);
    let config = {};
    let pointers = {};
    files.forEach(file => {
        if (file.endsWith('.json')) {
            let filePath = path.join(dir, file);
            let data = fs.readFileSync(filePath, 'utf8');
            config[file.replace('.json', '')] = JSON.parse(data);
        }
    });
    for ([i, j] of Object.entries(config)) {
        if (typeof j == "object" && j.properties) {
            for ([k, l] of Object.entries(j.properties)) {
                resolve(l)
            }
        }
    }
    function resolve(a) {
        if (typeof a == "object" && (a.type == "object" || a.type == "array")) {
            for ([i, j] of Object.entries(a.properties)) {
                resolve(j)
            }
        } else {
            pointers[a.pointer] = a.default
        }
    }
    let a = await db.get("settings", "pointers") || {}
    for ([i, j] of Object.entries(pointers)) {
        if (!a[i]) {
            a[i] = j
        }
    }
    await db.set("settings", "pointers", a)
}