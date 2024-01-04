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
 * alerts.js - Alert system handler
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../utils/modules.js')
const fs = require('fs')
/**
 *--------------------------------------------------------------------------
 * Exporting alerts
 *--------------------------------------------------------------------------
*/
module.exports = function (language) {
    let alertsData;

    const locale = `../../resources/locales/${language}/alerts.json`;
    const dlocale = `../../resources/locales/en/alerts.json`;

    if (fs.existsSync(locale)) {
        alertsData = require(locale);
    } else {
        alertsData = require(dlocale);
    }

    return {
        a: function (key) {
            return alertsData[key] || `Alert key "${key}" not found in the selected language.`;
        }
    };
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/