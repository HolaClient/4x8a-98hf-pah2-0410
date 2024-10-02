module.exports = function (req) {
    return /*template*/`
    <h1 class="text-zinc-300 w-full text-left">Edit permissions of an User with their ID:</h1>
    <input id="hcx.permissions.users.id" placeholder="User ID here" type="number" class="w-full mt-6 bg-zinc-950 text-zinc-300 focus:pl-4 focus:duration-500 duration-500 border border-zinc-800/80 outline-none rounded-xl p-2">
    <div class="flex flex-wrap gap-2 mt-4" id="hcx.permissions.users.intents">
    </div>
    `
}