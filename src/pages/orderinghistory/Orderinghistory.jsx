import * as React from 'react'
import { useEffect, useState } from "react"
import './Orderinghistory.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect((url = "https://rtcbcz6encwcuxtjnq4mfxz3dy0cauth.lambda-url.us-east-1.on.aws/") => {
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

export default function Orderinghistory(){
    
    const {data,loading} = useFetch()
    return(
        <div className='orderinghistory'>
            <div>
            {loading ? 
                <div className='slider3'>
                    <div className='loader'/>
                </div> 
                : 
                <div className='slider3'>
                    <TableContainer component={Paper} align='center'>
                        <Table sx={{ minWidth: "100%" , maxWidth:"100%"}} aria-label="simple table" style={{ width: '80%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Customer</b></TableCell>
                                    <TableCell><b>Contact No.</b></TableCell>
                                    <TableCell><b>Order Date</b></TableCell>
                                    <TableCell><b>Receive Date</b></TableCell>
                                    <TableCell><b>Destination</b></TableCell>
                                    <TableCell><b>Delivery Address</b></TableCell>
                                    <TableCell><b>Component</b></TableCell>
                                    <TableCell><b>Quantity</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((items,index) => {
                                    return(
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell>{items.Customer}</TableCell>
                                        <TableCell>{items.ContactNumber}</TableCell>
                                        <TableCell>{items.DateOfOrder}</TableCell>
                                        <TableCell>{items.DateOfReceiving}</TableCell>
                                        <TableCell>{items.Country}</TableCell>
                                        <TableCell>{items.PostalCode}</TableCell>
                                        <TableCell>{items.ItemCode}</TableCell>
                                        <TableCell>{items.Quantity}</TableCell>
                                    </TableRow>
                                    )    
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>}
            </div>
        </div>
    )
}