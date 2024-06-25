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
 * subdomains.js - User management for admins router.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get('/api/servers/subdomains', core.auth, async (req, res) => {
        try {
            const subdomains = await db.get("subdomains", "settings")
            if (subdomains && subdomains.enabled !== "true") return core.json(req, res, false, "INACTIVE")
            let b = []
            let c = await cacheDB.get("cloudflare-users-zones") || await refresh()
            for (let i of c) {
                b.push(i.name)
            }
            let a = await db.get("subdomains", req.session.userinfo.id) || {
                used: 0,
                total: subdomains?.max ?? 1,
                list: []
            }
            a["zones"] = b
            return core.json(req, res, true, "SUCCESS", a)
        } catch (error) {
            System.err.println(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });
    app.post('/api/servers/:id/subdomains', core.auth, async (req, res) => {
        try {
            const subdomains = await db.get("subdomains", "settings");
            const pterodactyl = await db.get("pterodactyl", "settings");
            if (subdomains && subdomains.enabled !== "true") {
                return core.json(req, res, false, "INACTIVE");
            }
            let a = req.params.id;
            await core.server(req, res, a);
            let b = await db.get("subdomains", req.session.userinfo.id) || {
                used: 0,
                total: subdomains?.max ?? 1,
                list: [],
            };
            if (b && b.used >= parseInt(b.total)) {
                return core.json(req, res, false, "INSUFFICIENT");
            }
            b["used"] = (parseInt(b.used) ?? 0) + 1;
            if (!Array.isArray(b.list)) {
                b["list"] = [];
            }
            let c = await cacheDB.get("cloudflare-users-zones");
            let d = c.find(i => i.name === req.body.domain);
            let e = await fetch(`${pterodactyl.domain}/api/client/servers/${a}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${pterodactyl.acc}`,
                },
            });
            let f = await e.json();
            f = f.attributes;
            let g = await fetch(`https://api.cloudflare.com/client/v4/zones/${d.id}/dns_records`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Email': subdomains.cloudflare.email,
                    'Authorization': `Bearer ${subdomains.cloudflare.key}`
                },
                body: JSON.stringify({
                    "type": "SRV",
                    "data": {
                        "service": "_minecraft",
                        "proto": "_tcp",
                        "name": req.body.subdomain,
                        "priority": 0,
                        "weight": 0,
                        "port": f.relationships.allocations.data[0].attributes.port,
                        "target": `${f.relationships.allocations.data[0].attributes.ip_alias || f.relationships.allocations.data[0].attributes.ip}`
                    }
                })
            });
            let h = await g.json();
            b["list"].push({ server: a, result: h?.result });
            if (h.success === true) {
                await db.set("subdomains", req.session.userinfo.id, b);
                return core.json(req, res, true, "SUCCESS", b);
            } else if (h?.errors && h.errors[0]?.code === 81058) {
                await db.set("subdomains", req.session.userinfo.id, b);
                return core.json(req, res, true, "SUCCESS", b);
            } else {
                return core.json(req, res, false, "ERROR", h?.errors[0]?.message || " Fucked level 4");
            }
        } catch (error) {
            System.err.println(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });
    app.delete('/api/servers/:id/subdomains/:subdomain', core.auth, async (req, res) => {
        try {
            const subdomains = await db.get("subdomains", "settings");
            if (subdomains && subdomains.enabled !== "true") {
                return core.json(req, res, false, "INACTIVE");
            }
            let a = req.params.id;
            await core.server(req, res, a);
            let b = await db.get("subdomains", req.session.userinfo.id)
            if (!Array.isArray(b.list)) {
                return core.json(req, res, false, "403")
            }
            let c = b.list.find(i => i.result.id == req.params.subdomain)
            if (c === -1) return core.json(req, res, false, "404")
            let g = await fetch(`https://api.cloudflare.com/client/v4/zones/${c.result.zone_id}/dns_records/${c.result.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Email': subdomains.cloudflare.email,
                    'Authorization': `Bearer ${subdomains.cloudflare.key}`
                }
            });
            let h = await g.json();
            b.list.filter(i => i.result.id !== req.params.subdomain)
            if (h.success === true) {
                await db.set("subdomains", req.session.userinfo.id, b);
                return core.json(req, res, true, "SUCCESS");
            } else if (h?.errors && h.errors[0]?.code === 81058) {
                await db.set("subdomains", req.session.userinfo.id, b);
                return core.json(req, res, true, "SUCCESS");
            } else {
                return core.json(req, res, false, "ERROR", h?.errors[0]?.message || " Fucked level 4");
            }
        } catch (error) {
            System.err.println(error)
            return core.json(req, res, false, "ERROR", error)
        }
    });
    refresh()
    async function refresh() {
        const subdomains = await db.get("subdomains", "settings")
        if (subdomains && subdomains.enabled == "true") {
            let a = await db.get("subdomains", "settings")
            let b = []
            for (let i of a.cloudflare.zones) {
                let c = await fetch(`https://api.cloudflare.com/client/v4/zones/${i}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Auth-Email': subdomains.cloudflare.email,
                        'Authorization': `Bearer ${subdomains.cloudflare.key}`
                    }
                });
                let d = await c.json()
                b.push(d.result)
            }
            cacheDB.set("cloudflare-users-zones", b)
            return b
        }
    }
}