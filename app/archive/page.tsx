"use client";

import { motion } from "framer-motion";
import { EvidenceLocker } from "@/components/ui/EvidenceLocker";
import { WiretapRoom } from "@/components/ui/WiretapRoom";
import { Terminal, ShieldAlert, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ArchivePage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white">
            {/* Home Link */}
            <div className="container mx-auto px-4 pt-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors font-mono text-xs uppercase tracking-[0.3em] group"
                >
                    <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    Exit_Investigation_Archive
                </Link>
            </div>

            {/* Background FX */}
            <div className="fixed inset-0 z-[-1] opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }}>
            </div>

            {/* Hero Section */}
            <header className="container mx-auto px-4 pt-16 pb-12 border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-1 bg-red-900" />
                        <span className="font-mono text-[10px] text-red-500 uppercase tracking-[0.5em]">Central Archive Access</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter leading-[0.85] mb-6">
                        EVIDENCE <br />
                        <span className="text-gray-500">WAREHOUSE</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-500 max-w-2xl leading-relaxed">
                        Authenticated access to high-value confiscated artifacts and surveillance logs.
                        All interactions are being recorded. Biometric data stream is stable.
                    </p>
                </motion.div>
            </header>

            {/* Section 1: Physical Evidence (Locker) */}
            <section id="locker" className="py-24 border-b border-white/5 relative overflow-hidden">
                {/* Section Label */}
                <div className="absolute left-8 top-12 flex items-center gap-4 opacity-20 rotate-90 origin-left">
                    <ShieldAlert className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase tracking-[1em]">Physical_Assets</span>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl font-display uppercase tracking-tighter text-white">Storage Locker</h2>
                            <p className="font-mono text-xs text-red-900/60 uppercase tracking-widest mt-1">Achievements & Awards</p>
                        </div>
                    </div>
                    <EvidenceLocker />
                </div>
            </section>

            {/* Section 2: Digital Evidence (Video) */}
            <section id="surveillance" className="py-24 bg-[#080808] relative">
                {/* Section Label */}
                <div className="absolute left-8 top-12 flex items-center gap-4 opacity-20 rotate-90 origin-left">
                    <Terminal className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase tracking-[1em]">Digital_Intercepts</span>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-4xl font-display uppercase tracking-tighter text-white">Wiretap Logs</h2>
                        <p className="font-mono text-xs text-green-900/60 uppercase tracking-widest mt-1">Surveillance & Interviews</p>
                    </div>
                    <WiretapRoom />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 text-center">
                <div className="bg-black border border-white/10 inline-block px-10 py-4 transform -rotate-1 shadow-2xl">
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.5em]">
                        Data Stream Integrity: 100% // End of File
                    </p>
                </div>
            </footer>
        </div>
    );
}
