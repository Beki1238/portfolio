"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
    const [isMounted, setIsMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Faster, more responsive springs
    const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!isMounted) return null;

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none !important;
        }
        a, button, [role="button"], .cursor-pointer, .group {
          cursor: none !important;
        }
      `}</style>

            {/* Flashlight Effect - Slightly sharper and more focused */}
            <motion.div
                className="fixed top-0 left-0 w-[800px] h-[800px] pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, rgba(232, 220, 181, 0.12) 0%, transparent 60%)",
                }}
            />

            {/* Magnifying Glass Cursor - Sleeker design */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <div className="relative w-full h-full border border-white/80 rounded-full flex items-center justify-center shadow-lg">
                    {/* Minimal Lens crosshair */}
                    <div className="absolute w-[1px] h-2 bg-white/40 top-0 left-1/2 -translate-x-1/2" />
                    <div className="absolute w-[1px] h-2 bg-white/40 bottom-0 left-1/2 -translate-x-1/2" />
                    <div className="absolute w-2 h-[1px] bg-white/40 left-0 top-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-[1px] bg-white/40 right-0 top-1/2 -translate-y-1/2" />

                    {/* Sleek handle */}
                    <div className="absolute top-[85%] left-[85%] w-[1.5px] h-5 bg-white origin-top rotate-[35deg] rounded-full" />
                </div>
            </motion.div>

            {/* Clean Lens Glass Effect */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 rounded-full border border-white/20 pointer-events-none z-[9997]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    backdropFilter: "contrast(1.1) brightness(1.2) blur(0.5px)",
                    boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)",
                }}
            />
        </>
    );
};
