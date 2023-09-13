const indexjs = require("../../index.js");

module.exports.load = async function(app, db) {
    app.get("/logout", async (req, res) => {
        let theme = indexjs.get(req);
        if (!req.session.userinfo) return res.redirect("/");
        req.session.destroy(() => {
            return res.redirect(theme.settings.redirect.logout ? theme.settings.redirect.logout : "?err=LOGGEDOUT")
        });
    })
}