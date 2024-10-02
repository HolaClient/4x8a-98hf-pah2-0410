const UI = hcx.loadModule(path.resolve(__dirname, `./template.js`));

const settings = {
    meta: {
        title: "Blank",
        description: "404",
        keywords: "404, blank, test",
    },
    permissions: {
        intent: "hcx.pages.landing",
        level: 0
    }
};
let content = /*template*/ `${UI.errors.clientSide()}`;
let page = /*template*/ `
${UI.components.head(settings.meta)}
<body hcx-component-name="body" id="content" class="bg-zinc-950 w-screen h-full overflow-x-hidden">
${UI.errors.clientSide()}
</body>`;
let toPush = [
    {
        targetType: "element",
        target: "html",
        id: "content",
        data: content,
    }
];
let toReplace = [
    {
        targetType: "element",
        target: "head",
        id: "head",
        data: UI.components.head(settings.meta),
    },
];
let assets = [];
let toMinify = ["content"];

module.exports = function (req) {
    return {
        settings,
        content,
        page,
        toPush,
        toReplace,
        assets,
        toMinify,
    }
}