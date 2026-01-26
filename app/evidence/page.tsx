"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Polaroid } from "@/components/ui/Polaroid";
import { X } from "lucide-react";

// Mock Data
const EVIDENCE = [
    {
        id: 1,
        title: "Project Alpha",
        type: "Web App",
        image: "https://placehold.co/600x400/222/FFF?text=EVIDENCE+A",
        tech: ["Next.js", "Tailwind", "PostgreSQL"],
        desc: "A full-scale e-commerce platform built for high-scale traffic.",
    },
    {
        id: 2,
        title: "Bot Beta",
        type: "Automation Script",
        image: "https://placehold.co/600x400/444/FFF?text=EVIDENCE+B",
        tech: ["Python", "Selenium", "Docker"],
        desc: "Automated trading bot that monitors crypto markets 24/7.",
    },
    {
        id: 3,
        title: "System Gamma",
        type: "Internal Tool",
        image: "https://placehold.co/600x400/666/FFF?text=EVIDENCE+C",
        tech: ["React", "Node.js", "Redis"],
        desc: "Real-time dashboard for monitoring server metrics.",
    },
];

export default function EvidencePage() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedItem = EVIDENCE.find((e) => e.id === selectedId);

    return (
        <div className="container mx-auto p-8 relative min-h-screen">
            {/* Corkboard Background Effect (Pseudo-element or simple textured bg) */}
            <div className="absolute inset-0 z-[-1] opacity-40 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cork-board.png')" }}>
            </div>

            <div className="text-center mb-16 relative">
                <div className="inline-block bg-[#f4e4bc] px-8 py-4 shadow-lg transform -rotate-1 border border-[#d3c299]">
                    <h1 className="text-5xl font-display text-red-900 drop-shadow-sm tracking-widest uppercase">
                        Evidence Board
                    </h1>
                    <p className="text-gray-700 font-typewriter text-sm mt-1 uppercase tracking-widest">
                        Case File #404 // Artifacts
                    </p>
                    {/* Tape visual */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-2 shadow-sm" />
                </div>
            </div>

            {/* Grid of Evidence (Scatter Layout) */}
            <div className="flex flex-wrap justify-center gap-16 relative">
                {EVIDENCE.map((item, index) => {
                    const rotations = [-4, 2, -1, 5, -2, 3];
                    const rot = rotations[index % rotations.length];
                    return (
                        <div
                            key={item.id}
                            className="relative group perspective-1000"
                            style={{
                                marginTop: index % 2 === 0 ? '20px' : '0px',
                                marginLeft: index % 3 === 0 ? '-10px' : '10px'
                            }}
                        >
                            <Polaroid
                                src={item.image}
                                alt={item.title}
                                caption={item.title}
                                rotation={rot}
                                className="w-[300px] hover:z-30"
                                onClick={() => setSelectedId(item.id)}
                            />
                            <div className="mt-4 text-center">
                                <span className="bg-[#f4e4bc] text-black px-2 py-0.5 text-[10px] font-mono border border-black/10 shadow-sm uppercase">
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`evidence-${selectedId}`}
                            className="bg-[#f0f0f0] text-black w-full max-w-2xl p-2 shadow-2xl rounded-sm overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Content - File Folder Style */}
                            <div className="border border-gray-300 p-6 h-full bg-white relative">
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <h2 className="text-3xl font-display mb-2 border-b-2 border-red-800 inline-block text-red-900">
                                    INCIDENT REPORT: {selectedItem.title}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                                    <div className="relative h-48 w-full bg-gray-200 border border-gray-300 p-2 transform rotate-1">
                                        <img
                                            src={selectedItem.image}
                                            alt={selectedItem.title}
                                            className="w-full h-full object-cover grayscale"
                                        />
                                        <span className="absolute bottom-1 right-2 text-[10px] font-mono">EXHIBIT A</span>
                                    </div>

                                    <div className="space-y-4 font-typewriter">
                                        <div>
                                            <h4 className="font-bold bg-black text-white inline-block px-1 mb-1 text-xs">DESCRIPTION</h4>
                                            <p className="text-sm">{selectedItem.desc}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold bg-black text-white inline-block px-1 mb-1 text-xs">TOOLS USED</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedItem.tech.map(t => (
                                                    <span key={t} className="px-2 py-1 bg-gray-200 text-xs border border-gray-400">{t}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <p className="text-xs text-red-700 font-bold uppercase border-2 border-red-700 inline-block p-1 transform -rotate-6">
                                                VERIFIED
                                            </p>
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
}
