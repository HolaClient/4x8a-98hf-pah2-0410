function head(code) {
    return `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error ${code}</title>
    <link href="/assets/common/tailwind.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Karla&family=Rajdhani&display=swap');
        body { font-family: 'quicksand'; overflow-x: hidden; }
        .font-karla { font-family: 'karla' }
        .font-rajdhani { font-family: 'rajdhani' }
    </style>
</head>`
}
function create(code, message, description) {
    return `
    ${head(code)}
    <body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
        <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
            <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">${code}</h1>
            <span class="text-gray-200 text-3xl font-rajdhani">${message}</span>
            <span class="${code == 500 ? '' : 'max-w-sm'} text-xl font-rajdhani text-center text-gray-300">${description}</span>
        </div>
    </body>
    `;
}
const error500 = (error) => create(500, "INTERNAL SERVER ERROR!", `An error has occurred while displaying this page. If you need assistance, please feel free to <a class="text-sky-400" href="https://discord.gg/CvqRH9TrYK">contact us</a>.<pre class="p-2 text-gray-300 rounded-xl mt-4 border border-zinc-800/80 bg-zinc-950"><code>${error}</code></pre>`);
const error401 = () => create(401, "UNAUTHORIZED!", "You're not authorized to visit this page. If you need assistance, please feel free to <a class=\"text-sky-400\" href=\"https://discord.gg/CvqRH9TrYK\">contact us</a>.");
const error403 = () => create(403, "FORBIDDEN!", "You're forbidden from visiting this page. If you need assistance, please feel free to <a class=\"text-sky-400\" href=\"https://discord.gg/CvqRH9TrYK\">contact us</a>.");
const error404 = () => create(404, "RESOURCE NOT FOUND!", "The page you are looking for doesn't exist. You may have mistyped the address or the page may have been moved. If you need assistance, please feel free to <a class=\"text-sky-400\" href=\"https://discord.gg/CvqRH9TrYK\">contact us</a>.");
const error429 = () => create(429, "TOO MANY REQUESTS!", "We detected too much traffic from your IP. You've been rate-limited for a minute. If you need assistance, please feel free to <a class=\"text-sky-400\" href=\"https://discord.gg/CvqRH9TrYK\">contact us</a>.");
const noGuildAccess = () => create(401, "MISSING INTENTS!", "Insufficient permissions to check your servers list, please grant it in-order to authorize. <a class=\"text-sky-400\" href=\"../auth/discord\">Click to login again</a>.");
const errorBlacklisted = () => create(403, "YOU'RE BLACKLISTED!", "Seems like you have been forbidden from visiting this site. If you need assistance, please feel free to <a class=\"text-sky-400\" href=\"https://discord.gg/CvqRH9TrYK\">contact us</a>.");

module.exports = { error500, error401, error403, error404, error429, errorBlacklisted, noGuildAccess };