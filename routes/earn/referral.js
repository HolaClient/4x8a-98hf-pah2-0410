const express = require('express');
const crypto = require('crypto');
const chalk = require('chalk')
const Keyv = require('keyv');
const app = express();
const rdb = new Keyv('sqlite://storage/databases/referral.sqlite');

app.use(express.json());

module.exports.load = async function (app, db) {
  app.get('/referral/info', async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect('/login');
    const userHCID = req.session.userinfo.hcid;
    const referralResult = await rdb.get('referral_code-' + userHCID);
    let referralCode;
    if (referralResult && referralResult.referral_code) {
      referralCode = referralResult.referral_code;
    } else {
      referralCode = generateReferralCode();
      await rdb.set('referral_code-' + userHCID, { referral_code: referralCode, user_ip: req.ip, user_id: req.session.userinfo.id });
      await rdb.set('referral_code-' + referralCode, { user_hcid: userHCID, user_ip: req.ip, user_id: req.session.userinfo.id });
    }
    res.json({ referralCode: referralCode, hcid: userHCID });
  });

  app.get('/referral/redeem/:referralCode', async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect(`/auth/discord/login?redirect=referral/redeem/${req.params.referralCode}`);
    if (!req.params || !req.params.referralCode) { 
      return res.json({ success: false, message: 'Missing referral code.' });
    }
    const { referralCode } = req.params;
    const userHCID = req.session.userinfo.hcid;
    const referralResult = await rdb.get('referral_code-' + referralCode);

    if (!referralResult) {
      return res.json({ success: false, message: 'Invalid referral code.' });
    } 
    if (!referralResult.user_hcid == userHCID) {
      return res.json({ success: false, message: 'Invalid referral code.' });
    } 
    if (await rdb.get("referrals-" + req.session.userinfo.hcid) == "1") {
      return res.json({ success: false, message: 'You have already claimed a referral code!' });
    }
    referralResult.user_ip = String(referralResult.user_ip);
    const userId = req.session.userinfo.id;
    const referrerHcid = referralResult.user_hcid;
    const referrerID = referralResult.user_id;
    const referrerIP = referralResult.user_ip;
    const referrerCoins = await db.get(`coins-${referrerHcid}`);
    const redeemerCoins = await db.get(`coins-${userHCID}`);
    if (referrerHcid === userHCID) {
      return res.json({ success: false, message: 'You cannot refer yourself.' });
    }
    const totalReferrerCoins = parseFloat(referrerCoins) + parseFloat(settings.earn.referral.coins);
    await db.set(`coins-${referrerHcid}`, totalReferrerCoins);
    const totalRedeemerCoins = parseFloat(redeemerCoins) + parseFloat(settings.earn.referral.referred);
    await db.set(`coins-${userHCID}`, totalRedeemerCoins);
    rdb.set("referrals-" + req.session.userinfo.hcid, 1)
    
    return res.json({ success: true, message: `Successfully redeemed that referral code! You got ${settings.earn.referral.referred} coins.` });
  });
  
  
};

const generateReferralCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let referralCode = '';
  for (let i = 0; i < 6; i++) {
    referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return referralCode;
};
