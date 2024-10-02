module.exports = function (req) {
    return /*template*/`<div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="flex bg-zinc-900/50 relative border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start">
    <div class="w-full h-full absolute flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
    <h1 class="text-zinc-300 w-full text-center">Discord: WIP</h1>
    </div>
      <h1 class="text-2xl p-4 text-gray-200">Discord Oauth2</h1>
      <hr class="w-full border-b border-zinc-800/80">
      <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 gap-4">
        <div class="w-full pr-2">
          <label class="block text-gray-300">Client ID</label>
          <input class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="110011001100">
        </div>
        <div class="w-full pr-2">
          <label class="block text-gray-300">Client Secret</label>
          <input class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="">
        </div>
        <div class="w-full pr-2">
          <label class="block text-gray-300">Redirect URI</label>
          <input class="w-full bg-zinc-950 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none mt-1 rounded-xl p-2" value="">
        </div>
        <div class="hidden">
          <div class="w-full pr-2">
            <label class="block text-gray-300">Enable driver</label>
            <div class="items-center py-1.5 flex">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable Discord authentication</span>
              </label>
            </div>
          </div>
        </div>
        <div class="hidden">
          <div class="w-full pr-2">
            <label class="block text-gray-300">Block ALT accounts</label>
            <div class="items-center py-1.5 flex">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">By Cookies</span>
              </label>
            </div>
          </div>
          <div class="w-full pr-2">
            <label class="block text-gray-300">&nbsp;</label>
            <div class="items-center py-1.5 flex">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">By IPv6</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex h-max bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start">
    <h1 class="text-2xl p-4 text-gray-200">General</h1>
    <hr class="w-full border-b border-zinc-800/80">
    <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 gap-4">
      <div class="flex">
        <div class="w-full pr-2">
          <label class="block text-gray-300">Allow authentication</label>
          <div class="items-center py-1.5 flex">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" hcx-type="settings" id="hcx.settings.authentication.enabled" value="" class="sr-only peer" checked disabled>
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable registrations/logins</span>
            </label>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-full pr-2">
          <label class="block text-gray-300">Block ALT accounts</label>
          <div class="items-center py-1.5 flex">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" hcx-type="settings" id="hcx.settings.authentication.blockAlt" value="" class="sr-only peer" checked disabled>
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable Anti-Alt</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>`
}