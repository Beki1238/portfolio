"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RedStringProps {
    x1Percent: number; // 0-100
    y1Percent: number; // 0-100
    x2Percent: number; // 0-100
    y2Percent: number; // 0-100
    delay?: number;
}

export function RedString({ x1Percent, y1Percent, x2Percent, y2Percent, delay = 0 }: RedStringProps) {
    const [coords, setCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateCoords = () => {
            setCoords({
                x1: (itemVal(x1Percent) * window.innerWidth) / 100,
                y1: (itemVal(y1Percent) * window.innerHeight) / 100,
                x2: (itemVal(x2Percent) * window.innerWidth) / 100,
                y2: (itemVal(y2Percent) * window.innerHeight) / 100,
            });
        };

        // Helper to allow minor random variation if needed, or just pass through
        const itemVal = (val: number) => val;

        updateCoords();
        window.addEventListener("resize", updateCoords);
        return () => window.removeEventListener("resize", updateCoords);
    }, [x1Percent, y1Percent, x2Percent, y2Percent]);

    if (!mounted) return null;

    return (
        <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-10"
            style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.3))" }}
        >
            <motion.line
                x1={coords.x1}
                y1={coords.y1}
                x2={coords.x2}
                y2={coords.y2}
                stroke="#8b0000"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
                fill="none"
            />
            <circle cx={coords.x1} cy={coords.y1} r="4" fill="#a00" />
            <circle cx={coords.x2} cy={coords.y2} r="4" fill="#a00" />
        </svg>
    );
}
