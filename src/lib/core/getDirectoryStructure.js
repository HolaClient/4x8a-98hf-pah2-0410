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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
const fs = require('fs');
const path = require('path');

let result = {};

function a(b, c) {
    return Promise.all(c.map(d => {
        let e = path.posix.join(...path.relative('.', path.join(b, d.name)).split(path.sep));
        return fs.promises.stat(path.join(b, d.name)).then(f => {
            if (f.isDirectory()) {
                result[e] = 'directory';
                return fs.promises.readdir(path.join(b, d.name), { withFileTypes: true }).then(g => {
                    return a(path.join(b, d.name), g);
                });
            } else {
                result[e] = 'file';
            }
        }).catch(h => {
            console.error('Error reading subdirectory:', h);
        });
    }));
}

module.exports = i => {
    return fs.promises.readdir(i, { withFileTypes: true }).then(j => {
        return a(i, j).then(() => {
            return result;
        });
    }).catch(k => {
        console.error('Error reading directory:', k);
    });
};