"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/ui/StickyNote";

const TIMELINE = [
    { year: "2018", event: "Discovered Programming", desc: "First encounter with Python. The obsession began." },
    { year: "2019", event: "First Freelance Gig", desc: "Built a WordPress site for a local bakery. Paid in croissants." },
    { year: "2021", event: "Computer Science Degree", desc: "Enrolled in University. Learned the theory behind the madness." },
    { year: "2023", event: "Senior Developer", desc: "Led a team of 5. Shipped production code to 1M+ users." },
    { year: "NOW", event: "The Current Suspect", desc: "Building independent projects and seeking new challenges." },
];

export default function TimelinePage() {
    return (
        <div className="container mx-auto p-8 min-h-screen max-w-3xl">
            <div className="mb-12 text-center">
                <h1 className="text-5xl font-display text-paper-yellow">CASE TIMELINE</h1>
            </div>

            <div className="relative border-l-4 border-dashed border-red-800 ml-4 md:ml-1/2 md:-translate-x-1/2 space-y-12 pb-20">
                {TIMELINE.map((item, index) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Dot on Timeline */}
                        <div className="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white z-10" />

                        {/* Content */}
                        <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                            <StickyNote
                                rotation={index % 2 === 0 ? 2 : -2}
                                color="bg-white"
                                className="w-64 h-auto min-h-[160px] text-left p-6"
                            >
                                <span className="font-display text-2xl text-red-800 block mb-2">{item.year}</span>
                                <h3 className="font-bold text-lg mb-1">{item.event}</h3>
                                <p className="text-sm text-gray-600 font-sans">{item.desc}</p>
                            </StickyNote>
                        </div>

                        {/* Spacer for the other side */}
                        <div className="md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
