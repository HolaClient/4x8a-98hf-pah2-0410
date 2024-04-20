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
 * webhook.mjs - Webhook handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Importing modules
 *--------------------------------------------------------------------------
*/
import fetch from 'node-fetch';
import db from './database.js';
/**
 *--------------------------------------------------------------------------
 * The actual handler code.
 *--------------------------------------------------------------------------
*/
export default async (a, b) => {
    const c = await db.get('core', 'settings');
    if (!c.webhook.status) return;

    const d = !c.webhook.actions.admin[a];
    const e = d ? c.webhook.client : c.webhook.admin;

    fetch(e, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: "HolaClient",
            avatar_url: "https://cdn.holaclient.tech/logo.png",
            embeds: [
                {
                    color: parseInt('#191c24'.replace("#", ""), 16),
                    title: `\`${a}\``,
                    description: b,
                    author: {
                        name: 'HolaClient'
                    },
                    thumbnail: {
                        url: c.logo.url
                    }
                }
            ]
        })
    });
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/