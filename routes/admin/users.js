const fetch = require("node-fetch");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function (app, db) {
    app.post("/admin/users/remove", async (req, res) => {
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
        if (!req.body.user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
        let user = req.body.user;
        if (!await db.get("userinfo-" + user)) return res.json({ "success": false, "message": alerts.INVALIDUSER });
        let pteroid = await db.get("users-" + user);
        const response = await fetch(`${settings.pterodactyl.domain}/api/application/users/${pteroid}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${settings.pterodactyl.key}`,
            },
        });

        if (response.status === 204) {
            let selected_ip = await db.get("ip-" + user);
            let userinfo = await db.get("userinfo-" + user);

            if (selected_ip) {
                let allips = (await db.get("ips")) || [];
                allips = allips.filter((ip) => ip !== selected_ip);
                if (allips.length == 0) {
                    await db.delete("ips");
                } else {
                    await db.set("ips", allips);
                }
                await db.delete("ip-" + user);
            }
            let userids = (await db.get("users")) || [];
            userids = userids.filter((user) => user !== pteroid);
            if (userids.length == 0) {
                await db.delete("users");
            } else {
                await db.set("users", userids);
            }
            await db.delete("users-" + user);
            await db.delete("users-" + userinfo.email);
            await db.delete("users-" + userinfo.id);
            await db.delete("hcid-" + userinfo.email);
            await db.delete("hcid-" + userinfo.id);
            await db.delete("pteroinfo-" + user);
            await db.delete("onboarding-" + user);
            await db.delete("userinfo-" + user);
            await db.delete("password-" + user);
            await db.delete("j4rs-" + userinfo.id);
            await db.delete("ip-" + userinfo.id);
            await db.delete("coins-" + user);
            await db.delete("dailycoins:" + user);
            await db.delete("lastclaim:" + user);
            await db.delete("lastwished-" + user);
            await db.delete("extra-" + user);
            await db.delete("package-" + user);
        } else {
            console.error(`Failed to delete user with ID ${pteroid}:`, response.statusText);
        }
        log(
            `remove account`,
            `${req.session.userinfo.username} deleted the user \`${user}\`.`
        );
        debuglog.admin(`${req.session.userinfo.username} deleted the user ${user}.`)
        return res.json({ "success": true, "message": "Success!" });
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
}