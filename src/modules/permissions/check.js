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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
async function request(req, a) {
    let c = req?.session?.permissions || {
        "permissions": {
            "intents": [`hcx.roles.guest`],
            "roles": ["guest"]
        }
    };

    let d = c.intents || [];
    d.push(...(await extractIntentsFromRoles(c.roles)));
    return await evalIntent(hcx.removeDuplicateValuesFromArray(d), a);
}

async function extractIntentsFromRoles(roles) {
    let intents = [];

    if (Array.isArray(roles) && roles.length !== 0) {
        for (let i of roles) {
            let f = await hcx.permissions.roles.getByName(i.replace("hcx.roles.", ""));
            for (let j of f.intents) {
                if (j.startsWith("hcx.roles")) {
                    let g = await hcx.permissions.roles.getByName(j.replace("hcx.roles.", ""));
                    intents.push(...(await extractIntentsFromRoles([g.name])));
                } else {
                    intents.push(j);
                }
            }
        }
    }

    return intents;
}

async function session(req, a) {
    let c = req?.permissions || {
        "permissions": {
            "intents": [`hcx.roles.guest`],
            "roles": ["guest"]
        }
    };
    d = c.intents || []
    d.push(...(await extractIntentsFromRoles(c.roles)));
    return await evalIntent(hcx.removeDuplicateValuesFromArray(d), a);
}

async function evalIntent(a, b) {
    if (!b || typeof b !== 'string') {
        return hcx.res.internal.notfound();
    }
    let c = a.length;
    for (let i = 0; i < c; i++) {
        let d = a[i];
        if (d === b) {
            return hcx.res.internal.success();
        }
        if (d.endsWith('.*')) {
            let e = d.slice(0, -2);
            if (b === e || b.startsWith(e + '.')) {
                return hcx.res.internal.success();
            }
        }
        if (d.startsWith("hcx.roles")) {
            let f = d.split(".")[2];
            let g = (await hcx.permissions.roles.getByName(f)).intents;

            let h = 0;
            let j = g.length - 1;
            while (h <= j) {
                let k = Math.floor((h + j) / 2);
                let i = g[k];
                if (i === b) return hcx.res.internal.success();
                if (i.endsWith('.*')) {
                    let l = i.slice(0, -2);
                    if (b === l || b.startsWith(l + '.')) {
                        return hcx.res.internal.success();
                    }
                }
                if (i < b) {
                    h = k + 1;
                } else {
                    j = k - 1;
                }
            }
        }
    }
    return hcx.res.internal.forbidden();
}

module.exports = { request, evalIntent, session };
