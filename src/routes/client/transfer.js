/**
 *--------------------------------------------------------------------------
 *  __   ______ _ __  __   __
 * | |  | | | |  / ____| (_)  | | \ \ / /
 * | |__| | ___ | | __ _| || |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | || | |/ _ \ '_ \| __| > <  
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
 * transfer.js - Server side transfer coins/resources handler.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function () {
    app.post("/api/transfer/coins", core.auth, async (req, res) => {
        try {
            return core.json(req, res, true, "SUCCESS");
        } catch (error) {
            System.err.println(error);
            return fallback.error500(error);
        }
    });
}