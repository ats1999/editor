const ImageTool = require("@editorjs/image");

const imageToolConfig = (fileUploader) => {
  return {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile: async (file, id) => {
          const res = await fileUploader(file, id);
          return {
            success: 1,
            file: {
              url: res.data.url,
            },
          };
        },
        uploadByUrl: async (url, id) => {
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
