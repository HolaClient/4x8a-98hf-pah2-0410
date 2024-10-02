const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Admin | Home",
        description: "Landing Page",
        keywords: "Landing Page",
    },
    permissions: {
        intent: "hcx.pages.admin",
        level: 100,
        noPermitRedirect: "/home"
    }
};
let content = /*template*/`
<main id="content" class="w-screen pr-4 h-full md:ml-64 pt-16 relative">
    <div id="admin.home.content" class="w-full h-full p-4 pl-8 md:pr-64 z-0">
        
    </div>
</main>
`
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
            "id": "sidebar",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/sidebars/home.js`), req)
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
        name: "charts",
        data: UI.assets.charts,
        pathOnly: true,
        path: '/admin/statistics'
    }
]
let toMinify = ["content", "page"];
let highlights = {
    "parent": "admin.home.sidelinks",
    "toAdd": "border-black ring-1 ring-zinc-800 bg-zinc-900 hover:bg-zinc-950/40 text-zinc-200",
    "toRemove": "border-transparent hover:bg-zinc-900 hover:border-zinc-900"
}
function comps(req) {
    let cmps = []
    let compsDetails = ["overview", "statistics", "features", "news", "notifications", "alerts"]
    for (let i of compsDetails) {
        cmps.push({
            "name": `admin.home.${i}`,
            "id": `admin.home.sidelink.${i}`,
            "targetType": "id",
            "target": "admin.home.content",
            "data": hcx.loadModule(path.resolve(__dirname, `./home/${i}.js`), req),
            "highlights": highlights
        })
    }
    return cmps
}
module.exports = function (req) {
    return {
        settings,
        content,
        page,
        toPush: topush(req),
        toReplace,
        assets,
        toMinify,
        components: {
            preFetch: true,
            initial: "admin.home.overview",
            data: comps(req)
        }
    }
}