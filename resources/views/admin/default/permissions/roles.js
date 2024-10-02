module.exports = function (req) {
    return /*template*/`
    <h1 class="text-zinc-300 w-full text-left">WIP</h1>
                <div class="hidden"><div class="w-full h-max relative md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 bg-zinc-700/10 backdrop-blur-lg border border-zinc-100/10 rounded-lg p-2">
                <div id="admin.permissions.sidelinks" class="w-full md:p-2 pr-0 py-0.5 flex md:flex-col overflow-x-auto items-center px-0.5 md:px-0 space-x-2 md:space-x-0 pb-1 md:pb-0">
                    <button id="admin.permissions.sidelink.owner" onclick="render('admin.permissions.software', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-transparent hover:bg-zinc-900 hover:border-zinc-900">
                        <span>Owner</span>
                    </button>
                    <button id="admin.permissions.sidelink.management" onclick="render('admin.permissions.location', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-transparent hover:bg-zinc-900 hover:border-zinc-900">
                        <span>Management</span>
                    </button>
                    <button id="admin.permissions.sidelink.user" onclick="render('admin.permissions.resources', 'component')" class="p-1 px-2 h-max w-full flex items-center text-zinc-400 rounded-lg text-sm hover:text-zinc-300 duration-300 transition-all border border-transparent hover:bg-zinc-900 hover:border-zinc-900">
                        <span>User</span>
                    </button>
                </div>
                <div id="admin.permissions.content" class="w-full min-h-full h-fit text-zinc-400 mt-1 md:mt-0 md:col-span-3 lg:col-span-5 bg-zinc-900/50 rounded-lg border-b border-zinc-100/10 p-4 relative">
                <div class="grid grid-cols-1 gap-2">
                <div class="w-full flex flex-col">
                    Color:
                    <div class="flex items-center md:max-w-md space-x-2">
                        <div class="bg-[#a855f7] rounded-xl mt-1 h-9 w-10"></div>
                        <input type="text" value="#a855f7"
                        class="bg-zinc-950 p-2 mt-1 rounded-xl w-full outline-none border border-zinc-800/80">
                    </div>
                </div>
                <div class="w-full flex flex-col">
                    Role name:
                    <input type="text" value="management"
                        class="bg-zinc-950 p-2 mt-1 md:max-w-md rounded-xl w-full outline-none border border-zinc-800/80">
                </div>
                <div class="w-full flex flex-col max-w-md">
                    Role intents:
                    <div class="flex items-center space-x-1">
                        <span class="bg-zinc-900/30 backdrop-blur-xl w-max h-max px-2 py-1 rounded-full">*</span>,
                        <span class="bg-zinc-900/30 backdrop-blur-xl w-max h-max px-2 py-1 rounded-full">hc.su</span>
                        <span class="bg-zinc-900/20 backdrop-blur-xl w-max h-max p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></span>
                    </div>
                </div>
                <div class="w-full flex flex-col">
                    Role Permission:
                    <input type="number" value="400"
                        class="bg-zinc-950 p-2 mt-1 md:max-w-md rounded-xl w-full outline-none border border-zinc-800/80">
                </div>
            </div>
                </div></div>`
}