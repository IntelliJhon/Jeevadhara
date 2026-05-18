"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import dynamic from 'next/dynamic';

const LocationPicker = dynamic(() => import('@/components/ui/LocationPicker'), {
    ssr: false,
    loading: () => <div className="h-64 w-full bg-zinc-100 animate-pulse rounded-xl flex items-center justify-center text-zinc-400 text-sm font-medium border border-zinc-200">Loading interactive map...</div>
});

export default function AdminDashboard() {
    const router = useRouter();
    const [events, setEvents] = useState<any[]>([]);
    const [view, setView] = useState<"list" | "create" | "edit">("list");
    const [editingId, setEditingId] = useState<string | null>(null);

    const [form, setForm] = useState({ title: "", date: "", location: "", shortDescription: "", fullDescription: "", image: "" });

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            router.push("/admin/login");
        } else {
            fetchEvents();
        }
    }, [router]);

    const fetchEvents = async () => {
        try {
            const res = await fetch("/api/events");
            const data = await res.json();
            if (data.events) setEvents(data.events);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        router.push("/");
    };

    const handleDelete = async (id: string) => {
        toast.error("Are you sure?", {
            description: "This will permanently delete the event from the database.",
            action: {
                label: "Confirm Delete",
                onClick: async () => {
                    await fetch(`/api/events/${id}`, { method: "DELETE" });
                    fetchEvents();
                    toast.success("Event permanently deleted", { description: "The event has been securely removed from the database." });
                }
            },
            cancel: {
                label: "Cancel",
                onClick: () => toast.dismiss()
            }
        });
    };

    const startEdit = (ev: any) => {
        setForm({
            title: ev.title || "",
            date: ev.date ? new Date(ev.date).toISOString().split('T')[0] : "",
            location: ev.location || "",
            shortDescription: ev.shortDescription || "",
            fullDescription: ev.fullDescription || "",
            image: ev.image || ""
        });
        setEditingId(ev._id);
        setView("edit");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (view === "create") {
            await fetch("/api/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
        } else if (view === "edit" && editingId) {
            await fetch(`/api/events/${editingId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
        }
        setForm({ title: "", date: "", location: "", shortDescription: "", fullDescription: "", image: "" });

        toast.success(view === "edit" ? "Event professionally updated" : "New Event dynamically published", {
            description: view === "edit" ? "Your changes have been saved gracefully." : "Your event is now live across the platform."
        });

        setEditingId(null);
        setView("list");
        fetchEvents();
    };

    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col md:flex-row shadow-inner">
            <div className="w-full md:w-64 bg-primary text-white p-6 flex flex-col shadow-2xl z-20 shrink-0">
                <h2 className="text-2xl font-bold font-heading mb-8 pt-4 border-b border-white/10 pb-6">
                    Jeevadhara<br /><span className="text-sm font-normal text-white/70 block mt-2 tracking-widest uppercase">Admin Panel</span>
                </h2>
                <nav className="flex-1 space-y-2 mb-8 md:mb-0">
                    <button onClick={() => { setView("list"); setEditingId(null); setForm({ title: "", date: "", location: "", shortDescription: "", fullDescription: "", image: "" }); }} className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${view === "list" ? "bg-white text-primary shadow-lg" : "hover:bg-white/10 text-white/80 hover:text-white"}`}>Events List</button>
                    <button onClick={() => { setView("create"); setEditingId(null); setForm({ title: "", date: "", location: "", shortDescription: "", fullDescription: "", image: "" }); }} className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${(view === "create" || view === "edit") ? "bg-white text-primary shadow-lg" : "hover:bg-white/10 text-white/80 hover:text-white"}`}>{view === "edit" ? "Edit Event" : "Create Event"}</button>
                </nav>
                <div className="mt-auto border-t border-white/10 pt-6">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-3 hover:bg-red-500/20 text-red-100 flex items-center justify-between rounded-lg transition-colors font-medium">Log out <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg></button>
                </div>
            </div>

            <div className="flex-1 p-6 md:p-12 overflow-y-auto w-full max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-heading text-primary">{view === "list" ? "Manage Events" : view === "edit" ? "Edit Event" : "Create New Event"}</h1>
                    {view === "list" && (
                        <Button onClick={() => setView("create")} className="shadow-lg">
                            + New Event
                        </Button>
                    )}
                </div>

                {view === "list" && (
                    <Card className="bg-white p-0 overflow-hidden border border-zinc-200 shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse whitespace-nowrap">
                                <thead>
                                    <tr className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 text-sm">
                                        <th className="py-4 px-6 font-semibold">Event Title</th>
                                        <th className="py-4 px-6 font-semibold">Date</th>
                                        <th className="py-4 px-6 font-semibold">Location</th>
                                        <th className="py-4 px-6 font-semibold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map(ev => (
                                        <tr key={ev._id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                            <td className="py-4 px-6 font-semibold text-foreground max-w-[300px] truncate">{ev.title}</td>
                                            <td className="py-4 px-6 text-foreground/80">{new Date(ev.date).toLocaleDateString()}</td>
                                            <td className="py-4 px-6 text-foreground/80">{ev.location}</td>
                                            <td className="py-4 px-6 text-right space-x-2">
                                                <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50" onClick={() => startEdit(ev)}>Edit</Button>
                                                <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50" onClick={() => handleDelete(ev._id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {events.length === 0 && (
                                        <tr><td colSpan={4} className="py-16 text-center text-zinc-500 bg-zinc-50/50">No events found. Click "+ New Event" to add one.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                )}

                {(view === "create" || view === "edit") && (
                    <Card className="bg-white max-w-3xl border border-zinc-200 shadow-sm p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-foreground/80">Event Title</label>
                                <input required type="text" className="w-full border border-zinc-200 p-3.5 rounded-xl bg-zinc-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Health Camp 2024" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-foreground/80">Date</label>
                                    <input required type="date" className="w-full border border-zinc-200 p-3.5 rounded-xl bg-zinc-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-foreground/80">Location</label>
                                    <LocationPicker 
                                        value={form.location} 
                                        onChange={(address) => setForm({ ...form, location: address })} 
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-foreground/80">Cover Image</label>
                                <div className="flex items-center gap-4">
                                    {form.image && (
                                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-zinc-200 shadow-sm bg-zinc-100">
                                            <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <input 
                                            type="file" 
                                            accept="image/*"
                                            required={view === "create" && !form.image}
                                            className="w-full border border-zinc-200 p-2.5 rounded-xl bg-zinc-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer text-sm" 
                                            onChange={e => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    // Convert image to Base64 for easy DB storage
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setForm({ ...form, image: reader.result as string });
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-foreground/80">Short Description (Card preview)</label>
                                <textarea required maxLength={150} className="w-full border border-zinc-200 p-3.5 rounded-xl bg-zinc-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" rows={2} value={form.shortDescription} onChange={e => setForm({ ...form, shortDescription: e.target.value })} placeholder="Brief description..." />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-foreground/80">Full Event Description</label>
                                <textarea required rows={6} className="w-full border border-zinc-200 p-3.5 rounded-xl bg-zinc-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" value={form.fullDescription} onChange={e => setForm({ ...form, fullDescription: e.target.value })} placeholder="Detailed information..." />
                            </div>
                            <div className="pt-4 border-t border-zinc-100 flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => { setView("list"); setEditingId(null); setForm({ title: "", date: "", location: "", shortDescription: "", fullDescription: "", image: "" }); }}>Cancel</Button>
                                <Button type="submit" size="lg" className="px-8 shadow-md" variant="primary">{view === "edit" ? "Update Event" : "Publish Event"}</Button>
                            </div>
                        </form>
                    </Card>
                )}
            </div>
        </div>
    );
}
