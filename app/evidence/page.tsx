"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Polaroid } from "@/components/ui/Polaroid";
import { X, Search, Filter, Tag } from "lucide-react";

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
    {
        id: 4,
        title: "Mobile Delta",
        type: "Mobile App",
        image: "https://placehold.co/600x400/333/FFF?text=EVIDENCE+D",
        tech: ["React Native", "Firebase", "Redux"],
        desc: "Cross-platform mobile application for incident reporting.",
    },
    {
        id: 5,
        title: "Crawler Epsilon",
        type: "Web Scraper",
        image: "https://placehold.co/600x400/555/FFF?text=EVIDENCE+E",
        tech: ["Go", "gRPC", "MongoDB"],
        desc: "High-performance distributed web crawler and indexer.",
    },
    {
        id: 6,
        title: "Analytic Zeta",
        type: "Data Pipeline",
        image: "https://placehold.co/600x400/777/FFF?text=EVIDENCE+F",
        tech: ["Python", "PyTorch", "AWS"],
        desc: "Machine learning pipeline for predictive maintenance analysis.",
    }
];

export default function EvidencePage() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTech, setActiveTech] = useState<string | null>(null);

    const allTech = useMemo(() => {
        const techs = new Set<string>();
        EVIDENCE.forEach(item => item.tech.forEach(t => techs.add(t)));
        return Array.from(techs).sort();
    }, []);

    const filteredEvidence = useMemo(() => {
        return EVIDENCE.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesTech = !activeTech || item.tech.includes(activeTech);

            return matchesSearch && matchesTech;
        });
    }, [searchQuery, activeTech]);

    const selectedItem = EVIDENCE.find((e) => e.id === selectedId);

    return (
        <div className="container mx-auto p-8 relative min-h-screen">
            {/* Corkboard Background Effect */}
            <div className="fixed inset-0 z-[-1] opacity-40 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cork-board.png')" }}>
            </div>

            <div className="text-center mb-12 relative">
                <div className="inline-block bg-[#f4e4bc] px-8 py-4 shadow-lg transform -rotate-1 border border-[#d3c299]">
                    <h1 className="text-5xl font-display text-red-900 drop-shadow-sm tracking-widest uppercase">
                        Evidence Board
                    </h1>
                    <p className="text-gray-700 font-typewriter text-sm mt-1 uppercase tracking-widest">
                        Case File #404 // Artifacts
                    </p>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-2 shadow-sm" />
                </div>
            </div>

            {/* Filter & Search UI */}
            <div className="max-w-4xl mx-auto mb-16 space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-black/5 p-4 backdrop-blur-sm border border-black/10 rounded-sm">
                    {/* Search Bar - Typewriter style */}
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-red-900 transition-colors" />
                        <input
                            type="text"
                            placeholder="SEARCH EVIDENCE..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#f4e4bc] border-b-2 border-black/40 focus:border-red-900 p-2 pl-10 font-mono text-sm text-black placeholder:text-gray-500 focus:outline-none transition-all shadow-inner focus:bg-[#fff9e6] focus:shadow-md"
                        />
                    </div>

                    {/* Tech Filter Dropdown/Badges */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                        <button
                            onClick={() => setActiveTech(null)}
                            className={`px-3 py-1 text-[10px] font-mono border transition-all hover:scale-105 ${!activeTech ? 'bg-red-900 text-white border-red-900 shadow-[2px_2px_0px_#000]' : 'bg-[#f4e4bc] text-black border-black/20 hover:border-red-900 hover:bg-red-900/10'}`}
                        >
                            ALL DEPT.
                        </button>
                        {allTech.slice(0, 6).map(tech => (
                            <button
                                key={tech}
                                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                                className={`px-3 py-1 text-[10px] font-mono border transition-all hover:scale-105 ${activeTech === tech ? 'bg-red-900 text-white border-red-900 shadow-[2px_2px_0px_#000]' : 'bg-[#f4e4bc] text-black border-black/20 hover:border-red-900 hover:bg-red-900/10'}`}
                            >
                                {tech.toUpperCase()}
                            </button>
                        ))}
                        {allTech.length > 6 && (
                            <div className="relative group">
                                <button className="px-3 py-1 text-[10px] font-mono border bg-[#f4e4bc] text-black border-black/10 flex items-center gap-1 hover:border-red-900 transition-all">
                                    MORE <Filter className="w-3 h-3" />
                                </button>
                                <div className="absolute right-0 top-full mt-2 w-48 bg-[#f4e4bc] border border-[#d3c299] shadow-xl z-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all p-2 grid grid-cols-2 gap-1">
                                    {allTech.slice(6).map(tech => (
                                        <button
                                            key={tech}
                                            onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                                            className={`px-2 py-1 text-[9px] font-mono border text-left truncate transition-all ${activeTech === tech ? 'bg-red-900 text-white border-red-900' : 'hover:border-red-900'}`}
                                        >
                                            {tech.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Grid of Evidence (Scatter Layout) */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-20 relative">
                <AnimatePresence mode="popLayout">
                    {filteredEvidence.map((item, index) => {
                        const rotations = [-4, 2, -1, 5, -2, 3];
                        const rot = rotations[index % rotations.length];
                        return (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                key={item.id}
                                className="relative group"
                                style={{
                                    marginTop: index % 2 === 0 ? '20px' : '0px',
                                }}
                            >
                                <Polaroid
                                    src={item.image}
                                    alt={item.title}
                                    caption={item.title}
                                    rotation={rot}
                                    className="w-[280px] hover:z-30 transition-all"
                                    onClick={() => setSelectedId(item.id)}
                                />
                                {/* Tech Badges BELOW the Card */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1 w-full pointer-events-none group-hover:pointer-events-auto transition-all">
                                    {item.tech.slice(0, 3).map(t => (
                                        <span key={t} className="bg-white/90 backdrop-blur-sm text-[8px] font-bold px-1.5 py-0.5 border border-black/10 shadow-sm text-red-900 uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {filteredEvidence.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full text-center py-20"
                    >
                        <p className="font-typewriter text-2xl text-red-950/40 uppercase tracking-widest">
                            No evidence found matching requested criteria.
                        </p>
                    </motion.div>
                )}
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
                            <div className="border border-gray-300 p-6 h-full bg-white relative">
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
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
                                        <span className="absolute bottom-1 right-2 text-[10px] font-mono">EXHIBIT {String.fromCharCode(64 + selectedId)}</span>
                                    </div>

                                    <div className="space-y-4 font-typewriter">
                                        <div>
                                            <h4 className="font-bold bg-black text-white inline-block px-1 mb-1 text-xs">DESCRIPTION</h4>
                                            <p className="text-sm leading-relaxed">{selectedItem.desc}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold bg-black text-white inline-block px-1 mb-1 text-xs">TOOLS USED</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedItem.tech.map(t => (
                                                    <span key={t} className="px-2 py-1 bg-[#f4e4bc] text-[10px] border border-[#d3c299] shadow-sm">{t.toUpperCase()}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <p className="text-xs text-red-700 font-bold uppercase border-2 border-red-700 inline-block p-1 transform -rotate-6">
                                                VERIFIED CASE ARTIFACT
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

