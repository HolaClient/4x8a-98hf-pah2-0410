module.exports = function (req) {
    return /*template*/`
    <div class="w-full grid-cols-1 grid md:grid-cols-2 gap-4 text-zinc-300">
                              <div class="w-full pr-2 col-span-2">
                                <label class="block text-gray-200">Pterodactyl domain url</label>
                                <input hcx-type="settings" id="hcx.settings.panel.url" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${hcx?.config?.panel?.url || ""}" placeholder="https://pterodactyl.local">
                              </div>
                              <div class="w-full pr-2">
                                <label class="block text-gray-200">Application API Key</label>
                                <input hcx-type="settings" id="hcx.settings.panel.app" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${hcx?.config?.panel?.app || ""}" placeholder="ptla_xxx">
                              </div>
                              <div class="w-full pr-2">
                                <label class="block text-gray-200">Account API Key</label>
                                <input hcx-type="settings" id="hcx.settings.panel.acc" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${hcx?.config?.panel?.acc || ""}" placeholder="ptlc_xxx">
                              </div>
                            </div>
    `
}