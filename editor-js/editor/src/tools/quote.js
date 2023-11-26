const Quote = require("@editorjs/quote");

const quoteConfig = {
  class: Quote,
  inlineToolbar: true,
  shortcut: "CMD+SHIFT+O",
  config: {
    quotePlaceholder: "Enter a quote",
    captionPlaceholder: "Quote's author",
  },
};
module.exports = quoteConfig;
