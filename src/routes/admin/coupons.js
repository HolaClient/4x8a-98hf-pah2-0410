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
 * users.js - User management for admins router.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    app.get("/api/admin/coupons", core.admin, async (req, res) => {
        try {
            let a = await db.get("coupons", 'coupons') ?? [];
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: a }));
        } catch (error) {
            handle(error, "Minor", 32);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/admin/coupons", core.admin, async (req, res) => {
        try {
            let a = req.body.code;
            let b = req.body.economy
            let c = req.body.resources
            if (!a || typeof a !== "string" || !b || typeof b !== "object" || !c || typeof c !== "object") return res.end(JSON.stringify({ success: false, message: alert("MISSINGFIELDS", req, res) }));
            if (await db.get("coupons", a)) return res.end(JSON.stringify({ success: false, message: alert("EXISTS", req, res) }));
            let d = {
                ...(b && { economy: b }),
                ...(c && { resources: c }),
            };
            await db.set("coupons", a, d)
        } catch (error) {
            handle(error, "Minor", 42);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.delete("/api/admin/coupons/:code", core.admin, async (req, res) => {
        try {
            let a = req.params.code;
            const b = await db.get("coupons", a);
            if (!b || typeof b !== "string") return res.end(JSON.stringify({ "success": false, "message": alert("COULDNOTFINDCOUPON", req, res) }));
            await db.delete('coupons', a);
            let c = await db.get("coupons", 'coupons') ?? []
            c = c.filter(d => d !== a);
            await db.set("coupons", 'coupons', c);
            core.log(`${req.session.userinfo.username} revoked the coupon ${a}.`);
            res.end(JSON.stringify({ "success": true, "message": alert("REVOKEDCOUPON", req, res) }));
        } catch (error) {
            handle(error, "Minor", 61);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/admin/coupons/:code", core.admin, async (req, res) => {
        try {
            let a = req.params.code
            if (!a || typeof a !== "string") return res.end(JSON.stringify({ "success": false, "message": alert("COULDNOTFINDCOUPON", req, res) }));
            let b = await db.get("coupons", a);
            if (!b) return res.end(JSON.stringify({ "success": false, "message": alert("COULDNOTFINDCOUPON", req, res) }));
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: b }));
        } catch (error) {
            handle(error, "Minor", 78);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function handle(error, a, b) {
        const admins = await db.get("notifications", "admins") || [];
        const errors = await db.get("logs", "errors") || [];
        console.error(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "admin-coupons",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/admin/coupons.js", line: b });
        await db.set("notifications", "admins", admins)
        await db.set("logs", "errors", errors)
        return
    };
}
/**
 *--------------------------------------------------------------------------
 * End of the file.
 *--------------------------------------------------------------------------
*/