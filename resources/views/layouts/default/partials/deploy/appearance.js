module.exports = function (req) {
    return /*template*/`
<div class="w-full grid md:grid-cols-2 gap-4">
    <div class="w-full text-left">
        <label class="text-gray-400 text-left text-sm">Server name:
            <input id="name" name="name" type="text" hcx-type="deploy.config" autocomplete="name" placeholder="${req.session.userinfo.nickname}'s server." class="w-full mt-1 bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-lg outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">
        </label>
    </div>
    <div class="w-full text-left">
        <label class="text-gray-400 text-left text-sm">Server description (Optional):<br>
            <textarea id="description" name="description" hcx-type="deploy.config" rows="4" type="text" autocomplete="name" class="w-full mt-1 bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-lg outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">A nice short & sweet description... (Optional)</textarea>
        </label>
    </div>
</div>
<div class="col-span-2 flex items-center w-full justify-between mt-4">
        <span></span>
        <button onclick="render('deploy.software', 'component')" class="p-1 px-2 h-max w-max flex items-center text-zinc-400 rounded-lg text-sm bg-zinc-800/50 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
            <span class="pr-2">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </button>
    </div>`
}