import * as React from 'react'
import './Forecasting.css'
import Slider from '@mui/material/Slider'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories) {
    return { name, calories};
}

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
    const [message, setMessage] = React.useState('0');
    const handleChangeFour = event => {
        setMessage(event.target.value);
    };
    var noOfUnits = parseInt(message)
    var noOfScrews = (noOfUnits*5)
    var noOfBricks = (noOfUnits*10)
    var noOfGears = (noOfUnits*12)
    var noOfChains = (noOfUnits*2)
    var noOfGold = (noOfUnits/4)
    var rows = [
        createData('🔩 Screw(s)', noOfScrews),
        createData('🧱 Brick(s)', noOfBricks),
        createData('⚙️ Gear(s)', noOfGears),
        createData('🔗 Chain(s)', noOfChains),
        createData('🏆 Gold', noOfGold),
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
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Required Quantity</span>
                    <div className="slider2">
                        <TableContainer component={Paper} align='center'>
                            <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} aria-label="simple table" style={{ width: '80%' }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Component</TableCell>
                                        <TableCell>Quantity</TableCell>
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
        </div>
    )
}