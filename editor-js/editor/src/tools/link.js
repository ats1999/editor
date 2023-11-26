// @ts-ignore
const LinkTool = require("@editorjs/link");

const linkConfig = {
  class: LinkTool,
  config: {
    // TODO: fix it to return value dynamically
    // TODO: try to make request on client side
    endpoint: "https://api.dsabyte.com/crawl/url-meta-info",
  },
};

module.exports = linkConfig;
