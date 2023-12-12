"use client";
import dynamic from "next/dynamic";

const EditorJsComponent = dynamic(() => import("./EditorJsComponent"), {
  ssr: false,
});
export default function Page() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <EditorJsComponent
          id="editor-test"
          onChange={(d: any) => console.log(d)}
        />
      </div>
    </div>
  );
}
