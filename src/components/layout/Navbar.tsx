"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: "About Us", href: "/#about" },
    { name: "Our Focus", href: "/#focus" },
    { name: "Innovate", href: "/#innovate" },
    { name: "Impact", href: "/#impact" },
    { name: "Events", href: "/#events" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white border-b border-zinc-200 shadow-sm">
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3 relative z-50">
                    <img
                        src="/images/logo.jpg"
                        alt="Jeevadhara Foundation"
                        className="h-16 w-auto mix-blend-multiply"
                    />
                    <div className="flex flex-col justify-center mt-1 border-l-2 pl-3 border-[#1a3673]/20">
                        <span className="text-[#1a3673] text-lg md:text-xl font-black tracking-tight leading-none mb-1.5">
                            Jeevadhara Renal Care
                        </span>
                        <span className="text-zinc-500 text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.3em] leading-none uppercase">
                            Foundation
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative group text-sm font-bold tracking-wide text-foreground py-1"
                        >
                            <span className="transition-colors group-hover:text-primary">{link.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2.5px] bg-primary transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="md:hidden relative z-50 p-2 text-foreground hover:bg-zinc-100 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE NAV OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-6 flex flex-col gap-4 md:hidden z-40"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-foreground py-4 border-b border-zinc-100"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
