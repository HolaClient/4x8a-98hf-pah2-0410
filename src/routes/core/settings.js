/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * resources.js - Administrative handler to manage resources & coins.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const path = modules.path;
const multer = require('multer')
const fetch = modules.fetch;
const wh = modules.wh;
const crypt = modules.crypt;
module.exports.load = async function (app, db) {
    const storage = multer.diskStorage({
        destination: 'cdn/avatars/',
        filename: async (req, file, cb, res) => {
            const ext = path.extname(file.originalname);
            const filename = `${req.session.userinfo.hcid}${ext}`;
            cb(null, filename);

            let userinfo = await db.get('users', req.session.userinfo.hcid)
            userinfo.avatar = `cdn/avatars/${filename}`
            await db.set('users', req.session.userinfo.hcid, userinfo)
        },
    });

    const upload = multer({ storage: storage, limits: { fileSize: 8388608 } });

    app.post('/api/upload/avatar', upload.single('profileImage'), core.auth, (req, res) => {
        if (!req.file) { return res.status(400).json({ message: 'No file uploaded' }); }
        if (req.file.size > 8388608) {
            return res.status(400).json({ message: 'Please upload an image less than 8 Mb' });
        }
        res.json({ message: 'Success!' });
    });

    app.get("/api/users/hcid/:dcid", async (req, res) => {
        let language = req.session.language;
        const alerts = modules.alerts(language);
        try {
            const dcid = req.params.dcid;
            if (!dcid) {
                return res.json({ "success": false, "message": alerts.a("MISSINGUSER") });
            }
            const dcu = await db.get("users", "discord") || [];
            const user = dcu.find(u => u.id == dcid);
            if (user) {
                res.json({ "success": true, "message": "", "id": user.hcid });
            } else {
                res.json({ "success": false, "message": alerts.a("INVALIDUSER") });
            }
        } catch (error) {
            console.error('Error occurred while changing DCId to HCId', error);
            res.status(500).json({ "success": false, "message": "An internal server error occurred." });
        }
    });

    app.get("/api/refresh", core.auth, async (req, res) => {
        try {
            const integrations = await db.get('integrations', req.session.userinfo.hcid) ?? []            
            let id = req.session.userinfo.hcid
            let hash = req.session.userinfo.password
            let balance = {
                coins: await db.get('coins', id),
                credits: await db.get('credits', id)
            }
            const pterodactyl = await db.get('pterodactyl', 'settings')
            let pinfo = await db.get('pterodactyl', req.session.userinfo.hcid)
            let acc = await fetch(pterodactyl.domain + "/api/application/users/" + pinfo.id + "?include=servers",
              {
                method: "GET",
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${pterodactyl.app}` }
              }
            );
            let accinfo = await acc.json();
            let info = accinfo.attributes
            await db.set('pterodactyl', req.session.userinfo.hcid, info)
            req.session.pterodactyl = info
            req.session.userinfo = await db.get("users", id);
            req.session.password = crypt.decrypt(hash)
            req.session.language = req.session.userinfo.language
            req.session.resources = await db.get('resources', id)
            req.session.permission = await db.get('permissions', id)
            req.session.balance = balance
            req.session.integrations = integrations
            req.session.settings = await db.get('settings', id)
            //They called me a madman

            if (req.query.redirect && typeof req.query.redirect === "string") {
                return res.redirect("/" + req.query.redirect);
            }
            res.redirect("/dashboard");
        } catch (error) {
            console.log(error)
            return res.redirect("/logout");
        }
    });

    app.get("/api/regen", core.auth, async (req, res) => {
        let newpassword = crypt.gen88(10)
        req.session.password = newpassword;
        let userinfo = await db.get('users', req.session.userinfo.hcid)
        userinfo.password = crypt.encrypt(newpassword)
        await db.set("users", req.session.userinfo.hcid, userinfo)    
        const integrations = await db.get('integrations', req.session.userinfo.hcid) ?? []
        for (const item of integrations) {
            require(`../../services/${item.name}/remote/functions`).password(newpassword, req.session.userinfo.hcid)
        }
        res.redirect("/settings")
      });
}
/**
*--------------------------------------------------------------------------
* End of the file
*--------------------------------------------------------------------------
*/