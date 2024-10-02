module.exports = /*template*/`
<footer class="fixed bottom-0 mx-auto p-6 pb-4 lg:px-8 w-screen flex items-center justify-center">
            <div class="border-t border-white/10 pt-4 md:flex md:items-center md:justify-between max-w-7xl w-full">
                <div class="flex justify-center text-xs text-zinc-400 space-x-6 md:order-2">
                    <a class="duration-200 hover:text-zinc-300" href="https://github.com/HolaClient/X">
                        GitHub
                    </a>
                    <a class="duration-200 hover:text-zinc-300" href="https://discord.gg/CvqRH9TrYK">
                        Discord
                    </a>
                    <a class="duration-200 hover:text-zinc-300" href="/legal/privacy">
                        Privacy Policy
                    </a>
                    <a class="duration-200 hover:text-zinc-300" href="/legal/terms">
                        Terms of Service
                    </a>
                </div>
                <div class="mt-8 flex items-center gap-4 text-xs font-medium leading-5 text-zinc-400 max-md:flex-col md:order-1 md:mt-0">
                    <div class="order-2 md:order-1">
                        <p>© ${(new Date(Date.now())).getFullYear()} <a class="duration-200 hover:text-zinc-300" href="https://holaclient.dev/X">${hcx.config.appearance.name}</a> | Powered by <a class="duration-200 hover:text-zinc-300" href="https://holaclient.dev">HolaClient-X1</a></p>
                    </div>
                </div>
            </div>
</footer>`