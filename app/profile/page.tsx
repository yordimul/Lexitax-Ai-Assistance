"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext"; // Adjust path
import { User, Mail, Lock, LogOut, Save } from "lucide-react"; // Import icons

export default function ProfilePage() {
  const { user, setUser } = useUser();
  const router = useRouter();

  // State for form inputs
  const [username, setUsername] = useState(user?.username || "");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 1. Call API to update user in DB
      const response = await fetch("/api/auth/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      // 2. Update Context state to reflect new name
      setUser(data.user);
      setMessage("Profile updated successfully!");
      setPassword(""); // Clear password field
    } catch (error: any) {
      setMessage(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) return <div className="p-10 text-center">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "Georgia, serif" }}>Account Settings</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white hover:bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold border border-red-200 transition"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit">
            <div className="w-20 h-20 bg-[#1e2d40] text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-bold text-slate-900">{user.username}</h2>
            <p className="text-slate-500 text-sm flex items-center gap-2 mb-2">
              <Mail size={14} /> {user.email}
            </p>
          </div>

          {/* Edit Form */}
          <form onSubmit={handleUpdate} className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Edit Profile</h3>
            
            {message && (
              <div className={`p-3 rounded-lg text-sm ${message.includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {message}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#AF9158]/20 focus:border-[#AF9158] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Leave blank to keep current"
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#AF9158]/20 focus:border-[#AF9158] outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-[#2B496C] hover:bg-[#1e344d] text-white px-6 py-2.5 rounded-lg font-bold transition w-full justify-center disabled:opacity-50"
            >
              <Save size={18} />
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}