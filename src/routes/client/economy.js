/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclientx.tech
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright 2022-2024 HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * economy.js - Server side economy handler.
 *--------------------------------------------------------------------------
*/
const users = require('../../cache/users')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    let totalCoins = 0
    let leaderboard = []
    let totalUsers = {}
    app.get("/api/economy/leaderboard", core.auth, async (req, res) => {
        try {
            return core.json(req, res, true, "SUCCESS", { total: totalCoins, leaderboard: leaderboard.sort((a, b) => b.coins - a.coins) })
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.use("/ws.afk", core.ws(), async (req, res) => {
        try {
            if (req.ws) {
                const ws = await req.ws();
                let d = true;
                let b = req.session.userinfo.id;
                try {
                    if (totalUsers[b] === true) return ws.end();
                    totalUsers[b] = true;
                    let c = await db.get("settings", "afk") || {};
                    let k = c.every ?? 60;
                    let e = 0;
                    let f = await db.get("economy", b) || { coins: 0 };
                    let g = Date.now();
                    let h = f.coins;
                    let j = k;
                    setInterval(async () => {
                        if (d === true) {
                            f["coins"] = parseInt(h + e);
                            e++;
                            await db.set("economy", b, f);
                        }
                    }, k * 1000);
                    setInterval(async () => {
                        if (d === true) {
                            if (ws.readyState == WebSocket.OPEN) {
                                if (j > 0) {
                                    j -= 1;
                                } else {
                                    j = k;
                                }
                                ws.send(JSON.stringify({ session: e, total: parseInt(h + e), duration: ((Date.now() - g) / 1000).toFixed(0), coinsIn: j }));
                            }
                        }
                    }, 1 * 1000);
                } catch (error) {
                    console.error(error);
                }
                ws.on('close', () => {
                    d = false;
                    if (b) totalUsers[b] = false;
                });
            }
        } catch (error) {
            console.error(error);
            return;
        }
    });

    async function cache() {
        try {
            let a = await users.getAll() || {};
            let b = [];
            let d = [];
            for (let i in a) {
                let e = a[i];
                let c = await db.get("economy", i);
                if (c && c.coins) {
                    b.push(parseInt(c.coins));
                    d.push({
                        id: i,
                        avatar: e.avatar,
                        nickname: e.nickname,
                        username: e.username,
                        coins: c.coins
                    });
                }
            }
            leaderboard = d;
            totalCoins = b.reduce((a, b) => a + b, 0);
        } catch (error) {
            console.error(error)
            return
        }
    }
    cache();
    setTimeout(() => { cache() }, 60000 * 5);
}