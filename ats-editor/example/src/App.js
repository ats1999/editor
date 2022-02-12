import React from 'react'

import Editor from 'ats-editor'
import 'ats-editor/dist/index.css'
import "./index.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-okaidia.css"
const App = () => {
  return <Editor text="Create React Library Example 😄" />
}

export default App
