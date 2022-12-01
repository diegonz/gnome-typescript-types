#! /usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const /** @type {string} */ outputFile = './index.d.ts';
const /** @type {string[]} */ excludedFiles = ['index.d.ts', 'globals.global.d.ts'];
const /** @type {string[]} */ lines = [];

function /** @type {void} */ processDirectory(/** @type {string} */ dir) {
    if (dir.endsWith('node_modules')) {
        console.log(`Ignoring 'node_modules' directory: ${dir}`);
        return;
    }

    try {
        console.log(`Processing directory: ${dir}`);
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = `${dir}/${file}`;
            if (fs.statSync(filePath).isFile()) {
                console.log(`Processing file: ${dir}/${file}`);
                if (file.endsWith('.d.ts') && !excludedFiles.includes(file)) {
                    const relativeFilePath = filePath.replace(`${__dirname}/`, '')
                    lines.push(`/// <reference path="${relativeFilePath}" />`);
                } else {
                    console.log(`Ignoring file: ${filePath}`);
                }
            } else {
                processDirectory(filePath);
            }
        }
    } catch (err) {
        console.error(err);
    }
}

try {
    lines.push('// TypeScript definitions for GNOME Gjs bindings.');
    processDirectory(__dirname);
    lines.push('\n/// <reference path="globals.global.d.ts" />\n');
    fs.writeFileSync(outputFile, lines.join('\n'));
} catch (err) {
    console.error(err);
}
