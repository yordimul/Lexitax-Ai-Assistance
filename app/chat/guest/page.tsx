import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatSuggestions from "@/components/chat/ChatSuggestions";
import ChatInput from "@/components/chat/ChatInput";

export default function GuestChatPage() {
  return (
    <div className="flex h-screen bg-white">
      {/* 1. Shared Sidebar (Guest View) */}
      <ChatSidebar isGuest={true} />

      <main className="flex-1 flex flex-col">
        {/* 2. Shared Header (Guest View) */}
        <ChatHeader isGuest={true} queriesLeft={3} />

        {/* 3. Main Chat Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <ChatSuggestions />
        </div>

        {/* 4. Shared Input Area */}
        <ChatInput />
      </main>
    </div>
  );
}