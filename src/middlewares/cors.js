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
(function () {
    'use strict';
  
    // Object.assign Polyfill
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  
    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }
      return Object(val);
    }
  
    function shouldUseNative() {
      try {
        if (!Object.assign) return false;
  
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') return false;
  
        var test2 = {};
        for (var i = 0; i < 10; i++) test2['_' + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });
        if (order2.join('') !== '0123456789') return false;
  
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') return false;
  
        return true;
      } catch (err) {
        return false;
      }
    }
  
    var assign = shouldUseNative() ? Object.assign : function (target, ...sources) {
      var to = toObject(target);
  
      sources.forEach(from => {
        if (from !== null && from !== undefined) {
          Object.keys(Object(from)).forEach(key => {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          });
  
          if (getOwnPropertySymbols) {
            getOwnPropertySymbols(from).forEach(sym => {
              if (propIsEnumerable.call(from, sym)) {
                to[sym] = from[sym];
              }
            });
          }
        }
      });
  
      return to;
    };
  
    // Vary Header Helper
    var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  
    function append(header, field) {
      if (typeof header !== 'string') {
        throw new TypeError('header argument is required');
      }
  
      if (!field) {
        throw new TypeError('field argument is required');
      }
  
      var fields = !Array.isArray(field) ? parse(String(field)) : field;
  
      for (var j = 0; j < fields.length; j++) {
        if (!FIELD_NAME_REGEXP.test(fields[j])) {
          throw new TypeError('field argument contains an invalid header name');
        }
      }
  
      if (header === '*') {
        return header;
      }
  
      var val = header;
      var vals = parse(header.toLowerCase());
  
      if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
        return '*';
      }
  
      for (var i = 0; i < fields.length; i++) {
        var fld = fields[i].toLowerCase();
  
        if (vals.indexOf(fld) === -1) {
          vals.push(fld);
          val = val ? val + ', ' + fields[i] : fields[i];
        }
      }
  
      return val;
    }
  
    function parse(header) {
      var end = 0;
      var list = [];
      var start = 0;
  
      for (var i = 0, len = header.length; i < len; i++) {
        switch (header.charCodeAt(i)) {
          case 0x20:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 0x2c:
            list.push(header.substring(start, end));
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
  
      list.push(header.substring(start, end));
  
      return list;
    }
  
    function vary(res, field) {
      if (!res || !res.getHeader || !res.setHeader) {
        throw new TypeError('res argument is required');
      }
  
      var val = res.getHeader('Vary') || '';
      var header = Array.isArray(val) ? val.join(', ') : String(val);
  
      if ((val = append(header, field))) {
        res.setHeader('Vary', val);
      }
    }
  
    // CORS Middleware
    var defaults = {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204
    };
  
    function isString(s) {
      return typeof s === 'string' || s instanceof String;
    }
  
    function isOriginAllowed(origin, allowedOrigin) {
      if (Array.isArray(allowedOrigin)) {
        for (var i = 0; i < allowedOrigin.length; ++i) {
          if (isOriginAllowed(origin, allowedOrigin[i])) {
            return true;
          }
        }
        return false;
      } else if (isString(allowedOrigin)) {
        return origin === allowedOrigin;
      } else if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      } else {
        return !!allowedOrigin;
      }
    }
  
    function configureOrigin(options, req) {
      var requestOrigin = req.headers.origin;
      var headers = [];
      var isAllowed;
  
      if (!options.origin || options.origin === '*') {
        headers.push({
          key: 'Access-Control-Allow-Origin',
          value: '*'
        });
      } else if (isString(options.origin)) {
        headers.push({
          key: 'Access-Control-Allow-Origin',
          value: options.origin
        });
        headers.push({
          key: 'Vary',
          value: 'Origin'
        });
      } else {
        isAllowed = isOriginAllowed(requestOrigin, options.origin);
        headers.push({
          key: 'Access-Control-Allow-Origin',
          value: isAllowed ? requestOrigin : false
        });
        headers.push({
          key: 'Vary',
          value: 'Origin'
        });
      }
  
      return headers;
    }
  
    function configureMethods(options) {
      var methods = options.methods;
      if (methods.join) {
        methods = options.methods.join(',');
      }
      return {
        key: 'Access-Control-Allow-Methods',
        value: methods
      };
    }
  
    function configureCredentials(options) {
      if (options.credentials === true) {
        return {
          key: 'Access-Control-Allow-Credentials',
          value: 'true'
        };
      }
      return null;
    }
  
    function configureAllowedHeaders(options, req) {
      var allowedHeaders = options.allowedHeaders || options.headers;
      var headers = [];
  
      if (!allowedHeaders) {
        allowedHeaders = req.headers['access-control-request-headers'];
        headers.push({
          key: 'Vary',
          value: 'Access-Control-Request-Headers'
        });
      } else if (allowedHeaders.join) {
        allowedHeaders = allowedHeaders.join(',');
      }
      if (allowedHeaders && allowedHeaders.length) {
        headers.push({
          key: 'Access-Control-Allow-Headers',
          value: allowedHeaders
        });
      }
  
      return headers;
    }
  
    function configureExposedHeaders(options) {
      var headers = options.exposedHeaders;
      if (!headers) {
        return null;
      } else if (headers.join) {
        headers = headers.join(',');
      }
      if (headers && headers.length) {
        return {
          key: 'Access-Control-Expose-Headers',
          value: headers
        };
      }
      return null;
    }
  
    function configureMaxAge(options) {
      var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString();
      if (maxAge && maxAge.length) {
        return {
          key: 'Access-Control-Max-Age',
          value: maxAge
        };
      }
      return null;
    }
  
    function applyHeaders(headers, res) {
      for (var i = 0, n = headers.length; i < n; i++) {
        var header = headers[i];
        if (header) {
          if (Array.isArray(header)) {
            applyHeaders(header, res);
          } else if (header.key === 'Vary' && header.value) {
            vary(res, header.value);
          } else if (header.value) {
            res.setHeader(header.key, header.value);
          }
        }
      }
    }
  
    function cors(options, req, res, next) {
      var headers = [];
      var method = req.method && req.method.toUpperCase && req.method.toUpperCase();
  
      if (method === 'OPTIONS') {
        headers.push(configureOrigin(options, req));
        headers.push(configureCredentials(options, req));
        headers.push(configureMethods(options, req));
        headers.push(configureAllowedHeaders(options, req));
        headers.push(configureMaxAge(options, req));
        headers.push(configureExposedHeaders(options, req));
        applyHeaders(headers, res);
  
        if (options.preflightContinue) {
          next();
        } else {
          res.statusCode = options.optionsSuccessStatus;
          res.setHeader('Content-Length', '0');
          res.end();
        }
      } else {
        headers.push(configureOrigin(options, req));
        headers.push(configureCredentials(options, req));
        headers.push(configureExposedHeaders(options, req));
        applyHeaders(headers, res);
        next();
      }
    }
  
    function middlewareWrapper(o) {
      var optionsCallback = typeof o === 'function' ? o : function (req, cb) {
        cb(null, o);
      };
  
      return function corsMiddleware(req, res, next) {
        optionsCallback(req, function (err, options) {
          if (err) {
            next(err);
          } else {
            var corsOptions = assign({}, defaults, options);
            var originCallback = null;
            if (corsOptions.origin && typeof corsOptions.origin === 'function') {
              originCallback = corsOptions.origin;
            } else if (corsOptions.origin) {
              originCallback = function (origin, cb) {
                cb(null, corsOptions.origin);
              };
            }
  
            if (originCallback) {
              originCallback(req.headers.origin, function (err2, origin) {
                if (err2 || !origin) {
                  next(err2);
                } else {
                  corsOptions.origin = origin;
                  cors(corsOptions, req, res, next);
                }
              });
            } else {
              next();
            }
          }
        });
      };
    }
  
    module.exports = middlewareWrapper;
  
  }());
  