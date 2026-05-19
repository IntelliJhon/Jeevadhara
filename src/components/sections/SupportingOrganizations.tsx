"use client";

import React from "react";
import { motion } from "framer-motion";

const SUPPORT_IMAGES = Array.from({ length: 13 }, (_, i) => `/images/support${i + 1}.jpeg`);

export function SupportingOrganizations() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-zinc-100">
            <div className="container mx-auto px-4 lg:px-8 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Our Network</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
                    >
                        Supporting Organizations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 leading-relaxed"
                    >
                        We are proud to be supported by a diverse group of organizations that share our commitment to making a positive impact on the community.
                    </motion.p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden flex flex-col py-4 gap-8">
                {/* Scrolling Left */}
                <motion.div 
                    className="flex whitespace-nowrap gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40
                    }}
                >
                    {/* First copy */}
                    {SUPPORT_IMAGES.map((src, index) => (
                        <div key={index} className="w-48 h-32 md:w-64 md:h-40 bg-white border border-zinc-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center p-6 min-w-max group overflow-hidden">
                            <img src={src} alt={`Supporting Organization ${index + 1}`} className="w-full h-full object-contain filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                        </div>
                    ))}
                    {/* Second copy */}
                    {SUPPORT_IMAGES.map((src, index) => (
                        <div key={`dup-${index}`} className="w-48 h-32 md:w-64 md:h-40 bg-white border border-zinc-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center p-6 min-w-max group overflow-hidden">
                            <img src={src} alt={`Supporting Organization ${index + 1}`} className="w-full h-full object-contain filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                        </div>
                    ))}
                </motion.div>
                
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
}
