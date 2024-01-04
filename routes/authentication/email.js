const fetch = require("node-fetch");
const validator = require("email-validator");

module.exports.load = async function (app, db) {
    app.get("/auth/email/login", async (req, res) => {
        if (!req.query.user || !req.query.password) return res.json({ "success": false, "message": alerts.MISSINGCREDENTIALS });
        const hcid = await db.get(`hcid-${req.query.user}`);
        const userinfo = await db.get(`userinfo-${hcid}`);
        const user = await db.get(`users-${hcid}`);
        const password = await db.get(`password-${hcid}`);
        if (!user) return res.json({ "success": false, "message": alerts.INVALIDUSER });
        if (password !== req.query.password) return res.json({ "success": false, "message": alerts.INVALIDCREDENTIALS });

        let cacheaccount = await fetch(
            `${settings.pterodactyl.domain}/api/application/users/${await db.get(`users-${hcid}`)}?include=servers`,
            {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return res.json({ "success": false, "message": alerts.PANELERROR });
        cacheaccount = JSON.parse(await cacheaccount.text());

        const pic = await db.get(`onboarding-${hcid}`)
        const pfp = pic.profile
        let pfpi;

        if (!pfp) {
          pfpi = "https://media.giphy.com/media/1hwlKt8XTAyMs6YFht/giphy.gif";
        } else {
          pfpi = pfp;
        }
        const uinfo = {
            name: userinfo.name,
            username: userinfo.username,
            email: userinfo.email,
            hcid: userinfo.hcid,
            profile: pfpi,
            id: userinfo.id,
            password: userinfo.password,
            authtype: "email"
        }
        let obinfo = await db.get("onboarding-" + userinfo.hcid);
          if (obinfo) { req.session.user = obinfo; }
        req.session.pterodactyl = cacheaccount.attributes;
        req.session.userinfo = uinfo;
        req.session.userpass = userinfo.password;
        return res.json({ "success": true, "message": alerts.SUCCESS });
    });

    app.get("/auth/email/register", async (req, res) => {
        if (settings.allow.signup == false) return res.json({ "success": false, "message": alerts.SIGNUPDISABLED });
        if (!req.query.email || !req.query.password || !req.query.username || !req.query.name) return res.json({ "success": false, "message": alerts.MISSINGFIELDS });
        if (await db.get(`user-${req.query.email}`)) return res.json({ "success": false, "message": alerts.USEREXISTS });
        if (validator.validate(req.query.email) == false) return res.json({ "success": false, "message": alerts.INVALIDEMAIL });

        let ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.headers['x-client-ip'] || req.headers['x-forwarded'] || req.socket.remoteAddress;

        if (settings.authentication.email.ip["trust x-forwarded-for"]) {
            let allips = await db.get("ips") ? await db.get("ips") : [];
            let mainip = await db.get(`ip-${req.query.email}`);
            if (mainip) {
                if (mainip !== ip) {
                    allips = allips.filter(ip2 => ip2 !== mainip);
                    if (allips.includes(ip)) {
                        return res.json({ "success": false, "message": alerts.ALTACCOUNT });
                    }
                    allips.push(ip);
                    await db.set("ips", allips);
                    await db.set(`ip-${req.query.email}`, ip);
                }
            } else {
                if (allips.includes(ip)) {
                    return res.json({ "success": false, "message": alerts.ALTACCOUNT });
                }
                allips.push(ip);
                await db.set("ips", allips);
                await db.set(`ip-${req.query.email}`, ip);
            }
        };

        if (settings.authentication.email.ip["duplicate check"]) {
            let accountid = getCookie(req, "accountid");

            if (accountid) {
                if (accountid !== req.query.mail) {
                    return res.json({ "success": false, "message": alerts.ALTACCOUNT });
                }
            }

            res.cookie('accountid', req.query.mail);
        }

        const userhid = await db.get("hcid-" + req.query.email);
        if (!userhid) {
            const rnd = Math.floor(1000 + Math.random() * 9000);
            if (!await db.get(`hcid-${rnd}`)) {
                await db.set("hcid-" + req.query.email, rnd);
            }
        }
        const userhcid = await db.get("hcid-" + req.query.email);

        const userinfo = {
            name: req.query.name,
            username: req.query.username,
            email: req.query.email,
            hcid: userhcid,
            id: userhcid,
            password: req.query.password,
            authtype: "email"
        }
        const accountjson = await fetch(
            `${settings.pterodactyl.domain}/api/application/users`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${settings.pterodactyl.key}`
            },
            body: JSON.stringify({
                username: req.query.username,
                email: req.query.email,
                first_name: req.query.name,
                last_name: "email-auth",
                password: req.query.password
            })
        }
        );
        if (accountjson.status == 201) {
            const accountinfo = JSON.parse(await accountjson.text());
            await db.set(`users-${userinfo.hcid}`, accountinfo.attributes.id);
        } else {
            let accountlistjson = await fetch(
                `${settings.pterodactyl.domain}/api/application/users?include=servers&filter[email]=${encodeURIComponent(req.query.email)}`, {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                }
            }
            );
            const accountlist = await accountlistjson.json();
            const user = accountlist.data.filter(acc => acc.attributes.email == req.query.email);
            if (user.length == 1) {
                let userid = user[0].attributes.id;
                await db.set(`users-${userinfo.hcid}`, userid);
            } else {
                return res.json({ "success": false, "message": "An error occured while attempting to create your account!" });
            };
        }
        let cacheaccount = await fetch(
            `${settings.pterodactyl.domain}/api/application/users/${await db.get(`users-${userinfo.hcid}`)}?include=servers`,
            {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return res.json({ "success": false, "message": alerts.PANELERROR });
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        await db.set(`userinfo-${userinfo.hcid}`, userinfo);
        await db.set(`hcid-${userinfo.username}`, userinfo.hcid);
        await db.set(`hcid-${userinfo.email}`, userinfo.hcid);
        await db.set(`password-${userinfo.hcid}`, req.query.password)

        let usersls = await db.get("userslist");
        usersls = usersls ? usersls : [];
        if (!usersls.includes(`${userinfo.hcid}`)) {
            usersls.push(`${userinfo.hcid}`);
            await db.set("userslist", usersls);
        }

        req.session.pterodactyl = cacheaccountinfo.attributes;
        req.session.userinfo = userinfo;
        req.session.userpass = userinfo.password;

        return res.json({ "success": true, "message": alerts.SUCCESS });
    });
}



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
}