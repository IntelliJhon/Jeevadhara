"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, FileText, Landmark, BadgePercent, Building, FileDigit } from "lucide-react";

const ACCREDITATIONS = [
    {
        title: "TCLS Act 1955",
        description: "Registered as a charitable organization with Reg.No: EKM/TC/228/2013 under TCLS Act 1955.",
        icon: <Landmark className="w-6 h-6 text-emerald-600" />
    },
    {
        title: "12AA Registration",
        description: "CIT/CHN/Tech/12A-97/2013-14 under Income Tax Act 1961.",
        icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
        title: "80G Exemption",
        description: "Under Income Tax Act with AABAJ9087C/09/17-18/S-0111/80G as Registration Number.",
        icon: <BadgePercent className="w-6 h-6 text-amber-600" />
    },
    {
        title: "CSR Registration",
        description: "Registration No CSR00017056 @ National CSR Exchange Portal, Govt. of India.",
        icon: <Building className="w-6 h-6 text-purple-600" />
    },
    {
        title: "PAN Details",
        description: "PAN No AABAJ9087C",
        icon: <FileDigit className="w-6 h-6 text-zinc-600" />
    },
    {
        title: "NGO Darpan",
        description: "UID: KL/2021/0295385, NITI Aayog Govt. of India.",
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />
    }
];

export function Accreditations() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-zinc-200">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm mb-6"
                    >
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Trust & Transparency</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6"
                    >
                        Our Accreditations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 leading-relaxed"
                    >
                        Jeevadhara Foundation is a fully recognized, accredited, and compliant charitable organization.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACCREDITATIONS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white border border-zinc-200/80 hover:border-emerald-500/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md flex items-start gap-4 p-6 rounded-2xl group">
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
