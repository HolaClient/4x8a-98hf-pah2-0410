module.exports = function (req) {
    return /*template*/`
<aside id="admin.sidebars.permissions" hcx-component-type="aside" class="w-48 z-10 hidden md:block fixed bg-zinc-950/50 backdrop-blur-lg md:bg-zinc-900/50 border-r border-zinc-800 h-screen top-14 left-0 md:left-20 bottom-0 shadow-inner shadow-black">
    <div class="mt-4">
        <div class="px-4 mb-2">
            <div class="flex items-center text-center justify-center space-x-2 text-zinc-300 rounded-lg px-2 p-1 bg-zinc-900 border border-black ring-1 ring-zinc-800">
                <span>Permissions</span>
            </div>
        </div>
        <div class="w-full mt-4 px-4 space-y-1" id="admin.permissions.sidelinks">
        <button id="admin.permissions.sidelink.roles" onclick="render('admin.permissions.roles', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
      

                <span>Roles</span>
            </button>
        <button id="admin.permissions.sidelink.intents" onclick="render('admin.permissions.intents', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
</svg>

                <span>Intents</span>
            </button>

            <button id="admin.permissions.sidelink.users" onclick="render('admin.permissions.users', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>          
                <span>Users</span>
            </button>
        </div>
    </div>
</aside>`
}