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
 * migrateFactory.js - Factory seeder function.
 *--------------------------------------------------------------------------
*/
const chalk = require('chalk');
const fs = require('fs')
const path = require('path')
const db = require('../../src/handlers/database.js')

module.exports = function () {
    console.log(chalk.white("======================================================="));
    let d = Date.now()
    const a = '../../app/database/factories';
    let b = fs.readdirSync(path.resolve(__dirname, a));
    for (const i of b) {
        const c = path.join(a, i);
        try {
            require(c)(db)
            console.log(chalk.white(`Seed ${i} executed successfully... ${chalk.gray((Date.now() - d))}ms`));
        } catch (error) {
            console.error(`Error executing seed ${i}:`, error);
        }
    }
    console.log(chalk.white("======================================================="));
    console.log(`${chalk.white('All seeds migrated successfully...')} ${chalk.gray((Date.now() - d))}ms`);
    console.log(chalk.white("======================================================="));
    return
};