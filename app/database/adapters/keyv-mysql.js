const Keyv = require('keyv');
const env = require('dotenv').config()

const SELECT = (b) => {
    return new Keyv(`mysql://${process.env.MYSQL_USERNAME}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE}`, { table: b });
};

const get = async (a, b) => {
    try {
        return await a.get(b);
    } catch (error) {
        if (process.env.APP_ENV !== "production") {
            console.error(`Error getting ${b} from ${a.opts.table}: ${error.message}`);
        }
        throw error;
    }
};

const set = async (a, b, c) => {
    try {
        return await a.set(b, c);
    } catch (error) {
        if (process.env.APP_ENV !== "production") {
            console.error(`Error setting ${b} in ${a.opts.table}: ${error.message}`);
        }
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
        if (process.env.APP_ENV !== "production") {
            console.error(`Error deleting ${b} from ${a.opts.table}: ${error.message}`);
        }
        throw error;
    }
};

function info() {
    return {
        display: "MySQL (Keyv)",
        name: "keyv-mysql",
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