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
 * setup.js - Database migrator.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../utils/modules.js')
const path = require('path')
const fs = require('fs')
const db = require('../../drivers/db.js')
/**
 *--------------------------------------------------------------------------
 * Exporting setup.run()
 *--------------------------------------------------------------------------
*/
module.exports.run = async function () {
    let migrations = await db.get('core', 'migrations');
    if (!migrations) {migrations = [];}
    const mp = '../../app/databases/migrations';
    let available = fs.readdirSync(path.resolve(__dirname, mp));
    
    if (!available.length) {
        throw new Error('Migrations directory not found! Please create it in the databases directory and try again.');
    }
    //mf !== mother fakar moment
    for (const mf of available) {
        if (!migrations.includes(mf)) {
            const mfPath = path.join(mp, mf);
            try {
                const migration = require(mfPath).run()
                migrations.push(mf);
                await db.set('core', 'migrations', migrations);
                dl.t(`${mf} executed successfully.`);
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
*/