module.exports = function (req) {
    return /*template*/`
    <h1 class="text-zinc-200 my-16 w-full flex items-center justify-center text-2xl">
        Finalize
    </h1>
    <div class="col-span-2 flex items-center w-full justify-between mt-4">
        <button onclick="render('deploy.resources', 'component')" class="p-1 px-2 h-max w-max flex items-center text-zinc-400 rounded-lg text-sm bg-zinc-800/50 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <span class="pl-2">Previous</span>
        </button>
        <button onclick="deployServer()" class="p-1 px-2 h-max w-max flex items-center text-zinc-400 rounded-lg text-sm bg-zinc-800/50 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
            <span class="pr-2">Deploy</span>
        </button>
    </div>`
}