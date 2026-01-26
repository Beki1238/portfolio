"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/ui/StickyNote";
import Link from "next/link";
import { RedString } from "@/components/ui/RedString";

export default function Home() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#333_0%,_#0e0e0e_70%)]" />

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 relative mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-display text-accent-red tracking-tighter drop-shadow-lg">
          CASE #404
        </h1>
        <h2 className="text-2xl md:text-3xl font-display mt-2 text-paper-yellow opacity-90">
          THE DEVELOPER
        </h2>
        <p className="mt-4 text-gray-400 font-typewriter max-w-md mx-auto">
          "Multiple systems built. No clear explanation."
        </p>
      </motion.div>

      {/* Main Interactive "Folder" */}
      <Link href="/suspect">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-64 h-48 bg-[#d4c598] rounded-lg shadow-2xl flex items-center justify-center cursor-pointer group"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #d4c598 0, #d4c598 1px, #e8dcb5 1px, #e8dcb5 4px)"
          }}
        >
          {/* Folder Tab */}
          <div className="absolute -top-6 left-0 w-24 h-8 bg-[#d4c598] rounded-t-lg" />

          <div className="text-black font-display text-2xl font-bold tracking-widest z-10 group-hover:text-accent-red transition-colors">
            OPEN FILE
          </div>

          {/* Paper sticking out */}
          <div className="absolute top-2 right-4 w-48 h-40 bg-white shadow-sm rotate-3 group-hover:rotate-6 transition-transform duration-300 z-0" />
        </motion.div>
      </Link>

      {/* Scattered Evidence (Decor) */}
      <div className="absolute top-20 left-10 md:left-32 hidden md:block">
        <StickyNote rotation={-5}>
          Evidence #1: <br /> Clean Code
        </StickyNote>
      </div>

      <div className="absolute bottom-20 right-10 md:right-32 hidden md:block">
        <StickyNote rotation={5} color="bg-white">
          <span className="text-red-800 font-bold">SUSPECT AT LARGE</span>
        </StickyNote>
      </div>

      {/* Connecting Strings (Decor) */}
      <RedString x1={200} y1={100} x2={400} y2={300} delay={1} />

    </div>
  );
}
