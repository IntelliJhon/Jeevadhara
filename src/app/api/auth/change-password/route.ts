import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/lib/models/User";
import { hashPassword, requireAdmin, verifyPassword } from "@/lib/auth";

// POST /api/auth/change-password
export async function POST(req: Request) {
    const auth = requireAdmin(req);
    if (auth instanceof NextResponse) return auth;

    try {
        await connectToDatabase();
        const { currentPassword, newPassword } = await req.json();

        if (typeof currentPassword !== "string" || typeof newPassword !== "string" || !currentPassword || !newPassword) {
            return NextResponse.json({ error: "Current and new password are required" }, { status: 400 });
        }
        if (newPassword.length < 8) {
            return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 });
        }

        const user = await User.findById(auth.userId);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!(await verifyPassword(currentPassword, user.password))) {
            return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
        }

        user.password = await hashPassword(newPassword);
        await user.save();

        return NextResponse.json({ message: "Password updated" }, { status: 200 });
    } catch (error) {
        console.error("Change Password Error:", error);
        return NextResponse.json({ error: "Failed to update password" }, { status: 500 });
    }
}
