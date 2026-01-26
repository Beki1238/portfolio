"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyNoteProps {
    children: React.ReactNode;
    className?: string;
    rotation?: number;
    color?: string;
}

export function StickyNote({
    children,
    className,
    rotation = 0,
    color = "bg-paper-yellow",
}: StickyNoteProps) {
    // Random slight texture/shadow simulation could be added here
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ rotate: rotation }}
            className={cn(
                "p-4 shadow-md text-black font-hand text-lg w-48 h-48 flex items-center justify-center text-center",
                color,
                className
            )}
        >
            <div className="opacity-90 leading-tight">
                {children}
            </div>
        </motion.div>
    );
}
