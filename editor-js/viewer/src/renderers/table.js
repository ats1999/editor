module.exports = function tableRenderer(block) {
  const {
    data: { withHeadings, content },
  } = block;

  const head =
    withHeadings && content && content.length
      ? `<thead>
        <tr>
          ${content[0].map((col) => `<th>${col}</th>`).join("")}
        </tr>
      </thead>`
      : "";

  const body = `<tbody>
    ${content
      .slice(Number(withHeadings), content.length)
      .map(
        (row) => `
      <tr>
        ${row.map((col) => `<td>${col}</td>`).join("")}
      </tr>
    `
      )
      .join("")}
  </tbody>`;

  return `<table class="block table">${head}${body}</table>`;
};
