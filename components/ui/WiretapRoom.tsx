"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, PlayCircle, Video, Activity, Clock, Shield, Maximize2, X } from "lucide-react";

interface VideoLog {
    id: string;
    title: string;
    youtubeId: string;
    timestamp: string;
    duration: string;
    tags: string[];
}

const VIDEO_LOGS: VideoLog[] = [
    {
        id: "LOG-01",
        title: "Building a developer house in Ethiopia - Solo's dev vlog episode 4",
        youtubeId: "2MzfRAYyBXY", // Placeholder
        timestamp: "2025-10-12 14:00",
        duration: "12:29",
        tags: ["INTERVIEW", "TECH", "SOLO"],
    },
    {
        id: "LOG-02",
        title: "Dev Dealogue Episode 1",
        youtubeId: "26SiK3Byquk",
        timestamp: "2025-11-05 09:15",
        duration: "01:37:18",
        tags: ["PROJECT", "EXPLAINER", "MOBILE"],
    },
    {
        id: "LOG-03",
        title: "How i would restart my developer journey",
        youtubeId: "IbwwlbuiuDI",
        timestamp: "2026-01-20 22:45",
        duration: "05:55",
        tags: ["LIVE", "SVELTE", "WEB"],
    },
];

export const WiretapRoom: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<VideoLog | null>(null);

    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
            {/* Surveillance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {VIDEO_LOGS.map((video, idx) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative aspect-video bg-black border-2 border-gray-800 rounded-sm overflow-hidden cursor-pointer"
                        onClick={() => setActiveVideo(video)}
                    >
                        {/* YouTube Thumbnail Overlay */}
                        <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0"
                        />

                        {/* Surveillance Overlays */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2 text-green-500 font-mono text-[10px]">
                                    <motion.div
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        className="w-2 h-2 rounded-full bg-red-600"
                                    />
                                    <span>FEED_{video.id}</span>
                                </div>
                                <div className="text-gray-500 font-mono text-[9px]">CAM_{idx + 1}</div>
                            </div>

                            <div className="space-y-1">
                                <h4 className="text-white font-mono text-sm group-hover:text-green-400 transition-colors uppercase tracking-widest">{video.title}</h4>
                                <div className="flex gap-2">
                                    {video.tags.map(tag => (
                                        <span key={tag} className="bg-gray-800 text-gray-400 px-1 py-0.5 text-[8px] font-mono">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hover Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-green-500/20 backdrop-blur-sm p-4 rounded-full border border-green-500/50">
                                <Play className="w-8 h-8 text-green-400 fill-green-400" />
                            </div>
                        </div>

                        {/* Static/Noise overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-screen bg-[url('https://media.giphy.com/media/oEI9uWUicn-4XREjs6/giphy.gif')] bg-cover" />
                    </motion.div>
                ))}
            </div>

            {/* Main Terminal Player */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
                    >
                        {/* CRT Frame Container */}
                        <div className="relative w-full max-w-5xl aspect-video bg-black border-8 border-gray-900 shadow-[0_0_50px_rgba(0,150,0,0.2)] rounded-lg overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&mute=0`}
                                title={activeVideo.title}
                                className="w-full h-full grayscale-[0.5] contrast-[1.2] brightness-[0.9]"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                            {/* HUD Overlays */}
                            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between border-[20px] border-transparent">
                                <div className="flex justify-between items-start font-mono text-green-500/80 text-xs">
                                    <div className="bg-black/50 p-2 border border-green-500/30">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Activity className="w-3 h-3 animate-pulse" />
                                            <span>LIVE_WIRE_ESTABLISHED</span>
                                        </div>
                                        <div>SIGNAL: ENCRYPTED_CHANNEL_{activeVideo.id}</div>
                                    </div>
                                    <div className="text-right bg-black/50 p-2 border border-green-500/30">
                                        <div className="mb-1">{new Date().toISOString().split('T')[0]}</div>
                                        <Clock className="w-4 h-4 inline mr-2" />
                                        <span>{activeVideo.duration}</span>
                                    </div>
                                </div>

                                {/* Close and Description */}
                                <div className="flex justify-between items-end">
                                    <div className="bg-black/80 p-4 border-l-4 border-green-600 max-w-md">
                                        <h2 className="text-lg font-display text-white uppercase mb-1">{activeVideo.title}</h2>
                                        <p className="text-[10px] text-green-400/70 font-mono tracking-widest">TRANSCRIBING_DATA_STREAM...</p>
                                    </div>
                                    <button
                                        onClick={() => setActiveVideo(null)}
                                        className="pointer-events-auto bg-red-900/20 hover:bg-red-900 border border-red-900 p-4 text-white transition-all transform hover:scale-110"
                                    >
                                        <X className="w-8 h-8" />
                                    </button>
                                </div>
                            </div>

                            {/* Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
