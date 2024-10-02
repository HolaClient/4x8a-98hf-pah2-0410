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
async function eggs() {
    try {
        let pterodactyl = conf.config
        if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
            try {
                let a = 1;
                let b = 1;
                let c = [];
                while (a <= b) {
                    let d = await fetch(`${pterodactyl.domain}/api/application/nests?include=eggs&per_page=100&page=${a}`, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${pterodactyl.app}`,
                        },
                    });
                    let e = await d.json();
                    for (let i of e.data) {
                        let f = await fetch(`${pterodactyl.domain}/api/application/nests/${i.attributes.id}/eggs?include=config,script,variables`, {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                Authorization: `Bearer ${pterodactyl.app}`,
                            },
                        });
                        let g = await f.json()
                        i.attributes.relationships.eggs = g
                        c.push(i)
                    }
                    b = e.meta.pagination.total_pages;
                    a++;
                }
                await db.set("pterodactyl-eggs", c);
                return c
            } catch (error) {
                return { success: false, error: error}
            }
        } else {
            return { success: false, error: 0}
        }
    } catch (error) {
        console.error(error)
        return { success: false, error: error}
    }
};

module.exports = {
    eggs
}