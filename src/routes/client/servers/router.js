module.exports = async function () {
    const routes = [
        { a: "", b: "info" },
        { a: "/console", b: "console" },
        { a: "/files", b: "files" },
        { a: "/upload", b: "upload" },
        { a: "/plugins", b: "plugins" },
        { a: "/mods", b: "mods" },
        { a: "/subdomains", b: "subdomains" },
        { a: "/players", b: "players" },
        { a: "/databases", b: "databases" },
        { a: "/schedules", b: "schedules" },
        { a: "/network", b: "network" },
        { a: "/backups", b: "backups" },
        { a: "/startup", b: "startup" },
        { a: "/settings", b: "settings" },
        { a: "/delete", b: "delete" }
    ];
    routes.forEach(i => {
        app.get(`/servers/:id${i.a}`, (req, res) => handle(req, res, i.b));
    });
    const handle = async (req, res, route) => {
        try {
            let a = req.params.id
            if (!a) return hcx.router.error(res, 404)
            let b = await db.get("servers", req?.session?.userinfo?.id) || []
            if (!b || b.length <= 0) return hcx.router.error(res, 403)
            let c = b.find(i => {
                if (typeof a === "number") {
                    return i.id === a
                } else {
                    return i.identifier === a
                }
            });
            if (!c) return hcx.router.error(res, 404)

            let f = path.resolve(`./resources/views/layouts/default/servers/${route}`);
            delete require.cache[require.resolve(f)];
            let d = require(f)(c);
            for (let i of d.data.toMinify) {
                d.data[i] = hcx.router.pages.compress(getContent(d.data[i]))
            }

            if (d) {
                let e = await hcx.permissions.check.request(req, d?.data?.settings?.permissions?.intent)
                if (e && (e.code == 403 || e.code == 401) && d.data.settings.permissions.noPermitRedirect) return res.redirect(d?.data?.settings?.permissions?.noPermitRedirect)
                if (e && e.code !== 200) return hcx.router.error(res, e.code);
                if (d.code === 200) {
                    res.setHeader("Content-Type", "text/html");
                    return res.end(d.data.page);
                }
                return hcx.router.error(res, d.code);
            }

            return hcx.router.error(res, 500, "Server route not found!")
        } catch (error) {
            System.err.println(error);
            return await hcx.router.error(res, 500, error);
        }
    };
}