"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Loader2, X, Share2, Newspaper, Building2, Users, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
    { id: "News", title: "📰 News", icon: Newspaper, color: "text-blue-500", desc: "Achievements, announcements & updates" },
    { id: "Institutional Events", title: "🏛️ Institutional Events", icon: Building2, color: "text-purple-500", desc: "Collaborations with institutions & orgs" },
    { id: "Community Events", title: "🤝 Community Events", icon: Users, color: "text-green-500", desc: "Outreach, medical camps & gatherings" },
    { id: "Gallery", title: "🖼️ Gallery", icon: ImageIcon, color: "text-orange-500", desc: "Photo and video highlights" }
];

export function Events() {
    const [allEvents, setAllEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                // Fetch all events to populate category covers
                const res = await fetch("/api/events");
                if (res.ok) {
                    const data = await res.json();
                    setAllEvents(data.events || []);
                }
            } catch (err) {
                console.error("Failed to fetch events:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setShowModal(true);
    };

    const handleShare = async (e: React.MouseEvent, event: any) => {
        e.preventDefault();
        e.stopPropagation();
        
        const shareData = {
            title: event.title,
            text: event.shortDescription,
            url: window.location.origin + `/events/${event._id}`
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                toast.success("Link copied to clipboard!");
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    const getThumbnail = (event: any) => {
        if (event.image) return event.image;
        if (event.videoUrl) {
            // Convert Cloudinary video URL to image thumbnail by changing extension to .jpg
            return event.videoUrl.replace(/\.[^/.]+$/, ".jpg");
        }
        return "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop";
    };

    const getCategoryCover = (categoryId: string) => {
        // Find the latest event with an image OR video in this category
        const categoryEvents = allEvents.filter(e => (e.category || 'News') === categoryId && (e.image || e.videoUrl));
        if (categoryEvents.length > 0) {
            // Assuming events are sorted by date ascending from API, take last
            const latestEvent = categoryEvents[categoryEvents.length - 1];
            return getThumbnail(latestEvent);
        }
        return "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop";
    };

    const filteredEvents = selectedCategory 
        ? allEvents.filter(e => (e.category || 'News') === selectedCategory)
        : [];

    return (
        <section id="events" className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
                        >
                            Events
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/70 max-w-2xl"
                        >
                            Explore our latest achievements, programs, and community outreach.
                        </motion.p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {CATEGORIES.map((cat, index) => {
                            const coverImage = getCategoryCover(cat.id);
                            return (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => handleCategoryClick(cat.id)}
                                    className="cursor-pointer group"
                                >
                                    <Card className="h-[300px] md:h-[400px] flex flex-col p-0 overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-[1.5rem] md:rounded-[2rem] bg-white relative">
                                        <div className="absolute inset-0">
                                            <img
                                                src={coverImage}
                                                alt={cat.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
                                        </div>
                                        
                                        <div className="relative h-full p-8 flex flex-col justify-end text-white">
                                            <div className="mb-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                                                <cat.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-2 drop-shadow-md">
                                                {cat.title}
                                            </h3>
                                            <p className="text-white/90 text-lg font-medium drop-shadow-md">
                                                {cat.desc}
                                            </p>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Category Events Modal Overlay */}
            <AnimatePresence>
                {showModal && selectedCategory && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-8 bg-zinc-900/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-zinc-50 md:rounded-3xl w-full h-full md:h-auto md:max-w-5xl md:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative md:border border-white"
                        >
                            <div className="p-5 md:p-8 shrink-0 flex justify-between items-center bg-white border-b border-zinc-100">
                                <h2 className="text-xl md:text-3xl font-bold font-heading text-primary">{CATEGORIES.find(c => c.id === selectedCategory)?.title}</h2>
                                <button onClick={() => setShowModal(false)} className="p-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-full transition-colors flex shrink-0">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto overflow-x-hidden px-0 py-4 md:p-8 custom-scrollbar bg-zinc-100/50 md:bg-transparent">
                                {filteredEvents.length === 0 ? (
                                    <div className="flex justify-center items-center py-32 text-zinc-500">
                                        <p>No events found in this category yet.</p>
                                    </div>
                                ) : (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        {filteredEvents.map((event) => (
                                            <Card key={event._id} className="h-full flex flex-col p-0 overflow-hidden group border-0 border-y md:border shadow-sm hover:shadow-xl transition-all duration-300 rounded-none md:rounded-[1.2rem] bg-white relative">
                                                <div className="relative h-48 md:h-40 overflow-hidden">
                                                    <img
                                                        src={getThumbnail(event)}
                                                        alt={event.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent"></div>
                                                    
                                                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-center border border-white/30 shadow-sm">
                                                        <p className="text-white font-black text-sm leading-none">{new Date(event.date).getDate()}</p>
                                                        <p className="text-white/90 text-[8px] font-bold uppercase tracking-widest mt-0.5">{new Date(event.date).toLocaleDateString([], { month: 'short' })}</p>
                                                    </div>

                                                    <div className="absolute bottom-3 left-3 right-3">
                                                        <h3 className="text-base font-bold font-heading text-white leading-tight line-clamp-2 drop-shadow-md">
                                                            {event.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                
                                                <div className="p-4 flex flex-col flex-1 bg-white relative">
                                                    <p className="text-[13px] text-zinc-600 mb-4 flex-1 line-clamp-2 leading-relaxed">
                                                        {event.shortDescription}
                                                    </p>

                                                    <div className="flex flex-col gap-2 text-xs text-zinc-600 mb-4 font-medium">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-7 h-7 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                                                <Calendar className="w-3 h-3 text-primary" />
                                                            </div>
                                                            <span>{new Date(event.date).toLocaleDateString([], { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 min-w-0">
                                                            <div className="w-7 h-7 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                                                <MapPin className="w-3 h-3 text-primary" />
                                                            </div>
                                                            <span className="truncate flex-1 min-w-0">{event.location}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-2 w-full mt-auto pt-3 border-t border-zinc-100">
                                                        <Link href={`/events/${event._id}`} onClick={() => setShowModal(false)} className="block flex-1">
                                                            <Button size="sm" className="w-full bg-primary text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 rounded-lg font-bold tracking-wide h-10">
                                                                Explore
                                                            </Button>
                                                        </Link>
                                                        <Button onClick={(e) => handleShare(e, event)} size="sm" variant="outline" className="w-10 px-0 bg-zinc-50 border border-zinc-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-lg shrink-0 h-10">
                                                            <Share2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
