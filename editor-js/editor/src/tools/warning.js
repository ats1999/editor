const Warning = require("@editorjs/warning");

const warningConfig = {
  class: Warning,
  inlineToolbar: true,
  shortcut: "CMD+SHIFT+W",
  config: {
    titlePlaceholder: "Title",
    messagePlaceholder: "Message",
  },
};

module.exports = warningConfig;
