"use client";

import React from "react";

export function Hero() {
    return (
        <section className="relative min-h-[50vh] md:min-h-[95vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/cover.jpeg')" }}
            ></div>
        </section>
    );
}
