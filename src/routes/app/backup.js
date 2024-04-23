/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclientx.tech
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright 2022-2024 HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * backup.js - Application backup handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const zip = require('adm-zip');
module.exports = async function () {
    app.get('/api/app/backup/:id', core.admin, async (req, res) => {
        let a = req.params.id
        if (a !== "all" || a !== "cloud" || a !== "local") {
            return
        }
    });

    //local backup
    async function backup() {
        let a = await db.get("core", "lastbackup")
        if (!a || (Date.now() - a) >= (24 * 60 * 60 * 1000)) {
            let b = path.resolve(__dirname, '../../../storage/database');
            let d = new zip()
            let e = await fs.promises.readdir(b);
            for (const i of e) {
                const f = path.join(b, i);
                const g = await fs.promises.stat(f);
                if (g.isFile()) {
                    d.addLocalFile(f, '', path.basename(f));
                }
            }
            let h = new Date()
            let j = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            d.writeZip(`storage/backups/${h.getDate()} ${j[h.getMonth()]} ${h.getFullYear()}.zip`);
            await db.set("core", "lastbackup", Date.now())
        }
    }
    if (process.env.APP_BACKUP == "true") {
        backup()
        setInterval(() => {
            backup()
        }, 1800000);
    }
}