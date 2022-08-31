import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Ordering.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import Autocomplete from '@mui/material/Autocomplete';

const optionsCountries = ['Singapore', 'Malaysia'];
const optionsItem = ['34-720A','950XL', '975XL2', 'RK1-720A','RK14-975XLC'];

export default function Ordering(){
    const handleSubmit = () => {
        console.log({value1},{value2},{valueCountry});
    }
    const [value1, setValue1] = React.useState('');
    const handleChange1 = (newValue) => {
        setValue1(newValue);
    };
    const [value2, setValue2] = React.useState('');
    const handleChange2 = (newValue) => {
        setValue2(newValue);
    };
    const [valueCountry, setValueCountry] = React.useState(optionsCountries[0]);
    const [inputValueCountry, setInputValueCountry] = React.useState('');

    const [valueItem, setValueItem] = React.useState(optionsItem[0]);
    const [inputValueItem, setInputValueItem] = React.useState('');
    return(
        <div className='ordering'>
            <div className='orderTitle'>Order Form</div>
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
                                defaultValue="+65 "
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
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                    label='Order Date'
                                    inputFormat="DD/MM/YYYY"
                                    value={value1}
                                    onChange={handleChange1}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                    label='Required Date'
                                    inputFormat="DD/MM/YYYY"
                                    value={value2}
                                    onChange={handleChange2}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
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
                                <Autocomplete
                                    value={valueCountry}
                                    onChange={(event, newValue) => {
                                        setValueCountry(newValue);
                                    }}
                                    inputValue={inputValueCountry}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValueCountry(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={optionsCountries}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Destination Country" />}
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Delivery Address Postal Code"
                                defaultValue=" "
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
                                <Autocomplete
                                    value={valueItem}
                                    onChange={(event, newValue) => {
                                        setValueItem(newValue);
                                    }}
                                    inputValue={inputValueItem}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValueItem(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={optionsItem}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Item Code" />}
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Delivery Address Postal Code"
                                defaultValue=" "
                                />
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
            <div className="slider2">
                <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
            </div>
            
        </div>
    )
}