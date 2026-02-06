"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  
  // Logic to determine which page we are on
  const isLanding = pathname === "/";
  const isGuest = pathname.includes("guest"); 
  const isRegistered = pathname.includes("dashboard") || pathname.includes("chat");

  // 1. Landing Page Style (Transparent)
  if (isLanding) {
    return (
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-transparent">
        <Logo color="text-white" />
        <Link href="/login" className="text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition">
          Login
        </Link>
      </header>
    );
  }

  // 2. App Style (White background for Guest & Registered)
  return (
    <header className="w-full flex justify-between items-center px-6 py-3 bg-white border-b border-gray-100 shadow-sm">
      <Logo color="text-slate-900" />
      
      <div className="flex items-center gap-3">
        {isGuest ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">GUEST MODE</span>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs">G</div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-600">Yordanos Mulugeta</span>
            <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-white text-xs">YM</div>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-slate-900 p-1.5 rounded-lg">
        <Scale size={18} className="text-white" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold ${color}`}>Lexi<span className="text-amber-500">Tax</span></span>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">AI Assistant</span>
      </div>
    </div>
  );
}