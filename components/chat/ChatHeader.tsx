interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface HeaderProps {
  isGuest: boolean;
  user?: User | null; // This is where the dynamic name comes from
  queriesLeft?: number;
}

export default function ChatHeader({ isGuest, user, queriesLeft }: HeaderProps) {
  // We extract the first letter for the profile circle
  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "?";

  return (
    <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white">
      <div>
        {isGuest && (
          <div className="flex items-center gap-2 text-xs font-medium py-1.5 px-3 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
            Guest Mode — {queriesLeft} queries remaining
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {isGuest || !user ? (
          <button className="bg-[#AF9158] hover:bg-[#967b4a] text-white px-5 py-2 rounded-lg text-sm font-bold transition">
          <a href="/login"> Sign In</a> 
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <div className="text-right">
              {/* This is now dynamic! */}
              <p className="text-sm font-bold text-slate-800">{user.name}</p>
            </div>
            <div className="w-10 h-10 bg-[#1e2d40] text-white rounded-full flex items-center justify-center font-bold">
              {initials}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}