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

function htmlRenderer(data) {
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
}

function tocRenderer(data, tocMarginMultiplier = 10, minHeadingLevel = 2) {
  const blocks = data.blocks;
  let toc = '<ul class="viewer-toc" style="list-style-type:none; padding:0;">';

  for (const block of blocks) {
    if (block.type === "heading") {
      const margin = (block.data.level - minHeadingLevel) * tocMarginMultiplier;
      toc += `<li style="margin-left:${margin}px;"><a href="#${block.id}">${block.data.text}</a></li>`;
    }
  }

  toc += "</ul>";
  return toc;
}

module.exports = { htmlRenderer, tocRenderer };
