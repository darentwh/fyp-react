import * as React from 'react'
import './Forecasting.css'
import { useEffect, useState } from "react"

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

const useFetch = () => {
  const [dataAPI, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect((url = "https://7l5jx3guqnqr6gxnabjeb5icgm0evafu.lambda-url.us-east-1.on.aws/") => {
    async function fetchData(){
      const response = await fetch(url,{method:'GET'});
      const dataAPI = await response.json();
      console.log(dataAPI)
      setData(dataAPI);
      setLoading(false);
    }
    fetchData();
  }, []);
  return {dataAPI,loading};
}

export default function Forecasting(){
    const {dataAPI,loading} = useFetch()
    if(dataAPI !== null){
      var keys = Object.keys(dataAPI)
      var values = Object.values(dataAPI)
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
          forecast: maValue[1]
        },
        {
          name: keys[2],
          actual: values[2],
          forecast: maValue[2]
        },
        {
          name: keys[3],
          actual: values[3],
          forecast: maValue[3]
        },
        {
          name: keys[4],
          actual: values[4],
          forecast: maValue[4]
        },
        {
          name: keys[5],
          actual: values[5],
          forecast: maValue[5]
        },
        {
          name: keys[6],
          actual: values[6],
          forecast: maValue[6]
        },
        {
          name: keys[7],
          actual: values[7],
          forecast: maValue[7]
        },
        {
          name: keys[8],
          actual: values[8],
          forecast: maValue[8]
        },
        {
          name: keys[9],
          actual: values[9],
          forecast: maValue[9]
        },
        {
          name: keys[10],
          actual: values[10],
          forecast: maValue[10]
        },
        {
          name: keys[11],
          actual: values[11],
          forecast: maValue[11]
        },
      ]
    };
    return(
        <div className="forecasting">
          <div className='slider2'>
            Moving Average, m = 2
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
              <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#49454D" />
              <Line type="monotone" dataKey="forecast" stroke="#AD6ADF" strokeWidth={3}/>
              </LineChart>
          </ResponsiveContainer>
        </div>
    )
}