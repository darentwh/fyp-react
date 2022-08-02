import * as React from 'react'
import Architecutre from "./architecture.png"
import './Architecture.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat) {
    return { name, calories, fat};
}
  
const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
];

export default function Architecture(){
    return(
        <div className="architecture">
            <div className="mainWrapper">
                <div className="imageStyle">
                    <img src={Architecutre} alt="fireSpot" width={'100%'}/>
                </div>
                <TableContainer component={Paper} align='center'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ width: '80%' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Component</TableCell>
                                <TableCell>Resource</TableCell>
                                <TableCell>Usage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.calories}</TableCell>
                            <TableCell>{row.fat}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}