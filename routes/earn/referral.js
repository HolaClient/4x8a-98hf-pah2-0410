const express = require('express');
const crypto = require('crypto');
const chalk = require('chalk')
const Keyv = require('keyv');
const app = express();
const db = new Keyv('sqlite://storage/databases/referral.sqlite');
const mdb = new Keyv('sqlite://storage/databases/db.sqlite');
const settings = require('../../settings.json');

app.use(express.json());

module.exports.load = async function (app) {
  app.get('/referral/info', async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect('/auth');
    const userEmail = req.session.userinfo.email;
    const referralResult = await db.get('referral_code-' + userEmail);
    let referralCode;
    if (referralResult && referralResult.referral_code) {
      referralCode = referralResult.referral_code;
    } else {
      referralCode = generateReferralCode();
      await db.set('referral_code-' + userEmail, { referral_code: referralCode, user_ip: req.ip, user_id: req.session.userinfo.id });
      await db.set('referral_code-' + referralCode, { user_email: userEmail, user_ip: req.ip, user_id: req.session.userinfo.id });
    }
    res.json({ referralCode: referralCode, email: userEmail });
  });

  app.post('/referral/redeem', async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect('/auth');
    if (!req.body || !req.body.referralCode) { 
      return res.json({ success: false, message: 'Invalid request. Missing referral code.' });
    }
    const { referralCode } = req.body;
    const userEmail = req.session.userinfo.email;
    const referralResult = await db.get('referral_code-' + referralCode);

    if (!referralResult) {
      return res.json({ success: false, message: 'Invalid referral code.' });
    } 
    if (!referralResult.user_email == userEmail) {
      return res.json({ success: false, message: 'Invalid referral code.' });
    } 
    if (await db.get("referrals-" + req.session.userinfo.email) == "1") {
      return res.json({ success: false, message: 'You have already claimed a referral code!' });
    }
    referralResult.user_ip = String(referralResult.user_ip);
    const userId = req.session.userinfo.id;
    const referrerEmail = referralResult.user_email;
    const referrerID = referralResult.user_id;
    const referrerIP = referralResult.user_ip;
    const referrerCoins = await mdb.get(`coins-${referrerEmail}`);
    const redeemerCoins = await mdb.get(`coins-${userEmail}`);
    if (referrerEmail === userEmail) {
      return res.json({ success: false, message: 'You cannot refer yourself.' });
    }
    if (req.ip === referrerIP) {
      console.log(chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.cyan(" [") + chalk.red("ALT") + chalk.cyan("] ") +  chalk.white(`${referrerEmail}(${referrerID}) is an ALT account of ${userEmail}(${userId})`));
      return res.json({ success: false, message: 'You cannot refer yourself.' });
    }

    const totalReferrerCoins = parseFloat(referrerCoins) + parseFloat(settings.referral.coins);
    await mdb.set(`coins-${referrerEmail}`, totalReferrerCoins);
    const totalRedeemerCoins = parseFloat(redeemerCoins) + parseFloat(settings.referral.referred);
    await mdb.set(`coins-${userEmail}`, totalRedeemerCoins);
    db.set("referrals-" + req.session.userinfo.email, 1)
    
    return res.json({ success: true, message: `Successfully redeemed that referral code! You got ${settings.referral.referred} coins.` });
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
