/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * system.js - Database migrator.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../../src/utils/modules.js')
const crypto = modules.crypto;
const crypt = modules.crypt;
const fs = modules.fs
const db = require('../../../drivers/db.js')
const keys = require('../../../app/keys/keys.json')
/**
 *--------------------------------------------------------------------------
 * Exporting setup.run()
 *--------------------------------------------------------------------------
*/
module.exports.run() = async function () {
if (!await db.get('core', "setup")) {
dl.m("System")
/**
*--------------------------------------------------------------------------
* Migrating settings
*--------------------------------------------------------------------------
*/
let setdb = await db.get('core', "settings");
if (!setdb) {
 let settings = {
    "version": "1.5.9",
    "name": "HolaClient",
    "background": "\/cdn\/background.jpg",
    "banner": "https:\/\/media.discordapp.net\/attachments\/1135147336771850250\/1135147435228934176\/image.png",
    "theme": "default",
    "timezone": "UTC",
    "logo": {
        "url": "https:\/\/cdn.holaclient.tech\/logo.png",
        "rotate": {
            "enabled": false,
            "speed": "6s"
        },
    },
    "website": {
        "port": 2000,
        "secret": "rIrvomn55G63mbNW",
        "hostname": "http:\/\/localhost:2000",
        "description": "The best reliable hosting ever.",
        "language": "en"
    },
    "seo": {
        "title": "HolaClient",
        "keywords": "HolaClient, Hosting, Freemium Minecraft Hosting, Minecraft, Free Servers",
        "description": "The best reliable hosting ever.",
        "image": "https:\/\/media.discordapp.net\/attachments\/1135147336771850250\/1156911777876025436\/image.png?ex=65310f8e&is=651e9a8e&hm=92d7c75be4076c52ca8a3b7e6a402f3bae60454590f17a609745f47d61c39273&="
    },
    "links": {
        "discord": "https:\/\/discord.gg\/CvqRH9TrYK",
        "website": "https:\/\/holaclient.tech",
        "status": "https:\/\/status.holaclient.tech"
    },
    "features": {
        "news": {
            "enabled": false,
            "content": "Hi, Welcome to HolaClient!"
        },
        "anti_pteroVM": {
            "enabled": false,
            "interval": 30,
            "level": "high"
        },
        "captcha": {
            "enabled": false,
            "site_key": ""
        },
        "purge": {
            "enabled": false,
            "keyword": "[Active]"
        },
        "status": {
            "show": {
                "nodes": true
            }
        },
        "early_supporters": 100,
        "maintenance": {
            "status": false,
            "admins": [
                "testify@holaclient.tech",
                "863452735998656512",
                "1069",
                "crazymath072"
            ],
            "note": "enter email, Discord ID, HCID or username."
        },
        "subdomain": {
            "enabled": false,
            "note": "requires cloudflare details!"
        },
        "cloudflare": {
            "email": "",
            "key": "",
            "zones": []
        },
        "security": {
            "enabled": true,
            "rate_limiter": true,
            "anti_crawler": true,
            "anti_ddos": true,
            "anti_ddos_cloudflare": false,
            "note": "anti_dddos_cloudflare requires cloudflare details!"
        },
        "smtp": {
            "enabled": false,
            "host": "smtp.example.com",
            "port": 1,
            "username": "",
            "password": ""
        },
        "bot": {
            "enabled": false,
            "token": "",
            "clientID": "",
            "ownerID": "",
            "adminRoleID": "",
            "guildID": "",
            "joinguild": {
                "_comment": "Set this to true if you want to make users forcefully join your server.",
                "enabled": false,
                "guildid": [
                    "Discord_Server_ID"
                ]
            }
        },
        "blacklist": {
            "users": [
            ],
            "country": [
                "IN"
            ],
            "note": "enter email, Discord ID, HCID or username in users and country code in country."
        },
        "debug": {
            "enabled": true,
            "log": {
                "admin": true,
                "users": true,
                "startup": true
            }
        }
    },
    "earn": {
        "daily": {
            "enabled": true,
            "coins": "20"
        },
        "linkvertise": {
            "enabled": true,
            "userid": "641981",
            "coins": 5,
            "dailyLimit": "null",
            "minTimeToComplete": "null",
            "timeToExpire": "null",
            "cooldown": "null"
        },
        "shareus": {
            "enabled": true,
            "apiKey": "JtPFh3glixSKXq2oM5fVDX88Snu2",
            "coins": 25,
            "dailyLimit": "null",
            "minTimeToComplete": "null",
            "timeToExpire": "null",
            "cooldown": "null"
        },
        "linkpays": {
            "enabled": true,
            "apiKey": "59d5df2f14b69d49e5a756e7e90696e2a65fe806",
            "coins": 25,
            "dailyLimit": "null",
            "minTimeToComplete": "null",
            "timeToExpire": "null",
            "cooldown": "null"
        },
        "gyanilinks": {
            "enabled": true,
            "apiKey": "f43918a0a673df8c825aba7ddc0dab82aa6087be",
            "coins": 25,
            "dailyLimit": "null",
            "minTimeToComplete": "null",
            "timeToExpire": "null",
            "cooldown": "null"
        },
        "referral": {
            "enabled": true,
            "coins": "50",
            "referred": "25",
            "uses": "9999999999999",
            "note": "Coins: (How much the referrer should get?), referred: (How much should the redeemer get?), uses: (How many times the a referral code can be used?)"
        },
        "j4r": {
            "enabled": true,
            "ads": [
                {
                    "name": "HostingConnect",
                    "invite": "https:\/\/discord.gg\/WA4p64Zufq",
                    "id": "1061893392503685120",
                    "coins": 500
                },
                {
                    "name": "HolaClient",
                    "invite": "https:\/\/discord.gg\/CvqRH9TrYK",
                    "id": "1038719273658499072",
                    "coins": 500
                }
            ]
        },
        "arcio": {
            "enabled": true,
            "widgetid": "none",
            "afk page": {
                "enabled": true,
                "path": "afkwspath",
                "every": 60,
                "coins": 1,
                "_comment4": "By default every 60 seconds you will get a coin."
            }
        }
    },
    "ads": {
        "enabled": false,
        "adsense": {
            "enabled": false,
            "clientid": ""
        },
        "ads": [
            {
                "name": "HolaClient",
                "title": "HolaClient",
                "redirect": "https:\/\/holaclient.tech",
                "image": "https:\/\/media.discordapp.net\/attachments\/1108054221456146534\/1117779127680905226\/Untitled.png?width=470&height=110",
                "note": "recommened image size is 470x130"
            },
        ]
    },
    "api": {
        "enabled": true,
        "key": "hcap_"+crypt.gen88(24),
        "client": {
            "enabled": true,
            "locations": {}
        }
    },
    "passwordgenerator": {
        "length": 8
    },
    "allow": {
        "signup": true,
        "newusers": true,
        "regen": true,
        "gift": {
            "status": true,
            "resources": true,
            "coins": true
        },
        "request": {
            "status": false,
            "coins": {
                "status": true,
                "limit": "400",
                "dailyLimit": "200",
                "note": "dailyLimit is the total limit of requests for an account."
            }
        },
        "overresourcessuspend": false,
        "server": {
            "create": true,
            "modify": true,
            "delete": true,
            "cost": "0",
            "note": "cost is the creation cost, Set it to 0 for free creation."
        },
        "renewals": {
            "status": false,
            "cost": 0,
            "delay": 14,
            "suspended": true,
            "note": "delay is in days."
        }
    },
    "authentication": {
        "discord": {
            "id": "",
            "secret": "",
            "link": "",
            "callbackpath": "\/api\/auth\/discord\/callback",
            "_comment3": "do not change callbackpath unless you know what you're doing!",
            "prompt": true,
            "verified": true,
            "alt": {
                "ip": true,
                "cookies": true
            },
            "ip": {
                "block": [
                ]
            }
        },
        "email": {
            "enabled": true,
            "alt": {
                "ip": true,
                "cookies": true
            },
            "ip": {
                "block": [
                ]
            }
        }
    },
    "packages": {
        "default": "default",
        "currency": "USD",
        "symbol": "$",
        "list": {
            "default": {
                "name": "Default",
                "resources": [
                    {
                        "name": "ram",
                        "unit": "MB",
                        "value": 3072
                    },
                    {
                        "name": "disk",
                        "unit": "MB",
                        "value": 5120
                    },
                    {
                        "name": "cpu",
                        "unit": "%",
                        "value": 100
                    },
                    {
                        "name": "servers",
                        "unit": "",
                        "value": 1
                    },
                    {
                        "name": "databases",
                        "unit": "",
                        "value": 1
                    },
                    {
                        "name": "backups",
                        "unit": "",
                        "value": 1
                    },
                    {
                        "name": "allocations",
                        "unit": "",
                        "value": 1
                    },
                    {
                        "name": "ipv4",
                        "unit": "",
                        "value": 1
                    }
                ]
            }
        },
        "rolePackages": {
            "roleServer": "Discord Server ID",
            "roles": {
                "Role ID": "Package Name"
            }
        }
    },
    "coins": {
        "enabled": true,
        "store": {
            "enabled": true,
            "plans": {
                "invalid": {
                    "cost": "100"
                }
            },
            "ram": {
                "cost": 8,
                "per": 1
            },
            "disk": {
                "cost": 6,
                "per": 1
            },
            "cpu": {
                "cost": 10,
                "per": 1
            },
            "servers": {
                "cost": 10,
                "per": 1
            },
            "databases": {
                "cost": 3,
                "per": 1
            },
            "allocations": {
                "cost": 3,
                "per": 1
            },
            "backups": {
                "cost": 3,
                "per": 1
            }
        },
        "blackmart": {
            "enabled": true,
            "ram": {
                "cost": 4,
                "per": 1
            },
            "disk": {
                "cost": 2,
                "per": 1
            },
            "cpu": {
                "cost": 8,
                "per": 1
            },
            "servers": {
                "cost": 5,
                "per": 1
            },
            "databases": {
                "cost": 3,
                "per": 1
            },
            "allocations": {
                "cost": 3,
                "per": 1
            },
            "backups": {
                "cost": 3,
                "per": 1
            }
        }
    },
    "webhook": {
        "status": false,
        "client": "",
        "admin": "",
        "actions": {
            "user": {
                "status": false
            },
            "admin": {
                "coins": true,
                "set resources": true,
                "remove resources": true,
                "add resources": true,
                "set plan": true,
                "create coupon": true,
                "revoke coupon": true,
                "remove account": true,
                "view ip": true,
                "signup": true,
                "created server": true,
                "gifted coins": true,
                "modify server": true,
                "bought servers": true,
                "bought ram": true,
                "bought cpu": true,
                "bought disk": true,
                "bought allocations": true,
                "bought databases": true,
                "bought backups": true,
                "sold servers": true,
                "sold ram": true,
                "sold cpu": true,
                "sold disk": true,
                "sold allocations": true,
                "sold databases": true,
                "sold backups": true
            }
        }
    },
    "ratelimits": {
        "global": {
            "max": "1000",
            "time": "60",
            "note": "Time is in minutes"
        },
        "API": {
        }
    }
}
await db.set('core', 'settings', settings)
}
/**
 *--------------------------------------------------------------------------
 * Registering system
 *--------------------------------------------------------------------------
*/
let lastuser = await db.get('core', "lastuser");
if (!lastuser) {
    let password = gen(32)
    keys.core.access = password
    const keysPath = 'app/keys/keys.json'
    fs.writeFileSync(keysPath, JSON.stringify(keys, null, 2));
    let system = {
        nickname: "HolaClient",
        name: {
            "first": "System",
            "last": "HolaClient"
        },
        hcid: 0,
        avatar: "https://cdn.holaclient.tech/logo.png",
        password: encrypt(password, keys.database.encryption),
        role: "system",
        permission: 10000,
        resources: null,
        servers: null,
        connections: {},
        devices: null,
        date: {
            created: Date.now(),
            modified: Date.now()
        },
        sessions: {
            status: true,
            secret: `hc.ss_${password}${password}I_love_Javascript`
        },
        "2fa": {
            status: false
        },
        ip: null,
    }
    await db.set('users', "0", system);
    await db.set('core', "lastuser", 0);
}
/**
*--------------------------------------------------------------------------
* Migrating permissions
*--------------------------------------------------------------------------
*/
let permissions = await db.get('permissions', 'roles');
if (!permissions) {
    async function set(p, v) {
        await db.set("permissions", p, v);
    }

    set("1", {permission: 1, intents: ["intents.guest"], users: [], roles: ["guest"]})
    set("2", {permission: 2, intents: ["intents.user"], users: [], roles: ["user"]})
    set("100", {permission: 100, intents: ["intents.mod"], users: [], roles: ["mod"]})
    set("200", {permission: 200, intents: ["intents.admin"], users: [], roles: ["admin"]})
    set("300", {permission: 300, intents: ["intents.board"], users: [], roles: ["board"]})
    set("400", {permission: 400, intents: ["intents.owner"], users: [], roles: ["owner"]})

    let roles = [
        "guest", "user", "mod", "admin", "board", "owner"
    ];

    await db.set("permissions", "roles", roles);

    for (const role of roles) {
        await set(role, {
            display: role.charAt(0).toUpperCase() + role.slice(1),
            intents: [`intents.${role}`],
            users: [],
            permission: role === "guest" ? 1 : role === "user" ? 2 : role === "mod" ? 100 : role === "admin" ? 200 : role === "board" ? 300 : 400
        });
    }
}
}
/**
*--------------------------------------------------------------------------
* Migrating resources
*--------------------------------------------------------------------------
*/
let resources = await db.get('resources', 'resources')
if (!resources) {
    let resources = [
        {name: "ram", display: "Memory", unit: "MB"},
        {name: "disk", display: "Storage", unit: "MB"},
        {name: "cpu", display: "CPU", unit: "%"},
        {name: "servers", display: "Servers", unit: null},
        {name: "allocations", display: "Allocations", unit: null},
        {name: "databases", display: "Databases", unit: null},
        {name: "backups", display: "Backups", unit: null}
    ];

    await db.set("resources", "resources", resources);
}
};
/**
 *--------------------------------------------------------------------------
 * Defining other functions
 *--------------------------------------------------------------------------
*/
function gen(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    const charactersLength = characters.length;
    const randomBytes = crypto.randomBytes(length);
    let result = '';

    for (let i = 0; i < length; i++) {
        const index = randomBytes[i] % charactersLength;
        result += characters.charAt(index);
    }

    return result;
}
function checkKeyL(key) {
    const requiredKeyL = 32;
    const currentKeyL = Buffer.from(key, 'utf-8').length;

    if (currentKeyL < requiredKeyL) {
        const paddingLength = requiredKeyL - currentKeyL;
        const padding = Buffer.alloc(paddingLength, '\0');
        return Buffer.concat([Buffer.from(key, 'utf-8'), padding], requiredKeyL);
    } else if (currentKeyL > requiredKeyL) {
        return Buffer.from(key, 'utf-8').slice(0, requiredKeyL);
    }

    return Buffer.from(key, 'utf-8');
}
function encrypt(text, key) {
    const keyBuffer = checkKeyL(key);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), hash: encrypted };
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/