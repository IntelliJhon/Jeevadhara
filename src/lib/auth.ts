import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// bcrypt hashes start with $2a$, $2b$ or $2y$
export const isBcryptHash = (value: string) => /^\$2[aby]\$/.test(value);

// Older accounts were saved in plain text, so accept either a bcrypt hash or an exact plain-text match.
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
    return isBcryptHash(stored) ? bcrypt.compare(password, stored) : password === stored;
}

export const hashPassword = (password: string) => bcrypt.hash(password, 12);

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
