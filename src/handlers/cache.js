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
 * cache.js - Application cache handler file.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Actual code
 *--------------------------------------------------------------------------
*/
const fs = require('fs').promises;

function set(a, b) {
    const c = path.join(__dirname, '../../storage/cache/', `${a}.json`);
    return fs.writeFile(c, JSON.stringify(b, null, 2))
        .catch(e => {
            if (e.code === 'ENOENT') {
                return fs.writeFile(c, JSON.stringify(b, null, 2));
            } else {
                console.error('Error in set:', e);
                throw e;
            }
        });
}

function get(a) {
    const c = path.join(__dirname, '../../storage/cache/', `${a}.json`);
    return fs.readFile(c, 'utf-8')
        .then(d => JSON.parse(d || '{}'))
        .catch(f => {
            if (f.code === 'ENOENT') {
                return fs.writeFile(c, JSON.stringify({}, null, 2)).then(() => undefined);
            } else {
                console.error('Error in get:', f);
                throw f;
            }
        });
}

function remove(a) {
    const c = path.join(__dirname, '../../storage/cache/', `${a}.json`);
    return fs.readFile(c, 'utf-8')
        .then(d => {
            const e = JSON.parse(d || '{}');
            if (e !== undefined) {
                delete e;
                return fs.writeFile(c, JSON.stringify(e, null, 2)).then(() => true);
            } else {
                return false;
            }
        })
        .catch(f => {
            console.error('Error in remove:', f);
            throw f;
        });
}

module.exports = { get, set, delete: remove };

/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/