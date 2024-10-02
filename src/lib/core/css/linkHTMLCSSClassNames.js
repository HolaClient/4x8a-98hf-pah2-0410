const fs = require('fs');
const path = require('path');

module.exports = function (a, b) {
    b = path.resolve(b);
    let c = JSON.parse(fs.readFileSync(b, 'utf-8')).classes;

    let e = a.replace(/class="([^"]+)"/g, (f, g) => {
        let h = g.split(/\s+/);

        let j = h.map(cls => {
            return c[cls] || cls; 
        });

        return `class="${j.join(' ')}"`;
    });
    return e;
}