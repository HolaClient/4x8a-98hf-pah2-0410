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
<main id="content" class="w-screen pr-4 h-full md:ml-20 relative">
    <div id="admin.addons.content" class="w-full h-screen items-center flex p-4 pl-4 md:pr-64 z-0">
        <h1 class="md:text-7xl xl:text-[256px] text-5xl text-transparent bg-gradient-to-b from-white via-transparent to-white bg-clip-text p-1 font-bold">Work In<br>Progress...</h1>
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
let assets = []
let toMinify = ["content", "page"];
module.exports = function (req) {
    return {
        settings,
        content,
        page,
        toPush: topush(req),
        toReplace,
        assets,
        toMinify
    }
}