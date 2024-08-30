"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerIcon from "../app/assets/mapicon.png";
import { RootState } from "@/redux-store/store";
import { useSelector } from "react-redux";

const customIcon = L.icon({
  iconUrl: customMarkerIcon.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const AllLocationOnMapCard: React.FC = () => {
  const mapData = useSelector((state: RootState) => state.industryData.mapCordinates);
  console.log(mapData, "mapDaata");
  const parsedMapData = mapData
    .filter((item: any) => Array.isArray(item.y) && item.y.length === 2)
    .map((item: any) => ({
      latitude: Number(item.y[0]),
      longitude: Number(item.y[1]),
    }));

  const defaultCenter: any =
    parsedMapData.length > 0
      ? [parsedMapData[0].latitude, parsedMapData[0].longitude]
      : [28.6139, 77.209]; // Default to New Delhi

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      style={{ height: "44rem", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {parsedMapData?.map((location, index) =>
        location && location.latitude && location.longitude ? (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
            icon={customIcon}
          >
            <Popup>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default AllLocationOnMapCard;
