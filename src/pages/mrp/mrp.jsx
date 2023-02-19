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
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse } from '@material-ui/core';

export default function Mrp(){  
    const [buttonValue, setValue] = useState('BOM');
    const {dataAPI, loading} = useContext(UserContext)
    const {overridevalue1} = useContext(UserContext);
    const [open, setOpen] = React.useState(true);
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
        var noOfParts = (overridevalue1)
        console.log(noOfParts)
    };

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
                        Override Forecasted Demand: <b>{overridevalue1}</b>
                    </div>
                </div>
                {(() => {
                    if (buttonValue === 'BOM') {
                        return (
                            <div className="featured">
                                <div className="featuredItem">
                                    <span className="featuredTitle"><b>Bill of Material</b></span>
                                    <div>
                                        <TableContainer component={Paper} align='center' sx={{height:'50vh', minWidth:'100%', my:5}}>
                                            <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} stickyHeader aria-label="sticky table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left"><b>Part No.</b></TableCell>
                                                        <TableCell><b>Quantity Required</b></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Poppet Assembly, 721-310
                                                            <IconButton
                                                                aria-label="expand row"
                                                                size="small"
                                                                onClick={() => setOpen(!open)}
                                                            >
                                                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                            </IconButton>
                                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                                <Box sx={{ml:'50px', fontFamily:'Arial',fontStyle:'italic'}}>
                                                                    Load Nut & Guide, 721-90<br/>
                                                                    Load Washer, 721-80<br/>
                                                                    Disc Upper, 721A-34<br/>
                                                                    Poppet, 721-30<br/>
                                                                </Box>
                                                            </Collapse>
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts}
                                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                                <Box sx={{fontFamily:'Arial',fontStyle:'italic',ml:'50px'}}>
                                                                    {noOfParts}<br/>
                                                                    {noOfParts}<br/>
                                                                    {noOfParts}<br/>
                                                                    {noOfParts}<br/>
                                                                </Box>
                                                            </Collapse>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Spider Assembly, 721-310
                                                            <IconButton
                                                                aria-label="expand row"
                                                                size="small"
                                                                onClick={() => setOpen(!open)}
                                                            >
                                                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                            </IconButton>
                                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                                <Box sx={{ml:'50px', fontFamily:'Arial',fontStyle:'italic'}}>
                                                                    Screw, 721-11A<br/>
                                                                    Lower Disc, 721B-34<br/>
                                                                    Guide Spider, 721-31<br/>
                                                                    Hex Nut, 721-9A<br/>
                                                                </Box>
                                                            </Collapse>
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts}
                                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                                <Box sx={{fontFamily:'Arial',fontStyle:'italic',ml:'50px'}}>
                                                                    {noOfParts}<br/>
                                                                    {noOfParts}<br/>
                                                                    {noOfParts}<br/>
                                                                    {noOfParts}<br/>
                                                                </Box>
                                                            </Collapse>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Canopy Screw, 721-11
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts*3}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Canopy, 721-3
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Bonnet, 721-20
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Plastic Wasber, 721A-12
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            O-Ring, WK-138N
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Spring, 721-33
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Test Cock, 18-860XL
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts*2}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Ball Valve 1/2" Tap, 12-850T
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts*2}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Ball Valve 3/4" Tap, 34-850T
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts*2}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                            Ball Valve 1" Tap, 1-850T
                                                        </TableCell>
                                                        <TableCell style={{ width: '50%' }}>
                                                            {noOfParts*2}
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (buttonValue === 'PDS'){
                        return (
                            <div className='featured'>
                                <div className="featuredItem2">
                                    <span className="featuredTitle"><b>Product Structure Diagram</b></span>
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
                    } else if (buttonValue === 'Individual MRP'){
                        //TODO logic for O-Ring lot sizing, Planned Order etc
                        const ORingLot = 100
                        const oringbalanceValue = 50
                        var ORingBalance = oringbalanceValue 
                        var ORingScheduledReceipts = []
                        var ORingBalanceList = []
                        var ORingDemand = [overridevalue1,LRVal[1],LRVal[2],LRVal[3],LRVal[4],LRVal[5],LRVal[6]]
                        console.log(ORingBalance)
                        console.log(ORingDemand)
                        for (let i = 0; i < 7; i++) { 
                            var count = 1
                            if(ORingBalance < ORingDemand[i]){
                                ORingBalance = ORingBalance + ORingLot - ORingDemand[i]
                                if (ORingBalance > 0){
                                    ORingScheduledReceipts.push(ORingLot)
                                    ORingBalanceList.push(ORingBalance)
                                } else{
                                    while (ORingBalance < 0){
                                        ORingBalance = ORingBalance + ORingLot
                                        count += 1
                                    }

                                    ORingScheduledReceipts.push(ORingLot*count)
                                    ORingBalanceList.push(ORingBalance)
                                }
                            }else{
                                ORingScheduledReceipts.push(0)
                                ORingBalance = ORingBalance - ORingDemand[i]
                                ORingBalanceList.push(ORingBalance)
                            }
                        }
                        console.log(ORingScheduledReceipts)
                        console.log(ORingBalanceList)
                        return(
                            <div>
                                <Box
                                sx={{
                                    mt: 3,
                                    mx: 2,
                                    height: '70vh',
                                    overflowX: "scroll",
                                    borderRadius: '10px',
                                    boxShadow: 3
                                    }}
                                >
                                <div className="featured">
                                    <div className='featuredItem'>
                                        <div className='featuredTitle'>
                                            O-Ring, FDA <b><i>138N</i></b><span style={{fontSize: '75%'}}><i>(100/lot)</i></span>
                                        </div>
                                        <Table sx={{ width:"100%"}} aria-label="simple table">
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
                                                    <TableCell>{overridevalue1}</TableCell>
                                                    <TableCell>{LRVal[1]}</TableCell>
                                                    <TableCell>{LRVal[2]}</TableCell>
                                                    <TableCell>{LRVal[3]}</TableCell>
                                                    <TableCell>{LRVal[4]}</TableCell>
                                                    <TableCell>{LRVal[5]}</TableCell>
                                                    <TableCell>{LRVal[6]}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Scheduled Receipts</b></TableCell> 
                                                    <TableCell>{ORingScheduledReceipts[0]}</TableCell>
                                                    <TableCell>{ORingScheduledReceipts[1]}</TableCell>
                                                    <TableCell>{ORingScheduledReceipts[2]}</TableCell>
                                                    <TableCell>{ORingScheduledReceipts[3]}</TableCell>
                                                    <TableCell>{ORingScheduledReceipts[4]}</TableCell>
                                                    <TableCell>{ORingScheduledReceipts[5]}</TableCell>
                                                    <TableCell>{ORingScheduledReceipts[6]}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Projected Available Balance </b><span style={{fontSize: '75%'}}><i>On-Hand: {oringbalanceValue}</i></span></TableCell>
                                                    <TableCell>{ORingBalanceList[0]}</TableCell>
                                                    <TableCell>{ORingBalanceList[1]}</TableCell>
                                                    <TableCell>{ORingBalanceList[2]}</TableCell>
                                                    <TableCell>{ORingBalanceList[3]}</TableCell>
                                                    <TableCell>{ORingBalanceList[4]}</TableCell>
                                                    <TableCell>{ORingBalanceList[5]}</TableCell>
                                                    <TableCell>{ORingBalanceList[6]}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Planned Order Releases</b></TableCell>
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
                                <div className="featured">
                                    <div className='featuredItem'>
                                        <div className='featuredTitle'>
                                            Ball Valve, 3/4" <b><i>34-850</i></b>
                                        </div>
                                        <Table sx={{ width:"100%"}} aria-label="simple table">
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
                                                    <TableCell>{2*overridevalue1}</TableCell>
                                                    <TableCell>{2*LRVal[1]}</TableCell>
                                                    <TableCell>{2*LRVal[2]}</TableCell>
                                                    <TableCell>{2*LRVal[3]}</TableCell>
                                                    <TableCell>{2*LRVal[4]}</TableCell>
                                                    <TableCell>{2*LRVal[5]}</TableCell>
                                                    <TableCell>{2*LRVal[6]}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Scheduled Receipts</b></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Projected Available Balance</b></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Planned Order Releases</b></TableCell>
                                                    <TableCell></TableCell>
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
                                <div className="featured">
                                    <div className='featuredItem'>
                                        <div className='featuredTitle'>
                                            Bolt, 8-32 x 3/8 Fil. SS <b><i>721-11</i></b>
                                        </div>
                                        <Table sx={{ width:"100%"}} aria-label="simple table">
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
                                                    <TableCell>{3*overridevalue1}</TableCell>
                                                    <TableCell>{3*LRVal[1]}</TableCell>
                                                    <TableCell>{3*LRVal[2]}</TableCell>
                                                    <TableCell>{3*LRVal[3]}</TableCell>
                                                    <TableCell>{3*LRVal[4]}</TableCell>
                                                    <TableCell>{3*LRVal[5]}</TableCell>
                                                    <TableCell>{3*LRVal[6]}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Scheduled Receipts</b></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Projected Available Balance</b></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><b>Planned Order Releases</b></TableCell>
                                                    <TableCell></TableCell>
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
                                </Box>
                            </div>
                        )
                    }
                })()}
                <div className='slider4'>
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
                        <Button
                        style={{
                            backgroundColor: "#AD6ADF",
                        }}
                        onClick={() => {
                            setValue('Individual MRP')
                        }}
                        >Individual Components</Button>
                    </ButtonGroup>
                </div>
            </div>}
        </div>
    )
}