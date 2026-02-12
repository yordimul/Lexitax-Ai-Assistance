import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import User from '@/model/User';
import { cookies } from 'next/headers';
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export async function GET(req: Request) {
  try {
    await dbConnect();

    // 1. Get token from cookies
    // Note: Next.js Request object doesn't directly have .cookies in route handlers
    // We use the 'next/headers' function instead
    const cookieStore = await cookies(); // <--- Await here!
    const token = cookieStore.get('token')?.value;
    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    // 2. Verify token
    const decoded: any = jwt.verify(token, JWT_SECRET);

    // 3. Find user in DB
    const user = await User.findById(decoded.userId).select('-password'); // Don't return password!

    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({ 
      user: { id: user._id, username: user.username, email: user.email } 
    });

  } catch (error) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}