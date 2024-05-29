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
 * console.js - Bridge handler between HolaClient Console and this app.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    async function sync() {
        try {
            let a = await db.get("app", "console") || {}
            if (!a || !a.license) return
            if (!a.secret) await authenticate()
            a = await db.get("app", "console")
            let b = await db.get("app", "lastsync") ?? 0
            if (!b || (Date.now() - parseInt(b)) / (3600000) > 24) {
                let e = Buffer.from(crypt.gen62(1024), 'utf-8').toString('base64')
                let c = await fetch(`https://console.holacorp.org/api/authenticate/sync`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-type": "holaclient/secret",
                        "x-app-version": "X1",
                        "Authorization": `Secret ${a.secret}`
                    },
                    body: JSON.stringify({
                        "license": crypt.encrypt(a.license, a.secret),
                        "client": e,
                        "time": Date.now()
                    })
                });
                let d = await c.json()
                if (d.success === true) {
                    await db.set("app", "lastsync", Date.now())
                    a["keys"] = {"server": d.data, "client": e}
                    await db.set("app", "console", a)
                }
            }
        } catch (error) {
            console.error(error)
            return
        }
    }
    async function authenticate() {
        try {
            let c = await db.get("app", "console") || {}
            let a = await fetch(`https://console.holacorp.org/api/authenticate`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-type": "holaclient/license",
                    "x-app-version": "X1",
                    "Authorization": `License ${c.license}`
                }
            });
            let b = await a.json()
            if (b.success === true) {
                c["secret"] = b.data
                await db.set("app", "console", c)
            }
        } catch (error) {
            console.error(error)
            return
        }
    }
    sync()
    setInterval(() => {
        sync()
    }, 1000 * 60 * 30);
}
/**
 *--------------------------------------------------------------------------
 * End of file.
 *--------------------------------------------------------------------------
*/