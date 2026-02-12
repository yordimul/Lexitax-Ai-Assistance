"use client"; // 1. Must be a client component
import { Eye, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	// 2. State management
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			// 3. Call the Login API
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Login failed");
			}

			// 4. Success! Redirect to the registered chat page
			router.push("/chat/registerd");
			router.refresh(); // Refresh to update context/session
		} catch (err: any) {
			setError(err.message);
		}
	};

	return (
		<div className="min-h-screen w-full flex items-center justify-center py-12 px-4 relative overflow-hidden">
			{/* Blurred Background Layer */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-linear-to-b from-[#676B67] via-[#AF9158] to-[#C39C55]" />
				<div className="absolute inset-0 backdrop-blur-md bg-slate-900/40" />
			</div>

			<div className="bg-white w-full max-w-112.5 rounded-xl shadow-2xl relative z-10 overflow-hidden">
				<Link
					href="/"
					className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition"
				>
					<X size={20} />
				</Link>

				<div className="p-10">
					<div className="flex flex-col items-center mb-8">
						<div className="flex flex-col items-center gap-1 mb-4">
							<div className="flex items-center gap-2">
								<div className="bg-[#1e2d40] p-1 rounded text-white">
									<span className="text-sm">⚖️</span>
								</div>
								<span className="text-2xl font-bold text-[#1e2d40] tracking-tight">
									LexiTax
								</span>
							</div>
							<span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase -mt-1">
								AI Assistant
							</span>
						</div>
						<h1
							className="text-[28px] text-slate-800 mb-1"
							style={{ fontFamily: "Georgia, serif", fontWeight: 700 }}
						>
							Welcome Back
						</h1>
					</div>

					{/* 5. Attach handleSubmit to form */}
					<form onSubmit={handleLogin} className="space-y-5">
						{error && (
							<p className="text-red-500 text-sm text-center">{error}</p>
						)}
						<div>
							<label className="block text-sm font-bold text-slate-700 mb-2 font-sans">
								Email
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)} // Bind state
								placeholder="you@example.com"
								className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#2B496C]"
								required
							/>
						</div>
						<div className="relative">
							<label className="block text-sm font-bold text-slate-700 mb-2 font-sans">
								Password
							</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)} // Bind state
								placeholder="••••••••"
								className="w-full p-3 border border-slate-200 rounded-lg outline-none"
								required
							/>
							<Eye
								className="absolute right-3 top-10 text-slate-400 cursor-pointer"
								size={18}
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-[#2B496C] text-white py-3 rounded-lg font-bold hover:bg-[#1e344d] transition shadow-md"
						>
							Sign In
						</button>
					</form>
					<p className="text-center mt-8 text-sm text-slate-500">
						Don't have an account?{" "}
						<Link
							href="/register"
							className="text-[#2B496C] font-bold hover:underline"
						>
							Create one
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
