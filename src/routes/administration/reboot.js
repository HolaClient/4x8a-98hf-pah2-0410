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
 * resources.js - Administrative handler to manage resources & coins.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
module.exports.load = async function (app, db) {
    const settings = await modules.settings;
    function loadRoutes() {
        app._router.stack = app._router.stack.filter(layer => {
            return !layer.route;
        });
        unloadRoute(path.join(__dirname, '..', '..', 'routes'), app, db);
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'admin'), app, db);
        if (settings.api.enabled === true) { unloadRoute(path.join(__dirname, '..', '..', 'routes', 'application'), app, db); }
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'authentication'), app, db);
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'billing'), app, db);
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'earn'), app, db);
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'structures'), app, db);
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'controller'), app, db);
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'users'), app, db);
        unloadRoute(path.join(__dirname, '..', '..', 'routes', 'features'), app, db);

        loadRoute(path.join(__dirname, '..', '..', 'routes'), app, db);
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'admin'), app, db);
        if (settings.api.enabled === true) { loadRoute(path.join(__dirname, '..', '..', 'routes', 'application'), app, db); }
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'authentication'), app, db);
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'billing'), app, db);
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'earn'), app, db);
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'structures'), app, db);
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'controller'), app, db);
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'users'), app, db);
        loadRoute(path.join(__dirname, '..', '..', 'routes', 'features'), app, db);
        app.all("*", async (req, res) => {
            if (req.session.userinfo);
            let theme = page.get(req);
            const curl = req._parsedUrl.pathname
            if (settings.earn.arcio.enabled == true) req.session.arcsessiontoken = Math.random().toString(36).substring(2, 15);
            if (theme.settings.mustbeloggedin.includes(curl) && !req.session.userinfo) return res.redirect(theme.settings.routes.login);
            if (theme.settings.mustbeadmin.includes(curl) && !req.session.userinfo) return res.redirect(theme.settings.routes.login);
            if (theme.settings.permissions[curl] < req.session.permission) return page.render(theme.settings.errors[403], req, res)
            const data = await eval(appjs.renderdataeval)
            ejs.renderFile(
                `${theme.settings.pages[curl.slice(1)] ? theme.settings.pages[curl.slice(1)] : theme.settings.errors[404]}`,
                data,
                null,
                function (err, str) {
                    delete req.session.newaccount;
                    delete req.session.password;
                    if (err) {
                        console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                        console.log(err);
                        return renderFile(theme.settings.errors[500],
                            {
                                err: err,
                                extra: { home: { name: 'Error 500' } }
                            },
                            null,
                            (err, str) => {
                                if (err) return res.send('<center>Error</center>')
                                res.status(500);
                                res.send(str);
                            }
                        )
                    };
                    res.status(200);
                    res.send(str);
                });
        });
    }

    app.get('/api/admin/reload/routes', core.auth, (req, res) => {
        try {
            loadRoutes();
            l.s(`Successfully reloaded all routes.`)
            res.status(200).json({ message: 'Routes reloaded successfully.' });
        } catch (error) {
            console.error('Error reloading routes:', error);
        }
    });
}
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
function unloadRoute(directory) {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.js'));
    files.forEach(file => {
        const routeModulePath = require.resolve(path.join(directory, file));
        delete require.cache[routeModulePath];
    });
}

/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/