const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Home | HolaClient-X",
        description: "Welcome to your HolaClient-X dashboard",
        keywords: "HolaClient-X, dashboard, home",
    },
    permissions: {
        intent: "hcx.pages.home",
        level: 1,
        noPermitRedirect: "/login"
    }
};
function content(req)  {
    return /*template*/`
<main id="content">
<div class="w-screen h-full md:ml-20 pl-1 pt-16 relative">
<div class="w-full h-full p-4 z-0 md:pr-24">
<div class="w-full py-2 px-2 overflow-hidden relative flex items-center space-x-2 text-zinc-300 text-sm bg-zinc-900/50 border border-zinc-800 rounded-lg">
    <div class="absolute left-4 blur-lg bg-emerald-400 p-2 rounded-full"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-emerald-400">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
    </svg>
    <span>All services operational.</span>
</div>
<h1 class="text-zinc-200 text-xl pt-4">Key metrics</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-4">
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
            </svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">0 <span class="text-zinc-400">Services</span> </h1>
            <span class="text-zinc-300 text-xs">Total active services</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>                          
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">0 <span class="text-zinc-400">Services</span> </h1>
            <span class="text-zinc-300 text-xs">Expiring in the next 7 days</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${req?.session?.economy?.coins ?? 0} <span class="text-zinc-400">Coins</span> </h1>
            <span class="text-zinc-300 text-xs">Coins balance</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>                          
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${req?.session?.economy?.credits ?? 0} <span class="text-zinc-400">USD</span> </h1>
            <span class="text-zinc-300 text-xs">Account credit balance</span>
        </div>
    </div>
</div>
</div>
</div>
</main>
`
}
let page = /*template*/`
${UI.components.head(settings.meta)}
<body hcx-component-name="body" class="bg-zinc-950 w-screen h-full overflow-x-hidden">
${UI.errors.clientSide()}
</body>
`
function topush(req) {
    return [
        {
            "targetType": "element",
            "target": "body",
            "id": "aside",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/aside.js`), req)
        },
        {
            "targetType": "element",
            "target": "body",
            "id": "nav",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/nav.js`))
        },
        {
            "targetType": "element",
            "target": "body",
            "id": "content",
            "contentCompatible": false,
            "data": content(req)
        },
        {
            "targetType": "element",
            "target": "body",
            "id": "notifications",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/notifications.js`))
        }
    ]
}
let toReplace = [
    {
        "targetType": "element",
        "target": "head",
        "id": "head",
        "data": UI.components.head(settings.meta)
    }
]
let assets = []
let toMinify = ["content", "page"];

module.exports = function (req) {
    return {
        settings,
        content: content(req),
        page,
        toPush: topush(req),
        toReplace,
        assets,
        toMinify,
    }
}