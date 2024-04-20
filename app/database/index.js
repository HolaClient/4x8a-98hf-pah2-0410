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
 * @author CR072 <crazymath072@holaclient.tech>
 * @license MIT
 * 
 * https://x.holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * index.js - Database factory file executor.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../src/utils/modules')
const path = require('path')
const crypt = modules.crypt;
const fs = require('fs')
module.exports = async function (app, db) {
    let factories = await db.get('core', 'migrations');
    if (!factories) {factories = [];}
    const mp = '../../app/database/factories';
    let available = fs.readdirSync(path.resolve(__dirname, mp))
    
    if (!available.length) {
        throw new Error('Factories directory not found! Please create it in the databases directory and try again.');
    }
    //mf !== mother fakar moment
    for (const mf of available) {
        if (!factories.includes(mf)) {
            const mfPath = path.join(mp, mf);
            try {
                require(mfPath)(db)
                factories.push(mf);
                await db.set('core', 'migrations', factories);
                console.log(`${mf} got executed successfully.`);
            } catch (error) {
                console.error(`Error executing migration ${mf}:`, error);
            }
        }
    }
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
**/