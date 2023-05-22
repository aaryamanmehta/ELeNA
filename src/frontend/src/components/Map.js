import { MapContainer, TileLayer, Polyline, ZoomControl } from 'react-leaflet';
import React from 'react';

function Map({ sidebarOpen, pathPoints }) {
  const style = {
    position: "relative",
    width: sidebarOpen ? "75%" : "95%",
    top: '15px',
    height: "86vh",
    margin: "0 auto",
    border: "2px #2C3639 solid",
  };

  return (
    <MapContainer key={sidebarOpen ? 'open' : 'closed'} center= {[42.3939617, -72.5257164]} zoom={14} scrollWheelZoom={true} style={style} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={pathPoints} />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}

export default Map;