const settings = require("../../settings.json");
const fetch = require("node-fetch");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");
const debuglog = require("../../lib/debug");

module.exports.load = async function(app, db) {
    app.get("/setcoins", async (req, res) => {
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
        let failredirect = theme.settings.redirect.failedsetcoins || "/";
        let id = req.query.email;
        let coins = req.query.coins;
        if (!id) return res.redirect(failredirect + "?err=MISSINGID");
        if (!(await db.get("users-" + req.query.email)))
            return res.redirect(`${failredirect}?err=INVALIDID`);
        if (!coins) return res.redirect(failredirect + "?err=MISSINGCOINS");
        coins = parseFloat(coins);
        if (isNaN(coins))
            return res.redirect(failredirect + "?err=INVALIDCOINNUMBER");
        if (coins < 0 || coins > 999999999999999)
            return res.redirect(`${failredirect}?err=COINSIZE`);
        if (coins == 0) {
            await db.delete("coins-" + id);
        } else {
            await db.set("coins-" + id, coins);
        }
        let successredirect = theme.settings.redirect.setcoins || "/";
        log(`set coins`, `${req.session.userinfo.username} set the coins of the user with the email \`${id}\` to \`${coins}\`.`);
        debuglog.admin(`${req.session.userinfo.username} set the coins of the user with the email \`${id}\` to \`${coins}\``);
        res.redirect(successredirect + "?err=none");
    });

    app.get("/addcoins", async (req, res) => {
        let theme = indexjs.get(req);
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        let cacheaccount = await fetch(
            settings.pterodactyl.domain +
            "/api/application/users/" +
            (await db.get("users-" + req.session.userinfo.id)) +
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
        let failredirect = theme.settings.redirect.failedsetcoins || "/";
        let id = req.query.email;
        let coins = req.query.coins;
        if (!id) return res.redirect(failredirect + "?err=MISSINGID");
        if (!(await db.get("users-" + req.query.email)))
            return res.redirect(`${failredirect}?err=INVALIDID`);
        if (!coins) return res.redirect(failredirect + "?err=MISSINGCOINS");
        let currentcoins = (await db.get("coins-" + id)) || 0;
        coins = currentcoins + parseFloat(coins);
        if (isNaN(coins))
            return res.redirect(failredirect + "?err=INVALIDCOINNUMBER");
        if (coins < 0 || coins > 999999999999999)
            return res.redirect(`${failredirect}?err=COINSIZE`);
        if (coins == 0) {
            await db.delete("coins-" + id);
        } else {
            await db.set("coins-" + id, coins);
        }
        let successredirect = theme.settings.redirect.setcoins || "/";
        log(
            `add coins`,
            `${req.session.userinfo.username} added \`${req.query.coins}\` coins to the user with the email \`${id}\``
        );
        debuglog.admin(`${req.session.userinfo.username} added \`${req.query.coins}\` coins to the user with the email \`${id}\``)
        res.redirect(successredirect + "?err=none");
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
};