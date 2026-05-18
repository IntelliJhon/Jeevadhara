import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/lib/db";
import User from "@/lib/models/User";

const JWT_SECRET = process.env.JWT_SECRET || "jeevadhara-fallback-secret-key-123!";

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password required" }, { status: 400 });
        }

        // In a real production app, passwords must be hashed.
        // For this demo, we can just do a direct check or configure an initial admin.
        const user = await User.findOne({ email });

        // Removed temporary hardcoded fallback, strict DB check
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }
        // we'll check directly or you can add bcrypt here.
        if (user.password !== password) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

        return NextResponse.json({ token, role: user.role }, { status: 200 });

    } catch (error) {
        console.error("Login Route Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
