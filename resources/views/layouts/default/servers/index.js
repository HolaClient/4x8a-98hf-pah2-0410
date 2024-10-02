const UI = hcx.loadModule(path.resolve(__dirname, `../template.js`))

const settings = {
    meta: {
        title: "Servers",
        description: "Landing Page",
        keywords: "Landing Page",
    },
    permissions: {
        intent: "hcx.pages.home",
        level: 1,
        noPermitRedirect: "/login"
    }
};
function servers(req) {
    let servers = []
    let srv = hcx.servers.list.getByUser(req.session.userinfo.id)
    for (let i of srv) {
        servers.push(/*template*/`<div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="w-full flex items-start justify-between text-zinc-400">
            <div class="w-max space-x-2 flex items-center">
                <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M14 6H6v8h8V6Z" />
                        <path fill-rule="evenodd" d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z" clip-rule="evenodd" />
                    </svg>                          
                </div>
                <div class="flex flex-col">
                    <h1 class="text-zinc-200 text-md">${i.name} </h1>
                    <span class="text-zinc-300 text-xs">Available memory</span>
                </div>
            </div>
            <div class="w-max space-x-2 flex items-center">
                <div class="w-fit relative z-0">
                    <button onclick="toggleDropdown('server-menu-${i.id}')" class="p-1 h-max w-max rounded-lg bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>                              
                    </button>
                    <div id="dropdown.server-menu-${i.id}" class="hidden absolute w-fit text-sm overflow-y-scroll z-10 top-0 right-0 p-1.5 pr-0 bg-zinc-950/50 backdrop-blur-lg rounded-lg border border-black ring-1 ring-zinc-800">
                        <ul class="w-full flex flex-col justify-start items-start">
                            <li class="rounded-lg hover:bg-zinc-900 hover:text-zinc-300 min-w-max cursor-pointer w-full text-left p-1 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
                                    <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                                </svg>
                                <span>Modify server</span>
                            </li>
                            <li class="rounded-lg hover:bg-zinc-900 hover:text-zinc-300 min-w-max cursor-pointer w-full text-left p-1 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
                                </svg>
                                <span>Delete server</span>
                            </li>
                            <li onclick="toggleDropdown('server-menu')" class="rounded-lg hover:bg-zinc-900 hover:text-zinc-300 min-w-max cursor-pointer w-full text-left p-1 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                                <span>Close menu</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
`)
    };
    if (servers.length == 0) {
        servers.push(/*template*/`<div class="w-full flex items-center col-span-2 py-16 justify-center text-zinc-400">
            <h1 class="text-zinc-200 text-md">No servers found</h1>
        </div>`)
    }
    return servers.join('')
}
function content(req) {
    return /*template*/`
    <main id="content">
        <div class="w-screen h-full md:ml-20 pl-1 pt-16 relative">
            <div class="w-full h-full p-4 z-0 md:pr-24">
                <div class="w-full flex items-center justify-between">
                    <h1 class="text-zinc-200 text-xl">Servers</h1>
                    <button onclick="render('deploy')" class="p-1 px-2 h-max w-max flex items-center text-zinc-400 rounded-lg text-sm bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span class="pl-2">Deploy</span>
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
                    ${servers(req)}
                </div>
            </div>
        </div>
    </main>
    `
}
let page = /*template*/`
${UI.components.head(settings.meta)}
<body hcx-component-name="body" class="bg-zinc-950 w-screen h-full overflow-x-hidden">
</body>
`
function topush(req) {
    return [
        {
            "targetType": "element",
            "target": "body",
            "id": "aside",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `../partials/aside.js`), req)
        },
        {
            "targetType": "element",
            "target": "body",
            "id": "nav",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `../partials/nav.js`))
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
            "data": hcx.loadModule(path.resolve(__dirname, `../partials/notifications.js`))
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
let assets = [
    {
        type: "js",
        name: "dropdown",
        data: UI.assets.dropdown,
        pathOnly: true,
        path: '/servers'
    }
]
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