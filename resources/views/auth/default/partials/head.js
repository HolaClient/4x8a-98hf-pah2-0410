module.exports = (a) => {
    let tailwindcss = process.env.APP_ENV == "production" ? `<link href="/assets/common/tailwind.min.css" rel="stylesheet">` : `<script src="https://cdn.tailwindcss.com"></script>`
    return /*template*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${a.title} | ${hcx.config.appearance.name}</title>
        ${tailwindcss}
        <style>body{font-family:'Space Grotesk'} .font-raleway{font-family:'Raleway'} .font-space{font-family:'Space Grotesk'}</style>
        <script src="/assets/app.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@300..700&family=Space+Grotesk:wght@300..700&display=swap">
        <meta name="description" content="${a.description}">
        <meta name="keywords" content="${a.keywords}">
        <meta name="author" content="HolaClient-X1">
        <script nonce="hcxscript">
       // if ('serviceWorker' in navigator) {window.addEventListener('load', function () {navigator.serviceWorker.register('/worker.js');});}
        </script>
    </head>`
}