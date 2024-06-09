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
 * tickets.js - Admin side ticket handler.
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    app.get("/api/admin/tickets", core.admin, async (req, res) => {
        try {
            const a = await db.get("tickets", "total") || []
            core.log(`${req.session.userinfo.username} viewed the tickets list.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: a }));
        } catch (error) {
            handle(error, "Minor", 32)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/admin/tickets", core.admin, async (req, res) => {
        try {
            const a = await db.get("tickets", req.body)
            if (!a) return res.end({ success: false, message: alert("INVALID", req, res) });
            core.log(`${req.session.userinfo.username} has been assigned to the ticket: ${a}.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 43)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.delete("/api/admin/tickets", core.admin, async (req, res) => {
        try {
            const a = await db.get("tickets", req.body)
            if (!a) return res.end({ success: false, message: alert("INVALID", req, res) });
            const b = await db.get("tickets", a.user) || []
            const d = await db.get("tickets", "total") || []
            d = d.filter((e) => e.id !== a);
            e = b.filter((e) => e.id !== a);
            await db.delete("tickets", a);
            await db.set("tickets", "total", d);
            await db.set("tickets", a.user, e);
            core.log(`${req.session.userinfo.username} has deleted the ticket: ${a}.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 55)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function handle(error, a, b) {
        const admins = await db.get("notifications", "admins") || [];
        const errors = await db.get("logs", "errors") || [];
        System.err.println(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "admin-tickets",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/admin/tickets.js", line: b });
        await db.set("notifications", "admins", admins)
        await db.set("logs", "errors", errors)
        return
    }
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/