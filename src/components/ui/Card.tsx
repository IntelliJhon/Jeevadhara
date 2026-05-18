import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("bg-card text-card-foreground rounded-2xl shadow-sm border border-border p-6 overflow-hidden", className)}
            {...props}
        >
            {children}
        </div>
    );
}
