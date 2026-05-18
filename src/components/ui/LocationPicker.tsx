"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default Leaflet marker icon issues in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationPickerProps {
    value: string;
    onChange: (address: string) => void;
}

export default function LocationPicker({ value, onChange }: LocationPickerProps) {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [loading, setLoading] = useState(false);

    // Default center (Kerala, India)
    const defaultCenter: [number, number] = [10.8505, 76.2711];

    const reverseGeocode = async (lat: number, lon: number) => {
        setLoading(true);
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
            const data = await res.json();
            if (data && data.display_name) {
                onChange(data.display_name);
            } else {
                onChange(`${lat.toFixed(4)}, ${lon.toFixed(4)}`);
            }
        } catch (error) {
            console.error("Geocoding failed", error);
            onChange(`${lat.toFixed(4)}, ${lon.toFixed(4)}`);
        } finally {
            setLoading(false);
        }
    };

    function MapEvents() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setPosition([lat, lng]);
                reverseGeocode(lat, lng);
            },
        });
        return null;
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="h-64 w-full rounded-xl overflow-hidden border border-zinc-200 z-10 relative">
                {loading && (
                    <div className="absolute inset-0 bg-white/60 z-[1000] flex items-center justify-center backdrop-blur-sm">
                        <span className="text-sm font-semibold text-primary animate-pulse">Fetching address...</span>
                    </div>
                )}
                <MapContainer center={defaultCenter} zoom={7} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {position && <Marker position={position} />}
                    <MapEvents />
                </MapContainer>
            </div>
            <div className="flex gap-2">
                <input 
                    type="text" 
                    className="w-full border border-zinc-200 p-3.5 rounded-xl bg-zinc-50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" 
                    value={value} 
                    onChange={e => onChange(e.target.value)} 
                    placeholder="Click on the map or type address manually..." 
                    required
                />
            </div>
        </div>
    );
}
