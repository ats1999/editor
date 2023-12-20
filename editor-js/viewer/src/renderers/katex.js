const katex = require("katex");

module.exports = function Katex(block) {
  const {
    data: { tex, displayMode },
  } = block;

  let html = "";
  try {
    html = katex.renderToString(tex, { throwOnError: false, displayMode });
  } catch (error) {
    // noop
  }

  return `<div block katex>${html}</div>`;
};
