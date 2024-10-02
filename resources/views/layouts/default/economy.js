const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Economy | HolaClient-X",
        description: "Manage your HolaClient-X economy",
        keywords: "HolaClient-X, economy, credits",
    },
    permissions: {
        intent: "hcx.pages.economy",
        level: 1,
        noPermitRedirect: "/login"
    }
};

let content = /*template*/`
<main id="content">
    <div class="w-screen h-full md:ml-20 pl-1 pt-16 relative">
        <div class="w-full h-full p-4 z-0 md:pr-24">
            <h1 class="text-zinc-200 text-2xl mb-4">Economy Overview</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                    <h2 class="text-zinc-300 text-lg mb-2">Current Balance</h2>
                    <p class="text-zinc-100 text-2xl font-bold">499 USD</p>
                </div>
                <div class="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                    <h2 class="text-zinc-300 text-lg mb-2">Monthly Spending</h2>
                    <p class="text-zinc-100 text-2xl font-bold">150 USD</p>
                </div>
                <div class="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                    <h2 class="text-zinc-300 text-lg mb-2">Active Subscriptions</h2>
                    <p class="text-zinc-100 text-2xl font-bold">2</p>
                </div>
            </div>
            <h2 class="text-zinc-200 text-xl mt-8 mb-4">Recent Transactions</h2>
            <div class="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                <table class="w-full text-zinc-300">
                    <thead>
                        <tr>
                            <th class="text-left p-2">Date</th>
                            <th class="text-left p-2">Description</th>
                            <th class="text-right p-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2">2024-03-15</td>
                            <td class="p-2">Server Upgrade</td>
                            <td class="text-right p-2">-50 USD</td>
                        </tr>
                        <tr>
                            <td class="p-2">2024-03-10</td>
                            <td class="p-2">Credit Purchase</td>
                            <td class="text-right p-2">+100 USD</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
        toMinify,
    }
}