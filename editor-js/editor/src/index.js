const EditorJS = require("@editorjs/editorjs");
const tools = require("./tools/index");
const MermaidTool = require("editorjs-mermaid");

module.exports = function ({ holder, data, fileUploader, onChange }) {
  // FIXME: check why default is required here EditorJS.default
  const editor = new EditorJS.default({
    autofocus: true,
    placeholder: "Let`s write an awesome story!",
    holder: holder,
    data,
    tools: tools(fileUploader),
    tunes: ["textVariantTune"],
    onReady: () => {
      MermaidTool.config({ theme: "neutral" });
    },
    onChange: async (api, event) => {
      const data = await api.saver.save();
      onChange(data);
    },
  });

  return editor;
};
