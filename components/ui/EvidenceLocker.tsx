"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, ShieldCheck, Trophy, Star, Medal, X } from "lucide-react";

interface Achievement {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const ACHIEVEMENTS: Achievement[] = [
    {
        id: 1,
        title: "ICPC Regional Finalist",
        issuer: "Ambo University",
        date: "2023",
        description: "Ranked among the top competitive programmers in the region.",
        icon: <Trophy className="w-8 h-8" />,
        color: "text-yellow-500",
    },
    {
        id: 2,
        title: "Full-Stack Excellence",
        issuer: "Detached Space",
        date: "2024",
        description: "Recognized for architecting complex systems with seamless integration.",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "text-blue-500",
    },
    {
        id: 3,
        title: "Community Contributor",
        issuer: "Open Source",
        date: "2025",
        description: "Maintaining multiple repositories with focus on developer experience.",
        icon: <Star className="w-8 h-8" />,
        color: "text-purple-500",
    },
    {
        id: 4,
        title: "Hackathon Winner",
        issuer: "Tech Innovation Hub",
        date: "2022",
        description: "First place for building a real-time tracking solution in 48 hours.",
        icon: <Medal className="w-8 h-8" />,
        color: "text-red-500",
    },
];

export const EvidenceLocker: React.FC = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
    const [hoveredLocker, setHoveredLocker] = useState<number | null>(null);

    return (
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {ACHIEVEMENTS.map((achievement) => (
                    <motion.div
                        key={achievement.id}
                        className="relative h-64 sm:h-80 perspective-1000 group cursor-pointer"
                        onMouseEnter={() => setHoveredLocker(achievement.id)}
                        onMouseLeave={() => setHoveredLocker(null)}
                        onClick={() => setSelectedAchievement(achievement)}
                    >
                        {/* Locker Door (Front) */}
                        <motion.div
                            className="absolute inset-0 bg-[#2a2a2a] border-4 border-[#1a1a1a] shadow-2xl rounded-sm z-20 flex flex-col items-center justify-center overflow-hidden"
                            initial={false}
                            animate={{
                                rotateY: hoveredLocker === achievement.id ? -105 : 0,
                                x: hoveredLocker === achievement.id ? -15 : 0,
                                scale: hoveredLocker === achievement.id ? 1.02 : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: hoveredLocker === achievement.id ? 0.3 : 0
                            }}
                            style={{ transformOrigin: "left" }}
                        >
                            {/* Locker Ventilation Slits */}
                            <div className="absolute top-8 w-12 h-1 bg-[#1a1a1a] rounded-full opacity-50 shadow-inner" />
                            <div className="absolute top-12 w-12 h-1 bg-[#1a1a1a] rounded-full opacity-50 shadow-inner" />
                            <div className="absolute top-16 w-12 h-1 bg-[#1a1a1a] rounded-full opacity-50 shadow-inner" />

                            {/* ID Plate */}
                            <div className="mt-8 bg-[#333] px-3 py-1 border border-[#444] shadow-sm">
                                <span className="font-mono text-[10px] text-gray-500">UNIT #{achievement.id.toString().padStart(3, '0')}</span>
                            </div>

                            {/* Lock Mechanism */}
                            <motion.div
                                animate={{ opacity: hoveredLocker === achievement.id ? 0 : 1 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-10 bg-[#222] border-2 border-[#1a1a1a] rounded-sm flex items-center justify-center"
                            >
                                <Lock className="w-3 h-3 text-gray-600" />
                            </motion.div>

                            {/* X-Ray Scan Highlight (Detailed Green Neon) */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none z-30"
                                animate={{
                                    background: hoveredLocker === achievement.id
                                        ? "linear-gradient(to bottom, transparent 0%, rgba(34, 197, 94, 0.4) 50%, transparent 100%)"
                                        : "transparent",
                                    top: hoveredLocker === achievement.id ? ["-100%", "100%"] : "0%"
                                }}
                                transition={{
                                    background: { duration: 0.2 },
                                    top: { repeat: 1, duration: 0.8, ease: "linear" }
                                }}
                            />

                            {/* Green Scanning Line Overlay */}
                            {hoveredLocker === achievement.id && (
                                <motion.div
                                    className="absolute left-0 right-0 h-[2px] bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] z-40"
                                    animate={{ top: ["0%", "100%"] }}
                                    transition={{ repeat: 1, duration: 0.8, ease: "linear" }}
                                />
                            )}

                            {/* Ghosting Item (X-Ray effect in Green) */}
                            <AnimatePresence>
                                {hoveredLocker === achievement.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.3 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-center text-green-400 blur-[1px]"
                                    >
                                        {achievement.icon}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Locker Interior (Back) */}
                        <div className="absolute inset-0 bg-[#0a0a0a] border-2 border-[#111] shadow-inner rounded-sm z-10 flex flex-col items-center justify-center p-6 text-center">
                            <div className={`mb-4 p-4 rounded-full bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)] ${achievement.color}`}>
                                {achievement.icon}
                            </div>
                            <h3 className="font-display text-lg text-white mb-2 uppercase tracking-tighter">{achievement.title}</h3>
                            <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">{achievement.issuer}</p>

                            {/* Evidence Tag */}
                            <div className="absolute bottom-4 -right-2 bg-[#f4e4bc] px-2 py-0.5 transform rotate-6 border border-black/10 shadow-md">
                                <span className="font-hand text-[10px] text-red-900 font-bold">EXHIBIT_{achievement.id}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedAchievement && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedAchievement(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[#1a1a1a] border-2 border-red-900/30 p-1 w-full max-w-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-[#f0f0f0] text-black p-8 sm:p-12 relative overflow-hidden">
                                <button
                                    onClick={() => setSelectedAchievement(null)}
                                    className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="flex flex-col items-center text-center">
                                    <div className={`p-6 rounded-full bg-black/5 mb-6 ${selectedAchievement.color}`}>
                                        {React.cloneElement(selectedAchievement.icon as React.ReactElement<{ className: string }>, { className: "w-16 h-16" })}
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tighter mb-2 border-b-4 border-black inline-block">
                                        Confiscated Achievement
                                    </h2>
                                    <p className="font-typewriter text-sm text-red-800 font-bold mb-8 uppercase tracking-[0.2em]">
                                        Case Artifact ID: A-00{selectedAchievement.id} // SECURED
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full text-left font-typewriter">
                                        <div className="border-l-2 border-black/10 pl-4">
                                            <span className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Title</span>
                                            <span className="text-xl font-bold">{selectedAchievement.title}</span>
                                        </div>
                                        <div className="border-l-2 border-black/10 pl-4">
                                            <span className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Issued By</span>
                                            <span className="text-lg">{selectedAchievement.issuer}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 border-t border-dashed border-black/20 pt-8 w-full text-left font-typewriter">
                                        <span className="block text-[10px] text-gray-500 uppercase font-bold mb-2">Forensic Analysis / Description</span>
                                        <p className="leading-relaxed text-gray-800">
                                            {selectedAchievement.description} Analysis shows consistent performance and high reliability in demanding environments. Date of seizure: {selectedAchievement.date}.
                                        </p>
                                    </div>

                                    <div className="mt-12 flex justify-between w-full items-end opacity-40 grayscale">
                                        <div className="border-2 border-black p-2 font-black text-xl -rotate-12">AUTHENTIFIED</div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-bold">DIGITAL FORENSICS DEPT</p>
                                            <img src="/api/placeholder/120/40" alt="Signature" className="h-8 object-contain mt-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
