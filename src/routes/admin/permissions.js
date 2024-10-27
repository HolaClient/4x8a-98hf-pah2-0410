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
 * permissions.js - Permissions handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
const { body, validationResult } = require('express-validator');

module.exports = async function () {

    app.get("/api/admin/permissions/roles", core.admin, async (req, res) => {
        try {
            let a = await db.get("permissions", "roles") || []
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: a }));
        } catch (error) {
            handle(error, "Minor", 30)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post("/api/admin/permissions/roles", core.admin, [
        body('name').notEmpty().withMessage('Name is required'),
        body('level').isInt().withMessage('Level must be an integer')
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        try {
            let a = await db.get("permissions", "roles") || []
            let b = req.body
            if (!b.name || !b.level) return core.json(req, res, false, "MISSING")
            let c = a.find(i => i.name == b.name)
            if (c !== undefined) return core.json(req, res, false, "EXISTS")
            a.push(b)
            await db.set("permissions", "roles", a)
            return core.json(req, res, true, "SUCCESS")
        } catch (error) {
            handle(error, "Minor", 30)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.patch("/api/admin/permissions/roles", core.admin, [
        body('name').notEmpty().withMessage('Name is required'),
        body('level').isInt().withMessage('Level must be an integer')
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        try {
            let a = await db.get("permissions", "roles") || []
            let b = req.body
            let c = a.findIndex(i => i.name == b.name)
            if (c === -1) return core.json(req, res, false, "INVALID")
            if (!b.name || !b.level) return core.json(req, res, false, "MISSING")
            a[c] = b
            await db.set("permissions", "roles", a)
            return core.json(req, res, true, "SUCCESS")
        } catch (error) {
            handle(error, "Minor", 30)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.delete("/api/admin/permissions/roles", core.admin, [
        body('name').notEmpty().withMessage('Name is required')
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        try {
            let a = await db.get("permissions", "roles") || []
            let b = req.body
            let c = a.findIndex(i => i.name == b.name)
            if (c === -1) return core.json(req, res, false, "INVALID")
            a = a.filter(i => i.name !== b.name)
            await db.set("permissions", "roles", a)
            return core.json(req, res, true, "SUCCESS")
        } catch (error) {
            handle(error, "Minor", 30)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    async function handle(error, a, b) {
        try {
            const admins = await db.get("notifications", "admins") || [];
            const errors = await db.get("logs", "errors") || [];
            System.err.println(error)
            if (Array.isArray(admins) && Array.isArray(errors)) {
                admins.push({
                    title: `${a} Error`,
                    message: `${error}`,
                    type: "error",
                    place: "admin-permissions",
                    date: Date.now()
                });
                errors.push({ date: Date.now(), error: error, file: "routes/admin/permissions.js", line: b });
                await db.set("notifications", "admins", admins);
                await db.set("logs", "errors", errors);
            }
            return
        } catch (error) {
            System.err.println(error)
            return
        }
    };
}
/**
 *--------------------------------------------------------------------------
 * End of the file.
 *--------------------------------------------------------------------------
*/
