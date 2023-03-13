import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react"
import './mrp.css'
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    sticky: {
      position: "sticky",
      left: 0,
      width: 400,
      background: 'white'
    },
    cellStyles: {
        width: 65
    }
});

function individalComponentMRP(onhand, demandList,lotsize, safetystock,orderList, leadtime, balanceList,multiplier){
    var balance = onhand
    var counter = 0 
    var incoming = false
    for (let i=0; i<demandList.length;i++){
        if (incoming === true){
            if(counter === leadtime){
                balance += lotsize
                //orderList.push('')
                incoming = false
            }
        }
        balance = balance - (multiplier*demandList[i])
        if (incoming === false){
            if (balance < safetystock){
                orderList.push(lotsize)
                counter = 0
                incoming = true
            }else{
                orderList.push('')
            }
        }else{
            if(counter === leadtime){
                balance += lotsize
                orderList.push('')
                incoming = false
            }else{
                orderList.push('')
            }
        }
        balanceList.push(balance)
        counter += 1
    }
}

export default function Mrp(){  
    const [buttonValue, setValue] = useState('BOM');
    const {dataAPI, loading} = useContext(UserContext)
    const {overridevalue1} = useContext(UserContext);
    const {overridevalue2} = useContext(UserContext);
    const {overridevalue3} = useContext(UserContext);
    const {overridevalue4} = useContext(UserContext);
    const {overridevalue5} = useContext(UserContext);
    const {overridevalue6} = useContext(UserContext);
    const {overridevalue7} = useContext(UserContext);
    const {dateList} = useContext(UserContext);
    if(dataAPI !== null){
        var LRVal = [overridevalue1,overridevalue2,overridevalue3,overridevalue4,overridevalue5,overridevalue6,overridevalue7]
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

    const classes = useStyles();
    return(
        <div className="mrp">
            {loading ? 
            <div className='slider3'>
                <div className='loader'/>
            </div> 
            : 
            <div>
                {(() => {
                    if (buttonValue === 'BOM') {
                        return (
                            <Box
                            sx={{
                                mt: 3,
                                mx: 2,
                                height: '80vh',
                                overflowX: "hidden",
                                borderRadius: '10px',
                                boxShadow: 3
                                }}
                            >
                            <div className='featured'>
                                <div className="featuredItem">
                                    <b>Item Code: </b><i>34-720A</i><br/>
                                    <b>Period: </b><i>{dateList[0]}</i><br/>
                                    <b>Quantity: </b><i>{noOfParts}</i><br/>
                                </div>
                            </div>
                            <div className="featured">
                                <div className="featuredItem">
                                    <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <span className="featuredTitle2"><b>Bill of Material</b></span>
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
                                                    <Box sx={{ml:'50px', fontFamily:'Arial',fontStyle:'italic'}}>
                                                        Load Nut & Guide, 721-90<br/>
                                                        Load Washer, 721-80<br/>
                                                        Disc Upper, 721A-34<br/>
                                                        Poppet, 721-30<br/>
                                                    </Box>
                                                </TableCell>
                                                <TableCell style={{ width: '50%' }}>
                                                    {noOfParts}
                                                    <Box sx={{fontFamily:'Arial',fontStyle:'italic',ml:'50px'}}>
                                                        {noOfParts}<br/>
                                                        {noOfParts}<br/>
                                                        {noOfParts}<br/>
                                                        {noOfParts}<br/>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" style={{ width: '50%' }}>
                                                    Spider Assembly, 721-310
                                                    <Box sx={{ml:'50px', fontFamily:'Arial',fontStyle:'italic'}}>
                                                        Screw, 721-11A<br/>
                                                        Lower Disc, 721B-34<br/>
                                                        Guide Spider, 721-31<br/>
                                                        Hex Nut, 721-9A<br/>
                                                    </Box>
                                                </TableCell>
                                                <TableCell style={{ width: '50%' }}>
                                                    {noOfParts}
                                                    <Box sx={{fontFamily:'Arial',fontStyle:'italic',ml:'50px'}}>
                                                        {noOfParts}<br/>
                                                        {noOfParts}<br/>
                                                        {noOfParts}<br/>
                                                        {noOfParts}<br/>
                                                    </Box>
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
                                </div>
                            </div>
                        </Box>
                        )
                    } else if (buttonValue === 'PDS'){
                        return (
                            <Box
                            sx={{
                                mt: 3,
                                mx: 2,
                                height: '80vh',
                                overflowX: "hidden",
                                borderRadius: '10px',
                                boxShadow: 3
                                }}
                            >
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
                            </Box>
                        )
                    } else if (buttonValue === 'Individual MRP'){
                        var dateInWeeks = []
                        var demandInWeeks = []
                        var counter = 2
                        var counterMonth = 1
                        for (let x = 0; x<30; x++){
                            if(x % 5 === 0){
                                dateInWeeks.push(dateList[counterMonth])
                                demandInWeeks.push(LRVal[counterMonth])
                                counterMonth += 1
                                counter = 2
                            }
                            else{
                                dateInWeeks.push(counter)
                                demandInWeeks.push(0)
                                counter += 1
                            }
                        }
                        console.log(dateInWeeks)
                        console.log(demandInWeeks)

                        const ORingSS = 1000
                        const ORingLot = 1200
                        const ORingLT = 1
                        const ORingMultiplier = 1
                        var ORingScheduledReceipts = []
                        var ORingBalanceList = []
                        individalComponentMRP(ORingSS, demandInWeeks,ORingLot, ORingSS,ORingScheduledReceipts, ORingLT, ORingBalanceList, ORingMultiplier)
                        console.log(ORingBalanceList)
                        console.log(ORingScheduledReceipts)

                        const BallValveLot = 3000
                        const BallValveLT = 3
                        const BallValveSS = 1800
                        const BallValveMultiplier = 2
                        var BallValveScheduledReceipts = []
                        var BallValveBalanceList = []
                        individalComponentMRP(BallValveSS, demandInWeeks,BallValveLot, BallValveSS,BallValveScheduledReceipts, BallValveLT, BallValveBalanceList, BallValveMultiplier)

                        const BoltLot = 2500
                        const BoltLT = 5
                        const BoltSS = 2200
                        const BoltMultiplier = 3
                        var BoltScheduledReceipts = []
                        var BoltBalanceList = []
                        individalComponentMRP(BoltSS, demandInWeeks,BoltLot, BoltSS,BoltScheduledReceipts, BoltLT, BoltBalanceList, BoltMultiplier)

                        return(
                            <div>
                                <Box
                                sx={{
                                    mt: 3,
                                    mx: 2,
                                    height: '80vh',
                                    width: '83vw',
                                    overflowX: "hidden",
                                    //overflowY: 'scroll',
                                    borderRadius: '10px',
                                    boxShadow: 3
                                    }}
                                >
                                <div className="featured">
                                    <div className='featuredItem3'>
                                        <div className={classes.sticky}>
                                            <span style={{fontSize: 20, paddingLeft:20, paddingTop:20}}>O-Ring, FDA </span><b><i>138N</i></b><br/>
                                            <span style={{fontSize: '75%', paddingLeft:20}}><i>({ORingLot}/lot, Lead Time = {ORingLT} weeks, Safety Stock = {ORingSS})</i></span>
                                        </div>
                                        <Table sx={{ width:"100%"}} aria-label="simple table" style={{ tableLayout: "fixed" }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Date</b></TableCell>
                                                    {dateInWeeks.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Forecasted Demand</b></TableCell>
                                                    {demandInWeeks.map((item,index)=>{
                                                        if(item !== 0){
                                                            return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                        }else{
                                                            return <TableCell className={classes.cellStyles} key={index}></TableCell>
                                                        }
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Scheduled Receipts</b></TableCell> 
                                                    {ORingScheduledReceipts.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}></TableCell>
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Projected Available Balance </b><span style={{fontSize: '75%'}}><i>On-Hand: {ORingSS}</i></span></TableCell>
                                                    {ORingBalanceList.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Planned Order Releases </b></TableCell>
                                                    {ORingScheduledReceipts.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="featured">
                                    <div className='featuredItem3'>
                                        <div className={classes.sticky}>
                                            <span style={{fontSize: 20, paddingLeft:20, paddingTop:20}}>Ball Valve, 3/4" </span><b><i>34-850</i></b><br/>
                                            <span style={{fontSize: '75%',paddingLeft:20}}><i>({BallValveLot}/lot, Lead Time = {BallValveLT} weeks, Safety Stock = {BallValveSS})</i></span>
                                        </div>
                                        <Table sx={{ width:"100%"}} aria-label="simple table" style={{ tableLayout: "fixed" }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Date</b></TableCell>
                                                    {dateInWeeks.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Forecasted Demand</b></TableCell>
                                                    {demandInWeeks.map((item,index)=>{
                                                        if(item !== 0){
                                                            return <TableCell className={classes.cellStyles} key={index}>{2*item}</TableCell>
                                                        }else{
                                                            return <TableCell className={classes.cellStyles} key={index}></TableCell>
                                                        }
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Scheduled Receipts</b></TableCell>
                                                    {demandInWeeks.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}></TableCell>
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Projected Available Balance </b><span style={{fontSize: '75%'}}><i>On-Hand: {BallValveSS}</i></span></TableCell>
                                                    {BallValveBalanceList.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Planned Order Releases </b></TableCell>
                                                    {BallValveScheduledReceipts.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="featured">
                                    <div className='featuredItem3'>
                                        <div className={classes.sticky}>
                                            <span style={{fontSize: 20, paddingLeft:20, paddingTop:20}}>Bolt, 8-32 x 3/8 Fil. SS </span><b><i>721-11</i></b><br/>
                                            <span style={{fontSize: '75%',paddingLeft:20}}><i>({BoltLot}/lot, Lead Time = {BoltLT} weeks, Safety Stock = {BoltSS})</i></span>
                                        </div>
                                        <Table sx={{ width:"100%"}} aria-label="simple table" style={{ tableLayout: "fixed" }}>
                                            <TableHead>
                                                <TableRow>
                                                <TableCell className={classes.sticky}><b>Date</b></TableCell>
                                                {dateInWeeks.map((item,index)=>{
                                                    return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                })}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Forecasted Demand</b></TableCell>
                                                    {demandInWeeks.map((item,index)=>{
                                                        if(item !== 0){
                                                            return <TableCell className={classes.cellStyles} key={index}>{3*item}</TableCell>
                                                        }else{
                                                            return <TableCell className={classes.cellStyles} key={index}></TableCell>
                                                        }
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Scheduled Receipts</b></TableCell>
                                                    {demandInWeeks.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}></TableCell>
                                                        
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.sticky}><b>Projected Available Balance </b><span style={{fontSize: '75%'}}><i>On-Hand: {BoltSS}</i></span></TableCell>
                                                    {BoltBalanceList.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
                                                </TableRow>
                                            </TableBody>
                                            <TableBody>
                                                <TableRow>
                                                <TableCell className={classes.sticky}><b>Planned Order Releases</b></TableCell>
                                                    {BoltScheduledReceipts.map((item,index)=>{
                                                        return <TableCell className={classes.cellStyles} key={index}>{item}</TableCell>
                                                    })}
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