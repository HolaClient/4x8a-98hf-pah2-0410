var UJS = require("uglify-js");
var UCS = require('uglifycss');
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk')

async function main() {
    try {
        console.log(chalk.white("======================================================="));
        function calculate(a, b) { return chalk.gray(`${b - a}ms`); } //waste function
        async function buildJS(a, b, c) {
            const d = Date.now();
            const e = UJS.minify(await fs.readFile(a, 'utf-8'));
            await fs.writeFile(b, e.code);
            const f = Date.now();
            console.log(`${c} built successfully.. ${calculate(d, f)}`);
        };
        async function buildCSS(a, b, c) {
            const d = Date.now();
            const e = UCS.processFiles([a], { maxLineLen: 10000, expandVars: true });
            await fs.writeFile(b, e);
            const f = Date.now();
            console.log(`${c} built successfully.. ${calculate(d, f)}`);
        };
        async function build() {
            await Promise.all([
                buildJS(path.join(__dirname, '../../public/admin/default/app.dev.js'), path.join(__dirname, '../../public/admin/default/app.js'), "Admin  JS "),
                buildJS(path.join(__dirname, '../../public/client/default/app.dev.js'), path.join(__dirname, '../../public/client/default/app.js'), "Client JS "),
                buildJS(path.join(__dirname, '../../public/setup/default/app.dev.js'), path.join(__dirname, '../../public/setup/default/app.js'), "Setup  JS "),
                buildCSS(path.join(__dirname, '../../public/setup/default/app.dev.css'), path.join(__dirname, '../../public/setup/default/app.css'), "Setup  CSS"),
                buildCSS(path.join(__dirname, '../../public/admin/default/app.dev.css'), path.join(__dirname, '../../public/admin/default/app.css'), "Admin  CSS"),
                buildCSS(path.join(__dirname, '../../public/client/default/app.dev.css'), path.join(__dirname, '../../public/client/default/app.css'), "Client CSS")
            ]);
        };
        const a = Date.now();
        await build();
        console.log(chalk.white("======================================================="));
        console.log(`${chalk.white('All files built successfully...')} ${calculate(a, Date.now())}`);
        console.log(chalk.white("======================================================="));
    } catch (error) {
        console.error('Error:', error);
    }
}
main();