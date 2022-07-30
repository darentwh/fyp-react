import * as React from 'react'
import './Forecasting.css'
import Slider from '@mui/material/Slider'

export default function Forecasting(){
    const [value, setValue] = React.useState(10);
    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
          setValue(newValue);
        }
    };
    return(
        <div className="forecasting">
            <div className="sliderWrapper">
                <div className="slider">
                    <Slider
                        value={value}
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="slider2">
                {value}
            </div>
        </div>
    )
}