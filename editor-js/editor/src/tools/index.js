const MermaidTool = require("editorjs-mermaid");
const Underline = require("@editorjs/underline");
const TextVariantTune = require("@editorjs/text-variant-tune");
const RawTool = require("@editorjs/raw");
const Marker = require("@editorjs/marker");
const InlineCode = require("@editorjs/inline-code");
const Delimiter = require("@editorjs/delimiter");
const EditorjsNestedChecklist = require("@calumk/editorjs-nested-checklist");
const Header = require("./header");
const Button = require("./button");
const Alert = require("./alert");
// const Warning = require("./warning");
const Table = require("./table");
const Quote = require("./quote");
const Image = require("./image");
// const Link = require("./link");
const CodeBlock = require("./CodeBlock");
const Embed = require("./embed");
const katex = require("./katex");
const nestedList = require("./nestedList");
const paragraph = require("./paragraph");
const inlineMath = require("./inlineMath");

const tools = (fileUploader) => {
  return {
    katex,
    // TODO: fix toggle block
    // toggle: ToggleBlock,
    mermaid: MermaidTool,
    underline: Underline,
    textVariantTune: TextVariantTune,
    raw: RawTool,

    // FIXME: inline formating is not working in nestedList
    nestedList,
    marker: Marker,
    inlineCode: InlineCode,
    image: Image(fileUploader),
    delimiter: Delimiter,
    nestedCheckList: EditorjsNestedChecklist,
    heading: Header,
    button: Button,
    alert: Alert,
    code: CodeBlock,
    // TODO: add support for it
    // warning: Warning,
    table: Table,
    quote: Quote,
    embed: Embed,
    paragraph,
    inlineMath,
    // TODO: fix, inline link is not working because of this
    // link: Link,
  };
};

module.exports = tools;
