const chalk = require('chalk');
const Keyv = require('keyv');

const createDB = (table) => {
    return new Keyv(`mysql://${process.env.MYSQL_DB_USERNAME}:${process.env.MYSQL_DB_PASSWORD}@${process.env.MYSQL_DB_HOST}:${process.env.MYSQL_DB_PORT}/${process.env.MYSQL_DB_DATABASE}`, { table });
};

const core = createDB('core');
const users = createDB('users');
const ips = createDB('ips');

core.on('error', err => {
    console.log(chalk.red('[DATABASE] An error occurred while accessing the database: ', err));
});

const get = async (db, key) => {
    try {
        return await db.get(key);
    } catch (error) {
        console.error(`Error getting ${key} from ${db.opts.table}: ${error.message}`);
        throw error;
    }
};

const set = async (db, key, value) => {
    try {
        return await db.set(key, value);
    } catch (error) {
        console.error(`Error setting ${key} in ${db.opts.table}: ${error.message}`);
        throw error;
    }
};

const del = async (db, key) => {
    try {
        const currentValue = await db.get(db.opts.table);
        if (currentValue && currentValue.hasOwnProperty(key)) {
            delete currentValue[key];
            return await db.set(db.opts.table, currentValue);
        } else {
            return Promise.resolve();
        }
    } catch (error) {
        console.error(`Error deleting ${key} from ${db.opts.table}: ${error.message}`);
        throw error;
    }
};

module.exports = {
    core,
    users,
    ips,
    get: (table, key) => get(createDB(table), key),
    set: (table, key, value) => set(createDB(table), key, value),
    delete: (table, key) => del(createDB(table), key),
};
