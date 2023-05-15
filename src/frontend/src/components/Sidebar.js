import React, {useState, useEffect} from 'react';
import Slider from './Slider'
import { getCurrentValue } from './Slider';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Select from 'react-select';

function Sidebar() {
  const [originColor, setOriginColor] = useState('white');
  const [destinationColor, setDestinationColor] = useState('white');
  const [elevationPreference, setElevationPreference] = useState('');
  const handleElevationPreferenceClick = (preference) => {
    setElevationPreference(preference);
  }

  const provider = new OpenStreetMapProvider();

  const [originOptions, setoriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);
  const [selectedSource, setSelectedSource] = useState(); 


  const dropdownStyle = {
    option: (provided) => ({
      ...provided,
      fontFamily: 'Arial', // Replace with your desired font
      color: 'black', // Set the font color to black
    }),
  };

  const handleOriginAutocomplete = (selectedOption) => {
    provider.search({ query: selectedOption })
      .then((results) => {
        const newOptions = []
        for (let i = 0; i < results.length; i++) {
          newOptions.push({ value: results[i], label: results[i].label })
        }
        setoriginOptions(newOptions)

      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  };

  const handleOriginChange = (selectedOption) => {
    const selectedSource = JSON.parse(JSON.stringify(selectedOption)); //creates a deep copy of the selected option
  }

  const handleDestinationAutocomplete = (selectedOption) => {
    provider.search({ query: selectedOption })
      .then((results) => {
        const newOptions = []
        for (let i = 0; i < results.length; i++) {
          newOptions.push({ value: results[i], label: results[i].label })
        }
        setDestinationOptions(newOptions)

      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  };

  const buttonStyle = {
    width: '95%',
    padding: '4px',
    marginBottom: '2vh',
    border: 'none',
    borderRadius: '7px',
    cursor: 'pointer',
    fontFamily: 'Domine',
    fontSize: '12px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  };

  const inputStyle = {
    width: '95%',
    padding: '4px',
    marginBottom: '2vh',
    border: 'none',
    borderRadius: '7px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  };

    return (
      <div 
        style = {{
            position: 'relative',
            left: '2.35%',
            top: '15px',
            width: '20%',
            height: "86.3vh",
            backgroundColor: '#2C3639',
            fontSize: '10x',
            color: '#F4EEE0',
            fontWeight: 'regular',
            textAlign: 'center',
            fontFamily: 'Domine',  
            zIndex: '999',
            padding: '20px',
            boxSizing: 'border-box',
            border: "2px #2C3639 solid",
        }}>
          <a style={{display:'flex', marginBottom:'2vh', marginTop:'15vh'}}>Origin</a>
          <form> 
            <Select
              type="text"
              name="origin"
              placeholder="Enter origin"
              options={originOptions}
              styles={dropdownStyle}
              loadingMessage={() => "Loading"} 
              noOptionsMessage={() => ""} 
              onInputChange={handleOriginAutocomplete}
              onChange={handleOriginChange}
            />
          </form>
          <br></br>
          <a style={{display:'flex', marginBottom:'2vh'}}>Destination</a>
          <form>
          <Select
              type="text"
              name="Destination"
              placeholder="Enter destination"
              options={destinationOptions}
              loadingMessage={() => "Loading"} 
              noOptionsMessage={() => ""} 
              styles={dropdownStyle}
              onInputChange={handleDestinationAutocomplete}
            />
          </form>
          <br></br>
          <a style={{display:'flex', marginBottom:'0vh'}}>Elevation Preference</a>
          <br></br>
          <button
            id="no-elevation"
            style={{
              ...buttonStyle,
              backgroundColor: elevationPreference === 'no-elevation' ? '#F4EEE0' : 'white'
            }}
            onClick={() => handleElevationPreferenceClick('no-elevation')}
          > 
            <a>No Elevation</a>
          </button>
          <br></br>
          <button
            id="maximize-elevation"
            style={{
              ...buttonStyle,
              width: '46%',
              marginRight: '2%',
              backgroundColor: elevationPreference === 'maximize-elevation' ? '#F4EEE0' : 'white'
            }}
            onClick={() => handleElevationPreferenceClick('maximize-elevation')}    
          > 
            <a>Maximize Elevation</a>
          </button>
          <button
            id="minimize-elevation"
            style={{
              ...buttonStyle,
              width: '46%',
              backgroundColor: elevationPreference === 'minimize-elevation' ? '#F4EEE0' : 'white'
            }}
            onClick={() => handleElevationPreferenceClick('minimize-elevation')}
          > 
            <a>Minimize Elevation</a>
          </button>
          <br></br>
          <br></br>
          <Slider />
      </div>
    );
  }

  export default Sidebar;