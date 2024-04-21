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
 * users.js - Users management.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("./modules.js")
const crypt = require("./crypt.js")
const page = modules.page;
const cf = require("./users.js")
/**
 *--------------------------------------------------------------------------
 * Exporting create user function.
 *--------------------------------------------------------------------------
*/
module.exports.create = async function (req, res, email, username, avatar, first, last, permission, password) {
    try {
        let packages = await db.get("settings", "packages");
        let lastUser = await db.get("core", "lastuser") ?? 0;
        let id = parseInt(lastUser) + 1;
        if (!password) password = crypt.gen88(12);
        let roles = await db.get("permissions", "roles");
        let role;
        for (let i of roles) {
            let roleData = await db.get("permissions", i);
            if (roleData.permission == permission) {
                role = i;
                break;
            }
        }
        let users = await db.get("users", "users") || [];
        users.push({email: email, id: id});
        let user = {
            nickname: username,
            name: {
                first: first,
                last: last
            },
            id: id,
            username: username,
            avatar: avatar,
            email: email,
            password: crypt.encrypt(password),
            language: "en",
            permissions: {
                roles: [role],
                level: permission,
                intents: []
            },
            date: {
                created: Date.now(),
                modified: Date.now()
            },
            sessions: {
                status: false,
                secret: `hc.ss_${crypt.gen88(24)}`
            },
            settings: {},
            status: {
                suspended: false,
                banned: false
            }
        };
        let balance = {
            coins: 0,
            credits: 0
        }
        let resources = {
            memory: {
                used: 0,
                total: packages.list[packages.default].resources.memory
            },
            disk: {
                used: 0,
                total: packages.list[packages.default].resources.disk
            },
            cpu: {
                used: 0,
                total: packages.list[packages.default].resources.cpu
            },
            servers: {
                used: 0,
                total: packages.list[packages.default].resources.servers
            },
            allocations: {
                used: 0,
                total: packages.list[packages.default].resources.allocations
            },
            databases: {
                used: 0,
                total: packages.list[packages.default].resources.databases
            },
            backups: {
                used: 0,
                total: packages.list[packages.default].resources.backups
            }
        }
        await register(req, res, first, last, username, email, password, user);
        await db.set("users", "users", users);
        await db.set("core", "lastuser", id);
        await db.set('users', id, user);
        await db.set('permissions', id, user.permissions);
        await db.set("resources", id, resources)
        await db.set('economy', id, balance);
        req.session.userinfo = user;
        req.session.permission = await db.get('permissions', id);
        core.redirect(res, '/onboarding')
    } catch (error) {
        console.error(error);
        return res.end(fallback.error500(error));
    }
};
module.exports.login = async function (req, res, a) {
    try {
        let b = await db.get("users", "users") || []
        let c = b.find(i => i.email == a.email);
        const user = await db.get("users", c.id)
        req.session.userinfo = user;
        req.session.permission = await db.get('permissions', c.id);
        return user
    } catch (error) {
        console.error(error);
        return res.end(fallback.error500(error));
    }
};
module.exports.authenticate = async function (req, res, a) {
    let d = await db.get("punishments", "blacklist") || []
    let f = await db.get("punishments", "bans") || []
    let e = d.find(i => i.email == a.email);
    let g = f.find(i => i.email == a.email);
    if (e !== undefined) return page.error("blacklisted", req, res)
    let b = await db.get("users", "users") || []
    let c = b.find(i => i.email == a.email);
    if (!c || c == null || c == undefined) return cf.create(req, res, a.email, (a.username).replace(/[^\w\s]/g, ''), `https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`, a.global_name, a.global_name, 1)
    if (g !== undefined) return core.html(req, res, `./resources/views/errors/banned.ejs`, g)
    let h = await cf.login(req, res, a);
    req.session.userinfo = h
    req.session.permission = await db.get('permissions', h.id);
    core.redirect(res, '/dashboard')
}
async function register(req, res, a, b, c, d, e, f) {
    const g = await db.get('pterodactyl', 'settings');
    let h = await fetch(`${g.domain}/api/application/users`,
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${g.app}` },
            body: JSON.stringify({
                username: c,
                email: d,
                first_name: a,
                last_name: b,
                password: e
            })
        }
    );
    if (h.status === 201) {
        let i = JSON.parse(await h.text());
        req.session.pterodactyl = i.attributes;
        let j = await db.get('pterodactyl', 'users') ?? [];
        j.push({ id: i.attributes.id, hc: f.id });
        await db.set('pterodactyl', f.id, i.attributes);
        await db.set('pterodactyl', 'users', j);
    } else {
        let k = await fetch(`${g.domain}/api/application/users?include=servers&filter[email]=${encodeURIComponent(f.email)}`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${g.app}`
                }
            }
        );
        let l = await k.json();
        let m = l.data.find(u => u.attributes.email == f.email);
        if (m) {
            req.session.pterodactyl = m;
            let n = await db.get('pterodactyl', 'users') ?? [];
            let o = n.findIndex(u => u.id == m.attributes.id);
            if (o == -1) {
                n.push({ id: m.attributes.id, hc: f.id });
                await db.set('pterodactyl', 'users', n);
                await db.set('pterodactyl', f.id, m.attributes);
            } else {
                n[o] = { id: m.attributes.id, hc: f.id };
                await db.set('pterodactyl', 'users', n);
                await db.set('pterodactyl', f.id, m.attributes);
            }
        }
    }
    return;
}