const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`));

const settings = {
    meta: {
        title: "Register",
        description: "Login",
        keywords: "Login",
    },
    permissions: {
        intent: "hcx.pages.auth.register",
        level: 0
    }
};
let nav = /*template*/`<nav class="w-full fixed top-0 p-8 flex z-50 justify-center items-center">
<div class="flex items-center justify-between w-full md:max-w-7xl">
<div class="flex items-center justify-left space-x-2">
    <img src="${hcx.config.appearance.logo.url}" class="w-8 h-8">
    <h1 class="text-zinc-200 text-2xl text-center font-nunito">${hcx.config.appearance.name}</h1>
</div>
<div class="flex items-center w-max space-x-4">
    <a href="https://github.com/HolaClient" class="text-gray-400 hover:text-gray-200 hover:duration-300 duration-300 text-md">GitHub</a>
    <a href="https://discord.gg/CvqRH9TrYK" class="text-gray-400 hover:text-gray-200 hover:duration-300 duration-300 text-md">Discord</a>
</div></div>
</nav>`
let bg = /*template*/`<section id="bg">
<div class="absolute -z-20 md:h-screen md:w-screen bg-no-repeat bg-cover"
    style="background-image: url('https://wallpapercave.com/dwp1x/wp13639442.png');"></div>
<div class="absolute bg-gradient-to-b from-transparent to-zinc-950 w-screen h-screen"></div>
</section>`
let content = /*template*/`
<div id="content">
<section class="relative w-screen h-screen flex flex-col items-center justify-center section" id="section2">
            <div class="relative overflow-hidden rounded-3xl bg-zinc-900/80 backdrop-blur-md max-w-sm md:max-w-md lg:max-w-lg w-full h-max p-[1px]">
                  <div class="dot blur-md -ml-8 -mt-8 animate-flow absolute p-20 rounded-full bg-sky-400/50"></div>
                  <div class="relative max-w-sm md:max-w-md lg:max-w-lg text-center z-20 w-full h-full p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-900 to-zinc-950/90 outline-none rounded-3xl">
                    <h1 class="text-zinc-200 text-2xl text-center font-urbanist">Create an account</h1>
                    <div class="w-full mt-6 flex flex-col space-y-2">
                        <div class="w-full text-left">
                            <span class="text-gray-400 text-left text-sm pl-2">Username:</span>
                            <input id="username" type="text" autocomplete="username" class="w-full bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-3xl outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">
                        </div>
                        <div class="w-full text-left">
                            <span class="text-gray-400 text-left text-sm pl-2">Email:</span>
                            <input id="email" type="text" autocomplete="email" class="w-full bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-3xl outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">
                        </div>
                        <div class="w-full text-left">
                            <span class="text-gray-400 text-left text-sm pl-2">Password:</span>
                            <input id="password" type="password" autocomplete="new-password" class="w-full bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-3xl outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">
                        </div>
                    </div>
                        <div class="mt-6">
                            <button onclick="register()" id="submitButton" class="w-full bg-zinc-950/50 hover:bg-zinc-950/80 hover:duration-300 duration-300 backdrop-blur-xl rounded-3xl border border-zinc-800/80 p-2 items-center text-center text-gray-300">Continue</button>
                        </div>
                        <div class="mt-4"></div>
                        <span class="text-sm text-gray-400 cursor-pointer">Already have an account? <a class="text-gray-300" onclick="render('login')">Login now!</a></span>
                  </div>
              </div>
        </section></div>`;
let page = /*template*/ `
${UI.components.head(settings.meta)}
<body hcx-component-name="body" class="bg-zinc-950 w-screen h-full overflow-x-hidden">
</body>`;
let toPush = [
    {
        targetType: "element",
        target: "body",
        id: "bg",
        contentCompatible: false,
        data: bg,
    },
    {
        targetType: "element",
        target: "body",
        id: "nav",
        contentCompatible: false,
        data: nav,
    },
    {
        targetType: "element",
        target: "html",
        id: "content",
        contentCompatible: false,
        data: content,
    },
    {
        targetType: "element",
        target: "html",
        id: "footer",
        contentCompatible: false,
        data: UI.components.footer,
    }
];
let toReplace = [];
let assets = [
    {
        type: "js",
        name: "register",
        data: UI.assets.register,
    },
];
let toMinify = ["nav", "content", "bg", "page", "footer"];

module.exports = {
    settings,
    content,
    nav,
    bg,
    footer: UI.components.footer,
    page,
    toPush,
    toReplace,
    assets,
    toMinify,
};
