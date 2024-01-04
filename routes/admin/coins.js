const fetch = require("node-fetch");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function (app, db) {
    app.post("/admin/coins/set", async (req, res) => {
        let theme = indexjs.get(req);
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        let cacheaccount = await fetch(settings.pterodactyl.domain + "/api/application/users/" + req.session.pterodactyl.id + "?include=servers", {
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
        let user = req.body.user;
        let userinfo = await db.get("userinfo-" + user)
        let coins = req.body.coins;
        if (!user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
        if (!userinfo) return res.json({ "success": false, "message": alerts.INVALIDUSER });
        if (!coins) return res.json({ "success": false, "message": alerts.MISSINGCOINS });
        coins = parseFloat(coins);
        if (isNaN(coins))
            return res.json({ "success": false, "message": alerts.INVALIDINTEGER });
        if (coins < 0 || coins > 999999999999999)
            return res.json({ "success": false, "message": alerts.COINSSIZE });
        if (coins == 0) {
            await db.delete("coins-" + user);
        } else {
            await db.set("coins-" + user, coins);
        }
        log(`set coins`, `${req.session.userinfo.username} set the coins of \`${userinfo.username}\` to \`${coins}\`. New balance: ${await db.get("coins-" + user)}`);
        debuglog.admin(`${req.session.userinfo.username} set the coins of ${userinfo.username} to ${coins}. New balance: ${await db.get("coins-" + user)}`);
        return res.json({ "success": true, "message": "Success" });
    });

    app.post("/admin/coins/add", async (req, res) => {
        let theme = indexjs.get(req);
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        let cacheaccount = await fetch(settings.pterodactyl.domain + "/api/application/users/" + req.session.pterodactyl.id + "?include=servers", {
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
        let user = req.body.user;
        let userinfo = await db.get("userinfo-" + user)
        let coins = req.body.coins;
        if (!user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
        if (!userinfo) return res.json({ "success": false, "message": alerts.INVALIDUSER });
        if (!coins) return res.json({ "success": false, "message": alerts.MISSINGCOINS });
        coins = parseFloat(coins);
        if (isNaN(coins))
            return res.json({ "success": false, "message": alerts.INVALIDINTEGER });
        if (coins < 0 || coins > 999999999999999)
            return res.json({ "success": false, "message": alerts.COINSSIZE });
            const ccoins = await db.get("coins-" + user)
            const ncoins = ccoins + coins
            await db.set("coins-" + user, ncoins);
        log(`add coins`, `${req.session.userinfo.username} gave \`${req.body.coins}\` coins to \`${user}\`. New balance: ${await db.get("coins-" + user)}`);
        debuglog.admin(`${req.session.userinfo.username} gave ${req.body.coins} coins to ${user}. New balance: ${await db.get("coins-" + user)}`)
        return res.json({ "success": true, "message": "Success" });
    });

    app.post("/admin/coins/remove", async (req, res) => {
        let theme = indexjs.get(req);
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        let cacheaccount = await fetch(settings.pterodactyl.domain + "/api/application/users/" + req.session.pterodactyl.id + "?include=servers", {
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
        let user = req.body.user;
        let userinfo = await db.get("userinfo-" + user)
        let coins = req.body.coins;
        if (!user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
        if (!userinfo) return res.json({ "success": false, "message": alerts.INVALIDUSER });
        if (!coins) return res.json({ "success": false, "message": alerts.MISSINGCOINS });
        coins = parseFloat(coins);
        if (isNaN(coins))
            return res.json({ "success": false, "message": alerts.INVALIDINTEGER });
        if (coins < 0 || coins > 999999999999999)
            return res.json({ "success": false, "message": alerts.COINSSIZE });
            const ccoins = await db.get("coins-" + user)
            if (ccoins < coins)
            return res.json({ "success": false, "message": alerts.NOTENOUGHCOINS });
            const ncoins = ccoins - coins
            await db.set("coins-" + user, ncoins);
        log(`remove coins`, `${req.session.userinfo.username} removed \`${req.body.coins}\` coins from \`${user}\`. New balance: ${await db.get("coins-" + user)}`);
        debuglog.admin(`${req.session.userinfo.username} removed ${req.body.coins} coins from ${user}. New balance: ${await db.get("coins-" + user)}`)
        return res.json({ "success": true, "message": "Success" });
    });
    async function four0four(req, res, theme) {
        ejs.renderFile(
            `./views/${theme.name}/${theme.settings.unauthorized}`,
            await eval(indexjs.renderdataeval),
            null,
            function (err, str) {
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