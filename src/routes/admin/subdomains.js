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
 * Loading modules
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    const a = await db.get("settings", "cloudflare");
    const b = await db.get("subdomains", "settings")
    if (b && b.enabled == true) {
        app.get('/api/admin/subdomains', core.admin, async (req, res) => {
            try {
                core.log(`${req.session.userinfo.username} viewed the subdomains of all servers.`)
                return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res), data: records }));
            } catch (error) {
                handle(error, "Minor", 33)
                return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
            }
        });
    
        app.post('/api/admin/subdomains', core.admin, async (req, res) => {
            try {
                refresh()
                core.log(`${req.session.userinfo.username} refreshed the domains list.`)
                return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
            } catch (error) {
                handle(error, "Minor", 49)
                return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
            }
        });

        app.put('/api/admin/subdomains', core.admin, async (req, res) => {
            try {
                let a = req.body
                let b = {
                    enabled: boolean(a.enabled),
                    max: parseInt(a.max)
                };
                let c = {
                    email: a.email,
                    zones: a.zones,
                    key: a.key
                };
                await db.set("subdomains", "settings", b);
                await db.set("settings", "cloudflare", c);
                core.log(`${req.session.userinfo.username} changed the settings of subdomains.`);
                return res.end(JSON.stringify({ success: true, message: alert("SUCCESS", req, res) }));
            } catch (error) {
                handle(error, "Minor", 57);
                return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
            }
        });
    
        refresh()
        async function refresh() {
            let c = [];
            for (let d of b.zones) {
                let e = 1;
                let f = true;
        
                while (f) {
                    const g = `https://api.cloudflare.com/client/v4/zones/${d}/dns_records?page=${e}`;
                    const h = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Auth-Email': b.email,
                            'Authorization': `Bearer ${b.key}`
                        }
                    };
        
                    const i = await fetch(g, h);
                    const j = await i.json();
        
                    if (i.ok) {
                        c.push(j);
                        f = j.result_info && j.result_info.page < j.result_info.total_pages;
                        e++;
                    } else {
                        console.error(`Failed to fetch data for zone ${zone}, page ${e}:`, j.errors);
                        f = false;
                    }
                }
            }
        
            await db.set('subdomains', 'records', c);
        }
        async function handle(error, a, b) {
            const admins = await db.get("notifications", "admins") || [];
            const errors = await db.get("logs", "errors") || [];
            console.error(error)
            admins.push({
                title: `${a} Error`,
                message: `${error}`,
                type: "error",
                place: "admin-subdomains",
                date: Date.now()
            });
            errors.push({ date: Date.now(), error: error, file: "routes/admin/subdomains.js", line: b });
            await db.set("notifications", "admins", admins);
            await db.set("logs", "errors", errors);
            return
        }
    }
}