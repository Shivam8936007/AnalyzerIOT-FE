import "leaflet/dist/leaflet.css";
import React from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import {
  MapContainer,
  TileLayer,
  Marker,
  Rectangle,
  SVGOverlay,
} from "react-leaflet";
import L from "leaflet";
import ChargeIcon from "../assests/map_icon.png";

const chargeIcon = new L.Icon({
  iconUrl: ChargeIcon.src,
  iconSize: [32, 32],
});

const containerStyle = {
  width: "100%",
  height: "485px",
  borderRadius: "16px",
  marginTop: "5px",
};

const center = {
  lat: 28.6139, // Delhi's latitude
  lng: 77.209, // Delhi's longitude
};

// Define the bounds for the rectangle to cover the entire visible map area
const bounds = [
  [90, -180], // Top-left corner (latitude, longitude)
  [-90, 180], // Bottom-right corner (latitude, longitude)
];
const Map = () => {
  //   const chargerLocation = useSelector((state) =>
  //     state.statsData.chargerLocation?.map((d: any) => {
  //       return { lat: Number(d?.lat), lng: Number(d?.lng) };
  //     })
  //   );
  //   const loadChargerLocation = useSelector(
  //     (state: RootState) => state.statsData.loadChargerLocation
  //   );

  return (
    <div className={`back_transparent rounded`}>
      <MapContainer
        center={center}
        zoom={10}
        style={containerStyle}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        <MarkerClusterGroup chunkedLoading>
          {[
            { lat: 28.6139, lng: 77.209 },
            { lat: 28.6139, lng: 79.209 },
            { lat: 28.6139, lng: 37.209 },
            { lat: 28.6139, lng: 97.209 },
            { lat: 28.6139, lng: 57.209 },
          ]?.map((location, index) => (
            <Marker
              key={index}
              position={location}
              icon={chargeIcon}
              title=""
            />
          ))}
          <SVGOverlay bounds={bounds}>
            <rect x="0" y="0" width="100%" height="100%" fillOpacity={0.2} />
          </SVGOverlay>
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
