import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './mrp.css'

function createData(name, calories) {
    return { name, calories};
}

export default function Mrp(){  
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