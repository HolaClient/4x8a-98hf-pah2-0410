module.exports.load = async function (app, db) {
    app.get("/users/info", async (req, res) => {
        try {
            if (!req.session.userinfo || !req.session.pterodactyl) {
                return res.redirect('/auth');
            }
                const info = await db.get("onboarding-" + req.session.userinfo.hcid);
                if (!info) {
                    return res.json(info);
                } else {
                    return res.json(info);
                }
        } catch (error) {
            console.log(error)
        }
    })
}