const katex = require("katex");

module.exports = function Katex(block) {
  const {
    data: { tex },
  } = block;

  let html = "";
  try {
    html = katex.renderToString(tex);
  } catch (error) {
    // noop
  }

  return `<div block katex>${html}</div>`;
};
