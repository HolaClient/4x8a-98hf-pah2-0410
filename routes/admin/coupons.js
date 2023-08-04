const settings = require("../../settings.json");
const fetch = require("node-fetch");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function(app, db) {
    app.get("/create_coupon", async (req, res) => {
        if (settings.admin.coupons.enabled === !true) return four0four(req, res, theme);
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
        let code = req.query.code ?
            req.query.code.slice(0, 200) :
            Math.random().toString(36).substring(2, 15);
        if (!code.match(/^[a-z0-9]+$/i))
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONINVALIDCHARACTERS"
            );
        let coins = req.query.coins || 0;
        let ram = req.query.ram || 0;
        let disk = req.query.disk || 0;
        let cpu = req.query.cpu || 0;
        let backups = req.query.backups || 0;
        let databases = req.query.databases || 0;
        let allocations = req.query.allocations || 0;
        let servers = req.query.servers || 0;
        let uses = req.query.uses || 0;
        let expire = req.query.expire || 0;
        coins = parseFloat(coins);
        ram = parseFloat(ram);
        disk = parseFloat(disk);
        cpu = parseFloat(cpu);
        backups = parseFloat(backups);
        databases = parseFloat(databases);
        allocations = parseFloat(allocations);
        servers = parseFloat(servers);
        uses = parseFloat(uses);
        expire = parseFloat(expire);

        if (coins < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );
        if (ram < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );
        if (disk < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );
        if (cpu < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );
        if (backups < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );
        if (allocations < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );
        if (databases < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );
        if (servers < 0)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed +
                "?err=CREATECOUPONLESSTHANONE"
            );

        if (!coins && !ram && !disk && !cpu && !servers && !databases && !backups && !allocations)
            return res.redirect(
                theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONEMPTY"
            );

        await db.set("coupon-" + code, {
            coins: coins,
            ram: ram,
            disk: disk,
            cpu: cpu,
            servers: servers,
            databases: databases,
            backups: backups,
            allocations: allocations,
            uses: uses,
            expire: expire
        });
        log(
            `create coupon`,
            `${req.session.userinfo.username} created the coupon code \`${code}\` which gives:\`\`\`coins: ${coins}\nMemory: ${ram} MB\nDisk: ${disk} MB\nCPU: ${cpu}%\nServers: ${servers}\nBackups: ${backups}\nAllocations: ${allocations}\nDatabases: ${databases}\nand expires in ${expire} hours with a maximum of ${uses} uses\`\`\``
        );
        debuglog.admin(`${req.session.userinfo.username} created the coupon code \`${code}\` which gives:\`\`\`coins: ${coins}\nMemory: ${ram} MB\nDisk: ${disk} MB\nCPU: ${cpu}%\nServers: ${servers}\nBackups: ${backups}\nAllocations: ${allocations}\nDatabases: ${databases}\nand expires in ${expire} hours with a maximum of ${uses} uses\`\`\``)
        res.redirect(
            theme.settings.redirect.couponcreationsuccess + "?code=" + code
        );
    });

    app.get("/revoke_coupon", async (req, res) => {
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
        let code = req.query.code;
        if (!code.match(/^[a-z0-9]+$/i))
            return res.redirect(
                theme.settings.redirect.couponrevokefailed +
                "?err=REVOKECOUPONCANNOTFINDCODE"
            );
        if (!(await db.get("coupon-" + code)))
            return res.redirect(
                theme.settings.redirect.couponrevokefailed +
                "?err=REVOKECOUPONCANNOTFINDCODE"
            );
        await db.delete("coupon-" + code);

        log(
            `revoke coupon`,
            `${req.session.userinfo.username} revoked the coupon code \`${code}\`.`
        );
        debuglog.admin(`${req.session.userinfo.username} revoked the coupon code \`${code}\`.`)
        res.redirect(
            theme.settings.redirect.couponrevokesuccess + "?revokedcode=true"
        );
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