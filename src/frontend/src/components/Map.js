import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
  const style = {
    width: "80%",
    height: "80vh",
    margin: "0 auto"
  }
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;