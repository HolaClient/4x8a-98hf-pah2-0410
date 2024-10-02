const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`))

const settings = {
    meta: {
        title: "Account | HolaClient-X",
        description: "Manage your HolaClient-X account",
        keywords: "HolaClient-X, account, settings",
    },
    permissions: {
        intent: "hcx.pages.account",
        level: 1,
        noPermitRedirect: "/login"
    }
};
function content(req) { return /*template*/`
<main id="content">
    <div class="w-screen h-full md:ml-20 pl-1 pt-16 relative">
        <div class="w-full h-full p-4 z-0 md:pr-24">
<div class="w-full flex items-center justify-between relative">
                <div class="absolute w-full h-full bg-gradient-to-br from-transparent to-zinc-950"></div>
                <div class="w-full rounded-lg border border-zinc-800/80 overflow-hidden h-56 bg-cover bg-no-repeat bg-center bg-[url('https://pbs.twimg.com/profile_banners/1572072371959529477/1714445941/1080x360')]"></div>
                <div class="absolute -bottom-16 left-8">
                    <div class="relative flex items-end space-x-2">
                        <div class="w-max h-max rounded-full p-1 bg-gradient-to-b from-zinc-800 to-transparent">
                            <img src="${req?.session?.userinfo?.avatar}" alt="user" class="size-28 border border-zinc-800/80 rounded-full">
                        </div>
                        <div class="flex flex-col">
                            <h1 class="text-zinc-300 text-2xl">${req?.session?.userinfo?.nickname || req?.session?.userinfo?.username}</h1>
                            <span class="text-zinc-400">@${req?.session?.userinfo?.username}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-24 w-fit grid grid-cols-3 items-center text-zinc-400 relative">
                <div class="relative z-10 w-full flex flex-col justify-center items-center text-sm">
                    <button onclick="location.href='/account'" class="text-zinc-300 p-1 px-2 hover:bg-zinc-900 duration-300 justify-center transition-all rounded-lg w-full flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 -mb-px">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
                          </svg>
                          <span>Profile</span></button>
                    <div class="w-full bg-sky-400 px-8 h-px rounded-full mt-px"></div>
                    <div class="w-full absolute bottom-0 bg-sky-400 px-8 h-px rounded-full mt-px blur-sm"></div>
                </div>
                <div class="relative z-10 w-full flex flex-col justify-center items-center text-sm">
                    <button class="text-zinc-500 group p-1 px-2 hover:bg-zinc-900 duration-300 justify-center transition-all rounded-lg w-full flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 -mb-px group-hover:hidden">
                            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                          </svg>                          
                        <span class="group-hover:hidden">Edit</span>
                        <span class="group-hover:block hidden">Unavailable</span>
                    </button>
                    <div class="w-full px-8"></div>
                </div>
                <div class="relative z-10 w-full flex flex-col justify-center items-center text-sm">
                    <button class="text-zinc-500 group p-1 px-2 hover:bg-zinc-900 duration-300 justify-center transition-all rounded-lg w-full flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 -mb-px group-hover:hidden">
                            <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                          </svg>
                        <span class="group-hover:hidden">Settings</span>
                        <span class="group-hover:block hidden">Unavailable</span>
                    </button>
                    <div class="w-full px-8"></div>
                </div>
                <div class="absolute bottom-0 w-full bg-zinc-800 h-px"></div>
            </div>
            <div class="w-full mt-4">
                <div class="" id="profile">
                    <div class="w-full grid grid-cols-3 gap-4 pr-4">
                        <div class="relative shadow shadow-black rounded-lg h-max">
                            <div class="w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent blur-sm h-px"></div>
                            <div class="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-2 space-y-2">
                                <div class="w-full flex items center justify-between text-zinc-400 text-sm">
                                    <span class="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                          </svg>
                                          <span>Joined at</span>                              
                                    </span>
                                    <span class="text-zinc-300">${new Date(req?.session?.userinfo?.date?.created).toDateString()}</span>
                                </div>
                                <div class="w-full flex items center justify-between text-zinc-400 text-sm">
                                    <span class="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                                          </svg>
                                          <span>Age</span>                              
                                    </span>
                                    <span class="text-zinc-300">xx</span>
                                </div>
                                <div class="w-full flex items center justify-between text-zinc-400 text-sm">
                                    <span class="flex items-center space-x-2">
                                        <img src="https://cdn.holaclientx.tech/holacorp.png" alt="logo" class="size-5">                                
                                          <span>HC-ACCMS</span>                              
                                    </span>
                                    <span class="text-zinc-300 rounded-lg p-1 bg-zinc-900 text-xs border border-zinc-800">Unavailable</span>
                                </div>
                                <div class="w-full flex items center justify-between text-zinc-400 text-sm">
                                    <span class="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                          </svg>                                  
                                          <span>Verification level</span>                              
                                    </span>
                                    <span class="text-zinc-300">0/4</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative shadow shadow-black rounded-lg col-span-2">
                            <div class="w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent blur-sm h-px"></div>
                            <div class="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-2">
                                <span class="text-zinc-400 text-xs font-bold">PRONOUNS:</span>
                                <p class="text-zinc-400 text-sm">[pronouns] - [gender]</p>
                                <div class="mt-3"></div>
                                <span class="text-zinc-400 text-xs font-bold">ABOUT ME:</span>
                                <p class="text-zinc-400 text-sm">[aboutMe]</p>
                                <p class="text-zinc-400 text-sm">[MOTD]</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-4 grid grid-cols-4 gap-4 relative pr-4">
                        <div class="bg-zinc-900/50 flex p-2 border border-zinc-800/80 justify-between w-full rounded-xl items-center">
                            <div class="flex items-center space-x-2 w-max">
                                <div class="bg-zinc-800/50 h-max w-max group-hover:bg-zinc-900/50 group-hover:border-zinc-700 border border-zinc-800/80 backdrop-blur-3xl shadow text-gray-400 rounded-xl p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                                      </svg>
                                </div>
                                <div class="flex flex-col justify-end">
                                    <h1 class="text-gray-200 cursor-pointer text-sm">Servers</h1>
                                    <p class="text-gray-300 text-xs">
                                        ${hcx.servers.list.getByUser(req.session.userinfo.id).length} servers
                                    </p>
                                </div>
                            </div>
                            <button onclick="render('servers')" class="p-2 bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                        <div class="bg-zinc-900/50 flex p-2 border border-zinc-800/80 justify-between w-full rounded-xl items-center">
                            <div class="flex items-center w-max space-x-2">
                                <div class="bg-zinc-800/50 h-max w-max group-hover:bg-zinc-900/50 group-hover:border-zinc-700 border border-zinc-800/80 backdrop-blur-3xl shadow text-gray-400 rounded-xl p-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="size-5" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 20V19C2 15.134 5.13401 12 9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.8039 12.3135C16.4457 11.6088 17.5545 11.6088 18.1963 12.3135C18.5207 12.6697 18.9869 12.8628 19.4681 12.8403C20.4202 12.7958 21.2043 13.5799 21.1598 14.532C21.1373 15.0132 21.3304 15.4794 21.6866 15.8038C22.3913 16.4456 22.3913 17.5544 21.6866 18.1962C21.3304 18.5206 21.1373 18.9868 21.1598 19.468C21.2043 20.4201 20.4202 21.2042 19.4681 21.1597C18.9869 21.1372 18.5207 21.3303 18.1963 21.6865C17.5545 22.3912 16.4457 22.3912 15.8039 21.6865C15.4795 21.3303 15.0133 21.1372 14.5321 21.1597C13.58 21.2042 12.7959 20.4201 12.8404 19.468C12.8629 18.9868 12.6698 18.5206 12.3136 18.1962C11.6089 17.5544 11.6089 16.4456 12.3136 15.8038C12.6698 15.4794 12.8629 15.0132 12.8404 14.532C12.7959 13.5799 13.58 12.7958 14.5321 12.8403C15.0133 12.8628 15.4795 12.6697 15.8039 12.3135Z" stroke="currentColor" stroke-width="1.5"/>
                                        <path d="M15.3636 17L16.4546 18.0909L18.6364 15.9091" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="flex flex-col justify-end">
                                    <h1 class="text-gray-200 cursor-pointer text-sm">Friends</h1>
                                    <p class="text-gray-300 text-xs">
                                        0 friends
                                    </p>
                                </div>
                            </div>
                            <button class="p-2 bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                        <div class="bg-zinc-900/50 flex p-2 border border-zinc-800/80 justify-between w-full rounded-xl items-center">
                            <div class="w-max flex items-center space-x-2">
                                <div class="bg-zinc-800/50 h-max w-max group-hover:bg-zinc-900/50 group-hover:border-zinc-700 border border-zinc-800/80 backdrop-blur-3xl shadow text-gray-400 rounded-xl p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                      </svg>
                                </div>
                                <div class="flex flex-col justify-end">
                                    <h1 class="text-gray-200 cursor-pointer text-sm">Notifications</h1>
                                    <p class="text-gray-300 text-xs">
                                        0 notifications
                                    </p>
                                </div>
                            </div>
                            <button class="p-2 bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                        <div class="bg-zinc-900/50 flex p-2 border border-zinc-800/80 justify-between w-full rounded-xl items-center">
                            <div class="w-max flex items-center space-x-2">
                                <div class="bg-zinc-800/50 h-max w-max group-hover:bg-zinc-900/50 group-hover:border-zinc-700 border border-zinc-800/80 backdrop-blur-3xl shadow text-gray-400 rounded-xl p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                      </svg>
                                      
                                </div>
                                <div class="flex flex-col justify-end">
                                    <h1 class="text-gray-200 cursor-pointer text-sm">Requests</h1>
                                    <p class="text-gray-300 text-xs">
                                        0 reqs
                                    </p>
                                </div>
                            </div>
                            <button class="p-2 bg-zinc-900 hover:text-zinc-300 hover:bg-zinc-950/20 duration-300 transition-all border border-black text-zinc-400 ring-1 ring-zinc-800 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
`}
let page = /*template*/`
${UI.components.head(settings.meta)}
<body hcx-component-name="body" class="bg-zinc-950 w-screen h-full overflow-x-hidden">
${UI.errors.clientSide()}
</body>
`
function topush(req) {
    return [
        {
            "targetType": "element",
            "target": "body",
            "id": "aside",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/aside.js`), req)
        },
        {
            "targetType": "element",
            "target": "body",
            "id": "nav",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/nav.js`))
        },
        {
            "targetType": "element",
            "target": "body",
            "id": "content",
            "contentCompatible": false,
            "data": content(req)
        },
        {
            "targetType": "element",
            "target": "body",
            "id": "notifications",
            "contentCompatible": false,
            "data": hcx.loadModule(path.resolve(__dirname, `./partials/notifications.js`))
        }
    ]
}
let toReplace = [
    {
        "targetType": "element",
        "target": "head",
        "id": "head",
        "data": UI.components.head(settings.meta)
    }
]
let assets = []
let toMinify = ["content", "page"];

module.exports = function (req) {
    return {
        settings,
        content: content(req),
        page,
        toPush: topush(req),
        toReplace,
        assets,
        toMinify,
    }
}