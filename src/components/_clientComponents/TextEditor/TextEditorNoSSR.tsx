"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import Spinner from "@/components/Spinner";

//todo.추후 수정 필요 ssr 문제

const TextEditor = dynamic(() => import("./TextEditor"), {
  ssr: false,
});

export default function TextEditorNoSSR() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[400px]">
      {isLoading ? <Spinner /> : <TextEditor />}
    </div>
  );
}
