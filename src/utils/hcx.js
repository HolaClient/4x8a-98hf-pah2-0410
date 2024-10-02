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
 * @author CR072 <cr072@holaclient.dev>
 * @copyright 2021 - present HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * hcx.js - Global application functions requirements satisfier.
 *--------------------------------------------------------------------------
*/
module.exports = {
    crypt: require('./secrets'),
    cookies: require('../lib/core/cookies'),
    config: require('../handlers/settings'),
    getDirStr: require('../lib/core/getDirectoryStructure'),
    compressCSSClassNames: require('../lib/core/css/compressCSSClassNames'),
    linkHTMLCSSClassNames: require('../lib/core/css/linkHTMLCSSClassNames'),
    watch: require('../handlers/watcher'),
    permissions: require('../modules/permissions/index'),
    res: require('../handlers/response'),
    removeDuplicateValuesFromArray: require('../lib/core/removeDuplicateValuesFromArray'),
    upgradeWebSocketConnection: require('../lib/core/upgradeWebSocketConnection'),
    numbersToWords: require('../lib/core/numbersToWords'),
    authHandler: require('../lib/core/auth'),
    validate: require('../utils/validate'),
    panel: require('../lib'),
    notify: require('./notify'),
    locales: require('./locales'),
    static: require('../modules/router/static'),
    temp: require('../handlers/temp'),
    servers: require('../modules/servers/index'),
    router: {
        error: require('../modules/router/errors').send,
        getErrorPage: require('../modules/router/errors').page,
        get: require('../modules/router/pages').get,
        pages: require('../modules/router/pages'),
        index: require('../modules/router')
    },
    wares: {
        checkRoutePermission: require('../middlewares/checkRoutePermission'),
        checkAndVerifyAPIKey: require('../middlewares/checkAndVerifyAPIKey'),
        bodyParser: require('../middlewares/bodyParser')
    },
    loadModule: (a, c) => {
        const b = path.resolve(a);
        delete require.cache[require.resolve(b)];
        if (c) return require(b)(c);
        return require(b);
    },
    loadModuleAsync: async (a, c) => {
        const b = path.resolve(a);
        delete require.cache[require.resolve(b)];
        if (c) return await require(b)(c);
        return await require(b);
    }
}