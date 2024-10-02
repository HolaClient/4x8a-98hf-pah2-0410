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
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
try {
    const uWS = require('uWebSockets.js');
    const requests = require('../../handlers/requests');

    module.exports = () => {
        const app = uWS.App();
        const wares = [];
        const routes = {
            GET: [],
            POST: [],
            PUT: [],
            PATCH: [],
            DELETE: [],
            OPTIONS: [],
            HEAD: [],
            CONNECT: [],
            TRACE: [],
            ANY: []
        };

        function use(a, b) {
            if (typeof a === 'function') {
                b = a;
                a = '*';
            }
            wares.push({ path: a, ware: b });
        }

        function registerRoute(a, path, handler) {
            const keys = [];
            const pattern = path.replace(/:(\w+)/g, (_, key) => {
                keys.push(key);
                return '([^/]+)';
            });
            routes[a].push({ path, pattern: new RegExp(`^${pattern}$`), keys, handler });
        }

        async function handle(req, res) {
            const a = req.getMethod().toUpperCase();
            const url = req.getUrl();
            let headers = {};

            req.forEach((key, value) => {
                headers[key] = value;
            });
            req.status = false;
            req.method = a;
            req.url = url;
            req.query = Object.fromEntries(new URLSearchParams(req.getQuery()));
            req.params = {};
            req.headers = headers;
            req.ip = req.getHeader('x-forwarded-for') || req.getHeader('remote-address') || req.getHeader('remote_addr') || req.getHeader("remoteAddress");

            let b = 0;
            let resStatus = false;
            res.onAborted(() => {
                resStatus = true;
                req.status = true
            });

            if (resStatus) return;

            requests.log(req);
            res.cork(() => {
                res.writeHeader('X-Powered-By', 'HolaClient-X1');
            });
            res.setHeader = (a, b) => {
                res.cork(() => {
                    if (!resStatus) {
                        res.writeHeader(a, b);
                    }
                });
            };
            res.setStatus = (a) => {
                res.cork(() => {
                    if (!resStatus) {
                        res.writeStatus(a.toString());
                    }
                });

            };
            res.redirect = (url) => {
                res.cork(() => {
                    if (!resStatus) {
                        res.setStatus('301 Moved Permanently');
                        res.setHeader('Location', url);
                        res.setHeader("Content-Type", "text/html");
                        res.end(`<script>location.href="${url}"</script>`);
                    }
                });
            };
            const c = res.end.bind(res);
            res.end = (data) => {
                res.cork(() => {
                    if (!resStatus) {
                        resStatus = true;
                        if (data) {
                            c(data);
                        } else {
                            c();
                        }
                    }
                });
            };

            async function next(err) {
                if (resStatus) return;
                if (err) {
                    res.cork(() => {
                        if (!resStatus) {
                            resStatus = true;
                            res.end(err.message || 'Internal Server Error');
                        }
                    });
                    return;
                }
                if (b < wares.length) {
                    const { path, ware } = wares[b++];
                    if (path === '*' || path === url) {
                        try {
                            await ware(req, res, next);
                        } catch (err) {
                            next(err);
                        }
                    } else {
                        next();
                    }
                } else if (routes[a]) {
                    for (let i of routes[a]) {
                        const match = url.match(i.pattern);
                        if (match) {
                            req.params = {};
                            i.keys.forEach((key, index) => {
                                req.params[key] = match[index + 1];
                            });
                            try {
                                await i.handler(req, res, next);
                            } catch (err) {
                                next(err);
                            }
                            return;
                        }
                    }

                    res.cork(() => {
                        if (!resStatus) {
                            resStatus = true;
                            res.end('Not Found');
                        }
                    });
                } else {
                    res.cork(() => {
                        if (!resStatus) {
                            resStatus = true;
                            res.setStatus(405);
                            res.end('Method Not Allowed');
                        }
                    });
                }
            }

            try {
                await next();
            } catch (error) {
                console.error(error);
                res.cork(() => {
                    if (!resStatus) {
                        resStatus = true;
                        res.end('Internal Server Error');
                    }
                });
            }
        }

        app.any('/*', (res, req) => {
            handle(req, res).catch(err => {
                res.cork(() => {
                    console.error(err);
                    if (!res.aborted) {
                        res.end('Internal Server Error');
                    }
                });
            });
        });

        function listen(port, callback) {
            app.listen(port, (token) => {
                if (token) {
                    if (callback) callback();
                } else {
                    console.log(`Failed to listen on port ${port}`);
                }
            });
        }

        function static(a, b) {
            use(async (req, res, next) => {
                const c = path.join(b, req.url.replace(a, ''));
                let resAborted = false;

                res.onAborted(() => {
                    resAborted = true;
                });

                fs.readFile(c, (err, d) => {
                    if (resAborted) return;

                    if (err) {
                        next();
                    } else {
                        res.cork(() => {
                            if (!resAborted) {
                                res.writeHeader('Content-Type', getContentType(c));
                                res.setStatus(200);
                                res.end(d);
                            }
                        });
                    }
                });
            });
        }

        function getContentType(a) {
            const b = path.extname(a).toLowerCase();
            switch (b) {
                case '.html': return 'text/html';
                case '.js': return 'application/javascript';
                case '.css': return 'text/css';
                case '.json': return 'application/json';
                case '.txt': return 'text/text';
                case '.png': return 'image/png';
                case '.jpg': return 'image/jpg';
                case '.jpeg': return 'image/jpeg';
                case '.gif': return 'image/gif';
                case '.svg': return 'image/svg';
                default: return 'application/octet-stream';
            }
        }

        return {
            use,
            get: (path, handler) => registerRoute('GET', path, handler),
            post: (path, handler) => registerRoute('POST', path, handler),
            put: (path, handler) => registerRoute('PUT', path, handler),
            patch: (path, handler) => registerRoute('PATCH', path, handler),
            delete: (path, handler) => registerRoute('DELETE', path, handler),
            options: (path, handler) => registerRoute('OPTIONS', path, handler),
            head: (path, handler) => registerRoute('HEAD', path, handler),
            connect: (path, handler) => registerRoute('CONNECT', path, handler),
            trace: (path, handler) => registerRoute('TRACE', path, handler),
            any: (path, handler) => registerRoute('ANY', path, handler),
            ws: (path, handler) => app.ws(path, handler),
            listen,
            static,
            routes
        };
    }

} catch (error) {
    console.error(error);
    return;
}
