module.exports = function raw(block) {
  const {
    data: { html },
  } = block;

  return `<div class="block raw">${html}</div>`;
};
