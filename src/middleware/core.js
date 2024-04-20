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
 * core.js - Global middleware handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../utils/modules.js')
const page = require('../utils/theme.js')
const fs = require('fs')
const core = require('./core.js')
const db = require('../handlers/database.js')
const nodemailer = require("nodemailer");
/**
 *--------------------------------------------------------------------------
 * Exporting core.auth()
 *--------------------------------------------------------------------------
*/
module.exports.auth = async function (req, res, next) {
    if (!req.session.userinfo) {
        res.setHeader('Location', '/login');
        res.writeHead(302);
        res.end();
    }
    next()
};
module.exports.admin = async function (req, res, next) {
    if (!req.session.userinfo) {
        res.setHeader('Location', '/login');
        res.writeHead(302);
        return res.end();
    }
    if (req.session.userinfo.permissions.level < 100) return res.end(fallback.error403());
    next()
};
module.exports.server = async function (req, res, id) {
    if (typeof id !== "string") return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
    if (!req.session.userinfo) {
        res.setHeader('Location', '/login');
        res.writeHead(302);
        res.end();
        return
    }
    var servers = await db.get("servers", req.session.userinfo.id) ?? [];
    if (servers.length == 0 || !servers.find(a => a.identifier == id)) {
        return res.end(fallback.error401());
    }
    return
};
module.exports.log = async function (a) {
    const logs = await db.get("logs", "logs") || [];
    logs.push({
        message: a,
        date: Date.now()
    })
    await db.set("logs", "logs", logs)
    return
}
module.exports.email = async function (to, sub, title, body) {
    const a = await db.get("settings", "smtp")
    const c = await db.get("settings", "appearance")
    const transporter = nodemailer.createTransport({
        host: a.host,
        port: a.port,
        secure: a.port === 465 ? true : false,
        auth: {
            user: a.user,
            pass: a.pass,
        },
        debug: true,
    });
    const b = await transporter.sendMail({
        from: `${c.name} <${a.mail}>`,
        to: to,
        subject: sub,
        html: `
        <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f7f7; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <center><h1 style="font-size: 24px; color: #333; margin-bottom: 20px;">${title}</h1>
            <p style="font-size: 16px; line-height: 1.5; color: #666;">${body}</p></center>
            <footer style="margin-top: 20px; text-align: center; color: #888; font-size: 14px;">
                © 2024 <a href="${process.env.APP_URL}">${c.name}</a> | All rights reserved. Powered by <a href="https://x.holaclient.tech">HolaClientX</a>
            </footer>
        </div>
    </body>
`,
    });
    const logs = await db.get("logs", "emails") || [];
    logs.push({
        message: `Sent an email to ${to}.`,
        data: b,
        date: Date.now()
    });
    await db.set("logs", "emails", logs)
    return b
}
module.exports.json = async function (req, res, a, b, c) {
    res.setHeader('Content-Type', 'application/json')
    if (c && a == true) {return res.end(JSON.stringify({ success: a, message: alert(b, req, res), data: c }));
    } else if (c) {return res.end(JSON.stringify({ success: a, message: alert(b, req, res) + c  }));
    } else { return res.end(JSON.stringify({ success: a, message: alert(b, req, res) }))};
};
module.exports.html = async function (req, res, a, data) {
    try {
        const c = await page.data(req);
        return ejs.renderFile(a, {...c, data}, function (error, str) {
            res.setHeader('Content-Type', 'text/html');
            if (error) {
                console.error(error);
                return res.end(fallback.error500(error));
            }
            return res.end(str);
        });
    } catch (error) {
        console.error(error);
        return res.end(fallback.error500(error));
    }
};
module.exports.redirect = async function (res, a) {
    try {
        res.statusCode = 302;
        res.setHeader('Location', a);
        return res.end();
    } catch (error) {
        console.error(error);
        return res.end(fallback.error500(error));
    }
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/