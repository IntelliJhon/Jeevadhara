"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/Card";

const FOCUS_AREAS = [
    {
        title: "Critical Health Support",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.1 2.1 0 0 0 0 2.97l7.96 7.96a2.1 2.1 0 0 0 2.97 0l2.97-2.97a2.1 2.1 0 0 0 0-2.97L15 5Z" /><path d="M15 12h.01" /></svg>
        ),
        description: "Targeted financial and medical aid for patients fighting kidney failure, cancer, and other severe chronic illnesses.",
        color: "bg-red-50"
    },
    {
        title: "Educational Aid",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
        ),
        description: "Sponsorships, scholarships, and resources for children from vulnerable families to ensure access to quality schooling.",
        color: "bg-blue-100"
    },
    {
        title: "Social Welfare & Relief",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg>
        ),
        description: "Emergency disaster relief, support for housing projects, and essential provisions for families in crisis.",
        color: "bg-amber-100"
    },
    {
        title: "Emotional & Wellness",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        ),
        description: "Providing access to counseling services and wellness programs for long-term patients and their caregivers.",
        color: "bg-zinc-100"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export function FocusCards() {
    return (
        <section id="focus" className="py-24 bg-zinc-50 border-b border-zinc-200">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
                    >
                        Our Comprehensive Focus
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70"
                    >
                        We look at the whole person and community, providing support in four critical areas of human need.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {FOCUS_AREAS.map((area, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 hover:scale-[1.03] cursor-default border-t-[6px] border-t-white hover:border-t-primary group">
                                <div className={`w-16 h-16 ${area.color} rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12`}>
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-primary mb-3">
                                    {area.title}
                                </h3>
                                <p className="text-sm text-foreground/70 leading-relaxed">
                                    {area.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
