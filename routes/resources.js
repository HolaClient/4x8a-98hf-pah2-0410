const settings = require("../databases/settings");

if (settings.pterodactyl) if (settings.pterodactyl.domain) {
    if (settings.pterodactyl.domain.slice(-1) == "/") settings.pterodactyl.domain = settings.pterodactyl.domain.slice(0, -1);
};

const fetch = require('node-fetch');
const fs = require("fs");
const indexjs = require("../index.js");
const arciotext = (require("./arcio.js")).text;
const adminjs = require("./suspend.js");
const ejs = require("ejs");
const chalk = require('chalk');
const { response } = require("express");

module.exports.load = async function(app, db) {
    app.get("/setcoins", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);

        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);

        let failredirect = theme.settings.redirect.failedsetcoins || "/";

        let id = req.query.id;
        let coins = req.query.coins;

        if (!id) return res.redirect(failredirect + "?err=MISSINGID");
        if (!(await db.get("users-" + req.query.id))) return res.redirect(`${failredirect}?err=INVALIDID`);
        
        if (!coins) return res.redirect(failredirect + "?err=MISSINGCOINS");

        coins = parseFloat(coins);

        if (isNaN(coins)) return res.redirect(failredirect + "?err=INVALIDCOINNUMBER");

        if (coins < 0 || coins > 999999999999999) return res.redirect(`${failredirect}?err=COINSIZE`);

        if (coins == 0) {
            await db.delete("coins-" + id)
        } else {
            await db.set("coins-" + id, coins);
        }

        let successredirect = theme.settings.redirect.setcoins || "/";
        res.redirect(successredirect + "?err=none");

    });

    app.get("/addcoins", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);

        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);

        let failredirect = theme.settings.redirect.failedsetcoins || "/";

        let id = req.query.id;
        let coins = req.query.coins;

        if (!id) return res.redirect(failredirect + "?err=MISSINGID");
        if (!(await db.get("users-" + req.query.id))) return res.redirect(`${failredirect}?err=INVALIDID`);
        
        if (!coins) return res.redirect(failredirect + "?err=MISSINGCOINS");

        let currentcoins = await db.get("coins-" + id) || 0;

        coins = currentcoins + parseFloat(coins);

        if (isNaN(coins)) return res.redirect(failredirect + "?err=INVALIDCOINNUMBER");

        if (coins < 0 || coins > 999999999999999) return res.redirect(`${failredirect}?err=COINSIZE`);

        if (coins == 0) {
            await db.delete("coins-" + id)
        } else {
            await db.set("coins-" + id, coins);
        }

        let successredirect = theme.settings.redirect.setcoins || "/";
        res.redirect(successredirect + "?err=none");
    });
    
    

    app.get("/setresources", async (req, res) => {
        let theme = indexjs.get(req);
    
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        
        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
    
        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);
    
        let failredirect = theme.settings.redirect.failedsetresources || "/";
    
        if (!req.query.id) return res.redirect(`${failredirect}?err=MISSINGID`);
    
        if (!(await db.get("users-" + req.query.id))) return res.redirect(`${failredirect}?err=INVALIDID`);
    
        let successredirect = theme.settings.redirect.setresources || "/";
    
        if (req.query.ram || req.query.disk || req.query.cpu || req.query.servers || req.query.databases || req.query.backups || req.query.allocations) {
            let ramstring = req.query.ram;
            let diskstring = req.query.disk;
            let cpustring = req.query.cpu;
            let serversstring = req.query.servers;
            let backupsstring = req.query.backups;
            let allocationsstring = req.query.allocations;
            let databasesstring = req.query.databases;
            let id = req.query.id;

            let currentextra = await db.get("extra-" + req.query.id);
            let extra;

            if (typeof currentextra == "object") {
                extra = currentextra;
            } else {
                extra = {
                    ram: 0,	
                    disk: 0,	
                    cpu: 0,	
                    servers: 0,
                    databases: 0,
                    backups: 0,
                    allocations: 0
                }
            }

            if (ramstring) {
                let ram = parseFloat(ramstring);
                if (ram < 0 || ram > 999999999999999) {
                    return res.redirect(`${failredirect}?err=RAMSIZE`);
                }
                extra.ram = ram;
            }
            
            if (diskstring) {
                let disk = parseFloat(diskstring);
                if (disk < 0 || disk > 999999999999999) {
                    return res.redirect(`${failredirect}?err=DISKSIZE`);
                }
                extra.disk = disk;
            }
            
            if (cpustring) {
                let cpu = parseFloat(cpustring);
                if (cpu < 0 || cpu > 999999999999999) {
                    return res.redirect(`${failredirect}?err=CPUSIZE`);
                }
                extra.cpu = cpu;
            }

            if (serversstring) {
                let servers = parseFloat(serversstring);
                if (servers < 0 || servers > 999999999999999) {
                    return res.redirect(`${failredirect}?err=SERVERSIZE`);
                }
                extra.servers = servers;
            }

            if (allocationsstring) {
                let allocations = parseFloat(allocationsstring);
                if (allocations < 0 || allocations > 999999999999999) {
                    return res.redirect(`${failredirect}?err=ALLOCATIONSSIZE`);
                }
                extra.allocations = allocations;
            }

            if (backupsstring) {
                let backups = parseFloat(backupsstring);
                if (backups < 0 || backups > 999999999999999) {
                    return res.redirect(`${failredirect}?err=BACKUPSSIZE`);
                }
                extra.backups = backups;
            }

            if (databasesstring) {
                let databases = parseFloat(databasesstring);
                if (databases < 0 || databases > 999999999999999) {
                    return res.redirect(`${failredirect}?err=DATABASESSIZE`);
                }
                extra.databases = databases;
            }
            
            if (extra.ram == 0 && extra.disk == 0 && extra.cpu == 0 && extra.servers == 0 && extra.allocations == 0 && extra.backups == 0 && extra.databases == 0) {
                await db.delete("extra-" + req.query.id);
            } else {
                await db.set("extra-" + req.query.id, extra);
            }

            adminjs.suspend(req.query.id);

            // Just copy this and put it in the other endpoints
            let username = cacheaccountinfo.attributes.username;
            let tag = `${cacheaccountinfo.attributes.first_name}${cacheaccountinfo.attributes.last_name}`

            let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
            
            return res.redirect(successredirect + "?err=none");
        } else {
            res.redirect(`${failredirect}?err=MISSINGVARIABLES`);
        }
    });


    app.get("/setplan", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);
        
        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);

        let failredirect = theme.settings.redirect.failedsetplan || "/";

        if (!req.query.id) return res.redirect(`${failredirect}?err=MISSINGID`);

        if (!(await db.get("users-" + req.query.id))) return res.redirect(`${failredirect}?err=INVALIDID`);

        let successredirect = theme.settings.redirect.setplan || "/";

        if (!req.query.package) {
            await db.delete("package-" + req.query.id);
            adminjs.suspend(req.query.id);

            return res.redirect(successredirect + "?err=none");
        } else {
            let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
            if (!newsettings.api.client.packages.list[req.query.package]) return res.redirect(`${failredirect}?err=INVALIDPACKAGE`);
            await db.set("package-" + req.query.id, req.query.package);
            adminjs.suspend(req.query.id);

            return res.redirect(successredirect + "?err=none");
        }
    });
    
    app.get("/getip", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);

        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);

        let failredirect = theme.settings.redirect.failedgetip || "/";
        let successredirect = theme.settings.redirect.getip || "/";
        if (!req.query.id) return res.redirect(`${failredirect}?err=MISSINGID`);

        if (!(await db.get("users-" + req.query.id))) return res.redirect(`${failredirect}?err=INVALIDID`);

        if (!(await db.get("ip-" + req.query.id))) return res.redirect(`${failredirect}?err=NOIP`);
        let ip = await db.get("ip-" + req.query.id);
        return res.redirect(successredirect + "?err=NONE&ip=" + ip)
    });

    app.get("/create_coupon", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);
        
        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);

        let code = req.query.code ? req.query.code.slice(0, 200) : Math.random().toString(36).substring(2, 15);

        if (!code.match(/^[a-z0-9]+$/i)) return res.redirect(theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONINVALIDCHARACTERS");

        let coins = req.query.coins || 0;
        let ram = req.query.ram || 0;
        let disk = req.query.disk || 0;
        let cpu = req.query.cpu || 0;
        let servers = req.query.servers || 0;

        coins = parseFloat(coins);
        ram = parseFloat(ram);
        disk = parseFloat(disk);
        cpu = parseFloat(cpu);
        servers = parseFloat(servers);

        if (coins < 0) return res.redirect(theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONLESSTHANONE");
        if (ram < 0) return res.redirect(theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONLESSTHANONE");
        if (disk < 0) return res.redirect(theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONLESSTHANONE");
        if (cpu < 0) return res.redirect(theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONLESSTHANONE");
        if (servers < 0) return res.redirect(theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONLESSTHANONE");

        if (!coins && !ram && !disk && !cpu && !servers) return res.redirect(theme.settings.redirect.couponcreationfailed + "?err=CREATECOUPONEMPTY");

        await db.set("coupon-" + code, {
            coins: coins,
            ram: ram,
            disk: disk,
            cpu: cpu,
            servers: servers
        });

        res.redirect(theme.settings.redirect.couponcreationsuccess + "?code=" + code)


    });
    app.get("/hyperactyl/version", async (req,res) => {
        await fetch("https://api.github.com/repos/hyperactyl/hyperactyl/releases/latest")
        .then(response => response.json())
        .then(json => {
            res.send(`{"name": "${json.name}"}`)
        })
    })

    app.get("/revoke_coupon", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);
        
        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);

        let code = req.query.code;

        if (!code.match(/^[a-z0-9]+$/i)) return res.redirect(theme.settings.redirect.couponrevokefailed + "?err=REVOKECOUPONCANNOTFINDCODE");

        if (!(await db.get("coupon-" + code))) return res.redirect(theme.settings.redirect.couponrevokefailed + "?err=REVOKECOUPONCANNOTFINDCODE");

        await db.delete("coupon-" + code);

        res.redirect(theme.settings.redirect.couponrevokesuccess + "?revokedcode=true");
        
    });

    app.get("/remove_account", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);
        
        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
                method: "get",
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);

        // This doesn't delete the account and doesn't touch the renewal system.

        if (!req.query.id) return res.redirect(theme.settings.redirect.removeaccountfailed + "?err=REMOVEACCOUNTMISSINGID");

        let discordid = req.query.id;
        let pteroid = await db.get("users-" + discordid);

        // Remove IP.

        let selected_ip = await db.get("ip-" + discordid);

        if (selected_ip) {
        let allips = await db.get("ips") || [];
        allips = allips.filter(ip => ip !== selected_ip);

        if (allips.length == 0) {
            await db.delete("ips");
        } else {
            await db.set("ips", allips);
        }

        await db.delete("ip-" + discordid);
        }

        // Remove user.

        let userids = await db.get("users") || [];
        userids = userids.filter(user => user !== pteroid);

        if (userids.length == 0) {
        await db.delete("users");
        } else {
        await db.set("users", userids);
        }

        await db.delete("users-" + discordid);

        // Remove coins/resources.

        await db.delete("coins-" + discordid);
        await db.delete("extra-" + discordid);
        await db.delete("package-" + discordid);

        res.redirect(theme.settings.redirect.removeaccountsuccess + "?success=REMOVEACCOUNT");

    });

    app.get("/userinfo", async (req, res) => {
        let theme = indexjs.get(req);

        if (!req.session.pterodactyl) return four0four(req, res, theme);
        
        let cacheaccount = await fetch(
            settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
            {
                method: "get",
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
        );
        if (await cacheaccount.statusText == "Not Found") return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) return four0four(req, res, theme);
        
        if (!req.query.id) return res.send({status: "missing id"});

        if (!(await db.get("users-" + req.query.id))) return res.send({status: "invalid id"});
    
        let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
    
        if (newsettings.api.client.oauth2.link.slice(-1) == "/")
          newsettings.api.client.oauth2.link = newsettings.api.client.oauth2.link.slice(0, -1);
      
        if (newsettings.api.client.oauth2.callbackpath.slice(0, 1) !== "/")
          newsettings.api.client.oauth2.callbackpath = "/" + newsettings.api.client.oauth2.callbackpath;
        
        if (newsettings.pterodactyl.domain.slice(-1) == "/")
          newsettings.pterodactyl.domain = newsettings.pterodactyl.domain.slice(0, -1);
        
        let packagename = await db.get("package-" + req.query.id);
        let package = newsettings.api.client.packages.list[packagename ? packagename : newsettings.api.client.packages.default];
        if (!package) package = {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0
        };
    
        package["name"] = packagename;
    
        let pterodactylid = await db.get("users-" + req.query.id);
        let userinforeq = await fetch(
          newsettings.pterodactyl.domain + "/api/application/users/" + pterodactylid + "?include=servers",
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${newsettings.pterodactyl.key}` }
            }
          );
        if (await userinforeq.statusText == "Not Found") {
            console.log("[WEBSITE] An error has occured while attempting to get a user's information");
            console.log("- Discord ID: " + req.query.id);
            console.log("- Pterodactyl Panel ID: " + pterodactylid);
            return res.send({ status: "could not find user on panel" });
        }
        let userinfo = await userinforeq.json();
    
        res.send({
          status: "success",
          package: package,
          extra: await db.get("extra-" + req.query.id) ? await db.get("extra-" + req.query.id) : {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0
          },
          userinfo: userinfo,
          coins: newsettings.api.client.coins.enabled == true ? (await db.get("coins-" + req.query.id) ? await db.get("coins-" + req.query.id) : 0) : null
        });
    });

    async function four0four(req, res, theme) {
        ejs.renderFile(
            `./themes/${theme.name}/${theme.settings.notfound}`, 
            await eval(indexjs.renderdataeval),
            null,
        function (err, str) {
            delete req.session.newaccount;
            if (err) {
                console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
                console.log(err);
                return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
            };
            res.status(404);
            res.send(str);
        });
    }

};

function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
  }
