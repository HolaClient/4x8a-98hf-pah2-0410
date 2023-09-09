const fetch = require('node-fetch');
const cloudflareEmail = settings.features.cloudflare.email;
const cloudflareAPIKey = settings.features.cloudflare.api_key;
const cloudflareZoneID = settings.features.cloudflare.zone_id;


module.exports.load = async function (app, db) {
  app.get('/domain', async (req, res) => {
    try {
      const url = `https://api.cloudflare.com/client/v4/zones/${cloudflareZoneID}`;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Email': cloudflareEmail,
          'Authorization': `Bearer ${cloudflareAPIKey}`
        }
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
      
      if (response.ok) {
        const domain = data.result.name;
        res.status(200).json({ domain });
      } else {
        console.error('Failed to fetch domain:', data.errors);
        res.status(500).json({ error: 'Failed to fetch domain' });
      }
    } catch (error) {
      console.error('Error fetching domain:', error);
      res.status(500).json({ error: 'Failed to fetch domain' });
    }
  });

  app.get('/subdomains', async (req, res) => {
    try {
      let url = `https://api.cloudflare.com/client/v4/zones/${cloudflareZoneID}/dns_records`;

      let options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Auth-Email': `${cloudflareEmail}`, 'Authorization': `Bearer ${cloudflareAPIKey}`}
      };
      
      fetch(url, options)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        const domain = data.result.name;
        res.status(200).json({ data });
      } else {
        console.error('Failed to fetch domain:', data.errors);
        res.status(500).json({ error: 'Failed to fetch domain' });
      }
    } catch (error) {
      console.error('Error fetching domain:', error);
      res.status(500).json({ error: 'Failed to fetch domain' });
    }
  });
  
  app.post('/subdomain/create', async (req, res) => {
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