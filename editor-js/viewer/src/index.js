const heading = require("./renderers/heading");
const paragraph = require("./renderers/paragraph");
const katex = require("./renderers/katex");
const raw = require("./renderers/raw");
const nestedList = require("./renderers/nestedList");
const image = require("./renderers/image");
const delimiter = require("./renderers/delimiter");
const alert = require("./renderers/alert");
const table = require("./renderers/table");
const quote = require("./renderers/quote");
const code = require("./renderers/code");

const renderers = {
  heading,
  paragraph,
  katex,
  raw,
  nestedList,
  image,
  delimiter,
  alert,
  table,
  quote,
  code,
};

module.exports = function (data) {
  const blocks = data.blocks;
  let html = "";

  for (let block of blocks) {
    const blockRenderer = renderers[block.type];

    if (!blockRenderer) {
      html += `<p class="un-supported-block-msg">Un Supported Block Type: ${block.type}`;
      continue;
    }

    html += blockRenderer(block);
  }

  return `<div class="blocks-viewer">${html}</div>`;
};
