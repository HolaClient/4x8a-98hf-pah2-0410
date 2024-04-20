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
 * billing.js - Global billing handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Exporting random bullshit.
 *--------------------------------------------------------------------------
*/
async function invoice(gateway, product) {
    let a = await db.get("addons", "active") || []
    let b = a.find(i => i.name == gateway)
    if (!b || b == undefined) return false
    let c = require(`../addons/${b.name}/remote.js`);
    let d = await db.get("products", "products") || []
    let e = d.find(i => i.id == product)
    if (!e || e == undefined) return false
    c.invoice(await uuid(), e)
}
async function pay() {}
async function check() {}
async function submit() {}
async function uuid() {
    let a = `${crypt.gen62(6)}-${crypt.gen62(6)}-${crypt.gen62(6)}-${crypt.gen62(6)}`
    let b = await db.get("billing", "invoices") || []
    let c = b.find(i = i.uuid == a)
    if (!c || c == undefined) {return a} else { a = `${crypt.gen62(6)}-${crypt.gen62(6)}-${crypt.gen62(6)}-${crypt.gen62(6)}`}
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/