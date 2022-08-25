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
    const [valuetwo, setValuetwo] = React.useState(10);
    const handleChangeTwo = (event, newValue) => {
        if (typeof newValue === 'number') {
          setValuetwo(newValue);
        }
    };
    const [valuethree, setValuethree] = React.useState(10);
    const handleChangeThree = (event, newValue) => {
        if (typeof newValue === 'number') {
          setValuethree(newValue);
        }
    };
    const multiply = (num1,num2,num3)=>{
        return num1 * num2 * num3
    };
    var intOne = parseInt(value)
    var intTwo = parseInt(valuetwo)
    var intThree = parseInt(valuethree)
    let multiplyResult = multiply(intOne,intTwo,intThree)
    ;
    const [message, setMessage] = React.useState('');
    const handleChangeFour = event => {
        setMessage(event.target.value);
    }
    
    return(
        <div className="forecasting">
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Material 1</span>
                    <Slider
                        value={value}
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                        color="secondary"
                    />
                    {value}
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Material 2</span>
                    <Slider
                        value={valuetwo}
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChangeTwo}
                        color="secondary"
                    />
                    {valuetwo}
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Material 3</span>
                    <Slider
                        value={valuethree}
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChangeThree}
                        color="secondary"
                    />
                    {valuethree}
                </div>
            </div>
            <div className="slider2">
                Total Multiplied: {multiplyResult}
            </div>
            <div className="featured">
                <input
                    type="text"
                    id="message"
                    onChange={handleChangeFour}
                    name="message"
                    value={message}
                    autoComplete="off"
                />
                Message: {message}
            </div>
        </div>
    )
}