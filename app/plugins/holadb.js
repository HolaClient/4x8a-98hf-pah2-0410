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
 * jsondb.js - JSON Database adapter for HC-X
 *--------------------------------------------------------------------------
*/
const fs = require('fs/promises');
const path = require('path');

async function set(a, b, c) {
    const d = path.join(__dirname, '../../storage/database/', `${a}.json`);
    let e;
    let old;
    try {
        e = await fs.readFile(d, 'utf-8');
        old = e;
        let f = JSON.parse(e);
        f[b] = c;
        await writeFile(d, f);
    } catch (error) {
        if (error.code === 'ENOENT') {
            const h = { [b]: c };
            await writeFile(d, h);
        } else {
            console.error('[DB] Error in set:', error);
            if (e) {
                try {
                    await writeFile(d, JSON.parse(e));
                } catch (error) {
                    await writeFile(d, JSON.parse(old));
                }
            } else {
                await writeFile(d, {});
            }
            console.error(error);
            return;
        }
    }
    return true;
}

async function writeFile(a, b) {
    try {
        try {
            //await fs.rm(a, { force: true });
        } catch (err) {
        }
        await fs.writeFile(a, JSON.stringify(b, null, 2), "utf-8");
        return true;
    } catch (err) {
        return false;
    }
}

async function get(a, b) {
    const c = path.join(__dirname, '../../storage/database/', `${a}.json`);
    return fs.readFile(c, 'utf-8')
        .then(d => {
            const e = JSON.parse(d || '{}');

            if (e && e[b] !== undefined) {
                return e[b];
            } else {
                return null;
            }
        })
        .catch(f => {
            if (f.code === 'ENOENT') {
                const g = {};
                return fs.writeFile(c, JSON.stringify(g, null, 2))
                    .then(() => undefined);
            } else {
                console.error('[DB] Error in get:', f);
                return
            }
        });
}

async function remove(a, b) {
    const c = path.join(__dirname, '../../storage/database/', `${a}.json`);
    return fs.readFile(c, 'utf-8')
        .then(d => {
            const e = JSON.parse(d);
            if (e && e[b] !== undefined) {
                delete e[b];
                return fs.writeFile(c, JSON.stringify(e, null, 2))
                    .then(() => true);
            } else {
                return false;
            }
        })
        .catch(f => {
            console.error('[DB] Error in remove:', f);
            return
        });
}

async function reset(a) {
    const b = path.join(__dirname, '../../storage/database/', `${a}.json`);
    try {
        await fs.unlink(b);
        return true;
    } catch (error) {
        console.error('[DB] Error in reset:', error);
        return false;
    }
}

async function load() {
    try {
        let a = path.join(__dirname, '../../storage/database/')
        let b = await fs.readdir(a);
        for (let i of b) {
            if (i.endsWith(".json")) {
                let c = await fs.readFile(path.join(a, i), 'utf-8')
            }
        }
        return
    } catch (error) {
        console.error(error)
        return
    }
}

function info() {
    return {
        display: "HolaDB",
        name: "holadb",
        adapter: "holaclient",
        series: "X",
        type: "database",
        version: 1,
        author: "CR072",
        functions: ["get", "set", "delete", "reset", "load"]
    };
}

module.exports = { get, set, delete: remove, info, reset, load };