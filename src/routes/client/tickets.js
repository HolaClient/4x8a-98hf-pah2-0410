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
 * tickets.js - Server side tickets handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const page = modules.page;
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];
    const appearance = await db.get("settings", "appearance") || {};
    const template = appearance.themes && appearance.themes.layouts || "default";

    app.get("/tickets/:id", core.auth, async (req, res) => {
        try {
            var id = req.params.id
            if (typeof id !== "string") return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            var tickets = await db.get("tickets", req.session.userinfo.id) ?? [];
            if (tickets.length === 0 || !tickets.find(a => a.id == id)) return res.end(fallback.error401());
            const ticket = await db.get("tickets", id);
            const data = await page.data(req);
            return ejs.renderFile(`./resources/views/layouts/${template}/tickets/[id].ejs`, {...data,ticket: ticket},
                function (error, str) {
                    if (error) {
                        console.error(error);
                        return res.end(fallback.error500(error));
                    };
                    return res.end(str);
                }
            );
        } catch (error) {
            handle(error, "Minor", 42)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/tickets/:id/delete", core.auth, async (req, res) => {
        try {
            var id = req.params.id
            if (typeof id !== "string") return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            var tickets = await db.get("tickets", req.session.userinfo.id) ?? [];
            if (tickets.length === 0 || !tickets.find(a => a.id == id)) return res.end(fallback.error401());
            const ticket = await db.get("tickets", id);
            const data = await page.data(req);
            return ejs.renderFile(`./resources/views/layouts/${template}/tickets/delete.ejs`, {...data,ticket: ticket},
                function (error, str) {
                    if (error) {
                        console.error(error);
                        return res.end(fallback.error500(error));
                    };
                    return res.end(str);
                }
            );
        } catch (error) {
            handle(error, "Minor", 65)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/tickets", core.admin, async (req, res) => {
        try {
            const a = req.body
            const b = await db.get("tickets", "last") ?? 0
            const d = await db.get("tickets", "total") || []
            const c = {
                id: `t${b+1}`,
                assistor: "",
                user: req.session.userinfo.id,
                title: a.title,
                category: a.category,
                queue: d.length,
                created_at: Date.now()
            };
            d.push(c)
            await db.set("tickets", c.id, c);
            await db.set("tickets", "total", d);
            await db.set("tickets", "last", b+1);
            core.log(`${req.session.userinfo.username} created a ticket under the category: ${a.category}.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: c }));
        } catch (error) {
            handle(error, "Minor", 88)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.delete("/api/tickets", core.admin , async (req, res) => {
        try {
            const a = req.body
            const b = await db.get("tickets", req.session.userinfo.id)
            if (b.length === 0 || !b.find(a => a.id == id)) return res.send(fallback.error401());
            const c = await db.get("tickets", a.id);
            if (!c) res.end(JSON.stringify({ success: false, message: alert("INVALID", req, res) }));
            const d = await db.get("tickets", "total") || []
            d = d.filter((e) => e.id !== a.id);
            e = b.filter((e) => e.id !== a.id);
            await db.delete("tickets", a.id);
            await db.set("tickets", "total", d);
            await db.set("tickets", req.session.userinfo.id, e);
            core.log(`${req.session.userinfo.username} deleted their ticket: ${a.id}.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 88);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/tickets/:id", core.auth, async (req, res) => {
        try {
            let a = await db.get("messages", req.params.id) ?? [];
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: a }));
        } catch (error) {
            handle(error, "Minor", 135);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/tickets/messages", async (ws, req) => {
        try {
            const a = await db.get("messages", req.query.id) || []
            const d = await fetch('https://cdn.holaclient.tech/production/common/profanity.json')
            const e = await d.json();
            //ws.send(JSON.stringify(a));
            let id = await db.get("messages", `last-${req.query.id}`) || 0
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
                a.push(c);
                console.log(c)
                function censor(message) {
                    const f = new RegExp(e.join('|'), 'gi');
                    return message.replace(f, '***');
                }
                await db.set("messages", `last-${req.query.id}`, id + 1)
                await db.set("messages", req.query.id, a);
            });
        } catch (error) {
            handle(error, "Minor", 145);
            return
        }
    });

    async function handle(error, a, b) {
        console.error(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "core-tickets",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/core/tickets.js", line: b });
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