const hcx = require('../../../../src/utils/hcx')
const components = {
    head: hcx.loadModule(path.resolve(__dirname, `./partials/head.js`)),
    footer: hcx.loadModule(path.resolve(__dirname, `./partials/footer.js`))
}
const assets = {
    login: fs.readFileSync(path.resolve(__dirname, `./assets/login.js`), 'utf-8'),
    register: fs.readFileSync(path.resolve(__dirname, `./assets/register.js`), 'utf-8')
}

const errors = {
    clientSide: hcx.loadModule(path.resolve('./resources/views/errors/clientSide.js')),
}
module.exports = { components, assets, errors }