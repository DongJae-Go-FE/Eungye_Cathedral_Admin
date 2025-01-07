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
          className={`flex h-12 items-center gap-x-2 rounded border px-4 ${isFocus ? "border-gray-800" : "border-gray-200"} ${isLoading ? "bg-[#efefef4d]" : "bg-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 246"
            fill="none"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.66699 7.66669C2.66699 4.90526 4.90557 2.66669 7.66699 2.66669C10.4284 2.66669 12.667 4.90526 12.667 7.66669C12.667 10.4281 10.4284 12.6667 7.66699 12.6667C4.90557 12.6667 2.66699 10.4281 2.66699 7.66669ZM7.66699 4.00002C5.64195 4.00002 4.00033 5.64164 4.00033 7.66669C4.00033 9.69173 5.64195 11.3334 7.66699 11.3334C9.69204 11.3334 11.3337 9.69173 11.3337 7.66669C11.3337 5.64164 9.69204 4.00002 7.66699 4.00002Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 10.0571L13.1381 12.1952C13.3984 12.4555 13.3984 12.8777 13.1381 13.138C12.8777 13.3984 12.4556 13.3984 12.1953 13.138L10.0572 10.9999L11 10.0571Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
          </svg>
          <input
            id="search"
            type="search"
            value={formSearch}
            placeholder="제목을 입력하세요."
            className="h-full w-full text-body01m outline-none"
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
