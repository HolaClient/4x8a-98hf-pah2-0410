const settings = require("../../settings.json");
const fetch = require("node-fetch");
const fs = require("fs");
const indexjs = require("../../index.js");
const adminjs = require("./admin.js");
const ejs = require("ejs");
const log = require("../handlers/webhook");

module.exports.load = async function(app, db) {
    app.get("/setplan", async (req, res) => {
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
        let failredirect = theme.settings.redirect.failedsetplan || "/";
        if (!req.query.email) return res.redirect(`${failredirect}?err=MISSINGID`);
        if (!(await db.get("users-" + req.query.email)))
          return res.redirect(`${failredirect}?err=INVALIDID`);
        let successredirect = theme.settings.redirect.setplan || "/";
          let newsettings = JSON.parse(
            fs.readFileSync("./settings.json").toString()
          );
          if (!newsettings.api.client.packages.list[req.query.package])
            return res.redirect(`${failredirect}?err=INVALIDPACKAGE`);
          await db.set("package-" + req.query.email, req.query.package);
          adminjs.suspend(req.query.email);
          log(
            `set plan`,
            `${req.session.userinfo.username} set the plan of the user with the Email \`${req.query.email}\` to \`${req.query.package}\`.`
          );
          debuglog.admin(`${req.session.userinfo.username} set the plan of the user with the Email ${req.query.email} to ${req.query.package}.`)
          return res.redirect(successredirect + "?err=none");
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