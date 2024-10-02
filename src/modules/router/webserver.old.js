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
    const requests = require('../../handlers/requests')

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
    
        function handle(res, req) {
            const a = req.getMethod().toUpperCase();
            const url = req.getUrl();
            let headers = {};
            let body = '';
            let contentType = req.getHeader('content-type') || '';
    
            req.forEach((key, value) => {
                headers[key] = value;
            });
    
            req.method = a;
            req.url = url;
            req.query = Object.fromEntries(new URLSearchParams(req.getQuery()));
            req.params = {};
            req.headers = headers;
            req.ip = req.getHeader('x-forwarded-for') || req.getHeader('remote-address') || req.getHeader('remote_addr') || req.getHeader("remoteAddress");
    
            let b = 0;
            let resStatus = false;
    
            res.cork(() => {
                res.writeHeader('X-Powered-By', 'HolaClient-X1');
            });
    
            res.setHeader = (name, value) => {
                if (!resStatus) {
                    res.cork(() => {
                        res.writeHeader(name, value);
                    });
                }
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
                        resStatus = true;
                        res.writeStatus('301 Moved Permanently');
                        res.writeHeader('Location', url);
                        res.writeHeader("Content-Type", "text/html");
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
    
            res.onAborted(() => {
                resStatus = true;
            });
    
            res.onData((chunk, isLast) => {
                body += Buffer.from(chunk).toString();
                if (isLast) {
                    if (contentType.includes('application/json')) {
                        try {
                            req.body = JSON.parse(body);
                        } catch (e) {
                            req.body = null;
                        }
                    } else if (contentType.includes('application/x-www-form-urlencoded')) {
                        req.body = Object.fromEntries(new URLSearchParams(body));
                    } else {
                        req.body = body;
                    }
    
                    try {
                        next();
                    } catch (error) {
                        console.error(error);
                        if (!resStatus) {
                            res.end('Internal Server Error');
                        }
                    }
                }
            });
    
            async function next(err) {
                if (resStatus) return;
    
                if (err) {
                    res.end(err.message || 'Internal Server Error');
                    return;
                }
    
                if (b < wares.length) {
                    const { path, ware } = wares[b++];
                    if (path === '*' || path === url) {
                        try {
                            ware(req, res, next);
                        } catch (err) {
                            next(err);
                        }
                    } else {
                        next();
                    }
                } else {
                    for (let route of routes[req.method]) {
                        const match = url.match(route.pattern);
                        if (match) {
                            route.keys.forEach((key, index) => {
                                req.params[key] = match[index + 1];
                            });
                            try {
                                route.handler(req, res, next);
                            } catch (err) {
                                next(err);
                            }
                            return;
                        }
                    }
                    res.end('Not Found');
                }
            }
        }
    
        app.any('/*', (res, req) => {
            handle(res, req);
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
            routes,
        };
    };
    
} catch (error) {
    console.error(error)
    return
}