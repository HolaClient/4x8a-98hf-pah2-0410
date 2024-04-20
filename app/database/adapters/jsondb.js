const fs = require('fs/promises');
const path = require('path');

async function set(a, b, c) {
    const d = path.join(__dirname, '../../../storage/database/', `${a}.json`);
    let e;
    try {
        e = await fs.readFile(d, 'utf-8');
        const f = JSON.parse(e);
        f[b] = c;
        await fs.writeFile(d, JSON.stringify(f, null, 2));
    } catch (g) {
        if (g.code === 'ENOENT') {
            const h = { [b]: c };
            await fs.writeFile(d, JSON.stringify(h, null, 2));
        } else {
            console.error('Error in set:', g);
            await fs.writeFile(d, '{}');
            if (e) {
                await fs.writeFile(d, e);
            }
            throw g;
        }
    }
}

function get(a, b) {
    const c = path.join(__dirname, '../../../storage/database/', `${a}.json`);

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
                console.error('Error in get:', f);
                throw f;
            }
        });
}

function remove(a, b) {
    const c = path.join(__dirname, '../../../storage/database/', `${a}.json`);
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
            console.error('Error in remove:', f);
            throw f;
        });
}

function reset(a) {
    const b = path.join(__dirname, '../../../storage/database/', `${a}.json`);
    const c = {};
    return fs.writeFile(b, JSON.stringify(c, null, 2))
        .then(() => true)
        .catch(d => {
            console.error('Error in reset:', d);
            throw d;
        });
}

function scan(a, b) {
    const c = path.join(__dirname, '../../../storage/database/', `${a}.json`);
    return fs.readFile(c, 'utf-8')
        .then(d => {
            const e = JSON.parse(d);
            if (b) {
                const f = {};
                for (const g in e) {
                    if (e[g].includes(b)) {
                        f[g] = e[g];
                    }
                }
                return f;
            } else {
                return e;
            }
        })
        .catch(h => {
            if (h.code === 'ENOENT') {
                return {};
            } else {
                console.error('Error in scan:', h);
                throw h;
            }
        });
}

function exists(a, b) {
    const c = path.join(__dirname, '../../../storage/database/', `${a}.json`);
    return fs.readFile(c, 'utf-8')
        .then(d => {
            const e = JSON.parse(d);
            return e && e[b] !== undefined;
        })
        .catch(f => {
            if (f.code === 'ENOENT') {
                return false;
            } else {
                console.error('Error in exists:', f);
                throw f;
            }
        });
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

module.exports = { get, set, delete: remove, info, reset, scan, exists };
