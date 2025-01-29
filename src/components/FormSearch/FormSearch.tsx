"use client";

import { useState, KeyboardEvent } from "react";

import Button from "@/components/Button";

type FormType = {
  handleSearch?: (e: string) => void;
  isLoading?: boolean;
};

export default function FormSearch({ handleSearch, isLoading }: FormType) {
  const [formSearch, setFormSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = () => {
    if (handleSearch) handleSearch(formSearch || "");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && handleSearch) {
      e.preventDefault();
      handleSearch(e.currentTarget.value);
    }
  };

  const handleReset = () => {
    if (handleSearch) {
      setFormSearch((prev) => {
        prev = "";
        return prev;
      });
      handleSearch("");
    }
  };

  return (
    <div className="rounded-md bg-gray-100 px-10 py-6">
      <form>
        <label htmlFor="search" className="mb-2 block text-body01b">
          검색
        </label>
        <div
          className={`flex h-12 items-center gap-x-2 rounded-sm border px-4 ${isFocus ? "border-gray-800" : "border-gray-200"} ${isLoading ? "bg-[#efefef4d]" : "bg-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 43 43"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19ZM19 4C10.7157 4 4 10.7157 4 19C4 27.2843 10.7157 34 19 34C27.2843 34 34 27.2843 34 19C34 10.7157 27.2843 4 19 4Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.8075 29.8075C30.5885 29.0265 31.8548 29.0265 32.6359 29.8075L41.1212 38.2928C41.9022 39.0739 41.9022 40.3402 41.1212 41.1212C40.3401 41.9023 39.0738 41.9023 38.2927 41.1212L29.8075 32.636C29.0264 31.8549 29.0264 30.5886 29.8075 29.8075Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
          </svg>
          <input
            id="search"
            type="search"
            value={formSearch}
            placeholder="제목을 입력하세요."
            className="h-full w-full text-body01m outline-hidden"
            maxLength={50}
            disabled={isLoading}
            onChange={(e) => setFormSearch(e.target.value)}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
        </div>
        <div className="mt-4 flex justify-end gap-x-1">
          <Button
            color="blue"
            type="reset"
            disabled={isLoading}
            onClick={handleReset}
          >
            초기화
          </Button>
          <Button
            type="button"
            color="black"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            검색
          </Button>
        </div>
      </form>
    </div>
  );
}
