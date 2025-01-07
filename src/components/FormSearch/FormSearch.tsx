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
            width={20}
            height={20}
            color={isFocus ? "#000" : "#ddd"}
            aria-hidden
          >
            <use href="icons/outlined/base.svg#Outlined/Base/search" />
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
