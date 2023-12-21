class CodeBlock {
  static get toolbox() {
    return {
      title: "Code Block",
      icon: '<svg width="17" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M120.9 292.7L0 372.6V478c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V372.6l-120.9-79.9c-3.4-2.3-7.8-2.3-11.2 0L120.9 292.7zM240 317.2L347.1 372H100.9L208 317.2c2.4-1.6 5.6-1.6 8 0zm208-44.8L375.1 245l72.9-48.5C451.8 190.5 464 172 464 152s-12.2-38.5-35.1-44.5L375.1 59 448 10.6c5.2-4.3 6-11.7 1.7-16.9l-12-14.5c-4.3-5.2-11.7-6-16.9-1.7L336 39.1 288.9 0c-16.6-8.5-35.6-8.5-52.2 0L112 39.1 80.9 11.5C75.7 6.3 68.3 5.5 64.1 9.8l-12 14.5c-4.3 5.2-3.5 12.6 1.7 16.9L73 59 0 107.4C2.9 111.4 16 129.9 16 152s-13.1 40.6-29 44.6L72.9 245l-39 26C25.6 276.4 16 291.8 16 308s9.6 31.6 17.9 37l39 26 29-19.3C104.4 342 120 352 136 352s31.6-9.6 37-17.3l29-19.3 50 33.3-5.1 19.5c-2 7.6-1 15.6 2.7 22.3l18 32.4 32.3 58.2c6.3 11.3 20.5 15.5 31.8 9.2l45.2-25.6 50 33.3-45.2 25.6c-11.3 6.3-25.5 2.1-31.8-9.2l-32.3-58.2-18-32.4c-3.7-6.7-10.9-11-18.7-11H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h130.3c14.2 0 26.5-10 29.5-24h134.3c3 14 15.3 24 29.5 24H384c8.8 0 16 7.2 16 16s-7.2 16-16 16H238.2c-1.1 7.1-4.3 14.1-9.3 19.2L240 272.4zM69.8 137.5l10.5-40.2L184.3 92l-94.2 45.5zM360 258.3L320.2 274 360 289.7V258.3zM208 142.8l89.1-59.4 22.7 41.4-89.1 59.4zM192 88.4l51.1 93.1-22.7 13.4-51.1-93.1zM23.5 165l94.2-45.5 22.7 41.4-94.2 45.5z"/></svg>',
    };
  }

  constructor({ data, config, api }) {
    this.api = api;
    this.data = {
      code: data.code || "",
      language: data.language || "javascript",
      caption: data.caption || "",
    };
    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("code-block");

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

    const languages = [
      "javascript",
      "java",
      "python",
      "html",
      "css",
      "text",
      "sql",
    ]; // Add more languages as needed
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

    this.wrapper.appendChild(this.inputOptions);
    this.wrapper.appendChild(this.codeInput);

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
}

// Register the plugin
module.exports = CodeBlock;
