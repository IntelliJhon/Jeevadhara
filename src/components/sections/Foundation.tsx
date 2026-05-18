"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Activity, HeartPulse, Building2, Stethoscope, Award, BadgeCheck } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && ref.current) {
            const controls = animate(0, end, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (value) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(value).toLocaleString() + suffix;
                    }
                }
            });
            return controls.stop;
        }
    }, [inView, end, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

const STATS = [
    { value: 50000, suffix: "+", label: "Free Dialysis to 1000+ renal patients", icon: <HeartPulse className="w-6 h-6 text-red-500" /> },
    { value: 200, suffix: "+", label: "Kidney screening camps", icon: <Activity className="w-6 h-6 text-blue-500" /> },
    { value: 21, suffix: "+", label: "Hospital Partners", icon: <Building2 className="w-6 h-6 text-emerald-500" /> },
    { value: 14, suffix: "+", label: "Dialysis Machines", icon: <Stethoscope className="w-6 h-6 text-purple-500" /> },
    { value: 6, suffix: "+", label: "Accreditations", icon: <BadgeCheck className="w-6 h-6 text-amber-500" /> },
    { value: 20, suffix: "+", label: "Awards & Recognitions", icon: <Award className="w-6 h-6 text-orange-500" /> },
];

export function Foundation() {
    return (
        <section id="about" className="py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    <motion.div
                        className="lg:col-span-6"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 border-b-4 border-zinc-200 inline-block pb-2">
                            Jeevadhara Foundation
                        </h2>
                        <div className="text-[17px] text-foreground/80 space-y-6 leading-[1.8] mb-10">
                            <p className="font-semibold text-foreground text-lg">
                                Jeevadhara renal care foundation is established in 2012, is a distinguished organization dedicated to the service of the people affected by kidney disease and other diseases. 
                            </p>
                            <p>
                                The Foundation operates from Angamaly, the Kochi Airport City. The present activities as well as new programmes of Jeevadhara will be continued with more vigor and enthusiasm by a team of professionals.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100">
                            <h3 className="text-2xl font-bold font-heading text-primary mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-accent rounded-full"></div>
                                WE UPHOLD
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "KNOW YOUR KIDNEYS; KNOW YOUR HEALTH",
                                    "PREVENTION IS BETTER THAN CURE",
                                    "ENSURE HEALTHY LIVES AND PROMOTE WELL-BEING OF ALL AT ALL AGES (SDG3)",
                                    "NO ONE LEFT BEHIND"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                        <span className="font-medium text-foreground/80 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-6 relative z-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold font-heading text-primary mb-8 text-center md:text-left">
                            So Far So...
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {STATS.map((stat, idx) => (
                                <Card key={idx} className="p-6 bg-white border-t-[4px] border-t-white hover:border-t-primary transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                                            {stat.icon}
                                        </div>
                                        <h4 className="text-3xl font-black font-heading text-primary tracking-tight">
                                            <Counter end={stat.value} suffix={stat.suffix} />
                                        </h4>
                                    </div>
                                    <p className="text-sm font-medium text-foreground/70 leading-snug">
                                        {stat.label}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
