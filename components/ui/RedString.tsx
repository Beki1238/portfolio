"use client";

import { motion } from "framer-motion";

interface RedStringProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    delay?: number;
}

export function RedString({ x1, y1, x2, y2, delay = 0 }: RedStringProps) {
    // Calculate length and angle for other effects if needed, but path is simple

    return (
        <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-10"
            style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.3))" }}
        >
            <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#8b0000"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
                fill="none"
            />
            {/* Optional: Add "pins" at the ends */}
            <circle cx={x1} cy={y1} r="4" fill="#a00" />
            <circle cx={x2} cy={y2} r="4" fill="#a00" />
        </svg>
    );
}
