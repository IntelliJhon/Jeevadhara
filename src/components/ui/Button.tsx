"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
            secondary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg",
            outline: "border border-input bg-background hover:bg-zinc-100 text-foreground",
            ghost: "hover:bg-zinc-100 text-foreground",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg font-semibold",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
