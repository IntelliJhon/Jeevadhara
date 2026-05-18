"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("adminToken", data.token);
                router.push("/admin/dashboard");
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("An error occurred during login.");
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-8 shadow-2xl bg-white border-t-8 border-t-primary rounded-3xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold font-heading text-primary">Jeevadhara Admin</h1>
                    <p className="text-zinc-500 text-sm mt-3">Please sign in to securely access the dashboard</p>
                </div>

                {error && <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-sm mb-6 text-center font-medium">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-foreground/80">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-primary/50 outline-none bg-zinc-50 transition-all font-medium"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-foreground/80">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-5 py-3.5 pr-12 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-primary/50 outline-none bg-zinc-50 transition-all font-medium"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-primary transition-colors focus:outline-none"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <Button type="submit" size="lg" className="w-full mt-4 rounded-xl text-lg relative overflow-hidden group">
                        <span className="relative z-10 font-bold tracking-wide">Enter Dashboard</span>
                    </Button>
                </form>
            </Card>
        </div>
    );
}
