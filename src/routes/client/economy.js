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
const users = require('../../utils/users')
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    let totalCoins = 0
    let leaderboard = []
    let totalUsers = {}
    let onlineUsers = []
    let usersCoins = {}
    app.get("/api/economy/leaderboard", core.auth, async (req, res) => {
        try {
            return core.json(req, res, true, "SUCCESS", { total: totalCoins, leaderboard: leaderboard.sort((a, b) => b.coins - a.coins) })
        } catch (error) {
            System.err.println(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.ws("/ws.afk", async (req, res, ws) => {
        try {
            let cc = JSON.parse(hcx.core.cookies.get(req, "hc.sk"));
            let ee = await db.get("users", cc.user);
            let userinfo;
            if (ee) {
                let ff = crypt.decrypt(cc, ee.sessions.secret);
                if (ff && ff === ee.sessions.key) userinfo = ee;
            }
            if (!userinfo) return ws.close();
            let d = true;
            let b = userinfo.id;
            let l = onlineUsers.findIndex(i => i.userinfo.id === b);
            if (l === -1) {
                onlineUsers.push({ userinfo, ws });
            } else {
                ws.close();
                return;
            }
            try {
                if (totalUsers[b] === true) return ws.close();
                totalUsers[b] = true;
                let c = await db.get("settings", "afk") || {};
                let k = c.every ?? 30;
                let e = 0;
                let f = await db.get("economy", b) || { coins: 0 };
                let g = Date.now();
                let h = f.coins;
                let j = k;
                usersCoins[userinfo.id] = h;
                const coinInterval = setInterval(async () => {
                    if (d === true && f.coins < 999999999999999) {
                        f.coins = parseInt(h + e);
                        e++;
                        usersCoins[userinfo.id] = parseInt(h + e);
                        await db.set("economy", b, f);
                    }
                }, k * 1000);
                const sendInterval = setInterval(async () => {
                    if (d === true) {
                        if (ws.readyState == WebSocket.OPEN) {
                            if (j > 0) {
                                j -= 5;
                            } else {
                                j = k;
                            }
                            let m = [];
                            onlineUsers.forEach(i => m.push({ nickname: i.userinfo.nickname, avatar: i.userinfo.avatar, coins: usersCoins[i.userinfo.id] }));
                            ws.send(JSON.stringify({ session: e, total: parseInt(h + e), duration: ((Date.now() - g) / 1000).toFixed(0), coinsIn: j, party: m }));
                        }
                    }
                }, 5000);
                ws.on('close', () => {
                    d = false;
                    clearInterval(coinInterval);
                    clearInterval(sendInterval);
                    totalUsers[b] = false;
                    onlineUsers = onlineUsers.filter(i => i.userinfo.id !== b);
                });
            } catch (error) {
                System.err.println(error);
            }
        } catch (error) {
            System.err.println(error);
        }
    });    

    async function cache() {
        try {
            let a = await users.getAll() || {};
            let b = [];
            let d = [];
            for (let i of a) {
                let c = await db.get("economy", i.hcx.id);
                if (c && c.coins) {
                    b.push(parseInt(c.coins));
                    d.push({
                        id: i.hcx.id,
                        avatar: i.hcx.avatar,
                        nickname: i.hcx.nickname,
                        username: i.hcx.username,
                        coins: c.coins
                    });
                }
            }
            leaderboard = d;
            totalCoins = b.reduce((a, b) => a + b, 0);
        } catch (error) {
            System.err.println(error)
            return
        }
    }
    cache();
    setTimeout(() => { cache() }, 60000 * 5);
}