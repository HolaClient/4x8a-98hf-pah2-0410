module.exports = function () {
    return /*template*/`
    <div class="w-screen h-screen overflow-hidden flex flex-col items-center justify-center relative">
        <div class="flex items-center space-x-8">
            <img src="https://cdn.holaclientx.tech/holacorp.png" alt="HolaClient Logo" class="size-28">    
            <div class="flex flex-col items-start max-w-fit">
                <h1 class="text-white font-semibold text-2xl">HolaClient-X1</h1>
                <span class="text-zinc-400 text-sm w-full flex items-center justify-between">Version: <span class="text-zinc-200">${hcx?.config?.app?.version || "X1 24Q4"}</span></span>
                <span class="text-zinc-400 text-sm w-full flex items-center justify-between">Build: <span class="text-zinc-200">${hcx?.config?.app?.build || "X107102401"}</span></span>
            </div>
        </div>
        <h1 class="text-zinc-100 text-xl text-center lg:max-w-xl pt-4">
            Application error: A client-side exception has occured, please check the application logs for more information.
            <br>TIP: Please try re-loading the page a several times.<br>
            Need help? feel free to
            <a class="text-sky-400" href="https://discord.gg/CvqRH9TrYK">contact us</a>
            for assistance.
        </h1>
        <span class="text-zinc-400 pt-4">Automatic error reporting system is currently offline.</span>
        <div class="absolute -bottom-20 -left-40 size-96 rounded-full bg-rose-900/50 -z-10 blur-[128px]"></div>
        <div class="absolute -bottom-20 -right-40 size-96 rounded-full bg-rose-900/50 -z-10 blur-[128px]"></div>
        <div class="absolute -bottom-20 w-full size-40 rounded-full bg-rose-900/80 -z-10 blur-[128px]"></div>
    </div>`
}