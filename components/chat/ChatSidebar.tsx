import { Lock, MessageSquare, Plus, Settings } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isGuest: boolean;
  history?: { id: string; title: string; date: string }[];
  // ✅ Updated to match Context: username and email
  user?: { username: string; email: string } | null; 
}

export default function ChatSidebar({ isGuest, history, user }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#1e2d40] text-white flex flex-col h-full">
      {/* Top Section: Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="bg-white/10 p-1 rounded">⚖️</div>
          <span className="font-bold text-xl tracking-tight">LexiTax</span>
        </div>
      </div>

      <div className="flex-1 px-4 overflow-y-auto">
        {isGuest ? (
          /* GUEST VIEW */
          <div className="mt-20 flex flex-col items-center text-center px-4">
            <div className="bg-white/5 p-4 rounded-full mb-4">
              <Lock className="text-white/40" size={32} />
            </div>
            <h4 className="font-bold text-sm mb-2">Guest Mode</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Sign in to save your conversations and access your history.
            </p>
          </div>
        ) : (
          /* AUTH VIEW */
          <div className="space-y-6">
            <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3 rounded-lg transition text-sm font-medium">
              <Plus size={18} /> New Conversation
            </button>
            
            <div className="space-y-4">
              {history?.map((chat) => (
                <div key={chat.id} className="group cursor-pointer">
                  <div className="flex items-center gap-3 text-sm text-white/80 group-hover:text-white">
                    <MessageSquare size={16} />
                    <span className="truncate">{chat.title}</span>
                  </div>
                  <span className="text-[10px] text-white/30 ml-7">{chat.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* NEW: Manage Profile Section (Fixed to Bottom) */}
      {!isGuest && (
        <div className="p-4 border-t border-white/10 mt-auto">
          <Link 
            href="/profile" 
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white/10 transition group"
          >
            <Settings size={18} className="text-white/50 group-hover:text-white" />
            <span className="text-sm font-medium text-white/70 group-hover:text-white">
              {/* Optional: Show username here */}
              {user?.username || "Manage Profile"}
            </span>
          </Link>
        </div>
      )}
    </aside>
  );
}