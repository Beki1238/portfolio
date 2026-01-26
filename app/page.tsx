"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/ui/StickyNote";
import { Polaroid } from "@/components/ui/Polaroid";
import Link from "next/link";
import { RedString } from "@/components/ui/RedString";

export default function Home() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center p-4">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#333_0%,_#0e0e0e_70%)]" />

      {/* Central Title */}
      <motion.div
        className="z-20 text-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-paper-yellow/10 backdrop-blur-sm p-8 rounded-full border-2 border-dashed border-red-900/30">
          <h1 className="text-6xl md:text-8xl font-display text-accent-red tracking-tighter drop-shadow-lg">
            CASE #404
          </h1>
          <h2 className="text-xl md:text-2xl font-display mt-2 text-paper-yellow opacity-90 tracking-widest">
            SOLO CODES : THE DEVELOPER
          </h2>
        </div>
      </motion.div>

      {/* --- ARTIFACTS --- */}

      {/* 1. Suspect Profile (Top Left) */}
      <div className="absolute top-12 left-4 md:top-20 md:left-20 z-10">
        <Link href="/suspect">
          <Polaroid
            src="/images/brook.png"
            alt="Suspect"
            caption="THE SUSPECT"
            rotation={-6}
            width={180}
            height={220}
            className="hidden md:block hover:z-50"
          />
          {/* Mobile Fallback or alternative */}
          <div className="md:hidden bg-white text-black p-2 font-hand text-sm -rotate-3 border border-gray-400">
            PROFILE
          </div>
        </Link>
      </div>

      {/* 2. Timeline (Top Right) */}
      <div className="absolute top-12 right-4 md:top-24 md:right-24 z-10">
        <Link href="/timeline">
          <StickyNote rotation={4} className="w-40 h-40 md:w-48 md:h-48 cursor-pointer hover:z-50">
            <span className="font-display text-xl text-red-800">TIMELINE OF<br />EVENTS</span>
            <p className="text-xs mt-2 font-mono text-gray-600">See history...</p>
          </StickyNote>
        </Link>
      </div>

      {/* 3. Skills / MO (Bottom Left) */}
      <div className="absolute bottom-20 left-4 md:bottom-32 md:left-32 z-10">
        <Link href="/modus-operandi">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-[#e0e0e0] w-40 h-24 border-l-8 border-blue-800 p-2 shadow-lg cursor-pointer flex flex-col justify-center items-center rotate-3"
          >
            <span className="font-display text-lg text-black leading-none text-center">MODUS<br />OPERANDI</span>
            <span className="text-[10px] font-mono mt-1 text-gray-500">METHODS & TOOLS</span>
          </motion.div>
        </Link>
      </div>

      {/* 4. Evidence (Bottom Right) */}
      <div className="absolute bottom-20 right-4 md:bottom-32 md:right-32 z-10">
        <Link href="/evidence">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative w-48 h-32 bg-[#d4c598] rounded-lg shadow-2xl flex items-center justify-center cursor-pointer group -rotate-2 border border-gray-500"
          >
            <div className="absolute -top-4 left-0 w-16 h-6 bg-[#d4c598] rounded-t-lg border-t border-l border-r border-gray-500" />
            <span className="text-red-900 font-display text-xl font-bold tracking-widest z-10">EVIDENCE</span>
            <div className="absolute top-2 right-4 w-32 h-24 bg-white shadow-sm rotate-3 group-hover:rotate-6 transition-transform duration-300 z-0" />
          </motion.div>
        </Link>
      </div>

      {/* --- STRINGS --- */}
      {/* 
        Coordinates are approximated for a standard desktop view (1920x1080 center).
        Ideally, we would calculate these dynamically, but fixed SVG percentages work well for "vibes".
      */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* TL (20% 20%) to Center (50% 50%) */}
        <RedString x1Percent={20} y1Percent={25} x2Percent={50} y2Percent={50} delay={0.5} />

        {/* TR (80% 20%) to Center */}
        <RedString x1Percent={80} y1Percent={25} x2Percent={50} y2Percent={50} delay={0.7} />

        {/* BL (20% 80%) to Center */}
        <RedString x1Percent={20} y1Percent={75} x2Percent={50} y2Percent={50} delay={0.9} />

        {/* BR (80% 80%) to Center */}
        <RedString x1Percent={80} y1Percent={75} x2Percent={50} y2Percent={50} delay={1.1} />
      </div>

    </div>
  );
}
