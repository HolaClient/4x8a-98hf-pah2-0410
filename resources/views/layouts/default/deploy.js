const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Landing Page",
        description: "Landing Page",
        keywords: "Landing Page",
    },
    permissions: {
        intent: "hcx.pages.home",
        level: 1,
        noPermitRedirect: "/login"
    }
};
let content = function (req) {
    return /*template*/`
    <main id="content">
    <div class="w-screen h-full md:ml-20 pl-1 pt-16 relative">
        <div class="w-full h-full p-4 z-0 md:pr-24">
            <div class="w-full flex items-center justify-between">
                <h1 class="text-zinc-200 text-xl">Deploy server</h1>
                <button onclick="history.back()" class="p-1 px-2 h-max w-max flex items-center text-zinc-400 rounded-lg text-sm bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                    <span class="pl-2">Back</span>
                </button>
            </div>
            <div class="w-full h-max relative mt-4 md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 bg-zinc-700/10 backdrop-blur-lg border border-zinc-100/10 rounded-lg p-2">
                <div id="deploy.sidelinks" class="w-full md:space-y-2 md:p-2 pr-0 py-0.5 flex md:flex-col overflow-x-auto items-center px-0.5 md:px-0 space-x-2 md:space-x-0 pb-1 md:pb-0">
                    <button id="deploy.sidelink.appearance" onclick="render('deploy.appearance', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-black ring-1 ring-zinc-800 bg-zinc-900 hover:bg-zinc-950/40">
                        <span>Appearance</span>
                    </button>
                    <button id="deploy.sidelink.software" onclick="render('deploy.software', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-transparent hover:bg-zinc-900 hover:border-zinc-900">
                        <span>Software</span>
                    </button>
                    <button id="deploy.sidelink.location" onclick="render('deploy.location', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-transparent hover:bg-zinc-900 hover:border-zinc-900">
                        <span>Location</span>
                    </button>
                    <button id="deploy.sidelink.resources" onclick="render('deploy.resources', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-transparent hover:bg-zinc-900 hover:border-zinc-900">
                        <span>Resources</span>
                    </button>
                    <button id="deploy.sidelink.finalize" onclick="render('deploy.finalize', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-transparent hover:bg-zinc-900 hover:border-zinc-900">
                        <span>Finalize</span>
                    </button>
                </div>
                <div id="deploy.content" class="w-full h-fit mt-1 md:mt-0 md:col-span-3 lg:col-span-5 bg-zinc-900/50 rounded-lg border-b border-zinc-100/10 p-4 relative">
                </div>
            </div>
            <div id="deploy.server.info" class="w-full h-max relative hidden mt-4 space-y-1 bg-zinc-700/10 backdrop-blur-lg border border-zinc-100/10 rounded-lg p-2"></div>
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
let assets = [
    {
        type: "js",
        name: "deploy",
        data: UI.assets.deploy,
        pathOnly: true,
        path: '/deploy'
    }
]
let toMinify = ["content", "page"];
let highlights = {
    "parent": "deploy.sidelinks",
    "toAdd": "border-black ring-1 ring-zinc-800 bg-zinc-900 hover:bg-zinc-950/40",
    "toRemove": "border-transparent hover:bg-zinc-900 hover:border-zinc-900"
}
module.exports = function (req) {
    return {
        settings,
        content: content(req),
        page,
        toPush: topush(req),
        toReplace,
        assets,
        toMinify,
        components: {
            preFetch: true,
            initial: "deploy.appearance",
            data: [
                {
                    "name": "deploy.appearance",
                    "id": "deploy.sidelink.appearance",
                    "targetType": "id",
                    "target": "deploy.content",
                    "data": UI.components.deploy.appearance(req),
                    "highlights": highlights,
                    "functions": ["loadDeployConfig"]
                },
                {
                    "name": "deploy.software",
                    "id": "deploy.sidelink.software",
                    "targetType": "id",
                    "target": "deploy.content",
                    "data": UI.components.deploy.software(req),
                    "highlights": highlights,
                    "functions": ["loadDeployConfig"]
                },
                {
                    "name": "deploy.location",
                    "id": "deploy.sidelink.location",
                    "targetType": "id",
                    "target": "deploy.content",
                    "data": UI.components.deploy.location(req),
                    "highlights": highlights,
                    "functions": ["loadDeployConfig"]
                },
                {
                    "name": "deploy.resources",
                    "id": "deploy.sidelink.resources",
                    "targetType": "id",
                    "target": "deploy.content",
                    "data": UI.components.deploy.resources(req),
                    "highlights": highlights,
                    "functions": ["loadDeployConfig"]
                },
                {
                    "name": "deploy.finalize",
                    "id": "deploy.sidelink.finalize",
                    "targetType": "id",
                    "target": "deploy.content",
                    "data": UI.components.deploy.finalize(req),
                    "highlights": highlights,
                    "functions": ["loadDeployConfig"]
                }
            ]
        }
    }
}