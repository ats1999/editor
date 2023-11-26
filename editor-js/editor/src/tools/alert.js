const Alert = require("editorjs-alert");

const alertConfig = {
  class: Alert,
  inlineToolbar: true,
  shortcut: "CMD+SHIFT+A",
  config: {
    defaultType: "warning",
    messagePlaceholder: "Enter something",
  },
};

module.exports = alertConfig;
