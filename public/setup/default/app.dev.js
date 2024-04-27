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