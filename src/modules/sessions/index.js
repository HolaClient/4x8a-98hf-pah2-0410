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
const removeDuplicateValuesFromArray = require('../../lib/core/removeDuplicateValuesFromArray');
const crypt = require('../../utils/secrets');
const cookies = require('../../lib/core/cookies');
let sessions = new Map();
let MAX_MEMORY_LIMIT = 512;
let DROP_COUNT = 5;
let CURRENT_MEMORY_USAGE = 0;

function manageMemoryUsage() {
    CURRENT_MEMORY_USAGE = (sessions.size * 1.5 * 1024) / (1024 * 1024);
    if (CURRENT_MEMORY_USAGE > MAX_MEMORY_LIMIT) {
        const keysToDelete = Array.from(sessions.keys()).slice(0, DROP_COUNT);
        keysToDelete.forEach(key => {
            sessions.delete(key);
            const index = sessionIDs.indexOf(key);
            if (index > -1) sessionIDs.splice(index, 1);
        });
        CURRENT_MEMORY_USAGE = (sessions.size * 1.5 * 1024) / (1024 * 1024);
    }
}

function parseCookies(req) {
    const cookieHeader = req.getHeader('cookie') || '';
    const parsedCookies = {};
    cookieHeader.split(';').forEach(cookie => {
        const [key, ...val] = cookie.split('=');
        parsedCookies[key.trim()] = decodeURIComponent(val.join('='));
    });
    return parsedCookies;
}

module.exports = async (req, res, next) => {
    manageMemoryUsage();
    const parsedCookies = parseCookies(req);
    let sessionID = parsedCookies['hcx.ss'];

    if (sessionID && sessions.has(sessionID)) {
        req.session = sessions.get(sessionID);
    } else {
        sessionID = crypt.gen(62, 64).toString('hex');
        req.session = {
            session: {
                created: Date.now(),
                identifier: sessionID,
                lastlogin: Date.now(),
            },
            permissions: {
                intents: [],
                roles: ['guest'],
            },
            destroy: function() {
                sessions.delete(sessionID);
                cookies.set(res, 'hcx.ss', '', { maxAge: 0 });
            }
        };
        sessions.set(sessionID, req.session);
        cookies.set(res, 'hcx.ss', sessionID);
    }

    if (!req.session.permissions) {
        req.session.permissions = {
            intents: [],
            roles: ['guest'],
        };
    }

    req.session.permissions.intents = removeDuplicateValuesFromArray(req.session.permissions.intents);

    const originalEnd = res.end;
    res.end = function (...args) {
        sessions.set(sessionID, req.session);
        originalEnd.apply(res, args);
    };
    
    next();
};

module.exports.get = function (sessionID) {
    return sessions.get(sessionID);
};

module.exports.getByCookies = function (cookieHeader) {
    const parsedCookies = {};
    cookieHeader.split(';').forEach(cookie => {
        const [key, ...val] = cookie.split('=');
        parsedCookies[key.trim()] = decodeURIComponent(val.join('='));
    });
    return sessions.get(parsedCookies['hcx.ss']);
};

module.exports.purge = () => {
    sessions.clear();
};