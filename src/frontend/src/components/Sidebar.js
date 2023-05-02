import React from 'react';

function Sidebar() {
    return (
      <div 
        style = {{
            position: 'relative',
            left: '2%',
            top: '15px',
            width: '20%',
            height: "87.3vh",
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
        <ul>
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
    );
  }

  export default Sidebar;