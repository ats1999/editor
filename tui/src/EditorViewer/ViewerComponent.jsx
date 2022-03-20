import React, { useRef } from "react";
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";

// editor
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

// color syntax
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

// table merge cell
import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";

// code highliight
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

//https://github.com/PrismJS/prism-themes/tree/master/themes
import "prismjs/themes/prism-okaidia.css";

// katex
import "katex/dist/katex.min.css";

// prism components
// https://github.com/PrismJS/prism/tree/gh-pages/components
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-json.min.js";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-diff.min.js";
import "prismjs/components/prism-docker.min.js";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-tsx.min.js";

import customHTMLRenderer from "./customHTMLRenderer";

const umlOptions = {
  rendererURL: "https://www.plantuml.com/plantuml/svg/",
};

export default function ViewerComponent(props) {
  const viewerRef = useRef(null);
  const { md, theme } = props;

  React.useEffect(() => {
    window.viewer = viewerRef?.current.getInstance();
  }, [viewerRef]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Viewer
        ref={viewerRef}
        customHTMLRenderer={customHTMLRenderer}
        theme={theme}
        initialValue={md}
        plugins={[
          tableMergedCell,
          [uml, umlOptions],
          [codeSyntaxHighlight, { highlighter: Prism }],
        ]}
      />
    </div>
  );
}
