import React, {useState, useEffect} from 'react';

function Sidebar() {
  const [originColor, setOriginColor] = useState('white');
  const [destinationColor, setDestinationColor] = useState('white');
  const [noElevationColor, setNoElevationColor] = useState('white');
  const [maximizeElevationColor, setMaximizeElevationColor] = useState('white');
  const [minimizeElevationColor, setMinimizeElevationColor] = useState('white');
  
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
            <input
              type="text"
              name="origin"
              style={{
                ...inputStyle,
                backgroundColor: originColor,
              }}
              onMouseEnter={() => setOriginColor('#F4EEE0')}
              onMouseLeave={() => setOriginColor('white')}
              onClick = {() => setOriginColor('#F4EEE0')}
            />
          </form>
          <br></br>
          <a style={{display:'flex', marginBottom:'2vh'}}>Destination</a>
          <form>
          <input
              type="text"
              name="destination"
              style={{
                ...inputStyle,
                backgroundColor: destinationColor,
              }}
              onMouseEnter={() => setDestinationColor('#F4EEE0')}
              onMouseLeave={() => setDestinationColor('white')}
              onClick = {() => setDestinationColor('#F4EEE0')}
            />
          </form>
          <br></br>
          <a style={{display:'flex', marginBottom:'0vh'}}>Elevation Preference</a>
          <br></br>
          <button
            id="no-elevation"
            style={{
              ...buttonStyle,
              backgroundColor: noElevationColor
            }}
            onMouseEnter={() => setNoElevationColor('#F4EEE0')}
            onMouseLeave={() => setNoElevationColor('white')}
            onClick = {() => setNoElevationColor('#F4EEE0')}
          > 
            <a style={{backgroundColor:'transparent'}}>No Elevation</a>
          </button>
          <br></br>
          <button
            id="maximize-elevation"
            style={{
              ...buttonStyle,
              width: '46%',
              marginRight: '2%',
              backgroundColor: maximizeElevationColor
            }}
            onMouseEnter={() => setMaximizeElevationColor('#F4EEE0')}
            onMouseLeave={() => setMaximizeElevationColor('white')}
            onClick = {() => setMaximizeElevationColor('#F4EEE0')}
          > 
            <a style={{backgroundColor:'transparent'}}>Maximize Elevation</a>
          </button>
          <button
            id="minimize-elevation"
            style={{
              ...buttonStyle,
              width: '46%',
              backgroundColor: minimizeElevationColor
            }}
            onMouseEnter={() => setMinimizeElevationColor('#F4EEE0')}
            onMouseLeave={() => setMinimizeElevationColor('white')}
            onClick = {() => setMinimizeElevationColor('#F4EEE0')}
          > 
            <a style={{backgroundColor:'transparent'}}>Minimize Elevation</a>
          </button>
          <br></br>
      </div>
    );
  }

  export default Sidebar;