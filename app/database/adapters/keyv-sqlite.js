const Keyv = require('keyv');

// Function to create a new Keyv instance for a specific table
const SELECT = (b) => {
    return new Keyv(`sqlite://storage/database/database.sqlite`, { table: b });
};

// Function to get a value from the database
const get = async (a, b) => {
    try {
        return await a.get(b);
    } catch (error) {
        console.error(`Error getting ${b} from ${a.opts.table}: ${error.message}`);
        throw error;
    }
};

// Function to set a value in the database
const set = async (a, b, c) => {
    try {
        return await a.set(b, c);
    } catch (error) {
        console.error(`Error setting ${b} in ${a.opts.table}: ${error.message}`);
        throw error;
    }
};

// Function to delete a value from the database
const del = async (a, b) => {
    try {
        return await a.delete(b);
    } catch (error) {
        console.error(`Error deleting ${b} from ${a.opts.table}: ${error.message}`);
        throw error;
    }
};

// Function to return information about the database
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

// Exporting the functions
module.exports = {
    get: (a, b) => get(SELECT(a), b),
    set: (a, b, c) => set(SELECT(a), b, c),
    delete: (a, b) => del(SELECT(a), b),
    info
};
