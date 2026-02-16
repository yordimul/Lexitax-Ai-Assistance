import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import User from '@/model/User';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export async function PATCH(req: Request) {
  try {
    await dbConnect();

    // 1. Authenticate user
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded: any = jwt.verify(token, JWT_SECRET);
    
    // 2. Get data from frontend
    const { username, password } = await req.json();

    // 3. Prepare update object
    const updateData: any = { username };
    
    // If a new password is provided, hash it
    if (password && password.length > 0) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    // 4. Update user in DB
    const updatedUser = await User.findByIdAndUpdate(
      decoded.userId,
      updateData,
      { new: true } // Return the updated document
    ).select('-password'); // Don't return the hashed password

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true,
      user: { id: updatedUser._id, username: updatedUser.username, email: updatedUser.email } 
    });

  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}