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
 * update.js - Application updater.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.get('/api/app/updates/history', core.admin, async (req, res) => {
        try {
            let a = await db.get("updates", "history") || []
            return core.json(req, res, true, "SUCCESS", a);
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, false, "ERROR", error);
        }
    });
    app.get('/admin/updates/history/:id', core.admin, async (req, res) => {
        try {
            let a = await db.get("updates", "history") || [];
            let b = a.find(i => i.identifier === req.params.id);
            if (!b || b == undefined) return res.end(fallback.error404());
            const appearance = await db.get("settings", "appearance") || {};
            const template = appearance.themes && appearance.themes.admin || "default";
            return core.html(req, res, `./resources/views/admin/${template}/updates/[id].ejs`, b)
        } catch (error) {
            handle(error, "Minor", 28);
            return core.json(req, res, false, "ERROR", error);
        }
    });
    async function cache() {
        try {
            let f = await fs.readdirSync(path.join(__dirname, "../../../storage/updates"));
            if (f.length !== 0) { f.forEach(i => { if (i.endsWith('.jar')) { update(i) } }) };
            let b = { "Content-Type": "application/json" };
            let c = await db.get("core", "license")
            if (c) b["Authorization"] = `Bearer ${c}`
            let a = await fetch('https://console.holacorp.org/api/X1/updates', {
                method: "GET",
                headers: b
            });
            let d = await a.json();
            if (d.success == true) {
                d.data.forEach(i => download(i));
            }
        } catch (error) {
            console.error(error)
            return
        }
    };
    async function download(a) {
        try {
            let b = await fetch(`https://console.holacorp.org/storage/X1/updates/${a}.jar`, {
                method: "GET",
                headers: {"Authorization": `Bearer ${await db.get("core", "license")}`}
            });
            let c = await b.buffer()
            let d = path.join(__dirname, `../../../storage/updates`);
            if (!fs.existsSync(d)) { fs.mkdirSync(d, { recursive: true }) }
            await fs.promises.writeFile(d + `/${a}.jar`, c);
            update(a)
        } catch (error) {
            console.error(error)
            return
        }
    };
    async function update(a) {
        try {
            a = a.replace('.jar', '');
            let b = path.resolve(__dirname, '../../../storage/updates');
            let c = `${b}/${a}.jar`;
            let d = `${b}/${a}`;
            let e = require('adm-zip');
            let f = new e(c);
            f.extractAllTo(d, true);
            let g = fs.readdirSync(d).filter(i => i !== 'manifest.json');
            g.forEach(i => {
                let h = path.join(d, i);
                let j = path.join(__dirname, '..', '..', '..', i);
                fse.moveSync(h, j, { overwrite: true });
            });
            let h = await db.get("updates", "history") || []
            let j = require(`${d}/manifest.json`)
            h.push(j)
            await db.set("updates", "history", h);
            if (j.remove && j.remove.length !== 0) {
                j.remove.forEach(i => {fse.remove(path.resolve(__dirname, i))});
            }
            fse.remove(c);
            fse.remove(d);
            for ([i] of Object.entries(app.routes)) { delete app.routes[i] };
            Promise.all([
                load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'admin')),
                load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'app')),
                load(path.join(__dirname, '..', '..', '..', 'src', 'routes', 'servers')),
                load(path.join(__dirname, '..', '..', '..', 'src', 'routes')),
            ]);
            await fetch(`https://console.holacorp.org/api/X1/updates/${a}`, {
                method: "PATCH",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${await db.get("core", "license")}`
                }
            });
        } catch (error) {
            console.error(error);
            return
        };
    };
    function load(a) {
        const b = fs.readdirSync(a).filter(i => i.endsWith('.js'));
        b.forEach(i => {
            const c = require(path.join(a, i));
            if (typeof c === 'function') { c() };
        });
        return true
    };
    cache()
    setInterval(() => { cache() }, 60000 * 5);
}