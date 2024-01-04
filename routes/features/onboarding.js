const fs = require('fs');
const path = require('path');

module.exports.load = async function (app, db) {
    app.get("/onboarding/status", async (req, res) => {
        try {
            if (!req.session.userinfo || !req.session.pterodactyl) {
                return res.redirect('/auth');
            }
            const info = await db.get("onboarding-" + req.session.userinfo.hcid);
            if (!info) {
                return res.json({"status": false});
            } else {
                return res.json({"status": true});
            }
        } catch (error) {
            console.log(error)
        }
    });

    app.post("/onboarding/submit", async (req, res) => {
        try {
            if (!req.session.userinfo || !req.session.pterodactyl) {
                return res.redirect('/auth');
            }
            let info = await db.get("onboarding-" + req.session.userinfo.hcid);
            if (!info) {
            const { birthday, nickname, about, image, language, pfpi } = req.body;
            let user = {
                birthday,
                nickname,
                about,
                language,
                profile: pfpi,
                background: image,
                completed: true,
            };
            
            await db.set("onboarding-" + req.session.userinfo.hcid, user);               
            return res.redirect('/dashboard');
        } else {
            return res.redirect('/dashboard');
        }
        } catch (error) {
            console.log(error)
        }
    });

    app.post("/onboarding/edit", async (req, res) => {
        try {
            if (!req.session.userinfo || !req.session.pterodactyl) {
                return res.redirect('/auth');
            }
            let info = await db.get("onboarding-" + req.session.userinfo.hcid);
            if (!info) {
                return res.redirect('/onboarding')
            }
            const { birthday, nickname, about, image } = req.body;
            let user = {
                birthday,
                nickname,
                about,
                profile: info.profile,
                background: image,
                completed: true,
            };
            
            await db.set("onboarding-" + req.session.userinfo.hcid, user);               
            return res.redirect('/updateinfo?redirect=settings');
        } catch (error) {
            console.log(error)
        }
    });

    app.get("/onboarding/languages", async (req, res) => {
        try {
            if (!req.session.userinfo || !req.session.pterodactyl) {
                return res.redirect('/auth');
            }

            const langDir = path.join(__dirname, '..', '..', 'lang');
    
            fs.readdir(langDir, (err, files) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Unable to read directories' });
                }
    
                const directories = files.filter(file => fs.statSync(path.join(langDir, file)).isDirectory());
    
                const languageInfo = directories.map(directory => {
                    const fullPath = path.join(langDir, directory);
                    const fullLanguageName = fs.readFileSync(path.join(fullPath, 'name.txt'), 'utf-8');
                    return { code: directory, name: fullLanguageName };
                });
    
                return res.json({ languages: languageInfo });
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
}
