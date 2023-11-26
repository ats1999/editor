module.exports = function (block) {
  const {
    data: { level, text, alignment },
    tunes: { textVariantTune },
  } = block;
  return `<h${level} class="block heading text-${alignment} ${
    textVariantTune && `text-tune-${textVariantTune}`
  }">${text}</h${level}>`;
};
