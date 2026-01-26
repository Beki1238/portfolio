"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/ui/StickyNote";

const SKILLS = {
    WEAPONS: ["TypeScript", "Python", "Go", "Java", "SQL"],
    TOOLS: ["Next.js", "React", "Docker", "Kubernetes", "Figma"],
    TACTICS: ["System Design", "Microservices", "CI/CD", "Agile", "Testing"],
};

export default function SkillsPage() {
    return (
        <div className="container mx-auto p-8 min-h-screen max-w-5xl">
            <div className="mb-12 border-b border-gray-700 pb-4">
                <h1 className="text-5xl font-display text-white tracking-widest uppercase">Modus Operandi</h1>
                <p className="font-typewriter text-gray-500 mt-2">The methods used to execute the builds.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Column 1: Weapons */}
                <div className="relative">
                    <StickyNote className="mb-8 rotate-2" color="bg-red-900/20 text-red-500 border border-red-500">
                        <span className="font-display text-2xl">PRIMARY<br />WEAPONS</span>
                    </StickyNote>

                    <div className="space-y-4">
                        {SKILLS.WEAPONS.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#1a1a1a] border-l-4 border-red-700 p-4 font-mono text-sm relative group hover:bg-[#222] transition-colors"
                            >
                                <span className="text-gray-400">ITEM #{i + 100}:</span> {skill}
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="border border-red-500 text-red-500 text-[10px] px-1 transform rotate-12">MATCH</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Column 2: Tools */}
                <div className="relative mt-12 md:mt-0">
                    <StickyNote className="mb-8 -rotate-1" color="bg-yellow-900/20 text-yellow-500 border border-yellow-500">
                        <span className="font-display text-2xl">TOOLS OF<br />TRADE</span>
                    </StickyNote>

                    <div className="space-y-4">
                        {SKILLS.TOOLS.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="bg-[#1a1a1a] border-l-4 border-yellow-700 p-4 font-mono text-sm relative group hover:bg-[#222] transition-colors"
                            >
                                <span className="text-gray-400">OBJ #{i + 200}:</span> {skill}
                                {i === 0 && (
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 border-2 border-green-700 text-green-700 text-sm font-black p-1 transform -rotate-12 opacity-80">
                                        EXPERT
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Column 3: Tactics */}
                <div className="relative mt-12 md:mt-0">
                    <StickyNote className="mb-8 rotate-3" color="bg-blue-900/20 text-blue-500 border border-blue-500">
                        <span className="font-display text-2xl">TACTICAL<br />APPROACH</span>
                    </StickyNote>

                    <div className="space-y-4">
                        {SKILLS.TACTICS.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="bg-[#1a1a1a] border-l-4 border-blue-700 p-4 font-mono text-sm relative group hover:bg-[#222] transition-colors"
                            >
                                <span className="text-gray-400">METHOD #{i + 300}:</span> {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
