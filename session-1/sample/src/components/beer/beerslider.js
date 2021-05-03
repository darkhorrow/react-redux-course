import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function BeerSlider(props) {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.newAlcoholValue(newValue);
  };

  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        ABV range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={0.1}
      />
    </div>
  );
}

export default BeerSlider