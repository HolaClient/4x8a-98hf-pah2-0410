const path = require('path');
const fs = require("fs");
const chalk = require("chalk");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const { renderFile } = require('ejs')
const arciotext = require('../handlers/arciotext.js')
const express = require("express");
const fetch = require('node-fetch');

module.exports.load = async function (app, db) {
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
            if (req.session.pterodactyl);
            let theme = indexjs.get(req);
            if (settings.earn.arcio.enabled == true) req.session.arcsessiontoken = Math.random().toString(36).substring(2, 15);
            if (theme.settings.mustbeloggedin.includes(req._parsedUrl.pathname))
                if (!req.session.userinfo || !req.session.pterodactyl) return res.redirect("/auth");
            if (theme.settings.mustbeadmin.includes(req._parsedUrl.pathname)) {
                ejs.renderFile(
                    `./views/${theme.name}/${theme.settings.unauthorized}`,
                    await eval(indexjs.renderdataeval),
                    null,
                    async function (err, str) {
                        delete req.session.newaccount;
                        delete req.session.password;
                        if (!req.session.userinfo || !req.session.pterodactyl) {
                            if (err) {
                                console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                                console.log(err);
                                return renderFile(
                                    `./views/${settings.defaulttheme}/errors/500.ejs`,
                                    {
                                        settings: settings,
                                        db,
                                        extra: { home: { name: 'error' } }
                                    },
                                    null,
                                    (err, str) => {
                                        if (err) return res.send('Error 200')
                                        res.status(200);
                                        res.send(str);
                                    }
                                )
                            };
                            res.status(200);
                            return res.send(str);
                        };
        
                        let cacheaccount = await fetch(
                            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers", {
                            method: "get",
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bearer ${settings.pterodactyl.key}`
                            }
                        }
                        );
                        if (await cacheaccount.statusText == "Not Found") {
                            if (err) {
                                console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                                console.log(err);
                                return renderFile(
                                    `./views/${settings.defaulttheme}/errors/500.ejs`,
                                    {
                                        settings: settings,
                                        db,
                                        extra: { home: { name: 'error' } }
                                    },
                                    null,
                                    (err, str) => {
                                        if (err) return res.send('Error 200')
                                        res.status(200);
                                        res.send(str);
                                    }
                                )
                            };
                            return res.send(str);
                        };
                        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        
                        req.session.pterodactyl = cacheaccountinfo.attributes;
                        if (cacheaccountinfo.attributes.root_admin !== true) {
                            if (err) {
                                console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                                console.log(err);
                                return renderFile(
                                    `./views/${settings.defaulttheme}/errors/500.ejs`,
                                    {
                                        settings: settings,
                                        db,
                                        extra: { home: { name: 'error' } }
                                    },
                                    null,
                                    (err, str) => {
                                        if (err) return res.send('Error 200')
                                        res.status(200);
                                        res.send(str);
                                    }
                                )
                            };
                            return res.send(str);
                        };
        
                        ejs.renderFile(
                            `./views/${theme.name}/${theme.settings.pages[req._parsedUrl.pathname.slice(1)] ? theme.settings.pages[req._parsedUrl.pathname.slice(1)] : theme.settings.notfound}`,
                            await eval(indexjs.renderdataeval),
                            null,
                            function (err, str) {
                                delete req.session.newaccount;
                                delete req.session.password;
                                if (err) {
                                    console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
                                    console.log(err);
                                    return res.json(err);
                                };
                                res.status(200);
                                res.send(str);
                            });
                    });
                return;
            };
            const data = await eval(indexjs.renderdataeval)
            ejs.renderFile(
                `./views/${theme.name}/${theme.settings.pages[req._parsedUrl.pathname.slice(1)] ? theme.settings.pages[req._parsedUrl.pathname.slice(1)] : theme.settings.notfound}`,
                data,
                null,
                function (err, str) {
                    delete req.session.newaccount;
                    delete req.session.password;
                    if (err) {
                        console.log(chalk.red(`[WEB SERVER] An error has occured on path ${req._parsedUrl.pathname}:`));
                        console.log(err);
                        return renderFile(
                            `./views/${settings.defaulttheme}/errors/500.ejs`,
                            {
                                settings: settings,
                                db,
                                extra: { home: { name: 'Error 500' } }
                            },
                            null,
                            (err, str) => {
                                if (err) return res.send('<center>Error</center>')
                                res.status(200);
                                res.send(str);
                            }
                        )
                    };
                    res.status(200);
                    res.send(str);
                });
        });
    }

    app.get('/admin/reload/routes', (req, res) => {
        if (!req.session.pterodactyl) return res.redirect('/login');
        if (req.session.pterodactyl.root_admin !== true)
        return res.json({ success: false, message: alerts.NOTANADMIN });
        try {
            loadRoutes();
            l.s(`Successfully reloaded all routes.`)
            res.status(200).json({ message: 'Routes reloaded successfully.' });
        } catch (error) {
            console.error('Error reloading routes:', error);
        }
    });

    app.get('/admin/reload/settings', async (req, res) => {
        if (!req.session.pterodactyl) return res.redirect('/login');
        if (req.session.pterodactyl.root_admin !== true)
        return res.json({ success: false, message: alerts.NOTANADMIN });
        try {
            global.settings = {};
            global.eggconfig = {};

            const newsettings = require('../../handlers/settings').settings();
            const newEggconfig = require('../../eggs.json');

            Object.assign(global.settings, newsettings);
            Object.assign(global.eggconfig, newEggconfig);

            l.s('Successfully reloaded the Settings.');
            res.status(200).json({ success: true, message: 'Settings reloaded successfully.' });
        } catch (error) {
            console.error('Error reloading settings:', error);
            res.status(500).json({ success: false, message: 'Failed to reload settings.,', error: error });
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
