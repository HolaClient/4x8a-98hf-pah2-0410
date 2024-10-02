const path = require("path")
const fs = require("fs")

function genVarName(a) {
    let charSet = 'abcdefghijklmnopqrstuvwxyz';
    let numSet = '0123456789';
    let b = 1;
    let c = charSet.length;
    let d = '';

    while (a >= c) {
        a -= c;
        b++;
        c = charSet.length * Math.pow(charSet.length + numSet.length, b - 1);
    }

    for (let i = 0; i < b; i++) {
        if (i === 0) {
            let e = a % charSet.length;
            d = charSet[e] + d;
            a = Math.floor(a / charSet.length);
        } else {
            let f = charSet + numSet;
            let e = a % f.length;
            d = f[e] + d;
            a = Math.floor(a / f.length);
        }
    }

    return d;
}
module.exports = function (a) {
    let b = path.resolve(a);
    let c = fs.readFileSync(b, 'utf-8');

    c = c.replace(/\/\*[\s\S]*?\*\//g, '');

    let d = /\.((?:\\.|[a-zA-Z0-9_-])+)(?=\s*[{:])/g;
    let e;
    let map = {};
    let f = 0;

    while ((e = d.exec(c)) !== null) {
        let g = e[1];
        if (!map[g]) {
            map[g] = genVarName(f++);
        }
        let j = g.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        let k = new RegExp(`\\.${j}(?=\\s*[{:])`, 'g');
        c = c.replace(k, `.${map[g]}`);
    }

    c = c.replace(/\s{2,}/g, ' ').replace(/\n\s*/g, '');

    let l = {};
    for (let i in map) {
        let m = i.replace(/\\/g, '');
        l[m] = map[i];
    }

    let n = `{ "classes": ${JSON.stringify(l, null, 4)} }`;

    fs.writeFileSync(path.join(path.dirname(b), path.basename(b, '.css') + '.min.css'), c, 'utf-8');
    fs.writeFileSync(path.join(path.dirname(b), path.basename(b, '.css') + '.map.json'), n, 'utf-8');

    return { out: c, keys: n };
};
module.exports.fucked = function (a) {
    let b = path.resolve(a);
    let c = fs.readFileSync(b, 'utf-8');

    c = c.replace(/\/\*[\s\S]*?\*\//g, '');

    let map = {};
    let d = 0;
    let e = c.split(/(?<=})\s*/);

    e = e.map(i => {
        let f = i.match(/\.[\w-\/]+(?=\s*\ {)/g);
        if (f) {
            f.forEach(j => {
                let g = j.slice(1);
                if (!map[g]) {
                    map[g] = genVarName(d++);
                }

                i = i.replace(new RegExp(`\\.${g}`, 'g'), `.${map[g]}`);
            });
        }
        return i;
    });

    let h = e.join(' ').replace(/\s{2,}/g, ' ').replace(/\n\s*/g, '');

    let m = {};
    for (let l in map) {
        m[l] = map[l];
    }

    let k = JSON.stringify({ classes: m }, null, 4);

    fs.writeFileSync(path.join(path.dirname(b), path.basename(b, '.css') + '.min.css'), h, 'utf-8');
    fs.writeFileSync(path.join(path.dirname(b), path.basename(b, '.css') + '.map.json'), k, 'utf-8');

    return { out: h, keys: k };
};