const db = require('./db')
async function settings() {
    return await db.get('core', 'settings') ?? []
}

async function eggs() {
    return await db.get('core', 'eggs') ?? []
}

module.exports = { settings, eggs }
