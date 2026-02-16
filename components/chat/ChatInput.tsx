"use client";
import { useState } from "react";
import { SendHorizonal, Loader2 } from "lucide-react"; // Added a loader icon

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean; // Add this prop to show loading state
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return; // Don't send if loading
    
    onSendMessage(message);
    setMessage(""); // Clear input
  };

  return (
    <div className="p-6 bg-white border-t border-slate-100">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={isLoading ? "AI is thinking..." : "Ask a tax law question..."}
          disabled={isLoading}
          className="w-full p-4 pr-14 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AF9158]/20 focus:border-[#AF9158] transition font-sans text-slate-700 disabled:opacity-60"
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#AF9158] text-white rounded-lg hover:bg-[#967b4a] transition disabled:bg-slate-400"
        >
          {isLoading ? <Loader2 size={20} className="animate-spin" /> : <SendHorizonal size={20} />}
        </button>
      </form>
    </div>
  );
}