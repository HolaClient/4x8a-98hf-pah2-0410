const settings = require('../../settings.json');

module.exports.load = async function (app, db) {
  app.get('/daily/status', async (req, res) => {
    if (!req.session.pterodactyl) {
      return res.redirect("/auth");
    }
  
    const userId = req.session.userinfo.email;
    const hasClaimed = await db.get(`dailycoins:${userId}`);
    const lastClaimTime = await db.get(`lastclaim:${userId}`);
  
    if (hasClaimed) {
      const currentTime = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
  
      if (currentTime - lastClaimTime > twentyFourHours) {
        await db.set(`dailycoins:${userId}`, false);
      }
    }
  
    res.json({ claimed: Boolean(hasClaimed) });
  });

  app.get('/myinfo', async (req, res) => {
    if (!req.session.pterodactyl) {
      return res.redirect("/auth");
    }
  
    const userId = req.session.userinfo.email;
    let myinfo = {
      username: req.session.userinfo.username,
      id: req.session.pterodactyl.id
    };
  
    res.json({ myinfo });
  });  

  app.get('/daily/claim', async (req, res) => {
    if (!req.session.pterodactyl) {
      return res.redirect("/auth");
    }

    const userId = req.session.userinfo.email;
    const hasClaimed = await db.get(`dailycoins:${userId}`);

    if (hasClaimed) {
      return res.redirect("../dashboard?err=ALREADYCLAIMED");
    }

    const coinsKey = `coins-${userId}`;
    const coins = await db.get(coinsKey);
    const newCoins = (coins || 0) + parseInt(settings.daily.coins);

    await db.set(coinsKey, newCoins);
    await db.set(`dailycoins:${userId}`, true);
    await db.set(`lastclaim:${userId}`, Date.now());

    return res.redirect("../dashboard?err=CLAIMED");
  });
};
