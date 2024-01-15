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
 * resources.js - Administrative handler to manage resources & coins.
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
    app.get('/api/admin/subdomains', core.auth, async (req, res) => {
        try {
            let records = await db.get('subdomains', 'records')
            res.json({ "success": true, "records": records })
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });

    app.get('/api/admin/subdomains/refersh', core.auth, async (req, res) => {
        try {
            refresh()
            res.json({ "success": true })
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });

    refresh()
    async function refresh() {
        let all = [];

        for (const zone of cfZ) {
            let page = 1;
            let hasNextPage = true;

            while (hasNextPage) {
                const url = `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?page=${page}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Auth-Email': cfE,
                        'Authorization': `Bearer ${cfA}`
                    }
                };

                const response = await fetch(url, options);
                const data = await response.json();

                if (response.ok) {
                    all.push(data);
                    hasNextPage = data.result_info && data.result_info.page < data.result_info.total_pages;
                    page++;
                } else {
                    console.error(`Failed to fetch data for zone ${zone}, page ${page}:`, data.errors);
                    hasNextPage = false;
                }
            }
        }

        await db.set('subdomains', 'records', all)
    }

}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/