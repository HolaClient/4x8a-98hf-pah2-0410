const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Market",
        description: "Landing Page",
        keywords: "Landing Page",
    },
    permissions: {
        intent: "hcx.pages.home",
        level: 1,
        noPermitRedirect: "/login"
    }
};
let content = /*template*/`
<main id="content">
    <div class="w-screen h-full md:ml-20 pl-1 pt-16 relative">
        <div class="w-full h-full p-4 z-0 md:pr-24">
<h1 class="text-zinc-300 text-lg">TRENDING <span class="text-zinc-400">(0)</span></h1>
            <span class="text-zinc-400 mt-2">404</span>
            <h1 class="text-zinc-300 text-lg mt-4">RESOURCES <span class="text-zinc-400">(8)</span></h1>
            <div class="w-full mt-2 grid grid-cols-4 gap-4">
                <div class="w-full border border-zinc-100/10 rounded-xl p-1">
                    <div class="w-full h-max p-px rounded-xl bg-gradient-to-b from-zinc-900 to-transparent">
                        <div class="w-full bg-zinc-950 rounded-xl overflow-hidden relative">
                            <div class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950"></div>
                            <div class="absolute z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"></div>
                            <div class="w-full z-0 h-28 rounded-t-xl bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/92434128/photo/computer-ram.jpg?s=612x612&w=0&k=20&c=hC-HAdO9jDsfWWTwc9f2s6zqCiaWyQ-vqt-8pHMGS5A=')]"></div>
                        </div>
                    </div>
                    <div class="w-full px-2 pb-2">
                        <span class="text-lg pl-0.5 text-zinc-300">Memory</span>
                        <div class="w-full grid grid-cols-2 gap-2">
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-green-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Buy
                            </button>
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-rose-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full border border-zinc-100/10 rounded-xl p-1">
                    <div class="w-full h-max p-px rounded-xl bg-gradient-to-b from-zinc-900 to-transparent">
                        <div class="w-full bg-zinc-950 rounded-xl overflow-hidden relative">
                            <div class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950"></div>
                            <div class="absolute z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"></div>
                            <div class="w-full z-0 h-28 rounded-t-xl bg-center bg-cover bg-no-repeat bg-[url('https://t3.ftcdn.net/jpg/02/34/32/70/360_F_234327002_DwU2bGPJioLo5khsEfzDoXROoYEg7dqA.jpg')]"></div>
                        </div>
                    </div>
                    <div class="w-full px-2 pb-2">
                        <span class="text-lg pl-0.5 text-zinc-300">Storage</span>
                        <div class="w-full grid grid-cols-2 gap-2">
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-green-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Buy
                            </button>
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-rose-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full border border-zinc-100/10 rounded-xl p-1">
                    <div class="w-full h-max p-px rounded-xl bg-gradient-to-b from-zinc-900 to-transparent">
                        <div class="w-full bg-zinc-950 rounded-xl overflow-hidden relative">
                            <div class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950"></div>
                            <div class="absolute z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"></div>
                            <div class="w-full z-0 h-28 rounded-t-xl bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1397047877/photo/main-microchip-on-the-motherboard.jpg?s=612x612&w=0&k=20&c=1_jGgHtpbePTeadRR_r8TCwIFAN9ZGRvAzfKftPFy50=')]"></div>
                        </div>
                    </div>
                    <div class="w-full px-2 pb-2">
                        <span class="text-lg pl-0.5 text-zinc-300">CPU Threads</span>
                        <div class="w-full grid grid-cols-2 gap-2">
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-green-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Buy
                            </button>
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-rose-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full border border-zinc-100/10 rounded-xl p-1">
                    <div class="w-full h-max p-px rounded-xl bg-gradient-to-b from-zinc-900 to-transparent">
                        <div class="w-full bg-zinc-950 rounded-xl overflow-hidden relative">
                            <div class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950"></div>
                            <div class="absolute z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"></div>
                            <div class="w-full z-0 h-28 rounded-t-xl bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1513438713/photo/dns-domain-name-system-network-web-communication-2023.jpg?s=612x612&w=0&k=20&c=TFwZ7Prvmf2ff003AO0O-FMWaHwQfz9uUjdEPQ8zQFI=')]"></div>
                        </div>
                    </div>
                    <div class="w-full px-2 pb-2">
                        <span class="text-lg pl-0.5 text-zinc-300">Subdomains</span>
                        <div class="w-full grid grid-cols-2 gap-2">
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-green-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Buy
                            </button>
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-rose-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full border border-zinc-100/10 rounded-xl p-1">
                    <div class="w-full h-max p-px rounded-xl bg-gradient-to-b from-zinc-900 to-transparent">
                        <div class="w-full bg-zinc-950 rounded-xl overflow-hidden relative">
                            <div class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950"></div>
                            <div class="absolute z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"></div>
                            <div class="w-full z-0 h-28 rounded-t-xl bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1294021851/photo/abstract-graphic-world-map-illustration-on-blue-background-big-data-and-networking-concept-3d.jpg?s=612x612&w=0&k=20&c=XTG7NLkT69VxJdCCXUmD-IIUuICEwzAlyI8bsU4Z_NI=')]"></div>
                        </div>
                    </div>
                    <div class="w-full px-2 pb-2">
                        <span class="text-lg pl-0.5 text-zinc-300">Allocations</span>
                        <div class="w-full grid grid-cols-2 gap-2">
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-green-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Buy
                            </button>
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-rose-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full border border-zinc-100/10 rounded-xl p-1">
                    <div class="w-full h-max p-px rounded-xl bg-gradient-to-b from-zinc-900 to-transparent">
                        <div class="w-full bg-zinc-950 rounded-xl overflow-hidden relative">
                            <div class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950"></div>
                            <div class="absolute z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"></div>
                            <div class="w-full z-0 h-28 rounded-t-xl bg-center bg-cover bg-no-repeat bg-[url('https://techsevenpartners.com/wp-content/uploads/2022/06/Digital-Cloud-Graphic.jpg')]"></div>
                        </div>
                    </div>
                    <div class="w-full px-2 pb-2">
                        <span class="text-lg pl-0.5 text-zinc-300">Backups</span>
                        <div class="w-full grid grid-cols-2 gap-2">
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-green-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Buy
                            </button>
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-rose-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full border border-zinc-100/10 rounded-xl p-1">
                    <div class="w-full h-max p-px rounded-xl bg-gradient-to-b from-zinc-900 to-transparent">
                        <div class="w-full bg-zinc-950 rounded-xl overflow-hidden relative">
                            <div class="absolute z-10 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950"></div>
                            <div class="absolute z-10 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"></div>
                            <div class="w-full z-0 h-28 rounded-t-xl bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1627504007/vector/big-data-visualization-social-network-financial-analysis-of-complex-databases-data-mining.jpg?s=612x612&w=0&k=20&c=4YTmAqfUlyXx2tZ71jfj8mXvmOhu7qRXG1SygGaX3l8=')]"></div>
                        </div>
                    </div>
                    <div class="w-full px-2 pb-2">
                        <span class="text-lg pl-0.5 text-zinc-300">Databases</span>
                        <div class="w-full grid grid-cols-2 gap-2">
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-green-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Buy
                            </button>
                            <button class="w-full p-1.5 text-sm mt-1 hover:bg-zinc-900 hover:text-rose-400 duration-300 transition-all text-center text-zinc-400  border border-zinc-100/10 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-zinc-900/70">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
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