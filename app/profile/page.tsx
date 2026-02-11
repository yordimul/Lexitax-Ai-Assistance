"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, UserCircle } from "lucide-react";
import { useUser } from "../../context/UserContext"; // Adjust path

export default function ProfilePage() {
    // 1. Get user and setUser from context
    const { user, setUser } = useUser();

    // 2. Local state for form fields, initialized with context data
    const [name, setName] = useState(user?.username || "");
    const [email, setEmail] = useState(user?.email || "");

    // Optional: Sync local state if context changes externally
    useEffect(() => {
        if (user) {
            setName(user.username);
            setEmail(user.email);
        }
    }, [user]);

    const handleSaveChanges = () => {
        // 3. Update the global context
        setUser({
            username: name,
            email: email,
            // You can handle avatar uploading logic here in the future
        });
        alert("Profile updated successfully!");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-sm border border-slate-200">
                <Link
                    href="/chat/registerd"
                    className="flex items-center gap-2 text-slate-400 mb-6 text-sm hover:text-slate-600 font-bold"
                >
                    <ArrowLeft size={16} /> BACK TO CHAT
                </Link>
                
                <h1
                    className="text-2xl mb-6"
                    style={{ fontFamily: "Georgia, serif", fontWeight: 700 }}
                >
                    Update Profile
                </h1>

                {/* Profile Picture Placeholder */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-2 border-2 border-dashed border-slate-300">
                        <UserCircle size={64} className="text-slate-400" />
                    </div>
                    <button className="text-xs text-[#2B496C] font-semibold hover:underline">
                        Change Photo
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Full Name
                        </label>
                        <input
                            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#2B496C]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#2B496C]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <button 
                        onClick={handleSaveChanges}
                        className="w-full bg-[#2B496C] text-white py-3 rounded-lg font-bold hover:bg-[#1e344d] transition shadow-md"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}