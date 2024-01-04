module.exports.load = async function (app, db) {
  app.get('/daily/status', async (req, res) => {
    if (!req.session.pterodactyl) {
      return res.redirect("/login");
    }
    const userId = req.session.userinfo.hcid;
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

  app.get('/daily/claim', async (req, res) => {
    if (!req.session.pterodactyl) {
      return res.redirect("/login");
    }

    const userId = req.session.userinfo.hcid;
    const hasClaimed = await db.get(`dailycoins:${userId}`);

    if (hasClaimed) {
      return res.json({ "success": false, "message": "Already claimed!" });
    }

    const coinsKey = `coins-${userId}`;
    const coins = await db.get(coinsKey);
    const newCoins = (coins || 0) + parseInt(settings.earn.daily.coins);

    await db.set(coinsKey, newCoins);
    await db.set(`dailycoins:${userId}`, true);
    await db.set(`lastclaim:${userId}`, Date.now());

    return res.json({ "success": true, "message": `Successfully claimed ${settings.earn.daily.coins} coins` });
  });
};
