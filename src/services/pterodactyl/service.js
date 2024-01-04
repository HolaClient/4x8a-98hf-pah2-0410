const modules = require('../../utils/modules')
const path = modules.path;
const chalk = modules.chalk
const fs = modules.fs
module.exports.load = async function (app, db) {
loadRoute(path.join(__dirname, 'routers', 'core'), app, db);
loadRoute(path.join(__dirname, 'routers', 'security'), app, db);
loadRoute(path.join(__dirname, 'routers', 'servers'), app, db);
function loadRoute(directory, app, db) {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.js'));
    files.forEach(file => {
        const routeModule = require(path.join(directory, file));
        if (typeof routeModule.load === 'function') {
            routeModule.load(app, db);
        } else {
            console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] [")}${chalk.gray("ROUTER")}${chalk.white("] ")}${chalk.red(`Error while loading ${chalk.cyan(`${file}`)}`)}`)
        }
    });
}
async function check() {
    let fest = await db.get('pterodactyl', 'manifest')
    if (!fest) {
     let mjs = require('./manifest.json')
     await db.set('pterodactyl', 'manifest', mjs)
    }
   }
   check()
}