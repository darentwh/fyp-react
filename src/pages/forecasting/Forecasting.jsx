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
  const {overridevalue8, setOverridevalue8} = useContext(UserContext);
  const {overridevalue9, setOverridevalue9} = useContext(UserContext);
  const {overridevalue10, setOverridevalue10} = useContext(UserContext);
  const {overridevalue11, setOverridevalue11} = useContext(UserContext);
  const {overridevalue12, setOverridevalue12} = useContext(UserContext);
  const {overridevalue13, setOverridevalue13} = useContext(UserContext);
  const {overridevalue14, setOverridevalue14} = useContext(UserContext);
  const {dateList} = useContext(UserContext);
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
      var data = [{
            name: keys[0],
            actual: values[0],
            forecast: maValue[0]
          }]
      for(let i=0;i<keys.length;i++){
        data.push({name:keys[i+1], actual: values[i+1], forecast: maValue[i]})
      }
      console.log(data)
      var count = 0
      var total = 0
      for(let i=0;i<maValue.length-1; i++){
        total += Math.abs((maValue[i+1]-values[i]))
        count += 1
      }
      var MAD = (total/count).toFixed(2)
      console.log(MAD)
    } if(buttonValue === 'Exponential Smoothing'){
      var size = ((2/alpha)-1)
      const emaValue = ema(values, size)
      console.log(emaValue)
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
        }
      ]
      for(let i=2;i<keys.length+1;i++){
        data.push({name:keys[i], actual: values[i], forecast: emaValue[i-1]})
      }
      console.log(data)
      count = 0
      total = 0
      for(let i=0;i<emaValue.length-1; i++){
        total += Math.abs((emaValue[i+1]-values[i]))
        count += 1
      }
      MAD = (total/count).toFixed(2)
      console.log(MAD)
    } if(buttonValue === 'Linear Regression'){
      const createTrend = require('trendline');

      const LRdata = []
      for (let i = 0; i<values.length; i++){
        LRdata.push({y: values[i], x: i+1})
      }
      const trend = createTrend(LRdata, 'x', 'y')
      console.log(trend.yStart, trend.slope)
      data = []
      for(let i = 0; i<keys.length;i++){
        data.push(
          {
            name: keys[i],
            actualLR: values[i],
            lineLR: trend.calcY(i)
          }
        )
      }
      count = keys.length
      for(let i = 1; i<dateList.length;i++){
        data.push(
          {
            name: dateList[i],
            lineLR: trend.calcY(count)
          }
        )
        count += 1
      }
      console.log(data)
      console.log(dateList)
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
        <div className='featured'>
          <div className='featuredItem'>
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
            <ResponsiveContainer width="100%" height={550} position="absolute">
              <ComposedChart
              data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" textAnchor="end" tick={{fontSize: 12}}/>
                <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend verticalAlign='bottom'/>
                <Line type="monotone" dataKey="actual" stroke="#49454D" />
                <Line type="monotone" dataKey="forecast" stroke="#AD6ADF" strokeWidth={3}/>
                <Line type="monotone" dataKey="lineLR" stroke="#AD6ADF" strokeWidth={3} legendType='none'/>
                <Scatter type="monotone" dataKey="actualLR" stroke="#49454D" strokeWidth={0} legendType='none'/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
          <div className='featured'>
            <div className='featuredItem'>
              MAD: <b>{MAD}</b>
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
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue1}
                  onChange={(event) => {setOverridevalue1(parseInt(event.target.value))}}
                  label={dateList[1]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue2}
                  onChange={(event) => {setOverridevalue2(parseInt(event.target.value))}}
                  label={dateList[2]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue3}
                  onChange={(event) => {setOverridevalue3(parseInt(event.target.value))}}
                  label={dateList[3]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue4}
                  onChange={(event) => {setOverridevalue4(parseInt(event.target.value))}}
                  label={dateList[4]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue5}
                  onChange={(event) => {setOverridevalue5(parseInt(event.target.value))}}
                  label={dateList[5]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue6}
                  onChange={(event) => {setOverridevalue6(parseInt(event.target.value))}}
                  label={dateList[6]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue7}
                  onChange={(event) => {setOverridevalue7(parseInt(event.target.value))}}
                  label={dateList[7]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue8}
                  onChange={(event) => {setOverridevalue8(parseInt(event.target.value))}}
                  label={dateList[8]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue9}
                  onChange={(event) => {setOverridevalue9(parseInt(event.target.value))}}
                  label={dateList[9]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue10}
                  onChange={(event) => {setOverridevalue10(parseInt(event.target.value))}}
                  label={dateList[10]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue11}
                  onChange={(event) => {setOverridevalue11(parseInt(event.target.value))}}
                  label={dateList[11]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue12}
                  onChange={(event) => {setOverridevalue12(parseInt(event.target.value))}}
                  label={dateList[12]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue13}
                  onChange={(event) => {setOverridevalue13(parseInt(event.target.value))}}
                  label={dateList[13]}
                />
                <TextField
                  type="number"
                  sx={{ mx: '1px', minWidth:'80px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={overridevalue14}
                  onChange={(event) => {setOverridevalue14(parseInt(event.target.value))}}
                  label={dateList[14]}
                />
              </div>
            </div>
          </div>
      </div>}
    </div>
  )
}