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
 * migrateFactory.js - Factory seeder function.
 *--------------------------------------------------------------------------
*/
const modules = require('../../src/utils/modules.js')
const readline = require('readline');

module.exports = function () {
    console.log(chalk.white("======================================================="));
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Username: ', async (username) => {
        if (!username) { console.log(`This is a required field!`); process.exit()};
        rl.question('Email: ', async (email) => {
            if (!username) { console.log(`This is a required field!`); process.exit()};
            rl.question('First name: ', async (first) => {
                if (!username) { console.log(`This is a required field!`); process.exit()};
                rl.question('Last name: ', async (last) => {
                    if (!username) { console.log(`This is a required field!`); process.exit()};
                    rl.question('Permission integer: ', async (permission) => {
                        rl.question('Password (leave empty to generate): ', async (password) => {
                            const users = await db.get("users", "users") || [];
                            await Promise.all(users.map(async (i) => {
                                const user = await db.get("users", i.id);
                                if (user.username === username) {
                                    console.log(chalk.white("======================================================="));
                                    console.log(`${chalk.white(`Username is already assigned to ${i.id}`)}`);
                                    console.log(chalk.white("======================================================="));
                                    process.kill()
                                } else if (user.email === email) {
                                    console.log(chalk.white("======================================================="));
                                    console.log(`${chalk.white(`Email is already assigned to ${i.id}`)}`);
                                    console.log(chalk.white("======================================================="));
                                    process.kill()
                                }
                            }));
                            await create(email, username, first, last, permission, password);
                            rl.close();
                            process.exit()
                        });
                    });
                });
            });
        });
    });
};
async function create(email, username, first, last, permission, password) {
    let packages = await db.get("settings", "packages");
    let lastUser = await db.get("core", "lastuser") ?? 0;
    let id = parseInt(lastUser) + 1;
    if (!password) password = crypt.gen88(12);
    let roles = await db.get("permissions", "roles");
    let role;
    for (let i of roles) {
        let roleData = await db.get("permissions", i);
        if (roleData.permission == (permission || 1)) {
            role = i;
            break;
        }
    }
    let users = await db.get("users", "users") || [];
    users.push({ email: email, id: id });
    let user = {
        nickname: username,
        name: {
            first: first,
            last: last
        },
        id: id,
        username: username,
        avatar: 'https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-person-icon-in-a-gradient-on-a-flat-blue-and-pastel-vector-png-image_6834039.png',
        email: email,
        password: crypt.encrypt(password),
        language: "en",
        permissions: {
            roles: [role],
            level: (parseInt(permission) || 1),
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
    };
    user.password = password
    await queue.add.user(user);
    await db.set("users", "users", users);
    await db.set("core", "lastuser", id);
    await db.set('users', id, user);
    await db.set('permissions', id, user.permissions);
    await db.set("resources", id, resources)
    await db.set('economy', id, balance);
    console.log(chalk.white("======================================================="));
    console.log(`${chalk.white('An user with the below details will be created soon.')}`)
    console.log(`${chalk.white(`Username: ${username}`)}`);
    console.log(`${chalk.white(`Email: ${email}`)}`);
    console.log(`${chalk.white(`Full name: ${first, last}`)}`);
    console.log(`${chalk.white(`Permission: ${permission}`)}`);
    console.log(`${chalk.white(`Password: ${password}`)}`);
    console.log(chalk.white("======================================================="));
    return
}