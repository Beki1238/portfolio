"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
    { name: "Crime Scene", href: "/" },
    { name: "Suspect", href: "/suspect" },
    { name: "Evidence", href: "/evidence" },
    { name: "Modus Operandi", href: "/modus-operandi" },
    { name: "Timeline", href: "/timeline" },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 pointer-events-none">
            <div className="flex space-x-2 pointer-events-auto">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "px-6 py-2 rounded-t-lg font-display text-sm uppercase tracking-widest transition-all duration-300 border-t border-l border-r border-[#3a3a3a]",
                            pathname === item.href
                                ? "bg-[#f4e4bc] text-[#0e0e0e] translate-y-2 shadow-[0_-5px_15px_rgba(0,0,0,0.5)]"
                                : "bg-[#1a1a1a] text-[#888] hover:bg-[#2a2a2a] hover:text-[#ccc]"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
