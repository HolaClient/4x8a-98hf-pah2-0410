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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
const hcx = require("../../utils/hcx");

module.exports = async function () {
    app.post("/api/auth/email/register", async (req, res) => {
        try {
            let a = JSON.parse(req.body)
            let schema = [
                {
                    "pointer": "email",
                    "required": true,
                    "type": "string",
                    "format": "email",
                },
                {
                    "pointer": "username",
                    "required": true,
                    "type": "string",
                    "min": 3,
                    "rejectPattern": "(!!!)"
                },
                {
                    "pointer": "password",
                    "required": true,
                    "type": "string",
                    "format": "password",
                    "min": 8,
                    "requiredPattern": "1*(a-z).1*(A-Z).1*(!!!).1*(0-9)",
                }
            ]
            let b = hcx.validate(schema, a);
            if (b.success !== true || b.code !== 200) return res.end(JSON.stringify(b))
            a = b.data
            let c = await hcx.authHandler.register(req, res, a.email, a.username, a.password, a.username, a.username)
            if (c.success !== true || c.code !== 200) return res.end(JSON.stringify(c))
            hcx.cookies.set(res, "user", c.data.id)
            return res.end(JSON.stringify({ success: true, code: 200 }));
        } catch (error) {
            System.err.println(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.post("/api/auth/email/login", async (req, res) => {
        try {
            let a = JSON.parse(req.body)
            let b = await hcx.authHandler.login(req, res, a.email, a.password)
            if (b.success !== true || b.code !== 200) return res.end(JSON.stringify(b))
            hcx.cookies.set(res, "user", req.session.userinfo.id)
            return res.end(JSON.stringify({ success: true, code: 200 }));
        } catch (error) {
            System.err.println(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });

    app.get("/logout", async (req, res) => {
        try {
            let b = await hcx.authHandler.logout(req, res)
            if (b.success !== true || b.code !== 200) return res.end(JSON.stringify(b))
            return res.redirect('/');
        } catch (error) {
            System.err.println(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });
}