const ImageTool = require("@editorjs/image");

const imageToolConfig = (fileUploader) => {
  return {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile: async (file) => {
          const res = await fileUploader(file);
          return {
            success: 1,
            file: {
              url: res.data.url,
            },
          };
        },
        uploadByUrl: async (url) => {
          await Promise.resolve();
          return {
            success: 1,
            file: {
              url,
            },
          };
        },
      },
    },
  };
};

module.exports = imageToolConfig;
