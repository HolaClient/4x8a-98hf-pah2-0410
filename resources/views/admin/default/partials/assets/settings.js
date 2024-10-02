// Assuming setCacheValue and getCacheValue are already defined
// setCacheValue('admin.settings', {}) and getCacheValue('admin.settings') will be used instead of settingsValues

function reloadSettings() {
    let a = document.getElementById("savealert");
    if (!a) return;
    if (!a.classList.contains("hidden")) a.classList.add("hidden");
    a.style.transition = "opacity 0.5s";
    a.style.opacity = "0";

    let b = document.querySelectorAll('[hcx-type="settings"]');
    let c = {};
    let settingsCache = getCacheValue('admin.settings') || {}; // Fetch settings from cache
    
    b.forEach(d => {
        let e = d.id;
        if (!e) return;

        let f = d.tagName.toLowerCase();
        let g = f === 'button';
        let h = f === 'select';

        c[e] = g ? d.value.toLowerCase() === 'on' :
            h ? d.options[d.selectedIndex].value : d.type === 'checkbox' ? d.checked : d.value;

        settingsCache[e] = c[e]; // Store in cache
        setCacheValue('admin.settings', settingsCache); // Update cache

        let j = () => toggle(d, e);
        if (g) d.addEventListener('click', j);
        else if (h) d.addEventListener('change', j);
        else d.addEventListener('input', () => {
            j();
            let k = d.getAttribute("hcx-preview");
            let l = k ? document.getElementById(k) : null;
            if (l) {
                l[d.getAttribute("hcx-preview-target-Type") === "image" ? "src" : "innerHTML"] = d.value;
            }
        });
    });

    function toggle(m, n) {
        let o = m.tagName.toLowerCase() === 'button' ? m.value.toLowerCase() === 'on' :
            m.tagName.toLowerCase() === 'select' ? m.options[m.selectedIndex].value : m.type === 'checkbox' ? m.checked : m.value;
        
        if (o !== c[n]) {
            a.classList.replace("hidden", "flex");
            a.style.opacity = "1";
        } else {
            a.style.opacity = "0";
            setTimeout(() => a.classList.replace("flex", "hidden"), 500);
        }
    }
}

async function saveSettings() {
    let settingsCache = getCacheValue('admin.settings') || {}; // Get cache
    Object.keys(settingsCache).forEach(a => {
        let b = document.getElementById(a);
        if (!b) return;

        settingsCache[a] = b.tagName.toLowerCase() === 'button' ? (b.value ? 'on' : 'off') :
            b.tagName.toLowerCase() === 'select' ? b.value : b.type === 'checkbox' ? b.checked : b.value;
    });

    setCacheValue('admin.settings', settingsCache); // Update the cache with new values
    sendMsg("apply", "admin.settings", settingsCache);
    revertSettings();
}

async function revertSettings() {
    let settingsCache = getCacheValue('admin.settings') || {}; // Fetch settings from cache

    document.querySelectorAll('[hcx-type="settings"]').forEach(a => {
        let b = a.id;
        if (!b) return;

        let c = a.tagName.toLowerCase() === 'button';
        let d = a.tagName.toLowerCase() === 'select';

        if (c) a.value = a.textContent = settingsCache[b] ? 'on' : 'off';
        else if (d && [...a.options].some(e => e.value === settingsCache[b])) a.value = settingsCache[b];
        else a[a.type === 'checkbox' ? 'checked' : 'value'] = settingsCache[b];

        a.dispatchEvent(new Event('change', { bubbles: true }));
        a.dispatchEvent(new Event('input', { bubbles: true }));
    });

    reloadSettings();
}


/* let settingsValues = {};

function reloadSettings() {
    let a = document.getElementById("savealert");
    if (!a) return;
    if (!a.classList.contains("hidden")) a.classList.add("hidden");
    a.style.transition = "opacity 0.5s";
    a.style.opacity = "0";
    let b = document.querySelectorAll('[hcx-type="settings"]');
    let c = {};
    b.forEach(d => {
        let e = d.id;
        if (!e) return;
        let f = d.tagName.toLowerCase();
        let g = f === 'button';
        let h = f === 'select';
        c[e] = g ? d.value.toLowerCase() === 'on' :
            h ? d.options[d.selectedIndex].value : d.type === 'checkbox' ? d.checked : d.value;

        settingsValues[e] = c[e];
        let j = () => toggle(d, e);
        if (g) d.addEventListener('click', j);
        else if (h) d.addEventListener('change', j);
        else d.addEventListener('input', () => {
            j();
            let k = d.getAttribute("hcx-preview");
            let l = k ? document.getElementById(k) : null;
            if (l) {
                l[d.getAttribute("hcx-preview-target-Type") === "image" ? "src" : "innerHTML"] = d.value;
            }
        });
    });
    function toggle(m, n) {
        let o = m.tagName.toLowerCase() === 'button' ? m.value.toLowerCase() === 'on' :
            m.tagName.toLowerCase() === 'select' ? m.options[m.selectedIndex].value : m.type === 'checkbox' ? m.checked : m.value;
        if (o !== c[n]) {
            a.classList.replace("hidden", "flex");
            a.style.opacity = "1";
        } else {
            a.style.opacity = "0";
            setTimeout(() => a.classList.replace("flex", "hidden"), 500);
        }
    }
}

async function saveSettings() {
    Object.keys(settingsValues).forEach(a => {
        let b = document.getElementById(a);
        if (!b) return;
        settingsValues[a] = b.tagName.toLowerCase() === 'button' ? (b.value ? 'on' : 'off') :
            b.tagName.toLowerCase() === 'select' ? b.value : b.type === 'checkbox' ? b.checked : b.value;
    });
    sendMsg("apply", "admin.settings", settingsValues);
    revertSettings();
}

async function revertSettings() {
    document.querySelectorAll('[hcx-type="settings"]').forEach(a => {
        let b = a.id;
        if (!b) return;
        let c = a.tagName.toLowerCase() === 'button';
        let d = a.tagName.toLowerCase() === 'select';
        if (c) a.value = a.textContent = settingsValues[b] ? 'on' : 'off';
        else if (d && [...a.options].some(e => e.value === settingsValues[b])) a.value = settingsValues[b];
        else a[a.type === 'checkbox' ? 'checked' : 'value'] = settingsValues[b];
        a.dispatchEvent(new Event('change', { bubbles: true }));
        a.dispatchEvent(new Event('input', { bubbles: true }));
    });
    reloadSettings();
} */