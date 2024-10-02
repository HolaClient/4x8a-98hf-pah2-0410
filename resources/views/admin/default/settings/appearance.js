module.exports = function (req) {
    return /*template*/`
    <div class="flex bg-zinc-900/50 text-gray-300 rounded-xl border border-zinc-800/80 flex-wrap content-start">
                              <h1 class="text-2xl text-gray-100 p-4">General Settings</h1>
                              <hr class="w-full border-b border-zinc-800/80">
                              <div class="grid grid-cols-1 md:grid-cols-3 w-full">
                                <div class="w-full mt-4 grid-cols-1 col-span-2 grid md:grid-cols-2 gap-4 px-4 py-2 pb-4">
                                  <div class="w-full pr-2">
                                    <label class="block text-gray-200">Application Name</label>
                                    <input hcx-type="settings" id="hcx.settings.appearance.name" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${hcx?.config?.appearance?.name}">
                                  </div>
                                  <div class="w-full pr-2">
                                    <label class="block text-gray-200">Application URL (Change it in .env)</label>
                                    <input hcx-type="settings" disabled class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${process?.env?.APP_URL}">
                                  </div>
                                  <div class="w-full pr-2">
                                    <label class="block text-gray-300">Application Logo</label>
                                    <input hcx-type="settings" hcx-preview="logo.preview" hcx-preview-target-type="image" id="hcx.settings.appearance.logo" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${hcx?.config?.appearance?.logo || ""}">
                                  </div>
                                  <div class="w-full pr-2">
                                    <label class="block text-gray-300">Application Language</label>
                                    <select hcx-type="settings" id="hcx.settings.appearance.language" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2">
                                      <option value="en">English</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="w-full flex items-center p-2">
                                  <span class="text-gray-300 rotate-[270deg] flex absolute">L O G O</span>
                                  <div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-transparent to-zinc-950 rounded-xl flex items-center justify-center w-full h-full">
                                    <img id="logo.preview" src="${hcx?.config?.appearance?.logo}" class="w-auto h-auto max-h-72">
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="mt-4 flex bg-zinc-900/50 text-gray-300 rounded-xl border border-zinc-800/80 flex-wrap content-start">
                              <h1 class="text-2xl text-gray-100 p-4">SEO Settings</h1>
                              <hr class="w-full border-b border-zinc-800/80">
                              <div class="grid grid-cols-1 md:grid-cols-3 w-full">
                                <div class="w-full mt-4 grid-cols-1 col-span-2 grid md:grid-cols-2 gap-4 px-4 py-2 pb-4">
                                  <div class="w-full pr-2">
                                    <div id="tt-help" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-zinc-900 rounded-xl shadow-sm opacity-0 tooltip">
                                      Global title applies to the pages where the default title is not defined.
                                  </div>
                                    <label class="text-gray-200 w-full justify-between flex items-center">Global title <button data-tooltip-target="tt-help" type="button" class="bg-zinc-300 rounded-full items-center justify-center flex text-zinc-800"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                    </svg>
                                    </button></label>
                                    <input hcx-type="settings" hcx-preview="seo.title" id="hcx.settings.appearance.seo.title" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${hcx?.config?.appearance?.seo?.title}">
                                  </div>
                                  <div class="w-full pr-2">
                                    <label class="block text-gray-200">Keywords</label>
                                    <input hcx-type="settings" id="hcx.settings.appearance.seo.keywords" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="${hcx?.config?.appearance?.seo?.keywords}">
                                  </div>
                                  <div class="w-full pr-2 col-span-2">
                                    <label class="block text-gray-200">Description</label>
                                    <textarea hcx-type="settings" hcx-preview="seo.description" id="hcx.settings.appearance.seo.description" rows="4" class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2">${hcx?.config?.appearance?.seo?.description}</textarea>
                                  </div>
                                </div>
                                <div class="w-full flex items-center p-2">
                                  <span class="text-gray-300 rotate-[270deg] -ml-6 flex absolute">P R E V I E W</span>
                                  <div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-transparent to-zinc-950 rounded-xl flex items-center justify-center w-full h-full">
                                    <div class="w-full mx-16 h-max rounded-xl bg-zinc-900 p-2 flex flex-col">
                                      <div class="flex space-x-2 items-center">
                                        <div class="bg-zinc-800 rounded-xl p-0.5 shadow-lg">
                                          <img src="${hcx?.config?.appearance?.logo}" class="w-10 h-10">
                                        </div>
                                        <div class="flex flex-col">
                                          <h1 class="text-gray-200">${hcx?.config?.appearance?.name}</h1>
                                          <span class="text-gray-400 text-xs">${(process?.env?.APP_URL).replace("http://", "", "https://", "")}</span>
                                        </div>
                                      </div>
                                      <h1 id="seo.title" class="text-sky-300 text-lg mt-1">${hcx?.config?.appearance?.seo?.title}</h1>
                                      <p id="seo.description" class="text-xs">${hcx?.config?.appearance?.seo?.description}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>`
}