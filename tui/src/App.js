import Editor from "./EditorViewer/EditorComponent";
import Viewer from "./EditorViewer/ViewerComponent";

function App() {
  return (
    <Viewer
      md={`
# Rahul

$$katex
\\sum
$$

\`\`\`js
const function test(){
  return "This is test string";
}
\`\`\`
    `}
      theme="dark"
    />
  );

  return <Editor getHTML={(html) => console.log(html)} />;
}

export default App;
