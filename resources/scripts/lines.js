/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclientx.tech
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright 2022-2024 HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * lines.js - Codebase lines counter.
 *--------------------------------------------------------------------------
*/
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk')
const extensions = ['.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.ejs', '.json'];
const exclude = ['node_modules', 'storage'];

async function getAllFiles(dir) {
    let a = await fs.readdir(dir);
    let d = []
    for (let i of a) {
        let b = path.join(dir, i);
        let c = await fs.stat(b);
        if (c.isDirectory()) {
            if (!exclude.includes(i)) {
                d = d.concat(await getAllFiles(b));
            }
        } else {
            d.push(b);
        }
    }
    return d;
}

function extractVariableNames(a) {
    let b = [];
    let c = /\b(?:var|let|const)\s+([a-zA-Z_$][0-9a-zA-Z_$]*)/g;
    let d;
    while ((d = c.exec(a)) !== null) {
        b.push(d[1]);
    }
    return b;
}

function extractFunctions(a) {
    let b = [];
    let c = /\bfunction\s+([a-zA-Z_$][0-9a-zA-Z_$]*)/g;
    let d;
    while ((d = c.exec(a)) !== null) {
        b.push(d[1]);
    }
    return b;
}

function countAlphabets(a) {
    let b = {};
    for (let i of a.toLowerCase()) {
        if (i >= 'a' && i <= 'z') {
            b[i] = (b[i] || 0) + 1;
        }
    }
    return b;
}

async function main() {
    let a = await getAllFiles(path.resolve(__dirname, '../../'));
    let b = a.filter(i => extensions.includes(path.extname(i)));
    let c = 0;
    let variables = {};
    let alphabets = {};
    let functions = {};
    for (let i of b) {
        let d = await fs.readFile(i, 'utf-8');
        c += d.split('\n').length;
        let e = extractVariableNames(d);
        let l = extractFunctions(d);
        for (let i of l) {
            functions[i] = (functions[i] || 0) + 1;
        }
        for (let i of e) {
            variables[i] = (variables[i] || 0) + 1;
        }
        let f = countAlphabets(d);
        for (let [i, j] of Object.entries(f)) {
            alphabets[i] = (alphabets[i] || 0) + j;
        }
    }
    let g = Object.entries(variables).sort((a, b) => b[1] - a[1]);
    let h = g.slice(0, 3);
    let j = Object.entries(alphabets).sort((a, b) => a[0].localeCompare(b[0]));
    let l = Object.entries(functions).sort((a, b) => b[1] - a[1]);
    console.log(chalk.white("======================================================="));
    console.log('Top 3 most used variable names:');
    h.forEach(([i, j]) => {
        console.log(`${i}: ${j} times`);
    });
    console.log(" ")
    console.log('Alphabet frequencies:');
    let k = 0
    j.forEach(([i, j]) => {
        k = k + j
    });
    console.log(j)
    console.log(" ")
    console.log('Total lines of code:', c);
    console.log('Total letters:', k);
    let m = 0
    l.forEach(([i, j]) => {
        m = m + j
    });
    console.log('Total functions:', m);
    console.log(chalk.white("======================================================="));
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});