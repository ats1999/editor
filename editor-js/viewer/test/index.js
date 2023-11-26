const data = require("./data.json");
const renderer = require("../dist/index");
const fs = require("fs");

const html = renderer.htmlRenderer(data);

console.log(renderer.tocRenderer(data));
fs.writeFileSync("./index.html", html);
