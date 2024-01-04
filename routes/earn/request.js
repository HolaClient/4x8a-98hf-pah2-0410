const { v4: uuidv4 } = require('uuid');

module.exports.load = async function (app, db) {
    if (settings.allow.request.status == true) {
        if (settings.allow.request.coins.status == true) {
            app.post("/request/coins", async (req, res) => {
                if (!req.session.pterodactyl) return res.json({ "success": false, "message": alerts.UNAUTHORIZED, "action": "login" });
                const coins = req.body.coins;
                const user = req.body.user;
                const limit = settings.allow.request.coins.limit;
                const dailyLimit = settings.allow.request.coins.dailyLimit;
                if (user == req.session.userinfo.hcid) return res.json({ "success": false, "message": alerts.SAMEUSER });
                if (!coins) return res.json({ "success": false, "message": alerts.MISSINGCOINS });
                if (!user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
                if (coins > limit) {
                    return res.json({ "success": false, "message": alerts.COINLIMIT + limit + " coins" });
                }
                const username = await db.get(`userinfo-${user}`);
                if (!username) return res.json({ "success": false, "message": alerts.INVALIDUSER });
                const dailyTotal = await db.get(`dailyrequests-${req.session.userinfo.hcid}`);
                if (dailyTotal) {
                    if (dailyTotal && dailyTotal >= dailyLimit) {
                        return res.json({ "success": false, "message": alerts.DAILYLIMIT });
                    }
                }
                const requestId = uuidv4();
                let request = {
                    requestId: requestId,
                    requestFrom: req.session.userinfo.username,
                    requestFromId: req.session.userinfo.hcid,
                    requestedTo: username.username,
                    requestedToId: user,
                    requestedCoins: coins,
                    requestedDate: Date.now(),
                }
                await db.set(`request-${requestId}`, request)
                let requests = await db.get(`requests-${user}`) ? await db.get(`requests-${user}`) : [];
                requests.push(requestId);
                await db.set(`requests-${user}`, requests);
                const daily = await db.get(`dailyrequests-${req.session.userinfo.hcid}`) ?? 0
                await db.set(`dailyrequests-${req.session.userinfo.hcid}`, daily + 1);

                return res.json({ "success": true, "message": alerts.REQUESTED, "request": requestId });
            });

            app.post("/request/coins/grant", async (req, res) => {
                if (!req.session.pterodactyl) return res.redirect("/login");
                const requestId = req.body.requestId;
                const user = req.session.userinfo.hcid;
                if (!requestId) return res.json({ "success": false, "message": alerts.MISSINGREQUESTID });
                const requestInfo = await db.get(`request-${requestId}`);
                if (!requestInfo) return res.json({ "success": false, "message": alerts.INVALIDREQUEST });
                const owner = requestInfo.requestFromId;
                const giverCoins = parseInt(await db.get(`coins-${user}`)) ?? 0
                const numRm = giverCoins -requestInfo.requestedCoins
                await db.set(`coins-${user}`, numRm);
                const userCoins = parseInt(await db.get(`coins-${owner}`)) || 0;
                const requestedCoins = parseInt(requestInfo.requestedCoins) || 0;
                const numAdd = userCoins + requestedCoins;
                await db.set(`coins-${owner}`, numAdd);
                let requests = (await db.get(`requests-${user}`)) || [];
                requests = requests.filter((request) => request.requestId !== requestId);
                if (requests.length == 0) {
                    await db.delete(`requests-${user}`);
                } else {
                    await db.set(`requests-${user}`, requests);
                }
                await db.delete(`request-${requestId}`);
                return res.json({ "success": true, "message": alerts.REQUESTGRANTED });
            });

            app.post("/request/coins/ignore", async (req, res) => {
                if (!req.session.pterodactyl) return res.redirect("/login");
                const requestId = req.body.requestId;
                const user = req.session.userinfo.hcid;
                if (!requestId) return res.json({ "success": false, "message": alerts.MISSINGREQUESTID });
                const requestInfo = await db.get(`request-${requestId}`);
                if (!requestInfo) return res.json({ "success": false, "message": alerts.INVALIDREQUEST });
                let requests = (await db.get(`requests-${user}`)) || [];
                requests = requests.filter((request) => request.requestId !== requestId);
                if (requests.length == 0) {
                    await db.delete(`requests-${user}`);
                } else {
                    await db.set(`requests-${user}`, requests);
                }
                await db.delete(`request-${requestId}`);
                return res.json({ "success": true, "message": alerts.REQUESTDENIED });
            });

            app.get("/request/coins/list", async (req, res) => {
                if (!req.session.pterodactyl) return res.redirect("/login");
                const user = req.session.userinfo.hcid;
                try {
                    const requests = await db.get(`requests-${user}`);
                    if (!requests) {
                        return res.json({ "success": false, "message": alerts.NOREQUESTS, "code": "empty" });
                    }
                    const requestInfos = [];
                    for (const requestId of requests) {
                        const requestInfo = await db.get(`request-${requestId}`);
                        if (requestInfo) {
                            requestInfos.push(requestInfo);
                        }
                    }
                    return res.json({ "success": true, "message": alerts.SUCCESS, "requests": requestInfos });
                } catch (error) {
                    console.error(error);
                    return res.json({ "success": false, "message": "An error occurred." });
                }
            });
        }
    }
}