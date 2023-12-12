module.exports = function embed(block) {
  const {
    data: { service, source, embed, width, height, caption },
    id,
  } = block;
  return `
  <iframe 
    id="${id}" 
    class="block embed" 
    height="${height}" 
    width="100%" 
    src="${embed}" 
    allowfullscreen
    >
    
    </iframe>
  `;
};
