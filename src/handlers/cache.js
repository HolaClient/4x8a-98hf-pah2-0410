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
const path = require('path');

/**
 * Function to set a value in the cache
 * @param {string} a - The key for the cache
 * @param {object} b - The value to be cached
 * @returns {Promise<void>}
 */
async function set(a, b) {
    const c = path.join(__dirname, '../../storage/cache/', `${a}.json`);
    try {
        await fs.writeFile(c, JSON.stringify(b, null, 2));
    } catch (e) {
        if (e.code === 'ENOENT') {
            try {
                await fs.writeFile(c, JSON.stringify(b, null, 2));
            } catch (err) {
                console.error('Error in set:', err);
                throw err;
            }
        } else {
            console.error('Error in set:', e);
            throw e;
        }
    }
}

/**
 * Function to get a value from the cache
 * @param {string} a - The key for the cache
 * @returns {Promise<object>}
 */
async function get(a) {
    const c = path.join(__dirname, '../../storage/cache/', `${a}.json`);
    try {
        const d = await fs.readFile(c, 'utf-8');
        return JSON.parse(d || '{}');
    } catch (f) {
        if (f.code === 'ENOENT') {
            try {
                await fs.writeFile(c, JSON.stringify({}, null, 2));
                return {};
            } catch (err) {
                console.error('Error in get:', err);
                throw err;
            }
        } else {
            console.error('Error in get:', f);
            throw f;
        }
    }
}

/**
 * Function to remove a value from the cache
 * @param {string} a - The key for the cache
 * @returns {Promise<boolean>}
 */
async function remove(a) {
    const c = path.join(__dirname, '../../storage/cache/', `${a}.json`);
    try {
        const d = await fs.readFile(c, 'utf-8');
        const e = JSON.parse(d || '{}');
        if (e !== undefined) {
            delete e;
            await fs.writeFile(c, JSON.stringify(e, null, 2));
            return true;
        } else {
            return false;
        }
    } catch (f) {
        console.error('Error in remove:', f);
        throw f;
    }
}

module.exports = { get, set, delete: remove };

/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/
