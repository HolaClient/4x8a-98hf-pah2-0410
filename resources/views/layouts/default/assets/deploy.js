function loadDeployConfig() {
    let a = getCacheValue("deployConfig") || {};
    if (a) {
        for ([i, j] of Object.entries(a)) {
            let b = document.getElementById(i);
            if (b) {
                b.value = j;
            }
        }
    }
    let b = document.querySelectorAll("[hcx-type='deploy.config']");
    for (let i of b) {
        a[i.id] = i.value;
        setCacheValue("deployConfig", a);
        setServerConfigValue(i.id, i.value)
        i.addEventListener("input", function (e) {
            let c = e.target.value;
            a[e.target.id] = c;
            setServerConfigValue(e.target.id, c)
            setCacheValue("deployConfig", a);
        });
    }
}

function setServerConfigValue(a, b) {
    let c = document.getElementById("deploy.server.info")
    if (c.classList.contains("hidden")) c.classList.remove("hidden")
    let e = document.getElementById(`${a}.body`)
    if (e) {
        e.textContent = b
    } else {
        c.innerHTML += `<div class="flex items-center space-x-2" id="${a}"><h1 class="text-zinc-400 capitalize" id="${a}.title">${a}: </h1><h1 class="text-zinc-200" id="${a}.body">${b}</h1></div>`
    }
}

function deployServer() {
    let a = getCacheValue("deployConfig") || {};
    sendMsg("deployServer", "deployServer", a);
}

function deployServerCompleted(a) {
    alert(a.message)
    if (a.success === true) render("servers")
}