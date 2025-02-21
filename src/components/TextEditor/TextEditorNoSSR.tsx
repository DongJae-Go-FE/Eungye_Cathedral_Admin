"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import Spinner from "@/components/Spinner";

const TextEditor = dynamic(() => import("./TextEditor"), {
  ssr: false,
});

export default function TextEditorNoSSR({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[400px]">
      {isLoading ? <Spinner /> : <TextEditor defaultValue={defaultValue} />}
    </div>
  );
}
