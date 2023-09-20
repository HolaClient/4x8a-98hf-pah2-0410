const fetch = require("node-fetch");

module.exports.load = async function (app, db) {
    app.get("/admin/users/coins/list", async (req, res) => {
        if (!req.session.pterodactyl) {
            return res.redirect("/auth");
        }
        if (req.session.pterodactyl.root_admin == true) {
            try {
                let page = 1;
                const coinsList = [];

                while (true) {
                    const response = await fetch(`${settings.pterodactyl.domain}/api/application/users?page=${page}`, {
                        headers: {
                            Authorization: `Bearer ${settings.pterodactyl.key}`,
                        },
                    });
                    const userData = await response.json();

                    if (userData.data.length === 0) {
                        break;
                    }

                    for (const user of userData.data) {
                        const email = user.attributes.email;
                        const hcidKey = `hcid-${email}`;
                        const hcid = await db.get(hcidKey);
                        const userinfo = await db.get("userinfo-" + hcid);
                        const coins = await db.get("coins-" + hcid);

                        if (hcid) {
                            coinsList.push({
                                username: userinfo.username,
                                hcid: hcid,
                                coins: coins,
                                email: userinfo.email,
                            });
                        }
                    }

                    page++;
                }

                res.json(coinsList);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "An error occurred while fetching data." });
            }
        } else {
            res.json({
                message: "You are not authorized to view this page.",
            });
        }
    });

    app.get("/admin/users/resources/list", async (req, res) => {
        if (!req.session.pterodactyl) {
            return res.redirect('/login');
        }
        if (req.session.pterodactyl.root_admin !== true) {
            return res.json({ success: false, message: alerts.NOTANADMIN });
        }
        try {
            let page = 1;
            const usersList = [];

            while (true) {
                const response = await fetch(`${settings.pterodactyl.domain}/api/application/users?page=${page}`, {
                    headers: {
                        Authorization: `Bearer ${settings.pterodactyl.key}`,
                    },
                });

                if (response.status !== 200) {
                    throw new Error('Failed to fetch user data from Pterodactyl API');
                }

                const userData = await response.json();

                if (userData.data.length === 0) {
                    break;
                }

                const userEmails = userData.data.map(user => user.attributes.email);

                for (const email of userEmails) {
                    const hcidKey = `hcid-${email}`;
                    const hcid = await db.get(hcidKey);

                    if (hcid) {
                        const userinfo = await db.get("userinfo-" + hcid);
                        const extra = await db.get("extra-" + hcid) || {
                            ram: 0,
                            disk: 0,
                            cpu: 0,
                            servers: 0,
                            databases: 0,
                            allocations: 0,
                            backups: 0
                        };

                        const packagename = await db.get("package-" + hcid) ?? settings.packages.default;
                        const package = settings.packages.list[packagename];
                        let ram = 0;
                        let disk = 0;
                        let cpu = 0;
                        let backups = 0;
                        let allocations = 0;
                        let databases = 0;
                        let servers = 0;

                        if (req.session.pterodactyl && req.session.pterodactyl.relationships && req.session.pterodactyl.relationships.servers && req.session.pterodactyl.relationships.servers.data) {
                            servers = req.session.pterodactyl.relationships.servers.data.length;

                            req.session.pterodactyl.relationships.servers.data.forEach(server => {
                                const limits = server.attributes.limits;
                                const feature_limits = server.attributes.feature_limits;

                                if (limits && typeof limits.memory === "number") {
                                    ram += limits.memory;
                                }
                                if (limits && typeof limits.disk === "number") {
                                    disk += limits.disk;
                                }
                                if (limits && typeof limits.cpu === "number") {
                                    cpu += limits.cpu;
                                }
                                if (feature_limits && typeof feature_limits.backups === "number") {
                                    backups += feature_limits.backups;
                                }
                                if (feature_limits && typeof feature_limits.allocations === "number") {
                                    allocations += feature_limits.allocations;
                                }
                                if (feature_limits && typeof feature_limits.databases === "number") {
                                    databases += feature_limits.databases;
                                }
                            });
                        }
                        const extraResources = {
                            ram: extra.ram,
                            disk: extra.disk,
                            cpu: extra.cpu,
                            servers: extra.servers,
                            databases: extra.databases,
                            backups: extra.backups,
                            allocations: extra.allocations
                        };
                        const usedResources = {
                            ram: ram,
                            disk: disk,
                            cpu: cpu,
                            servers: servers,
                            databases: databases,
                            backups: backups,
                            allocations: allocations
                        };

                        usersList.push({
                            username: userinfo.username,
                            hcid: hcid,
                            package: packagename,
                            extra: extraResources,
                            used: usedResources,
                            email: userinfo.email
                        });
                    }
                }

                page++;
            }

            res.json(usersList);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching data." });
        }
    });
}
