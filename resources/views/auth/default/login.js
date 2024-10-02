const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`));

const settings = {
    meta: {
        title: "Login",
        description: "Login",
        keywords: "Login",
    },
    permissions: {
        intent: "hcx.pages.auth",
        level: 0
    }
};
let nav = /*template*/`<nav class="w-full fixed top-0 p-8 flex z-50 justify-center items-center">
<div class="flex items-center justify-between w-full md:max-w-7xl">
<div class="flex items-center justify-left space-x-2">
    <img src="${hcx.config.appearance.logo.url}" alt="logo" class="w-8 h-8">
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
<section class="relative w-screen min-h-screen h-full flex flex-col items-center justify-center section">
<div class="relative overflow-hidden rounded-xl bg-zinc-900/80 backdrop-blur-md max-w-sm md:max-w-md lg:max-w-lg w-full h-max p-[1px]">
      <div class="dot blur-md -ml-8 -mt-8 animate-flow absolute p-20 rounded-full bg-sky-400/50"></div>
      <div class="relative max-w-sm md:max-w-md lg:max-w-lg text-center z-20 w-full h-full p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-900 to-zinc-950/90 outline-none rounded-xl">
        <h1 class="text-zinc-200 text-2xl text-center font-urbanist">Login to continue</h1>
        <div class="w-full mt-6 flex flex-col space-y-2">
            <div class="w-full text-left">
                <label class="text-gray-400 text-left text-sm">Email or username:
                    <input id="email" name="email" type="text" autocomplete="email username" class="w-full bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-lg outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">
                </label>
            </div>
            <div class="w-full text-left">
                <label class="text-gray-400 text-left text-sm">Password:
                    <input id="password" name="password" type="password" autocomplete="current-password" class="w-full bg-zinc-950/50 focus:bg-zinc-950/80 focus:duration-300 duration-300 backdrop-blur-xl rounded-lg outline-none border border-zinc-800/80 p-2 px-3 items-center text-left text-gray-300">
                </label>
            </div>
        </div>
            <div class="mt-6">
                <button onclick="login()" id="submitButton" class="w-full bg-zinc-950/50 hover:bg-zinc-950/80 hover:duration-300 duration-300 backdrop-blur-xl rounded-lg border border-zinc-800/80 p-1.5 items-center text-center text-gray-300">Continue</button>
            </div>
            <div class="my-4">
                <span class="text-zinc-400 text-xs font-bold hidden" id="Oauth2">OR CONTINUE WITH</span>
                <div class="w-full flex space-x-4 items-center justify-center mt-2" id="authGateways"></div>
            </div>
            <div class="w-full flex items-center justify-between text-zinc-400">
                <a href="#" class="hover:text-gray-300 cursor-pointer" onclick="render('register')">Register</a>
                <a href="#" class="hover:text-gray-300 cursor-pointer" onclick="render('forgot')">Forgot password</a>
            </div>
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
        name: "login",
        data: UI.assets.login,
        pathOnly: true,
        path: '/login'
    },
];
let toMinify = ["nav", "content", "bg", "page", "footer"];

module.exports = function (req) {
    return {
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
    }
}