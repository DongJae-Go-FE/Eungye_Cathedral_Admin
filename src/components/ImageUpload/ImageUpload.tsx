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
          className={`inline-flex h-10 ${isLoading ? "pointer-events-none cursor-auto" : "cursor-pointer"} items-center gap-x-1 rounded-md border px-4 text-body02m`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 44 41"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.04195 1.59209C5.23517 0.664653 6.05256 0 6.99991 0H36.9999C37.9473 0 38.7647 0.664653 38.9579 1.59209L43.9579 25.5921C44.1832 26.6734 43.4892 27.7327 42.4078 27.958C41.3265 28.1832 40.2672 27.4893 40.042 26.4079L35.3736 4H8.62619L3.95788 26.4079C3.73259 27.4893 2.67336 28.1832 1.59201 27.958C0.510654 27.7327 -0.183328 26.6734 0.0419533 25.5921L5.04195 1.59209Z"
              fill="#000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 26C0 24.8954 0.89543 24 2 24H12.9091C13.7903 24 14.5676 24.5767 14.8231 25.42L16.211 30H27.789L29.1769 25.42C29.4324 24.5767 30.2097 24 31.0909 24H42C43.1046 24 44 24.8954 44 26V39C44 40.1046 43.1046 41 42 41H2C0.89543 41 0 40.1046 0 39V26ZM4 28V37H40V28H32.5747L31.1868 32.58C30.9312 33.4233 30.1539 34 29.2727 34H14.7273C13.8461 34 13.0688 33.4233 12.8132 32.58L11.4253 28H4Z"
              fill="#000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5858 17.4142C15.3668 18.1953 16.6332 18.1953 17.4142 17.4142L22 12.8284L26.5858 17.4142C27.3668 18.1953 28.6332 18.1953 29.4142 17.4142C30.1953 16.6332 30.1953 15.3668 29.4142 14.5858L23.4142 8.58579C22.6332 7.80474 21.3668 7.80474 20.5858 8.58579L14.5858 14.5858C13.8047 15.3668 13.8047 16.6332 14.5858 17.4142Z"
              fill="#000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 8C23.1046 8 24 8.89543 24 10V22C24 23.1046 23.1046 24 22 24C20.8954 24 20 23.1046 20 22V10C20 8.89543 20.8954 8 22 8Z"
              fill="#000"
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
          <p className="inline-flex items-center gap-x-1 text-body02m text-blue-200">
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
        <div className="relative mt-2 h-[300px] w-[300px] animate-pulse rounded bg-gray-200">
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
            <div className="absolute right-0 top-0">
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

      <span className="mt-1 flex items-center text-body02m text-gray-600">
        <span className="relative top-0.5 text-red-500">*</span> 파일 확장자는
        jpeg, png만 가능하고 file size는 10MB 이하만 가능합니다.
      </span>
    </div>
  );
}
