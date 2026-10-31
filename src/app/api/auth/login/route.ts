import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/db";
import User from "@/lib/models/User";
import { getJwtSecret } from "@/lib/auth";

// bcrypt hashes start with $2a$, $2b$ or $2y$
const isBcryptHash = (value: string) => /^\$2[aby]\$/.test(value);

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

        let valid: boolean;
        if (isBcryptHash(user.password)) {
            valid = await bcrypt.compare(password, user.password);
        } else {
            // Older accounts were saved in plain text: accept once, then store the hash instead.
            valid = user.password === password;
            if (valid) {
                user.password = await bcrypt.hash(password, 12);
                await user.save();
            }
        }

        if (!valid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, getJwtSecret(), { expiresIn: '1d' });

        return NextResponse.json({ token, role: user.role }, { status: 200 });

    } catch (error) {
        console.error("Login Route Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
