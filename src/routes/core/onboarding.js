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
 * onboarding.js - Onboarding manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../utils/modules')
const fs = modules.fs
const path = modules.path
const core = modules.core
const page = modules.path
const crypt = modules.crypt

module.exports.load = async function (app, db) {
    app.get("/api/onboarding", core.auth, async (req, res) => {
        try {
            const info = await db.get("onboarding", req.session.userinfo.hcid);
            if (!info) {
                return res.json({ "status": false });
            } else {
                return res.json({ "status": true });
            }
        } catch (error) {
            console.log(error)
        }
    });

    app.get("/api/onboarding/submit", core.auth, async (req, res) => {
        try {
            if (!req.query.first) {
                return res.json({ success: false, message: "Missing 'first' field" });
            }
            
            if (!req.query.nickname) {
                return res.json({ success: false, message: "Missing 'nickname' field" });
            }
            
            if (!req.query.language) {
                return res.json({ success: false, message: "Missing 'language' field" });
            }
            let info = await db.get("onboarding", req.session.userinfo.hcid);
            let uinf = await db.get('users', req.session.userinfo.hcid)
            const ipv6 = req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'] || req.headers['x-client-ip'] || req.headers['x-forwarded'] || req.socket.remoteAddress;
            const ipv4 = req.headers['x-forwarded-for']?.split(',')[1];
            const ip = {
                "v6": ipv6,
                "v4": ipv4
            };
            const id = req.session.userinfo.hcid
            let password = crypt.gen88(12)
            if (!info) {
                const { nickname, first, language } = req.query;
                let last;
                let last1;
                let l = req.query.last
                if (l) {
                    last = l
                    last1 = l
                } else { last = "", last1 = "user" }
                let connections
                if (req.session.userinfo.authtype == "discord") {
                    connections = [
                        {
                            driver: 'discord',
                            name: 'Discord',
                            details: req.session.userinfo
                        }
                    ]
                } else {
                    connections = []
                }
                let pusers = await db.get('pterodactyl', 'users') ?? [];
                    let UI = pusers.findIndex(u => u.hcid == id);
                    req.session.pterodactyl = pusers[UI].info
                let userinfo = req.session.userinfo
                require('../../services/pterodactyl/remote/functions').create(req, res, userinfo.username, userinfo.email, first, last, password, userinfo)
                await db.set('integrations', id, [{driver: "pterodactyl", name: "Pterodactyl"}])
                let perm
                if (id == 1) {
                    perm = 100
                } else {
                    perm = 2
                }
                let user = {
                    nickname: nickname,
                    name: {
                        first: first,
                        last: last
                    },
                    hcid: id,
                    username: req.session.userinfo.username,
                    avatar: req.session.userinfo.profile,
                    email: req.session.userinfo.email,
                    password: crypt.encrypt(password),
                    language: language,
                    permissions: {
                        role: "user",
                        level: perm,
                        intents: []
                    },
                    integrations: [],
                    connections: connections,
                    devices: [],
                    date: {
                        created: Date.now(),
                        modified: Date.now()
                    },
                    sessions: {
                        status: false,
                        secret: `hc.ss_${crypt.gen88(24)}`
                    },
                    "2fa": {
                        status: false
                    },
                    ip: ip,
                    settings: [],
                    status: {
                        suspended: false,
                        banned: false
                    }
                }
                await db.set('users', id, user)
                
                const integrations = await db.get('integrations', id) ?? []
                let balance = {
                    coins: await db.get('coins', id),
                    credits: await db.get('credits', id)
                }
                await db.set('permissions', id, user.permissions)
                req.session.userinfo = await db.get("users", id);
                req.session.password = user.password
                req.session.language = language
                req.session.resources = await db.get('resources', id)
                req.session.permission = await db.get('permissions', id)
                req.session.balance = balance
                req.session.integrations = integrations
                req.session.settings = await db.get('settings', id)
    
                await db.set('onboarding', id, req.session.userinfo)
                res.json({success: true})
            } else {
                return res.redirect('/dashboard');
            }
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    });
}
