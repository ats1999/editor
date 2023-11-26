import { useEffect, useRef } from "react";
// @ts-ignore
import EditorJSEditor from "editor-js-editor";

export default function EditorJsComponent({ id }: any) {
  const editorRef = useRef<any>();

  useEffect(() => {
    if (editorRef.current) {
      return;
    }

    debugger;
    const editor = EditorJSEditor({
      holder: id,
      onChange: (data: any) => console.log(data),
    });

    editorRef.current = editor;
    (window as any).editor = editor;

    return () => {
      if (editorRef && editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        delete (window as any).editor;
      }
    };
  }, []);

  return <div id={id} />;
}
