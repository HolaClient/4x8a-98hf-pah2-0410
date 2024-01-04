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
 * referral.js - Referrals handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules")
const core = modules.core;
const page = modules.page;
module.exports.load = async function (app, db) {
  const settings = await modules.settings;
    app.get('/api/referral/info', core.auth, async (req, res) => {
      const hcid = req.session.userinfo.hcid;
      const referrals = await db.get('referrals', hcid);
      let rcode;
      if (referrals && referrals.code) {
        rcode = referrals.code;
      } else {
        rcode = modules.crypt.gen36(8);
        if (await db.get('referrals', rcode)) {
          rcode = modules.crypt.gen36(8);
        }
        await db.set('referrals', hcid, { code: rcode, ip: req.session.userinfo.ip.v6 });
        await db.set('referrals', rcode, { hcid: hcid, ip: req.session.userinfo.ip.v6 });
      }
      res.json({ code: rcode, hcid: hcid });
    });
  
    app.get('/api/referral/redeem/:code', core.auth, async (req, res) => {
      let language = req.session.language;
      const alerts = modules.alerts(language);
      if (!req.params || !req.params.code) { 
        return res.json({ success: false, message: alerts.a("MISSINGREFERRALCODE") });
      }
      const { code } = req.params;
      const hcid = req.session.userinfo.hcid;
      const referrals = await db.get('referrals' + code);
  
      if (!referrals) {
        return res.json({ success: false, message: alerts.a("INVALIDREFERRALCODE") });
      } 
      if (!referrals.hcid == hcid) {
        return res.json({ success: false, message: alerts.a("INVALIDREFERRALCODE") });
      } 
      if (await db.get("referrals", req.session.userinfo.hcid).referrals == "1") {
        return res.json({ success: false, message: 'You have already claimed a referral code!' });
      }
      referrals.ip = String(referrals.ip);
      const referrerHcid = referrals.ip;
      const referrerID = referrals.hcid;
      const referrerIP = referrals.ip;
      const referrerCoins = await db.get(`coins`, referrerHcid);
      const redeemerCoins = await db.get(`coins`, hcid);
      if (referrerHcid === hcid) {
        return res.json({ success: false, message: alerts.a("SELFREFERRAL") });
      }
      const totalReferrerCoins = parseFloat(referrerCoins) + parseFloat(settings.earn.referral.coins);
      await db.set(`coins`,`${referrerHcid}`, totalReferrerCoins);
      const totalRedeemerCoins = parseFloat(redeemerCoins) + parseFloat(settings.earn.referral.referred);
      await db.set(`coins`, `${hcid}`, totalRedeemerCoins);
      db.set("referrals", req.session.userinfo.hcid, 1)
      
      return res.json({ success: true, message: alerts.a("SUCCESSREFERRAL") });
    });
    
    
  };
