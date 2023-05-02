import React from 'react';

function Sidebar() {
    return (
      <div 
        style = {{
            position: 'relative',
            width: '20%',
            height: "85vh",
            backgroundColor: 'white',
            zIndex: '999',
            padding: '20px',
            boxSizing: 'border-box',
            overflowY: 'auto'
        }}>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
    );
  }

  export default Sidebar;