const settings = require("../../settings.json");
const fetch = require("node-fetch");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function(app, db) {
    app.get("/remove_account", async (req, res) => {
        let theme = indexjs.get(req);
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        let cacheaccount = await fetch(
            settings.pterodactyl.domain +
            "/api/application/users/" +
            req.session.pterodactyl.id +
            "?include=servers", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${settings.pterodactyl.key}`,
                },
            }
        );
        if ((await cacheaccount.statusText) == "Not Found")
            return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true)
            return four0four(req, res, theme);
        if (!req.query.email)
            return res.redirect(
                theme.settings.redirect.removeaccountfailed +
                "?err=REMOVEACCOUNTMISSINGID"
            );
        let email = req.query.email;
        let pteroid = await db.get("users-" + email);
        let selected_ip = await db.get("ip-" + email);

        if (selected_ip) {
            let allips = (await db.get("ips")) || [];
            allips = allips.filter((ip) => ip !== selected_ip);
            if (allips.length == 0) {
                await db.delete("ips");
            } else {
                await db.set("ips", allips);
            }
            await db.delete("ip-" + email);
        }
        let userids = (await db.get("users")) || [];
        userids = userids.filter((user) => user !== pteroid);
        if (userids.length == 0) {
            await db.delete("users");
        } else {
            await db.set("users", userids);
        }
        await db.delete("users-" + email);
        await db.delete("coins-" + email);
        await db.delete("dailycoins:" + email);
        await db.delete("lastclaim:" + email);
        await db.delete("extra-" + email);
        await db.delete("package-" + email);
        log(
            `remove account`,
            `${req.session.userinfo.username} removed the account with the Email \`${email}\`.`
        );
        debuglog.admin(`${req.session.userinfo.username} removed the account with the Email ${email}.`)
        res.redirect(
            theme.settings.redirect.removeaccountsuccess + `?err=none`
        );
    });

    app.get("/getip", async (req, res) => {
        let theme = indexjs.get(req);
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        let cacheaccount = await fetch(
            settings.pterodactyl.domain +
            "/api/application/users/" +
            req.session.pterodactyl.id +
            "?include=servers", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${settings.pterodactyl.key}`,
                },
            }
        );
        if ((await cacheaccount.statusText) == "Not Found")
            return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true)
            return four0four(req, res, theme);
        let failredirect = theme.settings.redirect.failedgetip || "/";
        let successredirect = theme.settings.redirect.getip || "/";
        if (!req.query.email) return res.redirect(`${failredirect}?err=MISSINGID`);
        if (!(await db.get("users-" + req.query.email)))
            return res.redirect(`${failredirect}?err=INVALIDID`);
        if (!(await db.get("ip-" + req.query.email)))
            return res.redirect(`${failredirect}?err=NOIP`);
        let ip = await db.get("ip-" + req.query.email);
        log(
            `view ip`,
            `${req.session.userinfo.username} viewed the IP of the account with the Email \`${req.query.email}\`.`
        );
        debuglog.admin(
            `${req.session.userinfo.username} viewed the IP of the account with the Email \`${req.query.email}\`.`
        );
        return res.redirect(successredirect + "?err=none&ip=" + ip);
    });

    async function four0four(req, res, theme) {
        ejs.renderFile(
            `./views/${theme.name}/${theme.settings.unauthorized}`,
            await eval(indexjs.renderdataeval),
            null,
            function(err, str) {
                delete req.session.newaccount;
                if (err) {
                    console.log(
                        `[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`
                    );
                    console.log(err);
                    return res.send(
                        "An error has occured while attempting to load this page. Please contact an administrator to fix this."
                    );
                }
                res.status(403);
                res.send(str);
            }
        );
    }
}