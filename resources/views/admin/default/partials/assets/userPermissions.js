function loadUserPermissionsPage() {
    sendMsg("getData", "db.read", "permissions.users");
    let a = document.getElementById("hcx.permissions.users.id")
    showUserPermissions("8")
    a.addEventListener("input", (b) => {
        showUserPermissions(b.target.value)
    });
}
function showUserPermissions(b) {
    let c = getCacheValue("usersPermissions");
    let d = c.find(i => i.id === parseInt(b));
    if (d) {
        let e = []
        if (d.intents.length !== 0 ) {
            for (let i of d.intents) {
                e.push(`<div id="intents.${i}" class="w-max px-3 py-1 relative rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300">
                    ${i}
                        <button onclick="removeIntentFromUser(${b}, '${i}')" class="absolute cursor-pointer hover:bg-rose-900 -top-3 -right-3 rounded-full p-1 backdrop-blur-md bg-rose-900/50 border border-rose-700 text-rose-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                        </button>
                    </div>`)
            }
        } else {
            e.push(`<div id="noIntentsFound" class="w-max flex items-center justify-center px-3 py-1 relative rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300">
                <span>No intents found!</span></div>`)
        }
        e.push(`<div class="w-max px-3 py-1 relative rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300">
            <input id="userIntentsAdder" type="text" placeholder="Add intents" class="w-fit bg-transparent outline-none">
            </div>`)
        document.getElementById("hcx.permissions.users.intents").innerHTML = e.join("")
    } else {
        document.getElementById("hcx.permissions.users.intents").innerHTML = `<div class="w-max.px-2.py-2.rounded-full.bg-zinc-900/50.border.border-zinc-800.text-zinc-300">User not found!</div>`
    }
    let f = document.getElementById("userIntentsAdder")
    if (f) {
        f.addEventListener("keypress", (g) => {
            if (g.key === 'Enter') {
                addIntentToUser(b, f.value)
                f.value = '';
            }
        });
    }
}

function removeIntentFromUser(a, b) {
    sendMsg("modifyPermissions", "intents.remove", { user: a, intent: b });
    document.getElementById(`intents.${b}`).remove()
}

function addIntentToUser(a, b) {
    sendMsg("modifyPermissions", "intents.add", { user: a, intent: b });
    let c = document.getElementById(`noIntentsFound`);
    if (c) c.remove();

    let d = document.getElementById(`intents.${b}`);
    if (d) return;

    let e = document.getElementById("hcx.permissions.users.intents");
    let f = document.getElementById("userIntentsAdder");
    if (f) f.parentElement.remove();

    e.innerHTML += `<div id="intents.${b}" class="w-max px-3 py-1 relative rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300">
            ${b}
                <button onclick="removeIntentFromUser(${a}, '${b}')" class="absolute cursor-pointer hover:bg-rose-900 -top-3 -right-3 rounded-full p-1 backdrop-blur-md bg-rose-900/50 border border-rose-700 text-rose-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
            </div>`;

    e.innerHTML += `<div class="w-max px-3 py-1 relative rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300">
        <input id="userIntentsAdder" type="text" placeholder="Add intents" class="w-fit bg-transparent outline-none">
        </div>`;
}