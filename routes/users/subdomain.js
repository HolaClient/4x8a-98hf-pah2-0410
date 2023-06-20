const express = require('express');
const fetch = require('node-fetch');
const settings = require('../../settings.json');

const cloudflareEmail = settings.cloudflare.email;
const cloudflareAPIKey = settings.cloudflare.api_key;
const cloudflareZoneID = settings.cloudflare.zone_id;

const app = express();

app.get('/domain', async (req, res) => {
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${cloudflareZoneID}`,
      {
        headers: {
          'X-Auth-Email': cloudflareEmail,
          'X-Auth-Key': cloudflareAPIKey,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    const domain = data.result.name;

    res.status(200).json({ domain });
  } catch (error) {
    console.error('Error fetching domain:', error);
    res.status(500).json({ error: 'Failed to fetch domain' });
  }
});

app.post('/create-srv-record', async (req, res) => {
  try {
    const { subdomain, target, port, priority, weight } = req.body;

    const recordData = {
      type: 'SRV',
      name: `_minecraft._tcp.${subdomain}`,
      content: `${priority} ${weight} ${port} ${target}`,
      priority,
      weight,
      port,
      target,
    };

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${cloudflareZoneID}/dns_records`,
      {
        method: 'POST',
        headers: {
          'X-Auth-Email': cloudflareEmail,
          'X-Auth-Key': cloudflareAPIKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recordData),
      }
    );
    const data = await response.json();
    
    if (data.success) {
      res.status(200).json({ success: true, domain: recordData.name });
    } else {
      console.error('Failed to create SRV record:', data.errors);
      res.status(500).json({ success: false, error: 'Failed to create SRV record' });
    }
  } catch (error) {
    console.error('Error creating SRV record:', error);
    res.status(500).json({ success: false, error: 'Failed to create SRV record' });
  }
});
