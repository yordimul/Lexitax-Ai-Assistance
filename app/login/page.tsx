import { Eye, X } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#676B67] via-[#AF9158] to-[#C39C55]" />
        <div className="absolute inset-0 backdrop-blur-md bg-slate-900/40" />
      </div>

      <div className="bg-white w-full max-w-[450px] rounded-xl shadow-2xl relative z-10 overflow-hidden">
        <Link href="/" className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition"><X size={20} /></Link>
        
        <div className="p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="flex flex-col items-center gap-1 mb-4">
               <div className="flex items-center gap-2">
                  <div className="bg-[#1e2d40] p-1 rounded text-white"><span className="text-sm">⚖️</span></div>
                  <span className="text-2xl font-bold text-[#1e2d40] tracking-tight">LexiTax</span>
               </div>
               <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase -mt-1">AI Assistant</span>
            </div>
            <h1 className="text-[28px] text-slate-800 mb-1" style={{ fontFamily: "Georgia, serif", fontWeight: 700 }}>Welcome Back</h1>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 font-sans">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#2B496C]" />
            </div>
            <div className="relative">
              <label className="block text-sm font-bold text-slate-700 mb-2 font-sans">Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 border border-slate-200 rounded-lg outline-none" />
              <Eye className="absolute right-3 top-10 text-slate-400" size={18} />
            </div>
            <button type="submit" className="w-full bg-[#2B496C] text-white py-3 rounded-lg font-bold hover:bg-[#1e344d] transition shadow-md">Sign In</button>
          </form>
          <p className="text-center mt-8 text-sm text-slate-500">Don't have an account? <Link href="/register" className="text-[#2B496C] font-bold hover:underline">Create one</Link></p>
        </div>
      </div>
    </div>
  );
}