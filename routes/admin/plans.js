const fetch = require("node-fetch");
const fs = require("fs");
const indexjs = require("../../index.js");
const adminjs = require("./admin.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function(app, db) {
    app.post("/admin/plans/set", async (req, res) => {
      try {
        let theme = indexjs.get(req);
        if (!req.session.pterodactyl) return four0four(req, res, theme);
        let cacheaccount = await fetch(
          settings.pterodactyl.domain +
          "/api/application/users/" +
          req.session.pterodactyl.id +
          "?include=servers",
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${settings.pterodactyl.key}`,
            },
          }
        );
        if ((await cacheaccount.statusText) == "Not Found")
          return four0four(req, res, theme);
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true)
          return four0four(req, res, theme);
        if (!req.body.user) return res.json({ "success": false, "message": alerts.MISSINGUSER });
          if (!settings.packages.list[req.body.package])
          return res.json({ "success": false, "message": alerts.COULDNOTFINDTHATPACKAGE });
          await db.set("package-" + req.body.user, req.body.package);
          const userinfo = await db.get("userinfo-" + req.body.user)
          adminjs.suspend(req.body.user);
          log(
            `set plan`,
            `${req.session.userinfo.username} set the plan of the user \`${userinfo.username}\` to \`${req.body.package}\`.`
          );
          debuglog.admin(`${req.session.userinfo.username} set the plan of the user ${userinfo.username} to ${req.body.package}.`)
          return res.json({ "success": true, "message": alerts.CHANGEDPLAN });
      } catch (error) {
        return res.json({ "success": false, "message": "An error occured" });
      }
      });
      
    async function four0four(req, res, theme) {
        ejs.renderFile(
            `./views/${theme.name}/${theme.settings.unauthorized}`,
            await eval(indexjs.renderdataeval),
            null,
            function(err, str) {
                delete req.session.newaccount;
                if (err) {
                    console.log(
                        `[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`
                    );
                    console.log(err);
                    return res.send(
                        "An error has occured while attempting to load this page. Please contact an administrator to fix this."
                    );
                }
                res.status(403);
                res.send(str);
            }
        );
    }
}