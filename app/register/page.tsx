import { Eye, Check, X } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    /* This wrapper creates the blurred landing page effect as the background */
    <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 relative overflow-hidden">
      
      {/* 1. The Blurred Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* We use your Hero colors here to simulate the landing page behind the blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#676B67] via-[#AF9158] to-[#C39C55]" />
        <div className="absolute inset-0 backdrop-blur-md bg-slate-900/40" />
      </div>

      {/* 2. The Registration Card */}
      <div className="bg-white w-full max-w-[520px] rounded-xl shadow-2xl relative z-10 overflow-hidden">
        
        {/* Close Button - Redirects back to Landing Page */}
        <Link href="/" className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition">
          <X size={20} />
        </Link>

        <div className="px-12 py-10">
          {/* Logo & Branding */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex flex-col items-center gap-1 mb-4">
               <div className="flex items-center gap-2">
                  <div className="bg-[#1e2d40] p-1 rounded text-white shadow-sm">
                    <span className="text-sm">⚖️</span>
                  </div>
                  <span className="text-2xl font-bold text-[#1e2d40] tracking-tight">LexiTax</span>
               </div>
               <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase -mt-1">
                 AI Assistant
               </span>
            </div>
            
            <h1 className="text-[28px] text-slate-800 mb-1" style={{ fontFamily: "Georgia, serif", fontWeight: 700 }}>
              Create Account
            </h1>
            <p className="text-slate-500 text-sm font-sans">
              Get full access to tax law research
            </p>
          </div>

          {/* Social Auth */}
          <button className="w-full border border-slate-200 py-2.5 rounded-lg flex items-center justify-center gap-3 hover:bg-slate-50 transition font-medium text-slate-700 mb-6 font-sans">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            Continue with Google
          </button>

          <div className="relative mb-8 text-center">
            <hr className="border-slate-100" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[11px] text-slate-400 uppercase tracking-widest font-medium font-sans">
              or continue with email
            </span>
          </div>

          {/* Registration Form */}
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 font-sans">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-2.5 border border-slate-200 rounded-lg outline-none focus:border-[#2B496C] transition font-sans text-slate-800" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 font-sans">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full p-2.5 border border-slate-200 rounded-lg outline-none focus:border-[#2B496C] transition font-sans text-slate-800" />
            </div>

            <div className="space-y-1.5 relative">
              <label className="text-sm font-bold text-slate-700 font-sans">Password</label>
              <div className="relative">
                <input type="password" placeholder="••••••••" className="w-full p-2.5 border border-slate-200 rounded-lg outline-none pr-10 focus:border-[#2B496C] transition font-sans text-slate-800" />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" size={18} />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-sans"><Check size={12} /> At least 8 characters</span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-sans"><Check size={12} /> One uppercase letter</span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-sans"><Check size={12} /> One number</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 font-sans">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-2.5 border border-slate-200 rounded-lg outline-none focus:border-[#2B496C] transition font-sans text-slate-800" />
            </div>

            <button type="submit" className="w-full bg-[#2B496C] text-white py-3 rounded-lg font-bold hover:bg-[#1e344d] transition shadow-md mt-4 font-sans">
              Create Account
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center mt-6 text-sm text-slate-500 font-sans">
            Already have an account? <Link href="/login" className="text-[#2B496C] font-bold cursor-pointer hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}