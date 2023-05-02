import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map({ sidebarOpen }) {
  const style = {
    position: "relative",
    width: sidebarOpen ? "75%" : "95%",
    top: '15px',
    height: "87vh",
    margin: "0 auto",
    border: "2px #2C3639 solid",
  }
  return (
    <MapContainer key={sidebarOpen ? 'open' : 'closed'} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={style} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;