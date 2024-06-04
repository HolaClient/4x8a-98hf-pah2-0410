<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license MIT
 * 
 * https://x.holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * app.js - Frontend development file.
 *--------------------------------------------------------------------------
*/
const routes = [
  { "name": "home", "href": false, "url": "dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>` },
  { "name": "create", "href": false, "url": "create", "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>` },
  { "name": "servers", "href": false, "url": "servers", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>` },
  { "name": "economy", "href": false, "url": "economy", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>` },
//  { "name": "tickets", "href": false, "url": "tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
//  { "name": "chat", "href": false, "url": "chat", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>` },
  { "name": "market", "href": false, "url": "market", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" /></svg>` },
  { "name": "account", "href": false, "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "admin", "href": true, "url": "/admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` }
]
const userRoutes = [
  { "name": "notifications", "url": "notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const links = [
  { "name": "console", "href": false, "url": "", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  { "name": "files", "href": false, "url": "files", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>` },
  { "name": "plugins", "href": false, "url": "plugins", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "mods", "href": false, "url": "mods", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>` },
  { "name": "subdomains", "href": false, "url": "subdomains", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>` },
  { "name": "players", "href": false, "url": "players", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>` },
  { "name": "databases", "href": false, "url": "databases", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>` },
  { "name": "schedules", "href": false, "url": "schedules", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>` },
  { "name": "backups", "href": false, "url": "backups", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>` },
  { "name": "network", "href": false, "url": "network", "svg": ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>` },
  { "name": "startup", "href": false, "url": "startup", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "settings", "href": false, "url": "settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HolaClient: 500</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="/assets/default/app.css" rel="stylesheet">
</head>

<body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
    <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
        <h1
            class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
            500
        </h1>
        <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
        <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
        <button onclick="window.history.back()"
            class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
            Back</button>
    </div>
</body>`
const handler = new WebSocket(`ws://localhost:2001/ws`);
let wsa = true;
handler.onclose = function () { wsa = false; };
handler.onerror = function () { wsa = false; };
handler.onmessage = async function (event) {
  let a = JSON.parse(event.data);
  switch (a.type) {
    case "render":
      alert(1)
      reload("content", a.page)
      break;
    case "reload":
      reload(a.partial, a.data)
      break;
    case "redirect":
      window.location.href = a.redirect
      break;
    default:
      break;
  }
};
function reload(a, b) {
  if (a && b) {
    document.getElementById(a).innerHTML = b
  }
}
async function getPage(page) {
  //if (wsa == true) {
  //  handler.send(JSON.stringify({ type: "render", page: `/${page}` }));
  //  return new Promise((resolve, reject) => {
  //    handler.onmessage = function (event) {
  //       let data = JSON.parse(event.data);
  //      resolve(data.page.page);
  //     };
  //   });
  //  } else {
  let c;
  if (page.startsWith('/')) {
    c = await fetch(page || "/");
  } else if (page === "") {
    c = await fetch("/");
  } else {
    c = await fetch("/" + (page || "/"));
  }
  return c.text();
  // }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
  <div id="loadOverlay" class="bg-zinc-900/50 backdrop-blur-3xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 h-screen">
      <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
      <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      </h1>
  </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      let g = await fetch(`obviously-a-404-page`);
      let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = h;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  for (let m of userRoutes) {
    let n = document.getElementById(`nav-${m.url}`);
    if (n) n.classList.remove("shadow", "text-white", "bg-zinc-800/90");
    if (document.getElementById(`nav-display-${m.url}`)) document.getElementById(`nav-display-${m.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
  updateLinks();
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      return a.slice(1, b);
    }
    return a.slice(1);
  }
  const c = a.indexOf("/");
  if (c !== -1) {
    return a.slice(0, c);
  }
  return a;
} //This shit was implemented at last, idh time to use this for everything else.
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
async function load() {
  const a = document.getElementById("sidebar");
  const b = document.createDocumentFragment();

  for (let c of routes) {
    const d = document.createElement("li");
    d.innerHTML = `
    <a onclick="render('${c.url}')" id="nav-${c.url}"
        class="flex items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${c.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${c.svg}
            <span class="ml-2 text-lg capitalize">${c.name}</span>
        </div>
    </a>`;

    d.style.opacity = 0;
    d.style.transform = 'translateY(20px)';

    b.appendChild(d);
  }

  a.appendChild(b);

  setTimeout(() => {
    const c = document.querySelectorAll("#sidebar li");
    c.forEach((d, e) => {
      d.style.transition = `opacity 1s ease ${e * 0.1}s, transform 1s ease ${e * 0.1}s`;
      d.style.opacity = 1;
      d.style.transform = 'translateY(0)';
    });
  }, 100);

  highlight();
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const d = document.createDocumentFragment();

    for (let e of userRoutes) {
      const f = document.createElement("li");
      f.innerHTML = `
    <a onclick="render('${e.url}')" id="nav-${e.url}"
        class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${e.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${e.svg}
            <span class="ml-2 text-lg capitalize">${e.name}</span>
        </div>
    </a>`;

      f.style.opacity = 0;
      f.style.transform = 'translateY(20px)';

      d.appendChild(f);
    }

    c.appendChild(d);

    setTimeout(() => {
      const g = document.querySelectorAll("#userDropdown li");
      g.forEach((h, i) => {
        h.style.transition = `opacity 1s ease ${i * 0.1}s, transform 1s ease ${i * 0.1}s`;
        h.style.opacity = 1;
        h.style.transform = 'translateY(0)';
      });
    }, 100);
  } else {
    a.classList.add("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 0;
    c.innerHTML = '';
  }
}
window.onload = () => {
  load();
  highlight();
  updateLinks()
};
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
window.onpopstate = function () {
  render(window.location.href.replace(window.location.origin, ''));
  highlight();
  updateLinks()
}
function updateLinks() {
  const a = document.getElementById("serverLinks");
  if (a) {
    const b = document.createDocumentFragment();
    a.innerHTML = '';

    for (let c of links) {
      const d = document.createElement("li");
      d.innerHTML = `
        <a onclick="display('${c.url}')" id="page-${c.url}" class="text-gray-400 justify-center text-center hover:text-white hover:duration-300 duration-300 cursor-pointer flex flex-col items-center text-lg">
          <div class="flex items-center space-x-2">
              ${c.svg}
            <span class="capitalize">${c.name}</span>
          </div>
          <div id="page-display-${c.url}" class="w-10 hidden bg-sky-500 h-0.5 rounded-full"></div>
        </a>
      `;
      d.style.opacity = 0;
      d.style.transform = 'translateX(20px)';

      b.appendChild(d);
    }
    a.appendChild(b);
    setTimeout(() => {
      const e = document.querySelectorAll("#serverLinks li");
      e.forEach((f, g) => {
        f.style.transition = `opacity 1s ease ${g * 0.1}s, transform 1s ease ${g * 0.1}s`;
        f.style.opacity = 1;
        f.style.transform = 'translateY(0)';
      });
    }, 100);
  }
}
async function display(page = page || "/") {
  const a = document.getElementById('page');
  a.innerHTML = "";
  a.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  a.style.opacity = 0;
  a.style.transform = 'translateY(20px)';
  let b;
  if (page.startsWith('/')) {
    b = await fetch(page || "/");
  } else if (page === "") {
    b = await fetch(`/servers/${get()}/`);
  } else {
    b = await fetch(`/servers/${get()}/` + (page || "/"));
  }
  let c = await b.text();
  let d = document.createElement('div');
  d.innerHTML = c;
  let e = d.querySelector('#page');
  try {
    if (a && e) {
      a.innerHTML = e.innerHTML;
    } else {
      console.error(`Page ${page} not found"`, 404);
      let f = await fetch(`../../errors/404.html`);
      let g = await f.text();
      a.innerHTML = g;
    }
  } catch (h) {
    a.innerHTML = error500;
  }
  const i = document.getElementById(`page-${page}`);
  const j = document.getElementById(`page-display-${page}`);
  for (let k of links) {
    document.getElementById(`page-${k.url}`).classList.remove("shadow", "text-white");
    document.getElementById(`page-display-${k.url}`).classList.add("hidden");
  }
  if (i) {
    const l = document.querySelectorAll("#serverLinks li");
    l.forEach(m => {
      m.classList.remove("text-white", "shadow");
    });

    i.classList.add("text-white", "shadow");
    j.classList.remove("hidden");
  }

  setTimeout(() => {
    a.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    a.style.opacity = 1;
    a.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`servers/${get()}/${page}`);
}
function select(a) {
  document.cookie = `server=${a}; max-age=900000; path=/`;
}
function get() {
  const a = document.cookie.split(';').map(b => b.trim());
  const c = a.find(b => b.startsWith('server='));
  if (!c || !c.includes('=')) {
    render("/servers");
    changeURL("/servers");
    return null;
  }
  return c.split('=')[1];
}
function activate() {
  let a = window.location;
  let b = a.href.replace(a.origin, '').replace(`servers/${get()}/`, '').replace('/', '');
  let c = `page-${b}`;
  let d = `page-display-${b}`;
  const e = document.querySelectorAll("#serverLinks li");
  e.forEach(f => {
    f.classList.add("text-gray-300");
    f.classList.remove("text-white", "shadow");
  });

  const g = document.getElementById(c);
  const h = document.getElementById(d);
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow");
  }

  if (h) {
    const i = document.querySelectorAll("[id^='page-display']");
    i.forEach(j => {
      j.classList.add("hidden");
      j.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      j.style.opacity = 0;
      j.style.transform = 'translateY(100%)';
    });

    h.classList.remove("hidden");
    h.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    h.style.opacity = 0;
    h.style.transform = 'translateY(0)';
  }
}
async function mods() {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a mod?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "project_type": "Search for it!",
    "icon_url": "https://cdn.holaclient.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  });
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsSearch(q) {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsInstall(a) {
  let d = document.getElementById(`mod-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/mods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], mod: a })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function pluginss() {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a plugin?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "loaders": [
      "Search for it!"
    ],
    "icon_url": "https://cdn.holaclient.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  })
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
});
async function pluginsSearch(q) {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.02}s, transform 0.3s ease ${g * 0.01}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function pluginsInstall(a, n) {
  let d = document.getElementById(`plugin-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/plugins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], plugin: a, name: n })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function players() {
  let a = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}?type=ip`)
  let b = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let j = await fetch(`/api/servers/players/ops/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let c = await a.json();
  let e = await b.json();
  let k = await k.json();
  if (c.success == false) return toastr.error("Error", c.message);
  if (e.success == false) return toastr.error("Error", e.message);
  if (k.success == false) return toastr.error("Error", k.message);
  let f = document.getElementById('playersBans');
  let l = document.getElementById('playersAdmins');
  let g = document.getElementById('playersBansIPs');
  let d = document.createDocumentFragment();
  let h = document.createDocumentFragment();
  let m = document.createDocumentFragment();
  f.innerHTML = '';
  g.innerHTML = '';
  l.innerHTML = '';
  if (c.data.length == 0) f.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (e.data.length == 0) g.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (j.data.length == 0) l.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  f.appendChild(d);
  for (let i of e.data) {
    const j = document.createElement("div")
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.ip}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    h.appendChild(j);
  }
  g.appendChild(h);
  for (let i of j.data) {
    const j = document.createElement("div");
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    m.appendChild(j);
  }
  l.appendChild(m);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBans div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBansIPs div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersAdmins div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
};
const ws = new WebSocket(`ws://${window.location.host}/chat/messages`);
async function messages() {
  let aa = await fetch('/api/chat/messages');
  let bb = await aa.json();
  let cc = document.getElementById("messages")
  cc.innerHTML = ''
  show(bb.data);
}
document.addEventListener('DOMContentLoaded', function () {
  ws.onmessage = function (event) {
    let a = event.data;
    show(JSON.parse(a));
  };
});
async function show(data) {
  const container = document.getElementById("messages");
  if (!container) {
    return;
  }
  let lastUserId = null;
  for (let a of data) {
    let b = document.createElement("div");
    b.className = "flex relative space-x-2 items-start";
    let c = document.createElement("div");
    c.className = "flex flex-col";
    if (lastUserId !== a.id) {
      let d = document.createElement("img");
      d.className = "object-cover top-0 aspect-square mt-4 w-12 start-6 rounded-xl";
      d.src = a.avatar;
      b.appendChild(d);
      let e = idk(a.username, a.time);
      c.appendChild(e);
    }
    let f = document.createElement("div");
    f.className = "flex ml-14 mr-14 flex-col bg-zinc-900 max-w-fit rounded-xl";
    if (lastUserId !== a.id) {
      f.classList.remove("ml-14");
    }
    let g = document.createElement("div");
    g.className = "grow px-4 py-2";
    let h = document.createElement("p");
    h.className = "text-gray-100";
    h.textContent = a.message;
    g.appendChild(h);
    f.appendChild(g);
    c.appendChild(f);
    b.appendChild(c);
    container.appendChild(b);
    lastUserId = a.id;
  };
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  const j =
    container.lastElementChild.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;
  if (j) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
}
function idk(a, b) {
  let c = document.createElement("div");
  c.className = "flex items-center mt-4 space-x-2";
  let d = document.createElement("h1");
  d.className = "text-gray-200 text-md capitalize";
  d.textContent = a;
  let e = document.createElement("span");
  e.className = "text-gray-300 text-sm";
  e.textContent = date(b);
  c.appendChild(d);
  c.appendChild(e);
  return c;
}
async function send(a) {
  if (a.key === 'Enter') {
    a.preventDefault();
    const b = document.getElementById('msgInput');
    const c = b.value.trim();
    if (c !== '') {
      ws.send(c);
      b.value = '';
    }
  }
};
function date(eeeeeeeeeeee) {
  const options = { hour: 'numeric', minute: 'numeric', weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(eeeeeeeeeeee).toLocaleString('en-US', options);
}
async function ticket(id) {
  let aa = await fetch(`/api/tickets/${id}`);
  let bb = await aa.json();
  let cc = document.getElementById("messages")
  cc.innerHTML = ''
  showTicket(bb.data);
}
async function showTicket(data) {
  const container = document.getElementById("messages");
  if (!container) {
    return;
  }
  let lastUserId = null;
  for (let a of data) {
    let b = document.createElement("div");
    b.className = "flex relative space-x-2 items-start";
    let c = document.createElement("div");
    c.className = "flex flex-col";
    if (lastUserId !== a.id) {
      let d = document.createElement("img");
      d.className = "object-cover top-0 aspect-square mt-4 w-12 start-6 rounded-xl";
      d.src = a.avatar;
      b.appendChild(d);
      let e = idk(a.username, a.time);
      c.appendChild(e);
    }
    let f = document.createElement("div");
    f.className = "flex ml-14 mr-14 flex-col bg-zinc-900 max-w-fit rounded-xl";
    if (lastUserId !== a.id) {
      f.classList.remove("ml-14");
    }
    let g = document.createElement("div");
    g.className = "grow px-4 py-2";
    let h = document.createElement("p");
    h.className = "text-gray-100";
    h.textContent = a.message;
    g.appendChild(h);
    f.appendChild(g);
    c.appendChild(f);
    b.appendChild(c);
    container.appendChild(b);
    lastUserId = a.id;
  };
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  const j =
    container.lastElementChild.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;
  if (j) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
};
async function ticketSend(a) {
  if (a.key === 'Enter') {
    a.preventDefault();
    const b = document.getElementById('ticketInput');
    const c = b.value.trim();
    if (c !== '') {
      wss.send(c);
      b.value = '';
    }
  }
};
function wss() {
  const ws = new WebSocket(`ws://${window.location.host}/tickets/messages?id=${id}`);
  return ws
};
let consoleSocket;
async function consoleWS() {
  visibility("startBTN", "show")
  consoleSocket = consoleWSS();
  consoleSocket.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'console output') {
      showConsole(data.args[0], { first: true });
    } else if (data.event == 'stats') {
      let a = (JSON.parse(data.args[0]).state)
      if (a == "offline") {
        visibility("startBTN", "show")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "")
      } else if (a == "stopping") {
        visibility("startBTN", "")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "show")
      } else {
        visibility("startBTN", "")
        visibility("restartBTN", "show")
        visibility("stopBTN", "show")
        visibility("killBTN", "")
      }
      showStats(JSON.parse(data.args[0]));
    } else if (data.event == 'redirect') {
      window.location.href = '/servers'
    }
  };
  let a = await fetch(`/api/servers/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    setValue("RAMT", formatResourceMB(b.data.limits.memory) || "")
    setValue("DiskT", formatResourceMB(b.data.limits.disk) || "")
    setValue("CPUT", b.data.limits.cpu || "")
    setValue("Reneval", b.data.reneval || "")
    setValue("IP", `${b.data.relationships.allocations.data[0].attributes.ip_alias || b.data.relationships.allocations.data[0].attributes.ip}:${b.data.relationships.allocations.data[0].attributes.port}`)
  }
}
function setValue(e, v) {
  document.getElementById(`server${e}`).innerText = v
}
async function power(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a == "stop") {
      visibility("startBTN", "")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "show")
      setTimeout(() => {
        visibility("killBTN", "")
        visibility("startBTN", "show")
      }, 2000);
    } else if (a == "kill") {
      visibility("startBTN", "show")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "")
    } else if (a == "start") {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    } else {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    };
    consoleSocket.send(JSON.stringify({ "event": "set state", "args": [a] }));
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function visibility(id, s) {
  let a = document.getElementById(id)
  if (s == "show") {
    a.classList.remove("hidden")
  } else if (!a.classList.contains("hidden")) {
    a.classList.add("hidden");
  } else {
    return
  }
}
function sendConsole(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a.key === 'Enter') {
      a.preventDefault();
      let b = document.getElementById("cmdInput")
      const c = b.value.trim();
      if (c !== '') {
        consoleSocket.send(JSON.stringify({ "event": "send command", "args": [b.value] }));
        b.value = '';
      }
    }
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function showConsole(b, c) {
  let a = document.getElementById("console");
  a.innerHTML += `<p>${ANSI(b)}</p>`;
  if (c) a.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  return
}
function ANSI(a) {
  let b = '';
  let c = '';
  const d = /\033\[(\d+)(;\d+)*m/g;
  let e = 0;
  let f;
  while ((f = d.exec(a)) !== null) {
    const g = getStyle(f[1]);
    c += a.substring(e, f.index);
    if (g !== b) {
      c += `<span style="${g}">`;
      b = g;
    }
    e = d.lastIndex;
  }
  c += a.substring(e);
  if (b !== '') { c += '</span>'; }
  return c;
}
function getStyle(a) {
  switch (a) {
    case '1':
      return 'font-weight: bold;';
    case '30':
      return 'color: black;';
    case '31':
      return 'color: red;';
    case '32':
      return 'color: green;';
    case '33':
      return 'color: #f59e0b;';
    case '34':
      return 'color: blue;';
    case '35':
      return 'color: magenta;';
    case '36':
      return 'color: cyan;';
    case '37':
      return 'color: #f3f4f6;';
    case '0':
      return 'color: #d1d5db;';
    default:
      return '';
  }
}
function showStats(a) {
  setValue("RAMU", formatResource(a.memory_bytes));
  setValue("DiskU", formatResource(a.disk_bytes));
  setValue("CPUU", a.cpu_absolute);
  setValue("NetI", formatResource(a.network.rx_bytes))
  setValue("NetO", formatResource(a.network.tx_bytes))
  if (!a.uptime == 0) {
    setValue("Uptime", formatUptime(a.uptime));
  } else {
    setValue("Uptime", "Offline");
    setValue("RAMU", "Offline");
    setValue("CPUU", "Offline");
    setValue("NetI", "Offline")
    setValue("NetO", "Offline")
  }
}
function formatUptime(a) {
  let b = a / 1000;
  let c = Math.floor(b / 3600);
  let d = Math.floor((b % 3600) / 60);
  let e = Math.floor(b % 60);
  return `${c}h ${d}m ${e}s`;
}
function formatResource(a) {
  const b = 1024;
  const c = b * 1024;
  const d = c * 1024;
  if (a < b) {
    return `${a} Bytes`;
  } else if (a < c) {
    return `${(a / b).toFixed(2)} KB`;
  } else if (a < d) {
    return `${(a / c).toFixed(2)} MB`;
  } else {
    return `${(a / d).toFixed(2)} GB`;
  }
}
function formatResourceMB(a) {
  const b = 1024;
  if (a >= b) {
    return `${a / b} GB`;
  } else {
    return `${(a).toFixed(2)} MB`;
  }
}
function consoleWSS() {
  let webSocket = new WebSocket(`ws://localhost:2001/api/servers/console/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`);
  return webSocket;
}
async function files() {
  let a = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`);
  let b = await a.json();
  let c = document.getElementById("filesHolder");
  c.innerHTML = ""
  let d = [];
  let e = b.data.data;
  for (let i in e) {
    d.push(`
          <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
              <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
                  ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
                  <span class="ml-3">${e[i].attributes.name}</span>
              </div>
              <div class="flex space-x-8 items-center relative">
                  <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
                  <span>${date(e[i].attributes.modified_at)}</span>
                  <span class="p-0.5" onclick="showMenu(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </span>
                  <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
                  <div class="py-2 text-white text-center">
                  ${e[i].attributes.name}
                  </div>
                  <div class="w-full bg-zinc-800/80 h-0.5"></div>
                  <ul class="text-sm text-gray-200">
                      <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                          <a>Delete</a>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
      `);
  }
  c.innerHTML += d.join('');
}
async function showDir(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('dir', cD);
  window.history.pushState({}, document.title, u.href);
  let r = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`);
  let d = await r.json();
  let c = document.getElementById("filesHolder");
  let m = document.getElementById("filesManager");
  let n = u.search
  m.innerHTML = `${n.replace('?dir=', '').replace(/%2F/g, '<span class="text-gray-400 mx-1">/</span>')}`;
  let e = d.data.data
  let f = []
  for (let i in e) {
    f.push(`
    <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
    <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
        ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
        <span class="ml-3">${e[i].attributes.name}</span>
    </div>
    <div class="flex space-x-8 items-center relative">
        <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
        <span>${date(e[i].attributes.modified_at)}</span>
        <span class="p-0.5" onclick="showMenu(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </span>
        <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
        <div class="py-2 text-white text-center">
        ${e[i].attributes.name}
        </div>
        <div class="w-full bg-zinc-800/80 h-0.5"></div>
        <ul class="text-sm text-gray-200">
            <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                <a>Delete</a>
            </li>
        </ul>
    </div>
    </div>
</div>`)
  }
  c.innerHTML = f.join('');
}
function showMenu(a) {
  event.stopPropagation();
  const menu = document.getElementById(`menu${a}`);
  const c = !menu.classList.contains("hidden");
  document.querySelectorAll('.fileMenu').forEach(function (menu) {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    menu.classList.add('hidden');
  });
  if (!c) {
    menu.classList.remove("hidden");
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      menu.style.opacity = 1;
      menu.style.transform = 'translateY(0px)';
    }, 10);
  } else {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 10);
  }
}
document.addEventListener('click', function (event) {
  if (!event.target.closest('.fileMenu')) {
    document.querySelectorAll('.fileMenu').forEach(function (menu) {
      menu.classList.add('hidden');
    });
  }
});
function svg(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const extensionMap = {
    'jar': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99929 3V16H3.49929V3C3.49929 2.33696 3.76268 1.70107 4.23152 1.23223C4.70036 0.763392 5.33625 0.5 5.99929 0.5H14.0422L14.5422 1H14.2493H5.99929C5.46886 1 4.96015 1.21071 4.58508 1.58579C4.21 1.96086 3.99929 2.46957 3.99929 3ZM14.7493 1.5V1.20711L19.7922 6.25H19.4993H16.4993C16.0352 6.25 15.59 6.06563 15.2619 5.73744C14.9337 5.40925 14.7493 4.96413 14.7493 4.5V1.5ZM19.9993 6.45711L20.4993 6.95711V16H19.9993V6.75V6.45711ZM2.75102 22.5926L2.75105 22.5925L2.74923 22.5877C2.74623 22.5796 2.74331 22.5716 2.74045 22.5635H2.90746C2.92743 22.6128 2.95024 22.661 2.97583 22.7079L2.9797 22.715L2.9838 22.722C3.09912 22.9181 3.26576 23.079 3.46577 23.1873C3.66222 23.2938 3.88354 23.3456 4.10668 23.3375C4.48351 23.3353 4.85378 23.2218 5.11252 22.9121C5.35078 22.627 5.43579 22.2643 5.43579 21.8925V18.275H5.62079V21.8625C5.62079 22.4334 5.46836 22.7877 5.23783 23.0105L5.23632 23.0119C4.99943 23.2428 4.64632 23.3875 4.10929 23.3875V23.3874L4.10084 23.3876C3.87194 23.3914 3.64423 23.3539 3.42869 23.2768C3.26851 23.2171 3.12363 23.1225 3.00461 22.9998C2.89239 22.8834 2.80598 22.7446 2.75102 22.5926ZM7.7606 22.0854L7.39771 23.2735H7.26299L8.44195 19.7603L8.00478 21.203L7.80912 21.8487L7.83293 21.8486L7.7606 22.0854ZM8.8909 18.4225L8.9404 18.275H9.60967L11.2796 23.2735H11.0839L10.721 22.0854L10.6478 21.8459L10.6797 21.8458L10.4843 21.2014L9.74928 18.7774L9.64166 18.4225H9.27079H9.21829H8.8909ZM12.2037 18.275H12.5073L13.7506 22.6196L13.8543 22.982H14.2313H14.2883H14.6664L14.7694 22.6181L15.9984 18.275H16.2446L14.5859 23.2735H13.8786L12.2037 18.275ZM17.7196 21.8487L17.7434 21.8486L17.6711 22.0854L17.3082 23.2735H17.1735L18.3525 19.7603L17.9153 21.203L17.7196 21.8487ZM18.8014 18.4225L18.8509 18.275H19.5202L21.1901 23.2735H20.9944L20.6315 22.0854L20.5583 21.8459L20.5902 21.8458L20.3948 21.2014L19.6598 18.7774L19.5522 18.4225H19.1813H19.1288H18.8014Z" stroke="#D9D9D9"/>
      </svg>`,
    'txt': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.2989 23.2366 18.663 23.5 18 23.5H15.5V23H18C18.5304 23 19.0391 22.7893 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM12.1295 18.768V18.275H12.819V18.768H12.3205V23.2735H12.1295V18.768ZM6.91859 20.4863L5.54924 18.275H5.76103L6.86464 20.1838L7.00903 20.4335H7.2975H7.35H7.64004L7.78403 20.1817L8.87454 18.275H9.01588L7.59237 20.5175L7.42304 20.7843L7.59127 21.0517L8.9888 23.2735H8.81642L7.68711 21.3935L7.54142 21.151H7.2585H7.206H6.92359L6.77779 21.3929L5.64409 23.2735H5.52805L6.91939 21.0115L7.08106 20.7486L6.91859 20.4863ZM2.201 18.275H2.392V18.768V23.2735H2.201V18.768V18.275Z" stroke="#D9D9D9"/>
    </svg>`,
    'yml': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.4186 23.117 18.9767 23.3522 18.5 23.4495V22.9365C18.843 22.8479 19.1594 22.669 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM6.0725 23.2735V18.275H6.45348L6.89635 19.2835H6.687H6.63H6.13V19.7835V23.2735H6.0725ZM10.564 18.275H10.9375V23.2735H10.865V19.782V19.282H10.365H10.308H10.1218L10.564 18.275ZM8.5275 22.169H8.71673L8.56213 22.522H8.44098L8.28532 22.169H8.49H8.5275ZM4.36723 18.275L2.76018 21.2323L2.6995 21.3439V21.471V23.2735H2.5085V21.4935V21.3671L2.44843 21.2559L0.838344 18.275H1.0058L2.14681 20.5437L2.2853 20.819H2.5935H2.6415H2.94938L3.08797 20.5441L4.23188 18.275H4.36723ZM13.6935 23.2625H15.739V23.2735H13.007V18.275H13.1935V22.7625V23.2625H13.6935Z" stroke="#D9D9D9"/>
    </svg>`,
    'png': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
    'jpg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'wepb': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'jpeg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'json': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_73_315)">
<mask id="path-1-inside-1_73_315" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z" stroke="#D9D9D9" stroke-width="2" mask="url(#path-1-inside-1_73_315)"/>
</g>
<defs>
<clipPath id="clip0_73_315">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`,
    'properties': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>`
  };
  return extensionMap[extension] || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0H14.25L21 6.75ZM16.5 6.75C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5Z" fill="#D9D9D9"/>
  </svg>`;
}
async function showFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  window.history.pushState({}, document.title, u.href);
  window.location.href = `/api/servers/files/edit/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`
}
async function deleteFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  let f = await fetch(`/api/servers/files/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`)
  let g = await f.json()
  if (g.success == true) {
    toastr.success("Success", g.message)
    files()
  } else {
    toast.error("Error", g.message)
  }
}
async function pull() {
  let a = document.getElementById("uploadURLInput")
  toastr.info(a.value)
  let b = await fetch(`/api/servers/files/upload/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: a.value })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success");
    a.value = ''
    display('files')
  } else {
    toastr.error(c.message, "Error")
  }
}
async function deleteServer() {
  let a = await fetch(`/api/servers/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('servers')
  } else (
    toastr.error(b.message, "Error")
  )
}
async function save() {
  let a = document.getElementById("Editor");
  let b = a.value;
  let url = window.location.href;
  let id = url.split('/servers/files/edit/')[1]?.split('/')[0];
  let c = await fetch(`/api/servers/files/edit/${id}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: b })
  });
  let d = await c.json();
  if (d.success == true) {
    toastr.success("Success", d.message);
  } else {
    toastr.error("Error", d.message);
  }
}
function toggle(a) {
  document.getElementById(`${a}Btn`).classList.toggle("rounded-xl")
  document.getElementById(`${a}Btn`).classList.toggle("rounded-t-xl")
  const b = document.getElementById(a);
  if (!document.getElementById(`${a}`).classList.contains("hidden")) {
    setTimeout(() => {
      b.style.opacity = '0';
      b.style.transform = 'translateY(0)';
      b.style.maxHeight = '';
      b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      setTimeout(() => {
        b.classList.toggle("hidden");
      }, 200);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>`
  } else {
    b.style.transform = 'translateY(-10%)';
    b.style.opacity = '0';
    b.style.height = '0%'
    setTimeout(() => {
      b.classList.toggle("hidden");
      setTimeout(() => {
        b.style.opacity = '1';
        b.style.transform = 'translateY(0)';
        b.style.maxHeight = '';
        b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      }, 100);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
  </svg>`
  }
}
function color(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  if (b <= 75) {
    return "bg-emerald-500";
  } else if (b <= 85) {
    return "bg-amber-500";
  } else if (b <= 95) {
    return "bg-rose-500";
  } else {
    return "bg-red-500";
  }
}
let srvCache = {}
let serverConfig = {}
let fees = { node: 0, egg: 0 }
async function serverCreate() {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById('nodesList')
    let d = []
    srvCache = b.data
    for (let i of b.data.nodes) {
      d.push(`
      <div id="node${i.id}" onclick="selectNode(${i.id})" class="w-full relative flex flex-col cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-start shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
        <span class="text-gray-300">${i.relationships.location.attributes.short}: ${i.name}</span>
        <div class="flex w-full space-x-2 items-baseline">
          <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${(i.allocated_resources.memory / i.memory) * 100}%] overflow-hidden rounded-full ${color((i.allocated_resources.memory / i.memory) * 100)}"></div>
          </div>
          <span class="text-gray-400">${(i.allocated_resources.memory / i.memory) * 100}%</span>
        </div>
        <div id="nodeMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    c.innerHTML = d
    let e = document.getElementById('eggsList')
    let f = []
    for (let i of b.data.eggs) {
      f.push(`
      <div id="egg${i.id}" onclick="selectEgg(${i.id})" class="w-full relative flex space-x-2 cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-center shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
      <img src="${i.deployments.icon}" class="w-auto h-8">
      <span class="text-gray-300">${i.deployments.name}</span>
        <div id="eggMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      </div>
      `)
    }
    e.innerHTML = f
  } else {
    toastr.error(b.message, "Error!")
  }
}
function selectNode(a) {
  let b = document.getElementById(`node${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`nodeMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["node"] = a;
    let c = srvCache.nodes.find(i => i.id == a);
    fees["node"] = c.deployments.fees;
  } else {
    serverConfig["node"] = null;
    fees["node"] = 0;
  }
  fee();
}
function selectEgg(a) {
  let b = document.getElementById(`egg${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`eggMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["egg"] = a;
    let c = srvCache.eggs.find(i => i.id == a);
    fees["egg"] = c.deployments.fees;
  } else {
    serverConfig["egg"] = null;
    fees["egg"] = 0;
  }
  fee();
}
function fee() {
  let a = fees.egg + fees.node
  let b = document.getElementById("srvFees")
  let c = parseInt(b.innerText)
  let d = document.getElementById("srvAlert")
  if (c == 0 && a == 0) {
    d.innerText = ``;
  } else if (c == 0 && a !== 0) {
    d.innerText = `You'll have to pay ${a} coins for the node & software.`;
  } else {
    d.innerText = `You'll have to pay ${a} coins for the node & software, ${c} coins for deploying a server.`;
  }
}
function gv(a) {
  return document.getElementById(a).value
}
async function deploy() {
  let a = await fetch('/api/servers/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("srvName"),
      resources: { memory: gv("srvMemory"), disk: gv("srvStorage"), cpu: gv("srvCPU"), databases: gv("srvDatabases"), allocations: gv("srvAllocations"), backups: gv("srvBackups") },
      environment: serverConfig
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    serverConfig = {}
    srvCache = {}
    render('create')
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function modifyServer() {
  let a = ["Memory", "Disk", "CPU", "Allocations", "Backups", "Databases"]
  let b = {}
  a.forEach(i => { b[i.toLowerCase()] = parseInt(document.getElementById(`srvModify${i}`).value) });
  let c = await fetch(`/api/servers/modify/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resources: b
    })
  });
  let d = await c.json()
  if (d.success == true) {
    toastr.success(d.message, "Success!")
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function serverModify() {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let d = []
    let e = []
    for (let i of b.data.nodes) {
      d.push(`<option value="${i.id}">${i.name} - ${(i.allocated_resources.memory / i.memory) * 100}% full</option>`)
    }
    for (let i of b.data.eggs) {
      e.push(`<option value="${i.id}">${i.name}</option>`)
    }
    document.getElementById('nodesList').innerHTML = d.join('')
    document.getElementById('eggsList').innerHTML = e.join('')
  }
}
async function changeNode() {
  let a = document.getElementById("nodesList").value
  let b = await fetch(`/api/servers/transfer/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function connectAFKWS() {
  let afkWS = new WebSocket(`ws://localhost:2001/ws/afk`);
  afkWS.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.redirect) {
      window.location.href = '/'
    } else {
      st("sessionCoins", `${data.session ?? 0} coins`);
      st("totalCoins", `${data.total ?? 0} coins`);
      st("afkDuration", `${data.duration ?? 0} s`);
      st("coinsIn", `${data.coinsIn ?? 0} s`);
      st("afkStatus", 'Earning');
    }
  };
  afkWS.onclose = function () {
    st("afkStatus", 'Socket disconnected');
  }
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function loadLeaderboard() {
  let a = await fetch('/api/economy/leaderboard')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    let d = b.data.leaderboard
    for (let i in d) {
      c.push(`
      <div class="flex flex-col items-center justify-center relative">
        <div class="relative w-36 rounded-xl">
          <img src="${d[i].avatar}" alt="user" class="w-full rounded-xl h-auto">
          <div class="absolute z-30 top-0 right-0 text-center items-center bg-zinc-900/50 flex justify-center -mt-4 -mr-4 text-gray-300 backdrop-blur-xl w-12 h-12 rounded-full">${pos(i)}</div>
        </div>
        <h1 class="text-gray-300 text-xl">${d[i].nickname}</h1>
        <span class="text-gray-400">${d[i].coins} coins</span>
      </div>`)
    }
    document.getElementById("coinsLeaderboard").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function pos(a) {
  a = parseInt(a)
  switch (a) {
    case 0:
      return '1st';
      case 1:
      return '2nd';
      case 2:
      return '3rd';
      case 3:
      return '4th';
    default:
      return '5th';
  }
}
function addValue(a, b) {
  let c = document.getElementById(`resourceInput${a}`)
  let d = 0
  if (b.startsWith("+")) {
    d = parseInt(c.value || 0) + parseInt(b.slice(1))
  } else {
    d = parseInt(c.value || 0) - parseInt(b.slice(1))
  }
  if (d < 0) {
    d = 0
  }
  c.value = d
};
async function buyResource(a) {
  let b = document.getElementById(`resourceInput${a}`).value
  let c = await fetch(`/api/market/buy/${a}/${b}`)
  let d = await c.json()
  if (d.success) {
    toastr.success(d.message, "Success!")
    document.getElementById("coins").innerText = `${d.data} coins`
  } else {
    toastr.error(d.message, "Error!")
  }
=======
/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license MIT
 * 
 * https://x.holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * app.js - Frontend development file.
 *--------------------------------------------------------------------------
*/
const routes = [
  { "name": "home", "href": false, "url": "dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>` },
  { "name": "create", "href": false, "url": "create", "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>` },
  { "name": "servers", "href": false, "url": "servers", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>` },
  { "name": "economy", "href": false, "url": "economy", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>` },
  //  { "name": "tickets", "href": false, "url": "tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
  //  { "name": "chat", "href": false, "url": "chat", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>` },
  { "name": "market", "href": false, "url": "market", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" /></svg>` },
  { "name": "account", "href": false, "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "admin", "href": true, "url": "/admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` }
]
let cachedRoutes = {}
const userRoutes = [
  { "name": "notifications", "url": "notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const links = [
  { "name": "console", "href": false, "url": "", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  { "name": "files", "href": false, "url": "files", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>` },
  { "name": "plugins", "href": false, "url": "plugins", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "mods", "href": false, "url": "mods", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>` },
  { "name": "subdomains", "href": false, "url": "subdomains", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>` },
  { "name": "players", "href": false, "url": "players", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>` },
  { "name": "databases", "href": false, "url": "databases", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>` },
  { "name": "schedules", "href": false, "url": "schedules", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>` },
  { "name": "backups", "href": false, "url": "backups", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>` },
  { "name": "network", "href": false, "url": "network", "svg": ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>` },
  { "name": "startup", "href": false, "url": "startup", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "settings", "href": false, "url": "settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HolaClient: 500</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="/assets/default/app.css" rel="stylesheet">
</head>

<body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
    <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
        <h1
            class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
            500
        </h1>
        <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
        <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
        <button onclick="window.history.back()"
            class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
            Back</button>
    </div>
</body>`
const handler = new WebSocket(`ws://${window.location.host}/ws`);
let wsa = true;
handler.onclose = function () { wsa = false; };
handler.onerror = function () { wsa = false; };
handler.onmessage = async function (event) {
  let a = JSON.parse(event.data);
  switch (a.type) {
    case "render":
      alert(1)
      reload("content", a.page)
      break;
    case "reload":
      reload(a.partial, a.data)
      break;
    case "redirect":
      window.location.href = a.redirect
      break;
    default:
      break;
  }
};
function reload(a, b) {
  if (a && b) {
    document.getElementById(a).innerHTML = b
  }
}
async function getPage(page) {
  //if (wsa == true) {
  //  handler.send(JSON.stringify({ type: "render", page: `/${page}` }));
  //  return new Promise((resolve, reject) => {
  //    handler.onmessage = function (event) {
  //       let data = JSON.parse(event.data);
  //      resolve(data.page.page);
  //     };
  //   });
  //  } else {
  if (cachedRoutes[page]) {
    return cachedRoutes[page]
  } else {
    let c;
    if (page.startsWith('/')) {
      c = await fetch(page || "/");
    } else if (page === "") {
      c = await fetch("/");
    } else {
      c = await fetch("/" + (page || "/"));
    }
    return c.text();
  }
  // }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
  <div id="loadOverlay" class="bg-zinc-950/50 backdrop-blur-xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 h-screen">
      <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
      <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      </h1>
  </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      //let g = await fetch(`obviously-a-404-page`);
      //let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = b;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  for (let m of userRoutes) {
    let n = document.getElementById(`nav-${m.url}`);
    if (n) n.classList.remove("shadow", "text-white", "bg-zinc-800/90");
    if (document.getElementById(`nav-display-${m.url}`)) document.getElementById(`nav-display-${m.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
  updateLinks();
  cachePages()
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      return a.slice(1, b);
    }
    return a.slice(1);
  }
  const c = a.indexOf("/");
  if (c !== -1) {
    return a.slice(0, c);
  }
  return a;
} //This shit was implemented at last, idh time to use this for everything else.
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
async function load() {
  const a = document.getElementById("sidebar");
  const b = document.createDocumentFragment();

  for (let c of routes) {
    const d = document.createElement("li");
    d.innerHTML = `
    <a onclick="render('${c.url}')" id="nav-${c.url}"
        class="flex items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${c.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${c.svg}
            <span class="ml-2 text-lg capitalize">${c.name}</span>
        </div>
    </a>`;

    d.style.opacity = 0;
    d.style.transform = 'translateY(20px)';

    b.appendChild(d);
  }

  a.appendChild(b);

  setTimeout(() => {
    const c = document.querySelectorAll("#sidebar li");
    c.forEach((d, e) => {
      d.style.transition = `opacity 1s ease ${e * 0.1}s, transform 1s ease ${e * 0.1}s`;
      d.style.opacity = 1;
      d.style.transform = 'translateY(0)';
    });
  }, 100);

  highlight();
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const d = document.createDocumentFragment();

    for (let e of userRoutes) {
      const f = document.createElement("li");
      f.innerHTML = `
    <a onclick="render('${e.url}')" id="nav-${e.url}"
        class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${e.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${e.svg}
            <span class="ml-2 text-lg capitalize">${e.name}</span>
        </div>
    </a>`;

      f.style.opacity = 0;
      f.style.transform = 'translateY(20px)';

      d.appendChild(f);
    }

    c.appendChild(d);

    setTimeout(() => {
      const g = document.querySelectorAll("#userDropdown li");
      g.forEach((h, i) => {
        h.style.transition = `opacity 1s ease ${i * 0.1}s, transform 1s ease ${i * 0.1}s`;
        h.style.opacity = 1;
        h.style.transform = 'translateY(0)';
      });
    }, 100);
  } else {
    a.classList.add("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 0;
    c.innerHTML = '';
  }
}
window.onload = () => {
  load();
  highlight();
  updateLinks();
  setTimeout(() => { cachePages(); }, 2000);
}
async function cachePages() {
  for (let i of routes) {
    let c;
    if (i.url.startsWith('/')) {
      c = await fetch(i.url || "/");
    } else {
      c = await fetch("/" + (i.url || "/"));
    }
    cachedRoutes[i.url] = c.text()
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
window.onpopstate = function () {
  render(window.location.href.replace(window.location.origin, ''));
  highlight();
  updateLinks()
}
function updateLinks() {
  const a = document.getElementById("serverLinks");
  if (a) {
    const b = document.createDocumentFragment();
    a.innerHTML = '';

    for (let c of links) {
      const d = document.createElement("li");
      d.innerHTML = `
        <a onclick="display('${c.url}')" id="page-${c.url}" class="text-gray-400 justify-center text-center hover:text-white hover:duration-300 duration-300 cursor-pointer flex flex-col items-center text-lg">
          <div class="flex items-center space-x-2">
              ${c.svg}
            <span class="capitalize">${c.name}</span>
          </div>
          <div id="page-display-${c.url}" class="w-10 hidden bg-sky-500 h-0.5 rounded-full"></div>
        </a>
      `;
      d.style.opacity = 0;
      d.style.transform = 'translateX(20px)';

      b.appendChild(d);
    }
    a.appendChild(b);
    setTimeout(() => {
      const e = document.querySelectorAll("#serverLinks li");
      e.forEach((f, g) => {
        f.style.transition = `opacity 1s ease ${g * 0.1}s, transform 1s ease ${g * 0.1}s`;
        f.style.opacity = 1;
        f.style.transform = 'translateY(0)';
      });
    }, 100);
  }
}
async function display(page = page || "/") {
  const a = document.getElementById('page');
  a.innerHTML = "";
  a.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  a.style.opacity = 0;
  a.style.transform = 'translateY(20px)';
  let b;
  if (page.startsWith('/')) {
    b = await fetch(page || "/");
  } else if (page === "") {
    b = await fetch(`/servers/${get()}/`);
  } else {
    b = await fetch(`/servers/${get()}/` + (page || "/"));
  }
  let c = await b.text();
  let d = document.createElement('div');
  d.innerHTML = c;
  let e = d.querySelector('#page');
  try {
    if (a && e) {
      a.innerHTML = e.innerHTML;
    } else {
      console.error(`Page ${page} not found"`, 404);
      let f = await fetch(`../../errors/404.html`);
      let g = await f.text();
      a.innerHTML = g;
    }
  } catch (h) {
    a.innerHTML = error500;
  }
  const i = document.getElementById(`page-${page}`);
  const j = document.getElementById(`page-display-${page}`);
  for (let k of links) {
    document.getElementById(`page-${k.url}`).classList.remove("shadow", "text-white");
    document.getElementById(`page-display-${k.url}`).classList.add("hidden");
  }
  if (i) {
    const l = document.querySelectorAll("#serverLinks li");
    l.forEach(m => {
      m.classList.remove("text-white", "shadow");
    });

    i.classList.add("text-white", "shadow");
    j.classList.remove("hidden");
  }

  setTimeout(() => {
    a.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    a.style.opacity = 1;
    a.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`servers/${get()}/${page}`);
}
function select(a) {
  document.cookie = `server=${a}; max-age=900000; path=/`;
}
function get() {
  const a = document.cookie.split(';').map(b => b.trim());
  const c = a.find(b => b.startsWith('server='));
  if (!c || !c.includes('=')) {
    render("/servers");
    changeURL("/servers");
    return null;
  }
  return c.split('=')[1];
}
function activate() {
  let a = window.location;
  let b = a.href.replace(a.origin, '').replace(`servers/${get()}/`, '').replace('/', '');
  let c = `page-${b}`;
  let d = `page-display-${b}`;
  const e = document.querySelectorAll("#serverLinks li");
  e.forEach(f => {
    f.classList.add("text-gray-300");
    f.classList.remove("text-white", "shadow");
  });

  const g = document.getElementById(c);
  const h = document.getElementById(d);
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow");
  }

  if (h) {
    const i = document.querySelectorAll("[id^='page-display']");
    i.forEach(j => {
      j.classList.add("hidden");
      j.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      j.style.opacity = 0;
      j.style.transform = 'translateY(100%)';
    });

    h.classList.remove("hidden");
    h.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    h.style.opacity = 0;
    h.style.transform = 'translateY(0)';
  }
}
async function mods() {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a mod?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "project_type": "Search for it!",
    "icon_url": "https://cdn.holaclient.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  });
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsSearch(q) {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsInstall(a) {
  let d = document.getElementById(`mod-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/mods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], mod: a })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function pluginss() {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a plugin?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "loaders": [
      "Search for it!"
    ],
    "icon_url": "https://cdn.holaclient.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  })
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
});
async function pluginsSearch(q) {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.02}s, transform 0.3s ease ${g * 0.01}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function pluginsInstall(a, n) {
  let d = document.getElementById(`plugin-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/plugins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], plugin: a, name: n })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function players() {
  let a = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}?type=ip`)
  let b = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let j = await fetch(`/api/servers/players/ops/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let c = await a.json();
  let e = await b.json();
  let k = await k.json();
  if (c.success == false) return toastr.error("Error", c.message);
  if (e.success == false) return toastr.error("Error", e.message);
  if (k.success == false) return toastr.error("Error", k.message);
  let f = document.getElementById('playersBans');
  let l = document.getElementById('playersAdmins');
  let g = document.getElementById('playersBansIPs');
  let d = document.createDocumentFragment();
  let h = document.createDocumentFragment();
  let m = document.createDocumentFragment();
  f.innerHTML = '';
  g.innerHTML = '';
  l.innerHTML = '';
  if (c.data.length == 0) f.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (e.data.length == 0) g.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (j.data.length == 0) l.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  f.appendChild(d);
  for (let i of e.data) {
    const j = document.createElement("div")
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.ip}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    h.appendChild(j);
  }
  g.appendChild(h);
  for (let i of j.data) {
    const j = document.createElement("div");
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    m.appendChild(j);
  }
  l.appendChild(m);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBans div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBansIPs div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersAdmins div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
};
const ws = new WebSocket(`ws://${window.location.host}/ws.chat.messages`);
async function messages() {
  let aa = await fetch('/api/chat/messages');
  let bb = await aa.json();
  let cc = document.getElementById("messages")
  cc.innerHTML = ''
  show(bb.data);
}
document.addEventListener('DOMContentLoaded', function () {
  ws.onmessage = function (event) {
    let a = event.data;
    show(JSON.parse(a));
  };
});
async function show(data) {
  const container = document.getElementById("messages");
  if (!container) {
    return;
  }
  let lastUserId = null;
  for (let a of data) {
    let b = document.createElement("div");
    b.className = "flex relative space-x-2 items-start";
    let c = document.createElement("div");
    c.className = "flex flex-col";
    if (lastUserId !== a.id) {
      let d = document.createElement("img");
      d.className = "object-cover top-0 aspect-square mt-4 w-12 start-6 rounded-xl";
      d.src = a.avatar;
      b.appendChild(d);
      let e = idk(a.username, a.time);
      c.appendChild(e);
    }
    let f = document.createElement("div");
    f.className = "flex ml-14 mr-14 flex-col bg-zinc-900 max-w-fit rounded-xl";
    if (lastUserId !== a.id) {
      f.classList.remove("ml-14");
    }
    let g = document.createElement("div");
    g.className = "grow px-4 py-2";
    let h = document.createElement("p");
    h.className = "text-gray-100";
    h.textContent = a.message;
    g.appendChild(h);
    f.appendChild(g);
    c.appendChild(f);
    b.appendChild(c);
    container.appendChild(b);
    lastUserId = a.id;
  };
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  const j =
    container.lastElementChild.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;
  if (j) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
}
function idk(a, b) {
  let c = document.createElement("div");
  c.className = "flex items-center mt-4 space-x-2";
  let d = document.createElement("h1");
  d.className = "text-gray-200 text-md capitalize";
  d.textContent = a;
  let e = document.createElement("span");
  e.className = "text-gray-300 text-sm";
  e.textContent = date(b);
  c.appendChild(d);
  c.appendChild(e);
  return c;
}
async function send(a) {
  if (a.key === 'Enter') {
    a.preventDefault();
    const b = document.getElementById('msgInput');
    const c = b.value.trim();
    if (c !== '') {
      ws.send(c);
      b.value = '';
    }
  }
};
function date(eeeeeeeeeeee) {
  const options = { hour: 'numeric', minute: 'numeric', weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(eeeeeeeeeeee).toLocaleString('en-US', options);
}
async function ticket(id) {
  let aa = await fetch(`/api/tickets/${id}`);
  let bb = await aa.json();
  let cc = document.getElementById("messages")
  cc.innerHTML = ''
  showTicket(bb.data);
}
async function showTicket(data) {
  const container = document.getElementById("messages");
  if (!container) {
    return;
  }
  let lastUserId = null;
  for (let a of data) {
    let b = document.createElement("div");
    b.className = "flex relative space-x-2 items-start";
    let c = document.createElement("div");
    c.className = "flex flex-col";
    if (lastUserId !== a.id) {
      let d = document.createElement("img");
      d.className = "object-cover top-0 aspect-square mt-4 w-12 start-6 rounded-xl";
      d.src = a.avatar;
      b.appendChild(d);
      let e = idk(a.username, a.time);
      c.appendChild(e);
    }
    let f = document.createElement("div");
    f.className = "flex ml-14 mr-14 flex-col bg-zinc-900 max-w-fit rounded-xl";
    if (lastUserId !== a.id) {
      f.classList.remove("ml-14");
    }
    let g = document.createElement("div");
    g.className = "grow px-4 py-2";
    let h = document.createElement("p");
    h.className = "text-gray-100";
    h.textContent = a.message;
    g.appendChild(h);
    f.appendChild(g);
    c.appendChild(f);
    b.appendChild(c);
    container.appendChild(b);
    lastUserId = a.id;
  };
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  const j =
    container.lastElementChild.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;
  if (j) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
};
async function ticketSend(a) {
  if (a.key === 'Enter') {
    a.preventDefault();
    const b = document.getElementById('ticketInput');
    const c = b.value.trim();
    if (c !== '') {
      wss.send(c);
      b.value = '';
    }
  }
};
function wss() {
  const ws = new WebSocket(`ws://${window.location.host}/tickets/messages?id=${id}`);
  return ws
};
let consoleSocket;
async function consoleWS(c, d) {
  visibility("startBTN", "show")
  consoleSocket = consoleWSS();
  consoleSocket.onopen = function () {
    consoleSocket.send(JSON.stringify({ "event": "auth", "session": c, "user": d, "server": `${(window.location.href).split('/servers/')[1]?.split('/')[0]}` }));
  };
  consoleSocket.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'console output') {
      showConsole(data.args[0], { first: true });
    } else if (data.event == 'stats') {
      let a = (JSON.parse(data.args[0]).state)
      if (a == "offline") {
        visibility("startBTN", "show")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "")
      } else if (a == "stopping") {
        visibility("startBTN", "")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "show")
      } else {
        visibility("startBTN", "")
        visibility("restartBTN", "show")
        visibility("stopBTN", "show")
        visibility("killBTN", "")
      }
      showStats(JSON.parse(data.args[0]));
    } else if (data.event == 'redirect') {
      window.location.href = '/servers'
    }
  };
  let a = await fetch(`/api/servers/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    setValue("RAMT", formatResourceMB(b.data.limits.memory) || "")
    setValue("DiskT", formatResourceMB(b.data.limits.disk) || "")
    setValue("CPUT", b.data.limits.cpu || "")
    setValue("Reneval", b.data.reneval || "")
    setValue("IP", `${b.data.relationships.allocations.data[0].attributes.ip_alias || b.data.relationships.allocations.data[0].attributes.ip}:${b.data.relationships.allocations.data[0].attributes.port}`)
  }
}
function setValue(e, v) {
  document.getElementById(`server${e}`).innerText = v
}
async function power(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a == "stop") {
      visibility("startBTN", "")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "show")
      setTimeout(() => {
        visibility("killBTN", "")
        visibility("startBTN", "show")
      }, 2000);
    } else if (a == "kill") {
      visibility("startBTN", "show")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "")
    } else if (a == "start") {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    } else {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    };
    consoleSocket.send(JSON.stringify({ "event": "set state", "args": [a] }));
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function visibility(id, s) {
  let a = document.getElementById(id)
  if (s == "show") {
    a.classList.remove("hidden")
  } else if (!a.classList.contains("hidden")) {
    a.classList.add("hidden");
  } else {
    return
  }
}
function sendConsole(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a.key === 'Enter') {
      a.preventDefault();
      let b = document.getElementById("cmdInput")
      const c = b.value.trim();
      if (c !== '') {
        consoleSocket.send(JSON.stringify({ "event": "send command", "args": [b.value] }));
        b.value = '';
      }
    }
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function showConsole(b, c) {
  let a = document.getElementById("console");
  a.innerHTML += `<p>${ANSI(b)}</p>`;
  if (c) a.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  return
}
function ANSI(a) {
  let b = '';
  let c = '';
  const d = /\033\[(\d+)(;\d+)*m/g;
  let e = 0;
  let f;
  while ((f = d.exec(a)) !== null) {
    const g = getStyle(f[1]);
    c += a.substring(e, f.index);
    if (g !== b) {
      c += `<span style="${g}">`;
      b = g;
    }
    e = d.lastIndex;
  }
  c += a.substring(e);
  if (b !== '') { c += '</span>'; }
  return c;
}
function getStyle(a) {
  switch (a) {
    case '1':
      return 'font-weight: bold;';
    case '30':
      return 'color: black;';
    case '31':
      return 'color: red;';
    case '32':
      return 'color: green;';
    case '33':
      return 'color: #f59e0b;';
    case '34':
      return 'color: blue;';
    case '35':
      return 'color: magenta;';
    case '36':
      return 'color: cyan;';
    case '37':
      return 'color: #f3f4f6;';
    case '0':
      return 'color: #d1d5db;';
    default:
      return '';
  }
}
function showStats(a) {
  setValue("RAMU", formatResource(a.memory_bytes));
  setValue("DiskU", formatResource(a.disk_bytes));
  setValue("CPUU", a.cpu_absolute);
  setValue("NetI", formatResource(a.network.rx_bytes))
  setValue("NetO", formatResource(a.network.tx_bytes))
  if (!a.uptime == 0) {
    setValue("Uptime", formatUptime(a.uptime));
  } else {
    setValue("Uptime", "Offline");
    setValue("RAMU", "Offline");
    setValue("CPUU", "Offline");
    setValue("NetI", "Offline")
    setValue("NetO", "Offline")
  }
}
function formatUptime(a) {
  let b = a / 1000;
  let c = Math.floor(b / 3600);
  let d = Math.floor((b % 3600) / 60);
  let e = Math.floor(b % 60);
  return `${c}h ${d}m ${e}s`;
}
function formatResource(a) {
  const b = 1024;
  const c = b * 1024;
  const d = c * 1024;
  if (a < b) {
    return `${a} Bytes`;
  } else if (a < c) {
    return `${(a / b).toFixed(2)} KB`;
  } else if (a < d) {
    return `${(a / c).toFixed(2)} MB`;
  } else {
    return `${(a / d).toFixed(2)} GB`;
  }
}
function formatResourceMB(a) {
  const b = 1024;
  if (a >= b) {
    return `${a / b} GB`;
  } else {
    return `${(a).toFixed(2)} MB`;
  }
}
function consoleWSS() {
  let webSocket = new WebSocket(`ws://${window.location.host}/ws.servers.console`);
  return webSocket;
}
async function files() {
  let a = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`);
  let b = await a.json();
  let c = document.getElementById("filesHolder");
  c.innerHTML = ""
  let d = [];
  let e = b.data.data;
  for (let i in e) {
    d.push(`
          <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
              <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
                  ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
                  <span class="ml-3">${e[i].attributes.name}</span>
              </div>
              <div class="flex space-x-8 items-center relative">
                  <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
                  <span>${date(e[i].attributes.modified_at)}</span>
                  <span class="p-0.5" onclick="showMenu(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </span>
                  <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
                  <div class="py-2 text-white text-center">
                  ${e[i].attributes.name}
                  </div>
                  <div class="w-full bg-zinc-800/80 h-0.5"></div>
                  <ul class="text-sm text-gray-200">
                      <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                          <a>Delete</a>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
      `);
  }
  c.innerHTML += d.join('');
}
async function showDir(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('dir', cD);
  window.history.pushState({}, document.title, u.href);
  let r = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`);
  let d = await r.json();
  let c = document.getElementById("filesHolder");
  let m = document.getElementById("filesManager");
  let n = u.search
  m.innerHTML = `${n.replace('?dir=', '').replace(/%2F/g, '<span class="text-gray-400 mx-1">/</span>')}`;
  let e = d.data.data
  let f = []
  for (let i in e) {
    f.push(`
    <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
    <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
        ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
        <span class="ml-3">${e[i].attributes.name}</span>
    </div>
    <div class="flex space-x-8 items-center relative">
        <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
        <span>${date(e[i].attributes.modified_at)}</span>
        <span class="p-0.5" onclick="showMenu(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </span>
        <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
        <div class="py-2 text-white text-center">
        ${e[i].attributes.name}
        </div>
        <div class="w-full bg-zinc-800/80 h-0.5"></div>
        <ul class="text-sm text-gray-200">
            <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                <a>Delete</a>
            </li>
        </ul>
    </div>
    </div>
</div>`)
  }
  c.innerHTML = f.join('');
}
function showMenu(a) {
  event.stopPropagation();
  const menu = document.getElementById(`menu${a}`);
  const c = !menu.classList.contains("hidden");
  document.querySelectorAll('.fileMenu').forEach(function (menu) {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    menu.classList.add('hidden');
  });
  if (!c) {
    menu.classList.remove("hidden");
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      menu.style.opacity = 1;
      menu.style.transform = 'translateY(0px)';
    }, 10);
  } else {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 10);
  }
}
document.addEventListener('click', function (event) {
  if (!event.target.closest('.fileMenu')) {
    document.querySelectorAll('.fileMenu').forEach(function (menu) {
      menu.classList.add('hidden');
    });
  }
});
function svg(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const extensionMap = {
    'jar': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99929 3V16H3.49929V3C3.49929 2.33696 3.76268 1.70107 4.23152 1.23223C4.70036 0.763392 5.33625 0.5 5.99929 0.5H14.0422L14.5422 1H14.2493H5.99929C5.46886 1 4.96015 1.21071 4.58508 1.58579C4.21 1.96086 3.99929 2.46957 3.99929 3ZM14.7493 1.5V1.20711L19.7922 6.25H19.4993H16.4993C16.0352 6.25 15.59 6.06563 15.2619 5.73744C14.9337 5.40925 14.7493 4.96413 14.7493 4.5V1.5ZM19.9993 6.45711L20.4993 6.95711V16H19.9993V6.75V6.45711ZM2.75102 22.5926L2.75105 22.5925L2.74923 22.5877C2.74623 22.5796 2.74331 22.5716 2.74045 22.5635H2.90746C2.92743 22.6128 2.95024 22.661 2.97583 22.7079L2.9797 22.715L2.9838 22.722C3.09912 22.9181 3.26576 23.079 3.46577 23.1873C3.66222 23.2938 3.88354 23.3456 4.10668 23.3375C4.48351 23.3353 4.85378 23.2218 5.11252 22.9121C5.35078 22.627 5.43579 22.2643 5.43579 21.8925V18.275H5.62079V21.8625C5.62079 22.4334 5.46836 22.7877 5.23783 23.0105L5.23632 23.0119C4.99943 23.2428 4.64632 23.3875 4.10929 23.3875V23.3874L4.10084 23.3876C3.87194 23.3914 3.64423 23.3539 3.42869 23.2768C3.26851 23.2171 3.12363 23.1225 3.00461 22.9998C2.89239 22.8834 2.80598 22.7446 2.75102 22.5926ZM7.7606 22.0854L7.39771 23.2735H7.26299L8.44195 19.7603L8.00478 21.203L7.80912 21.8487L7.83293 21.8486L7.7606 22.0854ZM8.8909 18.4225L8.9404 18.275H9.60967L11.2796 23.2735H11.0839L10.721 22.0854L10.6478 21.8459L10.6797 21.8458L10.4843 21.2014L9.74928 18.7774L9.64166 18.4225H9.27079H9.21829H8.8909ZM12.2037 18.275H12.5073L13.7506 22.6196L13.8543 22.982H14.2313H14.2883H14.6664L14.7694 22.6181L15.9984 18.275H16.2446L14.5859 23.2735H13.8786L12.2037 18.275ZM17.7196 21.8487L17.7434 21.8486L17.6711 22.0854L17.3082 23.2735H17.1735L18.3525 19.7603L17.9153 21.203L17.7196 21.8487ZM18.8014 18.4225L18.8509 18.275H19.5202L21.1901 23.2735H20.9944L20.6315 22.0854L20.5583 21.8459L20.5902 21.8458L20.3948 21.2014L19.6598 18.7774L19.5522 18.4225H19.1813H19.1288H18.8014Z" stroke="#D9D9D9"/>
      </svg>`,
    'txt': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.2989 23.2366 18.663 23.5 18 23.5H15.5V23H18C18.5304 23 19.0391 22.7893 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM12.1295 18.768V18.275H12.819V18.768H12.3205V23.2735H12.1295V18.768ZM6.91859 20.4863L5.54924 18.275H5.76103L6.86464 20.1838L7.00903 20.4335H7.2975H7.35H7.64004L7.78403 20.1817L8.87454 18.275H9.01588L7.59237 20.5175L7.42304 20.7843L7.59127 21.0517L8.9888 23.2735H8.81642L7.68711 21.3935L7.54142 21.151H7.2585H7.206H6.92359L6.77779 21.3929L5.64409 23.2735H5.52805L6.91939 21.0115L7.08106 20.7486L6.91859 20.4863ZM2.201 18.275H2.392V18.768V23.2735H2.201V18.768V18.275Z" stroke="#D9D9D9"/>
    </svg>`,
    'yml': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.4186 23.117 18.9767 23.3522 18.5 23.4495V22.9365C18.843 22.8479 19.1594 22.669 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM6.0725 23.2735V18.275H6.45348L6.89635 19.2835H6.687H6.63H6.13V19.7835V23.2735H6.0725ZM10.564 18.275H10.9375V23.2735H10.865V19.782V19.282H10.365H10.308H10.1218L10.564 18.275ZM8.5275 22.169H8.71673L8.56213 22.522H8.44098L8.28532 22.169H8.49H8.5275ZM4.36723 18.275L2.76018 21.2323L2.6995 21.3439V21.471V23.2735H2.5085V21.4935V21.3671L2.44843 21.2559L0.838344 18.275H1.0058L2.14681 20.5437L2.2853 20.819H2.5935H2.6415H2.94938L3.08797 20.5441L4.23188 18.275H4.36723ZM13.6935 23.2625H15.739V23.2735H13.007V18.275H13.1935V22.7625V23.2625H13.6935Z" stroke="#D9D9D9"/>
    </svg>`,
    'png': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
    'jpg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'wepb': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'jpeg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'json': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_73_315)">
<mask id="path-1-inside-1_73_315" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z" stroke="#D9D9D9" stroke-width="2" mask="url(#path-1-inside-1_73_315)"/>
</g>
<defs>
<clipPath id="clip0_73_315">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`,
    'properties': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>`
  };
  return extensionMap[extension] || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0H14.25L21 6.75ZM16.5 6.75C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5Z" fill="#D9D9D9"/>
  </svg>`;
}
async function showFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  window.history.pushState({}, document.title, u.href);
  window.location.href = `/api/servers/files/edit/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`
}
async function deleteFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  let f = await fetch(`/api/servers/files/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`)
  let g = await f.json()
  if (g.success == true) {
    toastr.success("Success", g.message)
    files()
  } else {
    toast.error("Error", g.message)
  }
}
async function pull() {
  let a = document.getElementById("uploadURLInput")
  toastr.info(a.value)
  let b = await fetch(`/api/servers/files/upload/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: a.value })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success");
    a.value = ''
    display('files')
  } else {
    toastr.error(c.message, "Error")
  }
}
async function deleteServer() {
  let a = await fetch(`/api/servers/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('servers')
  } else (
    toastr.error(b.message, "Error")
  )
}
async function save() {
  let a = document.getElementById("Editor");
  let b = a.value;
  let url = window.location.href;
  let id = url.split('/servers/files/edit/')[1]?.split('/')[0];
  let c = await fetch(`/api/servers/files/edit/${id}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: b })
  });
  let d = await c.json();
  if (d.success == true) {
    toastr.success("Success", d.message);
  } else {
    toastr.error("Error", d.message);
  }
}
function toggle(a) {
  document.getElementById(`${a}Btn`).classList.toggle("rounded-xl")
  document.getElementById(`${a}Btn`).classList.toggle("rounded-t-xl")
  const b = document.getElementById(a);
  if (!document.getElementById(`${a}`).classList.contains("hidden")) {
    setTimeout(() => {
      b.style.opacity = '0';
      b.style.transform = 'translateY(0)';
      b.style.maxHeight = '';
      b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      setTimeout(() => {
        b.classList.toggle("hidden");
      }, 200);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>`
  } else {
    b.style.transform = 'translateY(-10%)';
    b.style.opacity = '0';
    b.style.height = '0%'
    setTimeout(() => {
      b.classList.toggle("hidden");
      setTimeout(() => {
        b.style.opacity = '1';
        b.style.transform = 'translateY(0)';
        b.style.maxHeight = '';
        b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      }, 100);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
  </svg>`
  }
}
function color(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  if (b <= 75) {
    return "bg-emerald-500";
  } else if (b <= 85) {
    return "bg-amber-500";
  } else if (b <= 95) {
    return "bg-rose-500";
  } else {
    return "bg-red-500";
  }
}
let srvCache = {}
let serverConfig = {}
let fees = { node: 0, egg: 0 }
async function serverCreate() {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById('nodesList')
    let d = []
    srvCache = b.data
    for (let i of b.data.nodes) {
      d.push(`
      <div id="node${i.id}" onclick="selectNode(${i.id})" class="w-full relative flex flex-col cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-start shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
        <span class="text-gray-300">${i.relationships.location.attributes.short}: ${i.name}</span>
        <div class="flex w-full space-x-2 items-baseline">
          <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${(i.allocated_resources.memory / i.memory) * 100}%] overflow-hidden rounded-full ${color((i.allocated_resources.memory / i.memory) * 100)}"></div>
          </div>
          <span class="text-gray-400">${(i.allocated_resources.memory / i.memory) * 100}%</span>
        </div>
        <div id="nodeMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    c.innerHTML = d.join()
    let e = document.getElementById('eggsList')
    let f = []
    for (let i of b.data.eggs) {
      f.push(`
      <div id="egg${i.id}" onclick="selectEgg(${i.id})" class="w-full relative flex space-x-2 cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-center shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
      <img src="${i.deployments.icon}" class="w-auto h-8">
      <span class="text-gray-300">${i.deployments.name}</span>
        <div id="eggMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      </div>
      `)
    }
    e.innerHTML = f.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function selectNode(a) {
  let d = document.getElementById("nodesList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`nodeMark${i.id.replace("node", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`node${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`nodeMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["node"] = a;
    let c = srvCache.nodes.find(i => i.id == a);
    fees["node"] = c.deployments.fees;
  } else {
    serverConfig["node"] = null;
    fees["node"] = 0;
  }
  fee();
}
function selectEgg(a) {
  let d = document.getElementById("eggsList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`eggMark${i.id.replace("egg", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`egg${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`eggMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["egg"] = a;
    let c = srvCache.eggs.find(i => i.id == a);
    fees["egg"] = c.deployments.fees;
  } else {
    serverConfig["egg"] = null;
    fees["egg"] = 0;
  }
  fee();
}
function fee() {
  let a = fees.egg + fees.node
  let b = document.getElementById("srvFees")
  let c = parseInt(b.innerText)
  let d = document.getElementById("srvAlert")
  if (c == 0 && a == 0) {
    d.innerText = ``;
  } else if (c == 0 && a !== 0) {
    d.innerText = `You'll have to pay ${a} coins for the node & software.`;
  } else {
    d.innerText = `You'll have to pay ${a} coins for the node & software, ${c} coins for deploying a server.`;
  }
}
function gv(a) {
  return document.getElementById(a).value
}
async function deploy() {
  let a = await fetch('/api/servers/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("srvName"),
      resources: { memory: gv("srvMemory"), disk: gv("srvStorage"), cpu: gv("srvCPU"), databases: gv("srvDatabases"), allocations: gv("srvAllocations"), backups: gv("srvBackups") },
      environment: serverConfig
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    serverConfig = {}
    srvCache = {}
    render('create')
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function modifyServer() {
  let a = ["Memory", "Disk", "CPU", "Allocations", "Backups", "Databases"]
  let b = {}
  a.forEach(i => { b[i.toLowerCase()] = parseInt(document.getElementById(`srvModify${i}`).value) });
  let c = await fetch(`/api/servers/modify/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resources: b
    })
  });
  let d = await c.json()
  if (d.success == true) {
    toastr.success(d.message, "Success!")
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function serverModify() {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let d = []
    let e = []
    for (let i of b.data.nodes) {
      d.push(`<option value="${i.id}">${i.name} - ${(i.allocated_resources.memory / i.memory) * 100}% full</option>`)
    }
    for (let i of b.data.eggs) {
      e.push(`<option value="${i.id}">${i.name}</option>`)
    }
    document.getElementById('nodesList').innerHTML = d.join('')
    document.getElementById('eggsList').innerHTML = e.join('')
  }
}
async function changeNode() {
  let a = document.getElementById("nodesList").value
  let b = await fetch(`/api/servers/transfer/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function connectAFKWS(a, b) {
  let afkWS = new WebSocket(`ws://${window.location.host}/ws.afk`);
  st("afkStatus", 'Connecting...');
  if (window.location.pathname !== "/economy") afkWS.close()
  afkWS.onopen = function () {
    afkWS.send(JSON.stringify({ "event": "auth", "session": a, "user": b }));
    st("afkStatus", 'Socket connected');
  };
  afkWS.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.redirect) {
      window.location.href = '/'
    } else {
      st("sessionCoins", `${data.session ?? 0} coins`);
      st("totalCoins", `${data.total ?? 0} coins`);
      st("afkDuration", `${data.duration ?? 0} s`);
      st("coinsIn", `${data.coinsIn ?? 0} s`);
      st("afkStatus", 'Earning');
      document.getElementById("coins").innerText = `${data.total} coins`
    }
  };
  afkWS.onclose = function () {
    st("afkStatus", 'Socket disconnected');
  }
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function loadLeaderboard() {
  let a = await fetch('/api/economy/leaderboard')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    let d = b.data.leaderboard
    for (let i in d) {
      c.push(`
      <div class="flex flex-col items-center justify-center relative">
        <div class="relative w-36 rounded-xl">
          <img src="${d[i].avatar}" alt="user" class="w-full rounded-xl h-auto">
          <div class="absolute z-30 top-0 right-0 text-center items-center bg-zinc-900/50 flex justify-center -mt-4 -mr-4 text-gray-300 backdrop-blur-xl w-12 h-12 rounded-full">${pos(i)}</div>
        </div>
        <h1 class="text-gray-300 text-xl">${d[i].nickname}</h1>
        <span class="text-gray-400">${d[i].coins} coins</span>
      </div>`)
    }
    document.getElementById("coinsLeaderboard").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function pos(a) {
  a = parseInt(a)
  switch (a) {
    case 0:
      return '1st';
    case 1:
      return '2nd';
    case 2:
      return '3rd';
    case 3:
      return '4th';
    default:
      return '5th';
  }
}
function addValue(a, b) {
  let c = document.getElementById(`resourceInput${a}`)
  let d = 0
  if (b.startsWith("+")) {
    d = parseInt(c.value || 0) + parseInt(b.slice(1))
  } else {
    d = parseInt(c.value || 0) - parseInt(b.slice(1))
  }
  if (d < 0) {
    d = 0
  }
  c.value = d
};
async function buyResource(a) {
  let b = document.getElementById(`resourceInput${a}`).value
  let c = await fetch(`/api/market/buy/${a}/${b}`)
  let d = await c.json()
  if (d.success) {
    toastr.success(d.message, "Success!")
    document.getElementById("coins").innerText = `${d.data} coins`
  } else {
    toastr.error(d.message, "Error!")
  }
}
function showPaymentGateways(a) {
  document.querySelector('main').insertAdjacentHTML('beforeend', `
  <div id="loadOverlay" class="bg-zinc-950/50 backdrop-blur-xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 h-screen">
  <div class="relative h-max overflow-hidden w-full max-w-sm md:max-w-md bg-zinc-800/80 backdrop-blur-xl rounded-3xl p-px">
  <div class="relative w-full h-full rounded-3xl bg-zinc-900/80 backdrop-blur-sm p-4">
      <h1 class="text-gray-400 text-xl">Choose a payment method:</h1>
      <div class="flex flex-col space-y-1 mt-4">
      <button onclick="checkout(${a})" class="mt-4 rounded-3xl w-full py-2.5 bg-zinc-400/10 shadow-xl backdrop-blur-xl text-gray-300 border border-zinc-100/10">
      PayPal
      </button>
      </div>
  </div>`);
}
function checkout(a) {
  document.getElementById("loadOverlay").classList.add("hidden")
  window.location.href = `/api/payments/buy/paypal/${a}`
  return
>>>>>>> 7f9cef0 (02-05)
=======
/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license MIT
 * 
 * https://x.holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * app.js - Frontend development file.
 *--------------------------------------------------------------------------
*/
const routes = [
  { "name": "dashboard", "href": false, "url": "dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>` },
  { "name": "create", "href": false, "url": "create", "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>` },
  { "name": "servers", "href": false, "url": "servers", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>` },
  { "name": "economy", "href": false, "url": "economy", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>` },
  { "name": "tickets", "href": false, "url": "tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
  { "name": "chat", "href": false, "url": "chat", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>` },
  { "name": "market", "href": false, "url": "market", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" /></svg>` },
  { "name": "account", "href": false, "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "admin", "href": true, "url": "/admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` }
]
let cachedRoutes = {}
const userRoutes = [
  { "name": "notifications", "url": "notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const links = [
  { "name": "console", "href": false, "url": "", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  { "name": "files", "href": false, "url": "files", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>` },
  { "name": "plugins", "href": false, "url": "plugins", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "mods", "href": false, "url": "mods", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>` },
  { "name": "subdomains", "href": false, "url": "subdomains", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>` },
  { "name": "players", "href": false, "url": "players", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>` },
  { "name": "databases", "href": false, "url": "databases", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>` },
  { "name": "schedules", "href": false, "url": "schedules", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>` },
  { "name": "backups", "href": false, "url": "backups", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>` },
  { "name": "network", "href": false, "url": "network", "svg": ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>` },
  { "name": "startup", "href": false, "url": "startup", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "settings", "href": false, "url": "settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HolaClient: 500</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="/assets/default/app.css" rel="stylesheet">
</head>

<body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
    <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
        <h1
            class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
            500
        </h1>
        <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
        <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
        <button onclick="window.history.back()"
            class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
            Back</button>
    </div>
</body>`
function reload(a, b) {
  if (a && b) {
    document.getElementById(a).innerHTML = b
  }
}
async function getPage(page) {
  if (cachedRoutes[page]) {
    return cachedRoutes[page]
  } else {
    let c;
    if (page.startsWith('/')) {
      c = await fetch(page || "/");
    } else if (page === "") {
      c = await fetch("/");
    } else {
      c = await fetch("/" + (page || "/"));
    }
    return c.text();
  }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
  <div id="loadOverlay" class="bg-zinc-950/50 backdrop-blur-xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 min-h-screen h-full">
      <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
      <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      </h1>
  </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      //let g = await fetch(`obviously-a-404-page`);
      //let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = b;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  for (let m of userRoutes) {
    let n = document.getElementById(`nav-${m.url}`);
    if (n) n.classList.remove("shadow", "text-white", "bg-zinc-800/90");
    if (document.getElementById(`nav-display-${m.url}`)) document.getElementById(`nav-display-${m.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
  updateLinks();
  cachePages()
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      return a.slice(1, b);
    }
    return a.slice(1);
  }
  const c = a.indexOf("/");
  if (c !== -1) {
    return a.slice(0, c);
  }
  return a;
}
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
async function load() {
  const a = document.getElementById("sidebar");
  const b = document.createDocumentFragment();

  for (let c of routes) {
    const d = document.createElement("li");
    d.innerHTML = `
    <a onclick="render('${c.url}')" id="nav-${c.url}"
        class="flex items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${c.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${c.svg}
            <span class="ml-2 text-lg capitalize">${c.name}</span>
        </div>
    </a>`;

    d.style.opacity = 0;
    d.style.transform = 'translateY(20px)';

    b.appendChild(d);
  }

  a.appendChild(b);

  setTimeout(() => {
    const c = document.querySelectorAll("#sidebar li");
    c.forEach((d, e) => {
      d.style.transition = `opacity 1s ease ${e * 0.1}s, transform 1s ease ${e * 0.1}s`;
      d.style.opacity = 1;
      d.style.transform = 'translateY(0)';
    });
  }, 100);

  highlight();
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const d = document.createDocumentFragment();

    for (let e of userRoutes) {
      const f = document.createElement("li");
      f.innerHTML = `
    <a onclick="render('${e.url}')" id="nav-${e.url}"
        class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${e.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${e.svg}
            <span class="ml-2 text-lg capitalize">${e.name}</span>
        </div>
    </a>`;

      f.style.opacity = 0;
      f.style.transform = 'translateY(20px)';

      d.appendChild(f);
    }

    c.appendChild(d);

    setTimeout(() => {
      const g = document.querySelectorAll("#userDropdown li");
      g.forEach((h, i) => {
        h.style.transition = `opacity 1s ease ${i * 0.1}s, transform 1s ease ${i * 0.1}s`;
        h.style.opacity = 1;
        h.style.transform = 'translateY(0)';
      });
    }, 100);
  } else {
    a.classList.add("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 0;
    c.innerHTML = '';
  }
}
window.onload = () => {
  load();
  highlight();
  updateLinks();
  setTimeout(() => { cachePages(); }, 2000);
}
async function cachePages() {
  for (let i of routes) {
    let c;
    if (i.url.startsWith('/')) {
      c = await fetch(i.url || "/");
    } else {
      c = await fetch("/" + (i.url || "/"));
    }
    cachedRoutes[i.url] = c.text()
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
window.onpopstate = function () {
  render(window.location.href.replace(window.location.origin, ''));
  highlight();
  updateLinks()
}
function updateLinks() {
  const a = document.getElementById("serverLinks");
  if (a) {
    const b = document.createDocumentFragment();
    a.innerHTML = '';

    for (let c of links) {
      const d = document.createElement("li");
      d.innerHTML = `
        <a onclick="display('${c.url}')" id="page-${c.url}" class="text-gray-400 justify-center text-center hover:text-white hover:duration-300 duration-300 cursor-pointer flex flex-col items-center text-lg">
          <div class="flex items-center space-x-2">
              ${c.svg}
            <span class="capitalize">${c.name}</span>
          </div>
          <div id="page-display-${c.url}" class="w-10 hidden bg-sky-500 h-0.5 rounded-full"></div>
        </a>
      `;
      d.style.opacity = 0;
      d.style.transform = 'translateX(20px)';

      b.appendChild(d);
    }
    a.appendChild(b);
    setTimeout(() => {
      const e = document.querySelectorAll("#serverLinks li");
      e.forEach((f, g) => {
        f.style.transition = `opacity 1s ease ${g * 0.1}s, transform 1s ease ${g * 0.1}s`;
        f.style.opacity = 1;
        f.style.transform = 'translateY(0)';
      });
    }, 100);
  }
}
async function display(page = page || "/") {
  const a = document.getElementById('page');
  a.innerHTML = "";
  a.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  a.style.opacity = 0;
  a.style.transform = 'translateY(20px)';
  let b;
  if (page.startsWith('/')) {
    b = await fetch(page || "/");
  } else if (page === "") {
    b = await fetch(`/servers/${get()}/`);
  } else {
    b = await fetch(`/servers/${get()}/` + (page || "/"));
  }
  let c = await b.text();
  let d = document.createElement('div');
  d.innerHTML = c;
  let e = d.querySelector('#page');
  try {
    if (a && e) {
      a.innerHTML = e.innerHTML;
    } else {
      console.error(`Page ${page} not found"`, 404);
      let f = await fetch(`../../errors/404.html`);
      let g = await f.text();
      a.innerHTML = g;
    }
  } catch (h) {
    a.innerHTML = error500;
  }
  const i = document.getElementById(`page-${page}`);
  const j = document.getElementById(`page-display-${page}`);
  for (let k of links) {
    document.getElementById(`page-${k.url}`).classList.remove("shadow", "text-white");
    document.getElementById(`page-display-${k.url}`).classList.add("hidden");
  }
  if (i) {
    const l = document.querySelectorAll("#serverLinks li");
    l.forEach(m => {
      m.classList.remove("text-white", "shadow");
    });

    i.classList.add("text-white", "shadow");
    j.classList.remove("hidden");
  }

  setTimeout(() => {
    a.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    a.style.opacity = 1;
    a.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`servers/${get()}/${page}`);
}
function select(a) {
  document.cookie = `server=${a}; max-age=900000; path=/`;
}
function get() {
  const a = document.cookie.split(';').map(b => b.trim());
  const c = a.find(b => b.startsWith('server='));
  if (!c || !c.includes('=')) {
    render("/servers");
    changeURL("/servers");
    return null;
  }
  return c.split('=')[1];
}
function activate() {
  let a = window.location;
  let b = a.href.replace(a.origin, '').replace(`servers/${get()}/`, '').replace('/', '');
  let c = `page-${b}`;
  let d = `page-display-${b}`;
  const e = document.querySelectorAll("#serverLinks li");
  e.forEach(f => {
    f.classList.add("text-gray-300");
    f.classList.remove("text-white", "shadow");
  });

  const g = document.getElementById(c);
  const h = document.getElementById(d);
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow");
  }

  if (h) {
    const i = document.querySelectorAll("[id^='page-display']");
    i.forEach(j => {
      j.classList.add("hidden");
      j.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      j.style.opacity = 0;
      j.style.transform = 'translateY(100%)';
    });

    h.classList.remove("hidden");
    h.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    h.style.opacity = 0;
    h.style.transform = 'translateY(0)';
  }
}
async function mods() {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a mod?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "project_type": "Search for it!",
    "icon_url": "https://cdn.holaclient.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  });
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsSearch(q) {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsInstall(a) {
  let d = document.getElementById(`mod-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/mods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], mod: a })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function pluginss() {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a plugin?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "loaders": [
      "Search for it!"
    ],
    "icon_url": "https://cdn.holaclient.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  })
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
});
async function pluginsSearch(q) {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.02}s, transform 0.3s ease ${g * 0.01}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function pluginsInstall(a, n) {
  let d = document.getElementById(`plugin-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/plugins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], plugin: a, name: n })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function players() {
  let a = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}?type=ip`)
  let b = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let j = await fetch(`/api/servers/players/ops/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let c = await a.json();
  let e = await b.json();
  let k = await k.json();
  if (c.success == false) return toastr.error("Error", c.message);
  if (e.success == false) return toastr.error("Error", e.message);
  if (k.success == false) return toastr.error("Error", k.message);
  let f = document.getElementById('playersBans');
  let l = document.getElementById('playersAdmins');
  let g = document.getElementById('playersBansIPs');
  let d = document.createDocumentFragment();
  let h = document.createDocumentFragment();
  let m = document.createDocumentFragment();
  f.innerHTML = '';
  g.innerHTML = '';
  l.innerHTML = '';
  if (c.data.length == 0) f.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (e.data.length == 0) g.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (j.data.length == 0) l.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  f.appendChild(d);
  for (let i of e.data) {
    const j = document.createElement("div")
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.ip}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    h.appendChild(j);
  }
  g.appendChild(h);
  for (let i of j.data) {
    const j = document.createElement("div");
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    m.appendChild(j);
  }
  l.appendChild(m);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBans div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBansIPs div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersAdmins div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
};
let ws
let msg = { last: {} }
async function messages() {
  ws = new WebSocket(`ws://${window.location.host}/ws.chat`);
  ws.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'history') {
      show(data.args, true);
    } else if (data.event == 'message') {
      show(data.args, false);
    }
  }
  ws.onclose = () => {
    messages()
  }
};
async function show(data, b) {
  const a = document.getElementById("messages");
  if (!a) return;
  if (b === true) {
    document.getElementById("messages").innerHTML = ""
  }
  for (let i of data) {
    if (msg.last.id > i.id) {
      msg.last = {}
    }
    if (!msg.last || !msg.last.user || msg.last.user !== i.user) {
      a.innerHTML += messageHeader(i);
    } else if (msg.last.user === i.user && parseInt((parseInt(i.time) - parseInt(msg.last?.time)) / 60000) < 15) {
      a.innerHTML += `
        <div id="message${i.id}" class="flex ml-14 flex-col bg-zinc-900 w-max rounded-xl">
          <div class="grow px-4 py-2">
            <p class="text-gray-100">${i.message}</p>
          </div>
        </div>`;
    } else {
      a.innerHTML += messageHeader(i);
    }
    msg["last"] = i;
  }
  a.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
  a.scrollTop = a.scrollHeight
  if (b === true) {
    if (a.scrollHeight - a.clientHeight <= a.scrollTop + 1) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);
    }
  }
}
function messageInput(event) {
  if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      const textarea = event.target;
      const currentRows = textarea.rows;
      console.log(currentRows)
      textarea.rows = currentRows + 1;
      textarea.scrollTop = textarea.scrollHeight;
  }
}
function messageHeader(a) {
  return `
  <div class="flex relative space-x-2 items-start pt-4">
  <img class="object-cover top-0 aspect-square w-12 start-6 rounded-xl" src="${a.avatar}">
  <div class="flex flex-col">
      <div class="flex items-center space-x-2">
          <h1 class="text-gray-200 text-md">${a.username}</h1>
          <span class="text-gray-300 text-sm">${date(a.time)}</span>
      </div>
      <div class="flex flex-col bg-zinc-900 w-max rounded-xl">
          <div class="grow px-4 py-2">
              <p class="text-gray-100">${a.message}</p>
          </div>
      </div>
  </div>
</div>`
}
async function send() {
  const b = document.getElementById('msgInput');
  const c = b.value.trim();
  if (c !== '') {
    ws.send(JSON.stringify({ "event": "message", "args": [c] }));
    b.value = '';
  }
};
function date(a) {
  return new Date(a).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', weekday: 'short', month: 'short', day: 'numeric' });
}
async function ticket(id) {
  let aa = await fetch(`/api/tickets/${id}`);
  let bb = await aa.json();
  let cc = document.getElementById("messages")
  cc.innerHTML = ''
  showTicket(bb.data);
}
async function showTicket(data) {
  const container = document.getElementById("messages");
  if (!container) {
    return;
  }
  let lastUserId = null;
  for (let a of data) {
    let b = document.createElement("div");
    b.className = "flex relative space-x-2 items-start";
    let c = document.createElement("div");
    c.className = "flex flex-col";
    if (lastUserId !== a.id) {
      let d = document.createElement("img");
      d.className = "object-cover top-0 aspect-square mt-4 w-12 start-6 rounded-xl";
      d.src = a.avatar;
      b.appendChild(d);
      let e = idk(a.username, a.time);
      c.appendChild(e);
    }
    let f = document.createElement("div");
    f.className = "flex ml-14 mr-14 flex-col bg-zinc-900 max-w-fit rounded-xl";
    if (lastUserId !== a.id) {
      f.classList.remove("ml-14");
    }
    let g = document.createElement("div");
    g.className = "grow px-4 py-2";
    let h = document.createElement("p");
    h.className = "text-gray-100";
    h.textContent = a.message;
    g.appendChild(h);
    f.appendChild(g);
    c.appendChild(f);
    b.appendChild(c);
    container.appendChild(b);
    lastUserId = a.id;
  };
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  const j =
    container.lastElementChild.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;
  if (j) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
};
async function ticketSend(a) {
  if (a.key === 'Enter') {
    a.preventDefault();
    const b = document.getElementById('ticketInput');
    const c = b.value.trim();
    if (c !== '') {
      wss.send(c);
      b.value = '';
    }
  }
};
function wss() {
  const ws = new WebSocket(`ws://${window.location.host}/tickets/messages?id=${id}`);
  return ws
};
let consoleSocket;
async function consoleWS(c, d) {
  visibility("startBTN", "show")
  if (window.location.protocol == "https:") {
    consoleSocket = new WebSocket(`wss://${window.location.host}/ws.servers.console`);
  } else {
    consoleSocket = new WebSocket(`ws://${window.location.host}/ws.servers.console`);
  }
  let consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML = ''
  consoleSocket.onopen = function () {
    consoleSocket.send(JSON.stringify({ "event": "auth", "session": c, "user": d, "server": `${(window.location.href).split('/servers/')[1]?.split('/')[0]}` }));
  };
  consoleSocket.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'console output') {
      let b = data.args[0]
      let c = consoleDiv.scrollHeight - consoleDiv.clientHeight <= consoleDiv.scrollTop + 1;
      if (b != ' ') { consoleDiv.innerHTML += `<p>${ANSI(b)}</p>`; }
      //if (c) consoleDiv.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    } else if (data.event == 'stats') {
      let a = (JSON.parse(data.args[0]).state)
      if (a == "offline") {
        visibility("startBTN", "show")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "")
      } else if (a == "stopping") {
        visibility("startBTN", "")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "show")
      } else {
        visibility("startBTN", "")
        visibility("restartBTN", "show")
        visibility("stopBTN", "show")
        visibility("killBTN", "")
      }
      showStats(JSON.parse(data.args[0]));
    } else if (data.event == 'redirect') {
      window.location.href = '/servers'
    }
  };
  let a = await fetch(`/api/servers/details/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    setValue("RAMT", formatResourceMB(b.data.limits.memory) || "")
    setValue("DiskT", formatResourceMB(b.data.limits.disk) || "")
    setValue("CPUT", b.data.limits.cpu || "")
    setValue("Reneval", b.data.reneval || "")
    setValue("IP", `${b.data.relationships.allocations.data[0].attributes.ip_alias || b.data.relationships.allocations.data[0].attributes.ip}:${b.data.relationships.allocations.data[0].attributes.port}`)
  }
  consoleSocket.onclose = function () {
    consoleWS(c, d)
  }
}
function setValue(e, v) {
  document.getElementById(`server${e}`).innerText = v
}
async function power(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a == "stop") {
      visibility("startBTN", "")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "show")
      setTimeout(() => {
        visibility("killBTN", "")
        visibility("startBTN", "show")
      }, 2000);
    } else if (a == "kill") {
      visibility("startBTN", "show")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "")
    } else if (a == "start") {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    } else {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    };
    consoleSocket.send(JSON.stringify({ "event": "set state", "args": [a] }));
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function visibility(id, s) {
  let a = document.getElementById(id)
  if (s == "show") {
    a.classList.remove("hidden")
  } else if (!a.classList.contains("hidden")) {
    a.classList.add("hidden");
  } else {
    return
  }
}
function sendConsole(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a.key === 'Enter') {
      a.preventDefault();
      let b = document.getElementById("cmdInput")
      const c = b.value.trim();
      if (c !== '') {
        consoleSocket.send(JSON.stringify({ "event": "send command", "args": [b.value] }));
        b.value = '';
      }
    }
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function ANSI(a) {
  let b = '';
  let c = '';
  const d = /\033\[(\d+)(;\d+)*m/g;
  let e = 0;
  let f;
  while ((f = d.exec(a)) !== null) {
    const g = getStyle(f[1]);
    c += a.substring(e, f.index);
    if (g !== b) {
      c += `<span class="${g}">`;
      b = g;
    }
    e = d.lastIndex;
  }
  c += a.substring(e);
  if (b !== '') { c += '</span>'; }
  return c;
}
function getStyle(a) {
  switch (a) {
    case '1':
      return 'font-bold';
    case '30':
      return 'text-black';
    case '31':
      return 'text-rose-400';
    case '32':
      return 'text-emerald-400';
    case '33':
      return 'text-amber-400';
    case '34':
      return 'text-blue-400';
    case '35':
      return 'text-pink-400';
    case '36':
      return 'text-cyan-400';
    case '37':
      return 'text-gray-100';
    case '0':
      return 'text-gray-300';
    default:
      return '';
  }
}
function showStats(a) {
  setValue("RAMU", formatResource(a.memory_bytes));
  setValue("DiskU", formatResource(a.disk_bytes));
  setValue("CPUU", a.cpu_absolute);
  setValue("NetI", formatResource(a.network.rx_bytes))
  setValue("NetO", formatResource(a.network.tx_bytes))
  if (!a.uptime == 0) {
    setValue("Uptime", formatUptime(a.uptime));
  } else {
    setValue("Uptime", "Offline");
    setValue("RAMU", "Offline");
    setValue("CPUU", "Offline");
    setValue("NetI", "Offline")
    setValue("NetO", "Offline")
  }
}
function formatUptime(a) {
  let b = a / 1000;
  let c = Math.floor(b / 3600);
  let d = Math.floor((b % 3600) / 60);
  let e = Math.floor(b % 60);
  return `${c}h ${d}m ${e}s`;
}
function formatResource(a) {
  const b = 1024;
  const c = b * 1024;
  const d = c * 1024;
  if (a < b) {
    return `${a} Bytes`;
  } else if (a < c) {
    return `${(a / b).toFixed(2)} KB`;
  } else if (a < d) {
    return `${(a / c).toFixed(2)} MB`;
  } else {
    return `${(a / d).toFixed(2)} GB`;
  }
}
function formatResourceMB(a) {
  const b = 1024;
  if (a >= b) {
    return `${a / b} GB`;
  } else {
    return `${(a).toFixed(2)} MB`;
  }
}
async function files() {
  let a = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`);
  let b = await a.json();
  let c = document.getElementById("filesHolder");
  c.innerHTML = ""
  let d = [];
  let e = b.data.data;
  for (let i in e) {
    d.push(`
          <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
              <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
                  ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
                  <span class="ml-3">${e[i].attributes.name}</span>
              </div>
              <div class="flex space-x-8 items-center relative">
                  <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
                  <span>${date(e[i].attributes.modified_at)}</span>
                  <span class="p-0.5" onclick="showMenu(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </span>
                  <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
                  <div class="py-2 text-white text-center">
                  ${e[i].attributes.name}
                  </div>
                  <div class="w-full bg-zinc-800/80 h-0.5"></div>
                  <ul class="text-sm text-gray-200">
                      <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                          <a>Delete</a>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
      `);
  }
  c.innerHTML += d.join('');
}
async function showDir(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('dir', cD);
  window.history.pushState({}, document.title, u.href);
  let r = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`);
  let d = await r.json();
  let c = document.getElementById("filesHolder");
  let m = document.getElementById("filesManager");
  let n = u.search
  m.innerHTML = `${n.replace('?dir=', '').replace(/%2F/g, '<span class="text-gray-400 mx-1">/</span>')}`;
  let e = d.data.data
  let f = []
  for (let i in e) {
    f.push(`
    <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
    <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
        ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
        <span class="ml-3">${e[i].attributes.name}</span>
    </div>
    <div class="flex space-x-8 items-center relative">
        <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
        <span>${date(e[i].attributes.modified_at)}</span>
        <span class="p-0.5" onclick="showMenu(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </span>
        <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
        <div class="py-2 text-white text-center">
        ${e[i].attributes.name}
        </div>
        <div class="w-full bg-zinc-800/80 h-0.5"></div>
        <ul class="text-sm text-gray-200">
            <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                <a>Delete</a>
            </li>
        </ul>
    </div>
    </div>
</div>`)
  }
  c.innerHTML = f.join('');
}
function showMenu(a) {
  event.stopPropagation();
  const menu = document.getElementById(`menu${a}`);
  const c = !menu.classList.contains("hidden");
  document.querySelectorAll('.fileMenu').forEach(function (menu) {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    menu.classList.add('hidden');
  });
  if (!c) {
    menu.classList.remove("hidden");
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      menu.style.opacity = 1;
      menu.style.transform = 'translateY(0px)';
    }, 10);
  } else {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 10);
  }
}
document.addEventListener('click', function (event) {
  if (!event.target.closest('.fileMenu')) {
    document.querySelectorAll('.fileMenu').forEach(function (menu) {
      menu.classList.add('hidden');
    });
  }
});
function svg(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const extensionMap = {
    'jar': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99929 3V16H3.49929V3C3.49929 2.33696 3.76268 1.70107 4.23152 1.23223C4.70036 0.763392 5.33625 0.5 5.99929 0.5H14.0422L14.5422 1H14.2493H5.99929C5.46886 1 4.96015 1.21071 4.58508 1.58579C4.21 1.96086 3.99929 2.46957 3.99929 3ZM14.7493 1.5V1.20711L19.7922 6.25H19.4993H16.4993C16.0352 6.25 15.59 6.06563 15.2619 5.73744C14.9337 5.40925 14.7493 4.96413 14.7493 4.5V1.5ZM19.9993 6.45711L20.4993 6.95711V16H19.9993V6.75V6.45711ZM2.75102 22.5926L2.75105 22.5925L2.74923 22.5877C2.74623 22.5796 2.74331 22.5716 2.74045 22.5635H2.90746C2.92743 22.6128 2.95024 22.661 2.97583 22.7079L2.9797 22.715L2.9838 22.722C3.09912 22.9181 3.26576 23.079 3.46577 23.1873C3.66222 23.2938 3.88354 23.3456 4.10668 23.3375C4.48351 23.3353 4.85378 23.2218 5.11252 22.9121C5.35078 22.627 5.43579 22.2643 5.43579 21.8925V18.275H5.62079V21.8625C5.62079 22.4334 5.46836 22.7877 5.23783 23.0105L5.23632 23.0119C4.99943 23.2428 4.64632 23.3875 4.10929 23.3875V23.3874L4.10084 23.3876C3.87194 23.3914 3.64423 23.3539 3.42869 23.2768C3.26851 23.2171 3.12363 23.1225 3.00461 22.9998C2.89239 22.8834 2.80598 22.7446 2.75102 22.5926ZM7.7606 22.0854L7.39771 23.2735H7.26299L8.44195 19.7603L8.00478 21.203L7.80912 21.8487L7.83293 21.8486L7.7606 22.0854ZM8.8909 18.4225L8.9404 18.275H9.60967L11.2796 23.2735H11.0839L10.721 22.0854L10.6478 21.8459L10.6797 21.8458L10.4843 21.2014L9.74928 18.7774L9.64166 18.4225H9.27079H9.21829H8.8909ZM12.2037 18.275H12.5073L13.7506 22.6196L13.8543 22.982H14.2313H14.2883H14.6664L14.7694 22.6181L15.9984 18.275H16.2446L14.5859 23.2735H13.8786L12.2037 18.275ZM17.7196 21.8487L17.7434 21.8486L17.6711 22.0854L17.3082 23.2735H17.1735L18.3525 19.7603L17.9153 21.203L17.7196 21.8487ZM18.8014 18.4225L18.8509 18.275H19.5202L21.1901 23.2735H20.9944L20.6315 22.0854L20.5583 21.8459L20.5902 21.8458L20.3948 21.2014L19.6598 18.7774L19.5522 18.4225H19.1813H19.1288H18.8014Z" stroke="#D9D9D9"/>
      </svg>`,
    'txt': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.2989 23.2366 18.663 23.5 18 23.5H15.5V23H18C18.5304 23 19.0391 22.7893 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM12.1295 18.768V18.275H12.819V18.768H12.3205V23.2735H12.1295V18.768ZM6.91859 20.4863L5.54924 18.275H5.76103L6.86464 20.1838L7.00903 20.4335H7.2975H7.35H7.64004L7.78403 20.1817L8.87454 18.275H9.01588L7.59237 20.5175L7.42304 20.7843L7.59127 21.0517L8.9888 23.2735H8.81642L7.68711 21.3935L7.54142 21.151H7.2585H7.206H6.92359L6.77779 21.3929L5.64409 23.2735H5.52805L6.91939 21.0115L7.08106 20.7486L6.91859 20.4863ZM2.201 18.275H2.392V18.768V23.2735H2.201V18.768V18.275Z" stroke="#D9D9D9"/>
    </svg>`,
    'yml': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.4186 23.117 18.9767 23.3522 18.5 23.4495V22.9365C18.843 22.8479 19.1594 22.669 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM6.0725 23.2735V18.275H6.45348L6.89635 19.2835H6.687H6.63H6.13V19.7835V23.2735H6.0725ZM10.564 18.275H10.9375V23.2735H10.865V19.782V19.282H10.365H10.308H10.1218L10.564 18.275ZM8.5275 22.169H8.71673L8.56213 22.522H8.44098L8.28532 22.169H8.49H8.5275ZM4.36723 18.275L2.76018 21.2323L2.6995 21.3439V21.471V23.2735H2.5085V21.4935V21.3671L2.44843 21.2559L0.838344 18.275H1.0058L2.14681 20.5437L2.2853 20.819H2.5935H2.6415H2.94938L3.08797 20.5441L4.23188 18.275H4.36723ZM13.6935 23.2625H15.739V23.2735H13.007V18.275H13.1935V22.7625V23.2625H13.6935Z" stroke="#D9D9D9"/>
    </svg>`,
    'png': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
    'jpg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'wepb': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'jpeg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'json': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_73_315)">
<mask id="path-1-inside-1_73_315" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z" stroke="#D9D9D9" stroke-width="2" mask="url(#path-1-inside-1_73_315)"/>
</g>
<defs>
<clipPath id="clip0_73_315">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`,
    'properties': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>`
  };
  return extensionMap[extension] || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0H14.25L21 6.75ZM16.5 6.75C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5Z" fill="#D9D9D9"/>
  </svg>`;
}
async function showFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  window.history.pushState({}, document.title, u.href);
  window.location.href = `/api/servers/files/edit/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`
}
async function deleteFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  let f = await fetch(`/api/servers/files/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`)
  let g = await f.json()
  if (g.success == true) {
    toastr.success("Success", g.message)
    files()
  } else {
    toast.error("Error", g.message)
  }
}
async function pull() {
  let a = document.getElementById("uploadURLInput")
  toastr.info(a.value)
  let b = await fetch(`/api/servers/files/upload/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: a.value })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success");
    a.value = ''
    display('files')
  } else {
    toastr.error(c.message, "Error")
  }
}
async function deleteServer() {
  let a = await fetch(`/api/servers/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('servers')
  } else (
    toastr.error(b.message, "Error")
  )
}
async function save() {
  let a = document.getElementById("Editor");
  let b = a.value;
  let url = window.location.href;
  let id = url.split('/servers/files/edit/')[1]?.split('/')[0];
  let c = await fetch(`/api/servers/files/edit/${id}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: b })
  });
  let d = await c.json();
  if (d.success == true) {
    toastr.success("Success", d.message);
  } else {
    toastr.error("Error", d.message);
  }
}
function toggle(a) {
  document.getElementById(`${a}Btn`).classList.toggle("rounded-xl")
  document.getElementById(`${a}Btn`).classList.toggle("rounded-t-xl")
  const b = document.getElementById(a);
  if (!document.getElementById(`${a}`).classList.contains("hidden")) {
    setTimeout(() => {
      b.style.opacity = '0';
      b.style.transform = 'translateY(0)';
      b.style.maxHeight = '';
      b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      setTimeout(() => {
        b.classList.toggle("hidden");
      }, 200);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>`
  } else {
    b.style.transform = 'translateY(-10%)';
    b.style.opacity = '0';
    b.style.height = '0%'
    setTimeout(() => {
      b.classList.toggle("hidden");
      setTimeout(() => {
        b.style.opacity = '1';
        b.style.transform = 'translateY(0)';
        b.style.maxHeight = '';
        b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      }, 100);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
  </svg>`
  }
}
function color(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  if (b <= 75) {
    return "bg-emerald-500";
  } else if (b <= 85) {
    return "bg-amber-500";
  } else if (b <= 95) {
    return "bg-rose-500";
  } else {
    return "bg-red-500";
  }
}
let srvCache = {}
let serverConfig = {}
let fees = { node: 0, egg: 0 }
async function serverCreate() {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById('nodesList')
    let d = []
    srvCache = b.data
    for (let i of b.data.nodes) {
      d.push(`
      <div id="node${i.id}" onclick="selectNode(${i.id})" class="w-full relative flex flex-col cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-start shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
        <span class="text-gray-300">${i.relationships.location.attributes.short}: ${i.name}</span>
        <div class="flex w-full space-x-2 items-baseline">
          <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${(i.allocated_resources.memory / i.memory) * 100}%] overflow-hidden rounded-full ${color((i.allocated_resources.memory / i.memory) * 100)}"></div>
          </div>
          <span class="text-gray-400">${(i.allocated_resources.memory / i.memory) * 100}%</span>
        </div>
        <div id="nodeMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    c.innerHTML = d.join()
    let e = document.getElementById('eggsList')
    let f = []
    for (let i of b.data.eggs) {
      f.push(`
      <div id="egg${i.id}" onclick="selectEgg(${i.id})" class="w-full relative flex space-x-2 cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-center shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
      <img src="${i.deployments.icon}" class="w-auto h-8">
      <span class="text-gray-300">${i.deployments.name}</span>
        <div id="eggMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      </div>
      `)
    }
    e.innerHTML = f.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function selectNode(a) {
  let d = document.getElementById("nodesList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`nodeMark${i.id.replace("node", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`node${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`nodeMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["node"] = a;
    let c = srvCache.nodes.find(i => i.id == a);
    fees["node"] = c.deployments.fees;
  } else {
    serverConfig["node"] = null;
    fees["node"] = 0;
  }
  fee();
}
function selectEgg(a) {
  let d = document.getElementById("eggsList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`eggMark${i.id.replace("egg", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`egg${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`eggMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["egg"] = a;
    let c = srvCache.eggs.find(i => i.id == a);
    fees["egg"] = c.deployments.fees;
  } else {
    serverConfig["egg"] = null;
    fees["egg"] = 0;
  }
  fee();
}
function fee() {
  let a = fees.egg + fees.node
  let b = document.getElementById("srvFees")
  let c = parseInt(b.innerText)
  let d = document.getElementById("srvAlert")
  if (c == 0 && a == 0) {
    d.innerText = ``;
  } else if (c == 0 && a !== 0) {
    d.innerText = `You'll have to pay ${a} coins for the node & software.`;
  } else {
    d.innerText = `You'll have to pay ${a} coins for the node & software, ${c} coins for deploying a server.`;
  }
}
function gv(a) {
  return document.getElementById(a).value
}
async function deploy() {
  let a = await fetch('/api/servers/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("srvName"),
      resources: { memory: gv("srvMemory"), disk: gv("srvStorage"), cpu: gv("srvCPU"), databases: gv("srvDatabases"), allocations: gv("srvAllocations"), backups: gv("srvBackups") },
      environment: serverConfig
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    serverConfig = {}
    srvCache = {}
    render('create')
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function modifyServer() {
  let a = ["Memory", "Disk", "CPU", "Allocations", "Backups", "Databases"]
  let b = {}
  a.forEach(i => { b[i.toLowerCase()] = parseInt(document.getElementById(`srvModify${i}`).value) });
  let c = await fetch(`/api/servers/modify/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resources: b
    })
  });
  let d = await c.json()
  if (d.success == true) {
    toastr.success(d.message, "Success!")
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function changeNode() {
  let a = document.getElementById("nodesList").value
  let b = await fetch(`/api/servers/transfer/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function connectAFKWS(a, b) {
  let afkWS
  let c;
  if (window.location.protocol == "https:") {
    afkWS = new WebSocket(`wss://${window.location.host}/ws.afk`);
  } else {
    afkWS = new WebSocket(`ws://${window.location.host}/ws.afk`);
  }
  st("afkStatus", 'Connecting...');
  if (window.location.pathname !== "/economy") afkWS.close()
  afkWS.onopen = function () {
    afkWS.send(JSON.stringify({ "event": "auth", "session": a, "user": b }));
    st("afkStatus", 'Socket connected');
    if (!c || c === null || c === undefined) c = Date.now()
  };
  afkWS.onmessage = async function (event) {
    if (window.location.pathname == "/economy") {
      let data = JSON.parse(event.data);
      if (data.redirect) {
        window.location.href = '/'
      } else {
        st("sessionCoins", `${data.session ?? 0} coins`);
        st("totalCoins", `${data.total ?? 0} coins`);
        st("coinsIn", `${data.coinsIn ?? 0} s`);
        st("afkStatus", 'Earning');
        document.getElementById("coins").innerText = `${data.total} coins`
        setInterval(() => {
          st("afkDuration", `${((Date.now() - c) / 1000).toFixed(0)} s`);
        }, 1000);
      }
    } else {
      afkWS.close()
    }
  };
  afkWS.onclose = function () {
    st("afkStatus", 'Socket disconnected');
    if (window.location.pathname == "/economy") connectAFKWS(a, b)
  }
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function loadLeaderboard() {
  let a = await fetch('/api/economy/leaderboard')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    let d = b.data.leaderboard
    for (let i in d) {
      c.push(`
      <div class="flex flex-col items-center justify-center relative">
        <div class="relative w-36 rounded-xl">
          <img src="${d[i].avatar}" alt="user" class="w-full rounded-xl h-auto">
          <div class="absolute z-30 top-0 right-0 text-center items-center bg-zinc-900/50 flex justify-center -mt-4 -mr-4 text-gray-300 backdrop-blur-xl w-12 h-12 rounded-full">${pos(i)}</div>
        </div>
        <h1 class="text-gray-300 text-xl">${d[i].nickname}</h1>
        <span class="text-gray-400">${d[i].coins} coins</span>
      </div>`)
    }
    document.getElementById("coinsLeaderboard").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function pos(a) {
  a = parseInt(a)
  switch (a) {
    case 0:
      return '1st';
    case 1:
      return '2nd';
    case 2:
      return '3rd';
    case 3:
      return '4th';
    default:
      return '5th';
  }
}
function addValue(a, b) {
  let c = document.getElementById(`resourceInput${a}`)
  let d = 0
  if (b.startsWith("+")) {
    d = parseInt(c.value || 0) + parseInt(b.slice(1))
  } else {
    d = parseInt(c.value || 0) - parseInt(b.slice(1))
  }
  if (d < 0) {
    d = 0
  }
  c.value = d
};
async function buyResource(a) {
  let b = document.getElementById(`resourceInput${a}`).value
  let c = await fetch(`/api/market/buy/${a}/${b}`)
  let d = await c.json()
  if (d.success) {
    toastr.success(d.message, "Success!")
    document.getElementById("coins").innerText = `${d.data} coins`
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function countries() {
  let a = new Intl.DisplayNames(["en"], { type: 'region' });
  let b = []
  b.push(`<option value="" hidden class="capitalize">Country</option>`)
  for (let i = 65; i <= 90; ++i) {
    for (let j = 65; j <= 90; ++j) {
      let c = String.fromCharCode(i) + String.fromCharCode(j)
      let d = a.of(c)
      if (c !== d) {
        b.push(`<option value="${c}" class="capitalize">${d}</option>`)
      }
    }
  }
  document.getElementById("countriesList").innerHTML = b.join('')
  let c = await fetch('/api/payments/gateways')
  let d = await c.json()
  if (d.success == true) {
    let e = []
    d.data.forEach(i => {
      let f
      if (i.icon.type == "image") {
        f = `<img src="${i.icon.src}" alt="bill" class="w-6 h-6">`
      } else {
        f = i.icon.src
      }
      e.push(`<div id="paymentGateway${i.name}" onclick="selectGateway('${i.name}')" class="w-full rounded-xl p-2 px-4 cursor-pointer text-gray-400 hover:text-gray-200 hover:duration-300 transition-all hover:bg-zinc-900/20 backdrop-blur-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center space-x-2">
        ${f}
      <span>${i.display}</span>
  </div>`)
    });
    document.getElementById("paymentGateways").innerHTML = e.join('')
  }
}
let gatewayConfig = ""
function selectGateway(a) {
  gatewayConfig = a
  let d = document.getElementById("paymentGateways")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    i.classList.remove("text-emerald-400")
    i.classList.add("text-gray-400");
  }
  let b = document.getElementById(`paymentGateway${a}`);
  b.classList.add("border-emerald-800/80");
  b.classList.add("bg-emerald-900/20");
  b.classList.add("text-emerald-400");
}
async function checkout(a) {
  let b = {
    name: gv("Name"),
    address_0: gv("address_0"),
    address_1: gv("address_1"),
    city: gv("city"),
    state: gv("state"),
    zip: gv("zip"),
    country: gv("country"),
    gateway: gatewayConfig
  }
  if (a.price.type === "coins") b = {}
  let c = await fetch(`/api/payments/buy/products/coins/${a.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(b)
  });
  let d = await c.json()
  if (d.success == true) {
    if (a.price.type !== "coins") {
      window.location.href = d.data
    } else {
      render(`/account/invoices/${d.data.id}`)
    }
  } else {
    toastr.error(d.message, "Error!")
  }
>>>>>>> 6db1d9f (21-05)
=======
/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license MIT
 * 
 * https://x.holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * app.js - Frontend development file.
 *--------------------------------------------------------------------------
*/
const routes = [
  { "name": "dashboard", "href": false, "url": "dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>` },
  { "name": "create", "href": false, "url": "create", "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>` },
  { "name": "servers", "href": false, "url": "servers", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>` },
  { "name": "economy", "href": false, "url": "economy", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>` },
//  { "name": "tickets", "href": false, "url": "tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
//  { "name": "chat", "href": false, "url": "chat", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>` },
  { "name": "market", "href": false, "url": "market", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" /></svg>` },
  { "name": "account", "href": false, "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "admin", "href": true, "url": "/admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` }
]
let cachedRoutes = {}
const userRoutes = [
  { "name": "notifications", "url": "notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const links = [
  { "name": "console", "href": false, "url": "", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  { "name": "files", "href": false, "url": "files", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>` },
  { "name": "plugins", "href": false, "url": "plugins", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "mods", "href": false, "url": "mods", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>` },
//  { "name": "subdomains", "href": false, "url": "subdomains", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>` },
  { "name": "players", "href": false, "url": "players", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>` },
//  { "name": "databases", "href": false, "url": "databases", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>` },
//  { "name": "schedules", "href": false, "url": "schedules", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>` },
//  { "name": "backups", "href": false, "url": "backups", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>` },
//  { "name": "network", "href": false, "url": "network", "svg": ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>` },
//  { "name": "startup", "href": false, "url": "startup", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "settings", "href": false, "url": "settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HolaClient: 500</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="/assets/default/app.css" rel="stylesheet">
</head>

<body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
    <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
        <h1
            class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
            500
        </h1>
        <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
        <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
        <button onclick="window.history.back()"
            class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
            Back</button>
    </div>
</body>`
function reload(a, b) {
  if (a && b) {
    document.getElementById(a).innerHTML = b
  }
}
async function getPage(page) {
  if (cachedRoutes[page]) {
    return cachedRoutes[page]
  } else {
    let c;
    if (page.startsWith('/')) {
      c = await fetch(page || "/");
    } else if (page === "") {
      c = await fetch("/");
    } else {
      c = await fetch("/" + (page || "/"));
    }
    return c.text();
  }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
  <div id="loadOverlay" class="bg-zinc-950/50 backdrop-blur-xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 min-h-screen h-full">
      <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
      <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      </h1>
  </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      //let g = await fetch(`obviously-a-404-page`);
      //let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = b;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  for (let m of userRoutes) {
    let n = document.getElementById(`nav-${m.url}`);
    if (n) n.classList.remove("shadow", "text-white", "bg-zinc-800/90");
    if (document.getElementById(`nav-display-${m.url}`)) document.getElementById(`nav-display-${m.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
  updateLinks();
  cachePages()
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      return a.slice(1, b);
    }
    return a.slice(1);
  }
  const c = a.indexOf("/");
  if (c !== -1) {
    return a.slice(0, c);
  }
  return a;
}
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
async function load() {
  const a = document.getElementById("sidebar");
  const b = document.createDocumentFragment();

  for (let c of routes) {
    const d = document.createElement("li");
    d.innerHTML = `
    <button onclick="render('${c.url}')" id="nav-${c.url}" aria-label="navlink"
        class="flex w-full items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${c.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${c.svg}
            <span class="ml-2 text-lg capitalize">${c.name}</span>
        </div>
    </button>`;

    d.style.opacity = 0;
    d.style.transform = 'translateY(20px)';

    b.appendChild(d);
  }

  a.appendChild(b);

  setTimeout(() => {
    const c = document.querySelectorAll("#sidebar li");
    c.forEach((d, e) => {
      d.style.transition = `opacity 1s ease ${e * 0.1}s, transform 1s ease ${e * 0.1}s`;
      d.style.opacity = 1;
      d.style.transform = 'translateY(0)';
    });
  }, 100);

  highlight();
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const d = document.createDocumentFragment();

    for (let e of userRoutes) {
      const f = document.createElement("li");
      f.innerHTML = `
    <a onclick="render('${e.url}')" id="nav-${e.url}"
        class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${e.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${e.svg}
            <span class="ml-2 text-lg capitalize">${e.name}</span>
        </div>
    </a>`;

      f.style.opacity = 0;
      f.style.transform = 'translateY(20px)';

      d.appendChild(f);
    }

    c.appendChild(d);

    setTimeout(() => {
      const g = document.querySelectorAll("#userDropdown li");
      g.forEach((h, i) => {
        h.style.transition = `opacity 1s ease ${i * 0.1}s, transform 1s ease ${i * 0.1}s`;
        h.style.opacity = 1;
        h.style.transform = 'translateY(0)';
      });
    }, 100);
  } else {
    a.classList.add("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 0;
    c.innerHTML = '';
  }
}
window.onload = () => {
  load();
  highlight();
  updateLinks();
  setTimeout(() => { cachePages(); }, 2000);
}
async function cachePages() {
  for (let i of routes) {
    let c;
    if (i.url.startsWith('/')) {
      c = await fetch(i.url || "/");
    } else {
      c = await fetch("/" + (i.url || "/"));
    }
    cachedRoutes[i.url] = c.text()
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
window.onpopstate = function () {
  render(window.location.href.replace(window.location.origin, ''));
  highlight();
  updateLinks()
}
function updateLinks() {
  const a = document.getElementById("serverLinks");
  if (a) {
    const b = document.createDocumentFragment();
    a.innerHTML = '';

    for (let c of links) {
      const d = document.createElement("li");
      d.innerHTML = `
        <a onclick="display('${c.url}')" id="page-${c.url}" class="text-gray-400 justify-center text-center hover:text-white hover:duration-300 duration-300 cursor-pointer flex flex-col items-center text-lg">
          <div class="flex items-center space-x-2">
              ${c.svg}
            <span class="capitalize">${c.name}</span>
          </div>
          <div id="page-display-${c.url}" class="w-10 hidden bg-sky-500 h-0.5 rounded-full"></div>
        </a>
      `;
      d.style.opacity = 0;
      d.style.transform = 'translateX(20px)';

      b.appendChild(d);
    }
    a.appendChild(b);
    setTimeout(() => {
      const e = document.querySelectorAll("#serverLinks li");
      e.forEach((f, g) => {
        f.style.transition = `opacity 1s ease ${g * 0.1}s, transform 1s ease ${g * 0.1}s`;
        f.style.opacity = 1;
        f.style.transform = 'translateY(0)';
      });
    }, 100);
  }
}
async function display(page = page || "/") {
  const a = document.getElementById('page');
  a.innerHTML = "";
  a.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  a.style.opacity = 0;
  a.style.transform = 'translateY(20px)';
  let b;
  if (page.startsWith('/')) {
    b = await fetch(page || "/");
  } else if (page === "") {
    b = await fetch(`/servers/${get()}/`);
  } else {
    b = await fetch(`/servers/${get()}/` + (page || "/"));
  }
  let c = await b.text();
  let d = document.createElement('div');
  d.innerHTML = c;
  let e = d.querySelector('#page');
  try {
    if (a && e) {
      a.innerHTML = e.innerHTML;
    } else {
      console.error(`Page ${page} not found"`, 404);
      let f = await fetch(`../../errors/404.html`);
      let g = await f.text();
      a.innerHTML = g;
    }
  } catch (h) {
    a.innerHTML = error500;
  }
  const i = document.getElementById(`page-${page}`);
  const j = document.getElementById(`page-display-${page}`);
  for (let k of links) {
    document.getElementById(`page-${k.url}`).classList.remove("shadow", "text-white");
    document.getElementById(`page-display-${k.url}`).classList.add("hidden");
  }
  if (i) {
    const l = document.querySelectorAll("#serverLinks li");
    l.forEach(m => {
      m.classList.remove("text-white", "shadow");
    });

    i.classList.add("text-white", "shadow");
    j.classList.remove("hidden");
  }

  setTimeout(() => {
    a.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    a.style.opacity = 1;
    a.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`servers/${get()}/${page}`);
}
function select(a) {
  document.cookie = `server=${a}; max-age=900000; path=/`;
}
function get() {
  const a = document.cookie.split(';').map(b => b.trim());
  const c = a.find(b => b.startsWith('server='));
  if (!c || !c.includes('=')) {
    render("/servers");
    changeURL("/servers");
    return null;
  }
  return c.split('=')[1];
}
function activate() {
  let a = window.location;
  let b = a.href.replace(a.origin, '').replace(`servers/${get()}/`, '').replace('/', '');
  let c = `page-${b}`;
  let d = `page-display-${b}`;
  const e = document.querySelectorAll("#serverLinks li");
  e.forEach(f => {
    f.classList.add("text-gray-300");
    f.classList.remove("text-white", "shadow");
  });

  const g = document.getElementById(c);
  const h = document.getElementById(d);
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow");
  }

  if (h) {
    const i = document.querySelectorAll("[id^='page-display']");
    i.forEach(j => {
      j.classList.add("hidden");
      j.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      j.style.opacity = 0;
      j.style.transform = 'translateY(100%)';
    });

    h.classList.remove("hidden");
    h.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    h.style.opacity = 0;
    h.style.transform = 'translateY(0)';
  }
}
async function mods() {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a mod?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "project_type": "Search for it!",
    "icon_url": "https://cdn.holaclientx.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  });
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsSearch(q) {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsInstall(a) {
  let d = document.getElementById(`mod-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/mods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], mod: a })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function pluginss() {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a plugin?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "loaders": [
      "Search for it!"
    ],
    "icon_url": "https://cdn.holaclientx.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  })
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
});
async function pluginsSearch(q) {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.02}s, transform 0.3s ease ${g * 0.01}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function pluginsInstall(a, n) {
  let d = document.getElementById(`plugin-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/plugins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], plugin: a, name: n })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function players() {
  let a = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}?type=ip`)
  let b = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let j = await fetch(`/api/servers/players/ops/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let c = await a.json();
  let e = await b.json();
  let k = await k.json();
  if (c.success == false) return toastr.error("Error", c.message);
  if (e.success == false) return toastr.error("Error", e.message);
  if (k.success == false) return toastr.error("Error", k.message);
  let f = document.getElementById('playersBans');
  let l = document.getElementById('playersAdmins');
  let g = document.getElementById('playersBansIPs');
  let d = document.createDocumentFragment();
  let h = document.createDocumentFragment();
  let m = document.createDocumentFragment();
  f.innerHTML = '';
  g.innerHTML = '';
  l.innerHTML = '';
  if (c.data.length == 0) f.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (e.data.length == 0) g.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (j.data.length == 0) l.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  f.appendChild(d);
  for (let i of e.data) {
    const j = document.createElement("div")
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.ip}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    h.appendChild(j);
  }
  g.appendChild(h);
  for (let i of j.data) {
    const j = document.createElement("div");
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    m.appendChild(j);
  }
  l.appendChild(m);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBans div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBansIPs div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersAdmins div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
};
let ws
let msg = { last: {} }
async function messages() {
  ws = new WebSocket(`ws://${window.location.host}/ws.chat`);
  ws.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'history') {
      show(data.args, true);
    } else if (data.event == 'message') {
      show(data.args, false);
    }
  }
  ws.onclose = () => {
    messages()
  }
};
async function show(data, b) {
  const a = document.getElementById("messages");
  if (!a) return;
  if (b === true) {
    document.getElementById("messages").innerHTML = ""
  }
  for (let i of data) {
    if (msg.last.id > i.id) {
      msg.last = {}
    }
    if (!msg.last || !msg.last.user || msg.last.user !== i.user) {
      a.innerHTML += messageHeader(i);
    } else if (msg.last.user === i.user && parseInt((parseInt(i.time) - parseInt(msg.last?.time)) / 60000) < 15) {
      a.innerHTML += `
        <div id="message${i.id}" class="flex ml-14 flex-col bg-zinc-900 w-max rounded-xl">
          <div class="grow px-4 py-2">
            <p class="text-gray-100">${i.message}</p>
          </div>
        </div>`;
    } else {
      a.innerHTML += messageHeader(i);
    }
    msg["last"] = i;
  }
  a.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
  a.scrollTop = a.scrollHeight
  if (b === true) {
    if (a.scrollHeight - a.clientHeight <= a.scrollTop + 1) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);
    }
  }
}
function messageInput(event) {
  if (event.key === 'Enter' && event.shiftKey) {
    event.preventDefault();
    const textarea = event.target;
    const currentRows = textarea.rows;
    console.log(currentRows)
    textarea.rows = currentRows + 1;
    textarea.scrollTop = textarea.scrollHeight;
  }
}
function messageHeader(a) {
  return `
  <div class="flex relative space-x-2 items-start pt-4">
  <img class="object-cover top-0 aspect-square w-12 start-6 rounded-xl" src="${a.avatar}">
  <div class="flex flex-col">
      <div class="flex items-center space-x-2">
          <h1 class="text-gray-200 text-md">${a.username}</h1>
          <span class="text-gray-300 text-sm">${date(a.time)}</span>
      </div>
      <div class="flex flex-col bg-zinc-900 w-max rounded-xl">
          <div class="grow px-4 py-2">
              <p class="text-gray-100">${a.message}</p>
          </div>
      </div>
  </div>
</div>`
}
async function send() {
  const b = document.getElementById('msgInput');
  const c = b.value.trim();
  if (c !== '') {
    ws.send(JSON.stringify({ "event": "message", "args": [c] }));
    b.value = '';
  }
};
function date(a) {
  return new Date(a).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', weekday: 'short', month: 'short', day: 'numeric' });
}
async function ticket(id) {
  let aa = await fetch(`/api/tickets/${id}`);
  let bb = await aa.json();
  let cc = document.getElementById("messages")
  cc.innerHTML = ''
  showTicket(bb.data);
}
async function showTicket(data) {
  const container = document.getElementById("messages");
  if (!container) {
    return;
  }
  let lastUserId = null;
  for (let a of data) {
    let b = document.createElement("div");
    b.className = "flex relative space-x-2 items-start";
    let c = document.createElement("div");
    c.className = "flex flex-col";
    if (lastUserId !== a.id) {
      let d = document.createElement("img");
      d.className = "object-cover top-0 aspect-square mt-4 w-12 start-6 rounded-xl";
      d.src = a.avatar;
      b.appendChild(d);
      let e = idk(a.username, a.time);
      c.appendChild(e);
    }
    let f = document.createElement("div");
    f.className = "flex ml-14 mr-14 flex-col bg-zinc-900 max-w-fit rounded-xl";
    if (lastUserId !== a.id) {
      f.classList.remove("ml-14");
    }
    let g = document.createElement("div");
    g.className = "grow px-4 py-2";
    let h = document.createElement("p");
    h.className = "text-gray-100";
    h.textContent = a.message;
    g.appendChild(h);
    f.appendChild(g);
    c.appendChild(f);
    b.appendChild(c);
    container.appendChild(b);
    lastUserId = a.id;
  };
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  const j =
    container.lastElementChild.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;
  if (j) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
};
async function ticketSend(a) {
  if (a.key === 'Enter') {
    a.preventDefault();
    const b = document.getElementById('ticketInput');
    const c = b.value.trim();
    if (c !== '') {
      wss.send(c);
      b.value = '';
    }
  }
};
function wss() {
  const ws = new WebSocket(`ws://${window.location.host}/tickets/messages?id=${id}`);
  return ws
};
let consoleSocket;
async function consoleWS() {
  visibility("startBTN", "show")
  if (window.location.protocol == "https:") {
    consoleSocket = new WebSocket(`wss://${window.location.host}/ws.servers.console`);
  } else {
    consoleSocket = new WebSocket(`ws://${window.location.host}/ws.servers.console`);
  }
  let consoleDiv = document.getElementById("console");
  consoleSocket.onopen = function () {
    consoleSocket.send(JSON.stringify({ "event": "auth", "server": `${(window.location.href).split('/servers/')[1]?.split('/')[0]}` }));
  };
  consoleSocket.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'console output') {
      let b = data.args[0]
      let c = consoleDiv.scrollHeight - consoleDiv.clientHeight <= consoleDiv.scrollTop + 1;
      if (b != ' ') { consoleDiv.innerHTML += `<p>${ANSI(b)}</p>`; }
      if (c) consoleDiv.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    } else if (data.event == 'stats') {
      let a = (JSON.parse(data.args[0]).state)
      if (a == "offline") {
        visibility("startBTN", "show")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "")
      } else if (a == "stopping") {
        visibility("startBTN", "")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "show")
      } else {
        visibility("startBTN", "")
        visibility("restartBTN", "show")
        visibility("stopBTN", "show")
        visibility("killBTN", "")
      }
      showStats(JSON.parse(data.args[0]));
    } else if (data.event == 'redirect') {
      window.location.href = '/servers'
    }
  };
  let a = await fetch(`/api/servers/details/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    setValue("RAMT", formatResourceMB(b.data.limits.memory) || "")
    setValue("DiskT", formatResourceMB(b.data.limits.disk) || "")
    setValue("CPUT", b.data.limits.cpu || "")
    setValue("Reneval", b.data.reneval || "")
    setValue("IP", `${b.data.relationships.allocations.data[0].attributes.ip_alias || b.data.relationships.allocations.data[0].attributes.ip}:${b.data.relationships.allocations.data[0].attributes.port}`)
  }
  consoleSocket.onclose = function () {
    consoleWS()
  }
}
async function power(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a == "stop") {
      visibility("startBTN", "")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "show")
      setTimeout(() => {
        visibility("killBTN", "")
        visibility("startBTN", "show")
      }, 2000);
    } else if (a == "kill") {
      visibility("startBTN", "show")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "")
    } else if (a == "start") {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    } else {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    };
    consoleSocket.send(JSON.stringify({ "event": "set state", "args": [a] }));
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function visibility(id, s) {
  let a = document.getElementById(id)
  if (s == "show") {
    a.classList.remove("hidden")
  } else if (!a.classList.contains("hidden")) {
    a.classList.add("hidden");
  } else {
    return
  }
}
function sendConsole(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a.key === 'Enter') {
      a.preventDefault();
      let b = document.getElementById("cmdInput")
      const c = b.value.trim();
      if (c !== '') {
        consoleSocket.send(JSON.stringify({ "event": "send command", "args": [b.value] }));
        b.value = '';
      }
    }
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function ANSI(a) {
  let b = '';
  let c = '';
  const d = /\033\[(\d+)(;\d+)*m/g;
  let e = 0;
  let f;
  while ((f = d.exec(a)) !== null) {
    const g = getStyle(f[1]);
    c += a.substring(e, f.index);
    if (g !== b) {
      c += `<span class="${g}">`;
      b = g;
    }
    e = d.lastIndex;
  }
  c += a.substring(e);
  if (b !== '') { c += '</span>'; }
  return c;
}
function getStyle(a) {
  switch (a) {
    case '1':
      return 'font-bold';
    case '30':
      return 'text-black';
    case '31':
      return 'text-rose-400';
    case '32':
      return 'text-emerald-400';
    case '33':
      return 'text-amber-400';
    case '34':
      return 'text-blue-400';
    case '35':
      return 'text-pink-400';
    case '36':
      return 'text-cyan-400';
    case '37':
      return 'text-gray-100';
    case '0':
      return 'text-gray-300';
    default:
      return '';
  }
}
function showStats(a) {
  setValue("RAMU", formatResource(a.memory_bytes));
  setValue("DiskU", formatResource(a.disk_bytes));
  setValue("CPUU", a.cpu_absolute);
  setValue("NetI", formatResource(a.network.rx_bytes))
  setValue("NetO", formatResource(a.network.tx_bytes))
  if (!a.uptime == 0) {
    setValue("Uptime", formatUptime(a.uptime));
  } else {
    setValue("Uptime", "Offline");
    setValue("RAMU", "Offline");
    setValue("CPUU", "Offline");
    setValue("NetI", "Offline")
    setValue("NetO", "Offline")
  }
}
function setValue(e, v) {
  document.getElementById(`server${e}`).innerText = v
}
function formatUptime(a) {
  let b = a / 1000;
  let c = Math.floor(b / 3600);
  let d = Math.floor((b % 3600) / 60);
  let e = Math.floor(b % 60);
  return `${c}h ${d}m ${e}s`;
}
function formatResource(a) {
  const b = 1024;
  const c = b * 1024;
  const d = c * 1024;
  if (a < b) {
    return `${a} Bytes`;
  } else if (a < c) {
    return `${(a / b).toFixed(2)} KB`;
  } else if (a < d) {
    return `${(a / c).toFixed(2)} MB`;
  } else {
    return `${(a / d).toFixed(2)} GB`;
  }
}
function formatResourceMB(a) {
  const b = 1024;
  if (a >= b) {
    return `${a / b} GB`;
  } else {
    return `${(a).toFixed(2)} MB`;
  }
}
async function files() {
  let a = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`);
  let b = await a.json();
  let c = document.getElementById("filesHolder");
  c.innerHTML = ""
  let d = [];
  let e = b.data.data;
  for (let i in e) {
    d.push(`
          <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
              <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
                  ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
                  <span class="ml-3">${e[i].attributes.name}</span>
              </div>
              <div class="flex space-x-8 items-center relative">
                  <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
                  <span>${date(e[i].attributes.modified_at)}</span>
                  <span class="p-0.5" onclick="showMenu(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </span>
                  <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
                  <div class="py-2 text-white text-center">
                  ${e[i].attributes.name}
                  </div>
                  <div class="w-full bg-zinc-800/80 h-0.5"></div>
                  <ul class="text-sm text-gray-200">
                      <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                          <a>Delete</a>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
      `);
  }
  c.innerHTML += d.join('');
}
async function showDir(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('dir', cD);
  window.history.pushState({}, document.title, u.href);
  let r = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`);
  let d = await r.json();
  let c = document.getElementById("filesHolder");
  let m = document.getElementById("filesManager");
  let n = u.search
  m.innerHTML = `${n.replace('?dir=', '').replace(/%2F/g, '<span class="text-gray-400 mx-1">/</span>')}`;
  let e = d.data.data
  let f = []
  for (let i in e) {
    f.push(`
    <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
    <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
        ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
        <span class="ml-3">${e[i].attributes.name}</span>
    </div>
    <div class="flex space-x-8 items-center relative">
        <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
        <span>${date(e[i].attributes.modified_at)}</span>
        <span class="p-0.5" onclick="showMenu(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </span>
        <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
        <div class="py-2 text-white text-center">
        ${e[i].attributes.name}
        </div>
        <div class="w-full bg-zinc-800/80 h-0.5"></div>
        <ul class="text-sm text-gray-200">
            <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                <a>Delete</a>
            </li>
        </ul>
    </div>
    </div>
</div>`)
  }
  c.innerHTML = f.join('');
}
function showMenu(a) {
  event.stopPropagation();
  const menu = document.getElementById(`menu${a}`);
  const c = !menu.classList.contains("hidden");
  document.querySelectorAll('.fileMenu').forEach(function (menu) {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    menu.classList.add('hidden');
  });
  if (!c) {
    menu.classList.remove("hidden");
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      menu.style.opacity = 1;
      menu.style.transform = 'translateY(0px)';
    }, 10);
  } else {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 10);
  }
}
document.addEventListener('click', function (event) {
  if (!event.target.closest('.fileMenu')) {
    document.querySelectorAll('.fileMenu').forEach(function (menu) {
      menu.classList.add('hidden');
    });
  }
});
function svg(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const extensionMap = {
    'jar': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99929 3V16H3.49929V3C3.49929 2.33696 3.76268 1.70107 4.23152 1.23223C4.70036 0.763392 5.33625 0.5 5.99929 0.5H14.0422L14.5422 1H14.2493H5.99929C5.46886 1 4.96015 1.21071 4.58508 1.58579C4.21 1.96086 3.99929 2.46957 3.99929 3ZM14.7493 1.5V1.20711L19.7922 6.25H19.4993H16.4993C16.0352 6.25 15.59 6.06563 15.2619 5.73744C14.9337 5.40925 14.7493 4.96413 14.7493 4.5V1.5ZM19.9993 6.45711L20.4993 6.95711V16H19.9993V6.75V6.45711ZM2.75102 22.5926L2.75105 22.5925L2.74923 22.5877C2.74623 22.5796 2.74331 22.5716 2.74045 22.5635H2.90746C2.92743 22.6128 2.95024 22.661 2.97583 22.7079L2.9797 22.715L2.9838 22.722C3.09912 22.9181 3.26576 23.079 3.46577 23.1873C3.66222 23.2938 3.88354 23.3456 4.10668 23.3375C4.48351 23.3353 4.85378 23.2218 5.11252 22.9121C5.35078 22.627 5.43579 22.2643 5.43579 21.8925V18.275H5.62079V21.8625C5.62079 22.4334 5.46836 22.7877 5.23783 23.0105L5.23632 23.0119C4.99943 23.2428 4.64632 23.3875 4.10929 23.3875V23.3874L4.10084 23.3876C3.87194 23.3914 3.64423 23.3539 3.42869 23.2768C3.26851 23.2171 3.12363 23.1225 3.00461 22.9998C2.89239 22.8834 2.80598 22.7446 2.75102 22.5926ZM7.7606 22.0854L7.39771 23.2735H7.26299L8.44195 19.7603L8.00478 21.203L7.80912 21.8487L7.83293 21.8486L7.7606 22.0854ZM8.8909 18.4225L8.9404 18.275H9.60967L11.2796 23.2735H11.0839L10.721 22.0854L10.6478 21.8459L10.6797 21.8458L10.4843 21.2014L9.74928 18.7774L9.64166 18.4225H9.27079H9.21829H8.8909ZM12.2037 18.275H12.5073L13.7506 22.6196L13.8543 22.982H14.2313H14.2883H14.6664L14.7694 22.6181L15.9984 18.275H16.2446L14.5859 23.2735H13.8786L12.2037 18.275ZM17.7196 21.8487L17.7434 21.8486L17.6711 22.0854L17.3082 23.2735H17.1735L18.3525 19.7603L17.9153 21.203L17.7196 21.8487ZM18.8014 18.4225L18.8509 18.275H19.5202L21.1901 23.2735H20.9944L20.6315 22.0854L20.5583 21.8459L20.5902 21.8458L20.3948 21.2014L19.6598 18.7774L19.5522 18.4225H19.1813H19.1288H18.8014Z" stroke="#D9D9D9"/>
      </svg>`,
    'txt': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.2989 23.2366 18.663 23.5 18 23.5H15.5V23H18C18.5304 23 19.0391 22.7893 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM12.1295 18.768V18.275H12.819V18.768H12.3205V23.2735H12.1295V18.768ZM6.91859 20.4863L5.54924 18.275H5.76103L6.86464 20.1838L7.00903 20.4335H7.2975H7.35H7.64004L7.78403 20.1817L8.87454 18.275H9.01588L7.59237 20.5175L7.42304 20.7843L7.59127 21.0517L8.9888 23.2735H8.81642L7.68711 21.3935L7.54142 21.151H7.2585H7.206H6.92359L6.77779 21.3929L5.64409 23.2735H5.52805L6.91939 21.0115L7.08106 20.7486L6.91859 20.4863ZM2.201 18.275H2.392V18.768V23.2735H2.201V18.768V18.275Z" stroke="#D9D9D9"/>
    </svg>`,
    'yml': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.4186 23.117 18.9767 23.3522 18.5 23.4495V22.9365C18.843 22.8479 19.1594 22.669 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM6.0725 23.2735V18.275H6.45348L6.89635 19.2835H6.687H6.63H6.13V19.7835V23.2735H6.0725ZM10.564 18.275H10.9375V23.2735H10.865V19.782V19.282H10.365H10.308H10.1218L10.564 18.275ZM8.5275 22.169H8.71673L8.56213 22.522H8.44098L8.28532 22.169H8.49H8.5275ZM4.36723 18.275L2.76018 21.2323L2.6995 21.3439V21.471V23.2735H2.5085V21.4935V21.3671L2.44843 21.2559L0.838344 18.275H1.0058L2.14681 20.5437L2.2853 20.819H2.5935H2.6415H2.94938L3.08797 20.5441L4.23188 18.275H4.36723ZM13.6935 23.2625H15.739V23.2735H13.007V18.275H13.1935V22.7625V23.2625H13.6935Z" stroke="#D9D9D9"/>
    </svg>`,
    'png': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
    'jpg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'wepb': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'jpeg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'json': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_73_315)">
<mask id="path-1-inside-1_73_315" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z" stroke="#D9D9D9" stroke-width="2" mask="url(#path-1-inside-1_73_315)"/>
</g>
<defs>
<clipPath id="clip0_73_315">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`,
    'properties': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>`
  };
  return extensionMap[extension] || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0H14.25L21 6.75ZM16.5 6.75C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5Z" fill="#D9D9D9"/>
  </svg>`;
}
async function showFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  window.history.pushState({}, document.title, u.href);
  window.location.href = `/api/servers/files/edit/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`
}
async function deleteFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  let f = await fetch(`/api/servers/files/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`)
  let g = await f.json()
  if (g.success == true) {
    toastr.success("Success", g.message)
    files()
  } else {
    toast.error("Error", g.message)
  }
}
async function pull() {
  let a = document.getElementById("uploadURLInput")
  toastr.info(a.value)
  let b = await fetch(`/api/servers/files/upload/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: a.value })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success");
    a.value = ''
    display('files')
  } else {
    toastr.error(c.message, "Error")
  }
}
async function deleteServer() {
  let a = await fetch(`/api/servers/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('servers')
  } else (
    toastr.error(b.message, "Error")
  )
}
async function save() {
  let a = document.getElementById("Editor");
  let b = a.value;
  let url = window.location.href;
  let id = url.split('/servers/files/edit/')[1]?.split('/')[0];
  let c = await fetch(`/api/servers/files/edit/${id}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: b })
  });
  let d = await c.json();
  if (d.success == true) {
    toastr.success("Success", d.message);
  } else {
    toastr.error("Error", d.message);
  }
}
function toggle(a) {
  document.getElementById(`${a}Btn`).classList.toggle("rounded-xl")
  document.getElementById(`${a}Btn`).classList.toggle("rounded-t-xl")
  const b = document.getElementById(a);
  if (!document.getElementById(`${a}`).classList.contains("hidden")) {
    setTimeout(() => {
      b.style.opacity = '0';
      b.style.transform = 'translateY(0)';
      b.style.maxHeight = '';
      b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      setTimeout(() => {
        b.classList.toggle("hidden");
      }, 200);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>`
  } else {
    b.style.transform = 'translateY(-10%)';
    b.style.opacity = '0';
    b.style.height = '0%'
    setTimeout(() => {
      b.classList.toggle("hidden");
      setTimeout(() => {
        b.style.opacity = '1';
        b.style.transform = 'translateY(0)';
        b.style.maxHeight = '';
        b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      }, 100);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
  </svg>`
  }
}
function color(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  if (b <= 75) {
    return "bg-emerald-500";
  } else if (b <= 85) {
    return "bg-amber-500";
  } else if (b <= 95) {
    return "bg-rose-500";
  } else {
    return "bg-red-500";
  }
}
let srvCache = {}
let serverConfig = {}
let fees = { node: 0, egg: 0 }
async function serverCreate() {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById('nodesList')
    let d = []
    srvCache = b.data
    for (let i of b.data.nodes) {
      d.push(`
      <div id="node${i.id}" onclick="selectNode(${i.id})" class="w-full relative flex flex-col cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-start shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
        <span class="text-gray-300">${i.relationships.location.attributes.short}: ${i.name}</span>
        <div class="flex w-full space-x-2 items-baseline">
          <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${(i.allocated_resources.memory / i.memory) * 100}%] overflow-hidden rounded-full ${color((i.allocated_resources.memory / i.memory) * 100)}"></div>
          </div>
          <span class="text-gray-400">${(i.allocated_resources.memory / i.memory) * 100}%</span>
        </div>
        <div id="nodeMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    c.innerHTML = d.join("")
    let e = document.getElementById('eggsList')
    let f = []
    for (let i of b.data.eggs) {
      f.push(`
      <div id="egg${i.id}" onclick="selectEgg(${i.id})" class="w-full relative flex space-x-2 cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-center shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
      <img src="${i.deployments.icon}" class="w-auto h-8">
      <span class="text-gray-300">${i.deployments.name}</span>
        <div id="eggMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      </div>
      `)
    }
    e.innerHTML = f.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function selectNode(a) {
  let d = document.getElementById("nodesList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`nodeMark${i.id.replace("node", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`node${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`nodeMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["node"] = a;
    let c = srvCache.nodes.find(i => i.id == a);
    fees["node"] = c.deployments.fees;
  } else {
    serverConfig["node"] = null;
    fees["node"] = 0;
  }
  fee();
}
function selectEgg(a) {
  let d = document.getElementById("eggsList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`eggMark${i.id.replace("egg", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`egg${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`eggMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["egg"] = a;
    let c = srvCache.eggs.find(i => i.id == a);
    fees["egg"] = c.deployments.fees;
  } else {
    serverConfig["egg"] = null;
    fees["egg"] = 0;
  }
  fee();
}
function fee() {
  let a = fees.egg + fees.node
  let b = document.getElementById("srvFees")
  let c = parseInt(b.innerText)
  let d = document.getElementById("srvAlert")
  if (c == 0 && a == 0) {
    d.innerText = ``;
  } else if (c == 0 && a !== 0) {
    d.innerText = `You'll have to pay ${a} coins for the node & software.`;
  } else {
    d.innerText = `You'll have to pay ${a} coins for the node & software, ${c} coins for deploying a server.`;
  }
}
function gv(a) {
  return document.getElementById(a).value
}
async function deploy() {
  let a = await fetch('/api/servers/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("srvName"),
      resources: { memory: gv("srvMemory"), disk: gv("srvStorage"), cpu: gv("srvCPU"), databases: gv("srvDatabases"), allocations: gv("srvAllocations"), backups: gv("srvBackups") },
      environment: serverConfig
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    serverConfig = {}
    srvCache = {}
    render('create')
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function modifyServer() {
  let a = ["Memory", "Disk", "CPU", "Allocations", "Backups", "Databases"]
  let b = {}
  a.forEach(i => { b[i.toLowerCase()] = parseInt(document.getElementById(`srvModify${i}`).value) });
  let c = await fetch(`/api/servers/modify/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resources: b
    })
  });
  let d = await c.json()
  if (d.success == true) {
    toastr.success(d.message, "Success!")
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function serverModify(node) {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let d = []
    let e = []
    for (let i of b.data.nodes) {
      if (parseInt(node) !== parseInt(i.id)) {
        d.push(`<option value="${i.id}">${i.name} - ${(i.allocated_resources.memory / i.memory) * 100}% full</option>`)
      }
    }
    for (let i of b.data.eggs) {
      e.push(`<option value="${i.id}">${i.name}</option>`)
    }
    document.getElementById('nodesList').innerHTML = d.join('')
    document.getElementById('eggsList').innerHTML = e.join('')
  }
}
async function changeNode() {
  let a = document.getElementById("nodesList").value
  let b = await fetch(`/api/servers/transfer/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function connectAFKWS(a, b) {
  let afkWS
  let c;
  if (window.location.protocol == "https:") {
    afkWS = new WebSocket(`wss://${window.location.host}/ws.afk`);
  } else {
    afkWS = new WebSocket(`ws://${window.location.host}/ws.afk`);
  }
  st("afkStatus", 'Connecting...');
  if (window.location.pathname !== "/economy") afkWS.close()
  afkWS.onopen = function () {
    afkWS.send(JSON.stringify({ "event": "auth", "session": a, "user": b }));
    st("afkStatus", 'Socket connected');
    if (!c || c === null || c === undefined) c = Date.now()
  };
  afkWS.onmessage = async function (event) {
    if (window.location.pathname == "/economy") {
      let data = JSON.parse(event.data);
      if (data.redirect) {
        window.location.href = '/'
      } else {
        st("sessionCoins", `${data.session ?? 0} coins`);
        st("totalCoins", `${data.total ?? 0} coins`);
        st("coinsIn", `${data.coinsIn ?? 0} s`);
        st("afkStatus", 'Earning');
        document.getElementById("coins").innerText = `${data.total} coins`
        setInterval(() => {
          st("afkDuration", `${((Date.now() - c) / 1000).toFixed(0)} s`);
        }, 1000);
      }
    } else {
      afkWS.close()
    }
  };
  afkWS.onclose = function () {
    st("afkStatus", 'Socket disconnected');
    if (window.location.pathname == "/economy") connectAFKWS(a, b)
  }
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function loadLeaderboard() {
  let a = await fetch('/api/economy/leaderboard')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    let d = b.data.leaderboard
    for (let i in d) {
      c.push(`
      <div class="flex flex-col items-center justify-center relative">
        <div class="relative w-36 rounded-xl">
          <img src="${d[i].avatar}" alt="user" class="w-full rounded-xl h-auto">
          <div class="absolute z-30 top-0 right-0 text-center items-center bg-zinc-900/50 flex justify-center -mt-4 -mr-4 text-gray-300 backdrop-blur-xl w-12 h-12 rounded-full">${pos(i)}</div>
        </div>
        <h1 class="text-gray-300 text-xl">${d[i].nickname}</h1>
        <span class="text-gray-400">${d[i].coins} coins</span>
      </div>`)
    }
    document.getElementById("coinsLeaderboard").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function pos(a) {
  a = parseInt(a)
  switch (a) {
    case 0:
      return '1st';
    case 1:
      return '2nd';
    case 2:
      return '3rd';
    case 3:
      return '4th';
    default:
      return '5th';
  }
}
function addValue(a, b) {
  let c = document.getElementById(`resourceInput${a}`)
  let d = 0
  if (b.startsWith("+")) {
    d = parseInt(c.value || 0) + parseInt(b.slice(1))
  } else {
    d = parseInt(c.value || 0) - parseInt(b.slice(1))
  }
  if (d < 0) {
    d = 0
  }
  c.value = d
};
async function buyResource(a) {
  let b = document.getElementById(`resourceInput${a}`).value
  let c = await fetch(`/api/market/buy/${a}/${b}`)
  let d = await c.json()
  if (d.success) {
    toastr.success(d.message, "Success!")
    document.getElementById("coins").innerText = `${d.data} coins`
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function countries() {
  let a = new Intl.DisplayNames(["en"], { type: 'region' });
  let b = []
  b.push(`<option value="" hidden class="capitalize">Country</option>`)
  for (let i = 65; i <= 90; ++i) {
    for (let j = 65; j <= 90; ++j) {
      let c = String.fromCharCode(i) + String.fromCharCode(j)
      let d = a.of(c)
      if (c !== d) {
        b.push(`<option value="${c}" class="capitalize">${d}</option>`)
      }
    }
  }
  document.getElementById("countriesList").innerHTML = b.join('')
  let c = await fetch('/api/payments/gateways')
  let d = await c.json()
  if (d.success == true) {
    let e = []
    d.data.forEach(i => {
      let f
      if (i.icon.type == "image") {
        f = `<img src="${i.icon.src}" alt="bill" class="w-6 h-6">`
      } else {
        f = i.icon.src
      }
      e.push(`<div id="paymentGateway${i.name}" onclick="selectGateway('${i.name}')" class="w-full rounded-xl p-2 px-4 cursor-pointer text-gray-400 hover:text-gray-200 hover:duration-300 transition-all hover:bg-zinc-900/20 backdrop-blur-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center space-x-2">
        ${f}
      <span>${i.display}</span>
  </div>`)
    });
    document.getElementById("paymentGateways").innerHTML = e.join('')
  }
}
let gatewayConfig = ""
function selectGateway(a) {
  gatewayConfig = a
  let d = document.getElementById("paymentGateways")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    i.classList.remove("text-emerald-400")
    i.classList.add("text-gray-400");
  }
  let b = document.getElementById(`paymentGateway${a}`);
  b.classList.add("border-emerald-800/80");
  b.classList.add("bg-emerald-900/20");
  b.classList.add("text-emerald-400");
}
async function checkout(a) {
  let b = {
    name: gv("Name"),
    address_0: gv("address_0"),
    address_1: gv("address_1"),
    city: gv("city"),
    state: gv("state"),
    zip: gv("zip"),
    country: gv("country"),
    gateway: gatewayConfig
  }
  if (a.price.type === "coins") b = {}
  let c = await fetch(`/api/payments/buy/products/coins/${a.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(b)
  });
  let d = await c.json()
  if (d.success == true) {
    if (a.price.type !== "coins") {
      window.location.href = d.data
    } else {
      render(`/account/invoices/${d.data.id}`)
    }
  } else {
    toastr.error(d.message, "Error!")
  }
}
function showTab(a) {
  let b = document.getElementById(`panel-${a}`)
  let c = document.getElementById(`panels`)
  for (let i of c.children) {
    i.classList.add("hidden")
  }
  b.classList.remove("hidden")
}
async function loadRequests() {
  let a = await fetch(`/api/requests`)
  let b = await a.json()
  if (b.success == true) {
    let c = {}
    let d = []
    b.data.all.forEach(i => {
      d.push(`<div class="w-full px-4 py-2 rounded-xl bg-zinc-900/50">
      <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
              <h1 class="text-zinc-300 text-lg">${i.message}</h1>
              <span class="text-zinc-400">From <span onclick="render('users/${i.user.id}')" class="text-cyan-400">${i.user.nickname}</span></span>
          </div>
          <div class="flex items-center space-x-4">
              <a href="#" onclick="rejectRequest(${i.id})" class="text-zinc-400">
                  Reject
              </a>
              <button onclick="acceptRequest(${i.id})" class="p-2 px-4 rounded-xl bg-zinc-900 text-zinc-300">
                  Accept
              </button>
          </div>
      </div>
  </div>`)
    });
    c["all"] = d
    d = []
    b.data.incoming.forEach(i => {
      d.push(`<div class="w-full px-4 py-2 rounded-xl bg-zinc-900/50">
      <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
              <h1 class="text-zinc-300 text-lg">${i.message}</h1>
              <span class="text-zinc-400">From <span onclick="render('users/${i.user.id}')" class="text-cyan-400">${i.user.nickname}</span></span>
          </div>
          <div class="flex items-center space-x-4">
              <a href="#" onclick="rejectRequest(${i.id})" class="text-zinc-400">
                  Reject
              </a>
              <button onclick="acceptRequest(${i.id})" class="p-2 px-4 rounded-xl bg-zinc-900 text-zinc-300">
                  Accept
              </button>
          </div>
      </div>
  </div>`)
    });
    c["incoming"] = d
    d = []
    b.data.sent.forEach(i => {
      d.push(`<div class="w-full px-4 py-2 rounded-xl bg-zinc-900/50">
      <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
              <h1 class="text-zinc-300 text-lg">${i.message}</h1>
              <span class="text-zinc-400">Sent at ${date(i.date)}</span>
          </div>
          <div class="flex items-center space-x-4">
              <button onclick="cancelRequest(${i.id})" class="p-2 px-4 rounded-xl bg-zinc-900 text-zinc-300">
                  Cancel
              </button>
          </div>
      </div>
  </div>`)
    });
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function rejectRequest(a) {
  let b = await fetch(`/api/requests/${a}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  if (b.success == true) {
    toastr.success(b.message, "Success!")
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function acceptRequest(a) {
  let b = await fetch(`/api/requests/${a}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });
  if (b.success == true) {
    toastr.success(b.message, "Success!")
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function cancelRequest(a) {
  let b = await fetch(`/api/requests/${a}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  if (b.success == true) {
    toastr.success(b.message, "Success!")
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function regenPassword() {
  let a = await fetch('/auth/password')
  let b = await a.json()
  if (b.success == true) {
    document.getElementById("passwordBox").classList.remove("hidden")
    document.getElementById("passwordBox").innerHTML = `Your password has been changed to: ${b.data}`
    toastr.success(b.message, "Success!")
  } else {
    toastr.error(b.message, "Error!")
  }
}
function dashboardpage() {
  const hoverBox = document.getElementById('hoverBox');
  const cursorBG = document.getElementById('cursorBG');
  hoverBox.addEventListener('mouseenter', () => {
    cursorBG.style.display = 'block';
  });
  hoverBox.addEventListener('mouseleave', () => {
    cursorBG.style.display = 'none';
  });
  hoverBox.addEventListener('mousemove', (event) => {
    const rect = hoverBox.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cursorBG.style.left = `${x - cursorBG.offsetWidth / 2}px`;
    cursorBG.style.top = `${y - cursorBG.offsetHeight / 2}px`;
  });
>>>>>>> 4473be3 (29-05)
=======
/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license MIT
 * 
 * https://x.holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * app.js - Frontend development file.
 *--------------------------------------------------------------------------
*/
const routes = [
  { "name": "dashboard", "href": false, "url": "dashboard", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>` },
  { "name": "create", "href": false, "url": "create", "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>` },
  { "name": "servers", "href": false, "url": "servers", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>` },
  { "name": "economy", "href": false, "url": "economy", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>` },
//  { "name": "tickets", "href": false, "url": "tickets", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>` },
//  { "name": "chat", "href": false, "url": "chat", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>` },
  { "name": "market", "href": false, "url": "market", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" /></svg>` },
  { "name": "account", "href": false, "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "admin", "href": true, "url": "/admin", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>` }
]
let cachedRoutes = {}
const userRoutes = [
  { "name": "notifications", "url": "notifications", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>` },
  { "name": "requests", "url": "requests", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" /></svg>` },
  { "name": "account", "url": "account", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const links = [
  { "name": "console", "href": false, "url": "", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>` },
  { "name": "files", "href": false, "url": "files", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>` },
  { "name": "plugins", "href": false, "url": "plugins", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>` },
  { "name": "mods", "href": false, "url": "mods", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>` },
//  { "name": "subdomains", "href": false, "url": "subdomains", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>` },
  { "name": "players", "href": false, "url": "players", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>` },
//  { "name": "databases", "href": false, "url": "databases", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>` },
//  { "name": "schedules", "href": false, "url": "schedules", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>` },
//  { "name": "backups", "href": false, "url": "backups", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>` },
//  { "name": "network", "href": false, "url": "network", "svg": ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>` },
//  { "name": "startup", "href": false, "url": "startup", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>` },
  { "name": "settings", "href": false, "url": "settings", "svg": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>` }
]
const error500 = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HolaClient: 500</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="/assets/default/app.css" rel="stylesheet">
</head>

<body class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
    <div class="bg-zinc-950 flex flex-col items-center justify-center h-screen">
        <h1
            class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
            500
        </h1>
        <span class="text-gray-200 text-3xl font-rajdhani">INTERNAL SERVER ERROR!</span>
        <span class="max-w-sm text-xl font-rajdhani text-center text-gray-300">An error has occured while processing your request, no data from the server has been received.</span>
        <button onclick="window.history.back()"
            class="mt-4 px-8 py-2 rounded-full text-lg text-white font-rajdhani hover:bg-zinc-900 hover:border-zinc-700 hover:duration-500 duration-500 bg-zinc-900/50 border border-zinc-800">Go
            Back</button>
    </div>
</body>`
function reload(a, b) {
  if (a && b) {
    document.getElementById(a).innerHTML = b
  }
}
async function getPage(page) {
  if (cachedRoutes[page]) {
    return cachedRoutes[page]
  } else {
    let c;
    if (page.startsWith('/')) {
      c = await fetch(page || "/");
    } else if (page === "") {
      c = await fetch("/");
    } else {
      c = await fetch("/" + (page || "/"));
    }
    return c.text();
  }
}
async function render(page = page || "/") {
  for (let a of routes) {
    if (a.url == page && a.href == true) {
      window.location.href = a.url;
      break;
    }
  }
  const b = document.getElementById('content');
  document.querySelector('main').insertAdjacentHTML('beforeend', `
  <div id="loadOverlay" class="bg-zinc-950/50 backdrop-blur-xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 min-h-screen h-full">
      <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
      <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      </h1>
  </div>`);
  let d = await getPage(page);
  let e = document.createElement('div');
  e.innerHTML = d;
  let f = e.querySelector('#content');
  b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  b.style.opacity = 0;
  b.style.transform = 'translateY(20px)';
  try {
    if (b && f) {
      b.innerHTML = ``;
      b.innerHTML = f.innerHTML;
      document.getElementById('loadOverlay').remove();
    } else {
      console.error(`Page ${page} not found"`, 404);
      //let g = await fetch(`obviously-a-404-page`);
      //let h = await g.text();
      b.innerHTML = "";
      b.innerHTML = b;
      document.getElementById('loadOverlay').remove();
    }
  } catch (i) {
    b.innerHTML = error500;
    document.getElementById('loadOverlay').remove();
  }
  const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
  const jj = document.getElementById(`nav-${extract(page)}`);
  const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
  const kk = document.getElementById(`nav-display-${extract(page)}`);
  for (let l of routes) {
    document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
    document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
    document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
  }
  for (let m of userRoutes) {
    let n = document.getElementById(`nav-${m.url}`);
    if (n) n.classList.remove("shadow", "text-white", "bg-zinc-800/90");
    if (document.getElementById(`nav-display-${m.url}`)) document.getElementById(`nav-display-${m.url}`).classList.add("hidden");
  }
  if (j) {
    j.classList.add("text-white", "shadow", "bg-zinc-800/90");
    k.classList.remove("hidden");
  } else if (jj) {
    jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
    kk.classList.remove("hidden");
  }

  setTimeout(() => {
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.opacity = 1;
    b.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`${page}`);
  updateLinks();
  cachePages()
}
function extract(a) {
  if (a.startsWith("/")) {
    const b = a.indexOf("/", 1);
    if (b !== -1) {
      return a.slice(1, b);
    }
    return a.slice(1);
  }
  const c = a.indexOf("/");
  if (c !== -1) {
    return a.slice(0, c);
  }
  return a;
}
function highlight() {
  let a = window.location.href.replace(window.location.origin, '');
  let b = a.startsWith("/") ? a.slice(1) : a;
  let g = document.getElementById(`nav-${b}`);
  let gg = document.getElementById(`nav-${extract(a)}`);
  let h = document.getElementById(`nav-display-${b}`);
  let hh = document.getElementById(`nav-display-${extract(a)}`);

  for (let i of routes) {
    document.getElementById(`nav-${i.url}`).classList.add("text-gray-300")
    document.getElementById(`nav-${i.url}`).classList.remove("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90")
  }
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  } else if (gg) {
    gg.classList.remove("text-gray-300");
    gg.classList.add("text-white", "shadow", "border-zinc-700/50", "backdrop-blur-xl", "bg-zinc-800/90");
  }
  const i = document.querySelectorAll("[id^='nav-display']");
  if (h) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    h.classList.remove("hidden");
  } else if (hh) {
    i.forEach(j => {
      j.classList.add("hidden");
    });
    hh.classList.remove("hidden")
  }
}
async function load() {
  const a = document.getElementById("sidebar");
  const b = document.createDocumentFragment();

  for (let c of routes) {
    const d = document.createElement("li");
    d.innerHTML = `
    <button onclick="render('${c.url}')" id="nav-${c.url}" aria-label="navlink"
        class="flex w-full items-center mx-auto cursor-pointer font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${c.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${c.svg}
            <span class="ml-2 text-lg capitalize">${c.name}</span>
        </div>
    </button>`;

    d.style.opacity = 0;
    d.style.transform = 'translateY(20px)';

    b.appendChild(d);
  }

  a.appendChild(b);

  setTimeout(() => {
    const c = document.querySelectorAll("#sidebar li");
    c.forEach((d, e) => {
      d.style.transition = `opacity 1s ease ${e * 0.1}s, transform 1s ease ${e * 0.1}s`;
      d.style.opacity = 1;
      d.style.transform = 'translateY(0)';
    });
  }, 100);

  highlight();
}
async function loadUserDropdown() {
  let a = document.getElementById("userDropdownDivider");
  let b = document.getElementById("userDropdownHolder");
  let c = document.getElementById("userDropdown");

  if (a.classList.contains("hidden") && b.classList.contains("opacity-0")) {
    a.classList.remove("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 1;
    const d = document.createDocumentFragment();

    for (let e of userRoutes) {
      const f = document.createElement("li");
      f.innerHTML = `
    <a onclick="render('${e.url}')" id="nav-${e.url}"
        class="flex items-center mx-auto font-medium text-gray-300 hover:text-gray-100 rounded-xl border-zinc-800 from-zinc-900 to-zinc-800/80 backdrop-blur-3xl hover:duration-300 duration-300 hover:bg-zinc-900/80">
        <div id="nav-display-${e.url}" class="w-1 hidden h-6 bottom-0 pl-0.5 rounded-xl bg-amber-300"></div>
        <div class="p-2 flex items-center">
            ${e.svg}
            <span class="ml-2 text-lg capitalize">${e.name}</span>
        </div>
    </a>`;

      f.style.opacity = 0;
      f.style.transform = 'translateY(20px)';

      d.appendChild(f);
    }

    c.appendChild(d);

    setTimeout(() => {
      const g = document.querySelectorAll("#userDropdown li");
      g.forEach((h, i) => {
        h.style.transition = `opacity 1s ease ${i * 0.1}s, transform 1s ease ${i * 0.1}s`;
        h.style.opacity = 1;
        h.style.transform = 'translateY(0)';
      });
    }, 100);
  } else {
    a.classList.add("hidden");
    b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    b.style.transform = 'translateY(0)';
    b.style.opacity = 0;
    c.innerHTML = '';
  }
}
window.onload = () => {
  load();
  highlight();
  updateLinks();
  setTimeout(() => { cachePages(); }, 2000);
}
async function cachePages() {
  for (let i of routes) {
    let c;
    if (i.url.startsWith('/')) {
      c = await fetch(i.url || "/");
    } else {
      c = await fetch("/" + (i.url || "/"));
    }
    cachedRoutes[i.url] = c.text()
  }
}
function changeURL(url) {
  if (url !== "") {
    window.history.pushState({}, '', '/' + url);
  } else {
    window.history.replaceState({}, '', '/');
  }
}
window.onpopstate = function () {
  render(window.location.href.replace(window.location.origin, ''));
  highlight();
  updateLinks()
}
function updateLinks() {
  const a = document.getElementById("serverLinks");
  if (a) {
    const b = document.createDocumentFragment();
    a.innerHTML = '';

    for (let c of links) {
      const d = document.createElement("li");
      d.innerHTML = `
        <a onclick="display('${c.url}')" id="page-${c.url}" class="text-gray-400 justify-center text-center hover:text-white hover:duration-300 duration-300 cursor-pointer flex flex-col items-center text-lg">
          <div class="flex items-center space-x-2">
              ${c.svg}
            <span class="capitalize">${c.name}</span>
          </div>
          <div id="page-display-${c.url}" class="w-10 hidden bg-sky-500 h-0.5 rounded-full"></div>
        </a>
      `;
      d.style.opacity = 0;
      d.style.transform = 'translateX(20px)';

      b.appendChild(d);
    }
    a.appendChild(b);
    setTimeout(() => {
      const e = document.querySelectorAll("#serverLinks li");
      e.forEach((f, g) => {
        f.style.transition = `opacity 1s ease ${g * 0.1}s, transform 1s ease ${g * 0.1}s`;
        f.style.opacity = 1;
        f.style.transform = 'translateY(0)';
      });
    }, 100);
  }
}
async function display(page = page || "/") {
  const a = document.getElementById('page');
  a.innerHTML = "";
  a.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
  a.style.opacity = 0;
  a.style.transform = 'translateY(20px)';
  let b;
  if (page.startsWith('/')) {
    b = await fetch(page || "/");
  } else if (page === "") {
    b = await fetch(`/servers/${get()}/`);
  } else {
    b = await fetch(`/servers/${get()}/` + (page || "/"));
  }
  let c = await b.text();
  let d = document.createElement('div');
  d.innerHTML = c;
  let e = d.querySelector('#page');
  try {
    if (a && e) {
      a.innerHTML = e.innerHTML;
    } else {
      console.error(`Page ${page} not found"`, 404);
      let f = await fetch(`../../errors/404.html`);
      let g = await f.text();
      a.innerHTML = g;
    }
  } catch (h) {
    a.innerHTML = error500;
  }
  const i = document.getElementById(`page-${page}`);
  const j = document.getElementById(`page-display-${page}`);
  for (let k of links) {
    document.getElementById(`page-${k.url}`).classList.remove("shadow", "text-white");
    document.getElementById(`page-display-${k.url}`).classList.add("hidden");
  }
  if (i) {
    const l = document.querySelectorAll("#serverLinks li");
    l.forEach(m => {
      m.classList.remove("text-white", "shadow");
    });

    i.classList.add("text-white", "shadow");
    j.classList.remove("hidden");
  }

  setTimeout(() => {
    a.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    a.style.opacity = 1;
    a.style.transform = 'translateY(0)';
  }, 100);
  changeURL(`servers/${get()}/${page}`);
}
function select(a) {
  document.cookie = `server=${a}; max-age=900000; path=/`;
}
function get() {
  const a = document.cookie.split(';').map(b => b.trim());
  const c = a.find(b => b.startsWith('server='));
  if (!c || !c.includes('=')) {
    render("/servers");
    changeURL("/servers");
    return null;
  }
  return c.split('=')[1];
}
function activate() {
  let a = window.location;
  let b = a.href.replace(a.origin, '').replace(`servers/${get()}/`, '').replace('/', '');
  let c = `page-${b}`;
  let d = `page-display-${b}`;
  const e = document.querySelectorAll("#serverLinks li");
  e.forEach(f => {
    f.classList.add("text-gray-300");
    f.classList.remove("text-white", "shadow");
  });

  const g = document.getElementById(c);
  const h = document.getElementById(d);
  if (g) {
    g.classList.remove("text-gray-300");
    g.classList.add("text-white", "shadow");
  }

  if (h) {
    const i = document.querySelectorAll("[id^='page-display']");
    i.forEach(j => {
      j.classList.add("hidden");
      j.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      j.style.opacity = 0;
      j.style.transform = 'translateY(100%)';
    });

    h.classList.remove("hidden");
    h.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    h.style.opacity = 0;
    h.style.transform = 'translateY(0)';
  }
}
async function mods() {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a mod?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "project_type": "Search for it!",
    "icon_url": "https://cdn.holaclientx.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  });
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsSearch(q) {
  let a = document.getElementById("modsHolder")
  let b = await fetch('/api/servers/mods?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="mod-${i.project_id}" onclick="modsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#modsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function modsInstall(a) {
  let d = document.getElementById(`mod-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/mods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], mod: a })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function pluginss() {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins')
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  c.data.push({
    "id": "Mvc3WDLr",
    "author": "CR072",
    "title": "Couldn't find a plugin?",
    "description": "Try searching it in the search bar.",
    "status": "approved",
    "downloads": 69,
    "followers": 7,
    "loaders": [
      "Search for it!"
    ],
    "icon_url": "https://cdn.holaclientx.tech/logo.png",
    "source_url": "https://github.com/HolaClient/X",
    "discord_url": "https://discord.gg/CvqRH9TrYK"
  })
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.03}s, transform 0.1s ease ${g * 0.02}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
});
async function pluginsSearch(q) {
  let a = document.getElementById("pluginsHolder")
  let b = await fetch('/api/servers/plugins?search=' + q)
  let c = await b.json()
  if (c.success == false) return toastr.error("Error", c.message)
  let d = document.createDocumentFragment();
  a.innerHTML = '';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.project_id}" class="bg-zinc-900/50 border flex flex-col items-center border-zinc-800/80 rounded-xl p-2 w-full">
    <div class="w-full relative flex items-center">
    <img src="${i.icon_url}" class="w-24 h-24 rounded-xl">
    <div class="flex flex-col w-full ml-2 space-y-1">
    <h1 class="text-gray-100 text-xl">${i.title}</h1>
    <div class="flex items-center w-full justify-between">
    <span class="text-gray-300 capitalize flex items-center">
    ${i.author}
    </span>
    <span class="text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    ${i.downloads = i.downloads && i.downloads > 1000 ? formatter.format(i.downloads) : i.downloads.toString()}
    </span>
    </div>
    <p class="text-gray-400 text-sm">${i.description.length > 47 ? `${i.description.substring(0, 47)}...` : i.description}</p>
    </div>
    </div>
    <div class="flex w-full justify-between mt-3 px-3">
    <button onclick="location.href='https://modrinth.com/project/${i.project_id}'" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
    </svg>
    </button>
    <button id="plugin-${i.project_id}" onclick="pluginsInstall('${i.project_id}')" class="bg-zinc-900/50 relative text-gray-300 border border-zinc-800/80 rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>  
    </button>
    </div>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  a.appendChild(d);
  setTimeout(() => {
    const h = document.querySelectorAll("#pluginsHolder div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.3s ease ${g * 0.02}s, transform 0.3s ease ${g * 0.01}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
}
async function pluginsInstall(a, n) {
  let d = document.getElementById(`plugin-${a}`)
  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`
  d.classList.add("animate-spin")
  let b = await fetch(`/api/servers/plugins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: (window.location.href).split('/servers/')[1]?.split('/')[0], plugin: a, name: n })
  })
  let c = await b.json()
  if (c.success) {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  `
    return toastr.success(c.message, "Success")
  } else {
    d.classList.remove("animate-spin")
    d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
  `
    return toastr.error(c.message, "Error")
  }
}
async function players() {
  let a = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}?type=ip`)
  let b = await fetch(`/api/servers/players/bans/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let j = await fetch(`/api/servers/players/ops/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let c = await a.json();
  let e = await b.json();
  let k = await k.json();
  if (c.success == false) return toastr.error("Error", c.message);
  if (e.success == false) return toastr.error("Error", e.message);
  if (k.success == false) return toastr.error("Error", k.message);
  let f = document.getElementById('playersBans');
  let l = document.getElementById('playersAdmins');
  let g = document.getElementById('playersBansIPs');
  let d = document.createDocumentFragment();
  let h = document.createDocumentFragment();
  let m = document.createDocumentFragment();
  f.innerHTML = '';
  g.innerHTML = '';
  l.innerHTML = '';
  if (c.data.length == 0) f.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (e.data.length == 0) g.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  if (j.data.length == 0) l.innerHTML = '<h1 class="text-gray-200 py-10 text-center">List is empty</h1>';
  for (let i of c.data) {
    const e = document.createElement("div")
    e.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    e.style.opacity = 0;
    e.style.transform = 'translateY(40px)';

    d.appendChild(e);
  }
  f.appendChild(d);
  for (let i of e.data) {
    const j = document.createElement("div")
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.ip}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    h.appendChild(j);
  }
  g.appendChild(h);
  for (let i of j.data) {
    const j = document.createElement("div");
    j.innerHTML = `
    <div id="${i.id}" class="bg-zinc-900/80 rounded-xl hover:bg-zinc-900 cursor-pointer duration-300 hover:duration-300 relative flex justify-between p-2 w-full">
    <h1 class="text-gray-200">${i.name}</h1>
    </div>
  `
    j.style.opacity = 0;
    j.style.transform = 'translateY(40px)';

    m.appendChild(j);
  }
  l.appendChild(m);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBans div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersBansIPs div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
  setTimeout(() => {
    const h = document.querySelectorAll("#playersAdmins div");
    h.forEach((f, g) => {
      f.style.transition = `opacity 0.5s ease ${g * 0.05}s, transform 0.5s ease ${g * 0.05}s`;
      f.style.opacity = 1;
      f.style.transform = 'translateY(0px)';
    });
  }, 100);
};
let ws
let msg = { last: {} }
async function messages() {
  ws = new WebSocket(`ws://${window.location.host}/ws.chat`);
  ws.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'history') {
      show(data.args, true);
    } else if (data.event == 'message') {
      show(data.args, false);
    }
  }
  ws.onclose = () => {
    messages()
  }
};
async function show(data, b) {
  const a = document.getElementById("messages");
  if (!a) return;
  if (b === true) {
    document.getElementById("messages").innerHTML = ""
  }
  for (let i of data) {
    if (msg.last.id > i.id) {
      msg.last = {}
    }
    if (!msg.last || !msg.last.user || msg.last.user !== i.user) {
      a.innerHTML += messageHeader(i);
    } else if (msg.last.user === i.user && parseInt((parseInt(i.time) - parseInt(msg.last?.time)) / 60000) < 15) {
      a.innerHTML += `
        <div id="message${i.id}" class="flex ml-14 flex-col bg-zinc-900 w-max rounded-xl">
          <div class="grow px-4 py-2">
            <p class="text-gray-100">${i.message}</p>
          </div>
        </div>`;
    } else {
      a.innerHTML += messageHeader(i);
    }
    msg["last"] = i;
  }
  a.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
  a.scrollTop = a.scrollHeight
  if (b === true) {
    if (a.scrollHeight - a.clientHeight <= a.scrollTop + 1) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);
    }
  }
}
function messageInput(event) {
  if (event.key === 'Enter' && event.shiftKey) {
    event.preventDefault();
    const textarea = event.target;
    const currentRows = textarea.rows;
    console.log(currentRows)
    textarea.rows = currentRows + 1;
    textarea.scrollTop = textarea.scrollHeight;
  }
}
function messageHeader(a) {
  return `
  <div class="flex relative space-x-2 items-start pt-4">
  <img class="object-cover top-0 aspect-square w-12 start-6 rounded-xl" src="${a.avatar}">
  <div class="flex flex-col">
      <div class="flex items-center space-x-2">
          <h1 class="text-gray-200 text-md">${a.username}</h1>
          <span class="text-gray-300 text-sm">${date(a.time)}</span>
      </div>
      <div class="flex flex-col bg-zinc-900 w-max rounded-xl">
          <div class="grow px-4 py-2">
              <p class="text-gray-100">${a.message}</p>
          </div>
      </div>
  </div>
</div>`
}
async function send() {
  const b = document.getElementById('msgInput');
  const c = b.value.trim();
  if (c !== '') {
    ws.send(JSON.stringify({ "event": "message", "args": [c] }));
    b.value = '';
  }
};
function date(a) {
  return new Date(a).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', weekday: 'short', month: 'short', day: 'numeric' });
}
async function ticket(id) {
  let aa = await fetch(`/api/tickets/${id}`);
  let bb = await aa.json();
  let cc = document.getElementById("messages")
  cc.innerHTML = ''
  showTicket(bb.data);
}
async function showTicket(data) {
  const container = document.getElementById("messages");
  if (!container) {
    return;
  }
  let lastUserId = null;
  for (let a of data) {
    let b = document.createElement("div");
    b.className = "flex relative space-x-2 items-start";
    let c = document.createElement("div");
    c.className = "flex flex-col";
    if (lastUserId !== a.id) {
      let d = document.createElement("img");
      d.className = "object-cover top-0 aspect-square mt-4 w-12 start-6 rounded-xl";
      d.src = a.avatar;
      b.appendChild(d);
      let e = idk(a.username, a.time);
      c.appendChild(e);
    }
    let f = document.createElement("div");
    f.className = "flex ml-14 mr-14 flex-col bg-zinc-900 max-w-fit rounded-xl";
    if (lastUserId !== a.id) {
      f.classList.remove("ml-14");
    }
    let g = document.createElement("div");
    g.className = "grow px-4 py-2";
    let h = document.createElement("p");
    h.className = "text-gray-100";
    h.textContent = a.message;
    g.appendChild(h);
    f.appendChild(g);
    c.appendChild(f);
    b.appendChild(c);
    container.appendChild(b);
    lastUserId = a.id;
  };
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  const j =
    container.lastElementChild.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;
  if (j) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
};
async function ticketSend(a) {
  if (a.key === 'Enter') {
    a.preventDefault();
    const b = document.getElementById('ticketInput');
    const c = b.value.trim();
    if (c !== '') {
      wss.send(c);
      b.value = '';
    }
  }
};
function wss() {
  const ws = new WebSocket(`ws://${window.location.host}/tickets/messages?id=${id}`);
  return ws
};
let consoleSocket;
async function consoleWS() {
  visibility("startBTN", "show")
  if (window.location.protocol == "https:") {
    consoleSocket = new WebSocket(`wss://${window.location.host}/ws.servers.console`);
  } else {
    consoleSocket = new WebSocket(`ws://${window.location.host}/ws.servers.console`);
  }
  let consoleDiv = document.getElementById("console");
  consoleSocket.onopen = function () {
    consoleSocket.send(JSON.stringify({ "event": "auth", "server": `${(window.location.href).split('/servers/')[1]?.split('/')[0]}` }));
  };
  consoleSocket.onmessage = async function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'console output') {
      let b = data.args[0]
      let c = consoleDiv.scrollHeight - consoleDiv.clientHeight <= consoleDiv.scrollTop + 1;
      if (b != ' ') { consoleDiv.innerHTML += `<p>${ANSI(b)}</p>`; }
      if (c) consoleDiv.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    } else if (data.event == 'stats') {
      let a = (JSON.parse(data.args[0]).state)
      if (a == "offline") {
        visibility("startBTN", "show")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "")
      } else if (a == "stopping") {
        visibility("startBTN", "")
        visibility("restartBTN", "")
        visibility("stopBTN", "")
        visibility("killBTN", "show")
      } else {
        visibility("startBTN", "")
        visibility("restartBTN", "show")
        visibility("stopBTN", "show")
        visibility("killBTN", "")
      }
      showStats(JSON.parse(data.args[0]));
    } else if (data.event == 'redirect') {
      window.location.href = '/servers'
    }
  };
  let a = await fetch(`/api/servers/details/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    setValue("RAMT", formatResourceMB(b.data.limits.memory) || "")
    setValue("DiskT", formatResourceMB(b.data.limits.disk) || "")
    setValue("CPUT", b.data.limits.cpu || "")
    setValue("Reneval", b.data.reneval || "")
    setValue("IP", `${b.data.relationships.allocations.data[0].attributes.ip_alias || b.data.relationships.allocations.data[0].attributes.ip}:${b.data.relationships.allocations.data[0].attributes.port}`)
  }
  consoleSocket.onclose = function () {
    consoleWS()
  }
}
async function power(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a == "stop") {
      visibility("startBTN", "")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "show")
      setTimeout(() => {
        visibility("killBTN", "")
        visibility("startBTN", "show")
      }, 2000);
    } else if (a == "kill") {
      visibility("startBTN", "show")
      visibility("restartBTN", "")
      visibility("stopBTN", "")
      visibility("killBTN", "")
    } else if (a == "start") {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    } else {
      visibility("startBTN", "")
      visibility("restartBTN", "show")
      visibility("stopBTN", "show")
      visibility("killBTN", "")
    };
    consoleSocket.send(JSON.stringify({ "event": "set state", "args": [a] }));
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function visibility(id, s) {
  let a = document.getElementById(id)
  if (s == "show") {
    a.classList.remove("hidden")
  } else if (!a.classList.contains("hidden")) {
    a.classList.add("hidden");
  } else {
    return
  }
}
function sendConsole(a) {
  if (consoleSocket && consoleSocket.readyState === WebSocket.OPEN) {
    if (a.key === 'Enter') {
      a.preventDefault();
      let b = document.getElementById("cmdInput")
      const c = b.value.trim();
      if (c !== '') {
        consoleSocket.send(JSON.stringify({ "event": "send command", "args": [b.value] }));
        b.value = '';
      }
    }
  } else {
    toastr.error("WebSocket is not open.");
  }
}
function ANSI(a) {
  let b = '';
  let c = '';
  const d = /\033\[(\d+)(;\d+)*m/g;
  let e = 0;
  let f;
  while ((f = d.exec(a)) !== null) {
    const g = getStyle(f[1]);
    c += a.substring(e, f.index);
    if (g !== b) {
      c += `<span class="${g}">`;
      b = g;
    }
    e = d.lastIndex;
  }
  c += a.substring(e);
  if (b !== '') { c += '</span>'; }
  return c;
}
function getStyle(a) {
  switch (a) {
    case '1':
      return 'font-bold';
    case '30':
      return 'text-black';
    case '31':
      return 'text-rose-400';
    case '32':
      return 'text-emerald-400';
    case '33':
      return 'text-amber-400';
    case '34':
      return 'text-blue-400';
    case '35':
      return 'text-pink-400';
    case '36':
      return 'text-cyan-400';
    case '37':
      return 'text-gray-100';
    case '0':
      return 'text-gray-300';
    default:
      return '';
  }
}
function showStats(a) {
  setValue("RAMU", formatResource(a.memory_bytes));
  setValue("DiskU", formatResource(a.disk_bytes));
  setValue("CPUU", a.cpu_absolute);
  setValue("NetI", formatResource(a.network.rx_bytes))
  setValue("NetO", formatResource(a.network.tx_bytes))
  if (!a.uptime == 0) {
    setValue("Uptime", formatUptime(a.uptime));
  } else {
    setValue("Uptime", "Offline");
    setValue("RAMU", "Offline");
    setValue("CPUU", "Offline");
    setValue("NetI", "Offline")
    setValue("NetO", "Offline")
  }
}
function setValue(e, v) {
  document.getElementById(`server${e}`).innerText = v
}
function formatUptime(a) {
  let b = a / 1000;
  let c = Math.floor(b / 3600);
  let d = Math.floor((b % 3600) / 60);
  let e = Math.floor(b % 60);
  return `${c}h ${d}m ${e}s`;
}
function formatResource(a) {
  const b = 1024;
  const c = b * 1024;
  const d = c * 1024;
  if (a < b) {
    return `${a} Bytes`;
  } else if (a < c) {
    return `${(a / b).toFixed(2)} KB`;
  } else if (a < d) {
    return `${(a / c).toFixed(2)} MB`;
  } else {
    return `${(a / d).toFixed(2)} GB`;
  }
}
function formatResourceMB(a) {
  const b = 1024;
  if (a >= b) {
    return `${a / b} GB`;
  } else {
    return `${(a).toFixed(2)} MB`;
  }
}
async function files() {
  let a = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`);
  let b = await a.json();
  let c = document.getElementById("filesHolder");
  c.innerHTML = ""
  let d = [];
  let e = b.data.data;
  for (let i in e) {
    d.push(`
          <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
              <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
                  ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
                  <span class="ml-3">${e[i].attributes.name}</span>
              </div>
              <div class="flex space-x-8 items-center relative">
                  <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
                  <span>${date(e[i].attributes.modified_at)}</span>
                  <span class="p-0.5" onclick="showMenu(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </span>
                  <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
                  <div class="py-2 text-white text-center">
                  ${e[i].attributes.name}
                  </div>
                  <div class="w-full bg-zinc-800/80 h-0.5"></div>
                  <ul class="text-sm text-gray-200">
                      <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                          <a>Delete</a>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
      `);
  }
  c.innerHTML += d.join('');
}
async function showDir(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('dir', cD);
  window.history.pushState({}, document.title, u.href);
  let r = await fetch(`/api/servers/files/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`);
  let d = await r.json();
  let c = document.getElementById("filesHolder");
  let m = document.getElementById("filesManager");
  let n = u.search
  m.innerHTML = `${n.replace('?dir=', '').replace(/%2F/g, '<span class="text-gray-400 mx-1">/</span>')}`;
  let e = d.data.data
  let f = []
  for (let i in e) {
    f.push(`
    <div class="rounded-xl w-full p-2 relative cursor-pointer flex justify-between hover:bg-zinc-900/50 hover:duration-300 duration-300 items-center text-gray-300">
    <div ${e[i].attributes.is_file ? `onclick="showFile('${e[i].attributes.name}')"` : `onclick="showDir('${e[i].attributes.name}')"`} class="flex items-center">
        ${e[i].attributes.is_file ? svg(e[i].attributes.name) : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>'}
        <span class="ml-3">${e[i].attributes.name}</span>
    </div>
    <div class="flex space-x-8 items-center relative">
        <span>${e[i].attributes.is_file ? formatResource(e[i].attributes.size) : ""}</span>
        <span>${date(e[i].attributes.modified_at)}</span>
        <span class="p-0.5" onclick="showMenu(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </span>
        <div id="menu${i}" class="z-10 opacity-0 absolute fileMenu rounded-xl shadow w-44 backdrop-blur-lg bg-zinc-950 border border-zinc-800/80">
        <div class="py-2 text-white text-center">
        ${e[i].attributes.name}
        </div>
        <div class="w-full bg-zinc-800/80 h-0.5"></div>
        <ul class="text-sm text-gray-200">
            <li onclick="deleteFile('${e[i].attributes.name}')" class="flex cursor-pointer space-x-2 hover:duration-300 duation-300 items-center px-4 py-2 hover:text-rose-500 hover:bg-rose-300/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                              
                <a>Delete</a>
            </li>
        </ul>
    </div>
    </div>
</div>`)
  }
  c.innerHTML = f.join('');
}
function showMenu(a) {
  event.stopPropagation();
  const menu = document.getElementById(`menu${a}`);
  const c = !menu.classList.contains("hidden");
  document.querySelectorAll('.fileMenu').forEach(function (menu) {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    menu.classList.add('hidden');
  });
  if (!c) {
    menu.classList.remove("hidden");
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      menu.style.opacity = 1;
      menu.style.transform = 'translateY(0px)';
    }, 10);
  } else {
    menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 10);
  }
}
document.addEventListener('click', function (event) {
  if (!event.target.closest('.fileMenu')) {
    document.querySelectorAll('.fileMenu').forEach(function (menu) {
      menu.classList.add('hidden');
    });
  }
});
function svg(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const extensionMap = {
    'jar': `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99929 3V16H3.49929V3C3.49929 2.33696 3.76268 1.70107 4.23152 1.23223C4.70036 0.763392 5.33625 0.5 5.99929 0.5H14.0422L14.5422 1H14.2493H5.99929C5.46886 1 4.96015 1.21071 4.58508 1.58579C4.21 1.96086 3.99929 2.46957 3.99929 3ZM14.7493 1.5V1.20711L19.7922 6.25H19.4993H16.4993C16.0352 6.25 15.59 6.06563 15.2619 5.73744C14.9337 5.40925 14.7493 4.96413 14.7493 4.5V1.5ZM19.9993 6.45711L20.4993 6.95711V16H19.9993V6.75V6.45711ZM2.75102 22.5926L2.75105 22.5925L2.74923 22.5877C2.74623 22.5796 2.74331 22.5716 2.74045 22.5635H2.90746C2.92743 22.6128 2.95024 22.661 2.97583 22.7079L2.9797 22.715L2.9838 22.722C3.09912 22.9181 3.26576 23.079 3.46577 23.1873C3.66222 23.2938 3.88354 23.3456 4.10668 23.3375C4.48351 23.3353 4.85378 23.2218 5.11252 22.9121C5.35078 22.627 5.43579 22.2643 5.43579 21.8925V18.275H5.62079V21.8625C5.62079 22.4334 5.46836 22.7877 5.23783 23.0105L5.23632 23.0119C4.99943 23.2428 4.64632 23.3875 4.10929 23.3875V23.3874L4.10084 23.3876C3.87194 23.3914 3.64423 23.3539 3.42869 23.2768C3.26851 23.2171 3.12363 23.1225 3.00461 22.9998C2.89239 22.8834 2.80598 22.7446 2.75102 22.5926ZM7.7606 22.0854L7.39771 23.2735H7.26299L8.44195 19.7603L8.00478 21.203L7.80912 21.8487L7.83293 21.8486L7.7606 22.0854ZM8.8909 18.4225L8.9404 18.275H9.60967L11.2796 23.2735H11.0839L10.721 22.0854L10.6478 21.8459L10.6797 21.8458L10.4843 21.2014L9.74928 18.7774L9.64166 18.4225H9.27079H9.21829H8.8909ZM12.2037 18.275H12.5073L13.7506 22.6196L13.8543 22.982H14.2313H14.2883H14.6664L14.7694 22.6181L15.9984 18.275H16.2446L14.5859 23.2735H13.8786L12.2037 18.275ZM17.7196 21.8487L17.7434 21.8486L17.6711 22.0854L17.3082 23.2735H17.1735L18.3525 19.7603L17.9153 21.203L17.7196 21.8487ZM18.8014 18.4225L18.8509 18.275H19.5202L21.1901 23.2735H20.9944L20.6315 22.0854L20.5583 21.8459L20.5902 21.8458L20.3948 21.2014L19.6598 18.7774L19.5522 18.4225H19.1813H19.1288H18.8014Z" stroke="#D9D9D9"/>
      </svg>`,
    'txt': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.2989 23.2366 18.663 23.5 18 23.5H15.5V23H18C18.5304 23 19.0391 22.7893 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM12.1295 18.768V18.275H12.819V18.768H12.3205V23.2735H12.1295V18.768ZM6.91859 20.4863L5.54924 18.275H5.76103L6.86464 20.1838L7.00903 20.4335H7.2975H7.35H7.64004L7.78403 20.1817L8.87454 18.275H9.01588L7.59237 20.5175L7.42304 20.7843L7.59127 21.0517L8.9888 23.2735H8.81642L7.68711 21.3935L7.54142 21.151H7.2585H7.206H6.92359L6.77779 21.3929L5.64409 23.2735H5.52805L6.91939 21.0115L7.08106 20.7486L6.91859 20.4863ZM2.201 18.275H2.392V18.768V23.2735H2.201V18.768V18.275Z" stroke="#D9D9D9"/>
    </svg>`,
    'yml': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3V16H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5H14.0429L14.5429 1H14.25H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3ZM14.75 1.5V1.20711L19.7929 6.25H19.5H16.5C16.0359 6.25 15.5908 6.06563 15.2626 5.73744C14.9344 5.40925 14.75 4.96413 14.75 4.5V1.5ZM20 6.45711L20.5 6.95711V21C20.5 21.663 20.2366 22.2989 19.7678 22.7678C19.4186 23.117 18.9767 23.3522 18.5 23.4495V22.9365C18.843 22.8479 19.1594 22.669 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V6.75V6.45711ZM6.0725 23.2735V18.275H6.45348L6.89635 19.2835H6.687H6.63H6.13V19.7835V23.2735H6.0725ZM10.564 18.275H10.9375V23.2735H10.865V19.782V19.282H10.365H10.308H10.1218L10.564 18.275ZM8.5275 22.169H8.71673L8.56213 22.522H8.44098L8.28532 22.169H8.49H8.5275ZM4.36723 18.275L2.76018 21.2323L2.6995 21.3439V21.471V23.2735H2.5085V21.4935V21.3671L2.44843 21.2559L0.838344 18.275H1.0058L2.14681 20.5437L2.2853 20.819H2.5935H2.6415H2.94938L3.08797 20.5441L4.23188 18.275H4.36723ZM13.6935 23.2625H15.739V23.2735H13.007V18.275H13.1935V22.7625V23.2625H13.6935Z" stroke="#D9D9D9"/>
    </svg>`,
    'png': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>`,
    'jpg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'wepb': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'jpeg': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>`,
    'json': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_73_315)">
<mask id="path-1-inside-1_73_315" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 6.75V16.5H19.4998V6.75H16.4998C15.9031 6.75 15.3308 6.51295 14.9089 6.09099C14.4869 5.66903 14.2498 5.09674 14.2498 4.5V1.5H5.99984C5.60202 1.5 5.22049 1.65804 4.93918 1.93934C4.65788 2.22064 4.49984 2.60218 4.49984 3V16.5H2.99984V3C2.99984 2.20435 3.31591 1.44129 3.87852 0.87868C4.44113 0.316071 5.20419 0 5.99984 0H14.2498L20.9998 6.75ZM6.22634 22.935C6.12769 22.7234 6.07114 22.4947 6.05984 22.2615H7.20584C7.22684 22.3786 7.27162 22.4901 7.33741 22.5891C7.4032 22.6882 7.4886 22.7727 7.58834 22.8375C7.69334 22.9105 7.81834 22.9675 7.96334 23.0085C8.10534 23.0495 8.26484 23.07 8.44184 23.07C8.68684 23.07 8.89334 23.035 9.06134 22.965C9.21427 22.9077 9.34719 22.8071 9.44384 22.6755C9.52966 22.5469 9.57367 22.395 9.56984 22.2405C9.57388 22.1467 9.55527 22.0533 9.51558 21.9681C9.4759 21.883 9.4163 21.8087 9.34184 21.7515C9.18984 21.6315 8.95834 21.535 8.64734 21.462L7.72034 21.2475C7.43444 21.1876 7.16097 21.079 6.91184 20.9265C6.69135 20.7916 6.50947 20.6019 6.38384 20.376C6.2582 20.1333 6.1948 19.8632 6.19934 19.59C6.19934 19.224 6.29434 18.9045 6.48434 18.6315C6.67634 18.3595 6.94034 18.1485 7.27634 17.9985C7.61334 17.8485 8.00184 17.774 8.44184 17.775C8.89784 17.775 9.28734 17.851 9.61034 18.003C9.93634 18.156 10.1863 18.361 10.3603 18.618C10.5403 18.873 10.6403 19.156 10.6603 19.467H9.53534C9.50966 19.3247 9.44766 19.1914 9.35534 19.08C9.25782 18.9592 9.1307 18.8657 8.98634 18.8085C8.81059 18.7358 8.62146 18.701 8.43134 18.7065C8.10734 18.7065 7.85134 18.7825 7.66334 18.9345C7.57497 19.0019 7.50377 19.0891 7.45554 19.1892C7.40732 19.2893 7.38343 19.3994 7.38584 19.5105C7.38584 19.6905 7.45784 19.8405 7.60184 19.9605C7.78183 20.0919 7.98885 20.1816 8.20784 20.223L9.13934 20.4375C9.46534 20.5125 9.74834 20.618 9.98834 20.754C10.2198 20.8804 10.4138 21.0657 10.5508 21.291C10.6858 21.513 10.7533 21.793 10.7533 22.131C10.7533 22.501 10.6593 22.829 10.4713 23.115C10.2727 23.4095 9.99141 23.6386 9.66284 23.7735C9.31184 23.9315 8.88284 24.0105 8.37584 24.0105C7.99484 24.0105 7.66234 23.9655 7.37834 23.8755C7.11706 23.7973 6.87353 23.6689 6.66134 23.4975C6.47718 23.3438 6.32874 23.1519 6.22634 22.935ZM1.57034 22.8855C1.48693 22.662 1.44524 22.4251 1.44734 22.1865H2.59334C2.59789 22.3284 2.63592 22.4671 2.70434 22.5915C2.77353 22.7092 2.87352 22.8057 2.99352 22.8707C3.11353 22.9357 3.249 22.9668 3.38534 22.9605C3.67034 22.9605 3.88134 22.8785 4.01834 22.7145C4.15534 22.5495 4.22384 22.3165 4.22384 22.0155V17.898H5.41034V21.9855C5.41034 22.6455 5.23184 23.148 4.87484 23.493C4.51984 23.838 4.02734 24.0105 3.39734 24.0105C3.10715 24.0154 2.81848 23.9676 2.54534 23.8695C2.31573 23.7815 2.10758 23.6455 1.93484 23.4705C1.77351 23.3033 1.6493 23.104 1.57034 22.8855ZM15.2068 20.508V21.291C15.2068 21.675 15.1483 21.9955 15.0313 22.2525C14.9319 22.4898 14.7636 22.692 14.5483 22.833C14.3352 22.9595 14.0912 23.0249 13.8433 23.022C13.5954 23.0249 13.3515 22.9595 13.1383 22.833C12.9248 22.6909 12.7578 22.489 12.6583 22.2525C12.5324 21.9481 12.4726 21.6203 12.4828 21.291V20.508C12.4828 20.122 12.5413 19.8015 12.6583 19.5465C12.7578 19.31 12.9248 19.1081 13.1383 18.966C13.3501 18.8356 13.5947 18.7685 13.8433 18.7725C14.1083 18.7725 14.3433 18.837 14.5483 18.966C14.7636 19.107 14.9319 19.3092 15.0313 19.5465C15.1483 19.8015 15.2068 20.122 15.2068 20.508ZM16.4113 21.2865V20.517C16.4113 19.952 16.3088 19.4655 16.1038 19.0575C15.9108 18.6605 15.6023 18.3311 15.2188 18.1125C14.8388 17.8925 14.3808 17.7825 13.8448 17.7825C13.3108 17.7825 12.8508 17.8925 12.4648 18.1125C12.0812 18.329 11.7729 18.6577 11.5813 19.0545C11.3763 19.4615 11.2738 19.949 11.2738 20.517V21.2865C11.2738 21.8485 11.3763 22.335 11.5813 22.746C11.7863 23.153 12.0808 23.466 12.4648 23.685C12.8508 23.902 13.3108 24.0105 13.8448 24.0105C14.3808 24.0105 14.8393 23.902 15.2203 23.685C15.6043 23.465 15.8988 23.152 16.1038 22.746C16.3078 22.336 16.4103 21.8495 16.4113 21.2865ZM18.3463 19.884V23.8965H17.2273V17.898H18.2203L20.8483 21.888H20.8963V17.898H22.0213V23.898H21.0373L18.3958 19.884H18.3463Z" stroke="#D9D9D9" stroke-width="2" mask="url(#path-1-inside-1_73_315)"/>
</g>
<defs>
<clipPath id="clip0_73_315">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`,
    'properties': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>`
  };
  return extensionMap[extension] || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0H14.25L21 6.75ZM16.5 6.75C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5Z" fill="#D9D9D9"/>
  </svg>`;
}
async function showFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  window.history.pushState({}, document.title, u.href);
  window.location.href = `/api/servers/files/edit/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`
}
async function deleteFile(dir) {
  let u = new URL(window.location.href);
  let cD = u.searchParams.get('dir') || '';
  if (dir === '..') {
    let p = cD.split('/');
    p.pop();
    cD = p.join('/');
  } else {
    cD = cD ? `${cD}/${dir}` : dir;
  }
  u.searchParams.set('file', cD);
  let f = await fetch(`/api/servers/files/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}${u.search}`)
  let g = await f.json()
  if (g.success == true) {
    toastr.success("Success", g.message)
    files()
  } else {
    toast.error("Error", g.message)
  }
}
async function pull() {
  let a = document.getElementById("uploadURLInput")
  toastr.info(a.value)
  let b = await fetch(`/api/servers/files/upload/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: a.value })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success");
    a.value = ''
    display('files')
  } else {
    toastr.error(c.message, "Error")
  }
}
async function deleteServer() {
  let a = await fetch(`/api/servers/delete/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`)
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    render('servers')
  } else (
    toastr.error(b.message, "Error")
  )
}
async function save() {
  let a = document.getElementById("Editor");
  let b = a.value;
  let url = window.location.href;
  let id = url.split('/servers/files/edit/')[1]?.split('/')[0];
  let c = await fetch(`/api/servers/files/edit/${id}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: b })
  });
  let d = await c.json();
  if (d.success == true) {
    toastr.success("Success", d.message);
  } else {
    toastr.error("Error", d.message);
  }
}
function toggle(a) {
  document.getElementById(`${a}Btn`).classList.toggle("rounded-xl")
  document.getElementById(`${a}Btn`).classList.toggle("rounded-t-xl")
  const b = document.getElementById(a);
  if (!document.getElementById(`${a}`).classList.contains("hidden")) {
    setTimeout(() => {
      b.style.opacity = '0';
      b.style.transform = 'translateY(0)';
      b.style.maxHeight = '';
      b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      setTimeout(() => {
        b.classList.toggle("hidden");
      }, 200);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>`
  } else {
    b.style.transform = 'translateY(-10%)';
    b.style.opacity = '0';
    b.style.height = '0%'
    setTimeout(() => {
      b.classList.toggle("hidden");
      setTimeout(() => {
        b.style.opacity = '1';
        b.style.transform = 'translateY(0)';
        b.style.maxHeight = '';
        b.style.transition = 'transform 0.3s ease, max-height 0.3s ease, opacity 0.3s ease';
      }, 100);
    }, 100);
    document.getElementById(`${a}SVG`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
  </svg>`
  }
}
function color(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  if (b <= 75) {
    return "bg-emerald-500";
  } else if (b <= 85) {
    return "bg-amber-500";
  } else if (b <= 95) {
    return "bg-rose-500";
  } else {
    return "bg-red-500";
  }
}
let srvCache = {}
let serverConfig = {}
let fees = { node: 0, egg: 0 }
async function serverCreate() {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let c = document.getElementById('nodesList')
    let d = []
    srvCache = b.data
    for (let i of b.data.nodes) {
      d.push(`
      <div id="node${i.id}" onclick="selectNode(${i.id})" class="w-full relative flex flex-col cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-start shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
        <span class="text-gray-300">${i.relationships.location.attributes.short}: ${i.name}</span>
        <div class="flex w-full space-x-2 items-baseline">
          <div class="progress mt-3 h-1.5 bg-zinc-800">
              <div class="is-active relative w-[${(i.allocated_resources.memory / i.memory) * 100}%] overflow-hidden rounded-full ${color((i.allocated_resources.memory / i.memory) * 100)}"></div>
          </div>
          <span class="text-gray-400">${(i.allocated_resources.memory / i.memory) * 100}%</span>
        </div>
        <div id="nodeMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>                                          
        </div>
      </div>
      `)
    }
    c.innerHTML = d.join("")
    let e = document.getElementById('eggsList')
    let f = []
    for (let i of b.data.eggs) {
      f.push(`
      <div id="egg${i.id}" onclick="selectEgg(${i.id})" class="w-full relative flex space-x-2 cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-center shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
      <img src="${i.deployments.icon}" class="w-auto h-8">
      <span class="text-gray-300">${i.deployments.name}</span>
        <div id="eggMark${i.id}" class="absolute opacity-0 duration-300 -top-3 -right-3 text-emerald-500 p-1 border border-emerald-800/80 bg-emerald-900/50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      </div>
      `)
    }
    e.innerHTML = f.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function selectNode(a) {
  let d = document.getElementById("nodesList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`nodeMark${i.id.replace("node", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`node${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`nodeMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["node"] = a;
    let c = srvCache.nodes.find(i => i.id == a);
    fees["node"] = c.deployments.fees;
  } else {
    serverConfig["node"] = null;
    fees["node"] = 0;
  }
  fee();
}
function selectEgg(a) {
  let d = document.getElementById("eggsList")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    document.getElementById(`eggMark${i.id.replace("egg", '')}`).classList.add("opacity-0");
  }
  let b = document.getElementById(`egg${a}`);
  b.classList.toggle("border-zinc-800/80");
  b.classList.toggle("border-emerald-800/80");
  b.classList.toggle("bg-emerald-900/20");
  b.classList.toggle("hover:bg-zinc-900");
  document.getElementById(`eggMark${a}`).classList.toggle("opacity-0");
  if (!b.classList.contains("border-zinc-800/80")) {
    serverConfig["egg"] = a;
    let c = srvCache.eggs.find(i => i.id == a);
    fees["egg"] = c.deployments.fees;
  } else {
    serverConfig["egg"] = null;
    fees["egg"] = 0;
  }
  fee();
}
function fee() {
  let a = fees.egg + fees.node
  let b = document.getElementById("srvFees")
  let c = parseInt(b.innerText)
  let d = document.getElementById("srvAlert")
  if (c == 0 && a == 0) {
    d.innerText = ``;
  } else if (c == 0 && a !== 0) {
    d.innerText = `You'll have to pay ${a} coins for the node & software.`;
  } else {
    d.innerText = `You'll have to pay ${a} coins for the node & software, ${c} coins for deploying a server.`;
  }
}
function gv(a) {
  return document.getElementById(a).value
}
async function deploy() {
  let a = await fetch('/api/servers/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: gv("srvName"),
      resources: { memory: gv("srvMemory"), disk: gv("srvStorage"), cpu: gv("srvCPU"), databases: gv("srvDatabases"), allocations: gv("srvAllocations"), backups: gv("srvBackups") },
      environment: serverConfig
    })
  });
  let b = await a.json()
  if (b.success == true) {
    toastr.success(b.message, "Success!")
    serverConfig = {}
    srvCache = {}
    render('create')
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function modifyServer() {
  let a = ["Memory", "Disk", "CPU", "Allocations", "Backups", "Databases"]
  let b = {}
  a.forEach(i => { b[i.toLowerCase()] = parseInt(document.getElementById(`srvModify${i}`).value) });
  let c = await fetch(`/api/servers/modify/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resources: b
    })
  });
  let d = await c.json()
  if (d.success == true) {
    toastr.success(d.message, "Success!")
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function serverModify(node) {
  let a = await fetch('/api/servers/create')
  let b = await a.json()
  if (b.success == true) {
    let d = []
    let e = []
    for (let i of b.data.nodes) {
      if (parseInt(node) !== parseInt(i.id)) {
        d.push(`<option value="${i.id}">${i.name} - ${(i.allocated_resources.memory / i.memory) * 100}% full</option>`)
      }
    }
    for (let i of b.data.eggs) {
      e.push(`<option value="${i.id}">${i.name}</option>`)
    }
    document.getElementById('nodesList').innerHTML = d.join('')
    document.getElementById('eggsList').innerHTML = e.join('')
  }
}
async function changeNode() {
  let a = document.getElementById("nodesList").value
  let b = await fetch(`/api/servers/transfer/${(window.location.href).split('/servers/')[1]?.split('/')[0]}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: a
    })
  });
  let c = await b.json()
  if (c.success == true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function connectAFKWS(a, b) {
  let afkWS
  let c;
  if (window.location.protocol == "https:") {
    afkWS = new WebSocket(`wss://${window.location.host}/ws.afk`);
  } else {
    afkWS = new WebSocket(`ws://${window.location.host}/ws.afk`);
  }
  st("afkStatus", 'Connecting...');
  if (window.location.pathname !== "/economy") afkWS.close()
  afkWS.onopen = function () {
    afkWS.send(JSON.stringify({ "event": "auth", "session": a, "user": b }));
    st("afkStatus", 'Socket connected');
    if (!c || c === null || c === undefined) c = Date.now()
  };
  afkWS.onmessage = async function (event) {
    if (window.location.pathname == "/economy") {
      let data = JSON.parse(event.data);
      if (data.redirect) {
        window.location.href = '/'
      } else {
        st("sessionCoins", `${data.session ?? 0} coins`);
        st("totalCoins", `${data.total ?? 0} coins`);
        st("coinsIn", `${data.coinsIn ?? 0} s`);
        st("afkStatus", 'Earning');
        document.getElementById("coins").innerText = `${data.total} coins`
        setInterval(() => {
          st("afkDuration", `${((Date.now() - c) / 1000).toFixed(0)} s`);
        }, 1000);
      }
    } else {
      afkWS.close()
    }
  };
  afkWS.onclose = function () {
    st("afkStatus", 'Socket disconnected');
    if (window.location.pathname == "/economy") connectAFKWS(a, b)
  }
}
function st(a, b) {
  return document.getElementById(a).innerText = b
}
async function loadLeaderboard() {
  let a = await fetch('/api/economy/leaderboard')
  let b = await a.json()
  if (b.success == true) {
    let c = []
    let d = b.data.leaderboard
    for (let i in d) {
      c.push(`
      <div class="flex flex-col items-center justify-center relative">
        <div class="relative w-36 rounded-xl">
          <img src="${d[i].avatar}" alt="user" class="w-full rounded-xl h-auto">
          <div class="absolute z-30 top-0 right-0 text-center items-center bg-zinc-900/50 flex justify-center -mt-4 -mr-4 text-gray-300 backdrop-blur-xl w-12 h-12 rounded-full">${pos(i)}</div>
        </div>
        <h1 class="text-gray-300 text-xl">${d[i].nickname}</h1>
        <span class="text-gray-400">${d[i].coins} coins</span>
      </div>`)
    }
    document.getElementById("coinsLeaderboard").innerHTML = c.join('')
  } else {
    toastr.error(b.message, "Error!")
  }
}
function pos(a) {
  a = parseInt(a)
  switch (a) {
    case 0:
      return '1st';
    case 1:
      return '2nd';
    case 2:
      return '3rd';
    case 3:
      return '4th';
    default:
      return '5th';
  }
}
function addValue(a, b) {
  let c = document.getElementById(`resourceInput${a}`)
  let d = 0
  if (b.startsWith("+")) {
    d = parseInt(c.value || 0) + parseInt(b.slice(1))
  } else {
    d = parseInt(c.value || 0) - parseInt(b.slice(1))
  }
  if (d < 0) {
    d = 0
  }
  c.value = d
};
async function buyResource(a) {
  let b = document.getElementById(`resourceInput${a}`).value
  let c = await fetch(`/api/market/buy/${a}/${b}`)
  let d = await c.json()
  if (d.success) {
    toastr.success(d.message, "Success!")
    document.getElementById("coins").innerText = `${d.data} coins`
  } else {
    toastr.error(d.message, "Error!")
  }
}
async function countries() {
  let a = new Intl.DisplayNames(["en"], { type: 'region' });
  let b = []
  b.push(`<option value="" hidden class="capitalize">Country</option>`)
  for (let i = 65; i <= 90; ++i) {
    for (let j = 65; j <= 90; ++j) {
      let c = String.fromCharCode(i) + String.fromCharCode(j)
      let d = a.of(c)
      if (c !== d) {
        b.push(`<option value="${c}" class="capitalize">${d}</option>`)
      }
    }
  }
  document.getElementById("countriesList").innerHTML = b.join('')
  let c = await fetch('/api/payments/gateways')
  let d = await c.json()
  if (d.success == true) {
    let e = []
    d.data.forEach(i => {
      let f
      if (i.icon.type == "image") {
        f = `<img src="${i.icon.src}" alt="bill" class="w-6 h-6">`
      } else {
        f = i.icon.src
      }
      e.push(`<div id="paymentGateway${i.name}" onclick="selectGateway('${i.name}')" class="w-full rounded-xl p-2 px-4 cursor-pointer text-gray-400 hover:text-gray-200 hover:duration-300 transition-all hover:bg-zinc-900/20 backdrop-blur-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center space-x-2">
        ${f}
      <span>${i.display}</span>
  </div>`)
    });
    document.getElementById("paymentGateways").innerHTML = e.join('')
  }
}
let gatewayConfig = ""
function selectGateway(a) {
  gatewayConfig = a
  let d = document.getElementById("paymentGateways")
  for (let i of d.children) {
    i.classList.add("border-zinc-800/80");
    i.classList.remove("border-emerald-800/80");
    i.classList.remove("bg-emerald-900/20");
    i.classList.add("hover:bg-zinc-900");
    i.classList.remove("text-emerald-400")
    i.classList.add("text-gray-400");
  }
  let b = document.getElementById(`paymentGateway${a}`);
  b.classList.add("border-emerald-800/80");
  b.classList.add("bg-emerald-900/20");
  b.classList.add("text-emerald-400");
}
async function checkout(a) {
  let b = {
    name: gv("Name"),
    address_0: gv("address_0"),
    address_1: gv("address_1"),
    city: gv("city"),
    state: gv("state"),
    zip: gv("zip"),
    country: gv("country"),
    gateway: gatewayConfig
  }
  if (a.price.type === "coins") b = {}
  let c = await fetch(`/api/payments/buy/products/coins/${a.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(b)
  });
  let d = await c.json()
  if (d.success == true) {
    if (a.price.type !== "coins") {
      window.location.href = d.data
    } else {
      render(`/account/invoices/${d.data.id}`)
    }
  } else {
    toastr.error(d.message, "Error!")
  }
}
function showTab(a) {
  let b = document.getElementById(`panel-${a}`)
  let c = document.getElementById(`panels`)
  for (let i of c.children) {
    i.classList.add("hidden")
  }
  b.classList.remove("hidden")
}
async function loadRequests() {
  let a = await fetch(`/api/requests`)
  let b = await a.json()
  if (b.success == true) {
    let c = {}
    let d = []
    if (Object.values(b.data.incoming).length !== 0) {
    Object.values(b.data.incoming).forEach(i => {
      d.push(`<div class="w-full px-4 py-2 rounded-xl bg-zinc-900/50">
      <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
              <h1 class="text-zinc-300 text-lg">${i.message}</h1>
              <span class="text-zinc-400">From <span onclick="render('users/${i.from}')" class="text-cyan-400">${i.username}</span></span>
          </div>
          <div class="flex items-center space-x-4">
              <a href="#" onclick="rejectRequest('${i.id}')" class="text-zinc-400">
                  Reject
              </a>
              <button onclick="acceptRequest('${i.id}')" class="p-2 px-4 rounded-xl bg-zinc-900 text-zinc-300">
                  Accept
              </button>
          </div>
      </div>
  </div>`)
    });
    c["incoming"] = d
    document.getElementById("panel-incoming").innerHTML = d.join("")
  } else {
    document.getElementById("panel-incoming").innerHTML = `<div class="w-full mt-16 text-center text-zinc-300">No new incoming requests.</div>`
  }
    d = []
    if (Object.values(b.data.sent).length !== 0) {
    Object.values(b.data.sent).forEach(i => {
      d.push(`<div class="w-full px-4 py-2 rounded-xl bg-zinc-900/50">
      <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
              <h1 class="text-zinc-300 text-lg">${i.message}</h1>
              <span class="text-zinc-400">Sent at ${date(i.date)}</span>
          </div>
          <div class="flex items-center space-x-4">
              <button onclick="cancelRequest('${i.id}')" class="p-2 px-4 rounded-xl bg-zinc-900 text-zinc-300">
                  Cancel
              </button>
          </div>
      </div>
  </div>`)
    });
    document.getElementById("panel-sent").innerHTML = d.join("")
  } else {
    document.getElementById("panel-sent").innerHTML = `<div class="w-full mt-16 text-center text-zinc-300">You don't have any pending sent requests.</div>`
  }
  d = []
    if (Object.values(b.data.rejected).length !== 0) {
    Object.values(b.data.rejected).forEach(i => {
      d.push(`<div class="w-full px-4 py-2 rounded-xl bg-zinc-900/50">
      <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
              <h1 class="text-zinc-300 text-lg">${i.message}</h1>
              <span class="text-zinc-400">Sent at ${date(i.date)}, Rejected at ${date(i.rejected)}</span>
          </div>
      </div>
  </div>`)
    });
    document.getElementById("panel-rejected").innerHTML = d.join("")
  } else {
    document.getElementById("panel-rejected").innerHTML = `<div class="w-full mt-16 text-center text-zinc-300">You don't have any pending sent requests.</div>`
  }
  } else {
    toastr.error(b.message, "Error!")
  }
}
async function rejectRequest(a) {
  let b = await fetch(`/api/requests/${a}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  let c = await b.json()
  if (c.success == true) {
    loadRequests()
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function acceptRequest(a) {
  let b = await fetch(`/api/requests/${a}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    }
  });
  let c = await b.json()
  if (c.success == true) {
    loadRequests()
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function cancelRequest(a) {
  let b = await fetch(`/api/requests/${a}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  let c = await b.json()
  if (c.success == true) {
    loadRequests()
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function regenPassword() {
  let a = await fetch('/auth/password')
  let b = await a.json()
  if (b.success == true) {
    document.getElementById("passwordBox").classList.remove("hidden")
    document.getElementById("passwordBox").innerHTML = `Your password has been changed to: ${b.data}`
    toastr.success(b.message, "Success!")
  } else {
    toastr.error(b.message, "Error!")
  }
}
function dashboardpage() {
  const hoverBox = document.getElementById('hoverBox');
  const cursorBG = document.getElementById('cursorBG');
  hoverBox.addEventListener('mouseenter', () => {
    cursorBG.style.display = 'block';
  });
  hoverBox.addEventListener('mouseleave', () => {
    cursorBG.style.display = 'none';
  });
  hoverBox.addEventListener('mousemove', (event) => {
    const rect = hoverBox.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cursorBG.style.left = `${x - cursorBG.offsetWidth / 2}px`;
    cursorBG.style.top = `${y - cursorBG.offsetHeight / 2}px`;
  });
}
async function getTransferUsers() {
  let a = await fetch('/api/servers/transfer')
  let b = await a.json()
  if (b.success === true) {
    let c = document.getElementById('usersList')
    let d = []
    for (let i of b.data) {
      d.push(`<option value="${i.id}">${i.nickname}, (${i.id})</option>`)
    }
    c.innerHTML = d.join('')
  } else {
    toastr.error(c.message, "Error!")
  }
}
async function transferOwnership(a) {
  let b = await fetch(`/api/servers/transfer/${a}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "type": "server",
      "user": parseInt(document.getElementById('usersList').value)
    })
  });
  let c = await b.json()
  if (c.success === true) {
    toastr.success(c.message, "Success!")
  } else {
    toastr.error(c.message, "Error!")
  }
>>>>>>> 43cd4a4 (04-06)
}