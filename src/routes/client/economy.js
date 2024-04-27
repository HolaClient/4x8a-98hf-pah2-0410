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
module.exports = async function() {
    let totalCoins = 0
    let leaderboard = []
    let totalUsers = {}
    app.get("/api/economy/leaderboard", core.auth, async (req, res) => {
        try {
            return core.json(req, res, true, "SUCCESS", {total: totalCoins, leaderboard: leaderboard.sort((a, b) => b.coins - a.coins)})
        } catch (error) {
            console.error(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    exp.ws("/ws/afk", async (ws, req, res) => {
        try {
            let a = await fetch(`${process.env.APP_URL}/api/ws/auth`)
            let b = await a.json()
            if (b.success !== true) {
                ws.send(JSON.stringify({ "redirect": "redirect"}));
                return ws.end()
            };
            if (totalUsers[b.data.id] === true) return ws.end();
            totalUsers[b.data.id] = true
            let c = await db.get("settings", "afk") || {}
            let k = c.every ?? 1
            let d = true
            let e = 0
            let f = await db.get("economy", b.data.id);
            let g = Date.now();
            let h = f.coins
            let j = k
            setInterval(async () => {
                if (d === true) {
                    f["coins"] = parseInt(h + e)
                    e++
                    await db.set("economy", b.data.id, f);
                };
            }, k * 1000);
            setInterval(async () => {
                if (d === true) {
                    if (ws.readyState == ws.OPEN) {
                        if (j > 0) {
                            j -= 1
                        } else {
                            j = k
                        }
                        ws.send(JSON.stringify({ session: e, total: parseInt(h + e), duration: ((Date.now() - g) / 1000).toFixed(0), coinsIn: j }));
                    };
                };
            }, 1 * 1000);
            ws.onclose = () => {
                d = false
                totalUsers[b.data.id] = false
            };
        } catch (error) {
            console.error(error)
            return;
        }
    });

    async function cache() {
        let a = await users.getAll() || []
        let b = []
        let d = []
        for (let i of a) {
            let c = await db.get("economy", i.id)
            if (c && c.coins) {
                b.push(parseInt(c.coins));
                d.push({
                    id: i.id,
                    avatar: i.avatar,
                    nickname: i.nickname,
                    username: i.username,
                    coins: c.coins
                })
            }
        }
        leaderboard = d
        totalCoins = b.reduce((a, b) => a + b, 0);
    }
    cache();
    setTimeout(() => {cache()}, 60000 * 5);
}