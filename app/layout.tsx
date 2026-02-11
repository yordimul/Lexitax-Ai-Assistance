import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-merriweather",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="antialiased bg-white">
        
       
      <UserProvider>
          {children}
        </UserProvider></body>
    </html>
  );
}