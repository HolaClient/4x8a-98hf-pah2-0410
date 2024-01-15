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
const crypto = require('crypto')
const crypt = modules.crypt;
module.exports.load = async function (app, db) {
    const settings = await db.get('core', 'settings')
    const cryptomus = await db.get('cryptomus', 'settings')
    const orders = await db.get('cryptomus', 'orders')
    const latest = await db.get('cryptomus', 'latest')
    const invoices = await db.get('cryptomus', 'invoices')

    app.post("/api/payments/gateways/cryptomus/configure", core.auth, async (req, res) => {
        const cf = await db.get('cryptomus', 'settings')
        cf.merchant.id = req.body.merchant.id
        cf.merchant.key = req.body.merchant.key
        cf.merchant.name = req.body.merchant.name
        cf.network.default = req.body.network.default
        cf.network.to = req.body.network.to
        cf.currency.default = req.body.currency.default
        await db.set('cryptomus', 'settings', cf)
        res.json({success: true})
    })

    app.get("/api/payments/gateways/cryptomus", core.auth, async (req, res) => {       
        res.json(await db.get('cryptomus', 'services'))
    })

    app.get("/api/payments/gateways/cryptomus/services/refresh", core.auth, async (req, res) => {       
       refresh()
       res.json({success: true})
    })

    app.get("/api/payments/gateways/cryptomus/wallet", core.auth, async (req, res) => {       
        const data = {
            network: req.query.network,
            currency: cryptomus.network.default,
            to_currency: cryptomus.network.to,
            order_id: req.query.id,
            from_referral_code: 'nk5Yow'
        };
        const APIKEY = cryptomus.merchant.key;
        const MERCHANTID = cryptomus.merchant.id;
        
        const jsonData = JSON.stringify(data).replace(/\//mg, "\\/");
        const sign = require('crypto').createHash('md5').update(Buffer.from(jsonData).toString('base64') + APIKEY).digest('hex');
        
        const apiUrl = 'https://api.cryptomus.com/v1/wallet';
        
        const headers = {
            'Content-Type': 'application/json',
            'merchant': MERCHANTID,
            'sign': sign
        };
        
       let response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: jsonData
        })
        const resp = await response.json()
        res.json(resp)
    })

    app.get("/api/payments/gateways/cryptomus/wallet/qr", core.auth, async (req, res) => {       
        const data = {
            network: req.query.network,
            currency: cryptomus.network.default,
            to_currency: cryptomus.network.to,
            order_id: req.query.id,
            wallet_address_uuid: req.query.wallet,
            from_referral_code: 'nk5Yow'
        };
        const APIKEY = cryptomus.merchant.key;
        const MERCHANTID = cryptomus.merchant.id;
        
        const jsonData = JSON.stringify(data).replace(/\//mg, "\\/");
        const sign = require('crypto').createHash('md5').update(Buffer.from(jsonData).toString('base64') + APIKEY).digest('hex');
        
        const apiUrl = 'https://api.cryptomus.com/v1/wallet/qr';
        
        const headers = {
            'Content-Type': 'application/json',
            'merchant': MERCHANTID,
            'sign': sign
        };
        
       let response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: jsonData
        })
        const resp = await response.json()
        res.json(resp)
    })

    app.get("/api/payments/gateways/cryptomus/payment/qr", core.auth, async (req, res) => {       
        const data = {
            network: req.query.network,
            currency: cryptomus.network.default,
            to_currency: cryptomus.network.to,
            order_id: req.query.id,
            merchant_payment_uuid: req.query.invoice,
            from_referral_code: 'nk5Yow'
        };
        const APIKEY = cryptomus.merchant.key;
        const MERCHANTID = cryptomus.merchant.id;
        
        const jsonData = JSON.stringify(data).replace(/\//mg, "\\/");
        const sign = require('crypto').createHash('md5').update(Buffer.from(jsonData).toString('base64') + APIKEY).digest('hex');
        
        const apiUrl = 'https://api.cryptomus.com/v1/payment/qr';
        
        const headers = {
            'Content-Type': 'application/json',
            'merchant': MERCHANTID,
            'sign': sign
        };
        
       let response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: jsonData
        })
        const resp = await response.json()
        res.json(resp)
    })

    app.get("/api/payments/gateways/cryptomus/payment", async (req, res) => {
        let invoiceid = crypt.gen62(24) 
        const data = {
            amount: req.query.amount,
            currency: cryptomus.currency.default,
            to_currency: cryptomus.currency.to,
            order_id: invoiceid,
            lifetime: cryptomus.payment.lifespan,
            url_return: `${settings.website.hostname}/api/payments/gateways/cryptomus/complete/${invoiceid}`,
            url_callback: cryptomus.merchant.callback,
            url_success: `${settings.website.hostname}/success/${invoiceid}`,
            from_referral_code: 'nk5Yow'
        };
        await db.set('pending', invoiceid, {userinfo: req.session.userinfo, product: req.query.id})
        const APIKEY = cryptomus.merchant.key;
        const MERCHANTID = cryptomus.merchant.id;
        
        const jsonData = JSON.stringify(data).replace(/\//mg, "\\/");
        const sign = require('crypto').createHash('md5').update(Buffer.from(jsonData).toString('base64') + APIKEY).digest('hex');
        
        const headers = {
            'Content-Type': 'application/json',
            'merchant': MERCHANTID,
            'sign': sign
        };
        
       let response = await fetch('https://api.cryptomus.com/v1/payment', {
            method: 'POST',
            headers: headers,
            body: jsonData
        })
        const resp = await response.json()
        let orders = await db.get('cryptomus', 'orders') ?? []
        orders.push(resp.result)
        await db.set('cryptomus', 'orders', orders)
        return res.json({success: true, redirect:resp.result.url})
    })

    app.get("/api/payments/gateways/cryptomus/complete/:id", async (req, res) => {
        let id = req.params.id
        if (!await db.get('pending', id)) {
            return res.json({success: false, message: "Invalid Invoice!"})
        }
        let dbid = await db.get('pending', id)
        let userinfo = dbid.userinfo
        let pid = dbid.product
        let products = await db.get('billing', 'products') ?? []
        let pr = products.findIndex(product => product.id == pid)
        let pres = products[pr].resources
        let ures = await db.get('resources', userinfo.hcid)
        ures.ram = ures.ram + pres.ram
        ures.disk = ures.disk + pres.disk
        ures.cpu = ures.cpu + pres.cpu
        ures.backups = ures.backups + pres.backups
        ures.servers = ures.servers + pres.servers
        ures.allocations = ures.allocations + pres.allocations
        ures.databases = ures.databases + pres.databases
        await db.set('resources', userinfo.hcid, ures)
        await db.delete('pending', id)
        res.redirect('/dashboard')
    })

    refresh()
    async function refresh() {
        try {
            const data = {
                from_referral_code: 'nk5Yow'
            };
            
            const APIKEY = cryptomus.merchant.key;
            const MERCHANTID = cryptomus.merchant.id;
            
            const jsonData = JSON.stringify(data).replace(/\//mg, "\\/");
            const sign = require('crypto').createHash('md5').update(Buffer.from(jsonData).toString('base64') + APIKEY).digest('hex');
            
            const apiUrl = 'https://api.cryptomus.com/v1/payment/services';
            
            const headers = {
                'Content-Type': 'application/json',
                'merchant': MERCHANTID,
                'sign': sign
            };
            
           let response = await fetch(apiUrl, {
                method: 'POST',
                headers: headers,
                body: jsonData
            })
            let resp = await response.json()
            await db.set('cryptomus', 'services', resp)
            return resp
        } catch (e) {
            console.log(e)
            return
        }
    }
}