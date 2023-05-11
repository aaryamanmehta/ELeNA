import { useState } from "react";
import ReactSlider from "react-slider";

const Slider = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const getCurrentValue = (value) => {
    return `${value}% of the Shortest Path`;
  };

  return (
    <div>
      <a style={{ display: 'flex', marginBottom: '2vh' }}>{getCurrentValue(currentValue)}</a>
      <ReactSlider
        className="customSlider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        min={0}
        max={100}
        defaultValue={0}
        value={currentValue}
        onChange={(value) => setCurrentValue(value)}
      />
    </div>
  );
};

export default Slider;
