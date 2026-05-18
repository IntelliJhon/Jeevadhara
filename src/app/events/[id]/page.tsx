import React from "react";
import connectToDatabase from "@/lib/db";
import Event from "@/lib/models/Event";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    await connectToDatabase();

    const { id } = await params;
    let eventData = null;

    try {
        const event = await Event.findById(id);
        if (event) {
            eventData = JSON.parse(JSON.stringify(event));
        }
    } catch (err) {
        console.error(err);
    }

    if (!eventData) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4 font-heading">Event Not Found</h1>
                        <p className="text-foreground/70 mb-8">The event you are looking for does not exist or has been removed.</p>
                        <Link href="/#events">
                            <Button>Return to Events</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-24 pb-20 bg-background">
                <article className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <Link href="/#events" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 leading-tight">
                        {eventData.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 mb-8 text-foreground/70 font-medium">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-accent" />
                            <span>{new Date(eventData.date).toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-accent" />
                            <span>{eventData.location}</span>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden mb-12 shadow-xl border border-zinc-100 bg-white">
                        <img
                            src={eventData.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"}
                            alt={eventData.title}
                            className="w-full max-h-[500px] object-cover"
                        />
                    </div>

                    <div className="prose prose-lg prose-zinc max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
                        <h2 className="text-2xl font-bold font-heading text-primary mb-4 border-b pb-4">Event Details</h2>
                        <div className="whitespace-pre-wrap leading-relaxed mt-6">
                            {eventData.fullDescription}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
