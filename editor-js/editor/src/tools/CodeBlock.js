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

// css files
require("prismjs/themes/prism-coy.min.css");
// https://www.svgrepo.com/vectors/code/4
const codeBlockIcon = `
<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 32 32" xml:space="preserve">
<style type="text/css">
	.feather_een{fill:#0B1719;}
</style>
<path class="feather_een" d="M8.5,10h-2C6.224,10,6,9.776,6,9.5v0C6,9.224,6.224,9,6.5,9h2C8.776,9,9,9.224,9,9.5v0
	C9,9.776,8.776,10,8.5,10z M7,11.5L7,11.5C7,11.776,7.224,12,7.5,12h2c0.276,0,0.5-0.224,0.5-0.5v0c0-0.276-0.224-0.5-0.5-0.5h-2
	C7.224,11,7,11.224,7,11.5z M7.5,18h2c0.276,0,0.5-0.224,0.5-0.5l0,0c0-0.276-0.224-0.5-0.5-0.5h-2C7.224,17,7,17.224,7,17.5l0,0
	C7,17.776,7.224,18,7.5,18z M6.5,20h2C8.776,20,9,19.776,9,19.5l0,0C9,19.224,8.776,19,8.5,19h-2C6.224,19,6,19.224,6,19.5l0,0
	C6,19.776,6.224,20,6.5,20z M22,13.5L22,13.5c0,0.276-0.224,0.5-0.5,0.5h-13C8.224,14,8,13.776,8,13.5v0C8,13.224,8.224,13,8.5,13
	h13C21.776,13,22,13.224,22,13.5z M8.5,16h13c0.276,0,0.5-0.224,0.5-0.5v0c0-0.276-0.224-0.5-0.5-0.5h-13C8.224,15,8,15.224,8,15.5
	v0C8,15.776,8.224,16,8.5,16z M16.5,12h-5c-0.276,0-0.5-0.224-0.5-0.5v0c0-0.276,0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5v0
	C17,11.776,16.776,12,16.5,12z M20.5,9h-10C10.224,9,10,9.224,10,9.5v0c0,0.276,0.224,0.5,0.5,0.5h10c0.276,0,0.5-0.224,0.5-0.5v0
	C21,9.224,20.776,9,20.5,9z M29,4H3C1.343,4,0,5.343,0,7v16c0,1.657,1.343,3,3,3h9v3h-1.5c-0.276,0-0.5,0.224-0.5,0.5l0,0
	c0,0.276,0.224,0.5,0.5,0.5h11c0.276,0,0.5-0.224,0.5-0.5l0,0c0-0.276-0.224-0.5-0.5-0.5H20v-3h9c1.657,0,3-1.343,3-3V7
	C32,5.343,30.657,4,29,4z M19,29h-6v-3h6V29z M31,23c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h26
	c1.105,0,2,0.895,2,2V23z"/>
</svg>
`;

class CodeBlock {
  static languages = [
    "javascript",
    "java",
    "python",
    "html",
    "css",
    "text",
    "sql",
  ];

  static get toolbox() {
    return {
      title: "Code Block",
      icon: codeBlockIcon,
    };
  }

  constructor({ data, config, api, block }) {
    this.isNewBlock =
      data.code === undefined &&
      data.caption === undefined &&
      data.language === undefined;

    this.api = api;
    this.block = block;
    this.data = {
      code: data.code || "",
      language: data.language || "javascript",
      caption: data.caption || "",
    };
    this.config = {
      actions: config.actions || [],
    };

    this.tunesConfig = {
      "Preview Code": {
        isActive: true,
      },
    };
    this.codeEditor = undefined;
  }

