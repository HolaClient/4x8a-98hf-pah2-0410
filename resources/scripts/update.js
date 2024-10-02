const HCC_DOMAIN="https://console.holaclient.dev";
const APP_BUILD="X107102401"

async function cache() {
    try {
        let f = await fs.readdirSync(path.join("./storage/updates"));
        if (f.length !== 0) { f.forEach(i => { if (i.endsWith('.jar')) { update(i) } }) };
        let b = { "Content-Type": "application/json", "x-auth-type": "holaclient/secret" };
        b["Authorization"] = `Secret TemporaryHardCodedBullshitKey`
        b["App-Build"] = APP_BUILD
        let a = await fetch(`${HCC_DOMAIN}/api/X1/updates`, {
            method: "GET",
            headers: b
        });
        let d = await a.json();
        if (d.success == true) {
            d.data.forEach(i => download(i.identifier));
        }
    } catch (error) {
        console.error(error)
        return
    }
};
async function download(a) {
    try {
        let b = await fetch(`${HCC_DOMAIN}/storage/X1/updates/${a}.jar`, {
            method: "GET",
            headers: {"Authorization": `Secret TemporaryHardCodedBullshitKey`}
        });
        let c = await b.buffer()
        let d = path.join(`./storage/updates`);
        if (!fs.existsSync(d)) { fs.mkdirSync(d, { recursive: true }) }
        await fs.promises.writeFile(d + `/${a}.jar`, c);
        update(a)
    } catch (error) {
        console.error(error)
        return
    }
};
async function update(a) {
    try {
        a = a.replace('.jar', '');
        let b = path.resolve('./storage/updates');
        let c = `${b}/${a}.jar`;
        let d = `${b}/${a}`;
        let e = require('adm-zip');
        let f = new e(c);
        f.extractAllTo(d, true);
        let g = fs.readdirSync(d).filter(i => i !== 'manifest.json' && i !== "migrate.js");
        let l = fs.readdirSync(d).find(i => i == 'migrate.js');
        if (l) {
            let m = path.join(d, l);
            require(m)()
        }
        g.forEach(i => {
            let h = path.join(d, i);
            let j = path.join('./', i);
            fse.moveSync(h, j, { overwrite: true });
        });
        let h = await db.get("updates", "history") || []
        let j = require(`${d}/manifest.json`)
        h.push(j)
        await db.set("updates", "history", h);
        if (j.remove && j.remove.length !== 0) {
            j.remove.forEach(i => {fse.remove(path.resolve(__dirname, i))});
        }
        fse.remove(c);
        fse.remove(d);
    } catch (error) {
        console.error(error);
        return
    };
};
cache();