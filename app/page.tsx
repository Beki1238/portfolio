"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { StickyNote } from "@/components/ui/StickyNote";
import { Polaroid } from "@/components/ui/Polaroid";
import Link from "next/link";
import { CrimeTape } from "@/components/ui/CrimeTape";
import { RedString } from "@/components/ui/RedString";
import { Flashlight } from "@/components/ui/Flashlight";
import { Lightbulb, LightbulbOff } from "lucide-react";

export default function Home() {
  const [hoveredArtifact, setHoveredArtifact] = useState<string | null>(null);
  const [flashlightEnabled, setFlashlightEnabled] = useState(false);

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto flex flex-col md:flex-none md:items-center md:justify-center p-4 pb-24 md:pb-4">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#333_0%,_#0e0e0e_70%)]" />

      {/* Central Title */}
      <motion.div
        className="z-20 text-center relative pointer-events-auto cursor-pointer flex-shrink-0 mt-4 md:mt-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onMouseEnter={() => setHoveredArtifact("hub")}
        onMouseLeave={() => setHoveredArtifact(null)}
        whileHover={{ scale: 1.02, rotate: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <div className="bg-[#1a1a1a]/80 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-sm border-2 border-[#333] shadow-[0_0_50px_rgba(139,0,0,0.2)] relative overflow-hidden group max-w-[calc(100vw-2rem)]">
          {/* Decorative Corner Brackets */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-accent-red opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-accent-red opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-accent-red opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-accent-red opacity-50 group-hover:opacity-100 transition-opacity" />

          {/* Pulse animation overlay */}
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-accent-red pointer-events-none"
          />

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display text-accent-red tracking-tighter drop-shadow-[0_0_15px_rgba(139,0,0,0.5)] mb-2">
            CASE #404
          </h1>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent-red to-transparent mb-4 opacity-50" />
          <h2 className="text-base sm:text-xl md:text-2xl font-display text-paper-yellow opacity-90 tracking-[0.15em] sm:tracking-[0.2em] uppercase px-1">
            SOLO CODES : THE DEVELOPER
          </h2>

          {/* "Classified" stamp - hidden on very small screens to avoid overflow */}
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            whileHover={{ opacity: 0.8, scale: 1, rotate: -15 }}
            className="absolute -top-1 right-2 sm:-top-2 sm:-right-6 border-2 sm:border-4 border-accent-red text-accent-red font-black px-2 py-1 sm:px-4 sm:py-2 text-lg sm:text-4xl select-none pointer-events-none max-sm:hidden"
          >
            TOP SECRET
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile: same components in a list, connected with strings */}
      <div className="md:hidden relative mt-10 pb-16 px-6 max-w-md mx-auto w-full z-20">
        {/* Vertical red strings connecting the list (viewport % so SVG overlays full screen) */}
        <div className="absolute inset-0 pointer-events-none">
          <RedString x1Percent={10} y1Percent={26} x2Percent={10} y2Percent={42} delay={0.3} tension={0} />
          <RedString x1Percent={10} y1Percent={42} x2Percent={10} y2Percent={58} delay={0.5} tension={0} />
          <RedString x1Percent={10} y1Percent={58} x2Percent={10} y2Percent={74} delay={0.7} tension={0} />
          <RedString x1Percent={10} y1Percent={74} x2Percent={10} y2Percent={90} delay={0.9} tension={0} />
        </div>

        <div className="relative flex flex-col gap-8 pl-8">
          <Link href="/suspect" className="block" onMouseEnter={() => setHoveredArtifact("suspect")} onMouseLeave={() => setHoveredArtifact(null)}>
            <Polaroid
              src="/images/brook.png"
              alt="Suspect"
              caption="THE SUSPECT"
              rotation={-4}
              className="w-[200px] sm:w-[240px] hover:z-50 cursor-pointer"
            />
          </Link>

          <Link href="/timeline" className="block" onMouseEnter={() => setHoveredArtifact("timeline")} onMouseLeave={() => setHoveredArtifact(null)}>
            <StickyNote rotation={2} className="w-36 h-36 sm:w-40 sm:h-40 cursor-pointer hover:z-50 transition-transform duration-300 active:scale-105 shadow-2xl ml-4">
              <span className="font-display text-lg text-red-800">TIMELINE OF<br />EVENTS</span>
              <p className="text-xs mt-2 font-mono text-gray-600 uppercase tracking-widest opacity-60">Historical Record</p>
            </StickyNote>
          </Link>

          <Link href="/modus-operandi" className="block" onMouseEnter={() => setHoveredArtifact("mo")} onMouseLeave={() => setHoveredArtifact(null)}>
            <motion.div
              whileTap={{ scale: 1.05 }}
              className="bg-[#e0e0e0] w-full max-w-[240px] h-24 border-l-8 border-blue-800 p-4 shadow-xl cursor-pointer flex flex-col justify-center items-center rotate-1 border border-gray-300 ml-2"
            >
              <span className="font-display text-lg text-black leading-none text-center">MODUS<br />OPERANDI</span>
              <span className="text-[10px] font-mono mt-1 text-gray-500 uppercase tracking-[0.2em]">Methods</span>
            </motion.div>
          </Link>

          <Link href="/evidence" className="block" onMouseEnter={() => setHoveredArtifact("evidence")} onMouseLeave={() => setHoveredArtifact(null)}>
            <motion.div
              whileTap={{ scale: 1.02 }}
              className="relative w-full max-w-[260px] h-28 sm:h-32 bg-[#d4c598] rounded-lg shadow-2xl flex items-center justify-center cursor-pointer group -rotate-1 border border-black/20 ml-4"
            >
              <div className="absolute -top-4 left-0 w-16 h-6 bg-[#d4c598] rounded-t-lg border-t border-l border-r border-black/20 shadow-sm" />
              <span className="text-red-900 font-display text-xl font-bold tracking-widest z-10 drop-shadow-sm">EVIDENCE</span>
              <div className="absolute top-2 right-4 w-32 h-24 bg-white/90 shadow-sm rotate-3 group-hover:rotate-12 transition-transform duration-500 z-0 border border-black/5" />
            </motion.div>
          </Link>

          <Link href="/archive#locker" className="block" onMouseEnter={() => setHoveredArtifact("trophies")} onMouseLeave={() => setHoveredArtifact(null)}>
            <motion.div
              whileTap={{ scale: 1.05 }}
              className="bg-[#2a2a2a] w-full max-w-[240px] h-20 border-r-8 border-yellow-600 p-4 shadow-xl cursor-pointer flex flex-col justify-center items-center rotate-2 border border-[#1a1a1a] ml-6"
            >
              <span className="font-display text-lg text-white leading-none text-center">STORAGE<br />LOCKER</span>
              <span className="text-[10px] font-mono mt-1 text-gray-500 uppercase tracking-[0.2em]">Trophies</span>
            </motion.div>
          </Link>

          <Link href="/archive#surveillance" className="block" onMouseEnter={() => setHoveredArtifact("interviews")} onMouseLeave={() => setHoveredArtifact(null)}>
            <motion.div
              whileTap={{ scale: 1.1 }}
              className="bg-[#0a0a0a] w-full max-w-[240px] h-20 border-l-8 border-green-800 p-4 shadow-xl cursor-pointer flex flex-col justify-center items-center -rotate-1 border border-green-950/20 ml-2"
            >
              <span className="font-display text-lg text-green-500 leading-none text-center">WIRETAP<br />LOGS</span>
              <span className="text-[10px] font-mono mt-1 text-green-800 uppercase tracking-[0.2em]">Interviews</span>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* --- EXTRA CRIME SCENE ELEMENTS --- */}

      {/* Crime Scene Tapes - hidden on small screens to reduce clutter */}
      <div className="hidden sm:block">
        <CrimeTape
          yPercent={22}
          rotation={-6}
          delay={1}
          tension={hoveredArtifact ? 0.6 : 0}
        />
      </div>

      {/* Bottom Center - Chalk Outline & Evidence Pool */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] sm:h-[600px] pointer-events-none overflow-visible flex items-center justify-center">
        {/* Large Blood Pool - responsive width */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-40 sm:h-64 bg-[#4a0000] blur-[60px] sm:blur-[80px] rounded-[100%] z-0"
        />

        {/* Evidence Markers - hidden on very small screens */}
        <div className="absolute bottom-24 sm:bottom-32 left-[35%] sm:left-[40%] -translate-x-1/2 rotate-[-10deg] z-10 hidden sm:block">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 border border-black flex items-center justify-center font-bold text-black text-[10px] sm:text-xs shadow-lg"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
            01
          </div>
          <div className="w-3 h-0.5 sm:w-4 sm:h-1 bg-black/20 blur-sm mt-1" />
        </div>

        <div className="absolute bottom-16 sm:bottom-24 left-[65%] sm:left-[60%] -translate-x-1/2 rotate-[15deg] z-10 hidden sm:block">
          <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-400 border border-black flex items-center justify-center font-bold text-black text-[10px] sm:text-xs shadow-lg"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
            02
          </div>
          <div className="w-4 h-0.5 sm:w-5 sm:h-1 bg-black/20 blur-sm mt-1" />
        </div>
      </div>

      {/* --- ARTIFACTS --- */}

      {/* 1. Suspect Profile (Top Left) - desktop only; mobile uses grid below */}
      <div className="hidden md:block absolute top-20 left-20 z-10"
        onMouseEnter={() => setHoveredArtifact("suspect")}
        onMouseLeave={() => setHoveredArtifact(null)}
      >
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

      {/* 2. Timeline (Top Right) - desktop only */}
      <div className="hidden md:block absolute top-24 right-24 z-10"
        onMouseEnter={() => setHoveredArtifact("timeline")}
        onMouseLeave={() => setHoveredArtifact(null)}
      >
        <Link href="/timeline">
          <StickyNote rotation={4} className="w-40 h-40 md:w-48 md:h-48 cursor-pointer hover:z-50 transition-transform duration-300 hover:scale-110 shadow-2xl">
            <span className="font-display text-xl text-red-800">TIMELINE OF<br />EVENTS</span>
            <p className="text-xs mt-2 font-mono text-gray-600 uppercase tracking-widest opacity-60">Historical Record</p>
          </StickyNote>
        </Link>
      </div>

      {/* 3. Skills / MO (Bottom Left) - desktop only */}
      <div className="hidden md:block absolute bottom-32 left-32 z-10"
        onMouseEnter={() => setHoveredArtifact("mo")}
        onMouseLeave={() => setHoveredArtifact(null)}
      >
        <Link href="/modus-operandi">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            className="bg-[#e0e0e0] w-40 h-24 border-l-8 border-blue-800 p-4 shadow-xl cursor-pointer flex flex-col justify-center items-center rotate-3 border border-gray-300"
          >
            <span className="font-display text-lg text-black leading-none text-center">MODUS<br />OPERANDI</span>
            <span className="text-[10px] font-mono mt-1 text-gray-500 uppercase tracking-[0.2em]">Methods</span>
          </motion.div>
        </Link>
      </div>

      {/* 4. Evidence (Bottom Right) - desktop only */}
      <div className="hidden md:block absolute bottom-32 right-32 z-10"
        onMouseEnter={() => setHoveredArtifact("evidence")}
        onMouseLeave={() => setHoveredArtifact(null)}
      >
        <Link href="/evidence">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -4, y: -10 }}
            className="relative w-48 h-32 bg-[#d4c598] rounded-lg shadow-2xl flex items-center justify-center cursor-pointer group -rotate-2 border border-black/20"
          >
            <div className="absolute -top-4 left-0 w-16 h-6 bg-[#d4c598] rounded-t-lg border-t border-l border-r border-black/20 shadow-sm" />
            <span className="text-red-900 font-display text-xl font-bold tracking-widest z-10 drop-shadow-sm">EVIDENCE</span>
            <div className="absolute top-2 right-4 w-32 h-24 bg-white/90 shadow-sm rotate-3 group-hover:rotate-12 transition-transform duration-500 z-0 border border-black/5" />
          </motion.div>
        </Link>
      </div>

      {/* 5. Trowphies (Mid Bottom) - desktop only */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        onMouseEnter={() => setHoveredArtifact("trophies")}
        onMouseLeave={() => setHoveredArtifact(null)}
      >
        <Link href="/archive#locker">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -2, y: -5 }}
            className="bg-[#2a2a2a] w-44 h-16 border-r-8 border-yellow-600 p-4 shadow-xl cursor-pointer flex flex-col justify-center items-center -rotate-1 border border-[#1a1a1a]"
          >
            <span className="font-display text-lg text-white leading-none text-center">STORAGE LOCKER</span>
            <span className="text-[9px] font-mono mt-1 text-gray-500 uppercase tracking-[0.2em]">Achievements</span>
          </motion.div>
        </Link>
      </div>

      {/* 6. Interviews / Wiretap (Bottom Right-ish) - desktop only */}
      <div className="hidden md:block absolute bottom-24 right-64 z-10"
        onMouseEnter={() => setHoveredArtifact("interviews")}
        onMouseLeave={() => setHoveredArtifact(null)}
      >
        <Link href="/archive#surveillance">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 3, y: -10 }}
            className="bg-[#0a0a0a] w-40 h-20 border-l-8 border-green-800 p-4 shadow-xl cursor-pointer flex flex-col justify-center items-center rotate-2 border border-green-950/20"
          >
            <span className="font-display text-lg text-green-500 leading-none text-center">WIRETAP LOGS</span>
            <span className="text-[9px] font-mono mt-1 text-green-800 uppercase tracking-[0.2em]">Transcripts</span>
          </motion.div>
        </Link>
      </div>

      {/* --- STRINGS --- */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Strings connected to center hub (50/50) */}
        {/* Suspect (centered at roughly 18/28) */}
        <RedString
          x1Percent={16} y1Percent={28} x2Percent={50} y2Percent={50} delay={0.5}
          tension={hoveredArtifact === "suspect" || hoveredArtifact === "hub" ? 1 : 0}
        />

        {/* Timeline (centered at roughly 83/30) */}
        <RedString
          x1Percent={87} y1Percent={32} x2Percent={50} y2Percent={50} delay={0.7}
          tension={hoveredArtifact === "timeline" || hoveredArtifact === "hub" ? 1 : 0}
        />

        {/* Modus Operandi (centered at roughly 20/75) */}
        <RedString
          x1Percent={20} y1Percent={76} x2Percent={50} y2Percent={50} delay={0.9}
          tension={hoveredArtifact === "mo" || hoveredArtifact === "hub" ? 1 : 0}
        />

        {/* Interviews (centered at roughly 78/70) */}
        <RedString
          x1Percent={78} y1Percent={75} x2Percent={50} y2Percent={50} delay={1.5}
          tension={hoveredArtifact === "interviews" || hoveredArtifact === "hub" ? 1 : 0}
        />
      </div>

      {/* Flashlight Effect */}
      <Flashlight enabled={flashlightEnabled} />

      {/* Flashlight Toggle Button */}
      <motion.button
        onClick={() => setFlashlightEnabled(!flashlightEnabled)}
        className={`fixed bottom-8 left-8 z-[10000] p-4 rounded-full border-2 transition-all duration-500 shadow-2xl flex items-center justify-center
          ${flashlightEnabled
            ? "bg-yellow-400 border-yellow-600 text-yellow-900 scale-110 rotate-12"
            : "bg-gray-800 border-gray-600 text-gray-400 hover:scale-105 active:scale-95"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={flashlightEnabled ? "Turn off flashlight" : "Turn on flashlight"}
      >
        {flashlightEnabled ? <Lightbulb className="w-6 h-6" /> : <LightbulbOff className="w-6 h-6" />}

        {/* Helper tooltip for first time users */}
        {!flashlightEnabled && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-4 whitespace-nowrap bg-red-900 text-white text-[10px] font-mono px-2 py-1 uppercase tracking-widest hidden sm:block pointer-events-none"
          >
            Investigate Scene
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
