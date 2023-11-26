module.exports = function alertRenderer(block) {
  const {
    data: { type, align, message },
  } = block;
  return `<p class="block alert text-${align} alert-type-${type}">${message}</p>`;
};
