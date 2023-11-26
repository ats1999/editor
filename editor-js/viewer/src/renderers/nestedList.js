function renderList(style, content, items) {
  return `<li>
        ${content}
        ${
          items.length
            ? `<ul>${items
                .map((item) => renderList(style, item.content, item.items))
                .join("")}</ul>`
            : ""
        }
    </li>`;
}

module.exports = function nestedList(block) {
  const {
    data: { style, items },
  } = block;

  // TODO: add support for ordered/unordered list
  // Curently editor plugin is breaking
  return `<ul class="block nested-list ${style}-list">
  ${items.map((item) => renderList(style, item.content, item.items)).join("")}
  </ul>`;
};
