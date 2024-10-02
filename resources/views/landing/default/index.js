const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`));

const settings = {
    meta: {
        title: "Landing Page",
        description: "Landing Page",
        keywords: "Landing Page",
    },
    permissions: {
        intent: "hcx.pages.landing",
        level: 0
    }
};
let content = /*template*/ ``;

let header = /*template*/ `
<header class="absolute inset-x-0 top-0 z-10">
<div class="relative flex justify-center">
    <div class="mx-4 w-full max-w-7xl">
        <nav class="flex min-h-[80px] items-center justify-between px-4 py-3">
            <div class="flex items-center space-x-2">
                <h1 class="text-transparent bg-gradient-to-br from-white to-zinc-500 bg-clip-text w-max text-2xl font-bold font-raleway">HolaClient-X</h1>
            </div>
            <div class="flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 sm:space-x-6">
                <a href="https://console.holacorp.org" class="hover:text-gray-200 duration-300">Console</a>
                <a href="https://discord.gg/CvqRH9TrYK" class="hover:text-gray-200 duration-300">Discord</a>
                <button onclick="location.href='/home'" class="group relative overflow-hidden rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100">
                    <div class="dot animate-flow p-4 blur-md group-hover:blur-sm group-hover:p-5 -mt-2 -ml-2 rounded-full bg-cyan-400/90 absolute"></div>
                    <div class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                        Get started now
                    </div>
                </button>
            </div>
        </nav>
    </div>
</div>
</header>`;

let main = /*template*/ `<main></main>`;
let sec1 = /*template*/`
<section class="relative isolate transform-gpu pt-14">
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-cyan-400/10 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]">
        <defs>
            <pattern id="hero" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#hero)"></rect>
    </svg>
    <div class="py-24 sm:py-36 md:py-40 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="relative mx-auto max-w-3xl text-center">
                <h1 class="bg-gradient-to-br from-white to-zinc-800/20 bg-clip-text text-4xl/[1.07] font-bold tracking-tight text-transparent md:text-6xl/[1.07]">Welcome to the <span class="font-rajdhani">Future</span>, <span class="font-raleway text-6xl md:text-8xl">HolaClient-X<span class="font-space">1</span></span></h1>
                <p class="mt-6 text-md font-medium text-zinc-400 md:text-xl">
                    The new X series of HolaClient is specifically designed to support Pterodactyl, offering a plethora of advanced features, unparalleled performance, and a sleek modern design along with 90+ features totally for free!
                </p>
                <div class="mt-10 flex flex-col items-center justify-center gap-y-8">
                    <button onclick="location.href='/home'" class="group relative overflow-hidden rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100">
                        <div class="dot animate-flow p-4 blur-md group-hover:blur-sm group-hover:p-5 -mt-2 -ml-2 rounded-full bg-cyan-400/90 absolute"></div>
                        <div class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                            Get started now
                        </div>
                    </button>
                </div>
            </div>
            <div class="relative pt-16">
                <div class="relative" style="transform: none;">
                    <div class="rounded-md bg-zinc-950 ring-1 ring-white/10 lg:rounded-2xl">
                        <img src="https://cdn.holaclientx.tech/production/assets/plain.png" alt="showcase">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;
