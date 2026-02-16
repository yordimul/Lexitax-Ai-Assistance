"use client";
import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import { useUser } from "./../../../context/UserContext";

// Define the structure of a message
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function RegisteredChat() {
  const { user } = useUser();
  
  // 1. State to hold the chat history
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null); // Track the chat ID

  // Hardcoded sidebar history for now
  const history = [
    { id: "1", title: "Corporate Tax Deductions", date: "Dec 15, 2024" },
    { id: "2", title: "VAT Registration Requirements", date: "Dec 12, 2024" },
  ];

  // 2. Function to handle sending a message
  const handleSendMessage = async (userMessage: string) => {
    // A. Add user message to UI immediately
    const newUserMessage: Message = { role: 'user', content: userMessage };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // B. Call our updated API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            message: userMessage,
            chatId: currentChatId // Pass existing ID if we have one
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      // C. Save the chatId for future messages in this conversation
      if (data.chatId) {
        setCurrentChatId(data.chatId);
      }

      // D. Add AI response to UI
      const aiResponseMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, aiResponseMessage]);

    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar isGuest={false} history={history} user={user} />
      
      <main className="flex-1 flex flex-col">
        <ChatHeader isGuest={false} user={user} />
        
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: "Georgia, serif" }}>
                How can I help you today, {user ? user.username : "User"}?
              </h2>
              <p className="text-slate-500">Ask any question about ethiopian tax law.</p>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-4 rounded-lg ${msg.role === 'user' ? 'bg-[#2B496C] text-white' : 'bg-slate-100 text-slate-800'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-800 p-4 rounded-lg animate-pulse">
                AI is thinking...
              </div>
            </div>
          )}
        </div>

        {/* 3. Pass handler and loading state to Input */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  );
}