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
 * modules.js - Common modules exporter
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const ejs = require("ejs");
const crypto = require('crypto');
const path = require('path');
const geoip = require('geoip-lite');
const fs = require("fs");
const fetch = require('node-fetch');
const chalk = require("chalk");
const { renderFile } = require('ejs')
const express = require("express");
const app = express();
const validator = require("email-validator");

const services = require('../services/services.json')
const theme = require('../middleware/theme');
const db = require('../../drivers/db.js')
const settings = require('../../drivers/st.js').settings()
const arciotext = require('../utils/webserver')
const wh = require('../../drivers/wh')
const alerts = require('../middleware/alerts.js')
const keys = require('../../app/keys/keys.json')
const page = require('../middleware/theme.js')
const core = require('../middleware/core.js')
const crypt = require('../middleware/crypt.js')
global.dl = require('../../drivers/dl')

/**
*--------------------------------------------------------------------------
* Exporting loaded modules
*--------------------------------------------------------------------------
*/
module.exports = {
    settings, ejs, path, geoip, fs, chalk, db, core, crypt, renderFile, express, app, theme, fetch, arciotext, keys, page, crypto, wh, validator, services, alerts
};
/**
 *--------------------------------------------------------------------------
 * End of the file
 *--------------------------------------------------------------------------
*/
