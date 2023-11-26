"use client";
import dynamic from "next/dynamic";

const EditorJsComponent = dynamic(() => import("./EditorJsComponent"), {
  ssr: false,
});
export default function Page() {
  return (
    <div>
      <EditorJsComponent id="editor-test" />
    </div>
  );
}
