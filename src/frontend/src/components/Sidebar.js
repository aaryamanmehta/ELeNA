import React, {useState, useEffect} from 'react';
import Slider from './Slider'
import { getCurrentValue } from './Slider';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Select from 'react-select';
import Map from './Map';

function Sidebar({ updatePoints}) {
  const server = "http://localhost:8000/"
  const [originColor, setOriginColor] = useState('white');
  const [destinationColor, setDestinationColor] = useState('white');
  const [elevationPreference, setElevationPreference] = useState('');
  const [percentLength, setPercentLength] = useState(30);
  
  const provider = new OpenStreetMapProvider();

  const [originOptions, setoriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);
  let [selectedSource, setSelectedSource] = useState();
  let [selectedDestination, setSelectedDestination] = useState();

  const setPathPercent = (value) => {
    console.log(value);
    console.log(" of the Shortest Path");
    setPercentLength(value)
  };
  
  const handleElevationPreferenceClick = (preference) => {
    setElevationPreference(preference);
    let data = ""
    let endpoint = ""
      
    if (preference == "no-elevation"){  
      endpoint = server + preference    
      data = {
        // create an object with the selected source and destination
        source: JSON.stringify(selectedSource),
        destination: JSON.stringify(selectedDestination),
      };
    } else {  
      endpoint = server + "with-elevation" 
      let elevation = "" 
      if (preference == "minimize-elevation"){ 
        elevation = "min"
      } else if (preference == "maximize-elevation"){ 
        elevation = "max"
      } else {
        console.log("error with min/max elevation")
      }
      data = {
        source: JSON.stringify(selectedSource),
        destination: JSON.stringify(selectedDestination),
        elevation: elevation,
        percent: percentLength
      };
    }
    postRequest(endpoint, data)
  }

  // make a POST request to the server with the selected source, destination, etc.
  const postRequest = (endpoint, data) => {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
      updatePoints(response.path); // Call the updatePoints function from props
    })
    .catch(error => {
      console.error(error);
    });
  };

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
    setSelectedSource(JSON.parse(JSON.stringify(selectedOption)));
  }

  const handleDestinationChange = (selectedOption) => {
    setSelectedDestination(JSON.parse(JSON.stringify(selectedOption)))
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
          <Slider setPathPercent={setPathPercent}/>
      </div>
    );
  }
  
  export default Sidebar;