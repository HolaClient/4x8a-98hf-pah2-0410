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
 * test-db.js - Database tester.
 *--------------------------------------------------------------------------
*/
process.loadEnvFile('.env')
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');
const readline = require('readline');

async function b() {
    function c(d) {
        let e = [];
        const f = fs.readdirSync(d);
        for (let g in f) {
            let h = f[g];
            let i = path.join(d, h);
            var j = fs.statSync(i);

            if (j && j.isFile()) {
                const k = h.replace(/\.(js|ts|mjs)$/, '');
                e.push({ path: i, file: h, name: k });
            } else if (j.isDirectory()) {
                e = e.concat(c(i));
            }
        }
        return e;
    }
    const l = c('./app/plugins') || {};
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the number of tables to create: ', async (answer) => {
        const m = parseInt(answer, 10);
        if (isNaN(m) || m <= 0) {
            console.error('Invalid input. Please enter a positive number of tables.');
            rl.close();
            return;
        }
        for (let n of l) {
            try {
                let a;
                if (n.file.endsWith('.mjs')) {
                    a = import('../../app/plugins/' + n.file);
                } else if (n.file.endsWith('.js')) {
                    a = require('../../app/plugins/' + n.file);
                }
                const o = performance.now();
                await Promise.all(Array.from({ length: m }, (_, r) => 
                    a.set("test", r, r).then(() => a.delete("test", r))
                ));
                const s = performance.now();
                const t = s - o;
                console.log(`Total time taken to set ${m} table(s) for ${n.name}: ${t} milliseconds`);
            } catch (u) {
                console.error(`${n.name} ${u}`);
            }
        }
        rl.close();
        process.exit();
    });
}

b();