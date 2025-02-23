import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import QueryProvider from "@/components/provider/QueryProvider";

const pretendard = localFont({
  src: "fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "은계성당 관리자 페이지",
  description: "은계성당 관리자",
  robots: "noindex,nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <QueryProvider>
          <Header />
          <div>
            <Sidebar />
            <main>{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
