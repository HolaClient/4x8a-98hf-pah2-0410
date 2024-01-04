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
 * products.js - Products handler.
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
    app.get("/api/billing/categories", core.auth, async (req, res) => {
        const products = await db.get('billing', 'categories') ?? []
        res.json(products)
    })
    app.post("/api/billing/categories/create", core.auth, async (req, res) => {
        const products = await db.get('billing', 'categories') ?? []
        let lp = await db.get('core', 'categories') ?? 0
        let l = {
            id: lp + 1,
            name: req.body.name,
            service: req.body.service,
            price: req.body.price,
            icon: req.body.icon
        }
        products.push(l)
        await db.set('core', 'categories', lp + 1)
        await db.set('billing', 'categories', products)
        res.json({ success: true })
    })
    app.get("/api/billing/categories/delete/:id", core.auth, async (req, res) => {
        if (req.session.permissions) {
            return res.redirect("/404?message=Happy-anniversary-dont-aboose")
        }
        if (req.session.permissions.level > 100) {return res.redirect("/404?message=Dont-aboose-sucks")}
        const products = await db.get('billing', 'categories') ?? [];
        let id = req.params.id;
        const up = products.filter(product => product.id != id);
        await db.set('billing', 'categories', up);
        res.json({ success: true });
    })

    app.get("/api/billing/products", core.auth, async (req, res) => {
        const products = await db.get('billing', 'products') ?? []
        res.json(products)
    })
    app.post("/api/billing/products/create", core.auth, async (req, res) => {
        const products = await db.get('billing', 'products') ?? []
        let lp = await db.get('core', 'products') ?? 0
        let l = {
            id: lp + 1,
            name: req.body.name,
            ram: req.body.service,
            disk: req.body.disk,
            cpu: req.body.cpu,
            allocations: req.body.allocations,
            backups: req.body.backups,
            databases: req.body.databases,
            price: req.body.price,
            icon: req.body.icon
        }
        products.push(l)
        await db.set('core', 'products', lp + 1)
        await db.set('billing', 'products', products)
        res.json({ success: true })
    })
    app.get("/api/billing/products/delete/:id", core.auth, async (req, res) => {
        if (req.session.permissions) {
            return res.redirect("/404?message=Dennis-is-a-retard")
        }
        if (req.session.permissions.level > 100) {return res.redirect("/404?message=Pesky-skummy-dont-aboose-idiots")}
        const products = await db.get('billing', 'products') ?? [];
        let id = req.params.id;
        const up = products.filter(product => product.id != id);
        await db.set('billing', 'products', up);
        res.json({ success: true });
    })
}