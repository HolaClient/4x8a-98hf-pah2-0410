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
 * buildAll.js - Application one command builder.
 *--------------------------------------------------------------------------
*/
const modules = require('../../src/utils/modules.js')
var UJS = require("uglify-js");
var UCS = require('uglifycss');
const fs = require('fs').promises;
const { Console } = require('console');
const progress = require('cli-progress');
const { execSync } = require('child_process');

module.exports = async function () {
    const CONSOLE = new Console(process.stdout);
    CONSOLE.error = () => { };
    global.console = CONSOLE;
    let a = Date.now()
    console.log(chalk.white("======================================================="));
    console.log("Building assets...")
    const tasks = [
        { type: 'JS', input: '../../public/admin/default/app.dev.js', output: '../../public/admin/default/app.js' },
        { type: 'JS', input: '../../public/client/default/app.dev.js', output: '../../public/client/default/app.js' },
        { type: 'JS', input: '../../public/setup/default/app.dev.js', output: '../../public/setup/default/app.js' },
        { type: 'CSS', input: '../../public/setup/default/app.dev.css', output: '../../public/setup/default/app.css' },
        { type: 'CSS', input: '../../public/admin/default/app.dev.css', output: '../../public/admin/default/app.css' },
        { type: 'CSS', input: '../../public/client/default/app.dev.css', output: '../../public/client/default/app.css' }
    ];
    let bar = new progress.SingleBar({}, progress.Presets.shades_classic);
    bar.start(tasks.length, 0);
    for (let i = 0; i < tasks.length; i++) {
        const j = tasks[i];
        if (j.type === 'JS') {
            await buildJS(path.join(__dirname, j.input), path.join(__dirname, j.output));
        } else if (j.type === 'CSS') {
            await buildCSS(path.join(__dirname, j.input), path.join(__dirname, j.output));
        }
        bar.increment();
    }
    bar.stop();
    console.log("Successfully built assets... " + chalk.gray(`[${Date.now() - a} ms]`))
    console.log(chalk.white("======================================================="));
    let b = Date.now()
    console.log("Building Tailwind CSS...")
    let foo = new progress.SingleBar({}, progress.Presets.shades_classic);
    foo.start(1, 0);
    execSync('npx tailwindcss -i ./public/common/tailwind.conf -o ./public/common/tailwind.css', { stdio: 'ignore' }, (error) => {
        if (error) {
            console.log(`Error executing command: ${error.message}`);
            return;
        }
    });
    foo.increment();
    foo.stop();
    console.log("Successfully built Tailwind CSS... " + chalk.gray(`[${Date.now() - b} ms]`))
    console.log(chalk.white("======================================================="));
    let c = Date.now()
    console.log("Generating secrets...")
    let boo = new progress.SingleBar({}, progress.Presets.shades_classic);
    const write = async (a, b) => {
        try {
            let c = await fs.readFile(env, "utf-8");
            const d = c.split(os.EOL);
            const e = d.findIndex(line => line.split("=")[0] === a);
            if (e !== -1) {
                d[e] = `${a}=${b}`;
            } else {
                d.push(`${a}=${b}`);
            }
            await fs.writeFile(env, d.join(os.EOL));
        } catch (error) {
            console.error(`Error writing to .env file: ${error.message}`);
        }
    };
    boo.start(4, 0);
    if (!process.env.APP_KEY || process.env.APP_KEY == "random") { write('APP_KEY', crypt.base64(64)) };
    boo.increment()
    if (!process.env.APP_HMAC || process.env.APP_HMAC == "random") { write('APP_HMAC', crypt.base64(64)) };
    boo.increment()
    if (!process.env.APP_SECRET || process.env.APP_SECRET == "random") { write('APP_SECRET', crypt.base64(64)) };
    boo.increment()
    if (process.env.APP_ENV == "production") { write('APP_CODE', crypt.gen88(12)) };
    boo.increment()
    boo.stop()
    console.log("Successfully generated secrets... " + chalk.gray(`[${Date.now() - c} ms]`))
    console.log(chalk.white("======================================================="));
    console.log(`${chalk.white('All files built successfully...')} ${chalk.gray((Date.now() - a))}ms`);
    console.log(chalk.white("======================================================="));
    process.exit()
};
async function buildJS(a, b) {
    const e = UJS.minify(await fs.readFile(a, 'utf-8'));
    await fs.writeFile(b, e.code);
};
async function buildCSS(a, b) {
    const e = UCS.processFiles([a], { maxLineLen: 10000, expandVars: true });
    await fs.writeFile(b, e);
};