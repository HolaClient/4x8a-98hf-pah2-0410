const settings = require("../../settings");
const fetch = require("node-fetch");

module.exports.load = async function(app, db) {
    app.get('/user/package/:email', async (req, res) => {
        try {
          const email = req.params.email;
          if (email !== req.session.userinfo.email) {
            return res.json({ "message": "wat da haillllll, you got da B+, I beat yo a** dumbass mother fucker thought that HolaClient is so unsecure to leak that user's useinfo huh?" });
          }
      
          const packagename = await db.get("package-" + email);
          const packageList = settings.api.client.packages.list;
          const defaultPackage = settings.api.client.packages.default;
          const packageName = packagename ? packageList[packagename].name : packageList[defaultPackage].name;
      
          res.json({ packageName });
        } catch (error) {
          console.error("Failed to fetch package information:", error);
          res.status(500).json({ error: "Failed to fetch package information" });
        }
      });
      
}