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
 * telemetry.js - Software statistics transmitter.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Bunch of codes...
 *--------------------------------------------------------------------------
*/
module.exports = async function() {
    if (await db.get("core", "setup") == true) {
        async function main() {
            var a = await db.get("settings", "telemetry");
            var b = await db.get("settings", "holaclient");
            var c = await db.get("settings", "appearance");
            let d = "https://console.holacorp.org";
            if (a.enabled === true) {
                let e = await fetch(d + '/api/telemetry/X');
                if (e.status !== 200) return;
                let f = await e.json();
                if (f.status === true) {
                    var g = (await db.get("users", "users")).length;
                    var h = (await db.get("servers", "servers")).length;
                    await fetch(d + '/api/telemetry/X', {
                        method: 'POST',
                        body: {
                            object: "telemetry",
                            license: b.license ?? "",
                            users: g,
                            servers: h,
                            version: b.version,
                            name: c.name,
                            domain: c.domain
                        }
                    });
                    return;
                }
                return;
            }
            return;
        }
        //main();
        setInterval(() => {
        //    main();
        }, 3600000);
    }    
}