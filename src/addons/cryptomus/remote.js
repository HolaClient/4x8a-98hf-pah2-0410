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
 * remote.js - Cryptomus remote functions handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const db = require('../../handlers/database.js');
/**
 *--------------------------------------------------------------------------
 * Exporting remote functions
 *--------------------------------------------------------------------------
*/
async function seed() {
    let a = {
        merchant: {
            id: ""
        },
        keys: {
            payment: "",
            payout: ""
        },
        currency: {
            default: "USD",
            to: "USDT"
        },
        lifespan: 3600
    }
    let b = await db.get("core", "billers") || [];
    if (b.find(i => i == "cryptomus") == undefined) b.push("cryptomus");
    await db.set("core", "billers", b);
    await db.set("cryptomus", "settings", a);
};

async function invoice(a, b, c) {
    let e = await db.get("cryptomus", "settings") || {}
    if (!e.merchant.id) return { success: false, message: "UNCONFIGURED" }
    let m = await db.get("cryptomus", a) ? crypt.gen62(24) : a;
    let f = {
        amount: b.credits,
        currency: e.currency.default,
        to_currency: e.currency.to,
        order_id: a,
        lifetime: e.lifespan,
        url_return: `${process.env.APP_URL}/market/packages`,
        url_callback: e.merchant.callback,
        url_success: `${process.env.APP_URL}/payments/gateways/cryptomus/${m}/complete`,
        from_referral_code: 'nk5Yow'
    };
    let g = JSON.stringify(f).replace(/\//mg, "\\/");
    let h = await fetch('https://api.cryptomus.com/v1/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'merchant': e.merchant.id,
            'sign': require('crypto').createHash('md5').update(Buffer.from(g).toString('base64') + e.keys.payment).digest('hex')
        },
        body: g
    });
    let j = await h.json();
    let k = await db.get("cryptomus", "pending") || []
    k.push({ "pending": true, "uuid": j.result.uuid, "order_id": j.result.order_id, "product": b.id, "user": c, "id": a, "secret": m, "date": Date.now() });
    await db.set("cryptomus", "pending", k);
    let l = await db.get('cryptomus', 'orders') || [];
    l.push(j.result)
    await db.set("cryptomus", "orders", l)
    let n = await db.get("billing", "orders") || []
    n.push({ "pending": true, "id": a, "product": b.id, "user": c, "secret": m, "date": Date.now(), "gateway": "cryptomus" })
    await db.set("billing", "orders", n)
    return { success: true, url: j.result.url }
}
module.exports = {
    seed, invoice
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/