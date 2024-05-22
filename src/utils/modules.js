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
global.ejs = require("ejs");
global.cors = require("cors");
global.crypto = require('crypto');
global.path = require('path');
global.geoip = require('geoip-lite');
global.fs = require("fs");
global.fse = require('fs-extra');
global.fetch = require('node-fetch');
global.chalk = require("chalk");
global.WebSocket = require('ws');
global.app = require('../server.js')();
global.express = require("express")
global.ptero = require("../utils/pterodactyl.js")
global.queue = require('./queue.js')
const { renderFile } = require('ejs')
const theme = require('./theme.js');
global.db = require('../handlers/database.js')
global.cacheDB = require('../handlers/cache.js')
const alerts = require('./alerts.js')
global.notify = alerts.notify
const page = theme
global.os = require('os')
global.crypt = require('./crypt.js')
global.fallback = require('../../resources/views/fallback/errors.js')
global.alert = alerts
global.core = require('../middleware/core.js');
global.wh = import('../handlers/webhook.mjs');
global.dl = import('../handlers/debug.mjs');
/**
*--------------------------------------------------------------------------
* Exporting loaded modules
*--------------------------------------------------------------------------
*/
module.exports = {
   renderFile, theme, page
};
/**
 *--------------------------------------------------------------------------
 * End of the file
 *--------------------------------------------------------------------------
*/
