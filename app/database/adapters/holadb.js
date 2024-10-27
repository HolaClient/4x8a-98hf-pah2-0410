const fs = require('fs/promises');
const path = require('path');

let cache = {};
let queue = [];

// Function to process the queue
async function processQueue() {
    while (true) {
        if (queue.length > 0) {
            const { type, a, b, c } = queue.shift();
            const filePath = path.join(__dirname, '../../../storage/database/', `${a}.json`);
            try {
                let fileContent = await fs.readFile(filePath, 'utf-8');
                let jsonData = JSON.parse(fileContent);
                if (type === 'set') {
                    jsonData[b] = c;
                } else if (type === 'delete') {
                    delete jsonData[b];
                } else if (type === 'reset') {
                    jsonData = {};
                }
                await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
            } catch (error) {
                console.error(`Error processing queue for table ${a}:`, error);
            }
        } else {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}

// Function to load cache from files
async function loadCache() {
    const dirPath = path.join(__dirname, '../../../storage/database/');
    const files = await fs.readdir(dirPath);
    for (const file of files) {
        if (file.endsWith('.json')) {
            const fileContent = await fs.readFile(path.join(dirPath, file), 'utf-8');
            cache[file.replace('.json', '')] = JSON.parse(fileContent);
        }
    }
}

// Function to set a value in the cache and queue
async function set(a, b, c) {
    try {
        if (!cache[a]) cache[a] = {};
        cache[a][b] = c;
        queue.push({ type: 'set', a, b, c });
    } catch (error) {
        console.error('Error in set:', error);
    }
}

// Function to get a value from the cache
async function get(a, b) {
    try {
        if (cache[a] && cache[a][b] !== undefined) {
            return cache[a][b];
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error in get:', error);
        return null;
    }
}

// Function to remove a value from the cache and queue
async function remove(a, b) {
    try {
        if (cache[a] && cache[a][b] !== undefined) {
            delete cache[a][b];
            queue.push({ type: 'delete', a, b });
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error in remove:', error);
        return false;
    }
}

// Function to reset a table in the cache and queue
async function reset(a) {
    try {
        cache[a] = {};
        queue.push({ type: 'reset', a });
        return true;
    } catch (error) {
        console.error('Error in reset:', error);
        return false;
    }
}

// Function to scan the cache for values containing a substring
async function scan(a, b) {
    try {
        const result = {};
        const table = cache[a] || {};
        for (const key in table) {
            if (table[key].includes(b)) {
                result[key] = table[key];
            }
        }
        return result;
    } catch (error) {
        console.error('Error in scan:', error);
        return {};
    }
}

// Function to check if a value exists in the cache
async function exists(a, b) {
    try {
        return cache[a] && cache[a][b] !== undefined;
    } catch (error) {
        console.error('Error in exists:', error);
        return false;
    }
}

// Function to return information about the database
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

// Function to load the cache and start processing the queue
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
