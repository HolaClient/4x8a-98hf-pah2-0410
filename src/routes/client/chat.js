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
 * chat.js - Server side char handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];

    app.get("/api/chat/messages", core.auth, async (req, res) => {
        try {
            let a = await db.get("messages", 'chat') ?? [];
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: a }));
        } catch (error) {
            handle(error, "Minor", 37);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/chat/messages", async (ws, req) => {
        try {
            const a = await db.get("messages", "chat") || []
            const d = await fetch('https://cdn.holaclient.tech/production/common/profanity.json')
            const e = await d.json()
            //ws.send(JSON.stringify(a));
            let id = await db.get("messages", "last") || 0
            ws.on('message', async (message) => {
                let b = req.session.userinfo
                let c = {
                    id: id + 1,
                    user: b.id,
                    username: b.nickname || b.username,
                    avatar: b.avatar,
                    message: censor(message),
                    permission: b.permissions.value,
                    time: new Date()
                };
                ws.send(JSON.stringify([c]));
                a.push(c)
                function censor(message) {
                    const f = new RegExp(e.join('|'), 'gi');
                    return message.replace(f, '***');
                }
                await db.set("messages", "last", id + 1)
                await db.set("messages", "chat", a);
            });
        } catch (error) {
            return
        }
    });

    async function handle(error, a, b) {
        console.error(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "core-chat",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/core/chat.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    };
}
/**
 *--------------------------------------------------------------------------
 * End of the file.
 *--------------------------------------------------------------------------
*/