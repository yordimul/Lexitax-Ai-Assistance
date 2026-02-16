// context/UserContext.tsx
"use client";

import { useCallback ,createContext, useContext, useState, ReactNode , useEffect } from "react";

// 1. Define the user structure including email
type User = {
	username: string;
	email: string; // ✅ Added email
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    checkSession: () => Promise<void>; // ✅ Add this
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true); // Add loading state
	const checkSession = useCallback(async () => {
        try {
            const response = await fetch("/api/auth/me");
            const data = await response.json();
            
            if (data.user) {
                setUser(data.user);
            } else {
                setUser(null); // Explicitly set to null if not logged in
            }
        } catch (error) {
            console.error("Session check failed", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    // ✅ Add checkSession to the provider value
    return (
        <UserContext.Provider value={{ user, setUser, checkSession }}>
            {!loading && children}
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
