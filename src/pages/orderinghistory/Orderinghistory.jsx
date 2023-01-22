import * as React from 'react'
import { useEffect, useState } from "react"
import './Orderinghistory.css'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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

const columns = [
{
    field: 'OrderID',
    headerName: 'OrderID',
    flex: 1,
    editable: true,
    sortable: false, 
},
{
    field: 'Customer',
    headerName: 'Customer',
    description: 'This column has a value getter and is not sortable.',
    flex: 1,
    editable: true,
},
{
    field: 'ContactNumber',
    headerName: 'Contact Number',
    flex: 1,
    editable: true,
},
{
    field: 'DateOfOrder',
    headerName: 'Date of Order',
    flex: 1,
    editable: true,
},
{
    field: 'DateOfReceiving',
    headerName: 'Date of Receiving',
    flex: 1,
    editable: true,
},
{
    field: 'ItemCode',
    headerName: 'Item Code',
    flex: 1,
    editable: true,
},
{
    field: 'Country',
    headerName: 'Country',
    flex: 1,
    editable: true,
},
{
    field: 'PostalCode',
    headerName: 'Postal Code',
    flex: 1,
    editable: true,
    type: 'number',
},
{
    field: 'Quantity',
    headerName: 'Quantity',
    flex: 1,
    editable: true,
    type: 'number',
},
];

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
                <div className='sliderWrapper'>
                    <div className='slider3'>
                        <Box sx={{ height: '85vh', width: '95%' }}>
                            <DataGrid
                                rows={data}
                                getRowId={(row) => row.OrderID}
                                columns={columns}
                                pageSize={15}
                                getRowHeight={() => 'auto'}
                                checkboxSelection
                                disableSelectionOnClick
                                experimentalFeatures={{ newEditingApi: true }}
                            />
                        </Box>
                    </div>
                </div>}
            </div>
        </div>
    )
}