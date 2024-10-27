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
 * users.js - User management for admins router.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get('/api/admin/subdomains', core.admin, async (req, res) => {
        try {
            const subdomains = await db.get("subdomains", "settings")
            if (subdomains && subdomains.enabled == "true") {

                core.log.subdomains(`${req.session.userinfo.username} viewed all zones.`)
                return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: cacheDB.get("cloudflare-zones") }));
            } else {
                return res.end(JSON.stringify({ success: false, message: alert("INACTIVE", req, res) }));
            }
        } catch (error) {
            handle(error, "Minor", 33)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.post('/api/admin/subdomains', core.admin, async (req, res) => {
        try {
            const subdomains = await db.get("subdomains", "settings")
            if (subdomains && subdomains.enabled == "true") {
                const records = await db.get("subdomains", "records")
                return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: records }));
            } else {
                return res.end(JSON.stringify({ success: false, message: alert("INACTIVE", req, res) }));
            }
        } catch (error) {
            handle(error, "Minor", 33)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.patch('/api/admin/subdomains', core.admin, async (req, res) => {
        try {
            refresh()
            core.log(`${req.session.userinfo.username} refreshed the domains list.`)
            return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
        } catch (error) {
            handle(error, "Minor", 49)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    refresh()
    cacheAllZones()
    async function refresh() {
        const subdomains = await db.get("subdomains", "settings")
        try {
            if (subdomains && subdomains.enabled == "true") {
                try {
                    let c = [];
                    for (let d of subdomains.cloudflare.zones) {
                        let e = 1;
                        let f = true;
                        while (f) {
                            const i = await fetch(`https://api.cloudflare.com/client/v4/zones/${d}/dns_records?page=${e}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'X-Auth-Email': subdomains.cloudflare.email,
                                    'Authorization': `Bearer ${subdomains.cloudflare.key}`
                                }
                            });
                            const j = await i.json();
                            if (i.ok) {
                                c.push(j);
                                f = j.result_info && j.result_info.page < j.result_info.total_pages;
                                e++;
                            } else {
                                System.err.println(`Failed to fetch data for zone ${d}, page ${e}:`, j.errors);
                                f = false;
                            }
                        }
                    }
                    await db.set('subdomains', 'records', c);
                } catch (error) {
                    System.err.println(error)
                }
            }
        } catch (error) {
            System.err.println(error)
        }
    }
    async function cacheAllZones() {
        const subdomains = await db.get("subdomains", "settings")
        try {
            if (subdomains && subdomains.enabled == "true") {
                try {
                    let a = 1;
                    let b = 1;
                    let c = [];
                    let d = await fetch(`https://api.cloudflare.com/client/v4/zones?page=${a}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Auth-Email': subdomains.cloudflare.email,
                            'Authorization': `Bearer ${subdomains.cloudflare.key}`
                        }
                    });
                    let e = await d.json();
                    b = e.result_info.total_pages;
                    c = c.concat(e.result);
                    while (a < b) {
                        a++;
                        let f = await fetch(`https://api.cloudflare.com/client/v4/zones?page=${a}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Auth-Email': subdomains.cloudflare.email,
                                'Authorization': `Bearer ${subdomains.cloudflare.key}`
                            }
                        });
                        let g = await f.json();
                        c = c.concat(g.result);
                    }
                    cacheDB.set("cloudflare-zones", c)
                } catch (error) {
                    System.err.println(error)
                }
            }
        } catch (error) {
            System.err.println(error)
        }
    }
    async function handle(error, a, subdomains) {
        try {
            const admins = await db.get("notifications", "admins") || [];
            const errors = await db.get("logs", "errors") || [];
            System.err.println(error)
            admins.push({
                title: `${a} Error`,
                message: `${error}`,
                type: "error",
                place: "admin-subdomains",
                date: Date.now()
            });
            errors.push({ date: Date.now(), error: error, file: "routes/admin/subdomains.js", line: subdomains });
            await db.set("notifications", "admins", admins);
            await db.set("logs", "errors", errors);
        } catch (err) {
            System.err.println(err)
        }
    }
}
