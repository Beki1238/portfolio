import type { Metadata } from "next";
import { Inter, Special_Elite, Permanent_Marker } from "next/font/google";
import { Navigation } from "@/components/Navigation";
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
        <div className="fixed inset-0 pointer-events-none z-0 user-select-none opacity-20"
          style={{ backgroundImage: "url('/subtle-grain.png')" }}></div>
        <Navigation />
        <main className="min-h-screen pt-20 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
