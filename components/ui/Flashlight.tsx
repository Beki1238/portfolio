"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface FlashlightProps {
  enabled?: boolean;
}

export const Flashlight: React.FC<FlashlightProps> = ({ enabled = true }) => {
  const [isInside, setIsInside] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the movement
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isInside) setIsInside(true);
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isInside]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none mix-blend-multiply"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInside ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{
          maskImage: `radial-gradient(circle 150px at var(--x) var(--y), transparent 0%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 150px at var(--x) var(--y), transparent 0%, black 100%)`,
          // Use CSS variables for smoother performance
          //@ts-ignore
          "--x": smoothX.get().toString() + "px",
          //@ts-ignore
          "--y": smoothY.get().toString() + "px",
        }}
      />
      {/* Outer glow/fringe */}
      <motion.div
        className="absolute w-[300px] h-[300px] -ml-[150px] -mt-[150px] rounded-full"
        style={{
          left: smoothX,
          top: smoothY,
          background: "radial-gradient(circle, rgba(255,255,220,0.1) 0%, rgba(255,255,220,0.05) 40%, transparent 70%)",
          boxShadow: "0 0 60px 20px rgba(0,0,0,0.5) inset",
        }}
      />
    </motion.div>
  );
};
