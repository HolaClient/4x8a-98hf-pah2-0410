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
 * router.js - admin routes handler.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const page = modules.page;
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    const appearance = await db.get("settings", "appearance") || {};
    const template = appearance.themes && appearance.themes.admin || "default";
    app.get("/admin/pterodactyl/nodes/:id", core.admin, async (req, res) => {
        try {
            var id = req.params.id
            if (typeof id !== "string") return res.end(fallback.error404());
            let a = (await db.get("pterodactyl", "nodes")).find(i => i.id == id);
            let node = ((await ptero.nodes()).find(i => i.attributes.id == id).attributes);
            node["deployments"] = a.deployments
            const data = await page.data(req);
            return ejs.renderFile(`./resources/views/admin/${template}/pterodactyl/nodes/[id].ejs`, {...data,node},
                function (error, str) {
                    if (error) {
                        console.error(error);
                        return res.end(fallback.error500(error));
                    };
                    return res.end(str);
                }
            );
        } catch (error) {
            return res.end(JSON.stringify({ success: false, message: alert("ERROR", req, res) + error }));
        }
    });
}
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/