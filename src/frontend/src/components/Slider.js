import { useState } from "react";
import ReactSlider from "react-slider";

const Slider = ({setPathPercent}) => {
  const [currentValue, setCurrentValue] = useState(30);

  const setValue = (value) => {
    setCurrentValue(value)
    setPathPercent(value)
    return `${value}% of the Shortest Path`;
  };

  const getMessage = (value) => {
    return `${value}% of the Shortest Path`;
  };

  return (
    <div>
      <a style={{ display: 'flex', marginBottom: '2vh' }}>{getMessage(currentValue)}</a>
      <ReactSlider
        className="customSlider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        min={0}
        max={100}
        defaultValue={30}
        value={currentValue}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default Slider;
