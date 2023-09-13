const fetch = require('node-fetch');
const newsettings = settings;
const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");

module.exports.load = async function (app, db) {
    app.get("/delete", async (req, res) => {
        if (!req.session.pterodactyl) return res.redirect("/auth");
        if (!req.query.id) return res.send("Missing id.");
        let theme = indexjs.get(req);
        if (newsettings.allow.server.delete == true) {
          if (req.session.pterodactyl.relationships.servers.data.filter(server => server.attributes.id == req.query.id).length == 0) return res.send("Could not find server with that ID.");
    
          let deletionresults = await fetch(
            settings.pterodactyl.domain + "/api/application/servers/" + req.query.id + "/force",
            {
              method: "delete",
              headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${settings.pterodactyl.key}`
              }
            }
          );
          let ok = await deletionresults.ok;
          if (ok !== true) return res.send("The panel is having some error regarding the delete function, please contact an administrator or try contacting HolaClient's support team for further help.");
          let pterodactylinfo = req.session.pterodactyl;
          pterodactylinfo.relationships.servers.data = pterodactylinfo.relationships.servers.data.filter(server => server.attributes.id.toString() !== req.query.id);
          req.session.pterodactyl = pterodactylinfo;
          await db.delete(`lastrenewal-${req.query.id}`)
          adminjs.suspend(req.session.userinfo.email);
          return res.redirect('/dashboard?err=DELETEDSERVER');
        } else {
          res.redirect(theme.settings.redirect.deleteserverdisabled ? theme.settings.redirect.deleteserverdisabled : "/");
        }
      });
    };