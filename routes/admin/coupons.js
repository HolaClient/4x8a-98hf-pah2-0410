const fetch = require("node-fetch");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function (app, db) {
    app.post("/coupons/create", async (req, res) => {
        try {
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
        let code = req.body.code ?
            req.body.code.slice(0, 200) :
            Math.random().toString(36).substring(2, 15);
        if (!code.match(/^[a-z0-9]+$/i))
            return res.json({ "success": false, "message": alerts.INVALIDCODENAME });
        let coins = req.body.coins || 0;
        let ram = req.body.ram || 0;
        let disk = req.body.disk || 0;
        let cpu = req.body.cpu || 0;
        let backups = req.body.backups || 0;
        let databases = req.body.databases || 0;
        let allocations = req.body.allocations || 0;
        let servers = req.body.servers || 0;
        let uses = req.body.uses || 0;
        coins = parseFloat(coins);
        ram = parseFloat(ram);
        disk = parseFloat(disk);
        cpu = parseFloat(cpu);
        backups = parseFloat(backups);
        databases = parseFloat(databases);
        allocations = parseFloat(allocations);
        servers = parseFloat(servers);
        uses = parseFloat(uses);

        if (coins < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (ram < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (disk < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (cpu < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (backups < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (allocations < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (databases < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (servers < 0)
            return res.json({ "success": false, "message": alerts.COUPONLESSTHANONE });
        if (!coins && !ram && !disk && !cpu && !servers && !databases && !backups && !allocations)
            return res.json({ "success": false, "message": alerts.COUPONEMPTY });

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
        });
        let coupons = (await db.get("coupons")) || [];
        coupons.push(code);
        await db.set("coupons", coupons);        
        log(
            `create coupon`,
            `${req.session.userinfo.username} created the coupon code \`${code}\` which gives:\`\`\`coins: ${coins}\nMemory: ${ram} MB\nDisk: ${disk} MB\nCPU: ${cpu}%\nServers: ${servers}\nBackups: ${backups}\nAllocations: ${allocations}\nDatabases: ${databases}\nwith a maximum of ${uses} uses\`\`\``
        );
        debuglog.admin(`${req.session.userinfo.username} created the coupon code "${code}" which gives:\ncoins: ${coins}\nMemory: ${ram} MB\nDisk: ${disk} MB\nCPU: ${cpu}%\nServers: ${servers}\nBackups: ${backups}\nAllocations: ${allocations}\nDatabases: ${databases}\nwith a maximum of ${uses} uses`)
        return res.json({ "success": true, "message": alerts.CREATECOUPONSUCCESS });
        } catch {
            return res.json({ success: false , message:"An error occured" })
        }
    });

    app.post("/coupons/revoke", async (req, res) => {
        try {
            let theme = indexjs.get(req);
            if (!req.session.pterodactyl) return four0four(req, res, theme);
            const cacheAccountResponse = await fetch(
                settings.pterodactyl.domain +
                "/api/application/users/" +
                req.session.pterodactyl.id +
                "?include=servers", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${settings.pterodactyl.key}`,
                },
            });
            if (cacheAccountResponse.status === 404)
                return four0four(req, res, theme);

            let cacheAccountInfo = await cacheAccountResponse.json();
            req.session.pterodactyl = cacheAccountInfo.attributes;
            if (cacheAccountInfo.attributes.root_admin !== true)
                return four0four(req, res, theme);

            let code = req.body.code;
            const couponKey = "coupon-" + code;
            const couponExists = await db.get(couponKey);
            if (!couponExists)
                return res.json({ "success": false, "message": alerts.COULDNOTFINDCOUPON });

            await db.delete(couponKey);
            let coupons = (await db.get("coupons")) || []
            coupons = coupons.filter((coupon) => coupon !== code);
            if (coupons.length === 0) {
                await db.delete("coupons");
            } else {
                await db.set("coupons", coupons);
            }
            
            log(
                `Revoke coupon`,
                `${req.session.userinfo.username} revoked the coupon code \`${code}\`.`
            );
            debuglog.admin(`${req.session.userinfo.username} revoked the coupon code ${code}.`);

            res.json({ "success": true, "message": alerts.REVOKEDCOUPON });
        } catch (error) {
            console.error("Error revoking coupon:", error);
            res.status(500).json({ "success": false, "message": alerts.INTERNALERROR });
        }
    });

    app.get("/coupons/list", async (req, res) => {
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
        let coupons = await db.get("coupons") ? await db.get("coupons") : [];
        return res.json({ "coupons": coupons });
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