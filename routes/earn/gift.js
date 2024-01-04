module.exports.load = async function (app, db) {
    if (settings.allow.gift.status == true) {
        if (settings.allow.gift.coins == true) {
            app.post("/gift/coins", async (req, res) => {
                if (!req.session.pterodactyl) return res.redirect("/auth");
                if (!req.body.user || !req.body.coins) return res.json({ "success": false, "message": alerts.MISSINGFIELDS });

                let usercoins = await db.get(`coins-${req.session.userinfo.hcid}`);
                let usercoins2 = await db.get(`coins-${req.body.user}`)
                if (!usercoins2) return res.json({ "success": false, "message": alerts.INVALIDUSER });
                if (usercoins < coins) return res.json({ "success": false, "message": alerts.CANTAFFORD });
                usercoins -= coins;
                usercoins2 += coins;
                await db.set(`coins-${req.body.user}`, usercoins2)
                await db.set(`coins-${req.session.userinfo.email}`, usercoins);

                return res.json({ "success": true, "message": alerts.SUCCESS });
            })

        }
        if (settings.allow.gift.resources == true) {
            app.post("/gift/resources", async (req, res) => {
                if (!req.session.pterodactyl) return res.redirect("/auth");
                if (!req.body.user || !req.body.ram || !req.body.disk || !req.body.cpu || !req.body.servers || !req.body.databases || !req.body.allocations || !req.body.backups) return res.json({ "success": false, "message": alerts.MISSINGFIELDS });

                let userres = await db.get(`extra-${req.session.userinfo.hcid}`);
                let userres2 = await db.get(`extra-${req.body.user}`);
                if (!userres2) return res.json({ "success": false, "message": alerts.INVALIDUSER });
                if (userres.ram < req.body.ram) return res.json({ "success": false, "message": alerts.INSUFFUCIENT });
                if (userres.disk < req.body.disk) return res.json({ "success": false, "message": alerts.INSUFFUCIENT });
                if (userres.cpu < req.body.cpu) return res.json({ "success": false, "message": alerts.INSUFFUCIENT });
                if (userres.servers < req.body.servers) return res.json({ "success": false, "message": alerts.INSUFFUCIENT });
                if (userres.databases < req.body.databases) return res.json({ "success": false, "message": alerts.INSUFFUCIENT });
                if (userres.allocations < req.body.allocations) return res.json({ "success": false, "message": alerts.INSUFFUCIENT });
                if (userres.backups < req.body.backups) return res.json({ "success": false, "message": alerts.INSUFFUCIENT });

                userres.ram -= req.body.ram
                userres.disk -= req.body.disk
                userres.cpu -= req.body.cpu
                userres.servers -= req.body.servers
                userres.databases -= req.body.databases
                userres.allocations -= req.body.allocations
                userres.backups -= req.body.backups
                await db.set(`extra-${req.session.userinfo.hcid}`, userres)

                userres2.ram += req.body.ram
                userres2.disk += req.body.disk
                userres2.cpu += req.body.cpu
                userres2.servers += req.body.servers
                userres2.databases += req.body.databases
                userres2.allocations += req.body.allocations
                userres2.backups += req.body.backups
                await db.set(`extra-${req.body.user}`, userres2)
                return res.json({ "success": true, "message": alerts.SUCCESS });
            })
        }
    }
}