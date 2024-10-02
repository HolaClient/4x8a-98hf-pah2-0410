module.exports = function (req) {
    return /*template*/`
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-4">
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>      
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${hcx.temp.get("totalUsers") ?? 0}</h1>
            <span class="text-zinc-300 text-xs">Total users</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                <path fill-rule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${hcx.temp.get("totalServers") ?? 0}</h1>
            <span class="text-zinc-300 text-xs">Total servers</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
            </svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${hcx.temp.get("totalNodes") ?? 0}</h1>
            <span class="text-zinc-300 text-xs">Total nodes</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${hcx.router.index.connections.length ?? 0}</h1>
            <span class="text-zinc-300 text-xs">Active users</span>
        </div>
    </div>

    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M2 5H22C22.5523 5 23 5.44772 23 6V15C23 15.5523 22.5523 16 22 16V18C22 18.5523 21.5523 19 21 19H13.5858L12.5858 18H11.4142L10.4142 19H3C2.44772 19 2 18.5523 2 18L2 16C1.44772 16 1 15.5523 1 15V6C1 5.44771 1.44772 5 2 5ZM4 16V17H9.58579L10.5858 16H4ZM13.4142 16L14.4142 17H20V16H13.4142ZM7 9H5V12H7V9ZM9 9V12H11V9H9ZM15 9H13V12H15V9ZM17 9V12H19V9H17Z"></path></svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${hcx.temp.get("memoryUsage")}</h1>
            <span class="text-zinc-300 text-xs">Memory usage</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
        <path d="M4.08 5.227A3 3 0 0 1 6.979 3H17.02a3 3 0 0 1 2.9 2.227l2.113 7.926A5.228 5.228 0 0 0 18.75 12H5.25a5.228 5.228 0 0 0-3.284 1.153L4.08 5.227Z" />
        <path fill-rule="evenodd" d="M5.25 13.5a3.75 3.75 0 1 0 0 7.5h13.5a3.75 3.75 0 1 0 0-7.5H5.25Zm10.5 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
      </svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${hcx.temp.get("diskUsage")}</h1>
            <span class="text-zinc-300 text-xs">Disk usage</span>
        </div>
    </div>
    <div class="w-full flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-4 border border-black ring-1 ring-zinc-800">
        <div class="rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 ring-1 ring-black p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
        <path d="M16.5 7.5h-9v9h9v-9Z" />
        <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
      </svg>
        </div>
        <div class="flex flex-col">
            <h1 class="text-zinc-200 text-md">${hcx.temp.get("cpuUsage")}</h1>
            <span class="text-zinc-300 text-xs">CPU Usage</span>
        </div>
    </div>
</div>`
}