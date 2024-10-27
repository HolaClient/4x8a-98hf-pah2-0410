/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * |  |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
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
 * settings.js - UI settings editor handler.
 *--------------------------------------------------------------------------
 */
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
 */
const { body, validationResult } = require('express-validator');

module.exports = async function () {
    app.put("/api/admin/settings", core.admin, [
        body('name').optional().isString().withMessage('Name must be a string'),
        body('logo').optional().isObject().withMessage('Logo must be an object'),
        body('logo.url').optional().isURL().withMessage('Logo URL must be a valid URL'),
        body('logo.rotate').optional().isBoolean().withMessage('Logo rotate must be a boolean'),
        body('logo.speed').optional().isInt().withMessage('Logo speed must be an integer'),
        body('banner').optional().isURL().withMessage('Banner must be a valid URL'),
        body('description').optional().isString().withMessage('Description must be a string'),
        body('seoTitle').optional().isString().withMessage('SEO title must be a string'),
        body('seoImage').optional().isURL().withMessage('SEO image must be a valid URL'),
        body('seoDes').optional().isString().withMessage('SEO description must be a string'),
        body('seoKeys').optional().isArray().withMessage('SEO keywords must be an array')
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        try {
            let a = await db.get('settings', 'appearance') || {}

            a.name = b('name') || a.name
            a["logo"].url = b('logo') || a.logo.url
            a["logo"].rotate = b('rotate')
            a["logo"].speed = b('speed') || a.logo.speed
            a.banner = b('banner') || a.banner
            a.description = b('description') || a.description
            a["seo"].title = b('seoTitle') || a.seo.title
            a["seo"].image = b('seoImage') || a.seo.image
            a["seo"].description = b('seoDes') || a.seo.description
            a["seo"].keywords = b('seoKeys') || a.seo.keywords

            function b(c) {
                return req.body[c]
            };
            await db.set('settings', 'appearance', a);
            core.log.admin(`${req.session.userinfo.username} modified the settings.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 194);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.put("/api/admin/settings/:a", core.admin, [
        body().isObject().withMessage('Settings must be an object')
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        try {
            if (req.query && req.query?.type == "full") {
                await db.set(req.params.a, 'settings', req.body);
                core.log.admin(`${req.session.userinfo.username} modified the ${req.params.a} settings.`);
            } else {
                await db.set('settings', req.params.a, req.body);
                core.log.admin(`${req.session.userinfo.username} modified the ${req.params.a} settings.`);
            }
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 194);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error })); // P73f5
        }
    });

    app.get("/api/admin/settings/:a", core.admin, async (req, res) => {
        try {
            let a;
            if (req.query && req.query?.type == "full") {
                a = await db.get(req.params.a, 'settings');
                core.log.admin(`${req.session.userinfo.username} viewed the ${req.params.a} settings.`);
            } else {
                a = await db.get('settings', req.params.a);
                core.log.admin(`${req.session.userinfo.username} viewed the ${req.params.a} settings.`);
            }
            return core.json(req, res, true, "SUCCESS", a)
        } catch (error) {
            handle(error, "Minor", 194);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error })); // P73f5
        }
    });

    app.post("/api/admin/settings/pterodactyl", core.admin, [
        body().isObject().withMessage('Settings must be an object')
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        try {
            await db.set('pterodactyl', "settings", req.body);
            core.log.admin(`${req.session.userinfo.username} modified the ${req.params.a} settings.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 194);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error })); // P73f5
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
                    place: "admin-settings",
                    date: Date.now()
                });
                errors.push({ date: Date.now(), error: error, file: "routes/admin/settings.js", line: b });
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
* End of the file
*-------------------------------------------------------------------------- 
*/
