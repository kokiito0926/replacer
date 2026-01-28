#!/usr/bin/env node

// >> $ ./index.js "Hello, world!" --search "H" --replace "P"
// >> $ echo "Hello, world!" | ./index.js --search "H" --replace "P"

// >> $ sed -i 's/!/！/g' $1;

import { $, fs, path, minimist, stdin } from "zx";

const argv = minimist(process.argv.slice(2), {
	string: ["search", "replace"],
});
// console.log(argv);

const search = argv["search"];
const replace = argv["replace"];
if (!search || !replace) {
	console.error("Error: search and replace strings are required.");
	process.exit(1);
}
// console.log(search);
// console.log(replace);

let target = "";
if (!process.stdin.isTTY) {
	target = await stdin();
}
// else {
// 	target = argv._[0];
// }
// console.log(target);

if (!target) {
	console.error("Error: no input content provided.");
	process.exit(1);
}

const regExp = new RegExp(search, "g");
// const regExp = new RegExp(`/${search}/g`);

target = target.replace(regExp, replace);
console.log(target);
