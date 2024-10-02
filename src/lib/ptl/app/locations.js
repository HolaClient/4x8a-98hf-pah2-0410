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
async function locations() {
    let pterodactyl = conf.config
    if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
        try {
            let a = 1;
            let b = 1;
            let c;
            while (a <= b) {
                let d = await fetch(`${pterodactyl.domain}/api/application/locations?include=servers&per_page=100&page=${a}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${pterodactyl.app}`,
                    },
                });
                let e = await d.json();
                c = e.data || []
                b = e.meta.pagination.total_pages;
                a++;
            }
            await db.set("pterodactyl-locations", c);
            return c
        } catch (error) {
            return { success: false, error: error }
        }
    }
}

async function modifySettings(b, c) {
    let pterodactyl = conf.config
    if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
        try {
            let a = await fetch(`${pterodactyl.domain}/api/application/locations/${b}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                },
                body: JSON.stringify(c)
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

async function deleteLocation(b) {
    let pterodactyl = conf.config
    if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
        try {
            let a = await fetch(`${pterodactyl.domain}/api/application/locations/${b}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                }
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

async function createLocation(b) {
    if (!b.short) return { success: false, error: "Field 'short' is required!" }
    let pterodactyl = conf.config
    if (pterodactyl && pterodactyl.domain && pterodactyl.app) {
        try {
            let a = await fetch(`${pterodactyl.domain}/api/application/locations`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${pterodactyl.app}`,
                },
                body: JSON.stringify({
                    short: b.short,
                    long: b.long
                })
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
    locations, modifySettings, deleteLocation, createLocation
}