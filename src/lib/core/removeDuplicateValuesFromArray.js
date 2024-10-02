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
module.exports = function (a) {
    if (a.length === 0) return a;
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (i === 0 || !binary(b, a[i])) {
            b.push(a[i]);
        }
    }
    return b;
}
function binary(a, b) {
    let c = 0;
    let d = a.length - 1;
    while (c <= d) {
        let e = Math.floor((c + d) / 2);
        if (a[e] === b) {
            return true;
        } else if (a[e] < b) {
            c = e + 1;
        } else {
            d = e - 1;
        }
    }
    return false;
}