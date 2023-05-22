import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css';
import { point } from 'leaflet';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [points, setPoints] = useState([]); // State for storing the points

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const updatePoints = (newPoints) => {
    setPoints(newPoints);
    console.log(newPoints);
  };

  return (
    <React.StrictMode>
      <div className="header-container">
        <Header />
      </div>
      <div className="map-container">
        {sidebarOpen && <Sidebar updatePoints={updatePoints} />} {/* Pass updatePoints as a prop */}
        <Map sidebarOpen={sidebarOpen} pathPoints={points} /> {/* Pass points as a prop */}
        <button 
          className="sidebar-toggle-button"
          onClick={handleSidebarToggle}
          style={{
            position: sidebarOpen ? 'absolute' : 'absolute',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '24px',
            fontFamily: 'Domine',  
            color: sidebarOpen ? '#F4EEE0' : '#2C3639',
            top: '14vh',
            zIndex: '999',
            left: sidebarOpen ? 'calc(20% - 14px)' : 'calc(4% - 10px)',
          }}
        >
          {sidebarOpen ? '<<' : '>>'}
        </button>
      </div>
    </React.StrictMode>
  );
};
        

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);