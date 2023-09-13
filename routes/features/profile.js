const multer = require('multer');
const path = require('path');

module.exports.load = async function (app, db) {
    const storage = multer.diskStorage({
        destination: 'cdn/avatars/',
        filename: async (req, file, cb, res)  => {
          const ext = path.extname(file.originalname);
          const filename = `${req.session.userinfo.hcid}${ext}`;
          cb(null, filename);

          let info = await db.get("onboarding-" + req.session.userinfo.hcid);
          if (!info) {
              return res.redirect('/onboarding')
          }
          let user = {
              birthday: info.birthday,
              nickname: info.nickname,
              about: info.about,
              background: info.background,
              profile: `cdn/avatars/${filename}`,
              completed: true,
          };
          await db.set("onboarding-" + req.session.userinfo.hcid, user);               
        },
      });

    const upload = multer({ storage: storage });

    app.post('/upload', upload.single('profileImage'), (req, res) => {
        if (!req.session.pterodactyl) return res.redirect("/auth");
        if (!req.file) {return res.status(400).json({ message: 'No file uploaded' });}
        res.json({ message: 'Pfp uploaded successfully, please relogin to load it as your pfp!' });
    });

}