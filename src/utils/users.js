<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
const af = require('../cache/users.js')
/**
 *--------------------------------------------------------------------------
 * Exporting create user function.
 *--------------------------------------------------------------------------
*/
module.exports.get = async function (a) {
    return await af.get(a)
};
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
const af = require('../cache/users.js')
/**
 *--------------------------------------------------------------------------
 * Exporting create user function.
 *--------------------------------------------------------------------------
*/
module.exports.get = async function (a) {
    return await af.get(a)
};
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
            avatar: avatar || "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png",
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
>>>>>>> 7f9cef0 (02-05)
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
const af = require('../cache/users.js')
/**
 *--------------------------------------------------------------------------
 * Exporting create user function.
 *--------------------------------------------------------------------------
*/
module.exports.get = async function (a) {
    return await af.get(a)
};
module.exports.create = async function (req, res, email, username, avatar, first, last, permission, password) {
    try {
        let a = await db.get("ips", "ips") || []
        let b = a.find(i => i.ip === req.ip)
        if (b && b !== undefined) return {success: false, message: "ALTACC"}
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
            avatar: avatar || "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png",
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
                secret: `hc.ss_${crypt.gen88(48)}`,
                key: `hc.sk_${crypt.gen88(64)}`
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
        await db.set("users", "users", users);
        await db.set("core", "lastuser", id);
        await db.set('users', id, user);
        await db.set('permissions', id, user.permissions);
        await db.set("resources", id, resources)
        await db.set('economy', id, balance);
        req.session.userinfo = user;
        req.session.permission = await db.get('permissions', id);
        return {success: true, data: user}
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = user.id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
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
    await cf.login(req, res, a);
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
>>>>>>> 6db1d9f (21-05)
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
const af = require('../cache/users.js')
/**
 *--------------------------------------------------------------------------
 * Exporting create user function.
 *--------------------------------------------------------------------------
*/
module.exports.get = async function (a) {
    return await af.get(a)
};
module.exports.create = async function (req, res, email, username, avatar, first, last, permission, password) {
    try {
        let a = await db.get("ips", "ips") || []
        let b = a.find(i => i.ip === req.ip)
        if (b && b !== undefined) return {success: false, message: "ALTACC"}
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
        users.push({email: email, username: username, id: id});
        let user = {
            nickname: username,
            name: {
                first: first,
                last: last
            },
            id: id,
            username: username,
            avatar: avatar || "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png",
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
                secret: `hc.ss_${crypt.gen88(48)}`,
                key: `hc.sk_${crypt.gen88(64)}`
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
        core.setCookie(res, "user", id)
        await db.set("users", "users", users);
        await db.set("core", "lastuser", id);
        await db.set('users', id, user);
        await db.set('permissions', id, user.permissions);
        await db.set("resources", id, resources)
        await db.set('economy', id, balance);
        req.session.userinfo = user;
        req.session.permission = await db.get('permissions', id);
        return {success: true, data: user}
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = user.id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
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
    await cf.login(req, res, a);
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
>>>>>>> 4473be3 (29-05)
}
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
        let a = await db.get("ips", "ips") || []
        let b = a.find(i => i.ip === req.ip)
        if (b && b !== undefined) return {success: false, message: "ALTACC"}
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
        users.push({email: email, username: username, id: id});
        let user = {
            nickname: username,
            name: {
                first: first,
                last: last
            },
            id: id,
            username: username,
            avatar: avatar || "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png",
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
                secret: `hc.ss_${crypt.gen88(48)}`,
                key: `hc.sk_${crypt.gen88(64)}`
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
        core.setCookie(res, "user", id)
        await db.set("users", "users", users);
        await db.set("core", "lastuser", id);
        await db.set('users', id, user);
        await db.set('permissions', id, user.permissions);
        await db.set("resources", id, resources)
        await db.set('economy', id, balance);
        req.session.userinfo = user;
        req.session.permission = await db.get('permissions', id);
        return {success: true, data: user}
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = user.id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
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
    await cf.login(req, res, a);
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
let users = {}
let total = []
let num
async function cache() {
    try {
        let a = await db.get("users", "users") || [];
        let pterodactyl = await db.get("pterodactyl", "settings");
        if (a.length === 0) return;
        const avatar = async (b) => {
            let c = await fetch(b);
            let d = await c.buffer();
            return `data:${c.headers.get('content-type')};base64,${d.toString('base64')}`;
        };
        const get = async (b) => {
            let c = await db.get("users", b);
            c.avatar = c.avatar ? await avatar(c.avatar) : await avatar("https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png");
            let d = {};
            let e = await db.get("pterodactyl", "users") || [];
            let f = e.find(j => j.hc == b);
            if (f) {
                try {
                    let g = await fetch(`${pterodactyl.domain}/api/application/users/${f.id}?include=servers`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${pterodactyl.app}`,
                            "Content-Type": "application/json"
                        }
                    });
                    let h = await g.json();
                    await db.set("pterodactyl", f.id, h.attributes);
                    d = h.attributes;
                    if (d && d.email !== c.email) {
                        let k = await fetch(`${pterodactyl.domain}/api/application/users?include=servers&filter[email]=${encodeURIComponent(c.email)}`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${pterodactyl.app}`,
                                "Content-Type": "application/json"
                            }
                        });
                        let l = await k.json();
                        if (l.data.length > 0) {
                            let m = l.data.find(i => i.attributes.email === c.email)
                            if (m) {
                                d = m.attributes;
                                await db.set("pterodactyl", m.id, d);
                                let n = e.findIndex(i => i.hc === c.id)
                                e[n] = { hc: c.id, id: d.id, email: d.email };
                                await db.set("pterodactyl", "users", e);
                            }
                        }
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            return { hcx: c, ptl: d };
        };
        let b = [];
        let c = {};
        await Promise.all(a.map(i => {
            if (i.id === 0) return null;
            return get(i.id).then(j => {
                b.push(j);
                c[i.id] = j;
            });
        }).filter(i => i !== null));
        await cacheDB.set("users", b);
    } catch (error) {
        console.error(error);
    }
};
setInterval(cache, 60000 * 5);
module.exports.reload = cache()
module.exports.get = async function (a) {
    if (users[a] && users[a] !== null) { return users[a] } else {
        return await db.get("users", a);
    }
};
module.exports.getAll = async function () {
    if (num !== total.length) {
        return await cacheDB.get("users")
    } else {
        return total
    }
};
>>>>>>> 08cb23d (04-06)
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
        let a = await db.get("ips", "ips") || []
        let b = a.find(i => i.ip === req.ip)
        if (b && b !== undefined) return {success: false, message: "ALTACC"}
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
        users.push({email: email, username: username, id: id});
        let user = {
            nickname: username,
            name: {
                first: first,
                last: last
            },
            id: id,
            username: username,
            avatar: avatar || "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png",
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
                secret: `hc.ss_${crypt.gen88(48)}`,
                key: `hc.sk_${crypt.gen88(64)}`
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
        core.setCookie(res, "user", id)
        await db.set("users", "users", users);
        await db.set("core", "lastuser", id);
        await db.set('users', id, user);
        await db.set('permissions', id, user.permissions);
        await db.set("resources", id, resources)
        await db.set('economy', id, balance);
        req.session.userinfo = user;
        req.session.permission = await db.get('permissions', id);
        return {success: true, data: user}
    } catch (error) {
        System.err.println(error);
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = user.id
        core.setCookie(res, "hc.sk", JSON.stringify(e))
        return user
    } catch (error) {
        System.err.println(error);
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
    await cf.login(req, res, a);
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
let users = {}
let total = []
let num
async function cache() {
    try {
        let a = await db.get("users", "users") || [];
        let pterodactyl = await db.get("pterodactyl", "settings");
        if (a.length === 0) return;
        const avatar = async (b) => {
            let c = await fetch(b);
            let d = await c.buffer();
            return `data:${c.headers.get('content-type')};base64,${d.toString('base64')}`;
        };
        const get = async (b) => {
            let c = await db.get("users", b);
            c.avatar = c.avatar ? await avatar(c.avatar) : await avatar("https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png");
            let d = {};
            let e = await db.get("pterodactyl", "users") || [];
            let f = e.find(j => j.hc == b);
            if (f) {
                try {
                    let g = await fetch(`${pterodactyl.domain}/api/application/users/${f.id}?include=servers`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${pterodactyl.app}`,
                            "Content-Type": "application/json"
                        }
                    });
                    let h = await g.json();
                    await db.set("pterodactyl", f.id, h.attributes);
                    d = h.attributes;
                    if (d && d.email !== c.email) {
                        let k = await fetch(`${pterodactyl.domain}/api/application/users?include=servers&filter[email]=${encodeURIComponent(c.email)}`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${pterodactyl.app}`,
                                "Content-Type": "application/json"
                            }
                        });
                        let l = await k.json();
                        if (l.data.length > 0) {
                            let m = l.data.find(i => i.attributes.email === c.email)
                            if (m) {
                                d = m.attributes;
                                await db.set("pterodactyl", m.id, d);
                                let n = e.findIndex(i => i.hc === c.id)
                                e[n] = { hc: c.id, id: d.id, email: d.email };
                                await db.set("pterodactyl", "users", e);
                            }
                        }
                    }
                } catch (error) {
                    System.err.println(error);
                }
            }
            return { hcx: c, ptl: d };
        };
        let b = [];
        let c = {};
        await Promise.all(a.map(i => {
            if (i.id === 0) return null;
            return get(i.id).then(j => {
                b.push(j);
                c[i.id] = j;
            });
        }).filter(i => i !== null));
        await cacheDB.set("users", b);
    } catch (error) {
        System.err.println(error);
    }
};
setInterval(cache, 60000 * 5);
module.exports.reload = cache()
module.exports.get = async function (a) {
    if (users[a] && users[a] !== null) { return users[a] } else {
        return await db.get("users", a);
    }
};
module.exports.getAll = async function () {
    if (num !== total.length) {
        return await cacheDB.get("users")
    } else {
        return total
    }
};
>>>>>>> fcca946 (09-06)
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
        let a = await db.get("ips", "ips") || []
        let b = a.find(i => i.ip === req.ip)
        if (b && b !== undefined) return {success: false, message: "ALTACC"}
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
        users.push({email: email, username: username, id: id});
        let user = {
            nickname: username,
            name: {
                first: first,
                last: last
            },
            id: id,
            username: username,
            avatar: avatar || "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png",
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
                secret: `hc.ss_${crypt.gen88(48)}`,
                key: `hc.sk_${crypt.gen88(64)}`
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = id
        hcx.core.cookies.set(res, "hc.sk", JSON.stringify(e))
        hcx.core.cookies.set(res, "user", id)
        await db.set("users", "users", users);
        await db.set("core", "lastuser", id);
        await db.set('users', id, user);
        await db.set('permissions', id, user.permissions);
        await db.set("resources", id, resources)
        await db.set('economy', id, balance);
        req.session.userinfo = user;
        req.session.permission = await db.get('permissions', id);
        return {success: true, data: user}
    } catch (error) {
        System.err.println(error);
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
        let e = crypt.encrypt(user?.sessions?.key || req.session.userinfo.sessions.key, user.sessions.secret);
        e["user"] = user.id
        hcx.core.cookies.set(res, "hc.sk", JSON.stringify(e))
        return user
    } catch (error) {
        System.err.println(error);
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
    await cf.login(req, res, a);
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
let users = {}
let total = []
let num
async function cache() {
    try {
        let a = await db.get("users", "users") || [];
        let pterodactyl = await db.get("pterodactyl", "settings");
        if (a.length === 0) return;
        const avatar = async (b) => {
            let c = await fetch(b);
            let d = await c.buffer();
            return `data:${c.headers.get('content-type')};base64,${d.toString('base64')}`;
        };
        const get = async (b) => {
            let c = await db.get("users", b);
            c.avatar = c.avatar ? await avatar(c.avatar) : await avatar("https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png");
            let d = {};
            let e = await db.get("pterodactyl", "users") || [];
            let f = e.find(j => j.hc == b);
            if (f) {
                try {
                    let g = await fetch(`${pterodactyl.domain}/api/application/users/${f.id}?include=servers`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${pterodactyl.app}`,
                            "Content-Type": "application/json"
                        }
                    });
                    let h = await g.json();
                    await db.set("pterodactyl", f.id, h.attributes);
                    d = h.attributes;
                    if (d && d.email !== c.email) {
                        let k = await fetch(`${pterodactyl.domain}/api/application/users?include=servers&filter[email]=${encodeURIComponent(c.email)}`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${pterodactyl.app}`,
                                "Content-Type": "application/json"
                            }
                        });
                        let l = await k.json();
                        if (l.data.length > 0) {
                            let m = l.data.find(i => i.attributes.email === c.email)
                            if (m) {
                                d = m.attributes;
                                await db.set("pterodactyl", m.id, d);
                                let n = e.findIndex(i => i.hc === c.id)
                                e[n] = { hc: c.id, id: d.id, email: d.email };
                                await db.set("pterodactyl", "users", e);
                            }
                        }
                    }
                } catch (error) {
                    System.err.println(error);
                }
            }
            return { hcx: c, ptl: d };
        };
        let b = [];
        let c = {};
        await Promise.all(a.map(i => {
            if (i.id === 0) return null;
            return get(i.id).then(j => {
                b.push(j);
                c[i.id] = j;
            });
        }).filter(i => i !== null));
        await cacheDB.set("users", b);
    } catch (error) {
        System.err.println(error);
    }
};
setInterval(cache, 60000 * 5);
module.exports.reload = cache()
module.exports.get = async function (a) {
    if (users[a] && users[a] !== null) { return users[a] } else {
        return await db.get("users", a);
    }
};
module.exports.getAll = async function () {
    if (num !== total.length) {
        return await cacheDB.get("users")
    } else {
        return total
    }
};
>>>>>>> 7187691 (Fix: Refactored mistake)
