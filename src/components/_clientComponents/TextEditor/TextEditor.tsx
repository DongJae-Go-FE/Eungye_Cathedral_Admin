"use client";

import { FC, useEffect, useRef } from "react";
import Quill from "quill";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

import "./style.css";

interface QuillEditorProps {
  placeholder?: string;
  defaultValue?: string;
}

const QuillEditor: FC<QuillEditorProps> = ({
  placeholder = "내용을 입력해주세요",
  defaultValue = "<p>내용을 입력해주세요.</p>",
}) => {
  const quillEditorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  //TODO. Clean Up 수정
  useEffect(() => {
    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"],
      ["link"],

      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ];
    if (quillEditorRef.current && !quillRef.current) {
      quillRef.current = new Quill(quillEditorRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder,
      });

      if (defaultValue) {
        const delta = quillRef.current.clipboard.convert({
          html: defaultValue,
        });
        quillRef.current.setContents(delta);
      }
    }
    return () => {};
  }, [placeholder, defaultValue]);

  return <div ref={quillEditorRef} className="h-full" />;
};

export default QuillEditor;
