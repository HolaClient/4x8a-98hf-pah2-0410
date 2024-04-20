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
 * gateway.js - Cryptomus billing system handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const admins = await db.get("notifications", "admins") || [];
    const errors = await db.get("logs", "errors") || [];
    const config = await db.get('cryptomus', 'settings')

    app.get("/api/payments/gateways/cryptomus/:id", core.auth, async (req, res) => {
        try {
            if (typeof req.params.id !== "number") return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            const a = crypt.gen62(24);
            const j = crypt.gen62(36);
            const b = await db.get("cryptomus", a) ? crypt.gen62(24) : a;
            const e = await db.get("products", req.params.id);
            if (!e) return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            const c = {
                amount: e.price,
                currency: config.currency.default,
                to_currency: config.currency.to,
                order_id: b,
                lifetime: config.payment.lifespan,
                url_return: `${process.env.APP_URL}/billing/invoice/${b}`,
                url_callback: config.merchant.callback,
                url_success: `${process.env.APP_URL}/payments/gateways/cryptomus/${j}/complete`,
                from_referral_code: 'nk5Yow'
            };
            const f = JSON.stringify(c).replace(/\//mg, "\\/");
            const sign = require('crypto').createHash('md5').update(Buffer.from(f).toString('base64') + config.merchant.key).digest('hex');
            const response = await fetch('https://api.cryptomus.com/v1/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'merchant': config.merchant.id,
                    'sign': sign
                },
                body: f
            });
            const d = await response.json();
            const g = await db.get("cryptomus", "pending") || []
            let h = await db.get('cryptomus', 'orders') || [];
            await db.set('cryptomus', b, { "pending": true, "uuid": d.result.uuid, "order_id": d.result.order_id, "product": req.params.id, "user": req.session.userinfo.id, "id": b, "secret": j, "date": Date.now() });
            g.push({ "pending": true, "uuid": d.result.uuid, "order_id": d.result.order_id, "product": req.params.id, "user": req.session.userinfo.id, "id": b, "secret": j, "date": Date.now() });
            h.push(d.result);
            await db.set('cryptomus', 'orders', h);
            await db.set("cryptomus", "pending", g);
            core.log(`${req.session.userinfo.username} created an invoice with ID: ${b}.`);
            return res.end(JSON.stringify({ "success": true, "message": alert("SUCCESS", req, res), data: d.result.url }));
        } catch (error) {
            handle(error, "Minor", 51)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/payments/gateways/cryptomus/complete/:id", core.auth, async (req, res) => {
        try {
            let a = req.params.id;
            if (typeof a !== "string") return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            let aa = await db.get("cryptomus", "pending");
            let aaa = aa.find(aaaa => aaaa.secret == a);
            let b = await db.get('cryptomus', aaa);
            if (!b) return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            let c = await db.get("users", b.user)
            if (!c) return res.end(JSON.stringify({ "success": false, "message": alert("INVALIDUSER", req, res) }));
            let d = await db.get("products", b.product)
            if (!d) return res.end({ "success": false, "message": alert("INVALIDPRODUCT", req, res) });
            if (b.pending == false) return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            if (d.type == "permission") {
                c.permissions.roles.push(d.role);
                c.permissions.level = Math.max(c.permissions.level, d.level);
                await db.set("users", b.user, c);
            } else if (d.type == "resources") {
                let e = await db.get('resources', b.user);
                for (let [key, value] of Object.entries(d.resources)) {
                    e[key] = e[key] + value;
                }
                await db.set("resources", b.user, e);
            } else if (d.type == "economy") {
                let f = await db.get("economy", b.user)
                f.credits += parseFloat(d.economy.credits)
                f.coins += parseFloat(d.economy.coins)
                await db.set("economy", b.user, f)
            } else {
                if (d.permissions) {
                    c.permissions.roles.push(d.permissions.role);
                    c.permissions.level = Math.max(c.permissions.level, d.permissions.level);
                    await db.set("users", b.user, c);
                };
                if (d.resources) {
                    let e = await db.get('resources', b.user);
                    for (let [key, value] of Object.entries(d.resources)) {
                        e[key] = e[key] + value;
                    }
                    await db.set("resources", b.user, e);
                };
                if (d.economy) {
                    let f = await db.get("economy", b.user)
                    f.credits += parseFloat(d.economy.credits)
                    f.coins += parseFloat(d.economy.coins)
                    await db.set("economy", b.user, f)
                };
            }
            core.log(`${req.session.userinfo.username} successfully paid the invoice with ID: ${a}.`);
            res.redirect('/billing/success/', a);
        } catch (error) {
            handle(error, "Minor", 95)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    app.get("/api/payments/gateways/cryptomus/status/:id", core.auth, async (req, res) => {
        try {
            let a = req.params.id;
            if (typeof a !== "string") return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
            let b = await db.get("cryptomus", a)
            if (!b) return res.end({ "success": false, "message": alert("INVALID", req, res) });
            await db.set('cryptomus', b, { "pending": true, "product": req.params.id, "user": req.session.userinfo.id, "id": b, "secret": j, "date": Date.now() });
            const f = JSON.stringify({ uuid: b.uuid }).replace(/\//mg, "\\/");
            const sign = require('crypto').createHash('md5').update(Buffer.from(f).toString('base64') + config.merchant.key).digest('hex');
            const response = await fetch('https://api.cryptomus.com/v1/payment/info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'merchant': config.merchant.id,
                    'sign': sign
                },
                body: f
            });
            const d = await response.json();
            if (d.result.payment_status == "paid" && b.pending == true) {
                let c = await db.get("users", b.user)
                if (!c) return res.end(JSON.stringify({ "success": false, "message": alert("INVALIDUSER", req, res) }));
                let d = await db.get("products", b.product)
                if (!d) return res.end(JSON.stringify({ "success": false, "message": alert("INVALIDPRODUCT", req, res) }));
                if (b.pending == false) return res.end(JSON.stringify({ "success": false, "message": alert("INVALID", req, res) }));
                if (d.type == "permission") {
                    c.permissions.roles.push(d.role);
                    c.permissions.level = Math.max(c.permissions.level, d.level);
                    await db.set("users", b.user, c);
                } else if (d.type == "resources") {
                    let e = await db.get('resources', b.user);
                    for (let [key, value] of Object.entries(d.resources)) {
                        e[key] = e[key] + value;
                    }
                    await db.set("resources", b.user, e);
                } else if (d.type == "economy") {
                    let f = await db.get("economy", b.user)
                    f.credits += parseFloat(d.economy.credits)
                    f.coins += parseFloat(d.economy.coins)
                    await db.set("economy", b.user, f)
                } else {
                    if (d.permissions) {
                        c.permissions.roles.push(d.permissions.role);
                        c.permissions.level = Math.max(c.permissions.level, d.permissions.level);
                        await db.set("users", b.user, c);
                    };
                    if (d.resources) {
                        let e = await db.get('resources', b.user);
                        for (let [key, value] of Object.entries(d.resources)) {
                            e[key] = e[key] + value;
                        }
                        await db.set("resources", b.user, e);
                    };
                    if (d.economy) {
                        let f = await db.get("economy", b.user)
                        f.credits += parseFloat(d.economy.credits)
                        f.coins += parseFloat(d.economy.coins)
                        await db.set("economy", b.user, f)
                    };
                }
                core.log(`${req.session.userinfo.username} successfully paid the invoice with ID: ${a}.`);
                res.statusCode = 302;
                res.setHeader('Location', '/billing/success' + a);
                return res.end();
            }
            return res.end(JSON.stringify({ "success": true, "message": alert("SUCCESS", req, res), data: d.result.payment_status }));
        } catch (error) {
            handle(error, "Minor", 95)
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });

    async function handle(error, a, b) {
        console.error(error)
        admins.push({
            title: `${a} Error`,
            message: `${error}`,
            type: "error",
            place: "billing-cryptomus",
            date: Date.now()
        });
        errors.push({ date: Date.now(), error: error, file: "routes/billing/cryptomus.js", line: b });
        await db.set("notifications", "admins", admins);
        await db.set("logs", "errors", errors);
        return
    }
}
/**
 *--------------------------------------------------------------------------
 * End of the file.
 *--------------------------------------------------------------------------
*/