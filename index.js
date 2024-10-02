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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <cr072@holaclient.dev>
 * @copyright 2021 - present HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * index.js - Program startup file.
 *--------------------------------------------------------------------------
 * @description This script verifies the successful migration of database
 * seeders. It automatically executes the migration process if needed. 
 * Additionally, it handles the creation of essential files like ".env" and
 * other temporary files if they are not present. Furthermore, it terminates
 * any processes running on the designated port for this application.
 *--------------------------------------------------------------------------
*/

let fs = require('fs');
let path = require('path');
let os = require('os');
let hcx = require('./src/utils/hcx')
let db = require('./src/handlers/database')
let { execSync } = require('child_process');
if (!fs.existsSync('.env')) {
    fs.copyFile(path.join(__dirname, 'app', 'config', '.env'), path.join(__dirname, '.env'), (err) => {
        if (err) {
            System.out.println('Error creating .env file:', err);
        }
    });
}
process.loadEnvFile('.env')
/**
 *--------------------------------------------------------------------------
 * Checking & Setting environment mode
 *--------------------------------------------------------------------------
*/
let args = process.argv.slice(2);
let dev = args.includes("--dev")
let prod = args.includes("--prod")
if (dev) {
    process.env.APP_ENV = 'development';
} else if (prod) {
    process.env.APP_ENV = 'production';
} else if (dev && prod) {
    System.out.println("Error: You can't use both --dev and --prod flags at the same time, defaulting to production mode!");
    process.env.APP_ENV = 'production'
} else {
    System.out.println("Error: No app env mode selected, defaulting to production mode!");
    process.env.APP_ENV = 'production'
}
/**
 *--------------------------------------------------------------------------
 * Generating secrets
 *--------------------------------------------------------------------------
*/
const a = path.resolve(__dirname, ".env");
const b = () => fs.readFileSync(a, "utf-8").split(os.EOL);
const c = (key, value) => {
    const d = b();
    const e = d.find((e) => e.split("=")[0] == key);
    if (e !== undefined) {
        const f = d.indexOf(e);
        d.splice(f, 1, `${key}=${value}`);
    } else {
        d.push(`${key}=${value}`);
    }
    fs.writeFileSync(a, d.join(os.EOL));
};
if (!process.env.APP_KEY || process.env.APP_KEY == "random") { c('APP_KEY', hcx.crypt.base64(64)) };
if (!process.env.APP_HMAC || process.env.APP_HMAC == "random") { c('APP_HMAC', hcx.crypt.base64(64)) };
if (!process.env.APP_SECRET || process.env.APP_SECRET == "random") { c('APP_SECRET', hcx.crypt.base64(64)) };
if (!process.env.APP_CODE || process.env.APP_CODE == "random") { c('APP_CODE', hcx.crypt.gen(62, 12)) };
if (process.env.APP_ENV == "production") { c('APP_CODE', hcx.crypt.gen(62, 12)) };
/**
 *--------------------------------------------------------------------------
 * Creating directories if doesn't exists
 *--------------------------------------------------------------------------
*/
const d = [
    "storage",
    "storage/backups",
    "storage/cache",
    "storage/config",
    "storage/database",
    "storage/logs",
    "storage/logs/api",
    "storage/logs/app",
    "storage/static",
    "storage/updates"
];
d.forEach(i => {
    const e = path.resolve(__dirname, i);
    if (!fs.existsSync(e)) {
        fs.mkdirSync(e, { recursive: true });
    }
});
/**
 *--------------------------------------------------------------------------
 * Killing all processes running on the designated port for this application
 *--------------------------------------------------------------------------
*/
async function terminateExistingInstances(g) {
    try {
        let f = os.platform();
        if (f === 'linux') {
            const h = execSync(`lsof -i :${g} -t`).toString();
            const j = [...new Set(h.split('\n').filter(Boolean))];
            if (j.length > 0) {
                execSync(`kill -9 ${j.join(' ')}`);
            }
        } else if (f === 'win32') {
            const h = execSync(`netstat -ano | findstr :${g}`).toString();
            const j = [...new Set(h.split('\n')
                .filter(i => i.includes(`:${g}`))
                .map(i => i.trim().split(/\s+/).pop())
                .filter(Boolean))];

            if (j.length > 0) {
                j.forEach(i => {
                    if (parseInt(i) !== 0) {
                        execSync(`taskkill /F /PID ${i}`);
                    }
                });
            }
        }
    } catch (error) {

    }
}
/**
 *--------------------------------------------------------------------------
 * Starting the application loader...
 *--------------------------------------------------------------------------
*/
async function main() {
    try {
        hcx.compressCSSClassNames('./public/common/tailwind.css')
        await terminateExistingInstances(process.env.APP_PORT);
        await require('./src/lib/core/seedFactory')();

        let a = await db.get("app", "seeds") || []
        fs.readdirSync('./app/seeds').forEach(i => {
            if (!a.includes(i) && i.endsWith('.js')) {
                require(path.resolve('./app/seeds', i)).seed(db, hcx);
                a.push(i);
            }
        });
        await require('./src/handlers/cache')()
        require('./src/app')
    } catch (error) {
        console.log(error)
    }
}
main()
/**
 *--------------------------------------------------------------------------
 * End of the file
 *--------------------------------------------------------------------------
*/