let c = {};
let d = {};
let db = require('./database');

async function cache() {
    let a = await db.get("settings", "pointers");
    c = a;
    d = resolve(a);
}

function get(a) {
    return c[a];
}

function set(a, b) {
    if (a.startsWith("hcx.settings")) a = a.replace("hcx.settings.", "")
    c[a] = b;
    updateStr(d, a, b);
    setValueToDatabase()
}

async function setValueToDatabase() {
    await db.set("settings", "pointers", c)
}

function load() {
    return d;
}

function resolve(a) {
    let result = {};
    for (const [i, j] of Object.entries(a)) {
        let keys = i.split(".");
        keys.reduce((acc, cur, idx) => {
            if (idx === keys.length - 1) {
                acc[cur] = j;
            } else {
                if (!acc[cur]) acc[cur] = {};
            }
            return acc[cur];
        }, result);
    }
    return result;
}

function updateStr(e, k, v) {
    let keys = k.split(".");
    keys.reduce((acc, cur, idx) => {
        if (idx === keys.length - 1) {
            acc[cur] = v;
        } else {
            if (!acc[cur]) acc[cur] = {};
        }
        return acc[cur];
    }, e);
}

const handler = {
    get(e, f) {
        if (f in e) {
            return e[f];
        }
        return d[f];
    }
};

const proxy = new Proxy({
    cache,
    get,
    set,
    load,
}, handler);

module.exports = proxy;
