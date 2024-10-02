const hcx = require('../../../../src/utils/hcx')
const components = {
    head: hcx.loadModule(path.resolve(__dirname, `./partials/head.js`)),
    footer: hcx.loadModule(path.resolve(__dirname, `./partials/footer.js`))
}
const assets = {
    landing: fs.readFileSync(path.resolve(__dirname, `./assets/landing.js`), 'utf-8')
}
const errors = {
    clientSide: hcx.loadModule(path.resolve('./resources/views/errors/clientSide.js')),
}
module.exports = { components, assets, errors }