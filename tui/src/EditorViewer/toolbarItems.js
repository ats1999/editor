// import { toggleFullScreen,previewStyleButton } from "./customButtons";
// import copy from 'copy-to-clipboard';
// import toc from 'md-to-toc';

export const items = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock']
]


export function toggleFullScreen(editorRef) {
    const imageUrl = "https://res.cloudinary.com/dsabyte/image/upload/v1625072659/toast/fullscreen-svgrepo-com_y4avfz.svg";

    const button = document.createElement('button');
    button.className = `toastui-editor-toolbar-icons ${'full-screen'}`;
    button.style.backgroundImage = 'none';
    button.style.margin = '0';
    button.innerHTML = `<img src=${imageUrl} alt='full screen  button'></img>`;

    button.addEventListener('click', (_) => {
        if (!editorRef || !editorRef.current)
            return;

        const el = editorRef.current.getRootElement();

        if (el.style.height != "100vh")
            el.style = "height:100vh; width:100vw; position:fixed;z-index:100000;top:0px;left:0px;background-color:white;";
        else el.style = "height:400px;"
    });

    return button;
}

export function previewStyleButton(handleClick) {
    const imageUrl = "https://res.cloudinary.com/dsabyte/image/upload/v1625105428/toast/preview-style_vevyy6.svg";

    const button = document.createElement('button');
    button.className = `toastui-editor-toolbar-icons ${'preview-style-button'}`;
    button.style.backgroundImage = 'none';
    button.style.margin = '0';
    button.innerHTML = `<img src=${imageUrl} alt='preview-style-button'></img>`;

    button.addEventListener('click',handleClick);

    return button;
}

export function darkMode(handleClick) {
    const imageUrl = "https://res.cloudinary.com/dsabyte/image/upload/v1625109031/toast/moon-svgrepo-com_xmuyw5.svg";

    const button = document.createElement('button');
    button.className = `toastui-editor-toolbar-icons ${'dark-mode-button'}`;
    button.style.backgroundImage = 'none';
    button.style.margin = '0';
    button.innerHTML = `<img src=${imageUrl} alt='dark-mode-button'></img>`;

    button.addEventListener('click',handleClick);

    return button;
}

// export function tocMake(editorRef) {
//     const baseImage =
//       'https://res.cloudinary.com/dsabyte/image/upload/v1636458893/toast/toc-1_m4orqu.svg'
//     const errorImage =
//       'https://res.cloudinary.com/dsabyte/image/upload/v1636459134/toast/error_ujbprt.svg'
//     const okImage =
//       'https://res.cloudinary.com/dsabyte/image/upload/v1636459135/toast/check_zm0a5w.svg'
  
//     const button = document.createElement('button')
//     button.className = `toastui-editor-toolbar-icons ${'toc-make-button'}`
//     button.style.backgroundImage = 'none'
//     button.style.margin = '0'
  
//     button.innerHTML = `<img src=${baseImage} alt='dark-mode-button'></img>`
  
//     button.addEventListener('click', () => {
//       try {
//         const md = editorRef?.current?.getInstance()?.getMarkdown() || ''
  
//         const tocContent = toc(md, {
//           firsth1: false,
//           slugify: (anchor) =>
//             anchor
//               .replace(/[^\w\s]/gi, ' ')
//               .trim()
//               .replace(/ +/g, ' ')
//               .split(' ')
//               .join('-')
//               .toLocaleLowerCase()
//         }).content
  
//         let copied = copy("\n## Table of contents\n"+tocContent)
//         if (copied)
//           button.innerHTML = `<img src=${okImage} alt='dark-mode-button'></img>`
//         else throw 'Copy Error'
//       } catch (e) {
//         console.log(e)
//         button.innerHTML = `<img src=${errorImage} alt='dark-mode-button'></img>`
//       } finally {
//         setTimeout(() => {
//           button.innerHTML = `<img src=${baseImage} alt='dark-mode-button'></img>`
//         }, 500)
//       }
//     })
  
//     return button
//   }
  