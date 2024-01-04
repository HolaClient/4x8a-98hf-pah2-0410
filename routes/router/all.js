const indexjs = require("../../index.js");
const ejs = require("ejs");
const chalk = require("chalk");
const fs = require('fs')
const { renderFile } = require('ejs')
const fetch = require('node-fetch');
const rateLimit = require("express-rate-limit");
const arciotext = require('../handlers/arciotext.js')

module.exports.load = async function (app, db) {
    app.all("*", async (req, res) => {
        if (req.session.pterodactyl);
        let theme = indexjs.get(req);
        if (settings.earn.arcio.enabled == true) req.session.arcsessiontoken = Math.random().toString(36).substring(2, 15);
        if (theme.settings.mustbeloggedin.includes(req._parsedUrl.pathname))
            if (!req.session.userinfo || !req.session.pterodactyl) return res.redirect("/login");
        const isAdminPath = theme.settings.mustbeadmin.includes(req._parsedUrl.pathname);
        const renderErrorPage = (errMessage) => {
            console.log(chalk.red(`[WEB SERVER] An error has occurred on path ${req._parsedUrl.pathname}:`));
            console.log(errMessage);

            renderFile(
                `./views/${settings.defaulttheme}/errors/500.ejs`,
                { settings: settings, db, extra: { home: { name: 'error' } } },
                null,
                (err, str) => {
                    if (err) return res.send('Error 200');
                    res.status(200);
                    res.send(str);
                }
            );
        };

        if (isAdminPath) {
            ejs.renderFile(
                `./views/${theme.name}/${theme.settings.unauthorized}`,
                await eval(indexjs.renderdataeval),
                null,
                async (err, str) => {
                    delete req.session.newaccount;
                    delete req.session.password;

                    if (!req.session.userinfo || !req.session.pterodactyl) {
                        if (err) {
                            renderErrorPage(err);
                            return;
                        }

                        res.status(200);
                        res.send(str);
                        return;
                    }

                    const cacheaccount = await fetch(
                        `${settings.pterodactyl.domain}/api/application/users/${req.session.pterodactyl.id}?include=servers`,
                        {
                            method: "get",
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bearer ${settings.pterodactyl.key}`
                            }
                        }
                    );

                    if (await cacheaccount.statusText === "Not Found") {
                        if (err) {
                            renderErrorPage(err);
                            return;
                        }
                        res.send(str);
                        return;
                    }

                    const cacheaccountinfo = JSON.parse(await cacheaccount.text());

                    req.session.pterodactyl = cacheaccountinfo.attributes;

                    if (cacheaccountinfo.attributes.root_admin !== true) {
                        if (err) {
                            renderErrorPage(err);
                            return;
                        }
                        res.send(str);
                        return;
                    }

                    ejs.renderFile(
                        `./views/${theme.name}/${theme.settings.pages[req._parsedUrl.pathname.slice(1)] ? theme.settings.pages[req._parsedUrl.pathname.slice(1)] : theme.settings.notfound}`,
                        await eval(indexjs.renderdataeval),
                        null,
                        (err, str) => {
                            delete req.session.newaccount;
                            delete req.session.password;
                            if (err) {
                                console.log(`[WEBSITE] An error has occurred on path ${req._parsedUrl.pathname}:`);
                                console.log(err);
                                res.json(err);
                                return;
                            }
                            res.status(200);
                            res.send(str);
                        }
                    );
                }
            );
            return;
        }
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

    var cache = false;
    app.use(function (req, res, next) {
        let manager = {
            "/callback": 2,
            "/create": 1,
            "/delete": 1,
            "/modify": 1,
            "/updateinfo": 1,
            "/setplan": 2,
            "/admin": 1,
            "/regen": 1,
            "/renew": 1,
            "/api/userinfo": 1
        };
        if (manager[req._parsedUrl.pathname]) {
            if (cache == true) {
                setTimeout(async () => {
                    let allqueries = Object.entries(req.query);
                    let querystring = "";
                    for (let query of allqueries) {
                        querystring = querystring + "&" + query[0] + "=" + query[1];
                    }
                    querystring = "?" + querystring.slice(1);
                    res.redirect((req._parsedUrl.pathname.slice(0, 1) == "/" ? req._parsedUrl.pathname : "/" + req._parsedUrl.pathname) + querystring);
                }, 1000);
                return;
            } else {
                cache = true;
                setTimeout(async () => {
                    cache = false;
                }, 1000 * manager[req._parsedUrl.pathname]);
            }
        };
        next();
    });

    app.set('trust proxy', 1);

    const globalLimiter = rateLimit({
        windowMs: settings.ratelimits.global.time * 60 * 1000,
        max: settings.ratelimits.global.max,
        message: "Too many requests from this IP, please try again later.",
    });

    app.use(globalLimiter);

    const newCode = `
    <footer style="background-color: rgba(0,0,0,.2);" class="card card-body">
       <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center;">
             <small style="color: white; font-weight: 100; font-size: 14px;">
                &copy; <script>document.write(new Date().getFullYear());</script> <a style="color: aquamarine; font-weight: 100; font-size: 14px;" href="<%= settings.discord %>"><%= settings.name %></a>
             </small>
          </div>
               <div class="text-center">
                <a style="color: aquamarine; font-weight: 100; font-size: 14px;" href="https://github.com/HolaClient/HolaClient">HolaClient v<%= settings.version %></a>
               </div>
          <div>
             <a href="../tos">
             <button style="color: aquamarine; background-color: transparent; border: none; cursor: pointer; font-size: 14px;">TOS</button>
             </a>
             <a href="../pp">
             <button style="color: aquamarine; background-color: transparent; border: none; cursor: pointer; font-size: 14px;">Policy</button>
             </a>
          </div>
       </div>
    </footer>
    `;

    const filePath = "./views/default/components/footer.ejs";
    fs.writeFile(filePath, newCode, (err) => {
        if (err) {
            console.error('An error occured while checking HolaClient files!');
        }
    });
}