async function register() {
    let c = document.getElementById("submitButton")
    try {
        let a = await fetch('/api/auth/email/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            })
        });
        c.innerHTML = `<span class="w-full text-center flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-spin text-center"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg></span>`
        let b = await a.json()
        if (b.success == true) {
            window.location.href = '/onboarding'
        } else {
            toastr.error(b.message, "Error!")
            c.innerHTML = `Continue`
        }
    } catch (error) {
        toastr.error(error)
        c.innerHTML = `Continue`
    }
}