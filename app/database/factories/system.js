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
 * system.js - Default system values seeder.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../../src/utils/modules.js')
/**
 *--------------------------------------------------------------------------
 * Exporting
 *--------------------------------------------------------------------------
*/
module.exports = async function (db) {
    let a = await db.get('core', "lastuser");
    if (!a) {
        await db.set('users', "0", {
            nickname: "System",
            name: {
                first: "System",
                last: ""
            },
            id: 0,
            username: "system",
            avatar: "https://cdn.holaclientx.tech/logo.png",
            password: crypt.encrypt(crypt.gen88(32)),
            email: "system@holaclientx.tech",
            permissions: {
                roles: ["system"],
                level: 10000,
                intents: ['*']
            },
            date: {
                created: Date.now(),
                modified: Date.now()
            },
            sessions: {
                status: true,
                secret: `hc.ss_${crypt.gen88(12)}privtIsADickHead${crypt.gen88(12)}`
            }
        });
        await db.set('permissions', 0, {
            roles: ["system"],
            level: 10000,
            intents: ['*']
        });
        let users = await db.get("users", "users") || [];
        if (users.find(i => i.id !== 0)) {
            users.push({ email: "system@holaclientx.tech", id: 0 });
            await db.set('users', 'users', users)
        }
        await db.set('core', "lastuser", 0);
    }
    let b = await db.get('permissions', 'roles');
    if (!b) {
        const roles = [
            { name: "guest", permission: 0 },
            { name: "user", permission: 1 },
            { name: "mod", permission: 100 },
            { name: "admin", permission: 200 },
            { name: "board", permission: 300 },
            { name: "owner", permission: 400 }
        ];
        await db.set("permissions", "roles", roles.map(i => i.name));
        for (let i of roles) {
            await db.set("permissions", i.name, {
                display: i.name.charAt(0).toUpperCase() + i.name.slice(1),
                intents: [`intents.${i.name}`],
                users: [],
                permission: i.permission
            });
        }
    };
    let c = await db.get("core", "about")
    if (!c) await db.set("core", "about", {
        version: "X1",
        codename: "Virtuo",
        build: "HCX1042401",
        security: "January 2024",
        updater: 0,
        marketplace: 0,
        ui: {
            type: "HCX UI 0",
            admin: 0,
            client: 0
        },
        warranty: "Active"
    });
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/