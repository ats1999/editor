module.exports = function (block) {
  const {
    data: { level, text, alignment },
    tunes: { textVariantTune },
    id,
  } = block;
  return `<h${level} id="${id}" class="block heading text-${alignment} ${
    textVariantTune && `text-tune-${textVariantTune}`
  }">
    <a class="hash-anchor" href="#${id}" onclick="navigator.clipboard.writeText(this.href);">${text}</a>
  </h${level}>`;
};
