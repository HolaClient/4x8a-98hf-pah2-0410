const hcx = require('../../../../src/utils/hcx')
const components = {
    head: loadComponent('head'),
    aside: loadComponent('aside'),
    deploy: {
        appearance: loadComponent('deploy/appearance'),
        software: loadComponent('deploy/software'),
        location: loadComponent('deploy/location'),
        resources: loadComponent('deploy/resources'),
        finalize: loadComponent('deploy/finalize')
    }
}
const assets = {
    dropdown: fs.readFileSync(path.resolve(__dirname, `./assets/dropdown.js`), 'utf8'),
    deploy: fs.readFileSync(path.resolve(__dirname, `./assets/deploy.js`), 'utf8')
}
function loadComponent(a) {
    return hcx.loadModule(path.resolve(__dirname, `./partials/${a}.js`))
}
const errors = {
    clientSide: hcx.loadModule(path.resolve('./resources/views/errors/clientSide.js')),
}
module.exports = { components, errors, assets }