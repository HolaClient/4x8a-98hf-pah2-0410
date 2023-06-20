const fetch = require('node-fetch')
const settings = require('../settings.json')

module.exports = (response) => {
    return new Promise(async (resolve) => {
        const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            body: new URLSearchParams({
                secret: settings.recaptcha.secret,
                response: response
            })
        })
        const json = await res.json()
        resolve(json.success)
    })
}