#!/usr/bin/env node

// >> $ sed -i 's/!/！/g' $1;
// >> $ echo "Hello, world!" | ./index.js --search "H" --replace "P"

import { argv, stdin } from "zx";

const search = argv?.["search"];
const replace = argv?.["replace"];
if (!search || !replace) {
	process.exit(1);
}
// console.log(search);
// console.log(replace);

let target = "";
if (!process.stdin.isTTY) {
	target = await stdin();
}
// console.log(target);

if (!target) {
	process.exit(1);
}

const regExp = new RegExp(search, "g");
// const regExp = new RegExp(`/${search}/g`);

target = target.replace(regExp, replace);
console.log(target);
