module.exports.load = async function (app, db) {
    app.post("/api/coins/add", async (req, res) => {
        const apiKey = req.headers.authorization;

        if (!apiKey) {
            return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
            return res.status(401).json({ status: 'error', message: 'Invalid API key' });
          }

        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
        let user = req.body.user;
        let coins = req.body.coins;
        if (!user) return res.status(400).json({ status: "error", message: "Missing user" });
        if (typeof coins !== "number") return res.status(400).json({ status: "error", message: "Coins must be a number" });
        if (coins < 0 || coins > 999999999999999) return res.status(400).json({ status: "error", message: "Coins value out of range" });

        try {
            if (coins === 0) {
                await db.delete("coins-" + user);
            } else {
                const oldcoins = await db.get("coins-" + user);
                const newcoins = oldcoins + coins
                await db.set("coins-" + user, newcoins);
            }
            res.json({ status: "success" });
            api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Added ${coins} coins to ${user}`, req.method);
            api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Added ${coins} coins to ${user}`, req.method);
        } catch (error) {
            console.error("[WEBSITE] An error occurred while setting coins:", error);
            return res.status(500).json({ status: "error", message: "An error occurred while setting coins" });
        }
    });

    app.post("/api/coins/set", async (req, res) => {
        const apiKey = req.headers.authorization;

        if (!apiKey) {
            return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
            return res.status(401).json({ status: 'error', message: 'Invalid API key' });
          }

        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
        let user = req.body.user;
        let coins = req.body.coins;
        if (!user) return res.status(400).json({ status: "error", message: "Missing user" });
        if (typeof coins !== "number") return res.status(400).json({ status: "error", message: "Coins must be a number" });
        if (coins < 0 || coins > 999999999999999) return res.status(400).json({ status: "error", message: "Coins value out of range" });

        try {
            if (coins === 0) {
                await db.delete("coins-" + user);
            } else {
                await db.set("coins-" + user, coins);
            }
            res.json({ status: "success" });
            api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Set coins of ${user} to ${coins}`, req.method);
            api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Set coins of ${user} to ${coins}`, req.method);
        } catch (error) {
            console.error("[WEBSITE] An error occurred while setting coins:", error);
            return res.status(500).json({ status: "error", message: "An error occurred while setting coins" });
        }
    });

    app.post("/api/coins/remove", async (req, res) => {
        const apiKey = req.headers.authorization;

        if (!apiKey) {
            return res.status(401).json({ status: "error", message: "Missing API key" });
        }
        if (apiKey !== settings.api.key) {
            return res.status(401).json({ status: 'error', message: 'Invalid API key' });
          }

        if (!req.body) return res.status(400).json({ status: "error", message: "Body cannot be empty" });
        let user = req.body.user;
        let coins = req.body.coins;
        if (!user) return res.status(400).json({ status: "error", message: "Missing user" });
        if (typeof coins !== "number") return res.status(400).json({ status: "error", message: "Coins must be a number" });
        if (coins < 0 || coins > 999999999999999) return res.status(400).json({ status: "error", message: "Coins value out of range" });

        try {
            if (coins === 0) {
                await db.delete("coins-" + user);
            } else {
                const oldcoins = await db.get("coins-" + user);
                if (oldcoins < coins) return res.status(400).json({ status: "error", message: "User doesn't have that much coins!" });
                const newcoins = oldcoins - coins
                await db.set("coins-" + user, newcoins);
            }
            res.json({ status: "success" });
            api.clog(`IP: ${req.ip}, Hostname: ${req.hostname} | Removed ${coins} coins of ${user}`, req.method);
            api.flog(`IP: ${req.ip}, Hostname: ${req.hostname} | Removed ${coins} coins of ${user}`, req.method);
        } catch (error) {
            console.error("[WEBSITE] An error occurred while setting coins:", error);
            return res.status(500).json({ status: "error", message: "An error occurred while setting coins" });
        }
    });
};