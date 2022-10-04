import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider'
import { useEffect, useState } from "react"
import {ma} from 'moving-averages';
import './mrp.css'

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

function createData(name, calories) {
    return { name, calories};
}

export default function Mrp(){  
    const [message, setMessage] = React.useState('0');
    const handleChangeFour = event => {
        setMessage(event.target.value);
    };
    const {dataAPI} = useFetch()
    if(dataAPI !== null){
        var keys = Object.keys(dataAPI)
        var values = Object.values(dataAPI)
        var nextMonth = keys[12]
        const maValue = ma(values, 2)
        console.log(maValue)
        var nextMonthForecast = maValue[11]
        var roundedForecast = parseInt(Math.ceil(nextMonthForecast / 10) * 10);
        var noOfParts = (roundedForecast*5)
        console.log(noOfParts)
    };
    var rows = [
        createData('721A-12', noOfParts),
        createData('138N', noOfParts),
        createData('721-33', noOfParts),
        createData('721-300', noOfParts),
        createData('721-310', noOfParts),
        createData('RK1-720', noOfParts),
        createData('IS720', noOfParts),
        createData('9B5X7', noOfParts),
    ];
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
    return(
        <div className="mrp">
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">No. of Units</span>
                    <div className="slider2">    
                        <input
                            type="text"
                            id="message"
                            onChange={handleChangeFour}
                            name="message"
                            value={message}
                            autoComplete="off"
                        />
                    </div>
                    Month: <b>{nextMonth}</b><br/>
                    Forecasted Demand: <b>{nextMonthForecast}</b><br/>
                    Rounded Demand: <b>{roundedForecast}</b>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Forecasted Required Component Quantity</span>
                    <div className="slider2">
                        <TableContainer component={Paper} align='center'>
                            <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} aria-label="simple table" style={{ width: '80%' }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Part No.</TableCell>
                                        <TableCell>Quantity , <i>5/unit</i></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row" style={{ width: '5%' }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell style={{ width: '20%' }}>{row.calories}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
            <div className = "featured">
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
        </div>
    )
}