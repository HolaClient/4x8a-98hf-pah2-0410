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
 * subdomains.js - Subdomains feature handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
module.exports.load = async function (app, db) {
    const settings = await modules.settings;
    const cfE = settings.features.cloudflare.email;
    const cfA = settings.features.cloudflare.key;
    const cfZ = settings.features.cloudflare.zones;
    app.get('/api/subdomains', core.auth, async (req, res) => {
        try {
            let res = await db.get('subdomains', req.session.userinfo.hcid)
            res.json({"success": true, "data": res})
        } catch (error) {
            console.error('Error fetching domain:', error);
            res.status(500).json({ error: 'Failed to fetch domain' });
        }
    });

    app.get('/api/subdomains/domains', core.auth, async (req, res) => {
        try {
            let domains = [];
            for (const zone of cfZ) {
                const url = `https://api.cloudflare.com/client/v4/zones/${zone}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Auth-Email': cfE,
                        'Authorization': `Bearer ${cfA}`
                    }
                };
    
                var response = await fetch(url, options);
                const data = await response.json();
                domains.push(data.result.name);
            }
            if (response.ok) {
                res.status(200).json({ domains });
            } else {
                console.error('Failed to fetch domain:', data.errors);
                res.status(500).json({ error: 'Failed to fetch domain' });
            }
        } catch (error) {
            console.error('Error fetching domain:', error);
            res.status(500).json({ error: 'Failed to fetch domain' });
        }
    });

    app.post('/api/subdomain/create', core.auth, async (req, res) => {
      try {
        let sdomains = await db.get('subdomains', req.session.userinfo.hcid) ?? []
        if (sdomains.length > 2) {
          res.json({success: false, message: "TOo many subdomains!"})
        }
        const { subdomain, target, port, zone } = req.body;
    
        const url = `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Email': cfE,
            'Authorization': `Bearer ${cfA}`
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
          let sdomains = await db.get('subdomains', req.session.userinfo.hcid) ?? []
          sdomains.push({"name": data.result.data.name, "data": data.result.data})
          await db.set("subdomains", req.session.userinfo.hcid, sdomains)
          res.status(200).json({ success: true, domain: data.result.data.name });
          dl.c(`${req.session.userinfo.username} created a subdomain: ${data.result.data.name}`)
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