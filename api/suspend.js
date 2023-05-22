const fetch = require('node-fetch');
const fs = require("fs");
const indexjs = require("../index.js");
const arciotext = (require("./arcio.js")).text;
const suspendjs = require("./suspend.js");
const ejs = require("ejs");
const chalk = require('chalk');
const { response } = require("express");
module.exports.load = async function(app, db) {
    module.exports.suspend = async function(discordid) {
        let newsettings = JSON.parse(fs.readFileSync("./newsettings.json").toString());
        if (newsettings.api.client.allow.overresourcessuspend !== true) return;
    
        let canpass = await indexjs.islimited();
        if (canpass == false) {
            setTimeout(
                async function() {
                    suspendjs.suspend(discordid);
                }, 1
            )
            return;
        };
    
        indexjs.ratelimits(1);
        let pterodactylid = await db.get("users-" + discordid);
        let userinforeq = await fetch(
            newsettings.pterodactyl.domain + "/api/application/users/" + pterodactylid + "?include=servers",
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${newsettings.pterodactyl.key}` }
            }
          );
        if (await userinforeq.statusText == "Not Found") {
            console.log("[WEBSITE] An error has occured while attempting to check if a user's server should be suspended.");
            console.log("- Discord ID: " + discordid);
            console.log("- Pterodactyl Panel ID: " + pterodactylid);
            return;
        }
        let userinfo = JSON.parse(await userinforeq.text());
    
        let packagename = await db.get("package-" + discordid);
        let package = newsettings.api.client.packages.list[packagename || newsettings.api.client.packages.default];
    
        let extra = 
            await db.get("extra-" + discordid) ||
            {
                ram: 0,	
                disk: 0,	
                cpu: 0,	
                servers: 0,
                databases: 0,
                backups: 0,
                allocations: 0
            };
    
        let plan = {
            ram: package.ram + extra.ram,
            disk: package.disk + extra.disk,
            cpu: package.cpu + extra.cpu,
            servers: package.servers + extra.servers,
            backups: package.backups + extra.backups,
            allocations: package.allocations + extra.allocations,
            databases: package.databases + extra.databases
        }
    
        let current = {
            ram: 0,	
            disk: 0,	
            cpu: 0,	
            databases: 0,
            backups: 0,
            allocations: 0,
            servers: userinfo.attributes.relationships.servers.data.length
        }
        for (let i = 0, len = userinfo.attributes.relationships.servers.data.length; i < len; i++) {
            current.ram = current.ram + userinfo.attributes.relationships.servers.data[i].attributes.limits.memory;
            current.disk = current.disk + userinfo.attributes.relationships.servers.data[i].attributes.limits.disk;
            current.cpu = current.cpu + userinfo.attributes.relationships.servers.data[i].attributes.limits.cpu;
            current.backups = current.backups + userinfo.attributes.relationships.servers.data[i].attributes.limits.backups;
            current.allocations = current.allocations + userinfo.attributes.relationships.servers.data[i].attributes.limits.allocations;
            current.databases = current.databases + userinfo.attributes.relationships.servers.data[i].attributes.limits.databases;
        };
    
        indexjs.ratelimits(userinfo.attributes.relationships.servers.data.length);
        if (current.ram > plan.ram || current.disk > plan.disk || current.cpu > plan.cpu || current.servers > plan.servers) {
            for (let i = 0, len = userinfo.attributes.relationships.servers.data.length; i < len; i++) {
                let suspendid = userinfo.attributes.relationships.servers.data[i].attributes.id;
                await fetch(
                    newsettings.pterodactyl.domain + "/api/application/servers/" + suspendid + "/suspend",
                    {
                      method: "post",
                      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${newsettings.pterodactyl.key}` }
                    }
                  );
            }
        } else {
            if (newsettings.api.client.allow.renewsuspendsystem.enabled == true) return;
            for (let i = 0, len = userinfo.attributes.relationships.servers.data.length; i < len; i++) {
                let suspendid = userinfo.attributes.relationships.servers.data[i].attributes.id;
                await fetch(
                    newsettings.pterodactyl.domain + "/api/application/servers/" + suspendid + "/unsuspend",
                    {
                      method: "post",
                      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${newsettings.pterodactyl.key}` }
                    }
                  );
            }
        };
    }
}
