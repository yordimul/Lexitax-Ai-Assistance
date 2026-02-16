import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Chat from "@/model/Chat"; // ⬅️ Ensure this model exists
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function POST(req: Request) {
	try {
		await dbConnect();

		// 1. Authenticate user
		const cookieStore = await cookies();
		const token = cookieStore.get("token")?.value;

		if (!token) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const decoded: any = jwt.verify(token, JWT_SECRET);
		const userId = decoded.userId;

		// 2. Get chat data
		const { chatId, message, title } = await req.json();

		if (!message) {
			return NextResponse.json(
				{ error: "Message is required" },
				{ status: 400 }
			);
		}

		// 3. Simulate an AI response
		const simulatedAIResponse = `Simulated response to: "${message}"`;

		// 4. Save to Database
		let chat;
		if (chatId) {
			// Append to existing chat
			chat = await Chat.findByIdAndUpdate(
				chatId,
				{
					$push: {
						messages: [
							{ role: "user", content: message },
							{ role: "assistant", content: simulatedAIResponse },
						],
					},
				},
				{ new: true }
			);
		} else {
			// Create new chat
			chat = await Chat.create({
				userId,
				title: title || message.substring(0, 30) + "...",
				messages: [
					{ role: "user", content: message },
					{ role: "assistant", content: simulatedAIResponse },
				],
			});
		}

		// 5. Return the simulated response and the new chat ID
		return NextResponse.json({
			success: true,
			response: simulatedAIResponse,
			chatId: chat._id,
		});
	} catch (error) {
		console.error("Save chat error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
