const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Admin | Settings",
        description: "Landing Page",
        keywords: "Landing Page",
    },
    permissions: {
        intent: "hcx.pages.admin.settings",
        level: 100,
        noPermitRedirect: "/home"
    }
};
let content = /*template*/`
<main id="content" class="w-screen pr-4 h-full md:ml-64 pt-16 relative">
    <div id="admin.settings.content" class="w-full h-full p-4 pl-8 md:pr-64 z-0">
        
    </div>
    <div id="savealert" class="fixed hidden backdrop-blur-lg border border-zinc-800/80 bg-zinc-900/30 md:max-w-sm items-center justify-between lg:max-w-screen-md rounded-xl inset-x-6 bottom-6 z-40 mx-auto">
    <a class="text-white text-md pl-4">
        Careful - You've unsaved changes.
    </a>
    <div class="flex items-center space-x-2 text-zinc-400 pr-2">
    <a onclick="revertSettings()" class="cursor-pointer group flex gap-3 m-2 rounded-xl p-[1px]">
        <span class="text-sm w-full h-full tracking-wide group-hover:text-zinc-200">Revert changes</span>
    </a>
    <a onclick="saveSettings()" class="cursor-pointer group flex gap-3 m-2 rounded-xl p-[1px] shadow-inner shadow-zinc-950 w-max h-max border border-yellow-900/30 bg-gradient-to-br from-zinc-800/80 to-transparent">
        <span class="text-sm w-full h-full group-hover:duration-300 duration-300 px-3 bg-zinc-900 group-hover:bg-zinc-950/50 rounded-xl p-3 tracking-wide text-zinc-300 group-hover:text-white">Save Changes</span>
    </a>
    </div>
</div>
</main>
`
function page(req) {
    return /*template*/`
${UI.components.head(settings.meta)}
<body hcx-component-name="body" class="bg-zinc-950 w-screen h-full overflow-x-hidden">
${hcx.loadModule(path.resolve(__dirname, `./partials/aside.js`), req)}
${hcx.loadModule(path.resolve(__dirname, `./partials/nav.js`))}
${hcx.loadModule(path.resolve(__dirname, `./partials/sidebars/settings.js`), req)}
${content}
</body>
`
}
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
            "id": "sidebar",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/sidebars/settings.js`), req)
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
            "data": content
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
        name: "settings",
        data: UI.assets.settings,
        pathOnly: true,
        path: '/admin/settings'
    },
    {
        type: "js",
        name: "settings",
        data: UI.assets.pterodactyl,
        pathOnly: true,
        path: '/admin/settings'
    }
]
let toMinify = ["content", "page"];
let highlights = {
    "parent": "admin.settings.sidelinks",
    "toAdd": "border-black ring-1 ring-zinc-800 bg-zinc-900 hover:bg-zinc-950/40 text-zinc-200",
    "toRemove": "border-transparent hover:bg-zinc-900 hover:border-zinc-900"
}
function comps(req) {
    let cmps = []
    let compsDetails = ["appearance", "authentication", "panel"]
    for (let i of compsDetails) {
        cmps.push({
            "name": `admin.settings.${i}`,
            "id": `admin.settings.sidelink.${i}`,
            "targetType": "id",
            "target": "admin.settings.content",
            "data": hcx.loadModule(path.resolve(__dirname, `./settings/${i}.js`), req),
            "highlights": highlights,
            "functions": i == "panel" ? ["reloadSettings", "render('admin.settings.panel.overview', 'component')"] : ["reloadSettings"]
        });
    }
    let cDetails = ["overview", "nodes", "softwares"]
    for (let i of cDetails) {
        cmps.push({
            "name": `admin.settings.panel.${i}`,
            "id": `admin.settings.panel.sidelink.${i}`,
            "targetType": "id",
            "target": "admin.settings.panel.content",
            "data": hcx.loadModule(path.resolve(__dirname, `./vendors/${i}.js`), req),
            "highlights": {
                "parent": "admin.settings.panel.sidelinks",
                "toAdd": "border-black ring-1 ring-zinc-800 bg-zinc-900 hover:bg-zinc-950/40 text-zinc-200",
                "toRemove": "border-transparent hover:bg-zinc-900 hover:border-zinc-900"
            },
            "functions": i == "overview" ? [] : [`pterodactyl${i}`]
        });
    }
    return cmps
}
module.exports = function (req) {
    return {
        settings,
        content,
        page: page(req),
        toPush: topush(req),
        toReplace,
        assets,
        toMinify,
        components: {
            preFetch: true,
            initial: "admin.settings.authentication",
            data: comps(req)
        }
    }
}