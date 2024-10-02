<<<<<<< HEAD
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
 * database.js - Application database handler file.
 *--------------------------------------------------------------------------
*/
process.loadEnvFile('.env')
/**
 *--------------------------------------------------------------------------
 * Actual code
 *--------------------------------------------------------------------------
*/
async function database() {
  function scanDir(a) {
    let b = {};
    const c = fs.readdirSync(a);
    for (let d in c) {
      let e = c[d];
      let f = path.join(a, e);
      var g = fs.statSync(f);
      if (g && g.isFile()) {
        const h = e.replace(/\.(js|mjs)$/, '');
        b[h] = { path: f, file: e, name: h };
      } else if (g.isDirectory()) {
        b = b.concat(scanDir(f));
      }
    }
    return b;
  }
  const i = scanDir("app/database/adapters") || {};
  if (process.env.DB_CONNECTION && i[process.env.DB_CONNECTION] && i[process.env.DB_CONNECTION].path.endsWith('.mjs')) {
    const j = await import("../../" + i[process.env.DB_CONNECTION].path);
    module.exports = j;
  } else {
    const k = require("../../" + i[process.env.DB_CONNECTION].path);
    module.exports = k;
  }
}
database();
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
=======
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
 * database.js - Application database handler file.
 *--------------------------------------------------------------------------
*/
process.loadEnvFile('.env');
const fs = require('fs');
const path = require('path');
/**
 *--------------------------------------------------------------------------
 * Actual code
 *--------------------------------------------------------------------------
*/
async function database() {
  function scanDir(a) {
    let b = {};
    let c = fs.readdirSync(a);
    for (let d in c) {
      let e = c[d];
      let f = path.join(a, e);
      var g = fs.statSync(f);
      if (g && g.isFile()) {
        let h = e.replace(/\.(js|mjs)$/, '');
        let i = require(`../../${f}`).info()
        i["file"] = e; i["path"] = f
        b[i.name] = i;
      } else if (g.isDirectory()) {
        b = b.concat(scanDir(f));
      }
    }
    return b;
  }
  let i = scanDir("app/plugins") || {};
  if (process.env.DB_CONNECTION && i[process.env.DB_CONNECTION] && i[process.env.DB_CONNECTION].path.endsWith('.mjs')) {
    const j = await import("../../" + i[process.env.DB_CONNECTION].path);
    if (j.info().functions.includes("load")) {
      j.load()
    }
    module.exports = j;
  } else {
    const k = require("../../" + i[process.env.DB_CONNECTION].path);
    if (k.info().functions.includes("load")) {
      k.load()
    }
    module.exports = k;
  }
}
database();
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
>>>>>>> 24dbde8 (merge X1 files)
*/