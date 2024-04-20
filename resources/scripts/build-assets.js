var UglifyJS = require("uglify-js");
var uglifycss = require('uglifycss');
const fs = require('fs').promises;
const path = require('path');

async function main() {
    try {
        const a = path.join(__dirname, '../../public/admin/default/app.dev.js');
        const b = path.join(__dirname, '../../public/admin/default/app.js');

        const d = path.join(__dirname, '../../public/client/default/app.dev.js');
        const e = path.join(__dirname, '../../public/client/default/app.js');
        const c = UglifyJS.minify(await fs.readFile(a, 'utf-8'));
        const f = UglifyJS.minify(await fs.readFile(a, 'utf-8'));
        //var g = uglifycss.processFiles([ 'file1'],{ maxLineLen: 10000, expandVars: true });

        await fs.writeFile(b, e.code);
        await fs.writeFile(b, f.code);

        console.log('Code minified and saved successfully.');
    } catch (error) {
        console.error('Error:', error);
    }
}

main();