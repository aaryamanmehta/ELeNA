import React from 'react';
import ReactDOM from 'react-dom/client';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="header-container">
    <Header />
    </div>
    <div className="map-container">
      <Sidebar />
      <Map />
    </div>
  </React.StrictMode>
);