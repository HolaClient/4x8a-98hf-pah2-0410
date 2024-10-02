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
const conf = require('../../index')
 async function nodes() {
     let pterodactyl = conf.config
     if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
         try {
             let a = 1;
             let b = 1;
             let c = [];
             while (a <= b) {
                 let d = await fetch(`${pterodactyl.domain}/api/application/nodes?include=allocations,location,servers&per_page=100&page=${a}`, {
                     method: "GET",
                     headers: {
                         Accept: "application/json",
                         Authorization: `Bearer ${pterodactyl.app}`,
                     },
                 });
                 let e = await d.json();
                 let k = {}
                 for (let i of e.data) {
                     k = i
                     let f = await fetch(`${pterodactyl.domain}/api/application/nodes/${i.attributes.id}/configuration`, {
                         method: "GET",
                         headers: {
                             Accept: "application/json",
                             Authorization: `Bearer ${pterodactyl.app}`,
                         },
                     });
                     let g = await f.json()
                     let j;
                     try {
                        let response = await fetch(`${i.attributes.scheme}://${i.attributes.fqdn}:${i.attributes.daemon_listen}/api/system?v=2`, {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                Authorization: `Bearer ${g.token}`,
                            },
                        });
                        
                        if (response.ok) {
                            let data = await response.json();
                            j = data;
                        } else {
                            console.error('Failed to fetch data, HTTP status:', response.status);
                        }
                    } catch (error) {
                        if (error.cause && error.cause.code !== 'ECONNREFUSED') {
                            console.error('Error fetching data:', error);
                        }
                    }
                     k.attributes["system"] = j || {}
                     k.attributes["configuration"] = g
                     c.push(k);
                 }
                 b = e.meta.pagination.total_pages;
                 a++;
             }
             await db.set("pterodactyl-nodes", c);
             return c
         } catch (error) {
             return { success: false, error: error }
         }
     }
 }
 
 async function changeLocation(b, c) {
     let pterodactyl = conf.config
     if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
         try {
             let e = db.get("pterodactyl-nodes")
             let f = e.find(i => i.attributes.id == parseInt(b))
             let g = f.attributes
             delete g["relationships"]
             delete g["system"]
             delete g["configuration"]
             g["location_id"] = c
             let a = await fetch(`${pterodactyl.domain}/api/application/nodes/${b}`, {
                 method: "PATCH",
                 headers: {
                     Accept: "application/json",
                     Authorization: `Bearer ${pterodactyl.app}`,
                 },
                 body: JSON.stringify(g)
             });
             if (a.ok) {
                 nodes()
                 return { success: true }
             } else {
                 return { success: false, error: await a.json() };
             }
         } catch (error) {
             return { success: false, error: error }
         }
     }
 }
 
 module.exports = {
     nodes, changeLocation
 }