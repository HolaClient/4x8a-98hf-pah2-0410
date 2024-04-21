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
 * crypt.js - Global generation & encryption functions exporter.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../utils/modules')
const crypto = require('crypto')
const crypt = require('./crypt')
/**
 *--------------------------------------------------------------------------
 * Exporting gen(88, 62, 52, 36), base64(x), hash, encrypt, decrypt & cookies.
 *--------------------------------------------------------------------------
*/
module.exports.gen88 = function (a) {
    const b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    return generate(a, b);
};

module.exports.gen62 = function (a) {
    const b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return generate(a, b);
};

module.exports.gen52 = function (a) {
    const b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return generate(a, b);
};

module.exports.gen36 = function (a) {
    const b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return generate(a, b);
};

module.exports.base64 = function (a) {
    return `base64:${Buffer.from(crypt.gen62(a), 'utf-8').toString('base64')}`
};

module.exports.hash = function (key) {
    function check(a) {
        const b = 32;
        const c = Buffer.from(a, 'utf-8').length;
        if (c < b) {
            const d = b - c;
            const e = Buffer.alloc(d, '\0');
            return Buffer.concat([Buffer.from(a, 'utf-8'), e], b);
        } else if (c > b) {
            return Buffer.from(a, 'utf-8').slice(0, b);
        }
        return Buffer.from(a, 'utf-8');
    }
    function hash(a) {
        const b = crypto.createHash('sha256');
        b.update(a);
        return b.digest('hex');
    }
    return hash(check(key));
};

module.exports.encrypt = function (l) {
    const a = process.env.APP_KEY;

    function b(c) {
        const d = 32;
        const e = Buffer.from(c, 'utf-8').length;

        if (e < d) {
            const f = d - e;
            const g = Buffer.alloc(f, '\0');
            return Buffer.concat([Buffer.from(c, 'utf-8'), g], d);
        } else if (e > d) {
            return Buffer.from(c, 'utf-8').slice(0, d);
        }

        return Buffer.from(c, 'utf-8');
    }

    const h = b(a);
    const i = crypto.randomBytes(16);
    const j = crypto.createCipheriv('aes-256-cbc', h, i);
    let k = j.update(l, 'utf-8', 'hex');
    k += j.final('hex');
    return { iv: i.toString('hex'), hash: k };
};

module.exports.decrypt = function (l) {
    const m = process.env.APP_KEY;
    
    function n(o) {
        const p = 32;
        const q = Buffer.from(o, 'utf-8').length;

        if (q < p) {
            const r = p - q;
            const s = Buffer.alloc(r, '\0');
            return Buffer.concat([Buffer.from(o, 'utf-8'), s], p);
        } else if (q > p) {
            return Buffer.from(o, 'utf-8').slice(0, p);
        }

        return Buffer.from(o, 'utf-8');
    }

    const t = n(m);
    const u = crypto.createDecipheriv('aes-256-cbc', t, Buffer.from(l.iv, 'hex'));
    let v = u.update(l.hash, 'hex', 'utf-8');
    v += u.final('utf-8');
    return v;
};

module.exports.cookie = function (req, cname) {
    let cookies = req.headers.cookie;
    if (!cookies) return null;
    let name = cname + "=";
    let ca = cookies.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return "";
}
function generate(a, b) {
    const c = crypto.randomBytes(a);
    let d = '';
    for (let i = 0; i < a; i++) {
        d += b.charAt(c[i] % b.length);
    }
    return d;
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/