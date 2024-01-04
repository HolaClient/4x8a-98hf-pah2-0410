const fetch = require('node-fetch')

/**
 * @param {string} action 
 * @param {string} message 
**/
module.exports = (action, message) => {
    if (!settings.webhook.status) return;

    const isUserAction = !settings.webhook.actions.admin[action];

    const webhook = isUserAction ? settings.webhook.client : settings.webhook.admin;

    fetch(webhook, {
        "method":"POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({
           username: "HolaClient",
           avatar_url: "https://media.discordapp.net/attachments/1082636619804323860/1115601102344298636/image.png?width=621&height=580",
           embeds: [
               {
                   color: hexToDecimal('#191c24'),
                   title: `\`${action}\``,
                   description: message,
                   author: {
                       name: 'HolaClient'
                   },
                   thumbnail: {
                       url: settings.logo.url
                   }
               }
           ]
       })
   
       })
}

function hexToDecimal(hex) {
    return parseInt(hex.replace("#", ""), 16)
}
