import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import User from '@/model/User';

export async function POST(req: Request) {
  try {
    // 1. Connect to DB
    await dbConnect();

    // 2. Get data from request body
    const { username, email, password } = await req.json();

    // 3. Validation
    if (!username || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 4. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // 5. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 6. Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // 7. Save to DB
    await newUser.save();

    return NextResponse.json({ 
      success: true, 
      message: "User registered successfully",
      user: { id: newUser._id, username: newUser.username, email: newUser.email }
    }, { status: 201 });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}