/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * sessions.js - Authentication manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules")
const page = modules.page;
module.exports.load = async function (app, db) {
    app.get("/logout", async (req, res) => {
        let theme = page.get(req);
        if (!req.session.userinfo) return res.redirect("/");
        req.session.destroy(() => {
            return res.redirect(theme.settings.redirect.logout ? theme.settings.redirect.logout : "?err=LOGGEDOUT")
        });
    })

    app.get("/api/auth/token", async (req, res) => {
        let token = req.query.token
        let id = await db.get("tokens", token)
        if (!id) {
            res.json({ "success": false, "message": "Token is invalid!" })
        }
        let user = await db.get('users', id)
        if (user.sessions.status == true) {
            req.session.userinfo = user
            let status = await db.get('onboarding', id)
            if (!status) { res.redirect('/onboarding') }
            res.redirect('/dashboard')
        }
    })

    app.get("/api/auth/cookies", async (req, res) => {
        let token = getCookie(req, "token");
        if (token) {
            let id = await db.get("tokens", token)
            if (!id) {
                res.json({ "success": false, "message": "Token is invalid!" })
            }
            let user = await db.get('users', id)
            if (user.sessions.status == true) {
                req.session.userinfo = user
                let status = await db.get('onboarding', id)
                if (!status) { res.redirect('/onboarding') }
                res.redirect('/dashboard')
            }
        }
        res.json({ "success": false, "message": "Token is invalid!" })
    })

    function getCookie(req, cname) {
        let cookies = req.headers.cookie;
        if (!cookies) return null;
        let name = cname + "=";
        let ca = cookies.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return decodeURIComponent(c.substring(name.length, c.length));
            }
        }
        return "";
    }
}