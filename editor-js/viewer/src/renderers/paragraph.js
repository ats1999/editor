module.exports = function (block) {
  const {
    data: { text },
    tunes: { textVariantTune },
  } = block;
  return `<p class="block paragraph ${
    textVariantTune && `text-tune-${textVariantTune}`
  }">${text}</p>`;
};
