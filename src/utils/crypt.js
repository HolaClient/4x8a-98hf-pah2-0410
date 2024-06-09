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
 * Exporting gen(88, 62, 52, 36, 10), base64(x), hash, encrypt & decrypt.
 *--------------------------------------------------------------------------
*/

module.exports[`gen88`] = (a) => { return generate(a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?"); };
module.exports[`gen62`] = (a) => { return generate(a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"); };
module.exports[`gen52`] = (a) => { return generate(a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"); };
module.exports[`gen36`] = (a) => { return generate(a, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"); };
module.exports[`gen26`] = (a) => { return generate(a, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"); };
module.exports[`gen10`] = (a) => { return generate(a, "1234567890"); };

function generate(a, b) {
    const c = crypto.randomBytes(a);
    let d = '';
    for (let i = 0; i < a; i++) {
        d += b.charAt(c[i] % b.length);
    }
    return d;
}

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
function getKey(key) {
    const a = 32;
    const b = Buffer.from(key, 'utf-8');
    if (b.length < a) {
        const c = Buffer.alloc(a);
        b.copy(c);
        return c;
    } else if (b.length > a) {
        return b.slice(0, a);
    }
    return b;
}
module.exports.encrypt = function (a, b) {
    const c = crypto.randomBytes(16);
    const d = crypto.createCipheriv('aes-256-cbc', b ? getKey(b) : getKey(process.env.APP_KEY), c);
    let e = d.update(a, 'utf-8', 'hex');
    e += d.final('hex');
    const f = getKey(process.env.APP_HMAC);
    const g = crypto.createHmac('sha256', f);
    g.update(e);
    return { iv: c.toString('hex'), hash: e, hmac: g.digest('hex') };
};
module.exports.decrypt = function (a, b) {
    try {
        const c = Buffer.from(a.iv, 'hex');
        const d = crypto.createDecipheriv('aes-256-cbc', b ? getKey(b) : getKey(process.env.APP_KEY), c);
        let e = d.update(a.hash, 'hex', 'utf-8');
        e += d.final('utf-8');
        const f = getKey(process.env.APP_HMAC);
        const g = crypto.createHmac('sha256', f);
        g.update(a.hash);
        const h = g.digest('hex');
        if (h !== a.hmac) {
            System.err.println(`HMAC mismatch. Possible tampering detected! ${JSON.stringify(a)}`);
            return '';
        }
        return e;
    } catch (error) {
        System.err.println(error)
        return ""
    }
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/