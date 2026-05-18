"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Sparkles, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export function ProgramIdea() {
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: topic }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to generate program idea");
            }

            setResult(data.idea);
        } catch (err: any) {
            const msg = err.message || "";
            let friendlyError = "We encountered an unexpected issue while generating your plan. Please try again later.";

            if (msg.includes("503") || msg.includes("high demand") || msg.includes("overloaded") || msg.includes("500")) {
                friendlyError = "Our AI consultant is currently experiencing unusually high traffic. Please wait a few moments and try generating again.";
            } else if (msg.includes("API") || msg.includes("key")) {
                friendlyError = "There seems to be a temporary issue with our AI configuration. Please try again later.";
            }

            setError(friendlyError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="innovate" className="py-24 bg-white border-b border-zinc-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-64 bg-primary/5 rounded-full blur-3xl -z-10 -mr-32 -mt-32"></div>

            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-t-[6px] border-t-primary shadow-xl bg-white/80 backdrop-blur-sm relative z-10 p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="text-amber-500 w-8 h-8" />
                                <h2 className="text-3xl font-bold font-heading text-primary">
                                    Program Idea Consultant
                                </h2>
                            </div>

                            <p className="text-foreground/70 mb-8 leading-relaxed">
                                Want to innovate? Use our AI consultant to suggest a new, relevant program idea for Jeevadhara based on current global or local needs. We'll even check external sources for inspiration.
                            </p>

                            <form onSubmit={handleGenerate} className="space-y-6">
                                <div>
                                    <label htmlFor="topic" className="block text-sm font-medium mb-3 text-foreground/80">
                                        What social issue should the program address?
                                    </label>
                                    <input
                                        id="topic"
                                        type="text"
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        placeholder="e.g. Elderly care, Clean drinking water..."
                                        className="w-full px-5 py-3.5 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-zinc-50 shadow-inner"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading || !topic.trim()}
                                    className="w-full h-14 relative overflow-hidden group text-lg rounded-xl"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin w-5 h-5" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                Generate Innovative Program <Sparkles className="w-5 h-5 ml-1 transition-transform group-hover:scale-125" />
                                            </>
                                        )}
                                    </span>
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    <div className="relative min-h-[450px]">
                        <AnimatePresence mode="wait">
                            {!result && !error && !loading && (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex items-center justify-center border-2 border-dashed border-zinc-200 rounded-3xl bg-zinc-50/50 p-8 text-center"
                                >
                                    <p className="text-zinc-500 font-medium">Your AI-generated program plan will appear here.</p>
                                </motion.div>
                            )}

                            {loading && (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="h-full flex items-center justify-center border border-zinc-100 shadow-xl rounded-3xl bg-white p-8"
                                >
                                    <div className="text-center flex flex-col items-center">
                                        <Loader2 className="w-14 h-14 text-primary animate-spin mb-6" />
                                        <h3 className="font-bold text-xl text-primary font-heading mb-2">Analyzing Inputs...</h3>
                                        <p className="text-foreground/60 text-sm max-w-sm">Drafting a comprehensive program design based on current needs. This may take a few seconds.</p>
                                    </div>
                                </motion.div>
                            )}

                            {error && !loading && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Card className="border-t-[6px] border-t-red-500 shadow-xl bg-red-50/30 p-8 rounded-3xl">
                                        <div className="flex items-start gap-4 text-red-600 mb-6 border-b border-red-100 pb-6">
                                            <AlertCircle className="w-8 h-8 shrink-0" />
                                            <div>
                                                <h3 className="font-bold text-xl font-heading mb-1 text-red-700">Unable to generate plan</h3>
                                                <p className="text-red-700 mt-2 font-medium">{error}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-red-700/80 leading-relaxed">
                                            This is usually a temporary network or server delay. If the issue persists, please try again in a few minutes.
                                        </p>
                                    </Card>
                                </motion.div>
                            )}

                            {result && !loading && !error && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full"
                                >
                                    <Card className="border-t-[6px] border-t-emerald-500 shadow-xl bg-white rounded-3xl p-8 h-full flex flex-col">
                                        <div className="flex items-center gap-3 text-emerald-600 mb-6 border-b border-zinc-100 pb-5 shrink-0">
                                            <CheckCircle2 className="w-7 h-7" />
                                            <h3 className="font-bold font-heading text-2xl text-primary">Suggested Program Plan</h3>
                                        </div>
                                        <div className="prose prose-sm prose-zinc max-w-none flex-1 overflow-y-auto pr-4 custom-scrollbar">
                                            <div dangerouslySetInnerHTML={{ __html: result }} />
                                        </div>
                                    </Card>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
