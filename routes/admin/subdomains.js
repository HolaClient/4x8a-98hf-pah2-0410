const fetch = require('node-fetch');
const settings = require('../../settings.json')
const API_KEY = settings.cloudflare.api_key;
const EMAIL = settings.cloudflare.email;
const ZONE_ID = settings.cloudflare.zone_id;
const DOMAIN = settings.cloudflare.domain;

module.exports.load = async function(app, db) {


  app.get('/api/subdomains', async (req, res) => {
    try {
      const subdomains = await getSubdomains();
      res.json({ subdomains });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch subdomains' });
    }
  });

async function getSubdomains() {
  try {
    const apiUrl = `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Auth-Email': EMAIL,
        'X-Auth-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch subdomains: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const subdomains = data.result.map(record => record.name.replace(`.${DOMAIN}`, ''));
    return subdomains;
  } catch (error) {
    throw error;
  }
}}