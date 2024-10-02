module.exports = function (req) {
    return /*template*/`
    <div class="w-full h-max relative md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 bg-zinc-700/10 backdrop-blur-lg border border-zinc-100/10 rounded-lg p-2">
    <div class="mt-1">
        <div class="px-2">
            <div class="flex items-center text-center justify-center space-x-2 text-zinc-300 rounded-lg px-2 p-1 bg-zinc-900 border border-black ring-1 ring-zinc-800">
                <span>Pterodactyl</span>
            </div>
        </div>
        <div class="w-full mt-4 px-2 space-y-1" id="admin.settings.panel.sidelinks">
        <button id="admin.settings.panel.sidelink.overview" onclick="render('admin.settings.panel.overview', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
                <span>Overview</span>
            </button>
        <button id="admin.settings.panel.sidelink.nodes" onclick="render('admin.settings.panel.nodes', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>      
                <span>Nodes</span>
            </button>
            <button id="admin.settings.panel.sidelink.softwares" onclick="render('admin.settings.panel.softwares', 'component')" class="flex items-center space-x-2 w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-md p-1.5 hover:bg-zinc-800/50 duration-300 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
              
                <span>Softwares</span>
            </button>
        </div>
    </div>
    <div id="admin.settings.panel.content" class="w-full min-h-full h-fit text-zinc-400 mt-1 md:mt-0 md:col-span-3 lg:col-span-5 bg-zinc-950 rounded-lg border-b border-zinc-100/10 p-4 relative"></div>`
}