  render() {
    const blockId = this.block.id;
    this.codeEditor = document.createElement("div");
    this.codeEditor.id = `code-editor-${blockId}`;
    this.codeEditor.classList.add("code-block");

    this.codeInput = document.createElement("textarea");
    this.codeInput.classList.add("cdx-input");
    this.codeInput.value = this.data.code;
    this.codeInput.style.resize = "none";
    this.codeInput.style.width = "100%";
    this.codeInput.style.minHeight = "300px";
    this.codeInput.style.border = "2px solid black";
    this.codeInput.style.padding = "10px";
    this.codeInput.placeholder = "Enter Your Code Here";
    this.codeInput.addEventListener("input", () => {
      this.data.code = this.codeInput.value;
    });

    this.inputOptions = document.createElement("div");
    this.inputOptions.classList.add("options");
    this.inputOptions.style.display = "flex";

    this.languageSelect = document.createElement("select");
    this.languageSelect.classList.add("cdx-button");
    this.languageSelect.style.background = "#ececec";
    this.languageSelect.style.padding = "5px";
    this.languageSelect.style.marginBottom = "5px";

    const languages = CodeBlock.languages; // Add more languages as needed
    languages.forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang;
      option.text = lang;
      if (lang === this.data.language) {
        option.selected = true;
      }
      this.languageSelect.add(option);
    });
    this.languageSelect.addEventListener("change", () => {
      // FIXME: if i try to save sata after changing the language, then it's not working
      this.data.language = this.languageSelect.value;

      // Manually update data for now
      // editorjs is not updating data after select input change
      let blockId = this.api.blocks.getBlockByIndex(
        this.api.blocks.getCurrentBlockIndex()
      ).id;
      this.api.blocks.update(blockId, this.save());
    });

    this.codeCaption = document.createElement("input");
    this.codeCaption.value = this.data.caption;
    this.codeCaption.classList.add("code-caption");
    this.codeCaption.classList.add("cdx-input");
    this.codeCaption.type = "text";
    this.codeCaption.style.width = "100%";
    this.codeCaption.style.paddingLeft = "10px";
    this.codeCaption.style.paddingRight = "10px";
    this.codeCaption.style.border = "1px solid gray";
    this.codeCaption.placeholder = "Enter code caption...";
    this.codeCaption.addEventListener("keyup", (e) => {
      this.data.caption = e.target.value;
    });

    this.inputOptions.appendChild(this.languageSelect);
    this.inputOptions.appendChild(this.codeCaption);

    this.codeEditor.appendChild(this.inputOptions);
    this.codeEditor.appendChild(this.codeInput);

    this.codeViewer = document.createElement("div");
    this.codeViewer.classList.add("blocks-viewer");
    this.codeViewer.id = `code-viewer-${this.block.id}`;

    this.codeViewer.innerHTML = this.renderDataToHtml();

    this.wrapper = document.createElement("div");
    this.wrapper.appendChild(this.codeEditor);
    this.wrapper.appendChild(this.codeViewer);

    if (this.isNewBlock) {
      this.codeViewer.style.display = "none";
      this.tunesConfig["Preview Code"].isActive = false;
    } else {
      this.codeEditor.style.display = "none";
    }

    return this.wrapper;
  }

  save() {
    return {
      code: this.data.code,
      language: this.data.language,
      caption: this.data.caption,
    };
  }

  static get enableLineBreaks() {
    return true;
  }

  renderDataToHtml() {
    const codeLanguage = this.data.language || CodeBlock.languages[0];

    const highlightedCode = Prism.highlight(
      this.data.code,
      Prism.languages[codeLanguage],
      codeLanguage
    );

    return `<div class="block code">
    ${this.data.caption ? `<p class="caption">${this.data.caption}</p>` : ""}
    <pre style="padding: 10px; background-color: #232428; color: white; overflow: scroll; display:flex;" class="code-container">
      <code style="display: block;" class="code">${highlightedCode}</code>
    </pre>
  </div>`;
  }
  tuneActiveStatus(tuneLabel) {
    return this.tunesConfig[tuneLabel] && this.tunesConfig[tuneLabel].isActive;
  }

  renderSettings() {
    const tunes = this.tunes.concat(this.config.actions);
    return tunes.map((tune) => ({
      ...tune,
      isActive: this.tuneActiveStatus(tune.label),
      onActivate: () => {
        if (!this.tunesConfig[tune.label]) {
          this.tunesConfig[tune.label] = {};
        }

        this.tunesConfig[tune.label].isActive = !this.tuneActiveStatus(
          tune.label
        );
        tune.onActivate.call(this);
      },
    }));
  }

  get tunes() {
    return [
      {
        icon: codeBlockIcon,
        label: "Preview Code",
        toggle: true,
        isActive: true,
        isDisabled: false,
        closeOnActivate: true,
        onActivate: function () {
          const editor = document.getElementById(
            `code-editor-${this.block.id}`
          );
          const viewer = document.getElementById(
            `code-viewer-${this.block.id}`
          );

          if (editor.style.display !== "none") {
            editor.style.display = "none";
            viewer.style.display = "block";
            viewer.innerHTML = this.renderDataToHtml();
            return;
          }

          editor.style.display = "block";
          viewer.style.display = "none";
        },
      },
    ];
  }
}

// Register the plugin
module.exports = CodeBlock;
