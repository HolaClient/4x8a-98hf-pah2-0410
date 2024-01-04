/**
 *--------------------------------------------------------------------------
 * HolaClient v1.5.9
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2023 HolaClient
 *
 *--------------------------------------------------------------------------
 * subdomain.js - Subdomains management using API
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const settings = modules.settings;
const ejs = modules.ejs;
const appjs = modules.appjs;
const fetch = modules.fetch;
const wh = modules.wh;
const renderFile = modules.renderFile;
module.exports.load = async function (app, db) {
    /**
    *--------------------------------------------------------------------------
    * Defining get all subdomains endpoint
    *--------------------------------------------------------------------------
   */
    app.get("/api/application/subdomains", async (req, res) => {
        let isVerified = await verifyRequest(req, res);
        if (!isVerified) return;
        try {
            const subdomains = await getAllSubdomains();
            return res.json({ success: true, subdomains });
        } catch (error) {
            console.error(error);
            return res.json({ success: false, message: "An error occured while getting all subdomains!", error: error });
        }
    });
    /**
    *--------------------------------------------------------------------------
    * Defining get particular zone's subdomains endpoint
    *--------------------------------------------------------------------------
   */
    app.get("/api/application/subdomains/:zone", async (req, res) => {
        let isVerified = await verifyRequest(req, res);
        if (!isVerified) return;
        try {
            const subdomains = await getSubdomains(req.params.zone);
            res.json({ subdomains });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch subdomains" });
        }
    });
    /**
    *--------------------------------------------------------------------------
    * Defining create subdomains endpoint
    *--------------------------------------------------------------------------
   */
    app.post('/api/application/subdomains', async (req, res) => {
        try {
            const { subdomain, target, port } = req.body;

            const url = `https://api.cloudflare.com/client/v4/zones/${cloudflareZoneID}/dns_records`;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Email': cloudflareEmail,
                    'Authorization': `Bearer ${cloudflareAPIKey}`
                },
                body: JSON.stringify(
                    {
                        "type": "SRV",
                        "data": {
                            "service": "_minecraft",
                            "proto": "_tcp",
                            "name": subdomain,
                            "priority": 0,
                            "weight": 0,
                            "port": port,
                            "target": target
                        }
                    }
                )
            };

            const response = await fetch(url, options);
            const data = await response.json();

            if (response.ok && data.success) {
                res.status(200).json({ success: true, domain: data.result.data.name });
                console.log(`${req.session.userinfo.username} created a subdomain: ${data.result.data.name}`)
            } else {
                console.error('Failed to createing subdomain:', data.errors);
                res.status(500).json({ success: false, error: data.errors });
            }
        } catch (error) {
            console.error('Error creating subdomain:', error);
            res.status(500).json({ success: false, error: data.errors });
        }
    });
}
/**
*--------------------------------------------------------------------------
* Defining other functions
*--------------------------------------------------------------------------
*/
async function getSubdomains(zone) {
    try {
        const apiUrl = `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`;
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Auth-Email": settings.features.cloudflare.email,
                "X-Auth-Key": settings.features.cloudflare.api_key,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch subdomains: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();
        const subdomains = data.result.map((record) =>
            record.name.replace(`.${DOMAIN}`, "")
        );
        return subdomains;
    } catch (error) {
        throw error;
    }
}
async function getAllSubdomains() {
    try {
        const apiUrl = `https://api.cloudflare.com/client/v4/zones`;
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Auth-Email": settings.features.cloudflare.email,
                "X-Auth-Key": settings.features.cloudflare.api_key,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch subdomains: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();
        const zones = data.result.map((record) =>
            record.name.replace(`.${DOMAIN}`, "")
        );

        const subdomains = await getSubdomains(zones);

        return subdomains;
    } catch (error) {
        throw error;
    }
}
async function verifyRequest(req, res) {
    if (settings.api.enabled == true) {
        let key = req.headers['authorization'];
        if (key) {
            if (key == "Bearer " + settings.api.key) {
                return true;
            }
        }
    }
    let theme = page.get(req);
    page.render(theme.settings.notfound, req, res);
    return false;
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/