import * as React from 'react'
import {useEffect} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Ordering.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import Autocomplete from '@mui/material/Autocomplete';

const optionsCountries = ['Singapore'];
const optionsItem = ['34-720A'];

export default function Ordering(){
    
    function callApi() {
        if (ifFalse === false){
            var requestOptions = {
                method: 'PUT',
                body: JSON.stringify({customerName:{valueName},
                    contactNumber:{valueContactNumber},
                    dateOrder:{value1},
                    dateReceive:{value2},
                    deliveryCountry:{valueCountry},
                    deliveryAddress:{valuePostalCode},
                    item:{valueItem},
                    quantity:{valueQuantity}
                })
            }
            fetch('https://rtcbcz6encwcuxtjnq4mfxz3dy0cauth.lambda-url.us-east-1.on.aws/', requestOptions) //API destination
            .then(data => data.json()) // Parsing the data into a JavaScript object
            .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
        }
    }
    const handleSubmit = () => {
        console.log({customerName:{valueName},contactNumber:{valueContactNumber},dateOrder:{value1},dateReceive:{value2},deliveryCountry:{valueCountry},deliveryAddress:{valuePostalCode},item:{valueItem},quantity:{valueQuantity}});
        callApi()
    }
    const [value1, setValue1] = React.useState('');
    const handleChange1 = (newValue) => {
        setValue1(newValue);
    };
    const [value2, setValue2] = React.useState('');
    const handleChange2 = (newValue) => {
        setValue2(newValue);
    };
    const [valueName, setValueName] = React.useState(null);
    const [valueContactNumber, setValueContactNumber] = React.useState(null);
    const [valueQuantity, setValueQuantity] = React.useState(null);
    const [valuePostalCode, setValuePostalCode] = React.useState(null);
    const [valueCountry, setValueCountry] = React.useState(optionsCountries[0]);
    const [inputValueCountry, setInputValueCountry] = React.useState(optionsCountries[0]);
    const [valueItem, setValueItem] = React.useState(optionsItem[0]);
    const [inputValueItem, setInputValueItem] = React.useState(optionsCountries[0]);
    const [ifFalse, setIfFalse] = React.useState(true)
    
    useEffect(()=>{
        if (valueName && valueContactNumber && value1 && value2 && valueCountry && valuePostalCode && valueQuantity && valueItem  !== (null || '')) {
            setIfFalse(false);
        }
        else{
            setIfFalse(true);
        }
    }, [valueName , valueContactNumber , value1 , value2 , valueCountry , valuePostalCode , valueItem , valueQuantity])

    return(
        <div className='ordering'>
            <div className='orderTitle'>Order Form</div>
            <div className='featuredItem'>
                <div className='featured2'>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: 'fit-content(25%)' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Customer Name"
                                value={valueName}
                                onChange={(event) => {setValueName(event.target.value)}}
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Contact Number"
                                value={valueContactNumber}
                                onChange={(event) => {setValueContactNumber(event.target.value)}}
                                />
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: 'fit-content(25%)' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        disablePast
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
                                        disablePast
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
                                '& .MuiTextField-root': { m: 1, width: 'fit-content(25%)' },
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
                                    sx={{ width: '90%' }}
                                    renderInput={(params) => <TextField {...params} label="Destination Country" />}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Delivery Address Postal Code"
                                    value={valuePostalCode}
                                    onChange={(event) => {setValuePostalCode(event.target.value)}}
                                />
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: 'fit-content(25%)' },
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
                                    sx={{ width: '90%' }}
                                    renderInput={(params) => <TextField {...params} label="Item Code" />}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Item Quantity"
                                    value={valueQuantity}
                                    onChange={(event) => {setValueQuantity(event.target.value)}}
                                />
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="submitButton">
                    <Button variant="outlined" disabled={ifFalse} onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    )
}