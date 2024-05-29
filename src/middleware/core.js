<<<<<<< HEAD
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
const core = require('./core.js')
const db = require('../handlers/database.js')
const nodemailer = require("nodemailer");
/**
 *--------------------------------------------------------------------------
 * Exporting core.auth()
 *--------------------------------------------------------------------------
*/
module.exports.auth = async function (req, res, next) {
    try {
        if (!req.session.userinfo && core.getCookie(req, "hc.sk")) {
            let a = JSON.parse(core.getCookie(req, "hc.sk"))
            let b = await db.get("users", a.user)
            if (b) {
                let c = crypt.decrypt(a, b.sessions.secret)
                if (c && c === b.sessions.key) {
                    req.session.userinfo = b
                }
            }
        }
        if (!req.session.userinfo) {
            res.setHeader('Location', '/login');
            res.writeHead(302);
            res.end();
        }
        next()
    } catch (error) {
        console.error(error)
    }
};
module.exports.admin = async function (req, res, next) {
    try {
        if (!req.session.userinfo && core.getCookie(req, "hc.sk")) {
            let a = JSON.parse(core.getCookie(req, "hc.sk"))
            let b = await db.get("users", a.user)
            if (b) {
                let c = crypt.decrypt(a, b.sessions.secret)
                if (c && c === b.sessions.key) {
                    req.session.userinfo = b
                }
            }
        }
        if (!req.session.userinfo) {
            res.setHeader('Location', '/login');
            res.writeHead(302);
            return res.end();
        }
        if (req.session.userinfo.permissions.level < 100) return res.end(fallback.error403());
        next()
    } catch (error) {
        console.error(error)
    }
};
module.exports.api = async function (req, res, next) {
    try {
        if (!req.session.userinfo && core.getCookie(req, "hc.sk")) {
            let a = JSON.parse(core.getCookie(req, "hc.sk"))
            let b = await db.get("users", a.user)
            if (b) {
                let c = crypt.decrypt(a, b.sessions.secret)
                if (c && c === b.sessions.key) {
                    req.session.userinfo = b
                }
            }
        }
        if (req.session.userinfo && req.session.userinfo.permissions.level > 100) next();
        let a = req.headers
        if (!a["x-auth-type"]) return core.json(req, res, false, "MISSING", "", 1404)
        if (a["x-auth-type"] === "hc.ap") {
            let a = await db.get("api", "keys") || []
            if (a.find(i => i.key === `Bearer ${req.headers["authorization"]}` || i.key === req.headers["x-api-key"])) next()
        } else if (a["x-auth-type"] === "hc.sk") {
            if (!req.headers["x-session-key"]) return core.json(req, res, false, "MISSING", "", 1404)
            const a = req.headers["x-session-key"].split("::");
            if (a.length !== 2) return core.json(req, res, false, "INVALIDFORMAT", "", 1400)
            let b = await db.get("users", a[0]) || []
            if (b.find(i => i.key === a[1])) next()
        }
        return core.json(req, res, false, "ERROR", "", 1400)
    } catch (error) {
        console.error(error)
    }
};
module.exports.server = async function (req, res, id) {
    try {
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
    } catch (error) {
        console.error(error)
    }
};
module.exports.log = async function (a) {
    try {
        const logs = await db.get("logs", "logs") || [];
        logs.push({
            message: a,
            date: Date.now()
        })
        await db.set("logs", "logs", logs)
        return
    } catch (error) {
        console.error(error)
    }
}
module.exports.email = async function (to, sub, title, body) {
    try {
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
    } catch (error) {
        console.error(error)
    }
}
module.exports.json = async function (req, res, a, b, c, d) {
    try {
        res.setHeader('Content-Type', 'application/json')
        if (c && a == true) {
            return res.end(JSON.stringify({ success: a, code: d ?? 200, message: alert(b, req, res), data: c }));
        } else if (c) {
            return res.end(JSON.stringify({ success: a, code: d ?? 200, message: alert(b, req, res) + c }));
        } else { return res.end(JSON.stringify({ success: a, code: d ?? 200, message: alert(b, req, res) })) };
    } catch (error) {
        console.error(error)
    }
};
module.exports.html = async function (req, res, a, data) {
    try {
        const c = await page.data(req);
        return ejs.renderFile(a, { ...c, data }, function (error, str) {
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
module.exports.ws = () => {
    const wss = new WebSocket.Server({ noServer: true });
    return async (req, res, next) => {
        if (req.headers.upgrade || ''.toLowerCase().includes('websocket') &&
            req.headers.connection.toLowerCase().includes('upgrade')) {
            req.ws = () => new Promise((resolve) => {
                wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
                    resolve(ws);
                });
            });
        } else {
            res.end(fallback.error400());
            return;
        }
        next();
    };
};
module.exports.getCookie = function (req, a) {
    let b = req.headers.cookie;
    if (!b) return null;
    let d = a + "=";
    let ca = b.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(d) == 0) {
            return decodeURIComponent(c.substring(d.length, c.length));
        }
    }
    return "";
}
module.exports.setCookie = function (res, a, b) {
    let c = `${encodeURIComponent(a)}=${encodeURIComponent(b)}`;
    c += `; Max-Age=${30 * 24 * 60 * 60}`;
    c += `; Path=/`;
    c += `; Secure`;
    c += `; SameSite=Strict`;
    res.setHeader('Set-Cookie', c);
}
module.exports.delCookie = function (res, a) {
    let c = `${encodeURIComponent(a)}=;`;
    c += `; Max-Age=0`;
    c += `; Path=/`;
    c += `; Secure`;
    c += `; SameSite=Strict`;
    res.setHeader('Set-Cookie', c);
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
=======
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
const core = require('./core.js')
const db = require('../handlers/database.js')
const nodemailer = require("nodemailer");
/**
 *--------------------------------------------------------------------------
 * Exporting core.auth()
 *--------------------------------------------------------------------------
*/
module.exports.auth = async function (req, res, next) {
    try {
        if (!req.session.userinfo && core.getCookie(req, "hc.sk")) {
            let a = JSON.parse(core.getCookie(req, "hc.sk"))
            let b = await db.get("users", a.user)
            if (b) {
                let c = crypt.decrypt(a, b.sessions.secret)
                if (c && c === b.sessions.key) {
                    req.session.userinfo = b
                }
            }
        }
        if (!req.session.userinfo) {
            res.setHeader('Location', '/login');
            res.writeHead(302);
            res.end();
        }
        next()
    } catch (error) {
        console.error(error)
    }
};
module.exports.admin = async function (req, res, next) {
    try {
        if (!req.session.userinfo && core.getCookie(req, "hc.sk")) {
            let a = JSON.parse(core.getCookie(req, "hc.sk"))
            let b = await db.get("users", a.user)
            if (b) {
                let c = crypt.decrypt(a, b.sessions.secret)
                if (c && c === b.sessions.key) {
                    req.session.userinfo = b
                }
            }
        }
        if (!req.session.userinfo) {
            res.setHeader('Location', '/login');
            res.writeHead(302);
            return res.end();
        }
        let s = await db.get("permissions", req.session?.userinfo?.id ?? 0);
        if (!s && i && parseInt(i.permission) !== 0) return res.end(fallback.error401());
        if (req.session.userinfo.permissions.level < 100) return res.end(fallback.error403());
        next()
    } catch (error) {
        console.error(error)
    }
};
module.exports.api = async function (req, res, next) {
    try {
        if (!req.session.userinfo && core.getCookie(req, "hc.sk")) {
            let a = JSON.parse(core.getCookie(req, "hc.sk"))
            let b = await db.get("users", a.user)
            if (b) {
                let c = crypt.decrypt(a, b.sessions.secret)
                if (c && c === b.sessions.key) {
                    req.session.userinfo = b
                }
            }
        }
        if (req.session.userinfo && req.session.userinfo.permissions.level > 100) next();
        let a = req.headers
        if (!a["x-auth-type"]) return core.json(req, res, false, "MISSING", "", 1404)
        if (a["x-auth-type"] === "hc.ap") {
            let a = await db.get("api", "keys") || []
            if (a.find(i => i.key === `Bearer ${req.headers["authorization"]}` || i.key === req.headers["x-api-key"])) next()
        } else if (a["x-auth-type"] === "hc.sk") {
            if (!req.headers["x-session-key"]) return core.json(req, res, false, "MISSING", "", 1404)
            const a = req.headers["x-session-key"].split("::");
            if (a.length !== 2) return core.json(req, res, false, "INVALIDFORMAT", "", 1400)
            let b = await db.get("users", a[0]) || []
            if (b.find(i => i.key === a[1])) next()
        }
        return core.json(req, res, false, "ERROR", "", 1400)
    } catch (error) {
        console.error(error)
    }
};
module.exports.server = async function (req, res, id) {
    try {
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
    } catch (error) {
        console.error(error)
    }
};
module.exports.log = async function (a) {
    try {
        const logs = await db.get("logs", "logs") || [];
        logs.push({
            message: a,
            date: Date.now()
        })
        await db.set("logs", "logs", logs)
        return
    } catch (error) {
        console.error(error)
    }
}
module.exports.email = async function (to, sub, title, body) {
    try {
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
    } catch (error) {
        console.error(error)
    }
}
module.exports.json = async function (req, res, a, b, c, d) {
    try {
        res.setHeader('Content-Type', 'application/json')
        if (c && a == true) {
            return res.end(JSON.stringify({ success: a, code: d ?? 200, message: alert(b, req, res), data: c }));
        } else if (c) {
            return res.end(JSON.stringify({ success: a, code: d ?? 200, message: alert(b, req, res) + c }));
        } else { return res.end(JSON.stringify({ success: a, code: d ?? 200, message: alert(b, req, res) })) };
    } catch (error) {
        console.error(error)
    }
};
module.exports.html = async function (req, res, a, data) {
    try {
        const c = await page.data(req);
        return ejs.renderFile(a, { ...c, data }, function (error, str) {
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
module.exports.ws = () => {
    const wss = new WebSocket.Server({ noServer: true });
    return async (req, res, next) => {
        if (req.headers.upgrade || ''.toLowerCase().includes('websocket') &&
            req.headers.connection.toLowerCase().includes('upgrade')) {
            req.ws = () => new Promise((resolve) => {
                wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
                    resolve(ws);
                });
            });
        } else {
            res.end(fallback.error400());
            return;
        }
        next();
    };
};
module.exports.getCookie = function (req, a) {
    let b = req.headers.cookie;
    if (!b) return null;
    let d = a + "=";
    let ca = b.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(d) == 0) {
            return decodeURIComponent(c.substring(d.length, c.length));
        }
    }
    return "";
}
module.exports.setCookie = function (res, a, b) {
    let c = `${encodeURIComponent(a)}=${encodeURIComponent(b)}`;
    c += `; Max-Age=${30 * 24 * 60 * 60}`;
    c += `; Path=/`;
    c += `; Secure`;
    c += `; SameSite=Strict`;
    res.setHeader('Set-Cookie', c);
}
module.exports.delCookie = function (res, a) {
    let c = `${encodeURIComponent(a)}=;`;
    c += `; Max-Age=0`;
    c += `; Path=/`;
    c += `; Secure`;
    c += `; SameSite=Strict`;
    res.setHeader('Set-Cookie', c);
};
module.exports.ptero = ptero
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
>>>>>>> 4473be3 (29-05)
*/