let sec2 = /*template*/`<section class="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
                <div class="grid max-w-xl lg:max-w-2xl items-start justify-between gap-5">
                    <div class="text-4xl/[1.07] font-bold tracking-tight md:text-5xl/[1.07]">
                        <span class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                            More than you'll ever need!
                        </span>
                    </div>
                    <div class="text-lg text-zinc-400/80">
                        From account creation to managing your wallet, we've got you covered. With more than 100+ features, you'll never need another dashboard.
                    </div>
                </div>
                <div class="mt-16 grid grid-cols-6 gap-4 lg:grid-cols-12 lg:gap-6 xl:gap-8">
                    <div class="flex h-[400px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/80 md:col-span-3 lg:col-span-5 xl:col-span-4">
                        <div class="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
                            <div class="relative -z-10 h-full w-full [mask:linear-gradient(to_left,transparent,black_150%)]">
                                <div class="relative -left-0 right-0 h-full w-full -top-6">
                                    <img src="https://media.discordapp.net/attachments/1135147336771850250/1272013795203481680/image.png?ex=66b96ea9&is=66b81d29&hm=cd21f4ba3c9c9a73e57f8ef9b4b75ffa1300e52e6e34872cbd1b39b091d5eec1&=&format=webp&quality=lossless" class="size-full" alt="pic">
                                </div>
                            </div>
                        </div>
                        <div class="mt-auto w-full space-y-4 px-4 pb-6">
                            <h3 class="text-lg/none font-medium text-zinc-200">Plugins manager</h3>
                            <p class="max-w-sm text-sm text-zinc-400/80">Effortlessly deploy plugins from a vast library of over 60k+ options to your server instantly and seamlessly.</p>
                        </div>
                    </div>
                    <div class="flex h-[400px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/80 md:col-span-3 lg:col-span-5 xl:col-span-4">
                        <div class="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
                            <div class="relative -z-10 h-full w-full [mask:linear-gradient(to_left,transparent,black_150%)]">
                                <div class="absolute -left-0 right-0 -top-6 h-full w-full overflow-hidden">
                                    <img src="/assets/images/mods.webp" class="h-full w-auto" alt="pic">
                                </div>
                            </div>
                        </div>
                        <div class="mt-auto w-full space-y-4 px-4 pb-6">
                            <h3 class="text-lg/none font-medium text-zinc-200">Mods manager</h3>
                            <p class="max-w-sm text-sm text-zinc-400/80">Effortlessly deploy mods from a vast library of over 60k+ options to your server instantly and seamlessly.</p>
                        </div>
                    </div>
                    <div class="flex h-[400px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/80 md:col-span-3 lg:col-span-5 xl:col-span-4">
                        <div class="mt-auto w-full space-y-4 px-4 pb-6">
                            <h3 class="text-lg/none font-medium text-zinc-200">Players manager</h3>
                            <p class="max-w-sm text-sm text-zinc-400/80">Seamlessly manage in-game players via the server manager, currently supports OP, Bans & Whitelists.</p>
                        </div>
                        <div class="mt-auto w-full space-y-4 px-4 pb-6">
                            <h3 class="text-lg/none font-medium text-zinc-200">Subdomains manager</h3>
                            <p class="max-w-sm text-sm text-zinc-400/80">Easily assign a subdomain for a specific server with limits & anti-cheat systems active 24/7.</p>
                        </div>
                        <div class="mt-auto w-full space-y-4 px-4 pb-6">
                            <h3 class="text-lg/none font-medium text-zinc-200">Server transfer</h3>
                            <p class="max-w-sm text-sm text-zinc-400/80">Transfer your server to another node or user easily and comparatively quicker with just 2 clicks.</p>
                        </div>
                    </div>
                    <div class="flex h-[400px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/80 md:col-span-3 xl:order-4 xl:col-span-5">
                        <div class="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
                            <div class="relative -z-10 h-full w-full [mask:linear-gradient(to_left,transparent,black_150%)]">
                                <div class="absolute left-0 right-0 -top-0 h-full w-full overflow-hidden">
                                    <img src="/assets/images/admin.webp" class="h-full w-auto" alt="pic">
                                </div>
                            </div>
                        </div>
                        <div class="mt-auto w-full space-y-4 px-8 pb-8">
                            <h3 class="text-lg/none font-medium text-zinc-200">Easy & Optimistic Admin UI</h3>
                            <p class="max-w-sm text-sm text-zinc-400/80">Even a person with no experience upon these stuff can run a host easily!</p>
                        </div>
                    </div>
                    <div class="flex h-[400px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/80 md:col-span-5 xl:order-5 xl:col-span-7">
                        <div class="h-[400px] pt-8 overflow-hidden [mask:radial-gradient(60%_60%_at_50%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]">
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 transform-gpu">
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDj6o75ACATmaEA_V8re3eqJqaNuWuzaU-K8X_y_DsQ&s" class="w-14 h-auto" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-discord-9185430-7516828.png?f=webp" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-226579.png?f=webp" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_170312.png" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/146px-PayPal_Logo_Icon_2014.svg.png" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="/assets/images/cryptomus.webp" class="w-12 h-12 rounded-full" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/stripe_logo_icon_167962.png" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/146px-PayPal_Logo_Icon_2014.svg.png" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/146px-PayPal_Logo_Icon_2014.svg.png" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/146px-PayPal_Logo_Icon_2014.svg.png" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/146px-PayPal_Logo_Icon_2014.svg.png" class="w-10 h-10" alt="logo">
                                </div>
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/146px-PayPal_Logo_Icon_2014.svg.png" class="w-10 h-10" alt="logo">
                                </div>
                            </div>
                        </div>
                        <div class="mt-auto w-full space-y-4 px-8 pb-8">
                            <h3 class="text-lg/none font-medium text-zinc-200">Huge community & ecosystem</h3>
                            <p class="max-w-md text-sm text-zinc-400/80 xl:max-w-sm">
                                HolaClient-X has a massive community and ecosystem of developers and users.
                            </p>
                        </div>
                    </div>
                </div>
            </section>`;
