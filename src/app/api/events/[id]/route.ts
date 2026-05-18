import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Event from "@/lib/models/Event";

// DELETE /api/events/[id]
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectToDatabase();
        const { id } = await params;
        await Event.findByIdAndDelete(id);
        return NextResponse.json({ message: "Event deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}

// PUT /api/events/[id]
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectToDatabase();
        const { id } = await params;
        const body = await req.json();
        const updated = await Event.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json({ event: updated }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }
}
