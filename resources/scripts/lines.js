const fs = require('fs').promises;
const path = require('path');

const extensions = ['.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.ejs', '.json'];
const exclude = ['node_modules', 'storage'];

async function getAllFiles(a, b = []) {
    const d = await fs.readdir(a);
    for (const i of d) {
        const e = path.join(a, i);
        const f = await fs.stat(e);
        if (f.isDirectory()) {
            if (!exclude.includes(i)) {
                b = await getAllFiles(e, b);
            }
        } else {
            b.push(e);
        }
    }
    return b;
}

async function countLinesInFile(a) {
    const b = await fs.readFile(a, 'utf-8');
    return b.split('\n').length;
}

async function main() {
    const b = await getAllFiles(path.resolve(__dirname, '../../'), []);
    const c = b.filter(i => extensions.includes(path.extname(i)));
    let a = 0;
    for (const i of c) {
        const e = await countLinesInFile(i);
        a += e;
    }
    console.log(`Total lines of code: ${a}`);
}
main()