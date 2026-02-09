"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  
  // 1. User State: Initially null (Guest)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Simulate login logic: In a real app, this comes from your Auth Provider
  useEffect(() => {
    // If the path is not "guest", we assume a user is logged in for testing
    if (pathname.includes("dashboard") || (pathname.includes("chat") && !pathname.includes("guest"))) {
      setUser({ name: "Yordanos Mulugeta", email: "yordi@example.com" });
    } else {
      setUser(null);
    }
  }, [pathname]);

  const isLanding = pathname === "/";
  const isGuest = pathname.includes("guest") || !user;

  // Helper to get initials (e.g., "YM" from "Yordanos Mulugeta")
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // 1. Landing Page Style (Transparent)
  if (isLanding) {
    return (
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-transparent">
        <Logo color="text-white" />
        <Link href="/login" className="text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition font-sans font-bold">
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
          /* GUEST UI */
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-tighter">
               Guest Mode
             </div>
             <Link href="/login" className="bg-[#AF9158] text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:brightness-110 transition">
               Sign In
             </Link>
          </div>
        ) : (
          /* LOGGED IN UI */
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-700 font-sans">
              {user.name}
            </span>
            <div className="w-9 h-9 rounded-full bg-[#1e2d40] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              {getInitials(user.name)}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#1e2d40] p-1.5 rounded-lg shadow-sm">
        <Scale size={18} className="text-white" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold ${color} tracking-tight`}>
          Lexi<span className="text-[#AF9158]">Tax</span>
        </span>
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          AI Assistant
        </span>
      </div>
    </div>
  );
}