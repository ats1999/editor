const katex = require("katex");
require("katex/dist/katex.css");

const mathIcon = `
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1873 4.14049C11.2229 3.41714 9.84236 4.0695 9.78883 5.27389L9.71211 7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H9.62322L9.22988 17.8501C9.0996 20.7815 5.63681 22.261 3.42857 20.3287L3.34151 20.2526C2.92587 19.8889 2.88375 19.2571 3.24743 18.8415C3.61112 18.4259 4.24288 18.3837 4.65852 18.7474L4.74558 18.8236C5.69197 19.6517 7.17602 19.0176 7.23186 17.7613L7.62125 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H7.71014L7.7908 5.18509C7.9157 2.37483 11.1369 0.852675 13.3873 2.54049L13.6 2.69999C14.0418 3.03136 14.1314 3.65817 13.8 4.09999C13.4686 4.54182 12.8418 4.63136 12.4 4.29999L12.1873 4.14049Z" fill="#212121"/>
<path d="M13.082 13.0462C13.3348 12.9071 13.6525 13.0103 13.7754 13.2714L14.5879 14.9979L11.2928 18.2929C10.9023 18.6834 10.9023 19.3166 11.2928 19.7071C11.6834 20.0977 12.3165 20.0977 12.707 19.7071L15.493 16.9212L16.2729 18.5786C16.9676 20.0548 18.8673 20.4808 20.1259 19.4425L20.6363 19.0214C21.0623 18.6699 21.1228 18.0397 20.7713 17.6136C20.4198 17.1876 19.7896 17.1272 19.3636 17.4787L18.8531 17.8998C18.6014 18.1074 18.2215 18.0222 18.0825 17.727L16.996 15.4182L19.707 12.7071C20.0976 12.3166 20.0976 11.6834 19.707 11.2929C19.3165 10.9024 18.6834 10.9024 18.2928 11.2929L16.0909 13.4948L15.585 12.4198C14.9708 11.1144 13.3822 10.5985 12.1182 11.2937L11.518 11.6238C11.0341 11.89 10.8576 12.498 11.1237 12.982C11.3899 13.4659 11.998 13.6424 12.4819 13.3762L13.082 13.0462Z" fill="#212121"/>
</svg>
`;

function strToBool(boolInStr) {
  return boolInStr === "true" ? true : false;
}

class KatexBlock {
  static get toolbox() {
    return {
      title: "Math By Katex",
      icon: mathIcon,
    };
  }

  constructor({ data, config, api, block }) {
    this.isNewBlock = data.tex === undefined;
    this.api = api;
    this.block = block;

    this.data = {
      tex: data.tex || "",
      displayMode: data.displayMode === undefined ? true : data.displayMode,
    };

    this.texEditorWrapper = undefined;
    this.config = {
      actions: config.actions || [],
    };

    this.tunesConfig = {
      "Preview Expression": {
        isActive: true,
      },
    };
  }

  renderKatexToString(tex) {
    let html = "";
    try {
      html = katex.renderToString(tex, { displayMode: this.data.displayMode });
    } catch (error) {
      html = error;
    }
    return `<div style="font-size:20px;">${html}</div>`;
  }

  render() {
    const blockId = this.block.id;
    this.texEditorWrapper = document.createElement("div");
    this.texEditorWrapper.classList.add("tex-block");
    this.texEditorWrapper.id = `tex-editor-${blockId}`;

    this.texInput = document.createElement("textarea");
    this.texInput.value = this.data.tex;
    this.texInput.style.resize = "none";
    this.texInput.style.width = "100%";
    this.texInput.style.minHeight = "70px";
    this.texInput.style.border = "2px solid black";
    this.texInput.style.padding = "10px";
    this.texInput.placeholder = "Math is Like \\sum_{i=0}^n A[i]=S";
    this.texInput.addEventListener("input", () => {
      this.data.tex = this.texInput.value;
    });

    this.inputOptions = document.createElement("div");
    this.inputOptions.classList.add("options");
    this.inputOptions.style.display = "flex";

    this.dispModeSelect = document.createElement("select");
    this.dispModeSelect.style.background = "#ececec";
    this.dispModeSelect.style.padding = "5px";
    this.dispModeSelect.style.marginBottom = "5px";

    const displayModes = [
      {
        modeKey: "Display Mode",
        value: "true",
      },
      {
        modeKey: "Inline Mode",
        value: "false",
      },
    ];

    displayModes.forEach((mode) => {
      const option = document.createElement("option");
      option.value = mode.value;
      option.text = mode.modeKey;
      if (strToBool(mode.value) === this.data.displayMode) {
        option.selected = true;
      }
      this.dispModeSelect.add(option);
    });
    this.dispModeSelect.addEventListener("change", () => {
      // FIXME: if i try to save sata after changing the language, then it's not working
      this.data.displayMode = strToBool(this.dispModeSelect.value);

      // Manually update data for now
      // editorjs is not updating data after select input change
      let blockId = this.api.blocks.getBlockByIndex(
        this.api.blocks.getCurrentBlockIndex()
      ).id;
      this.api.blocks.update(blockId, this.save());
    });

    this.katexHelpLabel = document.createElement("a");
    this.katexHelpLabel.target = "_blank";
    this.katexHelpLabel.href = "https://katex.org/docs/support_table";
    this.katexHelpLabel.innerText = "Katex Documentation";
    this.katexHelpLabel.style.textDecoration = "none";
    this.katexHelpLabel.style.marginLeft = "10px";

    this.inputOptions.appendChild(this.dispModeSelect);
    this.inputOptions.appendChild(this.katexHelpLabel);

    this.texEditorWrapper.appendChild(this.inputOptions);
    this.texEditorWrapper.appendChild(this.texInput);

    // tex viewer
    this.viewer = document.createElement("div");
    this.viewer.id = `tex-viewer-${blockId}`;
    this.viewer.innerHTML = this.renderKatexToString(this.data.tex);

    // tex block wrapper
    this.texBlockWrapper = document.createElement("div");
    this.texBlockWrapper.appendChild(this.texEditorWrapper);
    this.texBlockWrapper.appendChild(this.viewer);

    if (this.isNewBlock) {
      this.viewer.style.display = "none";
    } else {
      this.texEditorWrapper.style.display = "none";
    }
    this.isNewBlock = false;
    return this.texBlockWrapper;
  }

  save() {
    return {
      tex: this.data.tex,
      displayMode: this.data.displayMode,
    };
  }

  static get enableLineBreaks() {
    return true;
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
        icon: mathIcon,
        label: "Preview Expression",
        toggle: true,
        isActive: true,
        isDisabled: false,
        closeOnActivate: true,
        onActivate: function () {
          const editor = document.getElementById(`tex-editor-${this.block.id}`);
          const viewer = document.getElementById(`tex-viewer-${this.block.id}`);
          if (editor.style.display !== "none") {
            editor.style.display = "none";
            viewer.style.display = "block";
            viewer.innerHTML = this.renderKatexToString(this.data.tex);
            return;
          }

          editor.style.display = "block";
          viewer.style.display = "none";
        },
      },
    ];
  }
}

module.exports = KatexBlock;
