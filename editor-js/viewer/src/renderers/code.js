const Prism = require("prismjs");

require("prismjs/components/prism-java.min.js");
require("prismjs/components/prism-cilkcpp.min.js");
require("prismjs/components/prism-python.min.js");
require("prismjs/components/prism-diff.min.js");
require("prismjs/components/prism-bash.min.js");
require("prismjs/components/prism-json.min.js");
require("prismjs/components/prism-sql.min.js");
require("prismjs/components/prism-latex.min.js");
require("prismjs/components/prism-markdown.min.js");

module.exports = function codeBlock(block) {
  const {
    data: { code, language, caption },
  } = block;
  const html = Prism.highlight(code, Prism.languages[language], language);
  // https://stackoverflow.com/questions/77738519/unknown-height-is-being-applied-to-pre-tag
  return `<div class="block code">
    ${caption ? `<p class="caption">${caption}</p>` : ""}
    <pre style="padding: 10px; background-color: #232428; color: white; overflow: scroll;display:flex;" class="code-container">
      <code style="display: block;" class="code">${html}</code>
    </pre>
  </div>`;
};
