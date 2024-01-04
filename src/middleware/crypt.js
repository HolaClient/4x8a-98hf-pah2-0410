/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * theme.js - Global theming function exporter.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * loading modules
 *--------------------------------------------------------------------------
*/
const crypto = require('crypto')
const keys = require('../../app/keys/keys.json')
/**
 *--------------------------------------------------------------------------
 * Exporting gen(88, 62, 52, 36), hash, encrypt & decrypt.
 *--------------------------------------------------------------------------
*/
module.exports.gen88 = function (length) {
    function makeid(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
        const charactersLength = characters.length;
        const randomBytes = crypto.randomBytes(length);
        let result = '';

        for (let i = 0; i < length; i++) {
            const index = randomBytes[i] % charactersLength;
            result += characters.charAt(index);
        }

        return result;
    }

    return makeid(length);
};

module.exports.gen62 = function (length) {
    function makeid(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        const randomBytes = crypto.randomBytes(length);
        let result = '';

        for (let i = 0; i < length; i++) {
            const index = randomBytes[i] % charactersLength;
            result += characters.charAt(index);
        }

        return result;
    }

    return makeid(length);
};

module.exports.gen52 = function (length) {
    function makeid(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        const randomBytes = crypto.randomBytes(length);
        let result = '';

        for (let i = 0; i < length; i++) {
            const index = randomBytes[i] % charactersLength;
            result += characters.charAt(index);
        }

        return result;
    }

    return makeid(length);
};

module.exports.gen36 = function (length) {
    function makeid(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        const randomBytes = crypto.randomBytes(length);
        let result = '';

        for (let i = 0; i < length; i++) {
            const index = randomBytes[i] % charactersLength;
            result += characters.charAt(index);
        }

        return result;
    }

    return makeid(length);
};

module.exports.hash = function (key) {
    function checkKeyL(key) {
        const requiredKeyL = 32;
        const currentKeyL = Buffer.from(key, 'utf-8').length;

        if (currentKeyL < requiredKeyL) {
            const paddingLength = requiredKeyL - currentKeyL;
            const padding = Buffer.alloc(paddingLength, '\0');
            return Buffer.concat([Buffer.from(key, 'utf-8'), padding], requiredKeyL);
        } else if (currentKeyL > requiredKeyL) {
            return Buffer.from(key, 'utf-8').slice(0, requiredKeyL);
        }

        return Buffer.from(key, 'utf-8');
    }

    function hash(key) {
        const hash = crypto.createHash('sha256');
        hash.update(key);
        return hash.digest('hex');
    }

    return hash(checkKeyL(key));
};

module.exports.encrypt = function (text) {
    const key = keys.database.encryption
    function checkKeyL(key) {
        const requiredKeyL = 32;
        const currentKeyL = Buffer.from(key, 'utf-8').length;

        if (currentKeyL < requiredKeyL) {
            const paddingLength = requiredKeyL - currentKeyL;
            const padding = Buffer.alloc(paddingLength, '\0');
            return Buffer.concat([Buffer.from(key, 'utf-8'), padding], requiredKeyL);
        } else if (currentKeyL > requiredKeyL) {
            return Buffer.from(key, 'utf-8').slice(0, requiredKeyL);
        }

        return Buffer.from(key, 'utf-8');
    }

    const keyBuffer = checkKeyL(key);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), hash: encrypted };
};

module.exports.decrypt = function (hashData) {
    const key = keys.database.encryption
    function checkKeyL(key) {
        const requiredKeyL = 32;
        const currentKeyL = Buffer.from(key, 'utf-8').length;

        if (currentKeyL < requiredKeyL) {
            const paddingLength = requiredKeyL - currentKeyL;
            const padding = Buffer.alloc(paddingLength, '\0');
            return Buffer.concat([Buffer.from(key, 'utf-8'), padding], requiredKeyL);
        } else if (currentKeyL > requiredKeyL) {
            return Buffer.from(key, 'utf-8').slice(0, requiredKeyL);
        }

        return Buffer.from(key, 'utf-8');
    }

    const keyBuffer = checkKeyL(key);
    const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, Buffer.from(hashData.iv, 'hex'));
    let decrypted = decipher.update(hashData.hash, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
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
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/