let sec3 = /*template*/`<section class="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
                <div class="grid max-w-xl lg:max-w-2xl items-start justify-between gap-5">
                    <div class="text-4xl/[1.07] font-bold tracking-tight md:text-5xl/[1.07]">
                        <span class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                            What our users say?
                        </span>
                    </div>
                    <div class="text-lg text-zinc-400/80">
                        Testimonials given by authorized hosting owners/users of the software.
                    </div>
                </div>
                <div class="relative mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 h-max text-zinc-400">
                    <div class="absolute z-20 bg-gradient-to-t from-zinc-950 to-transparent w-full h-full"></div>
                    <div class="flex space-y-4 flex-col w-full">
                        <div class="rounded-2xl w-full border border-zinc-100/10 p-4 bg-zinc-900/50">
                            <div class="flex w-full items-center space-x-3">
                                <img src="https://cdn.discordapp.com/avatars/606129505874214939/5a4f9854d37a4cffeb8fb8d79875237d.png?size=1024" alt="user" class="w-10 h-10 rounded-full">
                                <div class="flex flex-col text-left justify-start">
                                    <h1 class="text-md font-bold text-zinc-200">IGrok2</h1>
                                    <span class="text-xs text-zinc-400">@igrok2</span>
                                </div>
                            </div>
                            <p class="pt-4">"👍 Best Client panel! No bugs, clear code"</p>
                        </div>
                        <div class="rounded-2xl w-full border border-zinc-100/10 p-4 bg-zinc-900/50">
                            <div class="flex w-full items-center space-x-3">
                                <img src="https://cdn.discordapp.com/avatars/762102660421386261/ca7df725bb1557fbc0a11f7619bfc585.png?size=1024" alt="user" class="w-10 h-10 rounded-full">
                                <div class="flex flex-col text-left justify-start">
                                    <h1 class="text-md font-bold text-zinc-200">Athif</h1>
                                    <span class="text-xs text-zinc-400">@athif251</span>
                                </div>
                            </div>
                            <p class="pt-4">"Good dashboard, easy to use. I hope HolaClient does more better in the future."</p>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-4 w-full">
                        <div class="rounded-2xl w-full border border-zinc-100/10 p-4 bg-zinc-900/50">
                            <div class="flex w-full items-center space-x-3">
                                <img src="https://cdn.discordapp.com/avatars/611502414494826506/034ed3a68cdac15ee00393dae5336166.png?size=1024" alt="user" class="w-10 h-10 rounded-full">
                                <div class="flex flex-col text-left justify-start">
                                    <h1 class="text-md font-bold text-zinc-200">Lazo Rita</h1>
                                    <span class="text-xs text-zinc-400">@alvarikok3e</span>
                                </div>
                            </div>
                            <p class="pt-4">"CR072 strives for the best support and helps you to keep everything running smoothly"</p>
                        </div>
                        <div class="rounded-2xl w-full border border-zinc-100/10 p-4 bg-zinc-900/50">
                            <div class="flex w-full items-center space-x-3">
                                <img src="https://cdn.discordapp.com/avatars/880259976717799474/2778f591584181f5a5d36f1666da4b36.png?size=1024" alt="user" class="w-10 h-10 rounded-full">
                                <div class="flex flex-col text-left justify-start">
                                    <h1 class="text-md font-bold text-zinc-200">justrieriee.</h1>
                                    <span class="text-xs text-zinc-400">@justrieriee</span>
                                </div>
                            </div>
                            <p class="pt-4">"I just like HolaClient, 10/10 for now, HolaClient is always the best!"</p>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-4 w-full">
                        <div class="rounded-2xl w-full border border-zinc-100/10 p-4 bg-zinc-900/50">
                            <div class="flex w-full items-center space-x-3">
                                <img src="https://cdn.discordapp.com/avatars/402878941272080394/355718b51a2bc2b71671fa8ac361bfef.png?size=1024" alt="user" class="w-10 h-10 rounded-full">
                                <div class="flex flex-col text-left justify-start">
                                    <h1 class="text-md font-bold text-zinc-200">Respect</h1>
                                    <span class="text-xs text-zinc-400">@r.espect</span>
                                </div>
                            </div>
                            <p class="pt-4">"HolaClient has been a game-changer for our free hosting company, Nxgthost.com. Its beautiful UI and feature-rich design have streamlined our operations, reducing wait times and enhancing client satisfaction. As an open-source solution, its strong community support make it our top recommendation for anyone in the free hosting industry."</p>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-4 w-full">
                        <div class="rounded-2xl w-full border border-zinc-100/10 p-4 bg-zinc-900/50">
                            <div class="flex w-full items-center space-x-3">
                                <img src="https://cdn.discordapp.com/avatars/760438064971251753/bde26ec62ab9802adcca7d141b9e77cc.png?size=1024" alt="user" class="w-10 h-10 rounded-full">
                                <div class="flex flex-col text-left justify-start">
                                    <h1 class="text-md font-bold text-zinc-200">Piecer</h1>
                                    <span class="text-xs text-zinc-400">@piecer.xd</span>
                                </div>
                            </div>
                            <p class="pt-4">"I love the client so much it had almost everything to run a host I recommend using it!"</p>
                        </div>
                        <div class="rounded-2xl w-full border border-zinc-100/10 p-4 bg-zinc-900/50">
                            <div class="flex w-full items-center space-x-3">
                                <img src="https://cdn.discordapp.com/avatars/693801767766458408/ff14cdbb3ad1bf10a1dc507271f7354b.png?size=1024" alt="user" class="w-10 h-10 rounded-full">
                                <div class="flex flex-col text-left justify-start">
                                    <h1 class="text-md font-bold text-zinc-200">Manucrack YT</h1>
                                    <span class="text-xs text-zinc-400">@manucrackyt</span>
                                </div>
                            </div>
                            <p class="pt-4">"It has more functions and configurations than others and the creator releases lots of versions with new characteristics and not only for Bug Fixing."</p>
                        </div>
                    </div>
                    <div class="absolute z-40 -mb-10 bottom-0 flex w-full items-center justify-center space-x-2">
                        <button class="group relative overflow-hidden rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100">
                            <div class="relative z-10 rounded-full bg-zinc-900/50 px-4 py-1.5 ring-1 ring-white/10">
                                View more
                            </div>
                        </button>
                        <button class="group relative overflow-hidden rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100">
                            <div class="dot animate-flow p-4 blur-md group-hover:blur-sm group-hover:p-5 -mt-2 -ml-2 rounded-full bg-cyan-400/90 absolute"></div>
                            <div class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                                Add yours
                            </div>
                        </button>
                    </div>
                </div>
            </section>`;
