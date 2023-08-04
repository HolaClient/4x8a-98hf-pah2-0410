const settings = require("../../settings.json");
const fetch = require('node-fetch');
const fs = require("fs");
const indexjs = require("../../index.js");
const adminjs = require("./admin.js");
const ejs = require("ejs");

module.exports.load = async function(app, db) {
    async function four0four(req, res, theme) {
        ejs.renderFile(
            `./views/${theme.name}/${theme.settings.unauthorized}`,
            await eval(indexjs.renderdataeval),
            null,
            function(err, str) {
                delete req.session.newaccount;
                if (err) {
                    console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
                    console.log(err);
                    return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
                };
                res.status(403);
                res.send(str);
            });
    }

    module.exports.suspend = async function(email) {
        let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
        if (newsettings.api.client.allow.overresourcessuspend !== true) return;

        let canpass = await indexjs.islimited();
        if (canpass == false) {
            setTimeout(
                async function() {
                    adminjs.suspend(email);
                }, 1
            )
            return;
        };

        indexjs.ratelimits(1);
        let pterodactylid = await db.get("users-" + email);
        let userinforeq = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + pterodactylid + "?include=servers", {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                }
            }
        );
        if (await userinforeq.statusText == "Not Found") {
            console.log("[WEBSITE] An error has occured while attempting to check if a user's server should be suspended.");
            console.log("- EMAIL ID: " + email);
            console.log("- Pterodactyl Panel ID: " + pterodactylid);
            return;
        }
        let userinfo = JSON.parse(await userinforeq.text());

        let packagename = await db.get("package-" + email);
        let package = newsettings.api.client.packages.list[packagename || newsettings.api.client.packages.default];

        let extra =
            await db.get("extra-" + email) || {
                ram: 0,
                disk: 0,
                cpu: 0,
                servers: 0,
                databases: 0,
                allocations: 0,
                backups: 0
            };

        let plan = {
            ram: package.ram + extra.ram,
            disk: package.disk + extra.disk,
            cpu: package.cpu + extra.cpu,
            servers: package.servers + extra.servers
        }

        let current = {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: userinfo.attributes.relationships.servers.data.length,
            databases: 0,
            allocations: 0,
            backups: 0
        }
        for (let i = 0, len = userinfo.attributes.relationships.servers.data.length; i < len; i++) {
            current.ram = current.ram + userinfo.attributes.relationships.servers.data[i].attributes.limits.memory;
            current.disk = current.disk + userinfo.attributes.relationships.servers.data[i].attributes.limits.disk;
            current.cpu = current.cpu + userinfo.attributes.relationships.servers.data[i].attributes.limits.cpu;
        };

        indexjs.ratelimits(userinfo.attributes.relationships.servers.data.length);
        if (current.ram > plan.ram || current.disk > plan.disk || current.cpu > plan.cpu || current.servers > plan.servers) {
            for (let i = 0, len = userinfo.attributes.relationships.servers.data.length; i < len; i++) {
                let suspendid = userinfo.attributes.relationships.servers.data[i].attributes.id;
                await fetch(
                    settings.pterodactyl.domain + "/api/application/servers/" + suspendid + "/suspend", {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${settings.pterodactyl.key}`
                        }
                    }
                );
            }
        } else {
            if (settings.api.client.allow.renewsuspendsystem.enabled == true) return;
            for (let i = 0, len = userinfo.attributes.relationships.servers.data.length; i < len; i++) {
                let suspendid = userinfo.attributes.relationships.servers.data[i].attributes.id;
                await fetch(
                    settings.pterodactyl.domain + "/api/application/servers/" + suspendid + "/unsuspend", {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${settings.pterodactyl.key}`
                        }
                    }
                );
            }
        };
    }
};