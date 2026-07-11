import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Event from "@/lib/models/Event";

export const dynamic = 'force-dynamic';

// GET /api/events
export async function GET(req: Request) {
    try {
        await connectToDatabase();

        // Parse query params
        const { searchParams } = new URL(req.url);
        const limitParam = searchParams.get("limit");
        const limit = limitParam ? parseInt(limitParam) : 0; // 0 means no limit in mongoose
        const category = searchParams.get("category");
        const excludeImage = searchParams.get("excludeImage") === "true";
        const coversOnly = searchParams.get("coversOnly") === "true";

        if (coversOnly) {
            const covers = await Event.aggregate([
                { $match: { $or: [ { image: { $exists: true, $ne: "" } }, { videoUrl: { $exists: true, $ne: "" } } ] } },
                { $sort: { date: -1 } },
                { $group: { _id: "$category", image: { $first: "$image" }, videoUrl: { $first: "$videoUrl" } } }
            ]);
            return NextResponse.json({ covers }, { status: 200 });
        }

        let query: any = {};
        if (category) {
            query.category = category;
        }

        let projection: any = {};
        if (excludeImage) {
            projection = { image: 0, fullDescription: 0 };
        }

        const events = await Event.find(query, projection).sort({ date: 1 }).limit(limit).allowDiskUse();

        return NextResponse.json({ events }, { status: 200 });
    } catch (error: any) {
        console.error("GET EVENTS ERROR:", error);
        return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
    }
}

// POST /api/events
export async function POST(req: Request) {
    try {
        // In a real app we'd verify JWT token here
        await connectToDatabase();

        const body = await req.json();
        const { title, date, location, shortDescription, fullDescription, image, videoUrl, category } = body;

        // Basic validation
        if (!title || !date || !location || !shortDescription || !category || (!image && !videoUrl)) {
            return NextResponse.json({ error: "All fields are required (except full description), and either an image or video is required." }, { status: 400 });
        }

        const newEvent = await Event.create({
            title,
            date,
            location,
            shortDescription,
            fullDescription,
            image,
            videoUrl,
            category
        });

        return NextResponse.json({ event: newEvent, message: "Event created successfully" }, { status: 201 });
    } catch (error: any) {
        console.error("POST EVENT ERROR:", error);
        return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
    }
}
