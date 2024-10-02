module.exports = (a) => {
    return /*template*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${a.title}</title>
        <link href="/assets/global.css" rel="stylesheet">
        <script src="/assets/app.js"></script>
        <script src="https://cdn.tailwindcss.com" defer></script>
        ${process.env.APP_ENV = "production" ? `<link href="/assets/common/tailwind.css" rel="stylesheet">` : `<script src="https://cdn.tailwindcss.com" defer></script>`}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@300..700&family=Space+Grotesk:wght@300..700&display=swap">
        <meta name="description" content="${a.description}">
        <meta name="keywords" content="${a.keywords}">
        <meta name="author" content="CR072">
        <meta name="copyright" content="CR072">
        <meta name="software" content="HolaClient-X1">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${a.title} | ${hcx.config?.appearance?.name}">
        <meta property="og:description" content="${a.description} | Powered by HolaClient-X1.">
        <meta property="og:image" content="${hcx.config?.appearance?.logo?.url}">
        <link rel="manifest" href="/manifest.json">
        <meta name="theme-color" content="#18181b">
        <script nonce="hcxscript">
        //if ('serviceWorker' in navigator) {window.addEventListener('load', function () {navigator.serviceWorker.register('/worker.js');});}
        </script>
    </head>`
}