"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { doLogout } from "@/actions/loginActions";

export default function Header() {
  const searchUrl = usePathname();

  if (searchUrl.includes("login")) return null;

  return (
    <header className="fixed left-0 top-0 flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white pl-5 pr-[54px]">
      <h1>
        <Link href="/">
          <Image
            width={128}
            height={71}
            src="/logo.png"
            alt="은계성당 로고 입니다."
            className="aspect-auto h-auto w-auto"
            priority
          />
        </Link>
      </h1>
      <div className="flex items-center gap-x-2">
        <p className="text-body02m">admin@naver.com</p>
        <button
          className="h-10 rounded-md border border-gray-200 px-4 text-body02m"
          onClick={doLogout}
        >
          로그아웃
        </button>
      </div>
    </header>
  );
}
