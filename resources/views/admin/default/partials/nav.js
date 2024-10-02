module.exports = /*template*/`
<nav class="w-full md:pl-20 fixed z-20">
        <div class="w-full h-full py-3 px-4 bg-zinc-900/50 backdrop-blur-md z-40 flex items-center justify-between border-b border-black ring-1 ring-zinc-800">
            <div class="w-max h-full flex items-center justify-center space-x-2 md:space-x-4">
                <button onclick="render('home', 'page')" class="p-1.5 px-2 flex items-center bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    <span class="pl-2 text-sm">Exit</span>
                </button>
                <button onclick="toggleAside()" class="p-2 bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>              
                </button>
                <h1 class="text-zinc-300" id="timeViewer"></h1>
            </div>
            <div class="w-max h-full flex items-center space-x-2">
                <button class="p-1.5 relative flex items-center text-sm bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                    <div onclick="loadLanguageDropdown()" id="currentLanguage" class="flex items-center space-x-2">
                        <span class="pl-1">
                            English
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                    <div id="languageDropdown" class="absolute max-h-96 min-w-fit w-full overflow-y-scroll z-40 top-0 right-0 p-1.5 bg-zinc-950/50 backdrop-blur-lg rounded-lg border border-black ring-1 ring-zinc-800 hidden">
                        <ul id="languageOptions" class="w-full flex flex-col justify-start items-start">
                            <li class="rounded-lg hover:bg-zinc-800 hover:text-zinc-300 w-full text-left p-1"><span>English</span></li>
                            <li class="rounded-lg hover:bg-zinc-800 hover:text-zinc-300 w-full text-left p-1"><span>Arabic</span></li>
                        </ul>
                    </div>
                </button>
                <button onclick="toggleSearchBar()" class="p-2 bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>                      
                </button>
                <button id="notificationsToggleButton" onclick="toggleNotificationsBar()" class="p-2 bg-zinc-900 border border-black hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
`