module.exports = function quote(block) {
  const {
    data: { text, caption, alignment },
  } = block;
  return `<blockquote class="block quote text-${alignment}">${text}</blockquote>`;
};
