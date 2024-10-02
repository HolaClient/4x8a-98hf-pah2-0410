module.exports = function (req) {
    return /*template*/`
<aside id="admin.sidebars.settings" hcx-component-type="aside" class="w-48 z-10 hidden md:block fixed bg-zinc-950/50 backdrop-blur-lg md:bg-zinc-900/50 border-r border-zinc-800 h-screen top-14 left-0 md:left-20 bottom-0 shadow-inner shadow-black">
    <div class="mt-4">
        <div class="px-4 mb-2">
            <div class="flex items-center text-center justify-center space-x-2 text-zinc-300 rounded-lg px-2 p-1 bg-zinc-900 border border-black ring-1 ring-zinc-800">
                <span>Settings</span>
            </div>
        </div>
        <div class="w-full mt-4 px-4 space-y-1" id="admin.settings.sidelinks">
        <button id="admin.settings.sidelink.appearance" onclick="render('admin.settings.appearance', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
                <span>Appearance</span>
            </button>
        <button id="admin.settings.sidelink.authentication" onclick="render('admin.settings.authentication', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>
                <span>Authentication</span>
            </button>
            <button id="admin.settings.sidelink.panel" onclick="render('admin.settings.panel', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
          </svg>          
                <span>Vendors</span>
            </button>
        </div>
    </div>
</aside>`
}