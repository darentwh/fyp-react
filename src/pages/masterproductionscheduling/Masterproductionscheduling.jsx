import React from 'react'
import './Masterproductionscheduling.css'
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import 'trendline'

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect((url = "https://xkscvbyt7xcmdpibtt3olzbuti0gqbgx.lambda-url.us-east-1.on.aws/") => {
    async function fetchData(){
      const response = await fetch(url,{method:'GET'});
      const data = await response.json();
      console.log(data)
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return {data,loading};
}

export default function Masterproductionscheduling(){
  const {data,loading} = useFetch()
  const [strategyName,setStrategyName] = useState('Level Strategy')
  const handleChange = event => {
    setStrategyName(event);
    console.log(event)
  }
  var mps_data = null
  var projected_balance = null
  var inventory_balance = []
  if(data !== null){
    var keys = Object.keys(data)
    var values = Object.values(data)
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
    var LRVal = [Math.round(trend.calcY(12)),Math.round(trend.calcY(13)),Math.round(trend.calcY(14)),Math.round(trend.calcY(15)),Math.round(trend.calcY(16)),Math.round(trend.calcY(17)),Math.round(trend.calcY(18))]
    if(strategyName === 'Chase Strategy'){
      mps_data = [
        LRVal[0]+20,
        LRVal[1]+20,
        LRVal[2]+20,
        LRVal[3]+20,
        LRVal[4]+20,
        LRVal[5]+20,
        LRVal[6]+20,
      ]
      projected_balance = [
        20,
        20,
        20,
        20,
        20,
        20,
        20,
      ]
    }
    if(strategyName === 'Level Strategy'){
      var avg = Math.round((LRVal[0]+LRVal[1]+LRVal[2]+LRVal[3]+LRVal[4]+LRVal[5]+LRVal[6])/7)
      console.log(avg)
      var balance = 20
      for (let i = 0; i < 7; i++) { 
        balance = balance + (avg - LRVal[i])
        console.log(balance)
        inventory_balance.push(balance)
      }
      mps_data = [
        avg,
        avg,
        avg,
        avg,
        avg,
        avg,
        avg
      ]
      projected_balance = [
        inventory_balance[0],
        inventory_balance[1],
        inventory_balance[2],
        inventory_balance[3],
        inventory_balance[4],
        inventory_balance[5],
        inventory_balance[6]
      ]
    }
    if(strategyName === 'Lot Size Strategy'){
      mps_data = []
      projected_balance = []
      balance = 20
      for (let i = 0; i < 7; i++) { 
        balance = balance - LRVal[i]
        if(balance < 20){
          projected_balance.push(balance+700)
          mps_data.push(700)
          balance = balance + 700
        }else{
          projected_balance.push(balance)
          mps_data.push(0)
        }
      }
      console.log(mps_data)
      console.log(inventory_balance)
    }
  }
  return(
    <div className="mps">
      {loading ? 
        <div className='slider2'>
          Loading...
        </div> 
        : 
      <div>
        <div className='featured'>
          <div className='featuredItem'>
            <span className="featuredTitle">12-Month Historical Data</span>
            <div className='slider3'>
              <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} aria-label="simple table" style={{ width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Date</b></TableCell>
                    <TableCell>{keys[0]}</TableCell>
                    <TableCell>{keys[1]}</TableCell>
                    <TableCell>{keys[2]}</TableCell>
                    <TableCell>{keys[3]}</TableCell>
                    <TableCell>{keys[4]}</TableCell>
                    <TableCell>{keys[5]}</TableCell>
                    <TableCell>{keys[6]}</TableCell>
                    <TableCell>{keys[7]}</TableCell>
                    <TableCell>{keys[8]}</TableCell>
                    <TableCell>{keys[9]}</TableCell>
                    <TableCell>{keys[10]}</TableCell>
                    <TableCell>{keys[11]}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><b>Actual Demand</b></TableCell>
                    <TableCell>{values[0]}</TableCell>
                    <TableCell>{values[1]}</TableCell>
                    <TableCell>{values[2]}</TableCell>
                    <TableCell>{values[3]}</TableCell>
                    <TableCell>{values[4]}</TableCell>
                    <TableCell>{values[5]}</TableCell>
                    <TableCell>{values[6]}</TableCell>
                    <TableCell>{values[7]}</TableCell>
                    <TableCell>{values[8]}</TableCell>
                    <TableCell>{values[9]}</TableCell>
                    <TableCell>{values[10]}</TableCell>
                    <TableCell>{values[11]}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className='featured'>
          <div className='featuredItem'>
            <div className="featuredTitle">
              7-Month Period Forecast: <b>{strategyName}</b>
            </div>
            <div className='slider3'>
              <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} aria-label="simple table" style={{ width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Date</b></TableCell>
                    <TableCell>{keys[12]}</TableCell>
                    <TableCell>+1</TableCell>
                    <TableCell>+2</TableCell>
                    <TableCell>+3</TableCell>
                    <TableCell>+4</TableCell>
                    <TableCell>+5</TableCell>
                    <TableCell>+6</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><b>Forecasted Demand</b></TableCell>
                    <TableCell>{LRVal[0]}</TableCell>
                    <TableCell>{LRVal[1]}</TableCell>
                    <TableCell>{LRVal[2]}</TableCell>
                    <TableCell>{LRVal[3]}</TableCell>
                    <TableCell>{LRVal[4]}</TableCell>
                    <TableCell>{LRVal[5]}</TableCell>
                    <TableCell>{LRVal[6]}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Projected Balance</b> <i>20 in hand</i></TableCell>
                    <TableCell>{projected_balance[0]}</TableCell>
                    <TableCell>{projected_balance[1]}</TableCell>
                    <TableCell>{projected_balance[2]}</TableCell>
                    <TableCell>{projected_balance[3]}</TableCell>
                    <TableCell>{projected_balance[4]}</TableCell>
                    <TableCell>{projected_balance[5]}</TableCell>
                    <TableCell>{projected_balance[6]}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Master Production Schedule</b></TableCell>
                    <TableCell>{mps_data[0]}</TableCell>
                    <TableCell>{mps_data[1]}</TableCell>
                    <TableCell>{mps_data[2]}</TableCell>
                    <TableCell>{mps_data[3]}</TableCell>
                    <TableCell>{mps_data[4]}</TableCell>
                    <TableCell>{mps_data[5]}</TableCell>
                    <TableCell>{mps_data[6]}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className='slider3'>
          <ButtonGroup color="secondary" variant="contained" aria-label="outlined primary button group">
            <Button
              style={{
                backgroundColor: "#AD6ADF",
              }}
              onClick={() => {
                handleChange('Level Strategy')
              }}   
            >Level Strategy</Button>
            <Button
              style={{
                backgroundColor: "#AD6ADF",
              }}
              onClick={() => {
                handleChange('Chase Strategy')
              }}   
            >Chase Strategy</Button>
            <Button
              style={{
                backgroundColor: "#AD6ADF",
              }}
              onClick={() => {
                handleChange('Lot Size Strategy')
              }}   
            >Lot Size Strategy</Button>
          </ButtonGroup>
        </div>
      </div>}
    </div>
  )
}