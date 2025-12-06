"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMemo } from "react";

type PropertyMapProps = {
  lat: number;
  lng: number;
  label?: string;
};

// Use a simple circle marker to avoid asset issues with default Leaflet icons in Next.js
const markerIcon = L.divIcon({
  className:
    "h-4 w-4 rounded-full border-2 border-white bg-[#10B981] shadow-[0_0_0_6px_rgba(16,185,129,0.25)]",
  iconSize: [16, 16],
});

export function PropertyMap({ lat, lng, label }: PropertyMapProps) {
  const center = useMemo(() => [lat, lng] as [number, number], [lat, lng]);

  return (
    <div className="h-64 w-full overflow-hidden rounded-xl border border-gray-200">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ minHeight: "16rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={markerIcon}>
          {label ? <Popup>{label}</Popup> : null}
        </Marker>
      </MapContainer>
    </div>
  );
}
