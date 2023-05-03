import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';

function valuetext(value) {
  return `${value}m`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([21, 38]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 240 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        color='primary'
        step={10}
        marks
        valueLabelDisplay="on"
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
      />
    </Box>
  );
}