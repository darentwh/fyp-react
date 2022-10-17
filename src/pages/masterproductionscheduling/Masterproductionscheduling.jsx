import React from 'react'
import './Masterproductionscheduling.css'
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
                    <TableCell><b>Order</b></TableCell>
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
            <span className="featuredTitle">7-Month Period Forecast</span>
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
                    <TableCell><b>Projected Balance | 20</b></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Master Production Schedule</b></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>}
        
    </div>
  )
}