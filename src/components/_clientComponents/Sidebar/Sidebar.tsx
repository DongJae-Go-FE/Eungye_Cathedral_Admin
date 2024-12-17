"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    {
      id: 0,
      href: "/",
      title: "메인",
    },
    {
      id: 1,
      href: "/news",
      title: "본당소식",
    },
    {
      id: 2,
      href: "/notices",
      title: "공지사항",
    },
    {
      id: 3,
      href: "/weeklys",
      title: "주보",
    },
  ];

  return (
    <div className="mt-20 min-h-[calc(100dvh-80px)] w-60 border border-t-0 border-gray-200 bg-white">
      <nav>
        <ul className="p-8">
          {menu.map(({ title, href, id }) => {
            return (
              <li key={id} className="h-12 text-body01b text-gray-400">
                <Link
                  className={`${pathname === href ? "text-black" : "text-gray-400"}`}
                  href={href}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
