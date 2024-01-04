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
 * onboarding.js - Onboarding manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require('../../../../utils/modules')
const cors = require('cors')
module.exports.load = async function (app, db) {
  app.use(cors());
  const pterodactyl = await db.get('pterodactyl', 'settings')

  const ak = {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${pterodactyl.app}`,
    },
  };
  
  async function fd(ep) {
    const response = await fetch(`${pterodactyl.domain}/api/application/${ep}`, ak);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch ${ep} from Pterodactyl API`);
    }
  
    const data = await response.json();
    return data;
  }
  
  async function a() {
    const b = await fd("nodes");
    return b.data.reduce((c, d) => c + d.attributes.memory, 0);
  }
  
  async function e() {
    const f = await fd("nodes");
    return f.data.reduce((g, h) => g + h.attributes.disk, 0);
  }
  
  async function i() {
    const j = await fd("servers");
    return j.data.reduce((k, l) => k + l.attributes.limits.memory, 0);
  }
  
  async function m() {
    const n = await fd("servers");
    return n.data.reduce((o, p) => o + p.attributes.limits.disk, 0);
  }
  
  async function q() {
    const r = await fd("servers?include=allocations");
    return r.data.reduce((s, t) => s + t.attributes.relationships.allocations.data.length, 0);
  }
  
  async function u() {
    const v = await fd("nodes?include=allocations");
    return v.data.reduce((w, x) => w + x.attributes.relationships.allocations.data.length, 0);
  }
  
  app.get("/api/pterodactyl/stats/public", async (req, res) => {
    try {
      const y = await fd("users");
      const z = await fd("nodes");
      const aa = await fd("nodes?include=servers");
      const ab = await fd("locations");
  
      const ac = y.meta.pagination.total;
      const ad = z.meta.pagination.total;
  
      let ae = 0;
      if (aa.data && Array.isArray(aa.data)) {
        aa.data.forEach((af) => {
          if (af.attributes.relationships.servers && Array.isArray(af.attributes.relationships.servers.data)) {
            ae += af.attributes.relationships.servers.data.length;
          }
        });
      }
  
      const ag = ab.meta.pagination.total;
  
      res.json({
        users: ac,
        nodes: ad,
        servers: ae,
        locations: ag,
      });
    } catch (ah) {
      console.error(`Error while fetching Pterodactyl stats: ${ah}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  app.get("/api/pterodactyl/stats/admin", async (req, res) => {
    try {
      const ai = await Promise.all([
        a(),
        e(),
        i(),
        m(),
        q(),
        u(),
      ]);
  
      res.json({
        tmem: ai[0],
        tdisk: ai[1],
        umem: ai[2],
        udisk: ai[3],
        uport: ai[4],
        tport: ai[5],
      });
    } catch (aj) {
      console.error(`Error while fetching Pterodactyl stats: ${aj}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
};