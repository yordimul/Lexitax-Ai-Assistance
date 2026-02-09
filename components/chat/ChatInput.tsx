import { SendHorizonal } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="p-6 bg-white">
      <div className="max-w-3xl mx-auto relative">
        <input 
          type="text"
          placeholder="Ask a tax law question..."
          className="w-full p-4 pr-14 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AF9158]/20 focus:border-[#AF9158] transition font-sans text-slate-700"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-200 text-slate-500 rounded-lg hover:bg-[#AF9158] hover:text-white transition">
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
}