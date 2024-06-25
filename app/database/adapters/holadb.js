const fs = require('fs/promises');
const path = require('path');

let cache = {};
let queue = [];

async function processQueue() {
    while (true) {
        if (queue.length > 0) {
            const { a, b, c, d } = queue.shift();
            const e = path.join(__dirname, '../../../storage/database/', `${b}.json`);
            try {
                let f = await fs.readFile(e, 'utf-8');
                let g = JSON.parse(f);
                if (a === 'set') {
                    g[c] = d;
                } else if (a === 'delete') {
                    delete g[c];
                }
                await fs.writeFile(e, JSON.stringify(g, null, 2));
            } catch (error) {
                console.error(`Error processing queue for table ${b}:`, error);
            }
        } else {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}

async function loadCache() {
    const a = path.join(__dirname, '../../../storage/database/');
    const b = await fs.readdir(a);
    for (const i of b) {
        if (i.endsWith('.json')) {
            const c = await fs.readFile(path.join(a, i), 'utf-8');
            cache[i.replace('.json', '')] = JSON.parse(c);
        }
    }
}

async function set(a, b, c) {
    if (!cache[a]) cache[a] = {};
    cache[a][b] = c;
    queue.push({ type: 'set', a, b, c });
}

async function get(a, b) {
    if (cache[a] && cache[a][b] !== undefined) {
        return cache[a][b];
    } else {
        return null;
    }
}

async function remove(a, b) {
    if (cache[a] && cache[a][b] !== undefined) {
        delete cache[a][b];
        queue.push({ type: 'delete', a, b });
        return true;
    }
    return false;
}

async function reset(a) {
    cache[a] = {};
    queue.push({ type: 'reset', a });
    return true;
}

async function scan(a, b) {
    const c = {};
    const d = cache[a] || {};
    for (const i in d) {
        if (d[i].includes(b)) {
            c[i] = d[i];
        }
    }
    return result;
}

async function exists(a, b) {
    return cache[a] && cache[a][b] !== undefined;
}

function info() {
    return {
        display: "JSON DB",
        name: "jsondb",
        adapter: "holaclient",
        version: 1,
        author: "CR072",
        functions: ["get", "set", "delete", "reset", "scan", "exists"]
    };
}

async function load() {
    try {
        await loadCache();
        processQueue();
    } catch (error) {
        console.error(error);
    }
}

module.exports = { get, set, delete: remove, info, reset, scan, exists, load };

load();