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
 * modules.js - Common modules exporter
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
global.cors = require("cors");
global.crypto = require('crypto');
global.path = require('path');
global.fs = require('fs-extra');
global.chalk = require("chalk");
global.WebSocket = require('ws');
global.hcx = require('holaclient-corex');
global.app = hcx.core.app();
global.geoip = require('geoip-lite');
global.queue = require('./queue.js');
global.pages = require('./pages.js');
global.db = require('../handlers/database.js');
global.cacheDB = require('../handlers/cache.js');
global.os = require('os');
global.crypt = require('./crypt.js');
global.fallback = require('../../resources/views/fallback/errors.js');
global.alert = require('./alerts.js');
global.core = require('../utils/core.js');
global.wh = import('../handlers/webhook.mjs');
global.dl = import('../handlers/debug.mjs');
global.ptero = hcx.pterodactyl
/**
 *--------------------------------------------------------------------------
 * End of the file
 *--------------------------------------------------------------------------
*/
