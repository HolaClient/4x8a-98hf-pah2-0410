const settings = require("../../settings.json");
const indexjs = require("../../index.js");
const ejs = require("ejs");
const chalk = require("chalk");

let currentlyonpage = {};

module.exports.load = async function(app, db) {
  app.get("/arc-sw.js", async (req, res) => {
    try {
      let newsettings = JSON.parse(require("fs").readFileSync("./settings.json"));
      if (newsettings.api.arcio.enabled == true) {
        res.type('.js');
        res.send(`!function(e){var t={};/* Rest of the code */}`);
      } else {
        let theme = indexjs.get(req);
        ejs.renderFile(
          `./views/${theme.name}/${theme.settings.notfound}`,
          await eval(indexjs.renderdataeval),
          null,
          function (err, str) {
            delete req.session.newaccount;
            if (err) {
              console.log(`[${chalk.blue("WEBSITE")}] An error has occurred on path ${req._parsedUrl.pathname}:`);
              console.log(err);
              return res.send("An error has occurred while attempting to load this page. Please contact an administrator to fix this.");
            }
            return res.send(str);
          }
        );
      }
    } catch (error) {
      console.log(`[${chalk.blue("WEBSITE")}] An error has occurred:`, error);
      return res.status(500).send("Internal Server Error");
    }
  });

  app.get("/arcioerror", async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login");
    let theme = indexjs.get(req);
    res.redirect(theme.settings.redirect.arcioerror + (req.query.err ? ("?arcioerr=" + req.query.err) : ""));
  });

  app.ws("/" + settings.api.arcio["afk page"].path, async (ws, req) => {
    try {
      if (!req.session.arcsessiontoken) return ws.close();

      let token = req.headers["sec-websocket-protocol"];

      if (!token) return ws.close();
      if (typeof token !== "string") return ws.close();

      if (token !== req.session.arcsessiontoken) return ws.close();

      let newsettings = JSON.parse(require("fs").readFileSync("./settings.json"));
      if (newsettings.api.arcio.enabled !== true) return ws.close();
      if (newsettings.api.arcio["afk page"].enabled !== true) return ws.close();
      if (currentlyonpage[req.session.userinfo.email]) return ws.close();

      currentlyonpage[req.session.userinfo.email] = true;

      let coinloop = setInterval(
        async function() {
          let usercoins = await db.get("coins-" + req.session.userinfo.email);
          usercoins = usercoins ? usercoins : 0;
          usercoins = usercoins + newsettings.api.arcio["afk page"].coins;
          if (usercoins > 999999999999999) return ws.close();
          await db.set("coins-" + req.session.userinfo.email, usercoins);
        }, newsettings.api.arcio["afk page"].every * 1000
      );

      ws.onclose = async() => {
        clearInterval(coinloop);
        delete currentlyonpage[req.session.userinfo.email];
      };
    } catch (error) {
      console.log(`[${chalk.blue("WEBSITE")}] An error has occurred in the WebSocket connection:`, error);
      ws.close();
    }
  });
};