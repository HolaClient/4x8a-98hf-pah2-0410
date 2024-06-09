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
 * chat.js - Global chat handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    let clients = []
    let spamCounter = {}
    let badWords
    try {
        const req = await fetch('https://cdn.holaclientx.tech/production/security/explicit.json')
        badWords = await req.json()
    } catch (error) {
        System.err.println(error)
    }
    app.ws("/ws.chat", async (req, res, ws) => {
        try {
            let h = JSON.parse(hcx.core.cookies.get(req, "hc.sk"))
            let j = await db.get("users", h.user)
            let userinfo;
            if (j) {
                let k = crypt.decrypt(h, j.sessions.secret)
                if (k && k === j.sessions.key) userinfo = j
            };
            if (!userinfo) ws.close();
            clients.push(ws)
            let a = await db.get("messages", "chat") || []
            ws.send(JSON.stringify({ "event": "history", "args": a }));
            ws.on('message', async (data) => {
                try {
                    let b = JSON.parse(data)
                    if (b.event === "message") {
                        let c = await db.get("messages", "last") ?? 0
                        let d = await db.get("permissions", req.session.userinfo.id);
                        let g = spamCounter[req.session.userinfo.id] || { message: "", counter: 0, muted: false };
                        let e = {
                            "id": parseInt(c) + 1,
                            "user": req.session.userinfo.id,
                            "username": req.session.userinfo.nickname,
                            "avatar": req.session.userinfo.avatar,
                            "message": censor(b.args[0]),
                            "permission": d.level,
                            "time": Date.now()
                        }
                        if (((Date.now() - g.time) / 60000) >= 1) g["counter"] = 0
                        if (g.message.toLowerCase() == b.args[0].toLowerCase()) { g.counter++ }
                        if (g.counter >= 3) {
                            if (g.muted !== true) {
                                g["time"] = Date.now();
                                e["message"] = `${req.session.userinfo.nickname} has been timedout for 1 minute due to violation of our policy.`
                                clients.forEach(i => {
                                    i.send(JSON.stringify({ "event": "message", "args": [e] }));
                                });
                            }
                            g.muted = true
                        }
                        function censor(message) {
                            const f = new RegExp(badWords.join('|'), 'gi');
                            return message.replace(f, (match) => '*'.repeat(match.length));
                        }
                        if (g.counter <= 2) {
                            g.message = b.args[0]
                            a.push(e);
                            await db.set("messages", "chat", a);
                            await db.set("messages", "last", parseInt(c) + 1);
                            clients.forEach(i => {
                                i.send(JSON.stringify({ "event": "message", "args": [e] }));
                            });
                        }
                        spamCounter[req.session.userinfo.id] = g
                    }
                } catch (error) {
                    System.err.println(error);
                }
            });
            ws.on('close', async () => {
                clients = clients.filter(i => i !== ws)
            });
        } catch (error) {
            System.err.println(error);
            return;
        }
    });
}