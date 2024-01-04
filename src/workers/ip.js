/**
 *--------------------------------------------------------------------------
 * worker.js - Multi threads worker file. [ABONDONED FEATURE]
 *--------------------------------------------------------------------------
*/
const { parentPort } = require('worker_threads');
const modules = require("../utils/modules");
const page = modules.page;

parentPort.on('message', async (message) => {
    if (message.task === 'processIP') {
        const ip = message.ip;
        const userinfo = message.userinfo;

        const ipv6Match = ip.match(/(?:[a-fA-F\d]{1,4}::?){1,7}[a-fA-F\d]{1,4}/);
        if (ipv6Match) {
            ip = ipv6Match[0];
        }
        if (!ipv6Match && ip.includes(':')) {
            ip = ip.split(':').pop();
        }

        if (newsettings.authentication.discord.ip["duplicate check"] == true) {
            let allips = await db.get("ips") || [];
            let mainip = await db.get("ip-" + userinfo.hcid);
            if (mainip) {
                if (mainip !== ip) {
                    allips = allips.filter(ip2 => ip2 !== mainip);
                    if (allips.includes(ip)) {
                        page.error("alternate", req, res);
                    }
                    allips.push(ip);
                    await db.set("ips", allips);
                    await db.set("ip-" + userinfo.hcid, ip);
                }
            } else {
                if (allips.includes(ip)) {
                    page.error("alternate", req, res);
                }
                allips.push(ip);
                await db.set("ips", allips);
                await db.set("ip-" + userinfo.hcid, ip);
            }
        }
        if (newsettings.authentication.discord.ip["trust x-forwarded-for"]) {
            let accountid = getCookie(req, "accountid");

            if (accountid) {
                if (accountid !== userinfo.hcid) {
                    return page.error("alternate", req, res);
                }
            }

            res.cookie('accountid', userinfo.hcid);
        }
    }
})
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/