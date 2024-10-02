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
function all(req) {
    let b = req?.headers?.cookie || req.getHeader('cookie');
    let c = {};
    if (b) {
        b.split(';').forEach(i => {
            let d = i.split('=');
            let e = d.shift().trim();
            try {
                c[e] = decodeURIComponent(d.join('='));
            } catch (e) {
                c[e] = d.join('=');
            }
        });
    }
    return c;
}

function get(req, a) {
    let b = all(req)
    return b[a];
}

function getByHeader(req, a) {
    let b = req
    let c = {};
    if (b) {
        b.split(';').forEach(i => {
            let d = i.split('=');
            let e = d.shift().trim();
            try {
                c[e] = decodeURIComponent(d.join('='));
            } catch (e) {
                c[e] = d.join('=');
            }
        });
    }
    return c[a];
}

function set(res, a, b) {
    const c = 30 * 24 * 60 * 60;
    const d = new Date(Date.now() + c * 1000).toUTCString();
    res.setHeader('Set-Cookie', `${a}=${b}; Path=/; Expires=${d}; Max-Age=${c};`);
}

function del(res, a) {
    res.setHeader('Set-Cookie', `${a}=deleted; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);
    return;
}

module.exports = { all, get, set, delete: del, getByHeader }