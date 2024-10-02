const hcx = require('../../../../src/utils/hcx')
const fs = require('fs')
const components = {
    head: loadComponent('head'),
    aside: loadComponent('aside'),
}
function loadComponent(a) {
    return hcx.loadModule(path.resolve(__dirname, `./partials/${a}.js`))
}
const assets = {
    //apexcharts: fs.readFileSync(path.resolve('./public/libraries/apexcharts.js'), "utf-8"),
    charts: fs.readFileSync(path.resolve(__dirname,'./partials/assets/charts.js'), "utf-8"),
    settings: fs.readFileSync(path.resolve(__dirname,'./partials/assets/settings.js'), "utf-8"),
    pterodactyl: fs.readFileSync(path.resolve(__dirname,'./partials/assets/pterodactyl.js'), "utf-8"),
    permissions: {
        users: fs.readFileSync(path.resolve(__dirname,'./partials/assets/userPermissions.js'), "utf-8")
    }
}
const errors = {
    clientSide: hcx.loadModule(path.resolve('./resources/views/errors/clientSide.js')),
}
module.exports = { components, assets, errors }