"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Loader2, X, Share2 } from "lucide-react";
import { toast } from "sonner";

export function Events() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal states
    const [showAllModal, setShowAllModal] = useState(false);
    const [allEvents, setAllEvents] = useState<any[]>([]);
    const [loadingAll, setLoadingAll] = useState(false);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch("/api/events?limit=3");
                if (res.ok) {
                    const data = await res.json();
                    setEvents(data.events || []);
                }
            } catch (err) {
                console.error("Failed to fetch events:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    const fetchAllEvents = async () => {
        setLoadingAll(true);
        try {
            const res = await fetch("/api/events");
            if (res.ok) {
                const data = await res.json();
                setAllEvents(data.events || []);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingAll(false);
        }
    };

    const handleViewAllClick = () => {
        if (events.length === 0) {
            toast.info("No events available at the moment", { description: "Please check back later for upcoming community programs." });
        } else {
            setShowAllModal(true);
            if (allEvents.length === 0) {
                fetchAllEvents();
            }
        }
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
                            Upcoming Events
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/70 max-w-2xl"
                        >
                            Join us in our mission. Participate in our upcoming community events.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button onClick={handleViewAllClick} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl">
                            View All Events
                        </Button>
                    </motion.div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    </div>
                ) : events.length === 0 ? (
                    <Card className="text-center py-24 bg-white border-dashed border-2">
                        <p className="text-zinc-500 font-medium text-xl">No upcoming events scheduled at the moment.</p>
                        <p className="text-sm mt-3 text-zinc-400">Please check back later.</p>
                    </Card>
                ) : (
                    <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {events.map((event, index) => (
                            <motion.div
                                key={event._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full w-[85vw] sm:w-[300px] md:w-auto shrink-0 snap-center flex flex-col"
                            >
                                <Card className="h-full flex flex-col p-0 overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-[1.5rem] md:rounded-[2rem] bg-white relative">
                                    <div className="relative h-48 md:h-64 overflow-hidden">
                                        <img
                                            src={event.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent"></div>
                                        
                                        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/20 backdrop-blur-md px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl text-center border border-white/30 shadow-xl">
                                            <p className="text-white font-black text-xl md:text-2xl leading-none">{new Date(event.date).getDate()}</p>
                                            <p className="text-white/90 text-[10px] font-bold uppercase tracking-widest mt-1">{new Date(event.date).toLocaleDateString([], { month: 'short' })}</p>
                                        </div>

                                        <div className="absolute bottom-4 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
                                            <h3 className="text-xl md:text-2xl font-bold font-heading text-white leading-tight line-clamp-2 drop-shadow-md">
                                                {event.title}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <div className="p-5 md:p-8 flex flex-col flex-1 bg-white relative">
                                        <p className="text-[14px] md:text-[15px] text-zinc-600 mb-6 md:mb-8 flex-1 line-clamp-3 leading-relaxed">
                                            {event.shortDescription}
                                        </p>

                                        <div className="flex flex-col gap-3 md:gap-4 text-sm text-zinc-600 mb-6 md:mb-8 font-medium">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                                    <Calendar className="w-4 h-4 text-primary" />
                                                </div>
                                                <span>{new Date(event.date).toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                            </div>
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="truncate flex-1 min-w-0">{event.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 md:gap-3 w-full mt-auto pt-5 md:pt-6 border-t border-zinc-100">
                                            <Link href={`/events/${event._id}`} className="block flex-1">
                                                <Button className="w-full bg-primary text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl font-bold tracking-wide h-12 md:h-14">
                                                    Explore Event
                                                </Button>
                                            </Link>
                                            <Button onClick={(e) => handleShare(e, event)} variant="outline" className="w-12 md:w-14 px-0 bg-zinc-50 border border-zinc-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-xl shrink-0 h-12 md:h-14">
                                                <Share2 className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* All Events Modal Overlay */}
            <AnimatePresence>
                {showAllModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-8 bg-zinc-900/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-zinc-50 md:rounded-3xl w-full h-full md:h-auto md:max-w-5xl md:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative md:border border-white"
                        >
                            <div className="p-5 md:p-8 shrink-0 flex justify-between items-center bg-white border-b border-zinc-100">
                                <h2 className="text-xl md:text-3xl font-bold font-heading text-primary">All Scheduled Events</h2>
                                <button onClick={() => setShowAllModal(false)} className="p-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-full transition-colors flex shrink-0">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto overflow-x-hidden px-0 py-4 md:p-8 custom-scrollbar bg-zinc-100/50 md:bg-transparent">
                                {loadingAll ? (
                                    <div className="flex justify-center py-32">
                                        <Loader2 className="w-12 h-12 animate-spin text-primary" />
                                    </div>
                                ) : (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        {allEvents.map((event) => (
                                            <Card key={event._id} className="h-full flex flex-col p-0 overflow-hidden group border-0 border-y md:border shadow-sm hover:shadow-xl transition-all duration-300 rounded-none md:rounded-[1.2rem] bg-white relative">
                                                <div className="relative h-48 md:h-40 overflow-hidden">
                                                    <img
                                                        src={event.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"}
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
                                                        <Link href={`/events/${event._id}`} onClick={() => setShowAllModal(false)} className="block flex-1">
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
