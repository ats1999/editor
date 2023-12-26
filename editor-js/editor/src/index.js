const EditorJS = require("@editorjs/editorjs");
const tools = require("./tools/index");
const MermaidTool = require("editorjs-mermaid");

// css required by multiple components
require("katex/dist/katex.css");
require("editor-js-viewer/dist/viewer.css");

module.exports = function ({ holder, data, fileUploader, onChange }) {
  // FIXME: check why default is required here EditorJS.default
  const editor = new EditorJS.default({
    autofocus: true,
    placeholder: "Let`s write an awesome story!",
    holder: holder,
    data,
    tools: tools(fileUploader),
    onReady: () => {
      MermaidTool.config({ theme: "neutral" });
    },
    onChange: async (api, event) => {
      const data = await api.saver.save();
      onChange({ ...data, type: "EDITOR_JS" });
    },
  });

  return editor;
};
