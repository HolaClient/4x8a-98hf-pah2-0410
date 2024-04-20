const Keyv = require('keyv');

const SELECT = (b) => {
    return new Keyv(`sqlite://storage/database/database.sqlite`, { table: b });
};

const get = async (a, b) => {
    try {
        return await a.get(b);
    } catch (error) {
        console.error(`Error getting ${b} from ${a.opts.table}: ${error.message}`);
        throw error;
    }
};

const set = async (a, b, c) => {
    try {
        return await a.set(b, c);
    } catch (error) {
        console.error(`Error setting ${b} in ${a.opts.table}: ${error.message}`);
        throw error;
    }
};

const del = async (a, b) => {
    try {
        const c = await a.get(a.opts.table);
        if (c && c.hasOwnProperty(b)) {
            delete c[b];
            return await a.set(a.opts.table, c);
        } else {
            return Promise.resolve();
        }
    } catch (error) {
        console.error(`Error deleting ${b} from ${a.opts.table}: ${error.message}`);
        throw error;
    }
};

function info() {
    return {
        display: "SQLite (Keyv)",
        name: "keyv-sqlite",
        adapter: "keyv",
        version: 1,
        author: "Jared Wray",
        functions: ["get", "set", "delete"]
    }
}

module.exports = {
    get: (a, b) => get(SELECT(a), b),
    set: (a, b, c) => set(SELECT(a), b, c),
    delete: (a, b) => del(SELECT(a), b),
    info
};