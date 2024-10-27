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
            let b = { "Content-Type": "application/json", "x-auth-type": "holaclient/secret" };
            let c = await db.get("app", "console")
            if (c) b["Authorization"] = `Secret ${c.secret}`
            if (!c || !c.domain) {
                console.error("Error: 'c' or 'c.domain' is undefined");
                return;
            }
            let a = await fetch(`${c.domain}/api/X0/updates`, {
                method: "GET",
                headers: b
            });
            let d = await a.json();
            console.log(d)
            if (d.success == true) {
                d.data.forEach(i => download(i.identifier));
            }
        } catch (error) {
            System.err.println(error)
            return
        }
    };
    async function download(a) {
        try {
            let e = await db.get("app", "console")
            let b = await fetch(`${e.domain}/storage/X0/updates/${a}.jar`, {
                method: "GET",
                headers: {"Authorization": `Secret ${e.secret}`}
            });
            let c = await b.buffer()
            let d = path.join(__dirname, `../../../storage/updates`);
            if (!fs.existsSync(d)) { fs.mkdirSync(d, { recursive: true }) }
            await fs.promises.writeFile(d + `/${a}.jar`, c);
            update(a)
        } catch (error) {
            System.err.println(error)
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
            let g = fs.readdirSync(d).filter(i => i !== 'manifest.json' && i !== "migrate.js");
            let l = fs.readdirSync(d).find(i => i == 'migrate.js');
            if (l) {
                let m = path.join(d, l);
                require(m)()
            }
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
            await load('');
            let k = await db.get("app", "console")
            await fetch(`${k.domain}/api/X1/updates/${a}`, {
                method: "PATCH",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${k.secret}`
                }
            });
        } catch (error) {
            System.err.println(error);
            return
        };
    };
    async function load(route) {
        try {
            return new Promise((resolve, reject) => {
                const a = path.join(path.join(__dirname, '..', '..', '..', 'src', 'routes'), route);
                fs.readdir(a, async (err, files) => {
                    if (err) {
                        System.err.println(err);
                        return reject(err);
                    }
                    for (const i of files) {
                        const b = path.join(a, i);
                        if (fs.statSync(b).isDirectory()) {
                            await load(path.join(route, i));
                        } else if (i.endsWith('.js')) {
                            const c = require(b);
                            if (typeof c === 'function') {
                                c();
                            }
                        }
                    }
                    resolve();
                });
            });
        } catch (error) {
            System.err.println(error);
            return;
        }
    }
    cache()
    setInterval(() => { cache() }, 60000 * 5);
}
