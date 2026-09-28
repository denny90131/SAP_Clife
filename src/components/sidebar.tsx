// components/Sidebar.tsx
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5 flex flex-col gap-4">
      <div className="text-xl font-bold pb-4 border-b border-slate-700">
        我的後台系統
      </div>
      
      {/* 導覽連結：在 Next.js 中換頁請使用 Link */}
      <nav className="flex flex-col gap-2">
        <Link 
          href="/" 
          className="p-2.5 rounded-lg hover:bg-slate-800 transition"
        >
          首頁
        </Link>
        <Link 
          href="/dashboard" 
          className="p-2.5 rounded-lg hover:bg-slate-800 transition"
        >
          儀表板
        </Link>
        <Link 
          href="/settings" 
          className="p-2.5 rounded-lg hover:bg-slate-800 transition"
        >
          系統設定
        </Link>
      </nav>
    </aside>
  );
}