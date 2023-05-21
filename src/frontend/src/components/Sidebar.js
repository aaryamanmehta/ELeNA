import React, {useState, useEffect} from 'react';
import Slider from './Slider'
import { getCurrentValue } from './Slider';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Select from 'react-select';

function Sidebar() {
  const [originColor, setOriginColor] = useState('white');
  const [destinationColor, setDestinationColor] = useState('white');
  const [elevationPreference, setElevationPreference] = useState('');
  const [isOriginLoading, setIsOriginLoading] = useState(false);
  const [isDestLoading, setIsDestLoading] = useState(false);

  const handleElevationPreferenceClick = (preference) => {
    setElevationPreference(preference);
      // create an object with the selected source and destination
      const data = {
        source: JSON.stringify(selectedSource),
        destination: JSON.stringify(selectedDestination),
        //Add elevation preference and percentage
      };

      // make a POST request to the server with the selected source and destination
      fetch('http://localhost:8000/no-elevation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => {
        // handle the response from the server
        console.log(response);
      })
      .catch(error => {
        // handle any errors
        console.error(error);
      });
    }

  const provider = new OpenStreetMapProvider();

  const [originOptions, setoriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);
  let [selectedSource, setSelectedSource] = useState();
  let [selectedDestination, setSelectedDestination] = useState();


  const dropdownStyle = {
    option: (provided) => ({
      ...provided,
      fontFamily: 'Arial', // Replace with your desired font
      color: 'black', // Set the font color to black
    }),
  };

  const handleOriginAutocomplete = (selectedOption) => {
    setIsOriginLoading(true);
    provider.search({ query: selectedOption })
      .then((results) => {
        const newOptions = []

        console.log(results)
        for (let i = 0; i < results.length; i++) {
          newOptions.push({ value: results[i], label: results[i].label })
        }
        setoriginOptions(newOptions)
        setIsOriginLoading(false); // Set loading state to false after API call completes
   

      })
      .catch((error) => {
        console.log('An error occurred:', error);
        setIsOriginLoading(false);
      });
  };

  const handleOriginChange = (selectedOption) => {
    setSelectedSource(JSON.parse(JSON.stringify(selectedOption)));
  }

  const handleDestinationChange = (selectedOption) => {
    setSelectedDestination(JSON.parse(JSON.stringify(selectedOption)))
  }

  const handleDestinationAutocomplete = (selectedOption) => {
    setIsDestLoading(true);
    provider.search({ query: selectedOption })
      .then((results) => {
        const newOptions = []
        for (let i = 0; i < results.length; i++) {
          newOptions.push({ value: results[i], label: results[i].label })
        }
        setDestinationOptions(newOptions)
        setIsDestLoading(false); // Set loading state to false after API call completes

      })
      .catch((error) => {
        console.log('An error occurred:', error);
        setIsDestLoading(false); 
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
              noOptionsMessage={() => (isOriginLoading ? "Loading..." : "")}
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
              noOptionsMessage={() => (isDestLoading ? "Loading..." : "")}
              styles={dropdownStyle}
              onInputChange={handleDestinationAutocomplete}
              onChange={handleDestinationChange}
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