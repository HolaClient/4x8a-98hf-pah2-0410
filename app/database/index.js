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
 * index.js - Database factory file executor.
 *--------------------------------------------------------------------------
 */
/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
 */
module.exports = async function () {
    try {
        const a = '../../app/database/factories';
        let b = fs.readdirSync(path.resolve(__dirname, a));
        for (const i of b) {
            const c = path.join(a, i);
            try {
                require(c)(db)
            } catch (error) {
                console.error(`Error executing seed ${i}:`, error);
            }
        }
    } catch (error) {
        console.error('Error loading database factories:', error);
        return;
    }
};
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
 **/
