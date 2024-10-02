let totalServers = [];

function set(array) {
    totalServers = array;
}

function get() {
    return totalServers;
}

function add(server) {
    totalServers.push(server);
}

function remove(server) {
    totalServers = totalServers.filter(s => s.id !== server.id);
}

function update(server) {
    totalServers = totalServers.map(s => s.id === server.id ? server : s);
}

function clear() {
    totalServers = [];
}

function getByUser(user) {
    return totalServers.filter(s => s.user === user);
}

async function fetchAllServers() {
    const servers = await db.get("servers", "list") || [];
    set(servers);
    return servers;
}

module.exports = {
    set,
    get,
    add,
    remove,
    update,
    clear,
    fetchAllServers,
    getByUser
}