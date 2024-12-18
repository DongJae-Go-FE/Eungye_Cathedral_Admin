import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/_clientComponents/Header";
import Sidebar from "@/components/_clientComponents/Sidebar";

const pretendard = localFont({
  src: "fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "은계성당 관리자 페이지",
  description: "은계성당 관리자 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
