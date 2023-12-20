const katex = require("katex");
require("katex/dist/katex.css");

const mathIcon = `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
width="800px" height="800px" viewBox="0 0 420.003 420.003"
xml:space="preserve">
<g>
<g>
 <g>
   <path d="M106.52,165.751l1.043,0.838c1.296,1.037,2.949,1.516,4.6,1.313c1.65-0.199,3.149-1.051,4.163-2.364
     c1.981-2.575,5.148-4.446,8.063-4.77c5.761-0.636,6.039,1.89,6.146,2.839c0.148,1.364-1.045,5.392-4.883,10.394
     c-0.041,0.052-0.082,0.104-0.12,0.158l-15.93,22.175c-0.891,1.241-1.293,2.766-1.126,4.284l0.207,1.881
     c0.375,3.393,3.43,5.839,6.823,5.464l30.661-3.383c3.393-0.374,5.838-3.427,5.464-6.819l-0.15-1.344
     c-0.373-3.391-3.423-5.837-6.818-5.463l-15.547,1.717l7.442-10.389c5.457-7.127,8.229-14.475,7.599-20.178
     c-1.127-10.228-9.675-16.242-21.271-14.963c-6.613,0.729-13.113,4.473-17.394,10.012
     C103.436,159.818,103.889,163.644,106.52,165.751z"/>
   <path d="M151.865,176.636c0.374,3.391,3.427,5.839,6.819,5.464l6.638-0.732l0.73,6.635c0.374,3.394,3.426,5.836,6.818,5.464
     l1.342-0.148c3.395-0.374,5.839-3.426,5.464-6.819l-0.731-6.634l6.638-0.732c3.39-0.374,5.837-3.427,5.464-6.818l-0.148-1.345
     c-0.374-3.391-3.43-5.838-6.818-5.464l-6.638,0.731l-0.73-6.636c-0.375-3.392-3.427-5.837-6.819-5.462l-1.344,0.148
     c-3.392,0.375-5.837,3.425-5.462,6.816l0.73,6.636l-6.636,0.732c-3.392,0.375-5.839,3.429-5.466,6.819L151.865,176.636z"/>
   <path d="M192.293,156.287l1.046,0.839c1.294,1.037,2.932,1.528,4.599,1.313c1.648-0.199,3.148-1.051,4.16-2.363
     c1.983-2.577,5.147-4.449,8.063-4.771c5.76-0.636,6.038,1.889,6.145,2.838c0.148,1.365-1.042,5.393-4.883,10.394
     c-0.041,0.051-0.079,0.105-0.117,0.158l-15.929,22.176c-0.892,1.24-1.292,2.764-1.124,4.283l0.209,1.882
     c0.371,3.392,3.422,5.839,6.816,5.464l30.664-3.382c3.393-0.375,5.835-3.429,5.461-6.819l-0.148-1.344
     c-0.375-3.392-3.424-5.838-6.814-5.464l-15.55,1.715l7.442-10.388c5.461-7.126,8.229-14.476,7.603-20.179
     c-1.128-10.227-9.679-16.24-21.274-14.961c-6.609,0.729-13.111,4.472-17.393,10.011
     C189.208,150.357,189.664,154.182,192.293,156.287z"/>
   <path d="M270.933,165.836l-26.896,2.968c-3.393,0.374-5.838,3.429-5.464,6.819l0.146,1.345c0.375,3.394,3.43,5.838,6.819,5.464
     l26.898-2.968c3.391-0.373,5.838-3.426,5.465-6.817l-0.15-1.347C277.38,167.911,274.322,165.463,270.933,165.836z"/>
   <path d="M236.559,157.379c0.375,3.393,3.426,5.838,6.818,5.463l26.896-2.967c3.389-0.374,5.84-3.427,5.467-6.818l-0.15-1.346
     c-0.372-3.393-3.43-5.838-6.815-5.463l-26.898,2.969c-3.396,0.373-5.84,3.424-5.465,6.816L236.559,157.379z"/>
   <path d="M300.863,173.885c-4.354,0.48-7.502,4.41-7.021,8.759c0.48,4.353,4.408,7.499,8.761,7.021
     c4.354-0.48,7.502-4.41,7.021-8.761C309.142,176.553,305.212,173.405,300.863,173.885z"/>
   <path d="M286.189,151.378l1.358-0.013c1.675-0.021,3.263-0.711,4.41-1.916c1.152-1.209,1.767-2.831,1.705-4.498
     c-0.049-1.215-0.106-2.727,3.861-3.166c4.213-0.464,4.385,1.101,4.5,2.137c0.293,2.649-0.438,3.644-2.787,6.396
     c-2.707,3.162-6.791,7.942-5.846,16.539c0.373,3.393,3.428,5.839,6.819,5.464l1.343-0.148c3.396-0.374,5.84-3.426,5.465-6.819
     c-0.297-2.695,0.438-3.7,2.812-6.468c2.693-3.144,6.771-7.893,5.832-16.4c-1.076-9.748-8.94-15.507-19.576-14.335
     c-10.125,1.117-16.461,7.895-16.133,17.266C280.07,148.765,282.835,151.412,286.189,151.378z"/>
   <path d="M364.841,44.43H232.225V22.223C232.225,9.95,222.274,0,210.002,0s-22.223,9.95-22.223,22.223V44.43H55.163
     c-9.597,0-17.382,7.785-17.382,17.384v210.458c0,9.6,7.785,17.384,17.382,17.384h102.799l-51.456,97.771
     c-5.719,10.861-1.547,24.297,9.315,30.018c3.3,1.734,6.842,2.56,10.331,2.56c7.982,0,15.705-4.317,19.684-11.879l41.943-79.697
     V380c0,12.271,9.95,22.219,22.223,22.219s22.223-9.945,22.223-22.219v-51.573l41.941,79.697
     c3.979,7.56,11.702,11.876,19.685,11.876c3.489,0,7.032-0.823,10.33-2.56c10.862-5.721,15.034-19.154,9.315-30.018
     l-51.455-97.771H364.84c9.595,0,17.382-7.784,17.382-17.384V61.813C382.222,52.215,374.435,44.43,364.841,44.43z
      M347.457,245.703H72.548V88.382h274.909V245.703L347.457,245.703z"/>
 </g>
</g>
</g>
</svg>`;

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
