import * as React from 'react'
import './Ordering.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Ordering(){
    const handleSubmit = () => {
        console.log('ok');
    }
    return(
        <div className='ordering'>
            <div className='featured2'>Ordering Form</div>
            <div className='featuredItem'>
                <div className='featured2'>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Customer Name"
                                defaultValue=" "
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Contact Number"
                                defaultValue="+65 999"
                                />
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Order Date"
                                defaultValue=" "
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Required Date"
                                defaultValue=" "
                                />
                            </div>
                        </Box>
                    </div>
                    <div>
                        test2
                    </div>
                </div>
            </div>
            <div className="slider2">
                <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
            </div>
            
        </div>
    )
}