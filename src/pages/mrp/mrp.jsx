import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react"
import './mrp.css'
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';

function createData(name, calories) {
    return { name, calories};
}

export default function Mrp(){  
    const [buttonValue, setValue] = useState('BOM');
    //const {data,loading} = useFetch()
    const {dataAPI, loading} = useContext(UserContext)
    const {overridevalue} = useContext(UserContext);
    if(dataAPI !== null){
        var keys = Object.keys(dataAPI)
        var values = Object.values(dataAPI)
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
        var nextMonth = keys[12]
        var nextMonthForecast = LRVal[0]
        var noOfParts = (overridevalue)
        console.log(noOfParts)
    };
    var rows = [
        createData('Canopy Screw, 721-11', 3*noOfParts),
        createData('Canopy, 721-3', noOfParts),
        createData('Bonnet, 721-20', noOfParts),
        createData('Plastic Washer, 721A-12', noOfParts),
        createData('O-Ring, WK-138N', noOfParts),
        createData('Load Nut & Guide, 721-90', noOfParts),
        createData('Load Washer, 721-80', noOfParts),
        createData('Disc Upper, 721A-34', noOfParts),
        createData('Poppet, 721-30', noOfParts),
        createData('Spring, 721-33', noOfParts),
        createData('Screw, 721-11A', noOfParts),
        createData('Lower Disc, 721B-34', noOfParts),
        createData('Guide Spider, 721-31', noOfParts),
        createData('Hex Nut, 721-9A', noOfParts),
        createData('Test Cock, 18-860XL', 2*noOfParts),
        createData('Ball Valve 1/2" Tap, 12-850T', 2*noOfParts),
        createData('Ball Valve 3/4" Tap, 34-850T', 2*noOfParts),
        createData('Ball Valve 1" Tap, 1-850T', 2*noOfParts),
        createData('Poppet Assembly, 721-300', noOfParts),
        createData('Spider Assembly, 721-310', noOfParts),
    ];

    const StyledNodeTitle = styled.div`
        border-radius: 5px;
        display: inline-block;
        border: 1px solid purple;
        border-width: auto;
        font-size: 12px;
        font-weight: bold;
    `;

    const StyledNode = styled.div`
        border-radius: 5px;
        display: inline-block;
        border: 1px solid purple;
        border-width: auto;
        font-size: 12px;
    `;

    return(
        <div className="mrp">
            {loading ? 
            <div className='slider3'>
                <div className='loader'/>
            </div> 
            : 
            <div>
                <div className='featured'>
                    <div className="featuredItem">
                        Item Code: <b>34-720A</b><br/>
                        Month: <b>{nextMonth}</b><br/>
                        Forecasted Demand: <b>{nextMonthForecast}</b><br/>
                        Override Forecasted Demand: <b>{overridevalue}</b>
                    </div>
                </div>
                {(() => {
                    if (buttonValue === 'BOM') {
                        return (
                            <div className="featured">
                                <div className="featuredItem">
                                <span className="featuredTitle">Bill of Material</span>
                                <div className="slider2">
                                    <div className='tableContainer'>
                                        <TableContainer component={Paper} align='center'>
                                            <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} aria-label="simple table" style={{ width: '80%' }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left"><b>Part No.</b></TableCell>
                                                        <TableCell><b>Quantity Required</b></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell component="th" scope="row" style={{ width: '10%' }}>
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell style={{ width: '5%' }}>{row.calories}</TableCell>
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
                    } else if (buttonValue === 'PDS'){
                        return (
                            <div className='featured'>
                                <div className="featuredItem2">
                                    <span className="featuredTitle">Product Structure Diagram</span>
                                    <div className="TreePositioning">
                                        <Tree
                                            lineWidth={'2px'}
                                            lineColor={'purple'}
                                            lineBorderRadius={'5px'}
                                            label={<StyledNodeTitle>Pressure Vacuum Breaker 34-720A :{'\n'+noOfParts}</StyledNodeTitle>}
                                        >
                                            <TreeNode label={<StyledNode>Canopy Screw{'\n'+3*noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Canopy{'\n'+noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Bonnet{'\n'+noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Plastic Washer{'\n'+noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>O-Ring{'\n'+noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Poppet Assembly{'\n'+noOfParts}</StyledNode>}>
                                            <TreeNode label={<StyledNode>Load Nut & Guide{'\n'+noOfParts}</StyledNode>} />
                                            <TreeNode label={<StyledNode>Load Washer{'\n'+noOfParts}</StyledNode>} />
                                            <TreeNode label={<StyledNode>Disc Upper{'\n'+noOfParts}</StyledNode>} />
                                            <TreeNode label={<StyledNode>Poppet{'\n'+noOfParts}</StyledNode>} />
                                            </TreeNode>
                                            <TreeNode label={<StyledNode>Spring{'\n'+noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Spider Assembly{'\n'+noOfParts}</StyledNode>}>
                                            <TreeNode label={<StyledNode>Screw{'\n'+noOfParts}</StyledNode>} />
                                            <TreeNode label={<StyledNode>Lower Disc{'\n'+noOfParts}</StyledNode>} />
                                            <TreeNode label={<StyledNode>Guide Spider{'\n'+noOfParts}</StyledNode>} />
                                            <TreeNode label={<StyledNode>Hex Nut{'\n'+noOfParts}</StyledNode>} />
                                            </TreeNode>
                                            <TreeNode label={<StyledNode>Test Cock{'\n'+2*noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Ball Valve 1/2" Tap{'\n'+2*noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Ball Valve 3/4" Tap{'\n'+2*noOfParts}</StyledNode>}></TreeNode>
                                            <TreeNode label={<StyledNode>Ball Valve 1" Tap{'\n'+2*noOfParts}</StyledNode>}></TreeNode>
                                        </Tree>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })()}
                <div className='featured'>
                    <div className='slider3'>
                        <ButtonGroup color="secondary" variant="contained" aria-label="outlined primary button group">
                            <Button
                            style={{
                                backgroundColor: "#AD6ADF",
                            }}   
                            onClick={() => {
                                setValue('BOM')
                            }}
                            >Bill of Materials</Button>
                            <Button
                            style={{
                                backgroundColor: "#AD6ADF",
                            }}
                            onClick={() => {
                                setValue('PDS')
                            }}
                            >Product Diagram Structure</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>}
        </div>
    )
}