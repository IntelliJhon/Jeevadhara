"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, QrCode } from "lucide-react";

export function Donate() {
    return (
        <section id="donate" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-zinc-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
                    >
                        {/* Background decorative elements */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

                        <div className="p-10 md:p-16 flex-1 flex flex-col justify-center relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 w-fit backdrop-blur-md"
                            >
                                <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
                                <span className="text-sm font-semibold tracking-wide uppercase text-white">Donate Us</span>
                            </motion.div>

                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight text-white">
                                Your kindness can be the lifeline someone is waiting for.
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
                                Every contribution, no matter how small, helps us provide free dialysis, medical care, and essential support to those who need it the most. Join us in our mission to bring hope and healing to vulnerable families.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white">
                                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 flex items-center gap-4 backdrop-blur-md w-full sm:w-auto">
                                    <div className="bg-primary/20 p-3 rounded-xl">
                                        <QrCode className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400 font-medium">Official UPI ID</p>
                                        <p className="font-mono mt-1 text-lg font-semibold tracking-wide select-all">qr.jeevadhara@sib</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-10 md:p-16 md:w-[400px] flex flex-col items-center justify-center bg-white relative z-10 border-l border-zinc-100">
                            <div className="relative group w-full max-w-[280px]">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
                                <div className="relative bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-xl flex flex-col items-center">
                                    <div className="bg-zinc-50 p-4 rounded-2xl mb-6 w-full aspect-square flex items-center justify-center border border-zinc-100">
                                        {/* Using dynamically generated QR for the UPI ID to ensure high quality and immediate functionality. */}
                                        <img 
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=upi://pay?pa=qr.jeevadhara@sib&pn=Jeevadhara%20Foundation&cu=INR" 
                                            alt="Donate via UPI QR Code"
                                            className="w-full h-full object-contain mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="text-center w-full">
                                        <p className="text-sm text-zinc-500 font-medium mb-4">Scan with any UPI App</p>
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="px-3 py-1.5 bg-zinc-100 rounded-lg text-xs font-bold text-zinc-600">GPay</div>
                                            <div className="px-3 py-1.5 bg-zinc-100 rounded-lg text-xs font-bold text-zinc-600">PhonePe</div>
                                            <div className="px-3 py-1.5 bg-zinc-100 rounded-lg text-xs font-bold text-zinc-600">Paytm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
