module.exports.load = async function (app, db) {
    app.get("/birthday/status", async (req, res) => {
        try {
            if (!req.session.userinfo || !req.session.pterodactyl) {
                return res.redirect('/login');
            }
    
            const info = await db.get("onboarding-" + req.session.userinfo.hcid);
    
            if (!info) {
                return res.redirect('/onboarding');
            }
            if (!req.session.user) {
                return res.json({ "status": false });
            }
            const lastwished = await db.get("lastwished-" + req.session.userinfo.hcid);
            const today = new Date();
            const userBirthday = new Date(info.birthday);
    
            if (!lastwished) {
                if (userBirthday.getDate() === today.getDate() && userBirthday.getMonth() === today.getMonth()) {
                    return res.json({ "status": true, "wished": false });
                } else {
                    return res.json({ "status": false });
                }
            } else {
                if (lastwished.getDate() === userBirthday.getDate()) {
                    return res.json({ "status": true, "wished": true });
                } else {
                    return res.json({ "status": false });
                }
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ "error": "Internal Server Error" });
        }
    })    

    app.get("/birthday/wished", async (req, res) => {
        try {
            if (!req.session.userinfo || !req.session.pterodactyl) {
                return res.redirect('/login');
            }
            const info = await db.get("onboarding-" + req.session.userinfo.hcid);

            if (!info) {
                return res.redirect('/onboarding');
            } else {
                const today = new Date();
                await db.set("lastwished-" + req.session.userinfo.hcid, today);
            }

        } catch (error) {
            console.log(error)
        }
    })
}
