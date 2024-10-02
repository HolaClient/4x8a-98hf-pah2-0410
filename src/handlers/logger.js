module.exports = {
    "security": async function (a) {
        const logs = await db.get("logs", "security") || [];
        logs.push({
            message: a,
            date: Date.now()
        });
        await db.set("logs", "logs", logs)
    },
    "admin": async function (a) {
        const logs = await db.get("logs", "administration") || [];
        logs.push({
            message: a,
            date: Date.now()
        });
        await db.set("logs", "logs", logs)
    },
    "subdomains": async function (a) {
        const logs = await db.get("logs", "subdomains") || [];
        logs.push({
            message: a,
            date: Date.now()
        });
        await db.set("logs", "logs", logs)
    }
}