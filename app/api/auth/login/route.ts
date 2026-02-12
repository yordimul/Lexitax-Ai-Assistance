import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import User from '@/model/User';

// Ensure you have JWT_SECRET in your .env.local file
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    // 1. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // 3. Create Session Token (JWT)
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1d' } // Token expires in 1 day
    );

    // 4. Set HttpOnly Cookie
    const response = NextResponse.json({ 
      success: true, 
      message: "Logged in successfully",
      user: { id: user._id, username: user.username, email: user.email }
    });

    response.cookies.set('token', token, {
      httpOnly: true, // Prevents JavaScript from reading the cookie
      secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
      sameSite: 'strict', // Protects against CSRF attacks
      maxAge: 60 * 60 * 24, // 1 day in seconds
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}