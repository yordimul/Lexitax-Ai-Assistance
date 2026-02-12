// context/UserContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode , useEffect } from "react";

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
	const [loading, setLoading] = useState(true); // Add loading state
	useEffect(() => {
		const checkSession = async () => {
		  try {
			const response = await fetch("/api/auth/me");
			const data = await response.json();
			
			if (data.user) {
			  setUser(data.user);
			}
		  } catch (error) {
			console.error("Session check failed", error);
		  } finally {
			setLoading(false);
		  }
		};
	
		checkSession();
	  }, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
      {!loading && children} {/* Only render children when loading is done */}
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
