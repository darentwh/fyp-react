import * as React from 'react'
import './Forecasting.css'
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "../../components/chart/Chart.css";
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
import {ma,ema,wma} from 'moving-averages';
import 'trendline';

const useFetch = () => {
  const [dataAPI, setData] = useState(null);
  useEffect((url = "https://7l5jx3guqnqr6gxnabjeb5icgm0evafu.lambda-url.us-east-1.on.aws/") => {
    async function fetchData(){
      const response = await fetch(url,{method:'GET'});
      const dataAPI = await response.json();
      console.log(dataAPI)
      setData(dataAPI);
    }
    fetchData();
  }, []);
  return {dataAPI};
};

export default function Forecasting(){
  const [buttonValue, setValue] = useState('Moving Average, ⍺ = 2');
  const handleChangeA = event => {
    setValue('Moving Average, ⍺ = 2');
  }
  const handleChangeB = event => {
    setValue('Expotential Moving Average');
  }
  const handleChangeC = event => {
    setValue('Weighted Moving Average');
  }
  const handleChangeD = event => {
    setValue('Linear Regression');
  }
  const {dataAPI} = useFetch()
  if(dataAPI !== null){
    var keys = Object.keys(dataAPI)
    var values = Object.values(dataAPI)
    if(buttonValue === 'Moving Average, ⍺ = 2'){
      const maValue = ma(values, 2)
      console.log(maValue)
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
    } if(buttonValue === 'Expotential Moving Average'){
      const maValue = ema(values, 3)
      console.log(maValue)
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
    } if(buttonValue === 'Weighted Moving Average'){
      const maValue = wma(values, 2)
      console.log(maValue)
      data = [
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
      ]
    };
  };
  return(
    <div className="forecasting">
      <div className='slider2'>
        <div>
          <ButtonGroup color="secondary" variant="contained" aria-label="outlined primary button group">
            <Button
              style={{
                backgroundColor: "#AD6ADF",
              }}   
              onClick={() => {
                handleChangeA()
              }}
            >Moving Average</Button>
            <Button
              style={{
                backgroundColor: "#AD6ADF",
              }}
              onClick={() => {
                handleChangeB()
              }}
            >Expotential Moving Average</Button>
            <Button
              style={{
                backgroundColor: "#AD6ADF",
              }}
              onClick={() => {
                handleChangeC()
              }}
            >Weighted Moving Average</Button>
            <Button
              style={{
                backgroundColor: "#AD6ADF",
              }}
              onClick={() => {
                handleChangeD()
              }}
            >Linear Regression</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className='slider2'>
        {buttonValue}
      </div>
      <ResponsiveContainer width="97%" height={600} position="absolute">
        <ComposedChart
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
          <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#49454D" />
          <Line type="monotone" dataKey="forecast" stroke="#AD6ADF" strokeWidth={3}/>
          <Scatter type="monotone" dataKey="actualLR" fill="transparent" stroke="#49454D" strokeWidth={3} legendType='none'/>
          <Line type="monotone" dataKey="lineLR" stroke="#AD6ADF" strokeWidth={3} legendType='none'/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}