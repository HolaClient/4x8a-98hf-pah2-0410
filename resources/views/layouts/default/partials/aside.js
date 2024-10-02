let routes = [
    {
        "display": "Home",
        "icon": `<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />`,
        "url": "home"
    },
    {
        "display": "Dashboard",
        "icon": `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />`,
        "url": "dashboard"
    },
    {
        "display": "Servers",
        "icon": `<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />`,
        "url": "servers"
    },
    {
        "display": "Account",
        "icon": `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />`,
        "url": "account"
    }
]
let buttons = []
let btnClass = `flex flex-col items-center w-full hover:text-zinc-300 text-zinc-400 rounded-lg text-xs p-2 hover:bg-zinc-950/40 hover:ring-2 ring-zinc-900/80 duration-300 transition-all cursor-pointer`
for (let i of routes) {
    buttons.push(`<button onclick="render('${i.url}')" class="${btnClass}"> ${genSVG(i.icon)} <span>${i.display}</span> </button>`)
}
function genSVG(a) {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">${a}</svg>`
}
module.exports = function (req) {
    return /*template*/`
    <aside id="aside" hcx-component-name="aside" class="w-screen z-30 fixed backdrop-blur-lg bg-zinc-900/50 border-t border-zinc-800 h-max md:border-r md:w-20 md:h-screen md:top-0 bottom-0 shadow-inner shadow-black">
        <div class="md:absolute w-full">
            <div class="w-full z-50 hidden md:flex px-3 py-2 my-[1px] items-center justify-center">
                <div class="w-full flex items-center justify-center space-x-2">
                    <img src="${hcx.config.appearance.logo.url}" alt="" class="h-10 w-auto">
                </div>
            </div>
            <div class="w-full bg-zinc-800 shadow shadow-black h-px hidden md:block"></div>
        </div>
        <div class="h-full flex items-center justify-center">
            <div class="w-full px-2 py-2 md:py-0 md:space-y-4 text-center flex md:flex-col items-center justify-center gap-2 md:gap-0">
                ${buttons.join('')}
                <button onclick="render('admin', 'page')" class="${btnClass}"> 
                    ${genSVG('<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />')} 
                <span>Admin</span> </button>
            </div>
        </div>
        <div class="w-full py-4 hidden md:block absolute pr-px bottom-0 border-t border-zinc-800 z-20">
            <div class="flex px-4 justify-between w-full items-center">
                <div class="w-full h-full flex items-center justify-center space-x-2">
                    <img src="${req?.session?.userinfo?.avatar}" alt="" class="size-8 rounded-full">
                </div>
            </div>
        </div>
    </aside>
`}