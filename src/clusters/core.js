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
 * core.js - Application core workers manager.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Exporting functions
 *--------------------------------------------------------------------------
*/
const { Worker, isMainThread } = require('worker_threads');
const os = require('os');

module.exports = () => {
    if (isMainThread) {
        let a = os.cpus();
        if (a.length > 4) a.pop();
        a.forEach(() => {
            addWorker();
        });
    }
};

function addWorker() {
    try {
        const a = new Worker(__filename);
        a.on('exit', (code) => {
            if (code !== 0) {
                addWorker();
            }
        });
        a.on('error', (err) => {
            console.error('Worker error:', err);
        });
    } catch (error) {
        console.error(`src/clusters/core.js:38, ${error}`)
        return
    }
}
