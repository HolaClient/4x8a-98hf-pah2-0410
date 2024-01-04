const settings = require("../../settings.json");
const { CronJob } = require('cron')
const chalk = require("chalk");
const fetch = require('node-fetch')

module.exports.load = async function (app, db) {

    app.get(`/api/renewal/status/:id`, async (req, res) => {
        if (!settings.allow.renewals.status == "true") return res.json({ success: false })
        if (!req.params.id) return res.json({ success: false })
        if (!req.session.pterodactyl) res.json({ success: false })
        if (req.session.pterodactyl.relationships.servers.data.filter(server => server.attributes.id == req.params.id).length == 0) return res.json({ success: false });

        const lastRenew = await db.get(`lastrenewal-${req.params.id}`)
        if (!lastRenew) return res.json({ message: 'Disabled' })

        if (lastRenew > Date.now()) return res.json({ message: 'Renewed', success: true })
        else {
            if ((Date.now() - lastRenew) > (settings.allow.renewals.delay * 86400000)) {
                return res.json({ message: 'Last chance to renew!', renewable: true })
            }
            const time = msToDaysAndHours((settings.allow.renewals.delay * 86400000) - (Date.now() - lastRenew))
            return res.json({ message: time, renewable: true })
        }
    })

    app.get(`/renew`, async (req, res) => {
        try {
        if (!settings.allow.renewals.status == true) return res.send(`Renewals are currently disabled.`)
        if (!req.query.id) return res.send(`Missing ID.`)
        if (!req.session.pterodactyl) return res.redirect(`/login`)
        if (req.session.pterodactyl.relationships.servers.data.filter(server => server.attributes.id == req.query.id).length == 0) return res.send(`No server with that ID was found!`);

        const lastRenew = await db.get(`lastrenewal-${req.query.id}`)
        if (!lastRenew) return res.send('Disabled')

        if (lastRenew > Date.now()) return res.redirect(`/dashboard`)

        let coins = await db.get("coins-" + req.session.userinfo.hcid);
        coins = coins ? coins : 0;

        if (settings.allow.renewals.cost > coins) return res.redirect(`/dashboard` + "?err=CANNOTAFFORDRENEWAL")

        await db.set("coins-" + req.session.userinfo.hcid, coins - settings.allow.renewals.cost)

        const newTime = lastRenew + (settings.allow.renewals.delay * 86400000)
        await db.set(`lastrenewal-${req.query.id}`, newTime)

        return res.redirect(`/dashboard` + `?success=RENEWED`)
        } catch(err) {
            console.log(`${chalk.redBright("[RENEWAL]")} ${err}`)
            return res.send(`${err}`)
        }
    })

    new CronJob(`0 0 * * *`, () => {
        if (settings.allow.renewals.status) {
            console.log(chalk.gray("🛠️ ") + chalk.cyan("[") + chalk.white("Hclient") + chalk.cyan("]") + chalk.white(" Checking renewal servers... "));
            getAllServers().then(async servers => {
                for (const server of servers) {
                    const id = server.attributes.id
                    const lastRenew = await db.get(`lastrenewal-${id}`)
                    if (!lastRenew) continue

                    if (lastRenew > Date.now()) continue
                    if ((Date.now() - lastRenew) > (settings.allow.renewals.delay * 86400000)) {
                        // Server hasn't paid for renewal and gets suspended
                        let deletionresults = await fetch(
                            settings.pterodactyl.domain + "/api/application/servers/" + id + "/suspend",
                            {
                                method: "post",
                                headers: {
                                    'Content-Type': 'application/json',
                                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                                }
                            }
                        );
                        let ok = await deletionresults.ok;
                        if (ok !== true) continue;
                        console.log(`Server with ID ${id} failed renewal and was deleted.`)
                        await db.delete(`lastrenewal-${id}`)
                    }
                }
            })
            console.log(chalk.gray("🛠️ ") + chalk.cyan("[") + chalk.white("Hclient") + chalk.cyan("]") + chalk.white(" Finished checking renewal servers "));
        }
    }, null, true, settings.timezone)
        .start()

};
return new Promise(async (resolve) => {

    const allServers = []

    async function getServersOnPage(page) {
        return (await fetch(
            settings.pterodactyl.domain + "/api/application/servers/?page=" + page,
            {
                headers: {
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                }
            }
        )).json();
    };

    let currentPage = 1
    while (true) {
        const page = await getServersOnPage(currentPage)
        allServers.push(...page.data)
        if (page.meta.pagination.total_pages > currentPage) {
            currentPage++
        } else {
            break
        }
    }

    resolve(allServers)

})
function msToDaysAndHours(ms) {
    const msInDay = 86400000
    const msInHour = 3600000

    const days = Math.floor(ms / msInDay)
    const hours = Math.round((ms - (days * msInDay)) / msInHour * 100) / 100

    let pluralDays = `s`
    if (days === 1) {
        pluralDays = ``
    }
    let pluralHours = `s`
    if (hours === 1) {
        pluralHours = ``
    }

    return `${days} day${pluralDays} and ${hours} hour${pluralHours}`
}
function getAllServers() {
    return new Promise(async (resolve) => {

        const allServers = []

        async function getServersOnPage(page) {
            return (await fetch(
                settings.pterodactyl.domain + "/api/application/servers/?page=" + page,
                {
                    headers: {
                        "Authorization": `Bearer ${settings.pterodactyl.key}`
                    }
                }
            )).json();
        };

        let currentPage = 1
        while (true) {
            const page = await getServersOnPage(currentPage)
            allServers.push(...page.data)
            if (page.meta.pagination.total_pages > currentPage) {
                currentPage++
            } else {
                break
            }
        }

        resolve(allServers)

    })
}