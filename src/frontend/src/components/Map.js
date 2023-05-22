
import { MapContainer, TileLayer, Polyline, ZoomControl } from 'react-leaflet';
import React, {useState, useEffect} from 'react';

function Map({ sidebarOpen }) {

  const style = {
    position: "relative",
    width: sidebarOpen ? "75%" : "95%",
    top: '15px',
    height: "86vh",
    margin: "0 auto",
    border: "2px #2C3639 solid",
  }

  const points = [[42.3939617, -72.5257164], [42.3939309, -72.525589], [42.39396, -72.5254646], [42.3937517, -72.5253372], [42.393819, -72.5249111], [42.3939404, -72.5245877], [42.3940139, -72.5243906], [42.3937264, -72.5237049], [42.3933408, -72.523789], [42.3933212, -72.523713], [42.3932832, -72.5236135], [42.392242, -72.520904], [42.3919905, -72.5203846], [42.3918757, -72.5201296], [42.391597, -72.5200466], [42.3914767, -72.5200108], [42.3912692, -72.5198956], [42.3911888, -72.5198534], [42.3906095, -72.5196917], [42.390628, -72.519769], [42.3904659, -72.5197348], [42.3903732, -72.5197153], [42.390187, -72.519676], [42.389628, -72.5196797]

  ];

  return (
    <MapContainer key={sidebarOpen ? 'open' : 'closed'} center={points[points.length/2]} zoom={14} scrollWheelZoom={true} style={style} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={points} />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}

export default Map;