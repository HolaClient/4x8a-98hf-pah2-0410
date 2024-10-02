const list = require('./list');


async function createServer(user, config) {
    let a = await hcx.panel.servers.create(user, config);
    if (a.success) {
        list.add(a.server);
    }
    return a;
}

async function deleteServer(user, id) {
    let a = await hcx.panel.servers.delete(user, id);
    if (a.success) {
        list.remove(id);
    }
    return a;
}

async function getServer(user, id) {
    let a = await hcx.panel.servers.get(user, id);
    return a;
}

async function updateServer(user, id, config) {
    let a = await hcx.panel.servers.update(user, id, config);
    if (a.success) {
        list.update(a.server);
    }
    return a;
}

module.exports = {
    list: list,
    createServer: createServer,
    deleteServer: deleteServer,
    getServer: getServer,
    updateServer: updateServer
}