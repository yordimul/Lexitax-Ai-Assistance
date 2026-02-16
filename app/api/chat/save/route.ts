import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Chat from '@/model/Chat';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export async function POST(req: Request) {
  try {
    await dbConnect();

    // 1. Authenticate user
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded: any = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId;

    // 2. Get chat data from request
    const { chatId, message, title } = await req.json();

    let chat;
    if (chatId) {
      // If chatId exists, append message to existing chat
      chat = await Chat.findByIdAndUpdate(
        chatId,
        { $push: { messages: { role: 'user', content: message } } },
        { new: true }
      );
    } else {
      // Otherwise, create a new chat
      chat = await Chat.create({
        userId,
        title: title || "New Conversation",
        messages: [{ role: 'user', content: message }],
      });
    }

    return NextResponse.json({ success: true, chat });

  } catch (error) {
    console.error("Save chat error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}