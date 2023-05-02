import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
  const style = {
    position: "relative",
    width: "75%",
    top: '15px',
    height: "87vh",
    margin: "0 auto",
    border: "2px #2C3639 solid",
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