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
 * settings.js - UI settings editor handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    app.put("/api/admin/settings", core.admin, async (req, res) => {
        try {
            const a = await db.get('settings', 'appearance') || {}
            const c = await db.get('settings', 'authentication') || {}

            a.name = b('name') || a.name
            a.logo.url = b('logo') || a.logo.url
            a.logo.rotate = b('rotate')
            a.logo.speed = b('speed') || a.logo.speed
            a.banner = b('banner') || a.banner
            a.description = b('description') || a.description
            a.seo.title = b('seoTitle') || a.seo.title
            a.seo.image = b('seoImage') || a.seo.image
            a.seo.description = b('seoDes') || a.seo.description
            a.seo.keywords = b('seoKeys') || a.seo.keywords
            c.discord.id = b('dcid') || c.discord.id
            c.discord.secret = b('dcsecret') || c.discord.secret
            c.discord.enabled = b('dcauth')
            c.alt.ip = b('ip')
            c.alt.cookies = b('cookies')
 
            function b(c) {
                return req.body[c]
            };
            await db.set('settings', 'appearance', a);
            await db.set('settings', 'authentication', c);
            core.log(`${req.session.userinfo.username} modified the settings.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 194);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });
    app.put("/api/admin/settings/:a", core.admin, async (req, res) => {
        try {
            await db.set('settings', req.params.a, req.body);
            core.log(`${req.session.userinfo.username} modified the ${req.params.a} settings.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 194);
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });
    app.post("/api/admin/settings/pterodactyl", core.admin, async (req, res) => {
        try {
            await db.set('pterodactyl', "settings", req.body);
            core.log(`${req.session.userinfo.username} modified the ${req.params.a} settings.`);
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 194);
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
            place: "admin-settings",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/admin/settings.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/