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
const { Console } = require('console');
module.exports = function () {
    const a = new Console(process.stdout);
    a.error = () => { };
    global.console = a;
    console.log(chalk.white("======================================================="));
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('User ID: ', async (id) => {
        if (!id) { console.log(`This is a required field!`); process.exit() };
        rl.question('User permission level: ', async (level) => {
            if (!level) { console.log(`This is a required field!`); process.exit() };
            await modify(id, level)
            console.log("Successfully changed user permissions!")
            rl.close();
            process.exit()
        });
    });
};
async function modify(id, level = level ?? 1) {
    let a = await db.get("users", id)
    let b = await db.get("permissions", id)
    if (!a) {
        console.log(`User with ID: ${id} not found!`)
        process.exit()
    }
    let c = b || {
        "roles": [
            "user"
        ],
        "level": 1,
        "intents": []
    }
    c["level"] = parseInt(level)
    let roles = await db.get("permissions", "roles") || [];
    let role;
    for (let i of roles) {
        let j = await db.get("permissions", i);
        if (j.permission == (level || 1)) {
            role = i;
            break;
        }
    }
    c["roles"] = [role]
    a["permissions"] = c
    await db.set("users", id, a)
    await db.set("permissions", id, c)
    return
}