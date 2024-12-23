"use client";

import Image from "next/image";
import { useState, useRef, HTMLAttributes } from "react";

//TODO. 업로드 구현 필요

interface ImageUploadType extends HTMLAttributes<HTMLInputElement> {
  alt?: string;
}

export default function ImageUpload({ alt, ...props }: ImageUploadType) {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleFileImage = (fileBlob: React.ChangeEvent<HTMLInputElement>) => {
    if (
      uploadRef.current &&
      fileBlob.target.files &&
      fileBlob.target.files[0]
    ) {
      const fileUrl = URL.createObjectURL(fileBlob.target.files[0]);

      setFileName(
        uploadRef.current.value.substring(
          uploadRef.current.value.lastIndexOf("\\") + 1,
          uploadRef.current.value.length,
        ),
      );
      setImgSrc(fileUrl);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-x-2">
        <label
          htmlFor="upload"
          className="inline-flex h-10 cursor-pointer items-center rounded-md border px-4 text-body02m"
        >
          이미지 업로드
        </label>
        <input
          type="file"
          name=""
          id="upload"
          ref={uploadRef}
          hidden
          onChange={handleFileImage}
          {...props}
        />
        {fileName && <p className="text-body02m text-blue-200">{fileName}</p>}
      </div>
      {imgSrc && (
        <div className="mt-2">
          <Image
            src={imgSrc}
            width={100}
            height={100}
            alt={alt ? alt : "이미지 설명"}
          />
        </div>
      )}
    </div>
  );
}
