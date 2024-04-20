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
 * @author CR072 <crazymath072@holaclient.tech>
 * @license MIT
 * 
 * https://x.holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * router.js - Endpoints handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../../src/utils/modules.js')
const crypto = modules.crypto;
const crypt = modules.crypt;
const path = modules.path
const fs = modules.fs
/**
 *--------------------------------------------------------------------------
 * Exporting
 *--------------------------------------------------------------------------
*/
module.exports = async function (db) {
/**
*--------------------------------------------------------------------------
* Migrating settings
*--------------------------------------------------------------------------
*/
let dbAppearance = await db.get("settings", "appearance")
let appearance = {
    name: "HolaClient-X1",
    logo: {
        url: "https://cdn.holaclientx.tech/logo.png",
        rotate: false,
        speed: "6s"
    },
    banner: "https://cdn.holaclientx.tech/production/X1/banners/index.png",
    description: "Your description here, change this in settings > appearance.",
    theme: {
        layouts: "default",
        admin: "default",
        landing: "default"
    },
    seo: {
        title: "",
        description: "",
        keywords: ""
    }
}
if (!dbAppearance) {
    await db.set("settings", "appearance", appearance)
}
let dbLinks = await db.get("settings", "links")
let links = {
    name: "HolaClient-X1",
    logo: {
        url: "https://cdn.holaclientx.tech/logo.png",
        rotate: false,
        speed: "6s"
    },
    banner: "https://cdn.holaclientx.tech/production/X1/banners/index.png",
    description: "Your description here, change this in settings > appearance.",
    theme: {
        layouts: "default",
        admin: "default",
        landing: "default"
    },
    seo: {
        title: "",
        description: "",
        keywords: ""
    }
}
if (!dbLinks) {
    await db.set("settings", "links", links)
}
let dbPackages = await db.get("settings", "packages")
let packages = {
    default: "default",
    list: {
        default: {
            display: "Default",
            price: 0,
            store: false,
            resources: {
                memory: 3072,
                disk: 5120,
                cpu: 150,
                servers: 1,
                databases: 1,
                allocations: 1,
                backups: 1
            }
        }
    }
}
if (!dbPackages) {
    await db.set("settings", "packages", packages)
}
let dbSmtp = await db.get("settings", "smtp")
let smtp = {
    enabled: false,
    host: "",
    port: 487,
    user: "",
    pass: "",
    mail: ""
}
if (!dbSmtp) {
    await db.set("settings", "smtp", smtp)
}
/**
 *--------------------------------------------------------------------------
 * Registering system user
 *--------------------------------------------------------------------------
*/
let lastuser = await db.get('core', "lastuser");
if (!lastuser) {
    let password = crypt.gen88(32)
    let c = fs.readFileSync(path.join(__dirname, '../../../.env'), 'utf-8');
    const d = /^SESSION_ACCESS=.*$/m;
    if (d.test(c)) {
        c = c.replace(d, `SESSION_ACCESS=${password}`);
    } else {
        c += `\nSESSION_ACCESS=${password}\n`;
    }
    fs.writeFileSync(path.join(__dirname, '../../../.env'), c);
    let system = {
        nickname: "System",
        name: {
            first: "System",
            last: ""
        },
        hcid: 0,
        avatar: "https://cdn.holaclientx.tech/logo.png",
        password: crypt.encrypt(password),
        role: "system",
        email: "system@holaclientx.tech",
        permissions: {
            roles: ["system"],
            level: 10000,
            intents: []
        },
        resources: null,
        servers: null,
        connections: {},
        devices: null,
        date: {
            created: Date.now(),
            modified: Date.now()
        },
        sessions: {
            status: true,
            secret: `hc.ss_${crypt.gen88(12)}privtIsADickHead${crypt.gen88(pa12ssword)}`
        },
        "2fa": {
            status: false
        },
        ip: {
            v4: "",
            v6: ""
        },
    }
    await db.set('users', "0", system);
    await db.set('core', "lastuser", 0);
}
/**
*--------------------------------------------------------------------------
* Migrating permissions
*--------------------------------------------------------------------------
*/
let permissions = await db.get('permissions', 'roles');
if (!permissions) {
    async function set(p, v) {
        await db.set("permissions", p, v);
    }
    const roles = [
        { name: "guest", permission: 0 },
        { name: "user", permission: 1 },
        { name: "mod", permission: 100 },
        { name: "admin", permission: 200 },
        { name: "board", permission: 300 },
        { name: "owner", permission: 400 }
    ];
    const roleNames = roles.map(role => role.name);
    await db.set("permissions", "roles", roleNames);
    for (const role of roles) {
        await set(role.name, {
            display: role.name.charAt(0).toUpperCase() + role.name.slice(1),
            intents: [`intents.${role.name}`],
            users: [],
            permission: role.permission
        });
    }
}
/**
*--------------------------------------------------------------------------
* Migrating Pterodactyl settings
*--------------------------------------------------------------------------
*/
let pteroDB = await db.get("pterodactyl", "settings")
let ptero = {
    domain: "https://",
    app: "ptla_",
    acc: "ptlc_",
    deployments: {
        fees: 0
    }
}
if (!pteroDB) {
    await db.set("pterodactyl", "settings", ptero)
}
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/