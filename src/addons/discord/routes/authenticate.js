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
 * discord.js - Discord Oauth2 handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const users = require('../../../utils/users')
const joinGuilds = require('../utils/joinServers')
/**
 *--------------------------------------------------------------------------
 * Exporting remote functions
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const config = await db.get("discord", "settings");

    app.get("/auth/discord", (req, res) => { core.redirect(res, `https://discord.com/api/oauth2/authorize?client_id=${config.client.id}&redirect_uri=${encodeURIComponent(process.env.APP_URL + '/auth/discord/login')}&response_type=code&scope=identify%20email%20guilds.join%20guilds&prompt=none`) });

    app.get("/auth/discord/login", async (req, res) => {
        if (!req.query.code) core.redirect(res, '/auth/discord');
        let a = await fetch('https://discord.com/api/v10/oauth2/token', {
            method: "POST",
            body: `client_id=${config.client.id}&client_secret=${config.client.secret}&grant_type=authorization_code&code=${encodeURIComponent(req.query.code)}&redirect_uri=${encodeURIComponent(process.env.APP_URL + '/auth/discord/login')}`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        if (a.ok == true) {
            let b = JSON.parse(await a.text());
            let c = ['identify', 'guilds', 'guilds.join', 'email']
            let d = b.scope.split(' ')
            if ((c.filter(i => !d.includes(i))).length !== 0) core.redirect(res, '/auth/discord');
            let e = await fetch('https://discord.com/api/v10/users/@me', {method: "GET",headers: { "Authorization": `Bearer ${b.access_token}` }});
            let f = JSON.parse(await e.text());
            let g = await fetch('https://discord.com/api/v10/users/@me/guilds', {method: "GET",headers: { "Authorization": `Bearer ${b.access_token}` }});
            let h = await g.json();
            if (config.pull.enabled == "true") joinGuilds(f.id, b.access_token);
            let j = await db.get("discord", "codes") || {};
            let k = await db.get("discord", "guilds") || {};
            let l = await db.get("discord", "users") || [];
            let m = l.findIndex(i => i.id == f.id)
            for ([i, j] of Object.entries(h)) {j.features = []};
            b["access_token"] = crypt.encrypt(b.access_token);
            b["refresh_token"] = crypt.encrypt(b.refresh_token);
            j[f.email] = b;
            k[f.email] = h;
            if (m == -1) {l.push(f)} else {l[m] = f};
            await db.set("discord", "codes", j);
            await db.set("discord", "guilds", k);
            await db.set("discord", "users", l);
            await users.authenticate(req, res, f);
            core.redirect(res, '/dashboard');
        } else {
            core.redirect(res, '/auth/discord');
        }
    });
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/