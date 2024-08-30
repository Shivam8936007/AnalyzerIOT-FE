
"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux-store/store';
import customMarkerIcon from "../app/assets/mapicon.png";


const customIcon = L.icon({
  iconUrl: customMarkerIcon.src,
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41], 
  shadowAnchor: [12, 41] 
});

const IndustryLocationOnMapCard: React.FC = () => {
 
  const industryLocations: { latitude: number; longitude: number }[] = useSelector(
    (state: RootState) => state.industryData.industryLocation
  );

  
  const defaultCenter:any = industryLocations.length > 0
    ? [industryLocations[0].latitude, industryLocations[0].longitude]
    : [28.6139, 77.209]; 

  return (
    <MapContainer center={defaultCenter} zoom={13} style={{ height: '44rem', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {industryLocations.map((location, index) => (
        location && location.latitude && location.longitude && ( 
          <Marker key={index} position={[location.latitude, location.longitude]} icon={customIcon}>
            <Popup>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
};

export default IndustryLocationOnMapCard;
