const env = require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');
const readline = require('readline');

async function b() {
    function c(d) {
        let e = [];
        const f = fs.readdirSync(d);
        for (let g in f) {
            let h = f[g];
            let i = path.join(d, h);
            var j = fs.statSync(i);

            if (j && j.isFile()) {
                const k = h.replace(/\.(js|ts|mjs)$/, '');
                e.push({ path: i, file: h, name: k });
            } else if (j.isDirectory()) {
                e = e.concat(c(i));
            }
        }
        return e;
    }
    const l = c('./app/database/adapters') || {};
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the number of tables to create: ', async (answer) => {
        const m = parseInt(answer, 10);
        if (isNaN(m) || m <= 0) {
            console.error('Invalid input. Please enter a positive number of tables.');
            rl.close();
            return;
        }
        for (let n of l) {
            try {
                let a;
                if (n.file.endsWith('.mjs')) {
                    a = import('../../app/database/adapters/' + n.file);
                } else {
                    a = require('../../app/database/adapters/' + n.file);
                }
                const o = performance.now();
                let p = Array.from({ length: m }, (_, q) => q);
                for (let r of p) {
                    await a.set("test", r, r)
                    await a.delete("test", r)
                }
                const s = performance.now();
                const t = s - o;
                console.log(`Total time taken to set ${p.length} table(s) for ${n.name}: ${t} milliseconds`);
            } catch (u) {
                console.error(`${n.name} ${u}`);
            }
        }
        rl.close();
        process.exit();
    });
}

b();