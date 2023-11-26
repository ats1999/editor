module.exports = function image(block) {
  const {
    data: {
      file: { url },
    },
  } = block;
  return `<img class="block image" src="${url}"/>`;
};
