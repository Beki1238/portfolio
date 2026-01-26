"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PolaroidProps {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
    rotation?: number;
    width?: number;
    height?: number;
    onClick?: () => void;
}

export function Polaroid({
    src,
    alt,
    caption,
    className,
    rotation = 0,
    width = 300,
    height = 300,
    onClick,
}: PolaroidProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: rotation + (Math.random() * 4 - 2) }}
            className={cn(
                "bg-white p-3 pb-8 shadow-lg cursor-pointer transition-shadow hover:shadow-2xl inline-block",
                className
            )}
            style={{ rotate: `${rotation}deg` }}
            onClick={onClick}
        >
            <div className="relative overflow-hidden bg-gray-200" style={{ width, height }}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
            {caption && (
                <p className="mt-3 text-center font-hand text-black text-xl transform -rotate-1">
                    {caption}
                </p>
            )}
        </motion.div>
    );
}
