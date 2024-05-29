/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclientx.tech
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright 2022-2024 HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * settings.js - Default settings seeder.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Exporting core function
 *--------------------------------------------------------------------------
*/
module.exports = async function (db) {
let a = await db.get("settings", "appearance")
if (!a) await db.set("settings", "appearance", {
    name: "HolaClient-X1",
    logo: {
        url: "https://cdn.holaclientx.tech/logo.png",
        rotate: false,
        speed: "6s"
    },
    banner: "https://cdn.holaclientx.tech/production/X1/banners/index.png",
    description: "Your description here, change this in settings > appearance.",
    theme: {
        layouts: "default",
        admin: "default",
        landing: "default"
    },
    seo: {
        title: "HolaClient-X1",
        description: "The all new X series of HolaClient is now live!",
        keywords: "holaclient, X, holaclient-x, holaclientx"
    }
});
let b = await db.get("settings", "links")
if (!b) await db.set("settings", "links", {
    "github": "https://github.com/HolaClient/X",
    "website": "https://holaclientx.tech"
});
let c = await db.get("settings", "packages")
if (!c) await db.set("settings", "packages", {
    default: "default",
    list: {
        default: {
            display: "Default",
            price: 0,
            store: false,
            resources: {
                memory: 3072,
                disk: 5120,
                cpu: 150,
                servers: 1,
                databases: 1,
                allocations: 1,
                backups: 1
            }
        }
    }
});
let d = await db.get("settings", "smtp")
if (!d) await db.set("settings", "smtp", {
    enabled: false,
    host: "",
    port: 487,
    user: "",
    pass: "",
    mail: ""
});
let e = await db.get("pterodactyl", "settings")
if (!e) await db.set("pterodactyl", "settings", {
        domain: "",
        app: "",
        acc: "",
        deployments: {
            fees: 0
        }
});
let f = await db.get("app", "console")
if (!f) await db.set("app", "console", {"domain": "https://console.holacorp.org"});
let g = await db.get("settings", "antidiskfill")
if (!g) await db.set("settings", "antidiskfill", {enabled: false});
let h = await db.get("settings", "antivm")
if (!h) await db.set("settings", "antivm", {enabled: false});
let i = await db.get("settings", "authentication")
if (!i) await db.set("settings", "authentication", {
    enabled: true,
    antialt: {
        cookies: false,
        ip: false
    }
});
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/