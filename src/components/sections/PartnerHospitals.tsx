"use client";

import React from "react";
import { motion } from "framer-motion";

const HOSPITALS = [
    "L.F Hospital- Angamaly",
    "Mar Augustine Golden Jubilee Hospital Mookkannoor",
    "Lisie Hospital-Ernakulam",
    "Medical Trust – Ernakulam",
    "MOSC Medical College Hospital,Kolenchery",
    "Lourdes Hospital- Ernakulam",
    "MBMM Hospital-Kothamangalam",
    "Nirmala Medical Centre, Kizhakkara, Muvattupuzha",
    "Holy Family Hospital- Thodupuzha",
    "Fathima Hospital-Perumpaduppu",
    "St.Joseph's Hospital,Dharmagiri-Kothamangalam",
    "San Joe Hospital, Perumbavoor",
    "M.A.J.Hospital, Edappally",
    "Chazhikattu Multi Super- Speciality Hospital,Thodupuzha",
    "P.S.Mission Hospital,Maradu,Ernakulam",
    "Carmel Hospital,Aluva",
    "Specialist Hospital-Ernakulam",
    "A P Varkey Mission Hospital – Ernakulam",
    "Morning Star Medical Centre-Adimali",
    "Samaritan Hospital- Kizhakkambalam"
];

export function PartnerHospitals() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-zinc-100">
            <div className="container mx-auto px-4 lg:px-8 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Network of Care</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
                    >
                        Partner Hospitals
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 leading-relaxed"
                    >
                        Jeevadhara Renal Care Foundation has MOUs with 20 leading hospitals to enhance patient care and provide free dialysis coupons through our Karuthal initiative.
                    </motion.p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden flex flex-col py-8 gap-8">
                {/* First Row - Scrolling Left */}
                <motion.div 
                    className="flex whitespace-nowrap gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50
                    }}
                >
                    {/* First copy */}
                    {HOSPITALS.map((hospital, index) => (
                        <div key={index} className="px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-w-max">
                            <span className="text-[15px] font-semibold text-foreground/80">{hospital}</span>
                        </div>
                    ))}
                    {/* Second copy */}
                    {HOSPITALS.map((hospital, index) => (
                        <div key={`dup-${index}`} className="px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-w-max">
                            <span className="text-[15px] font-semibold text-foreground/80">{hospital}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Second Row - Scrolling Right */}
                <motion.div 
                    className="flex whitespace-nowrap gap-6 w-max"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60
                    }}
                >
                    {/* First copy of reversed array */}
                    {[...HOSPITALS].reverse().map((hospital, index) => (
                        <div key={index} className="px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-w-max">
                            <span className="text-[15px] font-semibold text-foreground/80">{hospital}</span>
                        </div>
                    ))}
                    {/* Second copy of reversed array */}
                    {[...HOSPITALS].reverse().map((hospital, index) => (
                        <div key={`dup-${index}`} className="px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-w-max">
                            <span className="text-[15px] font-semibold text-foreground/80">{hospital}</span>
                        </div>
                    ))}
                </motion.div>
                
                {/* Gradient Masks for fading edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
}
