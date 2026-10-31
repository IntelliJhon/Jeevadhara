import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/lib/db";
import User from "@/lib/models/User";
import { getJwtSecret, hashPassword, isBcryptHash, verifyPassword } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const { email, password } = await req.json();

        if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
            return NextResponse.json({ error: "Email and password required" }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        if (!(await verifyPassword(password, user.password))) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Replace a plain-text password with its hash now that we know it's correct.
        if (!isBcryptHash(user.password)) {
            user.password = await hashPassword(password);
            await user.save();
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, getJwtSecret(), { expiresIn: '1d' });

        return NextResponse.json({ token, role: user.role }, { status: 200 });

    } catch (error) {
        console.error("Login Route Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
