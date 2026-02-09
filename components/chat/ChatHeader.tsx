interface HeaderProps {
    isGuest: boolean;
    userName?: string;
    queriesLeft?: number;
  }
  
  export default function ChatHeader({ isGuest, userName, queriesLeft }: HeaderProps) {
    return (
      <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white">
        <div>
          {isGuest && (
            <div className="flex items-center gap-2 text-xs font-medium py-1.5 px-3 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
              <span className="animate-pulse">⚠️</span>
              Guest Mode — {queriesLeft} queries remaining
            </div>
          )}
        </div>
  
        <div className="flex items-center gap-4">
          {isGuest ? (
            <button className="bg-[#AF9158] hover:bg-[#967b4a] text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition">
              Sign In
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800">{userName}</p>
              </div>
              <div className="w-10 h-10 bg-[#1e2d40] text-white rounded-full flex items-center justify-center font-bold">
                {userName?.charAt(0)}
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }