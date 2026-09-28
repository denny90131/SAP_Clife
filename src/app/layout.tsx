import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/sidebar"; // 引入剛才建立的側邊欄
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="flex min-h-screen antialiased">
        {/* 1. 左側：固定放置側邊欄 */}
        <Sidebar />

        {/* 2. 右側：主要的動態頁面內容 (page.tsx 會出現在這裡) */}
        <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}