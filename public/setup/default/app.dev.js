function getCookie(a) {
    const b = `; ${document.cookie}`;
    const c = b.split(`; ${a}=`);
    if (c.length === 2) return c.pop().split(';').shift();
}
async function check() {
    const a = getCookie('token');
    if (a) {
        let b = await fetch('/api/setup', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: a })
        });
        const c = await b.json();
        if (c.success == true && window.location.pathname == "/setup") {
            document.getElementById("overlay").classList.add("hidden");
        } else if (c.success == true && window.location.pathname !== "/setup") {
            //no shit
        } else if (window.location.pathname !== "/setup") {
            window.location.href = '/setup';
        }
    } else if (window.location.pathname !== "/setup") {
        window.location.href = '/setup';
    }
}
check()
async function auth() {
    let a = document.getElementById('token').value;
    let b = await fetch('/api/setup', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: a })
    });
    let c = await b.json();
    if (c.success == true) {
        toastr.success(c.message, "Success!")
        const expDate = new Date();
        expDate.setTime(expDate.getTime() + 60 * 60 * 1000);
        document.cookie = `token=${a}; expires=${expDate.toUTCString()}; path=/`;
        document.getElementById("overlay").classList.add("hidden");
    } else {
        toastr.error(c.message, "Error!")
    }
};
function gv(a) {
    return document.getElementById(a).value
}
async function submit() {
    let a = gv("domain")
    let b = gv("app")
    let c = gv("acc")
    let d = gv("fees") ?? 0
    if (!a || !b || !c) return toastr.error("Missing values!");
    let e = await fetch('/api/setup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: getCookie('token'),
            domain: a,
            app: b,
            acc: c,
            fees: d
        })
    });
    let f = await e.json()
    if (f.success == true) {
        toastr.success("Success!")
        window.location.href = '/setup/finish'
    } else {
        toastr.error(f.message, "Error!")
    }
}
const routes = [
    "setup/pterodactyl",
    "setup/pterodactyl",
    "setup/pterodactyl",
    "setup/pterodactyl",
    "setup/pterodactyl",
    "setup/pterodactyl",
    "setup/pterodactyl",
    "setup/pterodactyl",
]
let cachedRoutes = {}
async function getPage(page) {
    if (cachedRoutes[page]) {
      return cachedRoutes[page]
    } else {
      let c;
      if (page.startsWith('/')) {
        c = await fetch(page || "/");
      } else if (page === "") {
        c = await fetch("/");
      } else {
        c = await fetch("/" + (page || "/"));
      }
      return c.text();
    }
  }
async function render(page = page || "/") {
    const b = document.querySelector("body");
    b.insertAdjacentHTML('beforeend', `
    <div id="loadOverlay" class="bg-zinc-950/50 backdrop-blur-xl absolute z-50 flex flex-col top-0 bottom-0 items-center justify-center w-full left-0 min-h-screen h-full">
        <h1 class="text-transparent text-4xl md:text-9xl font-bold font-karla bg-gradient-to-br from-white to-transparent bg-clip-text">
        <svg aria-hidden="true" class="w-8 h-8 animate-load fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        </h1>
    </div>`);
    let d = await getPage(page);
    let e = document.createElement('div');
    e.innerHTML = d;
    let f = e.querySelector('#content');
    b.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
    b.style.opacity = 0;
    b.style.transform = 'translateY(20px)';
    try {
      if (b && f) {
        b.innerHTML = ``;
        b.innerHTML = f.innerHTML;
        document.getElementById('loadOverlay').remove();
      } else {
        console.error(`Page ${page} not found"`, 404);
        //let g = await fetch(`obviously-a-404-page`);
        //let h = await g.text();
        b.innerHTML = "";
        b.innerHTML = b;
        document.getElementById('loadOverlay').remove();
      }
    } catch (i) {
      b.innerHTML = error500;
      document.getElementById('loadOverlay').remove();
    }
    const j = document.getElementById(`nav-${page.startsWith("/") ? page.slice(1) : page}`);
    const jj = document.getElementById(`nav-${extract(page)}`);
    const k = document.getElementById(`nav-display-${page.startsWith("/") ? page.slice(1) : page}`);
    const kk = document.getElementById(`nav-display-${extract(page)}`);
    for (let l of routes) {
      document.getElementById(`nav-${l.url}`).classList.remove("shadow", "text-white", "bg-zinc-800/90");
      document.getElementById(`nav-${l.url}`).classList.add("text-gray-300");
      document.getElementById(`nav-display-${l.url}`).classList.add("hidden");
    }
    for (let m of userRoutes) {
      let n = document.getElementById(`nav-${m.url}`);
      if (n) n.classList.remove("shadow", "text-white", "bg-zinc-800/90");
      if (document.getElementById(`nav-display-${m.url}`)) document.getElementById(`nav-display-${m.url}`).classList.add("hidden");
    }
    if (j) {
      j.classList.add("text-white", "shadow", "bg-zinc-800/90");
      k.classList.remove("hidden");
    } else if (jj) {
      jj.classList.add("text-white", "shadow", "bg-zinc-800/90");
      kk.classList.remove("hidden");
    }
  
    setTimeout(() => {
      b.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
      b.style.opacity = 1;
      b.style.transform = 'translateY(0)';
    }, 100);
    changeURL(`${page}`);
    cachePages()
  }
  async function cachePages() {
    for (let i of routes) {
      let c;
      if (i.url.startsWith('/')) {
        c = await fetch(i.url || "/");
      } else {
        c = await fetch("/" + (i.url || "/"));
      }
      cachedRoutes[i.url] = c.text()
    }
  }
  function changeURL(url) {
    if (url !== "") {
      window.history.pushState({}, '', '/' + url);
    } else {
      window.history.replaceState({}, '', '/');
    }
  }