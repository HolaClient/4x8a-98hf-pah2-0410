module.exports = function (req) {
    return /*template*/`
    <aside id="serverSidebar" class="w-48 z-10 fixed bg-zinc-950/50 backdrop-blur-lg md:bg-zinc-900/50 border-r border-zinc-800 h-screen top-14 left-20 bottom-0 shadow-inner shadow-black">
        <div class="mt-4">
                <div class="px-4 mb-2">
                    <div class="flex items-center space-x-2 text-zinc-300 rounded-lg px-2 p-1 bg-zinc-900 border border-black ring-1 ring-zinc-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back</span>
                    </div>
                </div>
                <div class="w-full mt-1 px-4">
                    <button onclick="render('servers/info')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                        <span>Information</span>
                    </button>
                </div>
        </div>
    </aside>
    `
}
