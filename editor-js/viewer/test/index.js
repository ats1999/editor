const data = require("./data.json");
const renderer = require("../dist/index");
const fs = require("fs");

const html = renderer.htmlRenderer(data);

const outputHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../src/styles/viewer.css" />
  </head>
  <body>
  ${html}
  </body>
  </html>
`;
fs.writeFileSync("./index.html", outputHtml);
