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
 * functions.js - Pterodactyl service remove functions handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../../utils/modules");
const page = modules.page;
const core = modules.core
const path = modules.path;
const multer = require('multer')
const settings = modules.settings;
const fetch = modules.fetch;
const wh = modules.wh;
const crypt = modules.crypt;
const db = modules.db;

async function create(req, res, username, email, first, second, password, userinfo) {
  const pterodactyl = await db.get('pterodactyl', 'settings')
  let acc = await fetch(`${pterodactyl.domain}/api/application/users`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${pterodactyl.app}` },
      body: JSON.stringify({
        username: username,
        email: email,
        first_name: first,
        last_name: second,
        password: password
      })
    }
  );
  let accinfo;
  if (await acc.status == 201) {
    accinfo = JSON.parse(await acc.text());
    req.session.pterodactyl = accinfo.attributes;
    let pusers = await db.get('pterodactyl', 'users') ?? []
    pusers.push({ id: accinfo.attributes.id, hcid: userinfo.hcid, attributes: accinfo.attributes })
    await db.set('pterodactyl', userinfo.hcid, accinfo.attributes);
    await db.set('pterodactyl', 'users', pusers)
  } else {
    let acc = await fetch(
      pterodactyl.domain + "/api/application/users?include=servers&filter[email]=" + encodeURIComponent(userinfo.email),
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${pterodactyl.app}`
        }
      }
    );
    
    let accinfo = await acc.json();
    let user = accinfo.data.find(u => u.attributes.email === userinfo.email);
    
    if (user) {
      req.session.pterodactyl = user;
      let pusers = await db.get('pterodactyl', 'users') ?? [];
      //UI !== User Interface
      let UI = pusers.findIndex(u => u.id === user.attributes.id);
      if (UI == -1) {
        pusers.push({ id: user.attributes.id, hcid: userinfo.hcid, attributes: user.attributes });
        await db.set('pterodactyl', 'users', pusers);
        await db.set('pterodactyl', userinfo.hcid, user.attributes);
      } else {
        pusers[UI] = { id: user.attributes.id, hcid: userinfo.hcid, attributes: user.attributes };
        await db.set('pterodactyl', 'users', pusers);
        await db.set('pterodactyl', userinfo.hcid, user.attributes);
      }
    }    
  }

  return true; 1
}
async function password(password, user) {
  console.log(0, password)
  const pterodactyl = await db.get('pterodactyl', 'settings')
  let pinfo = await db.get('pterodactyl', user)
  let userinfo = await db.get('users', user)
  let acc = await fetch(`${pterodactyl.domain}/api/application/users/${pinfo.id}`,
    {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${pterodactyl.app}` },
      body: JSON.stringify({
        username: userinfo.username,
        email: userinfo.email,
        first_name: userinfo.name.first,
        last_name: userinfo.name.last,
        password: password
      })
    }
  );
  return
}
module.exports = {
//refresh: refresh
  create: create,
  password: password
}