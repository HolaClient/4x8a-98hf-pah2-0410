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
 * daily.js - Daily coins handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules")
const core = modules.core;
module.exports.load = async function (app, db) {
  const settings = await modules.settings;
  app.get('/api/daily', core.auth, async (req, res) => {
    const id = req.session.userinfo.hcid;
    const daily = await db.get('daily', id);
  
    if (daily && daily.lastclaim) {
      const last = daily.lastclaim;
      if (Date.now() - last > 86400000) {
        let updatedData = { status: true, lastclaim: last };
        await db.set('daily', id, updatedData);
      }
    }
  
    res.json({ status: Boolean(daily) });
  });
  
  app.get('/api/daily/claim', core.auth, async (req, res) => {
    const id = req.session.userinfo.hcid;
    const dailyy = await db.get('daily', id);
    
    if (!dailyy) {
      let initialData = { status: false, lastclaim: null };
      await db.set('daily', id, initialData);
    }
    
    const daily = await db.get('daily', id);
    const lastClaimTimestamp = daily.lastclaim ?? null;
  
    if (!lastClaimTimestamp || Date.now() - lastClaimTimestamp > 86400000) {
      const coins = await db.get('coins', id);
      const newCoins = (coins || 0) + parseInt(settings.earn.daily.coins);
    
      await db.set('coins', id, newCoins);
  
      let updatedData = { status: true, lastclaim: Date.now() };
      await db.set('daily', id, updatedData);
  
      let claims = await db.get('daily', `claims-${id}`) ?? [];
      claims.push(Date.now());
      await db.set('daily', `claims-${id}`, claims);
  
      return res.json({
        success: true,
        message: `Successfully claimed ${settings.earn.daily.coins} coins`
      });
    } else {
      let left = Date.now() - lastClaimTimestamp;
      let next = Math.ceil((86400000 - left) / (1000 * 60 * 60));
      return res.json({
        success: false,
        message: next < 1
          ? `You've already claimed today's coins. Come back in ${(next * 60).toFixed(2)} minutes to receive more.`
          : next === 1
          ? `You've already claimed today's coins. Come back in an hour to receive more.`
          : `You've already claimed today's coins. Come back in ${next} hours to receive more.`
      });
      
    }
  });  
};
