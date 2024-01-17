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
 * discord.js - Discord Oauth2 manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules")
const crypto = modules.crypto;
const keys = modules.keys;
const wh = modules.wh
const page = modules.page;
const fetch = modules.fetch;
const crypt = modules.crypt;
module.exports.load = async function (app, db) {
    const settings = await modules.settings;
    const newsettings = settings

    let a = await db.get('core', 'authenticators') ?? [];
    let b = a.find(c => c.driver === 'discord');
    if (!b) {
        a.push({ driver: "discord", name: "Discord" });
        await db.set('core', 'authenticators', a);
    }

    /**
    *--------------------------------------------------------------------------
    * Getting login request and sending the user to Discord Oauth2
    *--------------------------------------------------------------------------
    */
    app.get("/api/auth/discord", async (req, res) => {
        if (req.query.redirect) req.session.redirect = "/" + req.query.redirect;
        res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${settings.authentication.discord.id}&redirect_uri=${encodeURIComponent(process.env.APP_URL + "/" + settings.authentication.discord.callbackpath)}&response_type=code&scope=identify%20email${newsettings.features.bot.joinguild.enabled == true ? "%20guilds.join" : ""}${newsettings.earn.j4r.enabled == true ? "%20guilds" : ""}${settings.authentication.discord.prompt == false ? "&prompt=none" : (req.query.prompt ? (req.query.prompt == "none" ? "&prompt=none" : "") : "")}`);
    });
    /**
    *--------------------------------------------------------------------------
    * Login process...
    *--------------------------------------------------------------------------
    */
    app.get(`/api/auth/discord/callback`, async (req, res) => {
        let customredirect = req.session.redirect;
        delete req.session.redirect;
        if (!req.query.code) return res.redirect('/auth/discord')
        let code = req.query.code

        let json = await fetch(
            'https://discord.com/api/oauth2/token',
            {
                method: "post",
                body: "client_id=" + settings.authentication.discord.id + "&client_secret=" + settings.authentication.discord.secret + "&grant_type=authorization_code&code=" + encodeURIComponent(code) + "&redirect_uri=" + encodeURIComponent(settings.authentication.discord.link + settings.authentication.discord.callbackpath),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        );
        if (json.ok == true) {
            let codeinfo = JSON.parse(await json.text());
            let scopes = codeinfo.scope;
            let missingscopes = [];

            if (scopes.replace(/identify/g, "") == scopes) missingscopes.push("identify");
            if (scopes.replace(/email/g, "") == scopes) missingscopes.push("email");
            if (newsettings.features.bot.joinguild.enabled == true) if (scopes.replace(/guilds.join/g, "") == scopes) missingscopes.push("guilds.join");
            if (newsettings.earn.j4r.enabled) if (scopes.replace(/guilds/g, "") == scopes) missingscopes.push("guilds");
            if (missingscopes.length !== 0) return res.send("Missing scopes: " + missingscopes.join(", "));
            let userjson = await fetch(
                'https://discord.com/api/users/@me',
                {
                    method: "get",
                    headers: {
                        "Authorization": `Bearer ${codeinfo.access_token}`
                    }
                }
            );
            let user = JSON.parse(await userjson.text());

            let u = await db.get('users', user.email)
            let userinfo;
            if (u) {
                userinfo = await db.get('users', u)
            } else {
                const lastuser = await db.get("core", 'lastuser')
                let hcid = lastuser + 1
                userinfo = {
                    id: user.id,
                    hcid: hcid,
                    name: user.global_name,
                    username: user.username,
                    avatar: user.avatar,
                    profile: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`,
                    email: user.email,
                    discriminator: user.discriminator,
                    verified: user.verified,
                    public_flags: user.public_flags,
                    flags: user.flags,
                    banner: user.banner,
                    accent_color: user.accent_color,
                    avatar_decoration_data: user.avatar_decoration_data,
                    banner_color: user.banner_color,
                    mfa_enabled: user.mfa_enabled,
                    locale: user.locale,
                    premium_type: user.premium_type,
                    authtype: "discord"
                }
            }

            if (process.env.APP_MAINTENANCE == true) {
                if (!settings.features.maintenance.admins.includes(userinfo.email || userinfo.id || userinfo.hcid || userinfo.username))
                    return page.error("maintenance", req, res);
            }
            let guildsjson = await fetch(
                'https://discord.com/api/users/@me/guilds',
                {
                    method: "get",
                    headers: {
                        "Authorization": `Bearer ${codeinfo.access_token}`
                    }
                }
            );
            let guildsinfo = await guildsjson.json();

            const ipv6 = req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'] || req.headers['x-client-ip'] || req.headers['x-forwarded'] || req.socket.remoteAddress;
            const ipv4 = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.headers['x-client-ip'] || req.headers['x-forwarded'] || req.socket.remoteAddress;
            const ip = {
                "v6": ipv6,
                "v4": ipv4
            };

            if (newsettings.features.blacklist.users.includes(userinfo.id || userinfo.email || userinfo.hcid || userinfo.username)) return res.send("You're blacklisted, You can't visit this site!")
            if (newsettings.authentication.discord.alt.ip == true) {
                let allips = await db.get("ips", "ips") || [];
                let mainip = await db.get('ips', userinfo.hcid);

                let ipAlreadyAdded = false;

                if (mainip) {
                    if (mainip !== ip.v6) {
                        allips = allips.filter(ip2 => ip2 !== mainip.v6);
                        ipAlreadyAdded = allips.includes(ip.v6);
                    }
                } else {
                    ipAlreadyAdded = allips.includes(ip);
                }

                if (ipAlreadyAdded) {
                    page.error("alternate", req, res);
                } else {
                    allips.push(ip);
                    await db.set("ips", "ips", allips);
                    await db.set("ips", userinfo.hcid, ip);
                }
            }

            if (newsettings.authentication.discord.ip.block.includes(ip)) return res.send("Your IP is blacklisted, You can't visit this site!")

            if (newsettings.authentication.discord.alt.cookies == true) {
                let accountid = getCookie(req, "accountid");

                if (accountid) {
                    if (accountid !== user.email) {
                        return page.error("alternate", req, res);
                    }
                }

                res.cookie('accountid', user.email);
            }

            if (newsettings.earn.j4r.enabled) {
                if (guildsinfo.message == '401: Unauthorized') return res.send(`
                    <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="https://media.discordapp.net/attachments/1135147336771850250/1140896240972861480/holaclient_5.png" type="image/x-icon">
<link rel="icon" type="image/png" href="https://media.discordapp.net/attachments/1135147336771850250/1140896240972861480/holaclient_5.png">
<title>401 | HolaClient</title>
<style>
    body {
        font-family: 'Open Sans', sans-serif;
    }
</style>
</head>
<body class="bg-zinc-900 bg-cover bg-center backdrop-blur" style="background-image: url('https://r4.wallpaperflare.com/wallpaper/470/932/861/vector-planet-space-meteors-wallpaper-30f0e436d84a4692eefa19ed4e928199.jpg');">
<div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
    <div class="flex flex-col items-center mx-auto text-center">
        <h1 class="mt-3 font-semibold text-white text-7xl">403<br><span class="text-2xl">Insufficient permission to access your servers list.</span></h1>
        <a href="/auth/discord" class="mt-3 font-semibold px-2 py-1 bg-emerald-400 text-white text-xl">Login again</a>
    </div>
</div>
</body>`)
                let userj4r = await db.get('j4rs', `${userinfo.hcid}`) ?? []
                await guildsinfo

                let coins = await db.get('coins', userinfo.hcid) ?? 0

                for (const guild of newsettings.earn.j4r.ads) {
                    if ((guildsinfo.find(g => g.id === guild.id)) && (!userj4r.find(g => g.id === guild.id))) {
                        userj4r.push({
                            id: guild.id,
                            coins: guild.coins
                        })
                        coins += guild.coins
                    }
                }

                for (const j4r of userj4r) {
                    if (!guildsinfo.find(g => g.id === j4r.id)) {
                        userj4r = userj4r.filter(g => g.id !== j4r.id)
                        coins -= j4r.coins
                    }
                }

                await db.set('j4rs', `${userinfo.hcid}`, userj4r)
                await db.set('coins', userinfo.hcid, coins)
            }

            if (newsettings.features.bot.joinguild.enabled == true) {
                if (typeof newsettings.features.bot.joinguild.guildid == "string") {
                    await fetch(
                        `https://discord.com/api/guilds/${newsettings.features.bot.joinguild.guildid}/members/${userinfo.id}`,
                        {
                            method: "put",
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bot ${newsettings.features.bot.token}`
                            },
                            body: JSON.stringify({
                                access_token: codeinfo.access_token
                            })
                        }
                    );
                } else if (typeof newsettings.features.bot.joinguild.guildid == "object") {
                    if (Array.isArray(newsettings.features.bot.joinguild.guildid)) {
                        for (let guild of newsettings.features.bot.joinguild.guildid) {
                            await fetch(
                                `https://discord.com/api/guilds/${guild}/members/${userinfo.id}`,
                                {
                                    method: "put",
                                    headers: {
                                        'Content-Type': 'application/json',
                                        "Authorization": `Bot ${newsettings.features.bot.token}`
                                    },
                                    body: JSON.stringify({
                                        access_token: codeinfo.access_token
                                    })
                                }
                            );
                        }
                    } else {
                        return res.send("features.bot.joinguild.guildid is not an array nor a string.");
                    }
                } else {
                    return res.send("features.bot.joinguild.guildid is not an array nor a string.");
                }
            }

            if (newsettings.packages.rolePackages.roles) {
                const member = await fetch(`https://discord.com/api/v9/guilds/${newsettings.packages.rolePackages.roleServer}/members/${userinfo.id}`, {
                    headers: {
                        "Authorization": `Bot ${newsettings.features.bot.token}`
                    }
                })
                const memberinfo = await member.json()
                if (memberinfo.user) {
                    const currentpackage = await db.get(`package`, `${userinfo.hcid}`)
                    if (currentpackage) {
                        if (Object.values(newsettings.packages.rolePackages.roles).includes(currentpackage)) {
                            for (const rolePackage of Object.keys(newsettings.packages.rolePackages.roles)) {
                                if (newsettings.packages.rolePackages.roles[rolePackage] === currentpackage) {
                                    if (!memberinfo.roles.includes(rolePackage)) {
                                        await db.set('package', `${userinfo.hcid}`, newsettings.packages.default)
                                    }
                                }
                            }
                        }
                    } else {
                        await db.set('package', `${userinfo.hcid}`, newsettings.packages.default)
                    }
                    for (const role of memberinfo.roles) {
                        if (newsettings.packages.rolePackages.roles[role]) {
                            await db.set('package', `${userinfo.hcid}`, newsettings.packages.rolePackages.roles[role])
                        }
                    }
                }
            }

            if (u) {
                req.session.userinfo = userinfo
                const id = req.session.userinfo.hcid
                let uinf = await db.get('users', req.session.userinfo.hcid)
                let password = crypt.decrypt(uinf.password)
                const integrations = await db.get('integrations', id) ?? []
                let balance = {
                    coins: await db.get('coins', id),
                    credits: await db.get('credits', id)
                }
                let pusers = await db.get('pterodactyl', 'users') ?? [];
                let UI = pusers.findIndex(u => u.hcid == id);
                req.session.pterodactyl = pusers[UI].info
                req.session.userinfo = await db.get("users", id);
                req.session.password = password
                req.session.language = req.session.userinfo.language
                req.session.resources = await db.get('resources', id)
                req.session.permission = await db.get('permissions', id)
                req.session.balance = balance
                req.session.integrations = integrations
                req.session.settings = await db.get('settings', id)
                if (customredirect) return res.redirect(customredirect);
                res.redirect('/dashboard')
            } else {
                let hcid = userinfo.hcid
                const password = crypt.gen88(16)
                await db.set('users', user.email, hcid)
                req.session.password = password
                userinfo.password = crypt.encrypt(password)
                await db.set('users', hcid, userinfo)
                req.session.userinfo = userinfo
                let dcu = await db.get("users", "discord") ?? []
                dcu.push(userinfo.id)
                await db.set("users", "discord", dcu)
                let usrs = await db.get("users", "users") ?? []
                usrs.push(userinfo.hcid)
                await db.set("users", "users", usrs)
                let defp = newsettings.packages.default ?? "default";
                let ress = newsettings.packages.list[defp].resources;
                let ures = {};
                ress.forEach(resource => {
                    ures[resource.name] = resource.value
                });
                await db.set('resources', req.session.userinfo.hcid, ures)
                wh('signup', `${userinfo.username} has registered in the dashboard using discord oauth2`)
                dl.c(`${userinfo.username} Has registered in the Dashboard using Discord Oauth2`)
                res.redirect('/onboarding')
            }
        } else {
            res.redirect('/api/auth/discord')
        }
    });
}
/**
*--------------------------------------------------------------------------
* Defining other functions
*--------------------------------------------------------------------------
*/
function getCookie(req, cname) {
    let cookies = req.headers.cookie;
    if (!cookies) return null;
    let name = cname + "=";
    let ca = cookies.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return "";
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/
