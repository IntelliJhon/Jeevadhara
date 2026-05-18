import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Event from "@/lib/models/Event";
import User from "@/lib/models/User";

export async function GET() {
    try {
        await connectToDatabase();
        
        // Remove current events
        await Event.deleteMany({});
        
        // Ensure an admin user exists in their DB
        const adminEmail = "admin@jeevadhara.org";
        const existingAdmin = await User.findOne({ email: adminEmail });
        if (!existingAdmin) {
            await User.create({
                email: adminEmail,
                password: "admin123", // They can change it later
                role: "admin"
            });
        }

        return NextResponse.json({ success: true, message: "Events cleared and Admin user verified/created." });
    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.message });
    }
}
