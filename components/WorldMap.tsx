"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";

interface Buoy {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: "acoustic" | "visual";
}

interface WhaleDetection {
  id: number;
  name: string;
  center: [number, number];
  polygon: [number, number][];
  detectedBy: number[]; // buoy IDs that detected this whale
  confidence: number;
}

export default function WorldMap() {
  // East Coast buoys - dense network from Maine to Georgia
  const [buoys] = useState<Buoy[]>([
    // Maine coast
    { id: 1, name: "ME-North-1", lat: 44.2, lng: -68.5, type: "acoustic" },
    { id: 2, name: "ME-North-2", lat: 44.0, lng: -68.9, type: "visual" },
    { id: 3, name: "ME-South-1", lat: 43.5, lng: -69.8, type: "acoustic" },
    { id: 4, name: "ME-South-2", lat: 43.3, lng: -70.1, type: "visual" },

    // New Hampshire / Massachusetts area
    { id: 5, name: "NH-Coast-1", lat: 43.0, lng: -70.6, type: "acoustic" },
    { id: 6, name: "MA-North-1", lat: 42.7, lng: -70.5, type: "visual" },
    { id: 7, name: "MA-North-2", lat: 42.5, lng: -70.8, type: "acoustic" },
    { id: 8, name: "MA-North-3", lat: 42.3, lng: -70.5, type: "visual" },
    { id: 9, name: "MA-Central-1", lat: 42.0, lng: -70.3, type: "acoustic" },
    { id: 10, name: "MA-South-1", lat: 41.8, lng: -70.2, type: "acoustic" },
    { id: 11, name: "MA-South-2", lat: 41.6, lng: -70.5, type: "visual" },

    // Rhode Island / Cape Cod
    { id: 12, name: "RI-East-1", lat: 41.4, lng: -71.2, type: "acoustic" },
    { id: 13, name: "RI-East-2", lat: 41.3, lng: -71.5, type: "visual" },
    { id: 14, name: "RI-South-1", lat: 41.1, lng: -71.4, type: "acoustic" },

    // Long Island Sound / Connecticut
    { id: 15, name: "CT-East-1", lat: 41.3, lng: -72.0, type: "visual" },
    { id: 16, name: "LI-Sound-1", lat: 41.1, lng: -72.1, type: "acoustic" },
    { id: 17, name: "LI-Sound-2", lat: 40.9, lng: -72.5, type: "visual" },
    { id: 18, name: "LI-Sound-3", lat: 41.0, lng: -72.8, type: "acoustic" },
    { id: 19, name: "CT-Central-1", lat: 41.2, lng: -73.0, type: "visual" },

    // New York coast
    { id: 20, name: "LI-East-1", lat: 40.8, lng: -72.3, type: "acoustic" },
    { id: 21, name: "LI-East-2", lat: 40.7, lng: -72.0, type: "visual" },
    { id: 22, name: "NY-Offshore-1", lat: 40.6, lng: -73.8, type: "acoustic" },
    { id: 23, name: "NY-Offshore-2", lat: 40.5, lng: -73.6, type: "visual" },
    { id: 24, name: "NY-Offshore-3", lat: 40.3, lng: -73.5, type: "acoustic" },
    { id: 25, name: "NY-South-1", lat: 40.4, lng: -73.9, type: "visual" },

    // New Jersey coast
    { id: 26, name: "NJ-North-1", lat: 40.2, lng: -73.8, type: "acoustic" },
    { id: 27, name: "NJ-North-2", lat: 40.0, lng: -73.9, type: "visual" },
    { id: 28, name: "NJ-North-3", lat: 39.9, lng: -74.0, type: "acoustic" },
    { id: 29, name: "NJ-Central-1", lat: 39.7, lng: -74.0, type: "visual" },
    { id: 30, name: "NJ-Central-2", lat: 39.5, lng: -74.1, type: "acoustic" },
    { id: 31, name: "NJ-Central-3", lat: 39.4, lng: -74.2, type: "visual" },
    { id: 32, name: "NJ-South-1", lat: 39.3, lng: -74.2, type: "acoustic" },
    { id: 33, name: "NJ-South-2", lat: 39.1, lng: -74.4, type: "visual" },

    // Delaware Bay area
    { id: 34, name: "DE-North-1", lat: 39.0, lng: -74.8, type: "acoustic" },
    { id: 35, name: "DE-Bay-1", lat: 38.9, lng: -75.0, type: "visual" },
    { id: 36, name: "DE-Bay-2", lat: 38.7, lng: -74.8, type: "acoustic" },
    { id: 37, name: "DE-South-1", lat: 38.6, lng: -75.0, type: "visual" },

    // Maryland coast
    { id: 38, name: "MD-North-1", lat: 38.5, lng: -75.2, type: "acoustic" },
    { id: 39, name: "MD-Coast-1", lat: 38.3, lng: -75.1, type: "visual" },
    { id: 40, name: "MD-Coast-2", lat: 38.1, lng: -75.3, type: "acoustic" },
    { id: 41, name: "MD-South-1", lat: 38.0, lng: -75.4, type: "visual" },

    // Virginia coast
    { id: 42, name: "VA-North-1", lat: 37.8, lng: -75.4, type: "acoustic" },
    { id: 43, name: "VA-North-2", lat: 37.6, lng: -75.5, type: "visual" },
    { id: 44, name: "VA-Central-1", lat: 37.4, lng: -75.6, type: "acoustic" },
    { id: 45, name: "VA-Central-2", lat: 37.2, lng: -75.7, type: "visual" },
    { id: 46, name: "VA-South-1", lat: 37.0, lng: -75.8, type: "acoustic" },
    { id: 47, name: "VA-South-2", lat: 36.8, lng: -75.7, type: "visual" },

    // North Carolina - Outer Banks
    { id: 48, name: "NC-North-1", lat: 36.6, lng: -75.7, type: "acoustic" },
    { id: 49, name: "NC-North-2", lat: 36.4, lng: -75.6, type: "visual" },
    { id: 50, name: "NC-North-3", lat: 36.2, lng: -75.6, type: "acoustic" },
    { id: 51, name: "NC-Central-1", lat: 36.0, lng: -75.5, type: "visual" },
    { id: 52, name: "NC-Central-2", lat: 35.8, lng: -75.4, type: "acoustic" },
    { id: 53, name: "NC-Central-3", lat: 35.6, lng: -75.5, type: "visual" },
    { id: 54, name: "NC-South-1", lat: 35.4, lng: -75.4, type: "acoustic" },
    { id: 55, name: "NC-South-2", lat: 35.2, lng: -75.6, type: "visual" },

    // South Carolina coast
    { id: 56, name: "SC-North-1", lat: 34.8, lng: -76.5, type: "acoustic" },
    { id: 57, name: "SC-North-2", lat: 34.5, lng: -76.8, type: "visual" },
    { id: 58, name: "SC-Central-1", lat: 34.0, lng: -77.5, type: "acoustic" },
    { id: 59, name: "SC-South-1", lat: 33.5, lng: -78.5, type: "visual" },

    // Georgia coast
    { id: 60, name: "GA-North-1", lat: 32.8, lng: -79.8, type: "acoustic" },
    { id: 61, name: "GA-Central-1", lat: 32.2, lng: -80.5, type: "visual" },
  ]);

  // Simulated whale detections with triangulation - focused on East Coast
  const [whaleDetections] = useState<WhaleDetection[]>([
    {
      id: 1,
      name: "Right Whale #1",
      center: [40.7, -73.2],
      polygon: [
        [40.85, -73.4],
        [40.9, -73.0],
        [40.6, -73.0],
        [40.55, -73.35],
      ],
      detectedBy: [20, 21, 22, 23],
      confidence: 91,
    },
    {
      id: 2,
      name: "Right Whale #2",
      center: [39.5, -74.1],
      polygon: [
        [39.65, -74.3],
        [39.7, -73.9],
        [39.35, -73.85],
        [39.3, -74.25],
      ],
      detectedBy: [29, 30, 31, 32],
      confidence: 94,
    },
    {
      id: 3,
      name: "Right Whale #3",
      center: [38.6, -74.9],
      polygon: [
        [38.75, -75.1],
        [38.8, -74.7],
        [38.45, -74.65],
        [38.4, -75.05],
      ],
      detectedBy: [35, 36, 37, 38],
      confidence: 88,
    },
    {
      id: 4,
      name: "Right Whale #4",
      center: [42.0, -70.4],
      polygon: [
        [42.15, -70.6],
        [42.2, -70.2],
        [41.85, -70.15],
        [41.8, -70.55],
      ],
      detectedBy: [8, 9, 10, 11],
      confidence: 87,
    },
    {
      id: 5,
      name: "Humpback Whale #1",
      center: [37.3, -75.6],
      polygon: [
        [37.45, -75.8],
        [37.5, -75.4],
        [37.15, -75.35],
        [37.1, -75.75],
      ],
      detectedBy: [44, 45, 46],
      confidence: 82,
    },
    {
      id: 6,
      name: "Right Whale #5",
      center: [36.3, -75.6],
      polygon: [
        [36.45, -75.8],
        [36.5, -75.4],
        [36.15, -75.35],
        [36.1, -75.75],
      ],
      detectedBy: [48, 49, 50, 51],
      confidence: 90,
    },
    {
      id: 7,
      name: "Humpback Whale #2",
      center: [41.2, -71.5],
      polygon: [
        [41.35, -71.7],
        [41.4, -71.3],
        [41.05, -71.25],
        [41.0, -71.65],
      ],
      detectedBy: [12, 13, 14, 15],
      confidence: 85,
    },
    {
      id: 8,
      name: "Right Whale #6",
      center: [40.1, -73.9],
      polygon: [
        [40.25, -74.1],
        [40.3, -73.7],
        [39.95, -73.65],
        [39.9, -74.05],
      ],
      detectedBy: [26, 27, 28],
      confidence: 89,
    },
    {
      id: 9,
      name: "Fin Whale #1",
      center: [38.8, -75.0],
      polygon: [
        [38.95, -75.2],
        [39.0, -74.8],
        [38.65, -74.75],
        [38.6, -75.15],
      ],
      detectedBy: [34, 35, 36],
      confidence: 79,
    },
    {
      id: 10,
      name: "Right Whale #7",
      center: [43.8, -69.5],
      polygon: [
        [43.95, -69.7],
        [44.0, -69.3],
        [43.65, -69.25],
        [43.6, -69.65],
      ],
      detectedBy: [2, 3, 4],
      confidence: 86,
    },
    {
      id: 11,
      name: "Humpback Whale #3",
      center: [35.7, -75.5],
      polygon: [
        [35.85, -75.7],
        [35.9, -75.3],
        [35.55, -75.25],
        [35.5, -75.65],
      ],
      detectedBy: [52, 53, 54],
      confidence: 83,
    },
  ]);

  useEffect(() => {
    // Fix for default marker icon issue in Next.js
    if (typeof window !== "undefined") {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    }
  }, []);

  const createBuoyIcon = (type: "acoustic" | "visual") => {
    const color = type === "acoustic" ? "#ef4444" : "#eab308"; // red for acoustic, yellow for visual
    return L.divIcon({
      className: "custom-buoy-icon",
      html: `
        <div style="
          background-color: ${color};
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        "></div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  return (
    <MapContainer
      center={[39.0, -74.0]} // Centered on East Coast US (NJ/DE area)
      zoom={6.5}
      style={{ height: "100%", width: "100%", borderRadius: "0.75rem", position: "relative", zIndex: 0 }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Whale detection polygons */}
      {whaleDetections.map((whale) => (
        <Polygon
          key={`polygon-${whale.id}`}
          positions={whale.polygon}
          pathOptions={{
            fillColor: "#ec4899",
            fillOpacity: 0.3,
            color: "#ec4899",
            weight: 2,
          }}
        >
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-bold text-lg text-pink-600">{whale.name}</h3>
              <p className="text-sm text-gray-600">
                Detection Zone
              </p>
              <p className="text-lg font-bold mt-2">
                Confidence: {whale.confidence}%
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Detected by {whale.detectedBy.length} buoys
              </p>
            </div>
          </Popup>
        </Polygon>
      ))}

      {/* Triangulation lines connecting buoys to whale detections */}
      {whaleDetections.map((whale) =>
        whale.detectedBy.map((buoyId) => {
          const buoy = buoys.find((b) => b.id === buoyId);
          if (!buoy) return null;
          return (
            <Polyline
              key={`line-${whale.id}-${buoyId}`}
              positions={[
                [buoy.lat, buoy.lng],
                whale.center,
              ]}
              pathOptions={{
                color: "#94a3b8",
                weight: 1,
                opacity: 0.5,
                dashArray: "5, 5",
              }}
            />
          );
        })
      )}

      {/* Buoy markers */}
      {buoys.map((buoy) => (
        <Marker
          key={buoy.id}
          position={[buoy.lat, buoy.lng]}
          icon={createBuoyIcon(buoy.type)}
        >
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-bold text-lg">{buoy.name}</h3>
              <p className="text-sm text-gray-600">
                Type: {buoy.type.charAt(0).toUpperCase() + buoy.type.slice(1)}
              </p>
              <p className="text-sm text-gray-600">
                Location: {buoy.lat.toFixed(2)}°, {buoy.lng.toFixed(2)}°
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
