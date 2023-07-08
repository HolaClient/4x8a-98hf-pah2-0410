const fetch = require('node-fetch');
const settings = require('../../settings.json');

module.exports.load = async function (app, db) {
  const lpcodes = {};
  const cooldowns = {};

  function generateUserCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  app.get(`/earn/linkpays/generate`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/auth");

    if (cooldowns[req.session.userinfo.id] && cooldowns[req.session.userinfo.id] > Date.now()) {
      return res.redirect(`/earn`);
    } else if (cooldowns[req.session.userinfo.id]) {
      delete cooldowns[req.session.userinfo.id];
    }

    const dailyTotal = await db.get(`dailylinkpays-${req.session.userinfo.id}`);
    if (dailyTotal && dailyTotal >= settings.linkpays.dailyLimit) {
      return res.redirect(`/earn?err=REACHEDDAILYLIMIT`);
    }

    const userCode = generateUserCode();
    lpcodes[req.session.userinfo.id] = {
      code: userCode,
      generated: Date.now(),
      redeemed: false,
    };

    const link = `${settings.api.client.oauth2.link}/earn/linkpays/redeem/${userCode}`;
    const alias = generateUserCode()

    try {
      const response = await fetch(`https://linkpays.in/api?api=${settings.linkpays.apiKey}&url=${encodeURIComponent(link)}&alias=holaclient${alias}`);
      const data = await response.json();
      if (response.ok) {
        res.json({ link: data.shortenedUrl });
        console.log(`${req.session.userinfo.username} generated a linkpays link: `, data.shortenedUrl);
      } else {
        console.error('Error generating linkpays.io link:', data);
        res.status(500).json({ error: 'linkpaysERROR' });
      }
    } catch (error) {
      console.error('Error generating linkpays.io link:', error);
      res.status(500).json({ error: 'LINKPAYSERROR' });
    }
  });

  app.get(`/earn/linkpays/redeem/:code`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/");
    if (cooldowns[req.session.userinfo.id] && cooldowns[req.session.userinfo.id] > Date.now()) {
      return res.redirect(`/earn`);
    } else if (cooldowns[req.session.userinfo.id]) {
      delete cooldowns[req.session.userinfo.id];
    }
    const code = req.params.code;
    if (!code) return res.send('<body style="background-color: #1b1c1d;"><center><h1 style="color: white">Error Code: HCLP001</h1><br><h2 style="color: white">You can get more information about this code on our <a style="color: white" href="https://discord.gg/CvqRH9TrYK">support</a> server!</h2></center>');
    const usercode = lpcodes[req.session.userinfo.id];
    console.log("userinfo id:", req.session.userinfo.id);
    console.log("lpcodes:", lpcodes);
    if (!usercode) return res.redirect(`/earn`);
    if (usercode.code !== code) return res.redirect(`/earn`);
    if (usercode.redeemed) return res.redirect(`/earn`);
    usercode.redeemed = true;
    if (((Date.now() - usercode.generated) / 1000) < settings.linkpays.minTimeToComplete) {
      return res.send('<body style="background-color: #1b1c1d;"><center><h1 style="color: white">Error Code: HCLP002</h1><br><h2 style="color: white">You can get more information about this code on our <a style="color: white" href="https://discord.gg/CvqRH9TrYK">support</a> server!</h2></center>');
    }
    cooldowns[req.session.userinfo.id] = Date.now() + settings.linkpays.cooldown * 60 * 1000;
    await db.set(`dailylinkpays-${req.session.userinfo.id}`, 1);
    const coins = await db.get(`coins-${req.session.userinfo.id}`)
    await db.set(`coins-${req.session.userinfo.id}`, coins + settings.linkpays.coins)    
    res.redirect(`/earn?err=SUCCESSLINKPAYS`);
  });
};
