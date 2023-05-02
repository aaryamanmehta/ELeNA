import React from 'react';

function Sidebar() {
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
            <input type="text" name="origin" style={{width: '95%', padding: '4px', marginBottom:'2vh', borderRadius:'7px'}}/>
          </form>
          <br></br>
          <a style={{display:'flex', marginBottom:'2vh'}}>Destination</a>
          <form>
            <input type="text" name="destination" style={{width: '95%', padding: '4px', marginBottom:'2vh', borderRadius:'7px'}}/>
          </form>
          <br></br>
          <a style={{display:'flex', marginBottom:'0vh'}}>Elevation Preference</a>
          <br></br>
          <button id="no-elevation" style={{width: '95%', padding:'4px', marginBottom:'2vh', borderRadius:'7px'}}>
            <a>No Elevation</a>
          </button>
          <br></br>
          <button id="maximize-elevation" style={{width: '45%', padding:'4px', marginBottom:'2vh', marginRight:'0.5vw', borderRadius:'7px'}}>
            <a>Maximize Elevation</a>
          </button>
          <button id="minimize-elevation" style={{width: '45%', padding:'4px', marginBottom:'2vh', borderRadius:'7px'}}>
            <a>Minimize Elevation</a>
          </button>
          <br></br>
      </div>
    );
  }

  export default Sidebar;