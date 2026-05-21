"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

const COMMITTEE_MEMBERS = [
    { role: "Vice Chairman", name: "Dr. M.P. Antoni" },
    { role: "Secretary", name: "Mr. Jose Paul Koikkara" },
    { role: "Joint Secretary", name: "Jose U.A." },
    { role: "Treasurer", name: "Eldhose Kuriakose" },
    { role: "Executive Committee Member", name: "K.V. Murali" },
    { role: "Executive Committee Member", name: "Manu Saju" },
];

export function AdministrationCommittee() {
    return (
        <section className="py-20 md:py-32 bg-zinc-50 relative overflow-hidden border-t border-zinc-100">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-6"
                    >
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Leadership</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
                    >
                        Administration Committee
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
                    <motion.div 
                        className="lg:col-span-4 relative mx-auto w-full max-w-sm"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img 
                                src="/images/saju.jpeg" 
                                alt="Mr. Saju Chacko" 
                                className="w-full h-auto aspect-[4/5] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/60 to-transparent p-8 pt-20">
                                <h3 className="text-2xl font-bold text-white font-heading">Mr. Saju Chacko</h3>
                                <p className="text-white/80 font-medium">Founder & Chairman</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-8 flex flex-col gap-8"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-zinc-100">
                            <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                                What began as a personal act of compassion by Mr. Saju Chacko, a Kochi-based jeweller and social activist, has today grown into one of Kerala’s impactful community-driven healthcare initiatives. For over 14 years, through his dedicated leadership, relentless efforts, and humanitarian vision, he has been tirelessly leading the Jeevadhara Renal Care Foundation in supporting economically weaker renal patients by ensuring access to life-saving dialysis treatment free of cost.
                            </p>
                            <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                                Established in 2012, the Foundation has facilitated more than 50,000+ free dialysis sessions through collaborations with 21 hospitals across Ernakulam and Idukki districts, while also donating 14 dialysis machines to strengthen treatment infrastructure and improve long-term access to care.
                            </p>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Registered under the Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act and recognised under Sections 12AA and 80G of the Income Tax Act, Jeevadhara continues to function as a beacon of hope for renal patients, driven by Mr. Saju Chacko’s unwavering commitment to ensuring that no patient is denied treatment due to financial hardship.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold font-heading text-primary mb-4">Our Mission</h4>
                                <p className="text-foreground/80 leading-relaxed text-sm">
                                    Our mission is to provide accessible and affordable dialysis care to economically disadvantaged renal patients, ensuring that financial constraints do not prevent life-saving treatment. We are committed to promoting early detection and prevention of kidney and lifestyle diseases through medical camps, awareness programs, and community education. We strive to collaborate with government and allied agencies to strengthen organ donation initiatives and improve healthcare infrastructure in underserved areas.
                                </p>
                            </div>
                            
                            <div className="bg-blue-500/5 p-8 rounded-[2rem] border border-blue-500/10">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="text-xl font-bold font-heading text-blue-900 mb-4">Our Vision</h4>
                                <p className="text-foreground/80 leading-relaxed text-sm">
                                    To create a compassionate and inclusive society where no individual is denied access to essential renal care, where awareness, prevention, and organ donation are embraced as collective social responsibilities.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-10">Committee Members</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COMMITTEE_MEMBERS.map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 border border-zinc-200">
                                    <Users className="w-5 h-5 text-zinc-400" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                                <p className="text-primary font-medium text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
