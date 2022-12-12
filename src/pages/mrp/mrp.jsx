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
//import Tree, { withStyles } from 'react-vertical-tree'
import './mrp.css'

import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

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

const styles = {
    lines: {
      color: '#AD6ADF',
      height: '100px',
    },
    node: {
      backgroundColor: '#fff',
      border: '1px solid #000000',
    },
    text: {
      color: '#000000',
    }
}
//const StyledTree = withStyles(styles)(Tree)

export default function Mrp(){  
    const {dataAPI} = useFetch()
    if(dataAPI !== null){
        var keys = Object.keys(dataAPI)
        var values = Object.values(dataAPI)
        var nextMonth = keys[12]
        const maValue = ma(values, 2)
        console.log(maValue)
        var nextMonthForecast = maValue[11]
        var roundedForecast = parseInt(Math.ceil(nextMonthForecast / 10) * 10);
        var noOfParts = (roundedForecast)
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
    const [value, setValue] = React.useState(10);
    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
          setValue(newValue);
        }
    };
    const  data = [
        {id: 1, name: 'Pressure Vacuum Breaker : '+noOfParts, parent: null, children: [
            {id: 2, parent: {id: 1}, name: 'Canopy Screw : '+3*noOfParts, children: []},
            {id: 3, parent: {id: 1}, name: 'Canopy : '+noOfParts, children: []},
            {id: 4, parent: {id: 1}, name: 'Bonnet : '+noOfParts, children: []},
            {id: 5, parent: {id: 1}, name: 'Plastic Washer : '+noOfParts, children: []},
            {id: 6, parent: {id: 1}, name: 'O-Ring : '+noOfParts, children: []},
            {id: 8, parent: {id: 1}, name: 'Poppet Assembly', children: [
                {id: 9, parent: {id: 8}, name: 'Load Nut & Guide : '+noOfParts, children: []},
                {id: 10, parent: {id: 8}, name: 'Load Washer : '+noOfParts, children: []},
                {id: 11, parent: {id: 8}, name: 'Disc Upper : '+noOfParts, children: []},
                {id: 12, parent: {id: 8}, name: 'Poppet : '+noOfParts, children: []},
            ]},
            {id: 13, parent: {id: 1}, name: 'Spring : '+noOfParts, children: []},
            {id: 14, parent: {id: 1}, name: 'Spider Assembly', children: [
                {id: 15, parent: {id: 14}, name: 'Screw : '+noOfParts, children: []},
                {id: 16, parent: {id: 14}, name: 'Lower Disc : '+noOfParts, children: []},
                {id: 17, parent: {id: 14}, name: 'Guide Spider : '+noOfParts, children: []},
                {id: 18, parent: {id: 14}, name: 'Hex Nut : '+noOfParts, children: []},
            ]},
            {id: 19, parent: {id: 1}, name: 'Test Cock : '+2*noOfParts, children: []},
            {id: 20, parent: {id: 1}, name: 'Ball Valve 1/2" Tap : '+2*noOfParts, children: []},
            {id: 21, parent: {id: 1}, name: 'Ball Valve 3/4" Tap : '+2*noOfParts, children: []},
            {id: 22, parent: {id: 1}, name: 'Ball Valve 1" Tap : '+2*noOfParts, children: []},
        ]}
        ]      

        const StyledNode = styled.div`
            padding: 1px;
            border-radius: 8px;
            display: inline-block;
            border: 1px solid red;
        `;

    return(
        <div className="mrp">
            <div className='featureItem'>
                <div align='center'>
                    Month: <b>{nextMonth}</b><br/>
                    Forecasted Demand: <b>{nextMonthForecast}</b><br/>
                    Rounded Demand: <b>{roundedForecast}</b>
                </div>
            </div>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Product Structure Diagram</span>
                    <div>
                        {/*<StyledTree data={data} direction/>*/}
                    </div>
                </div>
            </div>
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
            <div className = "featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Forecast Period</span>
                    <Slider
                        value={value}
                        size="small"
                        min={1}
                        max={10}
                        defaultValue={1}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                        color="secondary"
                    />
                    <span className='slider2'>{value}</span>
                </div>
            </div>
            <Tree
                lineWidth={'2px'}
                lineColor={'green'}
                lineBorderRadius={'10px'}
                label={<StyledNode>Pressure Vacuum Breaker</StyledNode>}
            >
                <TreeNode label={<StyledNode>Canopy Screw{'\n'+noOfParts}</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Canopy</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Bonnet</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Plastic Washer</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>O-Ring</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Poppet Assembly</StyledNode>}>
                <TreeNode label={<StyledNode>Load Nut & Guide</StyledNode>} />
                <TreeNode label={<StyledNode>Load Washer</StyledNode>} />
                <TreeNode label={<StyledNode>Disc Upper</StyledNode>} />
                <TreeNode label={<StyledNode>Poppet</StyledNode>} />
                </TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>Child 1</StyledNode>}></TreeNode>
                
            </Tree>
        </div>
    )
}