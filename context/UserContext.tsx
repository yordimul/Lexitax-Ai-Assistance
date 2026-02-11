// context/UserContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the user structure including email
type User = {
	username: string;
	email: string; // ✅ Added email
};

type UserContextType = {
	user: User | null;
	setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used inside UserProvider");
	}
	return context;
}
