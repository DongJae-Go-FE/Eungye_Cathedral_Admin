"use client";

import { useRouter } from "next/navigation";

import { useState, useActionState, KeyboardEvent } from "react";

import Button from "@/components/Button";

export default function FormSearch() {
  const { push } = useRouter();

  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  //TODO. 검색 백엔드 추가 후 쿼리스트링 구현 필요 - DongJae
  const handleSubmit = () => {
    console.log("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      push(`/`);
    }
  };

  const handleReset = () => {
    setSearch("");
  };

  const [state, formAction, isPending] = useActionState(handleSubmit, null);

  console.log(state);

  return (
    <div className="rounded-md bg-gray-100 px-10 py-6">
      <form action={formAction}>
        <label htmlFor="search" className="mb-2 block text-body01b">
          검색
        </label>
        <div className="flex h-12 items-center gap-x-2 rounded border border-gray-200 bg-white px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.33325 6.7085C2.33325 4.29225 4.29201 2.3335 6.70825 2.3335C9.1245 2.3335 11.0833 4.29225 11.0833 6.7085C11.0833 9.12474 9.1245 11.0835 6.70825 11.0835C4.29201 11.0835 2.33325 9.12474 2.33325 6.7085ZM6.70825 3.50016C4.93634 3.50016 3.49992 4.93658 3.49992 6.7085C3.49992 8.48041 4.93634 9.91683 6.70825 9.91683C8.48017 9.91683 9.91658 8.48041 9.91658 6.7085C9.91658 4.93658 8.48017 3.50016 6.70825 3.50016Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.625 8.7998L11.4958 10.6706C11.7236 10.8984 11.7236 11.2678 11.4958 11.4956C11.268 11.7234 10.8987 11.7234 10.6709 11.4956L8.80004 9.62476L9.625 8.7998Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
          </svg>
          <input
            id="search"
            type="search"
            value={search}
            placeholder="검색어를 입력하세요."
            className="h-full w-full text-body01m outline-none"
            disabled={isPending}
            maxLength={50}
            onChange={(e) => setSearch(e.target.value)}
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
          <Button type="submit" color="black" disabled={isPending}>
            검색
          </Button>
          <Button
            color="blue"
            type="reset"
            disabled={isPending}
            onClick={handleReset}
          >
            초기화
          </Button>
        </div>
      </form>
    </div>
  );
}