let cta = /*template*/`<section class="relative mx-auto mt-16 max-w-full p-6 pb-12 pt-20 lg:px-8">
                <div class="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
                <div class="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#09090b_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] md:max-w-[600px]"></div>
                <div class="relative isolate">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-cyan-400/10 [mask-image:radial-gradient(40%_80%_at_center,black,transparent)]">
                        <defs>
                            <pattern id="cta" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#cta)"></rect>
                    </svg>
                    <div class="mx-auto max-w-xl text-center">
                        <h2 class="bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                            Still couldn't take a bold decision?
                        </h2>
                        <p class="mx-auto mt-6 max-w-xl text-lg text-zinc-400/80">
                            Please check our demo to see how HolaClient-X works.
                        </p>
                        <div class="mt-12 flex items-center justify-center">
                            <button class="group relative overflow-hidden rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100">
                            <div class="dot animate-flow p-4 blur-md group-hover:blur-sm group-hover:p-5 -mt-2 -ml-2 rounded-full bg-cyan-400/90 absolute"></div>
                            <div class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                                Check demo
                            </div>
                        </button>
                    </div>
                </div>
            </section>`
let page = /*template*/ `
${UI.components.head(settings.meta)}
<body hcx-component-name="body" id="content" class="bg-zinc-950 w-screen h-full overflow-x-hidden">
</body>`;
let toPush = [
    {
        targetType: "element",
        target: "html",
        id: "content",
        data: content,
    },
    {
        targetType: "element",
        target: "body",
        id: "header",
        data: header,
    },
    {
        targetType: "element",
        target: "body",
        id: "main",
        data: main,
    },
    {
        targetType: "element",
        target: "main",
        id: "section-1",
        data: sec1,
    },
    {
        targetType: "element",
        target: "main",
        id: "section-2",
        data: sec2,
    },
    {
        targetType: "element",
        target: "main",
        id: "section-3",
        data: sec3,
    },
    {
        targetType: "element",
        target: "main",
        id: "cta",
        data: cta,
    },
    {
        targetType: "element",
        target: "html",
        id: "footer",
        data: UI.components.footer,
    },
];
let toReplace = [
    {
        targetType: "element",
        target: "head",
        id: "head",
        data: UI.components.head(settings.meta),
    },
];
let assets = [
    {
        type: "js",
        name: "landing",
        data: UI.assets.landing,
    },
];
let toMinify = ["content", "header", "page", "sec1", "sec2", "sec3", "cta", "footer"];

module.exports = function (req) {
    return {
        settings,
        content,
        header,
        main,
        sec1,
        sec2,
        sec3,
        cta,
        footer: UI.components.footer,
        page,
        toPush,
        toReplace,
        assets,
        toMinify,
    }
}