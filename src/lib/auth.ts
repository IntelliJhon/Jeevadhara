import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function getJwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("Please define the JWT_SECRET environment variable");
    }
    return secret;
}

export type AdminTokenPayload = { userId: string; role: string };

// Returns the token payload, or a 401 response to send back if the request isn't from a logged-in admin.
export function requireAdmin(req: Request): AdminTokenPayload | NextResponse {
    const header = req.headers.get("authorization") || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const payload = jwt.verify(token, getJwtSecret()) as AdminTokenPayload;
        if (payload.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return payload;
    } catch {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
}
