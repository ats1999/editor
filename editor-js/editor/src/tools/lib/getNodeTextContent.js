function getNodeTextContent(node) {
  var text = "";

  // If the node is a text node, add its content to the result
  if (node.nodeType === Node.TEXT_NODE) {
    text += node.textContent;
  } else {
    // If the node has child nodes, recursively process them
    for (var i = 0; i < node.childNodes.length; i++) {
      text += getNodeTextContent(node.childNodes[i]);
    }
  }

  return text;
}

module.exports = getNodeTextContent;
