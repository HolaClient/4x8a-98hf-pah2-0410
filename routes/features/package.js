module.exports.load = async function(app, db) {
    app.get('/user/package/:hcid', async (req, res) => {
        try {
          const hcid = req.params.hcid;
          if (hcid !== req.session.userinfo.hcid) {
            return res.json({ "message": "wat da haillllll, you got da B+, I beat yo a** dumbass mother fucker thought that HolaClient is so unsecure to leak that user's useinfo huh? If I find you do it again I ma come over and fuck ya mama in front of ya. Understood?" });
          }
      
          const packagename = await db.get("package-" + hcid);
          const packageList = settings.packages.list;
          const defaultPackage = settings.packages.default;
          const packageName = packagename ? packageList[packagename].name : packageList[defaultPackage].name;
      
          res.json({ packageName });
        } catch (error) {
          console.error("Failed to fetch package information:", error);
          res.status(500).json({ error: "Failed to fetch package information" });
        }
      });
      
}