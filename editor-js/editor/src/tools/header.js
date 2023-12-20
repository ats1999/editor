const Header = require("editorjs-header-with-alignment");

const headerConfig = {
  class: Header,
  config: {
    placeholder: "Enter heading...",
    levels: [2, 3, 4, 5, 6],
    defaultLevel: 2,
    defaultAlignment: "left",
  },
  tunes: ["textVariantTune"],
};

module.exports = headerConfig;
