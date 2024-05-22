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
const modules = require('../../src/utils/modules.js')
const readline = require('readline');
const { Console } = require('console');
const fse = require('fs-extra')
module.exports = function () {
    const a = new Console(process.stdout);
    a.error = () => { };
    global.console = a;
    console.clear()
    console.log(chalk.white("======================================================="));
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Are you sure you want to reset to factory defaults? [y/N]: ', async (sure) => {
        if (sure && sure.toLowerCase() == "y" || sure.toLowerCase() == "yes" || sure.toLowerCase() == "true") {
            let a = Date.now()
            console.log('Purging databases...')
            fse.removeSync('../../storage/database')
            console.log('Purging cache...')
            fse.removeSync('../../storage/cache')
            console.log('Purging CDN files...')
            fse.removeSync('../../storage/cdn')
            console.log('Purging logs...')
            fse.removeSync('../../storage/logs')
            console.log('Purging updates files...')
            fse.removeSync('../../storage/updates')
            console.log('Unlinking files...')
            fse.removeSync('../../storage/installed.txt')
            console.log(chalk.white("======================================================="));
            console.log("* Successfully rolled back to the factory version. " + chalk.gray(`${(Date.now() - parseInt(a))}ms`))
            console.log("* Please restart the app to apply changes!")
            console.log(chalk.white("======================================================="));
        }
        rl.close();
        process.exit()
    });
};