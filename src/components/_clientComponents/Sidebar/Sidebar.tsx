"use client";

import Link from "next/link";
import MenuArr from './menu'
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="mt-20 w-60 min-h-[calc(100dvh-80px)] border border-gray-200 bg-white">
      <ul className="p-8">
        {MenuArr.map(({title,href},index)=>{
          return(
            <li key={index} className="text-body01b text-gray-400 h-12">
              <Link className={`${pathname === href ? "text-black" : "text-gray-400"}`} href={href}>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}