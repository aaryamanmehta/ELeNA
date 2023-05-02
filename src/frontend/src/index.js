import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <React.StrictMode>
      <div className="header-container">
        <Header />
      </div>
      <div className="map-container">
        {sidebarOpen && (
          <Sidebar />
        )}
        <Map sidebarOpen={sidebarOpen} />
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
            top: '12%',
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