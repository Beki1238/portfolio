import type { Metadata } from "next";
import { Inter, Special_Elite, Permanent_Marker } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  weight: "400",
  variable: "--font-special-elite",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Case #404: The Developer",
  description: "An unsolved mystery portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${specialElite.variable} ${permanentMarker.variable} antialiased bg-[#0e0e0e] text-[#EDEDED] font-sans overflow-hidden`}
      >
        <CustomCursor />

        {/* Background Background Decor */}
        <div className="fixed inset-0 pointer-events-none z-0 user-select-none overflow-hidden">
          {/* Subtle Grain */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url('/subtle-grain.png')" }}></div>

          {/* Blood Splatters */}
          <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-red-900/20 blur-xl rounded-full mix-blend-multiply" />
          <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-red-950/20 blur-2xl rounded-full" />

          {/* Splatter shapes */}
          <div className="absolute top-[40%] right-[15%] w-24 h-24 bg-red-900/10 opacity-40 rotate-12"
            style={{ clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 80% 70%, 50% 100%, 20% 70%, 0% 35%, 20% 10%)" }} />
          <div className="absolute bottom-[10%] left-[25%] w-40 h-12 bg-red-900/5 rotate-[-15deg] blur-sm" />
        </div>

        <Navigation />
        <main className="min-h-screen pt-20 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
