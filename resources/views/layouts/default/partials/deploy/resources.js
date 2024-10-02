function calc(req) {
    let inputs = []
    let resources = ["memory", "disk", "cpu", "allocations", "backups", "databases"]

    for (let i of resources) {
        inputs.push(`<div class="w-full text-left">
        <label class="text-gray-400 text-left text-sm uppercase">${i}:
            <input id="${i}" name="${i}" hcx-type="deploy.config" type="text" autocomplete="${i}" value="${req.session.resources[i].total - req.session.resources[i].used}" class="w-full mt-1 bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-lg outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">
        </label>
        </div>`)
    }
    return inputs.join("")
}

module.exports = function (req) {
    return /*template*/`
<div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
    ${calc(req)}
</div>
<div class="col-span-2 flex items-center w-full justify-between mt-4">
<button onclick="render('deploy.location', 'component')" class="p-1 px-2 h-max w-max flex items-center text-zinc-400 rounded-lg text-sm bg-zinc-800/50 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 rotate-180">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
    <span class="pl-2">Previous</span>
</button>
<button onclick="render('deploy.finalize', 'component')" class="p-1 px-2 h-max w-max flex items-center text-zinc-400 rounded-lg text-sm bg-zinc-800/50 hover:text-zinc-300 hover:bg-zinc-950/40 border border-black ring-1 ring-zinc-800 duration-300 transition-all">
    <span class="pr-2">Next</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
</button>
</div>`
}