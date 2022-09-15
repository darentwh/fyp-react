import * as React from 'react'
import './Forecasting.css'
import Slider from '@mui/material/Slider'

import "../../components/chart/Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {ma} from 'moving-averages';

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

    const maValue = ma([130,112,286,220,118,141,126,231,194,289,186,174], 3)
    console.log(maValue)
    var data = [
        {
          name: "1",
          actual: '112',
          ma: maValue[2],
          amt: 2400
        },
        {
          name: "2",
          actual: '286',
          ma: maValue[3],
          amt: 2210
        },
        {
          name: "3",
          actual: '220',
          ma: maValue[4],
          amt: 2290
        },
        {
          name: "4",
          actual: '118',
          ma: maValue[5],
          amt: 2000
        },
        {
          name: "5",
          actual: '141',
          ma: maValue[6],
          amt: 2181
        },
        {
          name: "6",
          actual: '126',
          ma: maValue[7],
          amt: 2500
        },
        {
          name: "7",
          actual: '231',
          ma: maValue[8],
          amt: 2100
        }
      ];
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
            <ResponsiveContainer width="97%" height={500} position="absolute">
                <LineChart
                data={data}
                margin={{
                    top: 30,
                    right: 30,
                    left: 30,
                    bottom: 30
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#49454D" />
                <Line type="monotone" dataKey="ma" stroke="#AD6ADF" strokeWidth={3}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}