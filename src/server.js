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
 * server.js - Application webserver.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const http = require('http');
/**
 *--------------------------------------------------------------------------
 * Actual code
 *--------------------------------------------------------------------------
*/
try {
	function parse(a, b, c, options) {
		b = b || '&';
		c = c || '=';
		var d = {};
		if (typeof a !== 'string' || a.length === 0) return d;
		var e = /\+/g;
		a = a.split(b);
		var f = 1000;
		if (options && typeof options.maxKeys === 'number') {
			f = options.maxKeys;
		}
		var g = options && typeof options.decodeURIComponent === 'function' ? options.decodeURIComponent : decodeURIComponent;
		for (var i = 0; i < a.length; ++i) {
			var j = a[i].replace(e, '%20'),
				h = j.indexOf(c),
				k, l, k, v;
			if (h >= 0) {
				k = j.substr(0, h);
				l = j.substr(h + 1);
			} else {
				k = j;
				l = '';
			}
			try {
				k = g(k);
				v = g(l);
			} catch (e) {
				k = querystring.unescape(k);
				v = querystring.unescape(l);
			}
			if (!hasOwnProperty.call(d, k)) {
				d[k] = v;
			} else if (Array.isArray(d[k])) {
				d[k].push(v);
			} else {
				d[k] = [d[k], v];
			}
		}
		return d;
	}
	
	function parseThis(req) {
		let a = req.url;
		if (a === undefined) return a;
		let b = req._parsedUrl;
		if (b && b._raw === a) return b;
		b = {};
		b.query = b.search = null;
		b.href = b.path = b.pathname = a;
		let c = a.indexOf('?', 1);
		if (c !== -1) {
			b.search = a.substring(c);
			b.query = b.search.substring(1);
			b.pathname = a.substring(0, c);
		}
		b._raw = a;
		return (req._parsedUrl = b);
	}
	
	function parseThat (a) {
		if (a === '/') {
			return [{ old: a, type: 0, val: a }];
		}
		let b, c, d, e = strip(a), f = -1, g = 0, h = e.length, i = [];
		while (++f < h) {
			b = e.charCodeAt(f);
			if (b === 58) {
				g = f + 1;
				d = 1;
				c = 0;
				while (f < h && e.charCodeAt(f) !== 47) {
					if (e.charCodeAt(f) === 63) {
						c = f; d = 3;
					}
					f++;
				}
				i.push({
					old: a,
					type: d,
					val: e.substring(g, c || f)
				});
				e = e.substring(f); h -= f; f = 0;
				continue;
			} else if (b === 42) {
				i.push({
					old: a,
					type: 2,
					val: e.substring(f)
				});
				continue;
			} else {
				g = f;
				while (f < h && e.charCodeAt(f) !== 47) {
					++f;
				}
				i.push({
					old: a,
					type: 0,
					val: e.substring(g, f)
				});
				e = e.substring(f); h -= f; f = g = 0;
			}
		}
		return i;
	};
	
	function value(a) {
		let b = a.indexOf('/', 1);
		return b > 1 ? a.substring(0, b) : a;
	}
	
	function mutate(a, req) {
		req.url = req.url.substring(a.length) || '/';
		req.path = req.path.substring(a.length) || '/';
	}
	
	function onError(err, req, res, next) {
		let code = (res.statusCode = err.code || err.status || 500);
		code == 404 ?  res.statusCode = 404 : res.statusCode = 500;
		code == 404 ? res.end(`${fallback.error404()}`) : res.end(`${fallback.error500(err)}`);
	}
	
	function find(a, b, c, d) {
		let e = match(b, c[a] || []);
		if (e.length === 0) {
			e = match(b, c[a = '*'] || []);
			if (!e.length) return false;
		}
		return {
			params: exec(b, e),
			handlers: d[a][e[0].old]
		};
	}
	
	function strip(a) {
		if (a === '/') return a;
		(a.charCodeAt(0) === 47) && (a = a.substring(1));
		var b = a.length - 1;
		return a.charCodeAt(b) === 47 ? a.substring(0, b) : a;
	}
	
	function split(a) {
		return (a = strip(a)) === '/' ? ['/'] : a.split('/');
	}
	
	function isMatch(a, b) {
		return (b.val === a && b.type === 0) || b.type !== 0;
	}
	
	function every(a, b) {
		for (let c = 0; c < a.length; c++) {
			if (!b(a[c], c, a)) {
				return false;
			}
		}
		return true;
	}
	
	function filter(a, b) {
		const c = [];
		for (let d = 0; d < a.length; d++) {
			if (b(a[d], d, a)) {
				c.push(a[d]);
			}
		}
		return c;
	}
	
	function match (a, b) {
		let c = split(a), d = c.length, e;
		let f = filter(b, g => {
			return (e = g.length) === d || (e < d && g[e - 1].type === 2) || (e > d && g[e - 1].type === 3);
		});
		let h = 0, i = (j, k) => isMatch(c[k], j);
		for (; h < f.length; h++) {
			if (every(f[h], i)) {
				return f[h];
			}
		}
		return [];
	};
	
	function exec (a, b) {
		let c = 0, d, e, f = split(a), g = {};
		for (; c < b.length; c++) {
			d = f[c]; e = b[c];
			if (d !== void 0 && e.type | 2 === 3) {
				g[e.val] = d;
			}
		}
		return g;
	};

	function lead(a) {
		return a.charCodeAt(0) === 47 ? a : ('/' + a);
	}
	
	function server(opts = {}) {
		const routes = {};
		const handlers = {};
		const apps = {};
		const wares = [];
		const bwares = [];
		const server = opts.server || http.createServer();
		const onErrorFn = opts.onError || onError;
		const onNoMatchFn = opts.onNoMatch || onError.bind(null, { code: 404 });
	
		function add(method, pattern, ...fns) {
			const base = lead(value(pattern));
			if (apps[base]) return console.log("Handler is already in use!");
			routes[method] = routes[method] || [];
			routes[method].push(parseThat(pattern));
			handlers[method] = handlers[method] || {};
			handlers[method][pattern] = fns;
		}
	
		function use(base, ...fns) {
			if (typeof base === 'function') {
				wares.push(base, ...fns);
			} else {
				base = base === '/' ? base : lead(base);
				fns.forEach(fn => {
					if (fn.createServer) {
						apps[base] = fn;
					} else {
						const arr = bwares[base] || [];
						if (!arr.length) arr.push((req, _, next) => (mutate(base, req), next()));
						bwares[base] = arr.concat(fn);
					}
				});
			}
		}
	
		async function handler(req, res) {
			const info = parseThis(req);
			req = req
			req.originalUrl = req.originalUrl || req.url;
			req.path = info.pathname;
			req.search = info.search;
			req.query = parse(info.query);
			req.hostname = req.headers.host.split(':')[0];
			req.ip = req.socket.remoteAddress;
			req.domain = req.hostname
			res.setHeader('X-Powered-By', 'HolaClient-X1');
			let fns = [...wares];
			const obj = find(req.method, req.path, routes, handlers);
			if (obj) {
				fns = fns.concat(bwares[value(req.path)] || [], obj.handlers);
				req.params = obj.params;
			} else if (apps[value(req.path)]) {
				mutate(value(req.path), req);
				fns.push(apps[value(req.path)].handler.bind(null, req, res, info));
			} else {
				fns.push(onNoMatchFn);
			}
			let i = 0;
			const next = async (err) => {
				if (err) return onErrorFn(err, req, res, next);
				if (i < fns.length && !res.finished) await fns[i++](req, res, next);
			};
			await next();
		}
	
		function listen() {
			server.on('request', handler);
			server.listen.apply(server, arguments);
		}
	
		return {
			add,
			use,
			listen,
			get: add.bind(null, 'GET'),
			post: add.bind(null, 'POST'),
			put: add.bind(null, 'PUT'),
			delete: add.bind(null, 'DELETE'),
			patch: add.bind(null, 'PATCH'),
			options: add.bind(null, 'OPTIONS'),
			head: add.bind(null, 'HEAD'),
			connect: add.bind(null, 'CONNECT'),
			trace: add.bind(null, 'TRACE'),
			all: add.bind(null, '*')
		};
	}
	
	module.exports = server;
} catch (error) {
	console.error(error)
	return
}