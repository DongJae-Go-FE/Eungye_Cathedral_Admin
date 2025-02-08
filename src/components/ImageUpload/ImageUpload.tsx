"use client";

import Image from "next/image";
import { useState, HTMLAttributes } from "react";
import Button from "../Button";
import Spinner from "../Spinner";

interface ImageUploadType extends HTMLAttributes<HTMLInputElement> {
  alt?: string;
  defaultValue?: string;
}

export default function ImageUpload({
  alt,
  defaultValue = "",
  ...props
}: ImageUploadType) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(defaultValue);
  const [imageName, setImageName] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);

      if (file.size > 10 * 1024 * 1024) {
        alert("파일 크기가 10MB를 초과합니다. 다른 파일을 선택해 주세요.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file, file.name);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/images/upload`,
          {
            method: "POST",
            body: formData,
          },
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`파일 업로드 실패, ${errorText}`);
        }

        const data = await response.json();
        setImageUrl(data.url);
        setImageName(file.name);
      } catch (error) {
        alert("사진은 jpeg, png만 가능합니다.");
        console.error("업로드 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleImageDel = () => {
    setImageUrl("");
    setImageName("");
  };

  return (
    <div>
      <div className="flex items-center gap-x-2">
        <label
          htmlFor="file"
          className={`inline-flex h-10 ${isLoading ? "pointer-events-none cursor-auto" : "cursor-pointer"} text-body02m items-center gap-x-1 rounded-md border border-gray-200 px-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2513 5.41663C11.5735 5.41663 11.8346 5.67779 11.8346 5.99996L11.8346 11.25C11.8346 11.5721 11.5735 11.8333 11.2513 11.8333L0.751302 11.8333C0.429136 11.8333 0.167969 11.5721 0.167969 11.25L0.167969 6.00238C0.167969 5.68021 0.429136 5.41905 0.751302 5.41905C1.07347 5.41905 1.33464 5.68021 1.33464 6.00238L1.33464 10.6666L10.668 10.6666V5.99996C10.668 5.67779 10.9291 5.41663 11.2513 5.41663Z"
              fill="#111111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.58882 0.33748C5.81663 0.109674 6.18597 0.109674 6.41378 0.33748L9.03878 2.96248C9.26659 3.19029 9.26659 3.55963 9.03878 3.78744C8.81097 4.01524 8.44163 4.01524 8.21382 3.78744L6.0013 1.57492L3.78878 3.78744C3.56098 4.01524 3.19163 4.01524 2.96382 3.78744C2.73602 3.55963 2.73602 3.19029 2.96382 2.96248L5.58882 0.33748Z"
              fill="#111111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.9974 0.166626C6.31956 0.166626 6.58073 0.427793 6.58073 0.749959L6.58073 8.33329C6.58073 8.65546 6.31956 8.91663 5.9974 8.91663C5.67523 8.91663 5.41406 8.65546 5.41406 8.33329L5.41406 0.749959C5.41406 0.427793 5.67523 0.166626 5.9974 0.166626Z"
              fill="#111111"
            />
          </svg>
          이미지 업로드
        </label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpeg, .png"
          disabled={isLoading}
          hidden
          {...props}
          onChange={handleFileChange}
        />
        {imageName && (
          <p className="text-body02m inline-flex items-center gap-x-1 text-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.3641 10.565C33.4883 7.44083 38.5536 7.44083 41.6778 10.565C44.802 13.6892 44.802 18.7545 41.6778 21.8787L24.0001 39.5564C19.7044 43.8522 12.7396 43.8522 8.4438 39.5564C4.14803 35.2606 4.14803 28.2958 8.4438 24.0001L23.293 9.15081C24.0741 8.36976 25.3404 8.36976 26.1215 9.15081C26.9025 9.93186 26.9025 11.1982 26.1215 11.9792L11.2722 26.8285C8.53855 29.5621 8.53855 33.9943 11.2722 36.728C14.0059 39.4616 18.438 39.4616 21.1717 36.728L38.8494 19.0503C40.4115 17.4882 40.4115 14.9555 38.8494 13.3934C37.2873 11.8314 34.7546 11.8314 33.1925 13.3934L15.5149 31.0711C15.1243 31.4616 15.1243 32.0948 15.5149 32.4853C15.9054 32.8759 16.5386 32.8759 16.9291 32.4853L31.7783 17.6361C32.5594 16.855 33.8257 16.855 34.6067 17.6361C35.3878 18.4171 35.3878 19.6835 34.6067 20.4645L19.7575 35.3138C17.8049 37.2664 14.6391 37.2664 12.6864 35.3138C10.7338 33.3611 10.7338 30.1953 12.6864 28.2427L30.3641 10.565Z"
                fill="#111111"
              />
            </svg>
            {imageName}
          </p>
        )}
      </div>
      {isLoading ? (
        <div className="relative mt-2 h-[300px] w-[300px] animate-pulse rounded-sm bg-gray-200">
          <Spinner />
        </div>
      ) : (
        imageUrl && (
          <div className="relative mt-2 w-[300px]">
            <Image
              src={imageUrl}
              width={300}
              height={300}
              alt={alt ? alt : "이미지 설명"}
            />
            <div className="absolute top-0 right-0">
              <Button
                type="button"
                size="xs"
                color="blue"
                onClick={handleImageDel}
              >
                사진 삭제
              </Button>
            </div>
            <label htmlFor="imageUrl" className="hidden">
              이미지 주소
            </label>
            <input
              type="hidden"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              hidden
              readOnly
            />
          </div>
        )
      )}

      <span className="text-body02m mt-1 flex items-center text-gray-600">
        <span className="relative top-0.5 text-red-500">*</span> 파일 확장자는
        jpeg, png만 가능하고 파일 크기는 10MB 이하 1장만 가능합니다.
      </span>
    </div>
  );
}
