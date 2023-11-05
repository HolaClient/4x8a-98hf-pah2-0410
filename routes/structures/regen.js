const newsettings = require('../../handlers/settings').settings();
const fs = require('fs');
const indexjs = require("../../index.js");
const fetch = require('node-fetch');

module.exports.load = async function(app, db) {

  app.get("/regen", async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login");
    if (newsettings.allow.regen !== true) return res.send("You cannot regenerate your password currently.");
    let newpassword = makeid(newsettings.passwordgenerator["length"]);
    req.session.password = newpassword;
    await db.set("password-" + req.session.userinfo.hcid, newpassword)
    req.session.userpass = await db.get("password-" + req.session.userinfo.hcid);

    await fetch(
      settings.pterodactyl.domain + "/api/application/users/" + req.session.pterodactyl.id,
      {
        method: "patch",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${settings.pterodactyl.key}`
        },
        body: JSON.stringify({
          username: req.session.pterodactyl.username,
          email: req.session.pterodactyl.email,
          first_name: req.session.pterodactyl.first_name,
          last_name: req.session.pterodactyl.last_name,
          password: newpassword
        })
      }
    );

    let theme = indexjs.get(req);
    res.redirect("/settings")
  });
};

function makeid(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
