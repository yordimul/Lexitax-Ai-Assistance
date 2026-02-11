"use client";
import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import { useUser } from "./../../../context/UserContext";

export default function RegisteredChat() {
  // Now 'user' is type { username: string } | null
  const { user, setUser } = useUser();
  
  const history = [
    { id: "1", title: "Corporate Tax Deductions", date: "Dec 15, 2024" },
    { id: "2", title: "VAT Registration Requirements", date: "Dec 12, 2024" },
    { id: "3", title: "Personal Income Tax Rates", date: "Nov 20, 2024" },
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Pass the whole user object or null. 
        Ensure ChatSidebar expects props: { user: { username: string } | null }
      */}
      <ChatSidebar isGuest={false} history={history} user={user} />
      
      <main className="flex-1 flex flex-col">
        {/* Pass the user object to the header */}
        <ChatHeader  isGuest={false} user={user} />
        
        <div className="flex-1 flex flex-col items-center justify-center">
           <h2 className="text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: "Georgia, serif" }}>
             {/* Dynamic greeting using user.username */}
             How can I help you today, {user ? user.username : "User"}?
           </h2>
           <p className="text-slate-500">Ask any question about Nigerian tax law.</p>
        </div>

        <ChatInput />
      </main>
    </div>
  );
}