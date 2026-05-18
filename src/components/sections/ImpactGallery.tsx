"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, HandHeart } from "lucide-react";

// Use the newly provided impact images
const IMAGES = [
    "/images/impact1.jpg",
    "/images/impact2.jpg",
    "/images/impact3.jpg",
    "/images/impact4.jpg",
    "/images/impact5.jpg",
    "/images/impact6.jpg"
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export function ImpactGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    };

    return (
        <section id="impact" className="py-24 md:py-32 bg-zinc-50 border-b border-zinc-200 overflow-hidden relative">
            <div className="container mx-auto px-4 lg:px-8 text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent font-semibold tracking-wide mb-6"
                >
                    <HandHeart size={18} /> Field Impact Moments
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary mb-6"
                >
                    Visualizing Our Reach
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
                >
                    Swipe through these moments capturing the heart of our community initiatives.
                </motion.p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto h-[40vh] md:h-[50vh] flex items-center justify-center px-4 mt-4">
                {/* Navigation Buttons Desktop */}
                <button
                    onClick={handlePrev}
                    className="hidden md:flex absolute left-4 z-50 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:bg-primary hover:text-white transition-all text-primary"
                >
                    <ChevronLeft size={32} />
                </button>

                <AnimatePresence>
                    {IMAGES.map((src, index) => {
                        const length = IMAGES.length;
                        let diff = index - currentIndex;
                        // Determine shortest wrap path in circular sliding
                        if (diff > Math.floor(length / 2)) diff -= length;
                        if (diff < -Math.floor(length / 2)) diff += length;

                        // Only render nearest items to save DOM elements
                        if (Math.abs(diff) > 2) return null;

                        return (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: Math.abs(diff) > 2 ? 0 : 1 - Math.abs(diff) * 0.25,
                                    scale: 1 - Math.abs(diff) * 0.15,
                                    x: diff * 80, // Spread gap reduced slightly
                                    zIndex: 10 - Math.abs(diff),
                                }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                drag={diff === 0 ? "x" : false} // Only drag top item
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        handleNext();
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        handlePrev();
                                    }
                                }}
                                className={`absolute rounded-3xl overflow-hidden shadow-2xl border-4 ${diff === 0 ? "border-white" : "border-white/50"} ${diff === 0 ? "cursor-grab active:cursor-grabbing" : ""} w-[85%] md:w-[50%] max-w-2xl aspect-video bg-zinc-200`}
                            >
                                <img
                                    src={src}
                                    alt={`Impact ${index + 1}`}
                                    className="w-full h-full object-cover pointer-events-none select-none"
                                    draggable="false"
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                <button
                    onClick={handleNext}
                    className="hidden md:flex absolute right-4 z-50 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:bg-primary hover:text-white transition-all text-primary"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Mobile Nav Helpers */}
            <div className="flex md:hidden justify-center gap-6 mt-12">
                <button onClick={handlePrev} className="p-4 bg-white shadow-xl rounded-full text-primary hover:bg-zinc-100 active:scale-95 transition-transform">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="p-4 bg-white shadow-xl rounded-full text-primary hover:bg-zinc-100 active:scale-95 transition-transform">
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
}
