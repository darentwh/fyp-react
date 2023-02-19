import * as React from 'react'
import './Forecasting.css'
import { useState } from "react"
import { TextField } from '@mui/material';
import {
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {ma,ema} from 'moving-averages';
import 'trendline';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import Slider from '@mui/material/Slider';
import Autocomplete from '@mui/material/Autocomplete';

export default function Forecasting(){
  const {overridevalue1, setOverridevalue1} = useContext(UserContext);
  const {overridevalue2, setOverridevalue2} = useContext(UserContext);
  const {overridevalue3, setOverridevalue3} = useContext(UserContext);
  const {overridevalue4, setOverridevalue4} = useContext(UserContext);
  const {overridevalue5, setOverridevalue5} = useContext(UserContext);
  const {overridevalue6, setOverridevalue6} = useContext(UserContext);
  const {overridevalue7, setOverridevalue7} = useContext(UserContext);
  const {dataAPI, loading} = useContext(UserContext)
  const [alpha , setAlpha] = useState(0.5)
  const changeValueSlider = (event, value) => {
    setAlpha(value);
  };
  console.log(overridevalue1)
  const [buttonValue, setValue] = useState('Linear Regression');
  if(dataAPI !== null){
    var keys = Object.keys(dataAPI)
    var values = Object.values(dataAPI)
    if(buttonValue === 'Moving Average, m = 2'){
      const maValue = ma(values, 2)
      console.log(maValue)
      var forecastAcc = (100-((
          (Math.abs(values[2]-maValue[1])/values[2])
          +(Math.abs(values[3]-maValue[2])/values[3])
          +(Math.abs(values[4]-maValue[3])/values[4])
          +(Math.abs(values[5]-maValue[4])/values[5])
          +(Math.abs(values[6]-maValue[5])/values[6])
          +(Math.abs(values[7]-maValue[6])/values[7])
          +(Math.abs(values[8]-maValue[7])/values[8])
          +(Math.abs(values[9]-maValue[8])/values[9])
          +(Math.abs(values[10]-maValue[9])/values[10])
          +(Math.abs(values[11]-maValue[10])/values[11])
        )/10*100)).toFixed(2)
      console.log(forecastAcc)
      var forecastBias = ((
        (values[2]-maValue[1])
        +(values[3]-maValue[2])
        +(values[4]-maValue[3])
        +(values[5]-maValue[4])
        +(values[6]-maValue[5])
        +(values[7]-maValue[6])
        +(values[8]-maValue[7])
        +(values[9]-maValue[8])
        +(values[10]-maValue[9])
        +(values[11]-maValue[10])
      ) / 10).toFixed(2)
      console.log(forecastBias)
      var data = [
        {
          name: keys[0],
          actual: values[0],
          forecast: maValue[0]
        },
        {
          name: keys[1],
          actual: values[1],
          forecast: maValue[0]
        },
        {
          name: keys[2],
          actual: values[2],
          forecast: maValue[1]
        },
        {
          name: keys[3],
          actual: values[3],
          forecast: maValue[2]
        },
        {
          name: keys[4],
          actual: values[4],
          forecast: maValue[3]
        },
        {
          name: keys[5],
          actual: values[5],
          forecast: maValue[4]
        },
        {
          name: keys[6],
          actual: values[6],
          forecast: maValue[5]
        },
        {
          name: keys[7],
          actual: values[7],
          forecast: maValue[6]
        },
        {
          name: keys[8],
          actual: values[8],
          forecast: maValue[7]
        },
        {
          name: keys[9],
          actual: values[9],
          forecast: maValue[8]
        },
        {
          name: keys[10],
          actual: values[10],
          forecast: maValue[9]
        },
        {
          name: keys[11],
          actual: values[11],
          forecast: maValue[10]
        },
        {
          name: keys[12],
          actual: values[12],
          forecast: maValue[11]
        },
      ];
    } if(buttonValue === 'Exponential Smoothing'){
      var size = ((2/alpha)-1)
      const maValue = ema(values, size)
      console.log(maValue)
      forecastAcc = (100-((
        (Math.abs(values[2]-maValue[1])/values[2])
        +(Math.abs(values[3]-maValue[2])/values[3])
        +(Math.abs(values[4]-maValue[3])/values[4])
        +(Math.abs(values[5]-maValue[4])/values[5])
        +(Math.abs(values[6]-maValue[5])/values[6])
        +(Math.abs(values[7]-maValue[6])/values[7])
        +(Math.abs(values[8]-maValue[7])/values[8])
        +(Math.abs(values[9]-maValue[8])/values[9])
        +(Math.abs(values[10]-maValue[9])/values[10])
        +(Math.abs(values[11]-maValue[10])/values[11])
      )/10*100)).toFixed(2)
      console.log(forecastAcc)
      forecastBias = ((
        (values[2]-maValue[1])
        +(values[3]-maValue[2])
        +(values[4]-maValue[3])
        +(values[5]-maValue[4])
        +(values[6]-maValue[5])
        +(values[7]-maValue[6])
        +(values[8]-maValue[7])
        +(values[9]-maValue[8])
        +(values[10]-maValue[9])
        +(values[11]-maValue[10])
      )/10).toFixed(2)
      console.log(forecastBias)
      data = [
        {
          name: keys[0],
          actual: values[0],
          forecast: null
        },
        {
          name: keys[1],
          actual: values[1],
          forecast: null
        },
        {
          name: keys[2],
          actual: values[2],
          forecast: maValue[1]
        },
        {
          name: keys[3],
          actual: values[3],
          forecast: maValue[2]
        },
        {
          name: keys[4],
          actual: values[4],
          forecast: maValue[3]
        },
        {
          name: keys[5],
          actual: values[5],
          forecast: maValue[4]
        },
        {
          name: keys[6],
          actual: values[6],
          forecast: maValue[5]
        },
        {
          name: keys[7],
          actual: values[7],
          forecast: maValue[6]
        },
        {
          name: keys[8],
          actual: values[8],
          forecast: maValue[7]
        },
        {
          name: keys[9],
          actual: values[9],
          forecast: maValue[8]
        },
        {
          name: keys[10],
          actual: values[10],
          forecast: maValue[9]
        },
        {
          name: keys[11],
          actual: values[11],
          forecast: maValue[10]
        },
        {
          name: keys[12],
          actual: values[12],
          forecast: maValue[11]
        },
      ]
    } if(buttonValue === 'Linear Regression'){
      const createTrend = require('trendline');
      const LRdata = [
        { y: values[0], x: 1 },
        { y: values[1], x: 2 },
        { y: values[2], x: 3 },
        { y: values[3], x: 4 },
        { y: values[4], x: 5 },
        { y: values[5], x: 6 },
        { y: values[6], x: 7 },
        { y: values[7], x: 8 },
        { y: values[8], x: 9 },
        { y: values[9], x: 10 },
        { y: values[10], x: 11 },
        { y: values[11], x: 12 },
      ];
      const trend = createTrend(LRdata, 'x', 'y')
      console.log(trend.yStart, trend.slope)
      //setForecast(Math.round(trend.calcY(12)))
      forecastAcc = (100-(
        (Math.abs(values[0]-trend.calcY(0))/values[0])
        +(Math.abs(values[1]-trend.calcY(1))/values[1])
        +(Math.abs(values[2]-trend.calcY(2))/values[2])
        +(Math.abs(values[3]-trend.calcY(3))/values[3])
        +(Math.abs(values[4]-trend.calcY(4))/values[4])
        +(Math.abs(values[5]-trend.calcY(5))/values[5])
        +(Math.abs(values[6]-trend.calcY(6))/values[6])
        +(Math.abs(values[7]-trend.calcY(7))/values[7])
        +(Math.abs(values[8]-trend.calcY(8))/values[8])
        +(Math.abs(values[9]-trend.calcY(9))/values[9])
        +(Math.abs(values[10]-trend.calcY(10))/values[10])
        +(Math.abs(values[11]-trend.calcY(11))/values[11])
        )/12*100).toFixed(2) //rounding to 2dp
      console.log(forecastAcc)
      forecastBias = ((
        (values[0]-trend.calcY(0))
        +(values[1]-trend.calcY(1))
        +(values[2]-trend.calcY(2))
        +(values[3]-trend.calcY(3))
        +(values[4]-trend.calcY(4))
        +(values[5]-trend.calcY(5))
        +(values[6]-trend.calcY(6))
        +(values[7]-trend.calcY(7))
        +(values[8]-trend.calcY(8))
        +(values[9]-trend.calcY(9))
        +(values[10]-trend.calcY(10))
        +(values[11]-trend.calcY(11))
      )/12).toFixed(2)
      console.log(forecastBias)
      data = [
        {
          name: keys[0],
          actualLR: values[0],
          lineLR: trend.calcY(0)
        },
        {
          name: keys[1],
          actualLR: values[1],
          lineLR: trend.calcY(1)
        },
        {
          name: keys[2],
          actualLR: values[2],
          lineLR: trend.calcY(2)
        },
        {
          name: keys[3],
          actualLR: values[3],
          lineLR: trend.calcY(3)
        },
        {
          name: keys[4],
          actualLR: values[4],
          lineLR: trend.calcY(4)
        },
        {
          name: keys[5],
          actualLR: values[5],
          lineLR: trend.calcY(5)
        },
        {
          name: keys[6],
          actualLR: values[6],
          lineLR: trend.calcY(6)
        },
        {
          name: keys[7],
          actualLR: values[7],
          lineLR: trend.calcY(7)
        },
        {
          name: keys[8],
          actualLR: values[8],
          lineLR: trend.calcY(8)
        },
        {
          name: keys[9],
          actualLR: values[9],
          lineLR: trend.calcY(9)
        },
        {
          name: keys[10],
          actualLR: values[10],
          lineLR: trend.calcY(10)
        },
        {
          name: keys[11],
          actualLR: values[11],
          lineLR: trend.calcY(11)
        },
        {
          name: keys[12],
          actualLR: values[12],
          lineLR: trend.calcY(12)
        },
        {
          name: '+1',
          lineLR: trend.calcY(13)
        },
        {
          name: '+2',
          lineLR: trend.calcY(14)
        },
        {
          name: '+3',
          lineLR: trend.calcY(15)
        },
        {
          name: '+4',
          lineLR: trend.calcY(16)
        },
        {
          name: '+5',
          lineLR: trend.calcY(17)
        },
        {
          name: '+6',
          lineLR: trend.calcY(18)
        },
      ];
    };
  };
  const optionsForecast = ['Moving Average, m = 2','Exponential Smoothing','Linear Regression'];
  return(
    <div className="forecasting">
      {loading ? 
      <div className='slider3'>
          <div className='loader'/>
      </div> 
      : 
      <div>
        <div className='featuredItem'>
            {/* {buttonValue} */}
          <Autocomplete
            value={buttonValue}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            id="controllable-states-demo"
            options={optionsForecast}
            disableClearable
            sx={{ width: 250, mb:'10px' }}
            renderInput={(params) => <TextField {...params} label="Forecast Computation" />}
          />
          <ResponsiveContainer width="100%" height={600} position="absolute">
            <ComposedChart
            data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"/>
              <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#49454D" />
              <Line type="monotone" dataKey="forecast" stroke="#AD6ADF" strokeWidth={3}/>
              <Line type="monotone" dataKey="lineLR" stroke="#AD6ADF" strokeWidth={3} legendType='none'/>
              <Scatter type="monotone" dataKey="actualLR" stroke="#49454D" strokeWidth={0} legendType='none'/>
            </ComposedChart>
          </ResponsiveContainer>
          <div className='featured'>
            <div className='featuredItem'>
              Forecast Accuracy: <b>{forecastAcc}</b>%<br/>
              Forecast Bias: <b>{forecastBias}</b>
            </div>
            {(() => {
              if (buttonValue === 'Exponential Smoothing') {
                return (
                  <div className='featuredItem'>
                    Adjust ⍺ value: {alpha} 
                    <Slider
                      size="small"
                      step = {0.01}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      color="secondary"
                      max={1}
                      value = {alpha}
                      onChange={changeValueSlider}
                    />
                  </div>
                )
              }
            })()}
            <div className='featuredItem'>
              <div>
                Forecast Override: 
              </div>
              <div className='flexbox-container'>
                <TextField
                  type="number"
                  sx={{ mx: '1px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue1}
                  onChange={(event) => {setOverridevalue1(parseInt(event.target.value))}}
                  label={keys[11]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue2}
                  onChange={(event) => {setOverridevalue2(parseInt(event.target.value))}}
                  label='+1'
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue3}
                  onChange={(event) => {setOverridevalue3(parseInt(event.target.value))}}
                  label='+2'
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue4}
                  onChange={(event) => {setOverridevalue4(parseInt(event.target.value))}}
                  label='+3'
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue5}
                  onChange={(event) => {setOverridevalue5(parseInt(event.target.value))}}
                  label='+4'
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue6}
                  onChange={(event) => {setOverridevalue6(parseInt(event.target.value))}}
                  label='+5'
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue7}
                  onChange={(event) => {setOverridevalue7(parseInt(event.target.value))}}
                  label='+6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}