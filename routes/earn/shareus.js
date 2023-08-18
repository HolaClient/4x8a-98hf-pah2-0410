const fetch = require('node-fetch');
const settings = require('../../settings.json');

module.exports.load = async function (app, db) {
  const sucodes = {};
  const cooldowns = {};

  function generateUserCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  app.get(`/earn/shareus/generate`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/auth");

    if (cooldowns[req.session.userinfo.email] && cooldowns[req.session.userinfo.email] > Date.now()) {
      return res.redirect(`/earn`);
    } else if (cooldowns[req.session.userinfo.email]) {
      delete cooldowns[req.session.userinfo.email];
    }

    const dailyTotal = await db.get(`dailyshareus-${req.session.userinfo.email}`);
    if (dailyTotal && dailyTotal >= settings.shareus.dailyLimit) {
      return res.redirect(`/earn?err=REACHEDDAILYLIMIT`);
    }

    const userCode = generateUserCode();
    sucodes[req.session.userinfo.email] = {
      code: userCode,
      generated: Date.now(),
      redeemed: false,
    };

    const link = `${settings.api.client.oauth2.link}/earn/shareus/redeem/${userCode}`;

    try {
      const myHeaders = new Headers();
      myHeaders.append("Keep-Alive", "");
      myHeaders.append("Content-Type", "application/json");
      
      const body = JSON.stringify({
        "api_key": settings.shareus.apiKey,
        "monetization": true,
        "destination": `${encodeURIComponent(link)}`,
        "ad_page": 3,
        "category": "Entertainment",
        "tags": ["trendinglinks"],
        "monetize_with_money": false,
        "price": 0,
        "currency": "INR",
        "purchase_note": ""
      });
      
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
      };
    
      fetch("https://api.shareus.io/generate_link", requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status === "success") {
            res.json({ link: data.link });
            console.log(`${req.session.userinfo.username} generated a ShareUs link: `, data.link);
          } else {
            console.error('Error generating ShareUs.io link:', data);
            res.status(500).json({ data });
          }
        })
        .catch(error => {
          console.error('Error generating ShareUs.io link:', error);
          res.status(500).json({ error: error.message });
        });
    } catch (error) {
      console.error('Error generating ShareUs.io link:', error);
      res.status(500).json({ error: error.message });
    }
    
  });

  app.get(`/earn/shareus/redeem/:code`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/");
    if (cooldowns[req.session.userinfo.email] && cooldowns[req.session.userinfo.email] > Date.now()) {
      return res.redirect(`/earn`);
    } else if (cooldowns[req.session.userinfo.email]) {
      delete cooldowns[req.session.userinfo.email];
    }
    const code = req.params.code;
    if (!code) return res.send('<body style="background-color: #1b1c1d;"><center><h1 style="color: white">Error Code: HCSU001</h1><br><h2 style="color: white">You can get more information about this code on our <a style="color: white" href="https://discord.gg/CvqRH9TrYK">support</a> server!</h2></center>');
    const usercode = sucodes[req.session.userinfo.email];
    console.log("userinfo id:", req.session.userinfo.email);
    console.log("sucodes:", sucodes);
    if (!usercode) return res.redirect(`/earn`);
    if (usercode.code !== code) return res.redirect(`/earn`);
    if (usercode.redeemed) return res.redirect(`/earn`);
    usercode.redeemed = true;
    if (((Date.now() - usercode.generated) / 1000) < settings.shareus.minTimeToComplete) {
      return res.send('<body style="background-color: #1b1c1d;"><center><h1 style="color: white">Error Code: HCSU002</h1><br><h2 style="color: white">You can get more information about this code on our <a style="color: white" href="https://discord.gg/CvqRH9TrYK">support</a> server!</h2></center>');
    }
    cooldowns[req.session.userinfo.email] = Date.now() + settings.shareus.cooldown * 60 * 1000;
    await db.set(`dailyshareus-${req.session.userinfo.email}`, 1);
    const coins = (await db.get(`coins-${req.session.userinfo.email}`)) ?? 0
    await db.set(`coins-${req.session.userinfo.email}`, coins + settings.shareus.coins)    
    res.redirect(`/earn?err=SUCCESSSHAREUS`);
  });
};
