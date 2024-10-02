const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Dashboard | HolaClient-X",
        description: "Your HolaClient-X dashboard overview",
        keywords: "HolaClient-X, dashboard, overview",
    },
    permissions: {
        intent: "hcx.pages.dashboard",
        level: 1,
        noPermitRedirect: "/login"
    }
};
function content(req) {
   return /*template*/`
<main id="content">
<div class="w-screen h-full md:ml-20 pl-1 pt-16 relative">
    <div class="w-full h-full p-4 z-0 md:pr-24">
        <h1 class="text-zinc-200 text-xl">Vault</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-4">
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M14 6H6v8h8V6Z" />
                        <path fill-rule="evenodd" d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z" clip-rule="evenodd" />
                    </svg>                          
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.memory?.total - req?.session?.resources?.memory?.used) / 1024} <span class="text-zinc-400">GB</span> </h1>
                    <span class="text-zinc-300 text-xs">Available memory</span>
                </div>
            </div>
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                        <path fill-rule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" />
                      </svg>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.disk?.total - req?.session?.resources?.disk?.used) / 1024} <span class="text-zinc-400">GB</span> </h1>
                    <span class="text-zinc-300 text-xs">Available disk</span>
                </div>
            </div>
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.cpu?.total - req?.session?.resources?.cpu?.used)} <span class="text-zinc-400">%</span> </h1>
                    <span class="text-zinc-300 text-xs">Available CPU</span>
                </div>
            </div>
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M1 12.5A4.5 4.5 0 0 0 5.5 17H15a4 4 0 0 0 1.866-7.539 3.504 3.504 0 0 0-4.504-4.272A4.5 4.5 0 0 0 4.06 8.235 4.502 4.502 0 0 0 1 12.5Z" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.cbackups?.total - req?.session?.resources?.cbackups?.used)} <span class="text-zinc-400">units</span> </h1>
                    <span class="text-zinc-300 text-xs">Available cloud backups</span>
                </div>
            </div>
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M.676 6.941A12.964 12.964 0 0 1 10 3c3.657 0 6.963 1.511 9.324 3.941a.75.75 0 0 1-.008 1.053l-.353.354a.75.75 0 0 1-1.069-.008C15.894 6.28 13.097 5 10 5 6.903 5 4.106 6.28 2.106 8.34a.75.75 0 0 1-1.069.008l-.353-.354a.75.75 0 0 1-.008-1.053Zm2.825 2.833A8.976 8.976 0 0 1 10 7a8.976 8.976 0 0 1 6.499 2.774.75.75 0 0 1-.011 1.049l-.354.354a.75.75 0 0 1-1.072-.012A6.978 6.978 0 0 0 10 9c-1.99 0-3.786.83-5.061 2.165a.75.75 0 0 1-1.073.012l-.354-.354a.75.75 0 0 1-.01-1.05Zm2.82 2.84A4.989 4.989 0 0 1 10 11c1.456 0 2.767.623 3.68 1.614a.75.75 0 0 1-.022 1.039l-.354.354a.75.75 0 0 1-1.085-.026A2.99 2.99 0 0 0 10 13c-.88 0-1.67.377-2.22.981a.75.75 0 0 1-1.084.026l-.354-.354a.75.75 0 0 1-.021-1.039Zm2.795 2.752a1.248 1.248 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.354.354a.75.75 0 0 1-1.06 0l-.354-.353a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.allocations?.total - req?.session?.resources?.allocations?.used)} <span class="text-zinc-400">unit</span> </h1>
                    <span class="text-zinc-300 text-xs">Available allocations</span>
                </div>
            </div>
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4Zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37ZM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 0 1 3 13.179Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.databases?.total - req?.session?.resources?.databases?.used)} <span class="text-zinc-400">unit</span> </h1>
                    <span class="text-zinc-300 text-xs">Available databases</span>
                </div>
            </div>
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
                        <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM7 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.backups?.total - req?.session?.resources?.backups?.used)} <span class="text-zinc-400">unit</span> </h1>
                    <span class="text-zinc-300 text-xs">Available backups</span>
                </div>
            </div>
            <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662ZM13.326 7.825a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675ZM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758ZM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81c.529.638 1.149 1.199 1.84 1.66ZM17.334 6.798a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896ZM2.666 6.798a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115ZM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23ZM14.357 14.357a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305ZM6.948 17.397a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04Z" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${(req?.session?.resources?.subdomains?.total - req?.session?.resources?.subdomains?.used)} <span class="text-zinc-400">unit</span> </h1>
                    <span class="text-zinc-300 text-xs">Available subdomains</span>
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